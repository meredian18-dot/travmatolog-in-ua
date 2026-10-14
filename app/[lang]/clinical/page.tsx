import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary, hasLocale, type Locale } from "../../i18n";
import TopBar from "@/components/TopBar";
import Nav from "@/components/Nav";
import ClinicalHero from "@/components/clinical/ClinicalHero";
import Ecosystem from "@/components/clinical/Ecosystem";
import ClinicalCases from "@/components/clinical/ClinicalCases";
import ProfessionalActivity from "@/components/clinical/ProfessionalActivity";
import Partnership from "@/components/clinical/Partnership";
import Footer from "@/components/Footer";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = getDictionary(lang);
  return {
    title: dict.meta.clinicalTitle,
    description: dict.meta.clinicalDescription,
  };
}

export default async function Clinical({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const loc = lang as Locale;
  const dict = getDictionary(loc);

  return (
    <>
      <div className="relative">
        <ClinicalHero dict={dict} />
        <div className="absolute top-0 left-0 right-0 z-50">
          <TopBar dict={dict} lang={loc} />
          <Nav dict={dict} lang={loc} current="clinical" />
        </div>
      </div>
      <main className="flex flex-col">
        <Ecosystem dict={dict} />
        <ClinicalCases dict={dict} />
        <ProfessionalActivity dict={dict} />
        <Partnership dict={dict} />
      </main>
      <Footer dict={dict} lang={loc} />
    </>
  );
}
