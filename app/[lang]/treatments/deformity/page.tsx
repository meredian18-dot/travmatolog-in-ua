import type { Metadata } from "next";
import { locales } from "@/app/i18n";
import { BASE } from "@/app/base";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  return { robots: { index: false, follow: true }, alternates: { canonical: `https://travmatolog.in.ua/${lang}/treatments/trauma-reconstruction/` } };
}

export default async function LegacyDeformity({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const target = `${BASE}/${lang}/treatments/trauma-reconstruction/`;
  return <main><meta httpEquiv="refresh" content={`0; url=${target}`} /><p><a href={target}>Continue to the current page</a></p></main>;
}
