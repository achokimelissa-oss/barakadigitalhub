import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import prerender from "vite-plugin-prerender";
import JSDOMRenderer from "@prerenderer/renderer-jsdom";

export default defineConfig({
  plugins: [
    react(),
    prerender({
      staticDir: path.resolve(__dirname, "dist"),
      routes: [
        "/",
        "/services",
        "/about",
        "/impact",
        "/careers",
        "/privacy",
        "/contact",
        "/pilot",
        "/workflow",
        "/operations"
      ],
      server: {
        host: "127.0.0.1",
        port: 4173,
      },
      renderer: new JSDOMRenderer({
        renderAfterTime: 1500,
        JSDOMOptions: {
          requestInterceptor(request) {
            const allowedHost = "127.0.0.1";
            if (!request.url.startsWith(`http://${allowedHost}:4173`)) {
              request.abort();
            }
          },
        },
      }),
    }),
  ],
  build: {
    outDir: "dist",
  },
  publicDir: "public",
});
