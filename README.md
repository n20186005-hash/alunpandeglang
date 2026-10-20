# Alun-Alun Pandeglang visitor guide

Independent Indonesian and English guide built with Astro, Tailwind and TypeScript. Use the versions in `package.json`; install with the committed lockfile, then run `pnpm check`, `pnpm build` and `pnpm exec wrangler deploy --dry-run`.

`astro.config.mjs` defaults to `https://alunpandeglang.com`; `SITE_URL` can override the absolute deployment origin. Legal pages pair corresponding topics across languages. FAQs use a shared visible/schema array. A Worker runs before ASSETS, preserving path/query in HTTP/www redirects and serving unknown paths as noindex 404.

Dated public sources and editorial limitations are recorded in `research-notes.md`. Decorative WebP illustrations are project assets, not documentary photographs of current conditions. Build output is reproducible from `src/` and `public/`.

Keep private reports, credentials, local runtime state and dependency caches outside the published tree. Local checks and dry-runs do not establish production deployment or visual acceptance.
