import { expect, test } from "@playwright/test";
import type {} from "../src/components/RevealDeck";

for (const viewport of [
  { width: 1440, height: 900 },
  { width: 390, height: 844 },
  { width: 844, height: 390 },
  { width: 820, height: 1180 },
]) {
  test(`systolic stages fit and reverse at ${viewport.width}`, async ({ page }, info) => {
    page.on("pageerror", (error) => {
      throw error;
    });
    await page.setViewportSize(viewport);
    await page.goto("./");
    await page.waitForFunction(() => window.RevealDeck?.isReady());
    await page.evaluate(async () => {
      await document.fonts.ready;
      const slide = document.querySelector("section.systolic-slide");
      if (!slide || !window.RevealDeck) throw new Error("Missing slide");
      const { h, v } = window.RevealDeck.getIndices(slide as HTMLElement);
      window.RevealDeck.slide(h, v, -1);
    });
    const figure = page.locator(".systolic-array");
    for (let stage = 0; stage < 3; stage++) {
      if (stage) await page.keyboard.press("Space");
      await expect(figure.locator(`.systolic-stage-${stage}`)).toBeVisible();
      expect(
        await page.locator("section.systolic-slide").evaluate((slide) => {
          const box = slide.getBoundingClientRect();
          return [...slide.querySelectorAll("p, svg, figcaption")]
            .filter((e) => e.getClientRects().length)
            .every((e) => {
              const r = e.getBoundingClientRect();
              return (
                r.bottom <= box.bottom + 1 && r.right <= box.right + 1 && r.left >= box.left - 1
              );
            });
        }),
      ).toBe(true);
    }
    await page.screenshot({ path: info.outputPath("outputs.png") });
    await page.keyboard.press("p");
    await expect(figure.locator(".systolic-stage-1")).toBeVisible();
    await page.emulateMedia({ reducedMotion: "no-preference" });
    await expect
      .poll(() =>
        figure.evaluate(
          (el) =>
            el.getAnimations({ subtree: true }).filter((a) => a.playState === "running").length,
        ),
      )
      .toBe(9);
    await page.keyboard.press("Escape");
    await expect
      .poll(() =>
        figure.evaluate(
          (el) =>
            el.getAnimations({ subtree: true }).filter((a) => a.playState === "running").length,
        ),
      )
      .toBe(0);
    await page.keyboard.press("Escape");
    await page.emulateMedia({ reducedMotion: "reduce" });
    await expect
      .poll(() => figure.evaluate((el) => el.getAnimations({ subtree: true }).length))
      .toBe(0);
    await page.keyboard.press("p");
    await expect(figure.locator(".systolic-stage-0")).toBeVisible();
  });
}

test("systolic static PDF contains all three explanations", async ({ page }, info) => {
  await page.goto("./?print-pdf");
  await expect(page.locator(".pdf-page")).toHaveCount(102);
  await page.emulateMedia({ media: "print" });
  await page.evaluate(async () => {
    await document.fonts.ready;
    await new Promise<void>((r) => requestAnimationFrame(() => requestAnimationFrame(() => r())));
  });
  const slide = page.locator("section.systolic-slide");
  for (let stage = 0; stage < 3; stage++)
    await expect(slide.locator(`.systolic-stage-${stage}`)).toBeVisible();
  await expect(slide.locator(".systolic-result").first()).toBeVisible();
  await slide.screenshot({ path: info.outputPath("static.png") });
  await page.pdf({
    path: info.outputPath("systolic.pdf"),
    preferCSSPageSize: true,
    printBackground: true,
  });
});
