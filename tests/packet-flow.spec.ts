import { expect, test, type Page } from "@playwright/test";
import type {} from "../src/components/RevealDeck";

async function ready(page: Page, url = "./#/4") {
  await page.goto(url);
  await page.waitForFunction(() => window.RevealDeck?.isReady());
  await page.evaluate(() => document.fonts.ready);
}
async function select(page: Page, kind: "memory" | "network", fragment = -1) {
  await page.evaluate(
    ({ kind, fragment }) => {
      const slide = document.querySelector(`[data-packet-flow="${kind}"]`)?.closest("section");
      const deck = window.RevealDeck;
      if (!slide || !deck) throw new Error("Missing packet slide");
      const { h, v } = deck.getIndices(slide);
      deck.slide(h, v, fragment);
    },
    { kind, fragment },
  );
}
async function fits(page: Page, kind: "memory" | "network") {
  const overflow = await page
    .locator(`[data-packet-flow="${kind}"]`)
    .locator("xpath=ancestor::section[1]")
    .evaluate((slide) => {
      const b = slide.getBoundingClientRect();
      return [...slide.querySelectorAll("h2, p, svg, dl, figcaption, .diagram-steps")]
        .filter((el) => el.getClientRects().length && getComputedStyle(el).visibility !== "hidden")
        .filter((el) => {
          const c = el.getBoundingClientRect();
          return (
            c.top < b.top - 1 ||
            c.bottom > b.bottom + 1 ||
            c.left < b.left - 1 ||
            c.right > b.right + 1
          );
        })
        .map((el) => el.textContent?.slice(0, 80));
    });
  expect(overflow).toEqual([]);
}

test.beforeEach(({ page }) => {
  page.on("pageerror", (error) => {
    throw error;
  });
});

for (const viewport of [
  { width: 1440, height: 900 },
  { width: 390, height: 844 },
  { width: 844, height: 390 },
  { width: 820, height: 1180 },
]) {
  test(`packet diagrams and explanations fit ${viewport.width}`, async ({ page }, testInfo) => {
    await page.setViewportSize(viewport);
    await ready(page);
    for (const kind of ["memory", "network"] as const) {
      await select(page, kind);
      await fits(page, kind);
      const figure = page.locator(`[data-packet-flow="${kind}"]`);
      await expect(figure.locator(".motion-screen .packet-queue")).toBeHidden();
      await page.keyboard.press("Space");
      await expect(figure.locator(".motion-screen .packet-queue")).toBeVisible();
      await fits(page, kind);
      await page.screenshot({ path: testInfo.outputPath(`${kind}.png`) });
      await page.keyboard.press("p");
      await expect(figure.locator(".motion-screen .packet-queue")).toBeHidden();
    }
    await page.setViewportSize({ width: viewport.height, height: viewport.width });
    await fits(page, "network");
  });
}

test("packets only move on the active visible slide and queue stages remain reversible", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await ready(page);
  const memory = page.locator('[data-packet-flow="memory"]');
  const network = page.locator('[data-packet-flow="network"]');
  const running = () =>
    memory.evaluate(
      (el) => el.getAnimations({ subtree: true }).filter((a) => a.playState === "running").length,
    );
  await expect.poll(running).toBe(5);
  expect(await network.evaluate((el) => el.getAnimations({ subtree: true }).length)).toBe(0);
  await page.keyboard.press("Space");
  await expect(memory.locator(".motion-screen .packet-queued-item").last()).toHaveCSS(
    "opacity",
    "1",
  );
  await expect(memory.locator(".motion-screen .packet-limited .packet-pulse")).toHaveCSS(
    "animation-duration",
    "4s",
  );
  await page.keyboard.press("Escape");
  await expect.poll(running).toBe(0);
  await page.keyboard.press("Escape");
  await expect.poll(running).toBe(5);
  await page.evaluate(() => {
    Object.defineProperty(document, "hidden", { configurable: true, value: true });
    document.dispatchEvent(new Event("visibilitychange"));
  });
  await expect.poll(running).toBe(0);
  await page.evaluate(() => {
    Reflect.deleteProperty(document, "hidden");
    document.dispatchEvent(new Event("visibilitychange"));
  });
  await expect.poll(running).toBe(5);
  await page.emulateMedia({ reducedMotion: "reduce" });
  await expect.poll(running).toBe(0);
  await expect(memory.locator(".motion-screen .packet-queue")).toBeVisible();
  await page.keyboard.press("p");
  await expect(memory.locator(".motion-screen .packet-queue")).toBeHidden();
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await select(page, "network", 0);
  await expect(network.locator(".motion-screen .packet-queue")).toBeVisible();
  await expect.poll(running).toBe(0);
});

test("packet PDF and ordinary printing show labeled static queues without particles", async ({
  page,
}, testInfo) => {
  await ready(page, "./?print-pdf");
  await expect.poll(() => page.locator(".pdf-page").count()).toBe(101);
  for (const kind of ["memory", "network"] as const) {
    await fits(page, kind);
    const figure = page.locator(`[data-packet-flow="${kind}"]`);
    await expect(figure.locator(".packet-static .packet-queue")).toBeVisible();
    await expect(figure.locator(".packet-pulse").first()).toBeHidden();
    await expect(figure.locator("figcaption")).toContainText("no es un benchmark");
  }
  await page.emulateMedia({ media: "print" });
  await page.evaluate(async () => {
    await document.fonts.ready;
    await new Promise<void>((resolve) =>
      requestAnimationFrame(() => requestAnimationFrame(() => resolve())),
    );
  });
  const pdf = await page.pdf({
    path: testInfo.outputPath("packet-flow.pdf"),
    preferCSSPageSize: true,
    printBackground: true,
  });
  expect(pdf.toString("latin1").match(/\/Type\s*\/Page\b/g)?.length).toBe(101);
  await page.emulateMedia({ media: "screen" });
  await page.setViewportSize({ width: 390, height: 844 });
  await ready(page);
  await page.evaluate(() => window.dispatchEvent(new Event("beforeprint")));
  await page.emulateMedia({ media: "print" });
  await fits(page, "memory");
  await expect(
    page.locator('[data-packet-flow="memory"] .packet-static .packet-queue'),
  ).toBeVisible();
  await page.emulateMedia({ media: "screen" });
  await page.evaluate(() => window.dispatchEvent(new Event("afterprint")));
  await expect(
    page.locator('[data-packet-flow="memory"] .motion-screen .packet-queue'),
  ).toBeHidden();
  await fits(page, "memory");
});
