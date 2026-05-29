import puppeteer from "puppeteer";
import { spawn } from "child_process";
import fs from "fs";
import path from "path";
import net from "net";

const DIST = path.resolve("dist");

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

function getFreePort() {
  return new Promise((resolve, reject) => {
    const server = net.createServer();
    server.unref();
    server.on("error", reject);
    server.listen(0, () => {
      const address = server.address();
      if (address && typeof address === "object") {
        const port = address.port;
        server.close(() => resolve(port));
      } else {
        reject(new Error("Failed to determine free port"));
      }
    });
  });
}

function startServer(port) {
  return new Promise((resolve, reject) => {
    const server = spawn("npx", ["vite", "preview", "--port", String(port), "--strictPort"], {
      stdio: ["ignore", "pipe", "pipe"],
      shell: true,
    });

    const onReady = (data) => {
      if (data.toString().includes("Local")) {
        server.stdout.off("data", onReady);
        clearTimeout(fallback);
        resolve(server);
      }
    };

    server.stdout.on("data", onReady);
    server.stderr.on("data", (data) => {
      console.error(data.toString());
    });

    const fallback = setTimeout(() => {
      server.stdout.off("data", onReady);
      resolve(server);
    }, 5000);

    server.on("error", reject);
  });
}

async function prerender() {
  const port = await getFreePort();
  const BASE = `http://localhost:${port}`;
  console.log(`🔨 Starting preview server on port ${port}...`);
  const server = await startServer(port);

  try {
    const browser = await puppeteer.launch({ args: ["--no-sandbox"] });
    const page = await browser.newPage();

    for (const route of routes) {
      console.log(`📄 Rendering ${route}`);
      await page.goto(`${BASE}${route}`, { waitUntil: "networkidle0", timeout: 15000 });
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const html = await page.content();
      const dir = path.join(DIST, route === "/" ? "" : route);
      fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(path.join(dir, "index.html"), html);
      console.log(`   ✅ Saved to dist${route}/index.html`);
    }

    await browser.close();
    console.log("\n🎉 Prerendering complete!");
  } finally {
    server.kill("SIGTERM");
  }
}

prerender().catch((error) => {
  console.error(error);
  process.exit(1);
});
