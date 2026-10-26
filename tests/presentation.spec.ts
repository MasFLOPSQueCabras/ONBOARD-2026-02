import { expect, test, type Page, type Locator } from "@playwright/test";
import type {} from "../src/components/RevealDeck";

async function ready(page: Page, url = "./") {
  await page.goto(url);
  await page.waitForFunction(() => window.RevealDeck?.isReady());
  await page.evaluate(() => document.fonts.ready);
}

async function selectSlide(page: Page, selector: string) {
  await page.evaluate((selector) => {
    const element = document.querySelector(selector);
    const slide = element?.closest("section");
    const deck = window.RevealDeck;
    if (!deck || !slide) throw new Error(`Missing slide: ${selector}`);
    const indices = deck.getIndices(slide);
    deck.slide(indices.h, indices.v);
  }, selector);
  await expect(page.locator(selector).first()).toBeVisible();
}

async function fitsSlide(slide: Locator) {
  const overflow = await slide.evaluate((section) => {
    const box = section.getBoundingClientRect();
    return [...section.querySelectorAll("h1, h2, h3, p, a, svg, .inky-header, article")]
      .filter(
        (element) =>
          element.getClientRects().length && getComputedStyle(element).visibility !== "hidden",
      )
      .flatMap((element) => {
        const child = element.getBoundingClientRect();
        return child.left < box.left - 2 ||
          child.right > box.right + 2 ||
          child.top < box.top - 2 ||
          child.bottom > box.bottom + 2
          ? [element.textContent?.slice(0, 100) || element.tagName]
          : [];
      });
  });
  expect(overflow).toEqual([]);
}

test.beforeEach(async ({ page }) => {
  page.on("pageerror", (error) => {
    throw error;
  });
});

test("keyboard navigation, overview and returning from the poster", async ({ page }) => {
  await ready(page);
  await page.keyboard.press("ArrowRight");
  await expect.poll(() => page.evaluate(() => window.RevealDeck?.getIndices().h)).toBe(1);
  await page.keyboard.press("Escape");
  await expect(page.locator(".reveal")).toHaveClass(/overview/);
  await page.keyboard.press("Escape");
  await expect(page.locator(".reveal")).not.toHaveClass(/overview/);
  await selectSlide(page, ".slides section button");
  await page.getByRole("button", { name: "Ver Cartel / Imprimir" }).click();
  await expect(page.locator(".poster-preview")).toBeVisible();
  await expect.poll(() => page.evaluate(() => !!window.RevealDeck)).toBe(false);
  await page.getByRole("button", { name: "Volver a Slides" }).click();
  await page.waitForFunction(() => window.RevealDeck?.isReady());
  await expect.poll(() => page.evaluate(() => window.RevealDeck?.getIndices().h)).toBe(10);
  await page.keyboard.press("ArrowLeft");
  await expect.poll(() => page.evaluate(() => window.RevealDeck?.getIndices().h)).toBe(9);
});

for (const viewport of [
  { width: 1440, height: 900 },
  { width: 390, height: 844 },
  { width: 844, height: 390 },
  { width: 820, height: 1180 },
]) {
  test(`content fits at ${viewport.width}×${viewport.height}`, async ({ page }, testInfo) => {
    await page.setViewportSize(viewport);
    await ready(page);
    await fitsSlide(page.locator(".slides > section").first());
    for (const selector of [
      "[data-hardware-cards]",
      "[data-rubin-dsx]",
      '[data-chart="bandwidth"]',
      '[data-chart="power"]',
    ]) {
      await selectSlide(page, selector);
      await page.screenshot({
        path: testInfo.outputPath(`${selector.replace(/[^a-z]/g, "")}.png`),
      });
      await fitsSlide(page.locator(`${selector}`).first().locator("xpath=ancestor::section[1]"));
    }
    await selectSlide(page, '[aria-label="Gráfica de Jerarquía de Latencias de Memoria"]');
    await fitsSlide(
      page
        .locator('[aria-label="Gráfica de Jerarquía de Latencias de Memoria"]')
        .locator("xpath=ancestor::section[1]"),
    );
    const expectedWidth = viewport.height > viewport.width || viewport.width < 768 ? 440 : 1600;
    await expect
      .poll(() => page.evaluate(() => window.RevealDeck?.getConfig().width))
      .toBe(expectedWidth);
  });
}

