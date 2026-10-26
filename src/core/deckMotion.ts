import type { RevealApi } from "reveal.js";

/** Reveal owns slide/fragment state; CSS owns animation time, including pauses. */
export function attachDeckMotion(deck: RevealApi, root: HTMLElement) {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const printMedia = window.matchMedia("print");
  const isPrintPdf = /print-pdf/i.test(window.location.search);
  const autoAnimateEnabled = deck.getConfig().autoAnimate !== false;
  let printing = printMedia.matches;
  const hadPrintClass = document.documentElement.classList.contains("print-pdf");
  let active: HTMLElement | null = null;

  const update = () => {
    // Disable Reveal's legacy paper stylesheet without activating its irreversible PDF view.
    if (!isPrintPdf) {
      document.documentElement.toggleAttribute("data-ordinary-print", printing);
      document.documentElement.classList.toggle("print-pdf", printing || hadPrintClass);
    }
    const current = deck.isReady() ? deck.getCurrentSlide() : null;
    if (active !== current) {
      active?.removeAttribute("data-motion-active");
      active = current;
      active?.setAttribute("data-motion-active", "true");
    }
    root.dataset.motion = isPrintPdf || printing || reducedMotion.matches ? "static" : "enabled";
    root.dataset.motionPaused = String(document.hidden || deck.isOverview());
    const autoAnimate =
      autoAnimateEnabled &&
      root.dataset.motion === "enabled" &&
      root.dataset.motionPaused === "false";
    if (deck.isReady() && deck.getConfig().autoAnimate !== autoAnimate)
      deck.configure({ autoAnimate });
    if (active) active.dataset.fragmentStep = String(deck.getIndices().f ?? -1);
  };
  const beforePrint = () => {
    printing = true;
    update();
  };
  const afterPrint = () => {
    printing = printMedia.matches;
    update();
  };
  const events = [
    "ready",
    "slidechanged",
    "fragmentshown",
    "fragmenthidden",
    "overviewshown",
    "overviewhidden",
  ];
  events.forEach((event) => deck.on(event, update));
  reducedMotion.addEventListener("change", update);
  printMedia.addEventListener("change", afterPrint);
  document.addEventListener("visibilitychange", update);
  window.addEventListener("beforeprint", beforePrint);
  window.addEventListener("afterprint", afterPrint);
  update();

  return () => {
    events.forEach((event) => deck.off(event, update));
    reducedMotion.removeEventListener("change", update);
    printMedia.removeEventListener("change", afterPrint);
    document.removeEventListener("visibilitychange", update);
    window.removeEventListener("beforeprint", beforePrint);
    window.removeEventListener("afterprint", afterPrint);
    active?.removeAttribute("data-motion-active");
    delete root.dataset.motion;
    delete root.dataset.motionPaused;
    if (!isPrintPdf) {
      document.documentElement.removeAttribute("data-ordinary-print");
      document.documentElement.classList.toggle("print-pdf", hadPrintClass);
    }
  };
}
