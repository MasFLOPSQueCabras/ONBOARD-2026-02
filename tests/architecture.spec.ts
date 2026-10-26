import { expect, test, type Page } from "@playwright/test";
import type {} from "../src/components/RevealDeck";

const sequence = "[data-compute-transformation]";
async function ready(page: Page, url = "./#/1") {
  await page.goto(url);
  await page.waitForFunction(() => window.RevealDeck?.isReady());
  await page.evaluate(() => document.fonts.ready);
}
async function expectStage(page: Page, stage: "laptop" | "gpu" | "node") {
  await expect(
    page.locator(`${sequence} .motion-screen [data-stage-copy="${stage}"]`),
  ).toBeVisible();
  await expect(page.locator(`${sequence} .motion-screen .compute-${stage}`)).toHaveCSS(
    "opacity",
    "1",
  );
}
async function fits(page: Page, selector = "section.present:not(.stack)") {
  expect(
    await page.locator(selector).evaluate((slide) => {
      const outer = slide.getBoundingClientRect();
      return [...slide.querySelectorAll("h2, h3, p, svg, figcaption, .diagram-steps")]
        .filter((el) => el.getClientRects().length && getComputedStyle(el).visibility !== "hidden")
        .every((el) => {
          const b = el.getBoundingClientRect();
          return (
            b.left >= outer.left - 1 &&
            b.right <= outer.right + 1 &&
            b.top >= outer.top - 1 &&
            b.bottom <= outer.bottom + 1
          );
        });
    }),
  ).toBe(true);
}

test.beforeEach(async ({ page }) => {
  page.on("pageerror", (error) => {
    throw error;
  });
});

test("architecture fragments advance and reverse; the same node continues into the cluster", async ({
  page,
}, testInfo) => {
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await ready(page);
  await expectStage(page, "laptop");
  await page.keyboard.press("Space");
  await expectStage(page, "gpu");
  await expect(page.locator(`${sequence} .motion-screen .compute-unit`).last()).toHaveCSS(
    "opacity",
    "1",
  );
  await expect(page.locator(`${sequence} .motion-screen .compute-unit`).last()).toHaveCSS(
    "transform",
    "matrix(1, 0, 0, 1, 78, 78)",
  );
  await page.keyboard.press("Space");
  await expectStage(page, "node");
  await page.screenshot({ path: testInfo.outputPath("node.png") });
  await page.keyboard.press("Space");
  await expect(page.locator("[data-connected-cluster]")).toBeVisible();
  await expect(
    page.locator("section.present:not(.stack) [data-id='architecture-node']"),
  ).toHaveAttribute("data-auto-animate-target");
  await page.screenshot({ path: testInfo.outputPath("cluster.png"), animations: "disabled" });
  await page.keyboard.press("p");
  await expectStage(page, "node");
  await page.keyboard.press("p");
  await expectStage(page, "gpu");
  await page.keyboard.press("p");
  await expectStage(page, "laptop");
  await page.keyboard.press("Escape");
  await expect(page.locator(".reveal")).toHaveAttribute("data-motion-paused", "true");
  await page.keyboard.press("Escape");
  await expectStage(page, "laptop");
  await page.emulateMedia({ reducedMotion: "reduce" });
  await expect
    .poll(() => page.evaluate(() => window.RevealDeck?.getConfig().autoAnimate))
    .toBe(false);
  await page.keyboard.press("Space");
  await expectStage(page, "gpu");
  expect(
    await page.evaluate(
      () => document.getAnimations().filter((a) => a.playState === "running").length,
    ),
  ).toBe(0);
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await expect
    .poll(() => page.evaluate(() => window.RevealDeck?.getConfig().autoAnimate))
    .toBe(true);
});

for (const viewport of [
  { width: 1440, height: 900 },
  { width: 390, height: 844 },
  { width: 844, height: 390 },
  { width: 820, height: 1180 },
]) {
  test(`architecture fits and preserves its stage during resize at ${viewport.width}`, async ({
    page,
  }, testInfo) => {
    await page.setViewportSize(viewport);
    await ready(page);
    for (const stage of ["laptop", "gpu", "node"] as const) {
      await expectStage(page, stage);
      await fits(page);
      await page.screenshot({ path: testInfo.outputPath(`${stage}.png`) });
      await page.keyboard.press("Space");
    }
    await expect(page.locator("[data-connected-cluster]")).toBeVisible();
    await fits(page);
    await page.screenshot({ path: testInfo.outputPath("cluster.png") });
    await page.keyboard.press("p");
    await page.setViewportSize({ width: viewport.height, height: viewport.width });
    await expectStage(page, "node");
    await fits(page);
  });
}

