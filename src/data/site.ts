export const SITE_NAME = {
  id: "Alun-Alun Pandeglang Banten — Panduan Wisata",
  en: "Alun-Alun Pandeglang Banten — Visitor Guide",
} as const;

export type Lang = keyof typeof SITE_NAME;

export function withSiteName(pageTitle: string, lang: Lang): string {
  return `${pageTitle} | ${SITE_NAME[lang]}`;
}
