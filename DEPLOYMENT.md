# Catatan Cloudflare Workers

Konfigurasi proyek ini dibuat untuk mode **Workers Static Assets**.

| Area pemeriksaan | Implementasi proyek |
| --- | --- |
| Konfigurasi Wrangler | `wrangler.jsonc` berisi `name`, `compatibility_date`, dan `assets.directory`. |
| Sumber deploy | Direktori aset adalah `./dist`, relatif terhadap `wrangler.jsonc` di akar proyek. |
| Skrip CI/deploy | `pnpm deploy` menjalankan `npx --yes wrangler@4.123.0 deploy` tanpa argumen aset tambahan. |
| Pages CI | Tidak digunakan. Tidak ada konfigurasi yang disalin ke `dist/client/`, sehingga tidak ada risiko path menjadi `dist/client/dist/client`. |
| JSONC | Konfigurasi deploy memakai JSON tanpa komentar atau trailing comma. |

Jika platform menjalankan `wrangler deploy` secara langsung, hasilnya setara dengan skrip `pnpm deploy` karena seluruh konfigurasi penting berada di `wrangler.jsonc`.
