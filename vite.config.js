import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import sitemap from "vite-plugin-sitemap";

export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: "https://www.barakadigitalhub.com",
      outDir: "dist",
      // Disabled automatic robots.txt generation to avoid build-time ENOENT
      generateRobotsTxt: false,
      robots: [{ userAgent: "*", allow: "/" }],
    }),
  ],
  build: { outDir: "dist" },
  publicDir: "public",
});
