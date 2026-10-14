import { notFound } from "next/navigation";
import { getDictionary, hasLocale, locales } from "../i18n";
import HtmlLang from "@/components/HtmlLang";
import BackToTop from "@/components/BackToTop";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <>
      <HtmlLang lang={lang} />
      {children}
      <BackToTop label={dict.nav.backToTop} />
    </>
  );
}
