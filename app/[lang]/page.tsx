import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary, hasLocale, type Locale } from "../i18n";
import TopBar from "@/components/TopBar";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import AboutField from "@/components/AboutField";
import Treatments from "@/components/Treatments";
import About from "@/components/About";
import StatsBar from "@/components/StatsBar";
import Academic from "@/components/Academic";
import Technology from "@/components/Technology";
import Philosophy from "@/components/Philosophy";
import BookOnline from "@/components/BookOnline";
import Footer from "@/components/Footer";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = getDictionary(lang);
  return { title: dict.meta.homeTitle, description: dict.meta.homeDescription };
}

export default async function Home({
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
        <Hero dict={dict} lang={loc} />
        <div className="absolute top-0 left-0 right-0 z-50">
          <TopBar dict={dict} lang={loc} />
          <Nav dict={dict} lang={loc} current="home" />
        </div>
      </div>
      <main className="flex flex-col">
        <AboutField dict={dict} lang={loc} />
        <Philosophy dict={dict} />
        <Treatments dict={dict} lang={loc} />
        <About dict={dict} />
        <StatsBar dict={dict} />
        <Academic dict={dict} />
        <Technology dict={dict} />
        <BookOnline dict={dict} />
      </main>
      <Footer dict={dict} lang={loc} />
    </>
  );
}
