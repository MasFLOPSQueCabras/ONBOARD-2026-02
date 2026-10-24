---
name: vite-plus
description: Comprehensive guide for developing, building, linting, formatting, type-checking, and bundling modern web projects using Vite Plus (vp), VoidZero's unified toolchain powered by Rolldown and Oxc. Use when configuring vite-plus, running vp commands, optimizing Tailwind v4 plugins, troubleshooting dependencies, or setting up high-performance frontend builds.
license: MIT
metadata:
  author: Orphee
  version: "1.0.0"
---

# Vite Plus (`vp`) Skill Guide

Vite Plus (`vp`) is VoidZero's unified, high-performance web development toolchain. It pairs the familiar, pluggable developer experience of Vite with a completely native Rust core powered by **Rolldown** (a blazingly fast, Rollup-compatible bundler) and **Oxc** (an ultra-fast suite of JS/TS parser, linter, formatter, and minifier).

---

## 1. Core Architecture

```
┌────────────────────────────────────────────────────────┐
│                   Vite Plus (vp)                       │
├──────────────────────────┬─────────────────────────────┤
│   Dev Server & Bundler   │   Static Analysis Tooling   │
│   (Rolldown - Rust Core) │   (Oxc - Rust Core)         │
│   • Rollup-compatible    │   • oxlint (Fast linter)    │
│   • Instant native HMR   │   • oxfmt  (Fast formatter) │
│   • Sub-millisecond transforms│• Integrated Typecheck  │
└──────────────────────────┴─────────────────────────────┘
```

### Key Advantages over Classic Vite

1. **Unified CLI**: A single binary replaces separate runners (`vite`, `eslint`, `prettier`, `tsc --noEmit`).
2. **Parallelized Static Analysis (`vp check`)**: Runs oxfmt, oxlint, and TypeScript type-checking concurrently across available CPU cores (typically completing in under 250ms on 50+ files).
3. **Seamless Tailwind CSS v4 Integration**: Uses `@tailwindcss/vite` directly inside Rolldown without PostCSS overhead.
4. **Instant Production Builds**: `vp build` executes in milliseconds rather than seconds by avoiding V8 serialization bottlenecks during chunking.

---

## 2. Command Reference

All commands are invoked via `vp <command>` (or `bun run <script>` configured in `package.json`):

| Command      | Purpose                                                              | Typical Duration            |
| :----------- | :------------------------------------------------------------------- | :-------------------------- |
| `vp dev`     | Starts the native HMR development server                             | $\le 100\text{ ms}$         |
| `vp build`   | Bundles production distribution into `dist/`                         | $100\text{--}250\text{ ms}$ |
| `vp check`   | Concurrently runs formatting check, linting, and type checking       | $200\text{--}300\text{ ms}$ |
| `vp fmt`     | Formats all workspace files in-place using Oxc                       | $\le 150\text{ ms}$         |
| `vp lint`    | Analyzes code for warnings and errors using Oxc                      | $\le 100\text{ ms}$         |
| `vp preview` | Previews the production build locally on a lightweight static server | Instant                     |
| `vp create`  | Scaffolds a new project from official or custom templates            | $1\text{--}2\text{ s}$      |

---

## 3. Package Configuration

### `package.json` Standard Setup

```json
{
  "name": "my-presentation",
  "version": "1.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vp dev",
    "build": "vp build",
    "check": "vp check",
    "lint": "vp lint",
    "fmt": "vp fmt",
    "preview": "vp preview"
  },
  "devDependencies": {
    "@tailwindcss/vite": "^4.3.3",
    "@types/react": "^19.3.0",
    "@types/react-dom": "^19.3.0",
    "@vitejs/plugin-react": "^6.1.2",
    "tailwindcss": "^4.3.3",
    "typescript": "~6.0.3",
    "vite": "npm:@voidzero-dev/vite-plus-core@1.4.0",
    "vite-plus": "1.4.0"
  },
  "overrides": {
    "vite": "npm:@voidzero-dev/vite-plus-core@1.4.0"
  }
}
```

> [!IMPORTANT]
> Always include the `"overrides"` block pointing `"vite"` to `"npm:@voidzero-dev/vite-plus-core@1.4.0"`. This guarantees that internal plugins and downstream tools invoke the Rolldown-backed core rather than classic Vite.

---

## 4. `vite.config.ts` Best Practices

```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "node:path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  build: {
    target: "esnext",
    minify: "oxc", // Uses native Rust minifier
    cssMinify: "oxc",
    rollupOptions: {
      output: {
        // Keeps third-party runtimes isolated for optimal caching
        manualChunks: {
          react: ["react", "react-dom"],
          reveal: ["reveal.js"],
        },
      },
    },
  },
  server: {
    port: 5173,
    host: true,
  },
});
```

---

## 5. Troubleshooting & Agent Rules

1. **Syntax Semicolons & Formatting**: Oxc formatter enforces standard semicolons after export declarations and variable statements. If `vp check` reports `x Expected a semicolon`, run `vp fmt` to auto-repair formatting across all files.
2. **TypeScript Integration**: `vp check` runs TypeScript type checks in parallel. Ensure `tsconfig.json` has:
   ```json
   {
     "compilerOptions": {
       "target": "ESNext",
       "module": "ESNext",
       "moduleResolution": "bundler",
       "strict": true,
       "verbatimModuleSyntax": true,
       "isolatedModules": true,
       "noUncheckedIndexedAccess": true
     }
   }
   ```
3. **Multi-page Applications**: For sub-apps (like `/posters/index.html`), configure `build.rollupOptions.input`:
   ```typescript
   rollupOptions: {
     input: {
       main: resolve(__dirname, "index.html"),
       posters: resolve(__dirname, "posters/index.html"),
     },
   }
   ```
