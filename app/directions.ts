import type { Locale } from "@/app/i18n";
import rawDirectionsUk from "@/app/directions.uk.json";
import rawDirectionsEn from "@/app/directions.en.json";
import rawDirectionsDe from "@/app/directions.de.json";
import rawDirectionsPl from "@/app/directions.pl.json";

export interface BodyItem {
  type: string;
  text?: string;
  items?: string[];
  href?: string;
}
export interface Block {
  heading: string | null;
  body: BodyItem[];
  divider: boolean;
  caseImages?: string[];
  /** "landscape" for wide case photos (e.g. full-limb X-rays); defaults to portrait. */
  caseAspect?: "landscape" | "portrait";
  /** An educational diagram shown at the top of this block (instead of in the article-level gallery). */
  diagram?: string;
}
export interface Article {
  title: string;
  lead: string;
  intro: string;
  hero: string;
  gallery: string[];
  blocks: Block[];
}
export interface DirectionCard {
  slug: string;
  title: string;
  summary: string;
  hero: string;
}
export interface DirectionsData {
  cards: DirectionCard[];
  articles: Record<string, Article>;
}

const directionsByLocale: Record<Locale, DirectionsData> = {
  uk: rawDirectionsUk as unknown as DirectionsData,
  en: rawDirectionsEn as unknown as DirectionsData,
  de: rawDirectionsDe as unknown as DirectionsData,
  pl: rawDirectionsPl as unknown as DirectionsData,
};

export const getDirections = (locale: Locale): DirectionsData => directionsByLocale[locale];
