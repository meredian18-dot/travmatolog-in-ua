import uk from "./dictionaries/uk.json";
import en from "./dictionaries/en.json";
import de from "./dictionaries/de.json";
import pl from "./dictionaries/pl.json";

export const locales = ["uk", "en", "de", "pl"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "uk";

/** Labels shown in the locale switcher. */
export const localeNames: Record<Locale, string> = {
  uk: "UA",
  en: "EN",
  de: "DE",
  pl: "PL",
};

const dictionaries = { uk, en, de, pl } as const;

/** The shape every dictionary must follow (uk is the source of truth). */
export type Dict = typeof uk;

export const hasLocale = (locale: string): locale is Locale =>
  (locales as readonly string[]).includes(locale);

export const getDictionary = (locale: Locale): Dict => dictionaries[locale];
