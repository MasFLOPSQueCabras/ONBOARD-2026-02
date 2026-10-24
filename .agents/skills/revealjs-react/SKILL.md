---
name: revealjs-react
description: Comprehensive expert guide for integrating Reveal.js with modern React (React 19), full presentation lifecycles, dynamic responsive viewport scaling, mobile vertical auto-fitting, overview mode, keyboard navigation, transition styles, WebGPU/Three.js integration, and bulletproof 300+ DPI PDF/print export (?print-pdf). Use when building presentations, fixing slide scaling, implementing chart/canvas print snapshots, or troubleshooting Reveal.js DOM lifecycles.
license: MIT
metadata:
  author: Orphee
  version: "1.0.0"
---

# Reveal.js + React 19 Integration Guide

This guide establishes the production-tested architecture for embedding **Reveal.js** within **React 19**, ensuring full responsive scaling from ultra-wide 4K HDR displays to mobile phones, deterministic print-to-PDF vector generation, and zero memory leaks.

---

## 1. Lifecycle Architecture & The React 19 Challenge

Reveal.js mutates the DOM directly by attaching listeners to `window`, injecting styles into `section` tags, and scaling `.slides` via CSS transforms. In React 19 (where components may mount, unmount, or suspend asynchronously), naive initialization leads to:

- Double-initialization errors (e.g. `Reveal is already initialized`).
- Orphaned keyboard listeners intercepting arrow keys across modal views.
- Blurry text or incorrect slide dimensions when resizing or rotating devices.

### Canonical `RevealDeck` Component

```tsx
import { useEffect, useLayoutEffect, useRef, type ReactNode } from "react";
import Reveal, { type RevealApi, type RevealConfig } from "reveal.js";

export interface DeckProps {
  config?: RevealConfig;
  children: ReactNode;
}

export function Deck({ config, children }: DeckProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const deckRef = useRef<RevealApi | null>(null);
  const mountIdRef = useRef(0);
  const initialConfigRef = useRef(config);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    mountIdRef.current += 1;
    const currentMountId = mountIdRef.current;

    if (!deckRef.current) {
      // Normalize vertical stack sections before Reveal initializes
      el.querySelectorAll(".slides > section").forEach((section) => {
        if (section.querySelector("section")) {
          section.classList.add("stack");
        }
      });

      const deck = new Reveal(el, initialConfigRef.current);
      deckRef.current = deck;
      (window as any).RevealDeck = deck;

      // Fix overview mode: unhide all sections so 'esc' displays all slides
      const unhideOverview = () => {
        if (!deck.isOverview()) return;
        el.querySelectorAll("section").forEach((section) => {
          section.removeAttribute("hidden");
          section.removeAttribute("aria-hidden");
          if ((section as HTMLElement).style.display === "none") {
            (section as HTMLElement).style.display = "block";
          }
        });
      };

      deck.on("overviewshown", unhideOverview);
      deck.on("slidechanged", unhideOverview);

      // Print-PDF normalization: ensure sections are selectable and visible
      if (/print-pdf/i.test(window.location.search)) {
        const unhideSections = () => {
          el.querySelectorAll("section").forEach((section) => {
            section.removeAttribute("hidden");
            section.removeAttribute("aria-hidden");
            section.removeAttribute("inert");
          });
        };
        deck.on("ready", unhideSections);
        deck.on("pdf-ready", unhideSections);
      }

      void deck.initialize();
    }

    return () => {
      void Promise.resolve().then(() => {
        if (mountIdRef.current === currentMountId && deckRef.current) {
          try {
            deckRef.current.destroy();
          } catch {
            // Safe teardown
          }
          if ((window as any).RevealDeck === deckRef.current) {
            delete (window as any).RevealDeck;
          }
          deckRef.current = null;
        }
      });
    };
  }, []);

  // Update layout when config changes without re-instantiating Reveal
  useLayoutEffect(() => {
    const deck = deckRef.current;
    const isPrintView = document.documentElement.classList.contains("reveal-print");
    if (deck?.isReady() && !isPrintView && config) {
      deck.configure(config);
      deck.layout();
    }
  }, [config]);

  return (
    <div className="reveal" ref={containerRef}>
      <div className="slides">{children}</div>
    </div>
  );
}
```

---

## 2. Dynamic Viewport & Mobile Auto-Fitting

