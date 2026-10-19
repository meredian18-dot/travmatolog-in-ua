import type { Metadata } from "next";
import { locales, type Locale } from "./i18n";

const ORIGIN = "https://travmatolog.in.ua";

/** Canonical and reciprocal alternate languages for the same content page. */
export function localizedAlternates(lang: Locale, suffix = ""): NonNullable<Metadata["alternates"]> {
  const path = suffix ? `/${suffix.replace(/^\/+|\/+$/g, "")}/` : "/";
  const languages: Record<string, string> = {};
  for (const locale of locales) languages[locale] = `${ORIGIN}/${locale}${path}`;
  languages["x-default"] = `${ORIGIN}/uk${path}`;
  return { canonical: languages[lang], languages };
}
