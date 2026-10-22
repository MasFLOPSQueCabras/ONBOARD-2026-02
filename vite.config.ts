import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: process.env.NODE_ENV === "production" ? "/ONBOARD-2026-02/" : "/",
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
