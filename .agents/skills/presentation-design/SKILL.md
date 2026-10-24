---
name: presentation-design
description: Design system, themes, animations, and aesthetic guidelines for technical and developer presentations. Covers the 5 core themes (Inky Neon, Dracula, Night Owl, Retro CRT Phosphor, Minimalist Monochrome), wide color gamut (Display P3, Rec.2020), HDR radiance, 6 modular animation presets, and strict design rules for both human presenters and AI coding agents. Use when styling presentations, selecting color schemes, or animating slides.
license: MIT
metadata:
  author: Orphee
  version: "1.0.0"
---

# Presentation Design System & Guidelines

This skill defines the visual hierarchy, color spaces, typography, themes, and motion principles for high-impact developer and scientific presentations.

---

## 1. The 5 Core Themes

```
┌────────────────────────────────────────────────────────────────────────┐
│                          Theme Color Tokens                            │
├──────────────┬──────────────┬──────────────┬─────────────┬─────────────┤
│  Inky Neon   │   Dracula    │  Night Owl   │  Retro CRT  │Minimal Mono │
├──────────────┼──────────────┼──────────────┼─────────────┼─────────────┤
│ BG: #000000  │ BG: #282a36  │ BG: #011627  │ BG: #0a0e0a │ BG: #000000 │
│ Card:#08080c │ Card:#1e1f29 │ Card:#0b2942 │ Card:#050805│ Card:#111111│
│ P:  #ffe600  │ P:  #bd93f9  │ P:  #7fdbca  │ P:  #33ff33 │ P:  #ffffff │
│ S:  #00f5d4  │ S:  #ff79c6  │ S:  #ecc48d  │ S:  #ffb000 │ S:  #0071e3 │
│ A:  #ff2a85  │ A:  #50fa7b  │ A:  #c792ea  │ A:  #00ff66 │ A:  #ff3b30 │
└──────────────┴──────────────┴──────────────┴─────────────┴─────────────┘
```

### Theme CSS Variables Contract

Every theme defines the following variables under `[data-theme="..."]`:

```css
:root,
[data-theme="neon"] {
  --color-bg: #000000;
  --color-card: #08080c;
  --color-text: #ffffff;
  --color-text-muted: #cbd5e1;
  --color-accent: #ffe600;
  --color-secondary: #00f5d4;
  --color-tertiary: #ff2a85;
  --color-border: #ffe600;
  --shadow-offset: 6px 6px 0px #00f5d4;
}

[data-theme="dracula"] {
  --color-bg: #282a36;
  --color-card: #1e1f29;
  --color-text: #f8f8f2;
  --color-text-muted: #6272a4;
  --color-accent: #bd93f9;
  --color-secondary: #ff79c6;
  --color-tertiary: #50fa7b;
  --color-border: #bd93f9;
  --shadow-offset: 6px 6px 0px #ff79c6;
}

[data-theme="night-owl"] {
  --color-bg: #011627;
  --color-card: #0b2942;
  --color-text: #d6deeb;
  --color-text-muted: #5f7e97;
  --color-accent: #7fdbca;
  --color-secondary: #ecc48d;
  --color-tertiary: #c792ea;
  --color-border: #7fdbca;
  --shadow-offset: 6px 6px 0px #ecc48d;
}

[data-theme="retro"] {
  --color-bg: #0a0e0a;
  --color-card: #050805;
  --color-text: #33ff33;
  --color-text-muted: #1f991f;
  --color-accent: #33ff33;
  --color-secondary: #ffb000;
  --color-tertiary: #00ff66;
  --color-border: #33ff33;
  --shadow-offset: 6px 6px 0px #ffb000;
}

[data-theme="minimal"] {
  --color-bg: #000000;
  --color-card: #111111;
  --color-text: #ffffff;
  --color-text-muted: #888888;
  --color-accent: #ffffff;
  --color-secondary: #0071e3;
  --color-tertiary: #ff3b30;
  --color-border: #333333;
  --shadow-offset: 4px 4px 0px #0071e3;
}
```

---

## 2. Wide Color Gamut & HDR

Modern OLED displays (MacBook Liquid Retina, iPhone Super Retina XDR, Pro monitors) support Display P3 and Rec.2020 color spaces. We progressively enhance color saturation:

```css
@media (color-gamut: p3) {
  :root,
  [data-theme="neon"] {
    --color-accent: color(display-p3 0.99 0.91 0.08);
    --color-secondary: color(display-p3 0.15 0.96 0.84);
    --color-tertiary: color(display-p3 0.98 0.16 0.53);
  }
}

@media (color-gamut: rec2020) {
  :root,
  [data-theme="neon"] {
    --color-accent: color(rec2020 0.95 0.89 0.12);
    --color-secondary: color(rec2020 0.22 0.95 0.83);
    --color-tertiary: color(rec2020 0.94 0.22 0.52);
  }
}

/* High Dynamic Range (HDR) Emissive Radiance */
@media (dynamic-range: high) {
  .text-neon-glow {
    text-shadow: 0 0 6px var(--color-accent);
  }
}
```

---

## 3. The 6 Animation Presets

1. **`inky-neon`**:
   - Continuous subtle $3.6\text{s}$ bulb flicker:
     `@keyframes bulb-flicker { 0%, 39% { opacity: 1; } 40% { opacity: 0.91; } 41% { opacity: 1; } }`
   - Inky fluid drop badge entrance: `cubic-bezier(0.18, 0.9, 0.32, 1)`.
2. **`retro-phosphor`**:
   - 1px groove raster scanlines via `repeating-linear-gradient`.
   - Subtle CRT cathode flicker and green/amber phosphor afterglow decay.
3. **`brutalist-snap`**:
   - Zero-smoothing mechanical steps (`steps(1)` or instant snap).
   - Tactical pop with hard offset shadow displacement: `transform: translate(-3px, -3px)`.
4. **`cyberpunk-glitch`**:
   - Micro horizontal displacement burst ($0.12\text{s}$) on section change.
   - Chromatic aberration text shadow (`-2px 0 #ff2a85, 2px 0 #00f5d4`).
5. **`editorial-spring`**:
   - Fluid physics-based spring curve: `cubic-bezier(0.16, 1, 0.3, 1)`.
   - Staggered child reveals with 60ms delay offsets.
6. **`minimal-fade`**:
   - Pure 150ms opacity transition without translation. Zero distraction for academic or corporate keynotes.

> [!CAUTION]
> All animation presets must declare:
>
> ```css
> @media (prefers-reduced-motion: reduce) {
>   *,
>   *::before,
>   *::after {
>     animation: none !important;
>     transition: none !important;
>   }
> }
> ```

---

## 4. Agent Design Rules (Dos and Don'ts)

| Do                                                                                                           | Don't                                                              |
| :----------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------- |
| Use 1 primary display font (`Syne`), 1 sans body font (`Space Grotesk`), and 1 mono font (`JetBrains Mono`). | Never mix more than 3 typefaces on a slide.                        |
| Maintain high contrast ratio ($\ge 7:1$ for body, $\ge 4.5:1$ for headings).                                 | Never use low-contrast gray text on dark gray cards.               |
| Animate only the hero title, section badge, or active card.                                                  | Never animate all bullet points or body paragraphs simultaneously. |
| Use SVG vector paths (`<QRCodeSVG />`, inline SVG) for diagrams and QR codes.                                | Never embed low-resolution raster images for graphics.             |
| Ensure `@media print` cleanly disables all motion and restores solid block flows.                            | Never allow animations or mask filters to run in print exports.    |
