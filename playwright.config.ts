import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: 2,
  reporter: "list",
  use: {
    baseURL: "http://127.0.0.1:4173/ONBOARD-2026-02/",
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
    locale: "es-CO",
    timezoneId: "America/Bogota",
    reducedMotion: "reduce",
  },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
  webServer: {
    command: "bun run preview --host 127.0.0.1 --port 4173 --strictPort",
    url: "http://127.0.0.1:4173/ONBOARD-2026-02/",
    reuseExistingServer: !process.env.CI,
  },
});
