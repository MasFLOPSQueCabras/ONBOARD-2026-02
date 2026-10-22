import { defineConfig, lazyPlugins } from "vite-plus";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: lazyPlugins(() => [react(), tailwindcss()]),
  base: process.env.NODE_ENV === "production" ? "/ONBOARD-2026-02/" : "/",
  fmt: {
    ignorePatterns: ["dist/**"],
  },
  lint: {
    ignorePatterns: ["dist/**"],
    plugins: ["react", "typescript", "oxc"],
    options: {
      typeAware: true,
      typeCheck: true,
    },
    rules: {
      "react/rules-of-hooks": "error",
      "react/only-export-components": ["warn", { allowConstantExport: true }],
    },
  },
  build: {
    target: "esnext",
    cssMinify: "lightningcss",
    modulePreload: {
      polyfill: false,
    },
    rolldownOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules/reveal.js")) {
            return "reveal";
          }
          if (id.includes("node_modules/react") || id.includes("node_modules/scheduler")) {
            return "react";
          }
        },
      },
    },
  },
});
