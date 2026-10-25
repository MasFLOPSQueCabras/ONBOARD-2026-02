import { spawn } from "node:child_process";
import { mkdirSync, copyFileSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";

async function main() {
  console.log("🚀 Starting High-Resolution Vector PDF Export (300 DPI)...");

  const targetUrl = process.env.TARGET_URL || "http://localhost:5173/?print-pdf";
  const publicPdfPath = resolve(process.cwd(), "public/exports/presentation.pdf");
  const distPdfPath = resolve(process.cwd(), "dist/exports/presentation.pdf");

  mkdirSync(dirname(publicPdfPath), { recursive: true });

  const chromePath =
    process.env.CHROME_BIN ||
    ["/usr/bin/google-chrome-stable", "/usr/bin/google-chrome", "/usr/bin/chromium"].find(
      existsSync,
    ) ||
    "google-chrome";

  console.log(`Using Chrome binary: ${chromePath}`);
  console.log(`Navigating to: ${targetUrl}`);

  const args = [
    "--headless=new",
    "--disable-gpu",
    "--no-sandbox",
    "--window-size=1920,1080",
    "--force-device-scale-factor=2",
    "--run-all-compositor-stages-before-draw",
    "--virtual-time-budget=6000",
    `--print-to-pdf=${publicPdfPath}`,
    targetUrl,
  ];

  const proc = spawn(chromePath, args);

  proc.on("error", (err) => {
    console.error("Failed to spawn Chrome process:", err);
    process.exit(1);
  });

  proc.on("exit", (code) => {
    if (code === 0) {
      console.log(`✅ Vector PDF successfully exported at: ${publicPdfPath}`);
      if (existsSync(dirname(distPdfPath))) {
        copyFileSync(publicPdfPath, distPdfPath);
        console.log(`✅ Mirrored to production distribution: ${distPdfPath}`);
      }
    } else {
      console.error(`Chrome exited with error code ${code}`);
      process.exit(code ?? 1);
    }
  });
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