test("direct PDF shows the complete static sequence; normal print restores the current step", async ({
  page,
}, testInfo) => {
  await ready(page, "./?print-pdf");
  await expect(page.locator(".pdf-page").last()).toBeVisible();
  await expect(page.locator(`${sequence} > .motion-screen`)).toBeHidden();
  await expect(page.locator(`${sequence} .compute-print-stage`)).toHaveCount(3);
  for (const stage of ["laptop", "gpu", "node"]) {
    await expect(page.locator(`${sequence} [data-stage="${stage}"] .compute-${stage}`)).toHaveCSS(
      "opacity",
      "1",
    );
    const other = stage === "laptop" ? "node" : "laptop";
    await expect(page.locator(`${sequence} [data-stage="${stage}"] .compute-${other}`)).toHaveCount(
      0,
    );
  }
  await fits(page, "section:has(> .box-border [data-compute-transformation])");
  await fits(page, "section:has(> .box-border [data-connected-cluster])");
  await page.pdf({
    path: testInfo.outputPath("architecture.pdf"),
    preferCSSPageSize: true,
    printBackground: true,
  });
  await ready(page);
  for (const step of [-1, 0]) {
    await page.evaluate((step) => window.RevealDeck?.slide(1, 0, step), step);
    await page.evaluate(() => window.dispatchEvent(new Event("beforeprint")));
    await page.emulateMedia({ media: "print" });
    await expect(page.locator(`${sequence} > .motion-screen`)).toBeHidden();
    await expect(page.locator(`${sequence} .compute-print-sequence`)).toBeVisible();
    await fits(page, "section:has(> .box-border [data-compute-transformation])");
    await page.evaluate(
      () =>
        new Promise<void>((resolve) =>
          requestAnimationFrame(() => requestAnimationFrame(() => resolve())),
        ),
    );
    const ordinaryPdf = await page.pdf({
      path: testInfo.outputPath(`normal-print-${step}.pdf`),
      preferCSSPageSize: true,
      printBackground: true,
    });
    expect(ordinaryPdf.toString("latin1").match(/\/Type\s*\/Page\b/g)?.length).toBe(
      await page.evaluate(() => window.RevealDeck?.getSlides().length),
    );
    await page.emulateMedia({ media: "screen" });
    await page.evaluate(() => window.dispatchEvent(new Event("afterprint")));
    await expectStage(page, step === -1 ? "laptop" : "gpu");
  }
});

test("diagram motion does not change the rasterization of the text below it", async ({
  page,
}, testInfo) => {
  await page.setViewportSize({ width: 878, height: 900 });
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await ready(page);
  for (const step of [0, 1, 0]) {
    await page.evaluate(async (step) => {
      window.RevealDeck?.slide(1, 0, step);
      await new Promise<void>((resolve) =>
        requestAnimationFrame(() => requestAnimationFrame(() => resolve())),
      );
      const scene = document.querySelector(".compute-focus");
      const animations = scene?.getAnimations({ subtree: true }) ?? [];
      if (!animations.length) throw new Error("Expected a running diagram transition");
      for (const animation of animations) {
        animation.pause();
        animation.currentTime = 150;
      }
    }, step);
    const explanation = await page.locator(".compute-explanation").boundingBox();
    const caption = await page.locator(`${sequence} figcaption`).boundingBox();
    if (!explanation || !caption) throw new Error("Missing diagram text");
    const clip = {
      x: Math.floor(explanation.x),
      y: Math.floor(explanation.y),
      width: Math.ceil(explanation.width),
      height: Math.ceil(caption.y + caption.height - explanation.y),
    };
    const during = await page.screenshot({ clip });
    await page.evaluate(() => {
      document
        .querySelector(".compute-focus")
        ?.getAnimations({ subtree: true })
        .forEach((animation) => animation.finish());
    });
    const after = await page.screenshot({
      clip,
      path: testInfo.outputPath(`text-step-${step}.png`),
    });
    expect(during.equals(after)).toBe(true);
  }
});
