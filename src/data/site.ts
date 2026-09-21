// Central SEO site-name config. Format: 景点名称 + 城市 + 旅游指南
// The square is named after its regency (Pandeglang), so appending "Pandeglang"
// again would be redundant. GSC shows users append the province instead
// ("alun alun pandeglang banten" — 15 impressions, avg rank 9.60), so "城市"
// is rendered as Banten.
export const SITE_NAME = {
  id: "Alun-Alun Pandeglang Banten — Panduan Wisata",
  en: "Alun-Alun Pandeglang Banten — Visitor Guide",
} as const;

export type Lang = keyof typeof SITE_NAME;

export function withSiteName(pageTitle: string, lang: Lang): string {
  return `${pageTitle} | ${SITE_NAME[lang]}`;
}
