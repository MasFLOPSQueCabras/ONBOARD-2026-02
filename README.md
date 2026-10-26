# Más FLOPS que Cabras 🐐 — HPC Onboarding

Onboarding presentation for the **Más FLOPS que Cabras** Student Supercomputing & HPC group at Universidad de los Andes.

**Live Presentation:** [https://masflopsquecabras.github.io/ONBOARD-2026-02/](https://masflopsquecabras.github.io/ONBOARD-2026-02/)  
**Printable Poster:** [https://masflopsquecabras.github.io/ONBOARD-2026-02/posters/](https://masflopsquecabras.github.io/ONBOARD-2026-02/posters/)  
**Email Invitations:** [docs/email-guide.md](docs/email-guide.md)

## Commands (Vite+ & React Email)

```bash
bun install          # Install dependencies
bun run dev          # Start development server (vp dev)
bun run check        # Format, lint & type-check (vp check)
bun run build        # Build for production (vp build)
bun run fmt          # Format code (vp fmt)
bun run lint         # Lint code (vp lint)
bun run email:dev    # Live preview email templates (localhost:3000)
bun run email:build  # Render email templates to HTML and text (emails/dist/)
bunx --no-install playwright install chromium  # One-time browser setup
bun run test:e2e     # Build and run Chromium smoke checks
```

## Shared configuration and layout

- `src/config.ts` owns the public URLs, contact details, and invitation defaults. The existing March 2026 event is retained; update these defaults before reusing the invitation.
- `src/data/hardware.ts` records hardware capabilities and metric sources, measurement scope, and reference dates. The GTC Berlin update distinguishes a Vera Rubin NVL72 rack from the DSX POD reference design announced on October 21, 2026. B300 and GB300 NVL72 memory figures are aggregate specifications, not workload speedups. Unsupported power values are omitted.
- `src/theme.css` imports the base theme, Reveal layout, animations, and print modules in `src/styles/`.
- Slides use the named `deck` container for responsive utilities, for example `@min-[768px]/deck:text-[24px]`. The canvas remains 440px wide in compact mode and 1600px in desktop/print mode. Charts consume the same viewport state. Standalone posters retain viewport breakpoints.
- `SlideHeader`, `PosterBrand`, and `OnboardingQR` provide shared visual elements without merging the different poster layouts.

## Verification

`bun run check`, `bun run email:build`, and `bun run test:e2e` run in CI for pull requests and deployment branches. Only non-PR runs on `main`/`master` can deploy to Pages.

The Chromium suite checks slide navigation, overview, poster return navigation, reduced motion, desktop/phone/tablet layouts, rotation, chart labels, and PDF geometry. It writes deck and poster PDFs under `test-results/` for visual inspection; failures also retain screenshots and traces. Inspect those PDFs after changing print styles. Tests use the production `/ONBOARD-2026-02/` base path.

Open `/?print-pdf` to export the deck or `/posters/?layout=landscape` for a landscape poster. The existing `?poster` and `#poster` preview entry points remain supported. Wait for fonts and charts to load before printing.
