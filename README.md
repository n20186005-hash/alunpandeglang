# Panduan Alun-Alun Pandeglang

Proyek ini adalah situs statis **Astro + Tailwind CSS + TypeScript** untuk panduan pengunjung independen dan nirlaba. Seluruh konten halaman publik berbahasa Indonesia.

## Pengembangan lokal

Gunakan Node.js `22.13.0` dan pnpm `11.22.0`, sebagaimana dikunci dalam `.node-version`, `engines`, dan `packageManager`.

```bash
corepack pnpm install --frozen-lockfile
pnpm check
pnpm build
```

## Konfigurasi domain

Satu-satunya lokasi untuk domain produksi adalah variabel `SITE_URL` yang dibaca oleh field `site` di `astro.config.mjs`. Isi `SITE_URL` saat domain telah tersedia. Bila kosong, proyek tetap dapat dibangun: canonical dan Open Graph absolut tidak diterbitkan, sedangkan integrasi sitemap tidak dijalankan.

## Cloudflare Workers Static Assets

Setelah build, jalankan `pnpm deploy`. Skrip ini memanggil Wrangler `4.123.0` secara eksplisit dan konfigurasi `wrangler.jsonc` menggunakan `assets.directory: "./dist"`; tidak ada parameter `--assets` tersembunyi. Proyek ini memakai **Workers Static Assets**, bukan Pages CI, sehingga tidak menyalin konfigurasi ke `dist/client/` dan tidak membuat penunjuk `dist/client/wrangler.json`.

## Pemeriksaan bersih

Untuk pemeriksaan instalasi dari awal, hapus `node_modules`, lalu jalankan:

```bash
CI=1 corepack pnpm install --frozen-lockfile
pnpm check
pnpm build
```

`pnpm-workspace.yaml` sengaja tidak dibuat karena proyek ini adalah paket tunggal.
