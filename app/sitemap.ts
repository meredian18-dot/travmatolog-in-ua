import type { MetadataRoute } from "next";
import { locales } from "./i18n";
import { getDirections } from "./directions";

export const dynamic = "force-static";

const SITE_URL = "https://travmatolog.in.ua";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const lang of locales) {
    entries.push({ url: `${SITE_URL}/${lang}/`, priority: 1 });
    entries.push({ url: `${SITE_URL}/${lang}/clinical/`, priority: 0.6 });
    for (const slug of Object.keys(getDirections(lang).articles)) {
      entries.push({ url: `${SITE_URL}/${lang}/treatments/${slug}/`, priority: 0.8 });
    }
  }

  return entries;
}
