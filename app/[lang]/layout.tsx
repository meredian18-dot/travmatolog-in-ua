import { notFound } from "next/navigation";
import { getDictionary, hasLocale, locales } from "../i18n";
import HtmlLang from "@/components/HtmlLang";
import BackToTop from "@/components/BackToTop";
import { BASE } from "@/app/base";
import { CONTACTS } from "@/app/contacts";

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
  const mobileCta: Record<string, string> = {
    uk: "Консультація",
    en: "Consultation",
    de: "Beratung",
    pl: "Konsultacja",
  };

  return (
    <>
      <HtmlLang lang={lang} />
      {children}
      <a
        href={CONTACTS.telegramHref}
        aria-label={dict.common.ctaPrimary}
        className="fixed bottom-[max(0.75rem,env(safe-area-inset-bottom))] left-3 sm:bottom-6 sm:left-6 z-30 inline-flex max-w-[calc(100vw-5.5rem)] items-center gap-2 sm:gap-3 rounded-full btn-metallic px-4 sm:px-5 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        <span aria-hidden="true">✉</span>
        <span className="hidden sm:inline">{dict.common.ctaPrimary}</span>
        <span className="sm:hidden">{mobileCta[lang]}</span>
        <span aria-hidden="true">→</span>
      </a>
      <BackToTop label={dict.nav.backToTop} />
    </>
  );
}
