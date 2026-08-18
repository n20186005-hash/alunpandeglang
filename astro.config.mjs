import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// The sole site URL configuration. Leave SITE_URL unset for local or preview builds.
const site = process.env.SITE_URL ? new URL(process.env.SITE_URL) : undefined;

function manuscriptStorageProxy() {
  return {
    name: "manus-storage-proxy",
    configureServer(server) {
      server.middlewares.use("/manus-storage", async (req, res) => {
        const key = req.url?.replace(/^\//, "");
        const forgeBaseUrl = (process.env.BUILT_IN_FORGE_API_URL || "").replace(/\/+$/, "");
        const forgeKey = process.env.BUILT_IN_FORGE_API_KEY;
        if (!key || !forgeBaseUrl || !forgeKey) {
          res.writeHead(404, { "Content-Type": "text/plain" });
          res.end("Asset unavailable");
          return;
        }
        try {
          const url = new URL("v1/storage/presign/get", `${forgeBaseUrl}/`);
          url.searchParams.set("path", key);
          const response = await fetch(url, { headers: { Authorization: `Bearer ${forgeKey}` } });
          const payload = response.ok ? await response.json() : null;
          if (!payload?.url) throw new Error("No signed asset URL");
          res.writeHead(307, { Location: payload.url, "Cache-Control": "no-store" });
          res.end();
        } catch {
          res.writeHead(502, { "Content-Type": "text/plain" });
          res.end("Asset proxy error");
        }
      });
    },
  };
}

export default defineConfig({
  site,
  output: "static",
  integrations: site ? [sitemap()] : [],
  vite: {
    plugins: [tailwindcss(), manuscriptStorageProxy()],
    server: { host: true, allowedHosts: true },
  },
});
