import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
const site = new URL(process.env.SITE_URL?.trim() || "https://alunpandeglang.com").href;
export default defineConfig({site,output:"static",integrations:[sitemap()],vite:{plugins:[tailwindcss()],server:{host:true,allowedHosts:true}}});