Reveal defaults to fixed $960 \times 700$ dimensions, causing extreme black bars and tiny text on modern mobile devices. We solve this with the **dynamic aspect ratio formula**:

$$\text{aspect} = \frac{vHeight}{\max(vWidth, 1)}, \quad \text{height} = \max(760, \min(1040, \text{round}(440 \times \text{aspect})))$$

### `useRevealViewport` Hook

```typescript
import { useEffect, useState } from "react";

export interface ViewportConfig {
  width: number;
  height: number;
  margin: number;
  isMobile: boolean;
  isPrintPdf: boolean;
}

export function computeViewportConfig(): ViewportConfig {
  if (typeof window === "undefined") {
    return { width: 1600, height: 900, margin: 0.04, isMobile: false, isPrintPdf: false };
  }

  const isPrintPdf = /print-pdf/i.test(window.location.search);
  if (isPrintPdf) {
    return { width: 1600, height: 900, margin: 0.04, isMobile: false, isPrintPdf: true };
  }

  const vWidth = window.visualViewport?.width ?? window.innerWidth;
  const vHeight = window.visualViewport?.height ?? window.innerHeight;
  const isMobile = vHeight > vWidth || vWidth < 768;

  if (isMobile) {
    const mobileWidth = 440;
    const aspect = vHeight / Math.max(vWidth, 1);
    const mobileHeight = Math.max(760, Math.min(1040, Math.round(mobileWidth * aspect)));
    return {
      width: mobileWidth,
      height: mobileHeight,
      margin: 0,
      isMobile: true,
      isPrintPdf: false,
    };
  }

  return { width: 1600, height: 900, margin: 0.04, isMobile: false, isPrintPdf: false };
}

export function useRevealViewport(): ViewportConfig {
  const [config, setConfig] = useState<ViewportConfig>(computeViewportConfig);

  useEffect(() => {
    const onResize = () => setConfig(computeViewportConfig());
    window.addEventListener("resize", onResize, { passive: true });
    window.addEventListener("orientationchange", onResize, { passive: true });
    window.visualViewport?.addEventListener("resize", onResize, { passive: true });
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onResize);
      window.visualViewport?.removeEventListener("resize", onResize);
    };
  }, []);

  return config;
}
```

---

## 3. High-Resolution Printing Guidelines (300+ DPI Press-Ready)

### The Print-PDF Protocol

When Reveal.js detects `?print-pdf` in the URL:

1. It injects `.reveal-print` into `html`.
2. It strips slide transforms and stacks sections vertically into paged media.

### Critical Engineering Rules for 300+ DPI

1. **Preserve Vector Typography**: Web fonts must be fully loaded (`await document.fonts.ready`). Glyphs are exported as native vectors, guaranteeing infinite zoom without pixelation.
2. **Never Override Display on Color Classes**: Do **NOT** set `display: inline !important` on color utility classes like `.text-mfqc-yellow` in print stylesheets. It breaks block elements (`div`, `p`, headers) in printed handouts.
3. **Hardware Safe Margins**: Standardize `@page`:
   ```css
   @page {
     size: letter portrait; /* or 16in 9in landscape */
     margin: 0.35in;
   }
   ```
4. **Prevent Page Splitting**: Apply `break-inside: avoid; page-break-inside: avoid;` to cards, code blocks, and QR containers.
5. **Exact Ink & Backgrounds**:
   ```css
   *,
   *::before,
   *::after {
     -webkit-print-color-adjust: exact !important;
     print-color-adjust: exact !important;
   }
   ```
6. **Sanitize Animations & Glows**: Disable continuous animations, overhead cones, and CRT scanline masks in `@media print`:
   ```css
   @media print {
     *,
     *::before,
     *::after {
       animation: none !important;
       transition: none !important;
       -webkit-mask-image: none !important;
       mask-image: none !important;
       filter: none !important;
       text-shadow: none !important;
     }
   }
   ```

---

## 4. Interactive Charts & Three.js Canvas in Print

When slides contain interactive elements (TanStack Charts, Three.js WebGPU):

- In screen mode: 60fps continuous render loop, interactive orbital controls, tooltips, hover brush.
- In print mode: Use `useChartPrintSnapshot()` to freeze the canvas or generate a high-res $3840 \times 2160$ PNG snapshot (`canvas.toDataURL()`), displayed via `<img className="hidden print:block" />` while setting the canvas to `print:hidden`. This guarantees zero blank pages.