test("tablet rotation updates canvas, typography and chart labels together", async ({ page }) => {
  await page.setViewportSize({ width: 820, height: 1180 });
  await ready(page);
  await selectSlide(page, '[aria-label="Gráfica de Jerarquía de Latencias de Memoria"]');
  const chart = page.locator('[aria-label="Gráfica de Jerarquía de Latencias de Memoria"]');
  await expect(chart).toContainText("01 L1 Cache");
  await expect(page.locator("section.present .inky-title").last()).toHaveCSS("font-size", "26px");
  await page.setViewportSize({ width: 1180, height: 820 });
  await expect.poll(() => page.evaluate(() => window.RevealDeck?.getConfig().width)).toBe(1600);
  await expect(chart).toContainText("01 // L1 D-Cache");
  await expect(page.locator("section.present .inky-title").last()).toHaveCSS("font-size", "64px");
  await page.setViewportSize({ width: 820, height: 1180 });
  await expect(chart).toContainText("01 L1 Cache");
});

test("reduced motion stops decorative animations in the deck and posters", async ({ page }) => {
  for (const url of ["./", "./?poster", "./#poster", "posters/", "posters/?layout=landscape"]) {
    await page.goto(url);
    await expect(page.locator("h1").first()).toBeVisible();
    await expect
      .poll(() =>
        page.evaluate(
          () =>
            document.getAnimations().filter((animation) => animation.playState === "running")
              .length,
        ),
      )
      .toBe(0);
    await expect(page.locator(".title-neon-flops").first()).toHaveCSS("opacity", "1");
  }
});

test("both poster orientations print and remain navigable", async ({ page }, testInfo) => {
  await page.goto("posters/");
  await page.evaluate(() => document.fonts.ready);
  for (const layout of ["portrait", "landscape"] as const) {
    await page
      .getByRole("button", {
        name: layout === "portrait" ? "Vertical (Portrait)" : "Horizontal (Landscape)",
      })
      .click();
    await expect(page.locator("#poster-root svg")).toBeVisible();
    const pdf = await page.pdf({
      path: testInfo.outputPath(`poster-${layout}.pdf`),
      preferCSSPageSize: true,
      printBackground: true,
    });
    expect(pdf.toString("latin1").match(/\/Type\s*\/Page\b/g)?.length).toBe(1);
  }
  await page.getByRole("link", { name: "Volver a Slides" }).click();
  await page.waitForFunction(() => window.RevealDeck?.isReady());
});

test("PDF has populated slides, desktop chart labels and contained content", async ({
  page,
}, testInfo) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await ready(page, "./?print-pdf");
  await expect(page.locator(".pdf-page").first()).toBeVisible();
  await expect.poll(() => page.locator(".pdf-page").count()).toBeGreaterThan(40);
  await expect(
    page.locator('[aria-label="Gráfica de Jerarquía de Latencias de Memoria"]'),
  ).toContainText("01 // L1 D-Cache");
  for (const selector of [
    "[data-hardware-cards]",
    "[data-rubin-dsx]",
    '[data-chart="bandwidth"]',
    '[data-chart="power"]',
  ]) {
    await fitsSlide(page.locator(selector).first().locator("xpath=ancestor::section[1]"));
  }
  const emptyPages = await page
    .locator(".pdf-page")
    .evaluateAll((pages) => pages.filter((page) => !page.textContent?.trim()).length);
  expect(emptyPages).toBe(0);
  const pdf = await page.pdf({
    path: testInfo.outputPath("presentation.pdf"),
    preferCSSPageSize: true,
    printBackground: true,
  });
  expect(pdf.toString("latin1").match(/\/Type\s*\/Page\b/g)?.length).toBe(
    await page.locator(".pdf-page").count(),
  );
});
