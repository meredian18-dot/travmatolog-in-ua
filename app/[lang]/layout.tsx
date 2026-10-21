import { notFound } from "next/navigation";
import { getDictionary, hasLocale, locales } from "../i18n";
import HtmlLang from "@/components/HtmlLang";
import BackToTop from "@/components/BackToTop";
import { BASE } from "@/app/base";

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
      <a
        href={`${BASE}/${lang}/#consultation`}
        aria-label={dict.nav.contacts}
        className="fixed bottom-5 left-4 sm:bottom-6 sm:left-6 z-40 inline-flex items-center gap-3 rounded-full btn-metallic px-5 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        <span aria-hidden="true">✉</span>
        {dict.nav.contacts}
        <span aria-hidden="true">→</span>
      </a>
      <BackToTop label={dict.nav.backToTop} />
    </>
  );
}
