import { redirect } from "next/navigation";
import { locales, type Locale } from "@/app/i18n";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function LegacyLengthening({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  redirect(`/${lang}/treatments/limb-lengthening/`);
}
