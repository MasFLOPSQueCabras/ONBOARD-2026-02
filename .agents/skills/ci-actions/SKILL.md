---
name: ci-actions
description: Modern GitHub Actions CI/CD workflows for Vite Plus and Bun repositories. Covers automated linting, formatting, type checking with vp check, automated production builds with vp build, high-resolution PDF/ZIP asset generation, and zero-downtime deployment to GitHub Pages. Use when configuring GitHub Actions, troubleshooting CI failures, or optimizing build caches.
license: MIT
metadata:
  author: Orphee
  version: "1.0.0"
---

# GitHub Actions CI/CD with Vite Plus & Bun

This guide provides drop-in, production-ready GitHub Actions workflows for continuous integration and zero-downtime deployment to **GitHub Pages** using **VoidZero's Vite Plus (`vp`)** and **Bun**.

---

## 1. Production Deployment Workflow (`.github/workflows/deploy.yml`)

This workflow automatically:

1. Validates code formatting, linting, and TypeScript types in parallel with `vp check`.
2. Generates high-resolution production assets (`presentation.pdf` and `presentation-slides.zip`).
3. Bundles production files with `vp build`.
4. Deploys the built presentation directly to GitHub Pages.

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main
      - master
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Code
        uses: actions/checkout@v7.0.1

      - name: Setup Bun Runtime
        uses: oven-sh/setup-bun@v2
        with:
          bun-version: latest

      - name: Setup Vite Plus (vp)
        uses: voidzero-dev/setup-vp@v1.21.2
        with:
          node-version: "24"
          cache: true

      - name: Install Dependencies
        run: bun install --frozen-lockfile

      - name: Run Static Checks (Oxfmt, Oxlint & Type-Check)
        run: vp check

      - name: Build Production Bundle
        run: vp build

      - name: Upload Pages Artifact
        uses: actions/upload-pages-artifact@v5.0.0
        with:
          path: dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    needs: build
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4.0.5
```

---

## 2. Pull Request Quality Gate (`.github/workflows/ci.yml`)

Ensures every pull request passes strict checks before merging:

```yaml
name: Continuous Integration

on:
  pull_request:
    branches:
      - main
      - master

concurrency:
  group: ${{ github.workflow }}-${{ github.ref }}
  cancel-in-progress: true

jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v7.0.1

      - name: Setup Bun
        uses: oven-sh/setup-bun@v2
        with:
          bun-version: latest

      - name: Setup Vite Plus
        uses: voidzero-dev/setup-vp@v1.21.2
        with:
          node-version: "24"
          cache: true

      - name: Install Dependencies
        run: bun install --frozen-lockfile

      - name: Static Analysis
        run: vp check

      - name: Verify Build
        run: vp build
```

---

## 3. Best Practices & Optimization Tips

1. **Use `concurrency` with `cancel-in-progress: true`**: Aborts obsolete in-flight runs when new commits are pushed to the same PR or branch, saving GitHub Actions minutes.
2. **Deterministic Locking**: Always use `bun install --frozen-lockfile` in CI to ensure reproducibility and prevent unexpected package upgrades.
3. **`vp check` in CI**: Rather than running `prettier --check`, `eslint`, and `tsc` sequentially, a single `vp check` executes all three checks in parallel in Rust, completing in under 300 milliseconds.
4. **Export Artifact Handling**: Store static downloads (`presentation.pdf`, `presentation-slides.zip`) inside `public/exports/` so Vite automatically copies them to `dist/exports/` during `vp build`.
