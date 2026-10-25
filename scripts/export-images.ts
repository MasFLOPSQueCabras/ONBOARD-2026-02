import { execSync, spawn } from "node:child_process";
import { mkdirSync, existsSync, rmSync, copyFileSync } from "node:fs";
import { cpus } from "node:os";
import { resolve, dirname } from "node:path";

async function main() {
  console.log("🚀 Starting High-Resolution Slide Image Capture & ZIP Bundling...");

  const targetUrl = process.env.TARGET_URL || "http://localhost:5173/";
  const tempDir = resolve(process.cwd(), ".temp_slides");
  const publicPdfPath = resolve(process.cwd(), "public/exports/presentation.pdf");
  const publicZipPath = resolve(process.cwd(), "public/exports/presentation-slides.zip");
  const distZipPath = resolve(process.cwd(), "dist/exports/presentation-slides.zip");

  mkdirSync(dirname(publicZipPath), { recursive: true });
  if (existsSync(tempDir)) {
    rmSync(tempDir, { recursive: true, force: true });
  }
  mkdirSync(tempDir, { recursive: true });

  const pdftoppmPath = existsSync("/usr/bin/pdftoppm") ? "/usr/bin/pdftoppm" : null;

  if (pdftoppmPath) {
    // Fast path: Ensure vector PDF exists, then extract pages in parallel
    if (!existsSync(publicPdfPath)) {
      console.log("Vector PDF not found, generating PDF first...");
      execSync("bun run export:pdf", { stdio: "inherit" });
    }

    let totalPages = 1;
    try {
      const pdfinfoOut = execSync(`pdfinfo "${publicPdfPath}"`).toString();
      const match = pdfinfoOut.match(/Pages:\s+(\d+)/);
      if (match) {
        totalPages = Number.parseInt(match[1], 10);
      }
    } catch {
      // fallback
    }

    const dpi = process.env.DPI || "300";
    const workerCount = Math.max(1, Math.min(cpus().length, 16));
    const chunkSize = Math.ceil(totalPages / workerCount);
    console.log(
      `Extracting ${totalPages} slide pages in parallel using ${workerCount} worker threads (${dpi} DPI)...`,
    );

    const promises: Promise<void>[] = [];
    for (let i = 0; i < workerCount; i++) {
      const start = i * chunkSize + 1;
      const end = Math.min((i + 1) * chunkSize, totalPages);
      if (start > totalPages) break;

      promises.push(
        new Promise((res, rej) => {
          const proc = spawn(pdftoppmPath, [
            "-png",
            "-r",
            dpi,
            "-f",
            String(start),
            "-l",
            String(end),
            publicPdfPath,
            `${tempDir}/slide_${String(i).padStart(2, "0")}`,
          ]);
          proc.on("exit", (code) => {
            if (code === 0) res();
            else rej(new Error(`pdftoppm exited with code ${code}`));
          });
          proc.on("error", rej);
        }),
      );
    }

    await Promise.all(promises);
  } else {
    // Fallback path: Headless Chrome screenshots
    const chromePath =
      process.env.CHROME_BIN ||
      ["/usr/bin/google-chrome-stable", "/usr/bin/google-chrome", "/usr/bin/chromium"].find(
        existsSync,
      ) ||
      "google-chrome";

    const TOTAL_SLIDES = process.env.TOTAL_SLIDES
      ? Number.parseInt(process.env.TOTAL_SLIDES, 10)
      : 11;
    console.log(`Exporting ${TOTAL_SLIDES} primary slides at 3840x2160 resolution via Chrome...`);

    for (let i = 0; i < TOTAL_SLIDES; i++) {
      const slideNumber = String(i + 1).padStart(2, "0");
      const slideUrl = `${targetUrl}#/${i}`;
      const outImagePath = resolve(tempDir, `slide-${slideNumber}.png`);

      console.log(`  📸 Capturing slide ${slideNumber} (${slideUrl})...`);

      execSync(
        `"${chromePath}" --headless=new --disable-gpu --no-sandbox --window-size=3840,2160 --virtual-time-budget=2000 --screenshot="${outImagePath}" "${slideUrl}"`,
        { stdio: "ignore" },
      );
    }
  }

  // Bundle captured images into ZIP archive with fast compression
  console.log(`📦 Packaging captured images into ${publicZipPath}...`);
  if (existsSync(publicZipPath)) {
    rmSync(publicZipPath);
  }

  execSync(`zip -q -j -1 "${publicZipPath}" "${tempDir}"/*.png`, { stdio: "ignore" });

  if (existsSync(dirname(distZipPath))) {
    copyFileSync(publicZipPath, distZipPath);
    console.log(`✅ Mirrored to production distribution: ${distZipPath}`);
  }

  // Clean up temporary screenshots
  rmSync(tempDir, { recursive: true, force: true });

  console.log(`✅ Slide ZIP successfully created at: ${publicZipPath}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
