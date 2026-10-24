---
name: slide-archetypes
description: Complete catalog and implementation recipes for presentation slide layout archetypes. Covers the 9 classical presentation layouts (Title Slide, Title and Content, Section Header, Two Content, Comparison, Title Only, Blank, Content with Caption, Picture with Caption) plus high-performance computing technical archetypes (Code Editorial, Benchmark Bars, Hardware Topology, Metrics Grid, Roadmap). Use when designing slides, structuring presentation templates, or generating responsive slide components.
license: MIT
metadata:
  author: Orphee
  version: "1.0.0"
---

# Slide Archetypes & Layout Recipes

This skill defines the canonical presentation layout archetypes, combining the 9 foundational presentation patterns with advanced technical/engineering layouts inspired by high-performance computing slides.

---

## 1. The 9 Foundational Archetypes

```
┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐
│                 │ │ [Slide Header]  │ │                 │
│  [Hero Title]   │ │ ┌─────────────┐ │ │ [Section Tag]   │
│   [Subtitle]    │ │ │ Main Content│ │ │ [Chapter Title] │
│                 │ │ └─────────────┘ │ │                 │
│ 1. Title Slide  │ │ 2. Title+Content│ │ 3. SectionHeader│
└─────────────────┘ └─────────────────┘ └─────────────────┘
┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐
│ [Slide Header]  │ │ [Slide Header]  │ │ [Slide Header]  │
│ ┌─────┐ ┌─────┐ │ │ ┌─────┐ ┌─────┐ │ │                 │
│ │Col 1│ │Col 2│ │ │ │Left │ │Right│ │ │  [Open Canvas]  │
│ └─────┘ └─────┘ │ │ └─────┘ └─────┘ │ │                 │
│ 4. Two Content  │ │ 5. Comparison   │ │ 6. Title Only   │
└─────────────────┘ └─────────────────┘ └─────────────────┘
┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐
│                 │ │ [Slide Header]  │ │ [Slide Header]  │
│  [Full Bleed]   │ │ ┌────────┐ ┌──┐ │ │ ┌────────┐ ┌──┐ │
│ [Edge to Edge]  │ │ │Graphic │ │Tx│ │ │ │Picture │ │Cp│ │
│                 │ │ └────────┘ └──┘ │ │ └────────┘ └──┘ │
│ 7. Blank Canvas │ │ 8. Content+Capt.│ │ 9. Picture+Capt.│
└─────────────────┘ └─────────────────┘ └─────────────────┘
```

### Archetype 1: Title Slide (`TitleSlide`)

- **Intent**: First visual impression. Dominant hero typography, presenter badge, metadata.
- **Pattern**:
  ```tsx
  <Slide>
    <div className="flex h-full w-full flex-col items-center justify-center text-center p-6 sm:p-12">
      <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-accent)]">
        {category}
      </span>
      <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-white mt-3">{title}</h1>
      <p className="text-lg sm:text-2xl text-[var(--color-text-muted)] max-w-2xl mt-4">
        {subtitle}
      </p>
      <div className="mt-8 font-mono text-xs text-white/70">{metadata}</div>
    </div>
  </Slide>
  ```

### Archetype 2: Title and Content (`TitleContentSlide`)

- **Intent**: Standard informational slide with top header and a unified content block.
- **Pattern**:
  ```tsx
  <Slide>
    <div className="flex h-full w-full flex-col justify-between p-6 sm:p-12">
      <SlideHeader title={title} category={category} step={step} />
      <div className="my-auto w-full">{children}</div>
    </div>
  </Slide>
  ```

### Archetype 3: Section Header (`SectionHeaderSlide`)

- **Intent**: Chapter transition or module breaker.
- **Pattern**: Massive numerical index (e.g. `02 / 04`) with high-contrast chapter headline.

### Archetype 4: Two Content (`TwoColumnSlide`)

- **Intent**: Dual-column parallel layout (50/50 split). Perfect for balancing points, code vs explanation, or dual metrics.
- **Pattern**: `grid grid-cols-1 md:grid-cols-2 gap-6 items-center`.

### Archetype 5: Comparison (`ComparisonSlide`)

- **Intent**: Explicit contrast ("Before vs After", "Python vs Mojo", "Standard vs Accelerated").
- **Pattern**: Two structured cards with differentiated colored borders (e.g. Red/Warning vs Green/Success or Yellow vs Cyan).

### Archetype 6: Title Only (`TitleOnlySlide`)

- **Intent**: Minimalist top navigation bar leaving 85% of viewport as an open canvas for full-bleed charts, custom Three.js WebGPU canvases, or live interactive simulations.

### Archetype 7: Blank Canvas (`BlankSlide`)

- **Intent**: Zero default padding, edge-to-edge canvas for terminal screen recordings, full-bleed hero artwork, or unconstrained custom layout.

### Archetype 8: Content with Caption (`ContentCaptionSlide`)

- **Intent**: Asymmetrical layout: 70% primary visualization on left/center + 30% structured sidebar caption with technical notes and references.

### Archetype 9: Picture with Caption (`PictureCaptionSlide`)

- **Intent**: Hero media showcase (architecture diagrams, team photo, benchmark plot) with a polished editorial callout card underneath.

---

## 2. Technical & HPC Extensions

### 10. Code Editorial Slide (`CodeEditorialSlide`)

- Multi-pane syntax-highlighted code editor with active line highlights, performance annotations, and speedup callouts.

### 11. Benchmark Bars Slide (`BenchmarkBarsSlide`)

- Comparative speedup bars (e.g. `1x (Baseline)` vs `35,000x (Optimized)`), with hardware specs, memory bandwidth, and power consumption tiles.

### 12. Hardware Topology Slide (`HardwareTopologySlide`)

- Interactive or 3D visualization showing cluster interconnects (InfiniBand/RDMA), CPU sockets, and GPU accelerator meshes.

### 13. Metrics Grid Slide (`MetricsSlide`)

- 4-tile or 6-tile grid of high-impact KPIs (TFLOPS, GB/s bandwidth, Latency, Joules/FLOP).

---

## 3. Accessibility & Layout Guidelines for Agents

1. **Avoid Text Overflow**: Limit slides to $\le 60$ words of body copy. Bullet points should be short (1–2 lines max).
2. **Strict Aspect Ratio Guard**: Never hardcode pixel positioning like `top: 420px; left: 810px`. Always use CSS Flexbox or Grid with percentages and `gap`.
3. **Typography Rhythms**: Headings use `font-display` (`Syne`), body copy uses `font-sans` (`Space Grotesk`), metadata and numbers use `font-mono` (`JetBrains Mono`).
4. **Color Semantics**: Do not use color as the sole indicator of meaning; always combine color with an icon or text label.
