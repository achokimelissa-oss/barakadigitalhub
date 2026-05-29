import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { renderToString } from "react-dom/server";
import { createServer as createViteServer } from "vite";
import React from "react";
import { StaticRouter } from "react-router-dom/server.js";
import { HelmetProvider } from "react-helmet-async";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname);
const DIST = path.resolve(ROOT, "dist");
const TEMPLATE_PATH = path.resolve(DIST, "index.html");

const routes = [
  "/",
  "/services",
  "/about",
  "/impact",
  "/careers",
  "/privacy",
  "/contact",
  "/pilot",
  "/workflow",
  "/operations",
];

function writeHtml(route, html) {
  const routePath = route === "/" ? DIST : path.join(DIST, route.slice(1));
  fs.mkdirSync(routePath, { recursive: true });
  fs.writeFileSync(path.join(routePath, "index.html"), html, "utf-8");
}

async function prerender() {
  if (!fs.existsSync(TEMPLATE_PATH)) {
    console.error("dist/index.html not found. Run `npm run build` first.");
    process.exit(1);
  }

  const template = fs.readFileSync(TEMPLATE_PATH, "utf-8");
  const vite = await createViteServer({
    root: ROOT,
    server: { middlewareMode: "ssr" },
    appType: "custom",
  });

  try {
    const { default: App } = await vite.ssrLoadModule("/src/App.jsx");

    for (const route of routes) {
      const helmetContext = {};
      const appHtml = renderToString(
        React.createElement(
          HelmetProvider,
          { context: helmetContext },
          React.createElement(StaticRouter, { location: route }, React.createElement(App))
        )
      );

      const head = [
        helmetContext.helmet?.title.toString(),
        helmetContext.helmet?.meta.toString(),
        helmetContext.helmet?.link.toString(),
        helmetContext.helmet?.style.toString(),
        helmetContext.helmet?.script.toString(),
      ]
        .filter(Boolean)
        .join("\n");

      const html = template
        .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
        .replace("</head>", `${head}\n</head>`);

      writeHtml(route, html);
      console.log(`Rendered ${route} -> ${route === "/" ? "dist/index.html" : `dist${route}/index.html`}`);
    }

    console.log("\n🎉 Prerendering complete without Chromium.");
  } finally {
    await vite.close();
  }
}

prerender().catch((error) => {
  console.error(error);
  process.exit(1);
});
