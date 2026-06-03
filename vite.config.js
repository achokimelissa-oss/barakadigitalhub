import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import sitemap from "vite-plugin-sitemap";
import fs from "fs";
import path from "path";

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
    // Ensure a robots.txt in `public/` is copied to the build output.
    {
      name: "copy-robots-txt",
      closeBundle() {
        try {
          const src = path.resolve(__dirname, "public", "robots.txt");
          const destDir = path.resolve(__dirname, "dist");
          const dest = path.join(destDir, "robots.txt");
          if (fs.existsSync(src)) {
            if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });
            fs.copyFileSync(src, dest);
          }
        } catch (e) {
          // swallow errors to avoid build failure; log to console instead
          // eslint-disable-next-line no-console
          console.warn("copy-robots-txt plugin failed:", e && e.message);
        }
      }
    }
  ],
  build: { outDir: "dist" },
  publicDir: "public",
});
