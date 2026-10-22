import type { Metadata } from "next";
import { localizedAlternates } from "@/app/seo";
import { notFound } from "next/navigation";
import { getDictionary, hasLocale, locales, type Locale } from "@/app/i18n";
import { BASE } from "@/app/base";
import TopBar from "@/components/TopBar";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ImageLightbox from "@/components/ImageLightbox";
import HalluxInternationalUk from "@/components/HalluxInternationalUk";
import ShoulderInternationalUk from "@/components/ShoulderInternationalUk";
import ShoulderInternational from "@/components/ShoulderInternational";
import HipInternationalUk from "@/components/HipInternationalUk";
import KneeInternationalUk from "@/components/KneeInternationalUk";
import ArthroplastyInternational from "@/components/ArthroplastyInternational";
import HalluxInternational from "@/components/HalluxInternational";
import { getDirections, type Article, type Block } from "@/app/directions";

export function generateStaticParams() {
  return locales.flatMap((lang) =>
    Object.keys(getDirections(lang).articles).map((slug) => ({ lang, slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!hasLocale(lang)) return {};
  const dict = getDictionary(lang);
  const article = getDirections(lang).articles[slug];
  if (!article) return {};
  if (slug === "shoulder-replacement") {
    const meta: Record<string, {title:string; description:string}> = {
      uk:{title:"Ендопротезування плечового суглоба в Києві | Максим Байда",description:"Анатомічне та реверсивне ендопротезування плечового суглоба (ATSA/RTSA): показання, планування, операція, ризики, реабілітація та консультація."},
      en:{title:"Shoulder Replacement in Ukraine | Dr Maksym Baida",description:"Anatomic and reverse shoulder replacement (ATSA/RTSA): indications, rotator cuff evaluation, surgical planning, risks, rehabilitation and consultation."},
      de:{title:"Schulterprothese & inverse Schulter-TEP | Dr. Baida",description:"Anatomische und inverse Schulterprothese: Indikationen, Rotatorenmanschette, OP-Planung, Risiken, Rehabilitation und Beratung in der Ukraine."},
      pl:{title:"Endoproteza barku na Ukrainie | Dr Maksym Baida",description:"Endoprotezoplastyka barku: proteza anatomiczna i odwrócona, wskazania, planowanie operacji, ryzyko, rehabilitacja i konsultacja ortopedyczna."}
    };
    return {...meta[lang], alternates:localizedAlternates(lang, `treatments/${slug}`)};
  }
  if (slug === "knee-replacement") {
    const meta: Record<string, {title: string; description: string}> = {
      uk: {title: "Ендопротезування колінного суглоба в Києві | Максим Байда", description: "Заміна колінного суглоба при гонартрозі: тотальне та часткове ендопротезування, субвастус-доступ, ризики, реабілітація, вартість і консультація ортопеда."},
      en: {title: "Knee Replacement Surgery in Ukraine | Dr Maksym Baida", description: "Total and partial knee replacement for osteoarthritis. Subvastus surgical approach, individual planning, rehabilitation and orthopaedic consultation in Ukraine."},
      de: {title: "Knie-TEP & Knieprothese in der Ukraine | Dr Baida", description: "Kniegelenkersatz bei Gonarthrose: Teilprothese, Knie-TEP, Subvastus-Zugang, individuelle Planung, Rehabilitation und Beratung in der Ukraine."},
      pl: {title: "Endoproteza kolana na Ukrainie | Dr Maksym Baida", description: "Endoprotezoplastyka kolana przy gonartrozie: całkowita i częściowa wymiana stawu, dostęp subvastus, rehabilitacja i konsultacja ortopedyczna."}
    };
    return {...meta[lang], alternates: localizedAlternates(lang, `treatments/${slug}`)};
  }
  if (slug === "hip-replacement") {
    const meta: Record<string, { title: string; description: string }> = {
      uk: { title: "Ендопротезування кульшового суглоба в Києві | Максим Байда", description: "Заміна кульшового (тазостегнового) суглоба при коксартрозі, асептичному некрозі та наслідках травм. Операція, реабілітація та консультація ортопеда в Києві." },
      en: { title: "Hip Replacement Surgery in Ukraine | Dr Maksym Baida", description: "Total hip replacement for arthritis, avascular necrosis and post-traumatic conditions. Personalised surgical planning and consultations in Ukraine." },
      de: { title: "Hüft-TEP & Hüftprothese in der Ukraine | Dr. Baida", description: "Hüftgelenkersatz bei Arthrose, Hüftkopfnekrose und Unfallfolgen. Individuelle OP-Planung, Rehabilitation und orthopädische Beratung in der Ukraine." },
      pl: { title: "Endoproteza biodra – operacja na Ukrainie | Dr Baida", description: "Endoprotezoplastyka biodra przy koksartrozie, martwicy głowy kości udowej i następstwach urazów. Konsultacja i indywidualne planowanie leczenia na Ukrainie." },
    };
    return { ...meta[lang], alternates: localizedAlternates(lang, `treatments/${slug}`) };
  }
  if (lang === "uk" && slug === "hallux-valgus") {
    return {
      title: "Hallux valgus — операція на кісточці стопи | Максим Байда",
      description: "Хірургічне лікування Hallux valgus: корекція кісточки на нозі, діагностика та відновлення після операції. Консультація ортопеда Максима Байди в Києві та звернення з-за кордону.",
      alternates: localizedAlternates(lang, `treatments/${slug}`),
    };
  }
  if (slug === "hallux-valgus") {
    const meta: Record<string, { title: string; description: string }> = {
      pl: { title: "Operacja haluksów (paluch koślawy) | Dr Maksym Baida", description: "Operacja haluksów, leczenie palucha koślawego i rekonwalescencja. Konsultacja ortopedyczna, indywidualne planowanie leczenia w Ukrainie dla pacjentów z Polski." },
      de: { title: "Hallux valgus OP & Behandlung | Dr. Maksym Baida", description: "Hallux valgus (Ballenzeh): Operation, Behandlung und Nachsorge. Individuelle orthopädische Beratung und mögliche OP-Planung in der Ukraine für Patienten im Ausland." },
      en: { title: "Bunion Surgery (Hallux Valgus) | Dr Maksym Baida", description: "Hallux valgus and bunion surgery: assessment, surgical correction and recovery. Orthopaedic second opinion and personalised treatment planning in Ukraine." },
    };
    if (meta[lang]) return { ...meta[lang], alternates: localizedAlternates(lang, `treatments/${slug}`) };
  }
  return { title: `${article.title} — ${dict.meta.homeTitle}`, description: article.lead, alternates: localizedAlternates(lang, `treatments/${slug}`) };
}

export default async function TreatmentDetail({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  if (!hasLocale(lang)) notFound();
  const loc = lang as Locale;
  const dict = getDictionary(loc);

  const article = getDirections(loc).articles[slug];
  if (!article) notFound();
  const schema = (slug === "hip-replacement" || slug === "knee-replacement" || slug === "shoulder-replacement") ? {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "@id": `https://travmatolog.in.ua/${loc}/treatments/${slug}/#medicalwebpage`,
    url: `https://travmatolog.in.ua/${loc}/treatments/${slug}/`,
    name: article.title,
    description: article.lead,
    inLanguage: loc === "uk" ? "uk-UA" : loc === "en" ? "en" : loc === "de" ? "de-DE" : "pl-PL",
    about: { "@type": "MedicalProcedure", name: article.title, procedureType: "Surgical" },
    author: { "@type": "Person", name: "Maksym Baida", jobTitle: "Orthopaedic trauma surgeon", url: `https://travmatolog.in.ua/${loc}/#about-doctor` },
    publisher: { "@type": "Organization", name: "travmatolog.in.ua", url: "https://travmatolog.in.ua/" },
  } : null;
  const crumbs = (slug === "knee-replacement" || slug === "shoulder-replacement") ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: dict.nav.home, item: `https://travmatolog.in.ua/${loc}/` },
      { "@type": "ListItem", position: 2, name: article.title, item: `https://travmatolog.in.ua/${loc}/treatments/${slug}/` },
    ],
  } : null;
  return <>
    {crumbs && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs).replace(/</g, "\\u003c") }} />}
    {schema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />}
    <RichDetail dict={dict} lang={loc} slug={slug} article={article} />
  </>;
}

type BlockGroup =
  | { kind: "divider"; heading: string | null }
  | { kind: "faq"; blocks: Block[] }
  | { kind: "card"; block: Block };

function groupBlocks(blocks: Block[]): BlockGroup[] {
  // Only the section after the article's last divider (its FAQ block, in every
  // current article) collapses question-headed items into an accordion —
  // question-phrased headings elsewhere in the article are regular narrative
  // content and must stay visible.
  const lastDividerIndex = blocks.reduce(
    (acc, block, i) => (block.divider ? i : acc),
    -1
  );

  const groups: BlockGroup[] = [];
  blocks.forEach((block, i) => {
    if (block.divider) {
      groups.push({ kind: "divider", heading: block.heading });
      return;
    }
    const isFaq = i > lastDividerIndex && !!block.heading && block.heading.trim().endsWith("?");
    const last = groups[groups.length - 1];
    if (isFaq && last && last.kind === "faq") {
      last.blocks.push(block);
      return;
    }
    groups.push(isFaq ? { kind: "faq", blocks: [block] } : { kind: "card", block });
  });
  return groups;
}

function localizedTreatmentImage(file: string, slug: string, lang: Locale): string {
  if (slug === "shoulder-replacement" && lang !== "uk") {
    if (file === "shoulder-replacement-cuff.jpg") return `shoulder-replacement-rotator-cuff-${lang}.png`;
    if (file === "shoulder-replacement-types.jpg") return `shoulder-replacement-types-${lang}.png`;
  }
  if (slug === "knee-replacement" && lang !== "uk" && (file === "knee-replacement-what.jpg" || file === "knee-replacement-diagram.jpg")) return file.replace(".jpg", `-${lang}.webp`);
  if (slug === "hip-replacement" && lang !== "uk" &&
      (file === "hip-replacement-planning.jpg" || file === "hip-replacement-access.jpg")) {
    return file.replace(".jpg", `-${lang}.svg`);
  }
  if (slug === "hallux-valgus" && lang !== "uk" &&
      (file === "hallux-valgus-diagram1.jpg" || file === "hallux-valgus-diagram2.jpg")) {
    return file.replace(".jpg", `-${lang}.webp`);
  }
  return file;
}

function BlockBody({ block, hideDiagram = false }: { block: Block; hideDiagram?: boolean }) {
  return (
    <>
      {block.diagram && !hideDiagram && (
        <ImageLightbox
          images={[`${BASE}/directions/${block.diagram}`]}
          className="mb-4 grid grid-cols-1"
          aspect="aspect-[3/2]"
          fit="contain"
          letterboxBg="bg-white"
        />
      )}
      {block.caseImages && block.caseImages.length > 0 && (
        <ImageLightbox
          images={block.caseImages.map((img) => `${BASE}/directions/${img}`)}
          className={
            block.caseAspect === "landscape"
              ? "mb-4 grid grid-cols-1 sm:grid-cols-2 gap-3"
              : "mb-4 grid grid-cols-2 sm:grid-cols-3 gap-3"
          }
          aspect={block.caseAspect === "landscape" ? "aspect-[2/1]" : "aspect-[3/4]"}
          fit={block.caseAspect === "landscape" ? "contain" : "cover"}
        />
      )}
      {block.body.map((item, j) => {
        if (item.items) {
          return (
            <ul key={j} className="space-y-2 pl-1">
              {item.items.map((li) => (
                <li key={li} className="flex gap-3">
                  <span aria-hidden className="shrink-0 w-1.5 h-1.5 mt-2.5 rounded-full bg-tan-dark" />
                  {li}
                </li>
              ))}
            </ul>
          );
        }
        if (item.type === "caption") {
          return (
            <p key={j} className="text-sm text-ink-muted italic">
              {item.text}
            </p>
          );
        }
        if ("href" in item && item.href) {
          return (
            <p key={j}>
              <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-tan-dark underline hover:no-underline">
                {item.text}
              </a>
            </p>
          );
        }
        return <p key={j}>{item.text}</p>;
      })}
    </>
  );
}

function RichDetail({
  dict,
  lang,
  slug,
  article,
}: {
  dict: ReturnType<typeof getDictionary>;
  lang: Locale;
  slug: string;
  article: Article;
}) {
  const t = dict.treatments;
  const isTha = slug === "hip-replacement";
  const isRich = isTha || slug === "knee-replacement" || slug === "shoulder-replacement";
  // International TKA shares the same accessible image and semantic heading framework.
  const imageDescriptions: Record<Locale, Record<string, string>> = {
    uk: { "hip-replacement-planning.jpg": "Інфографіка планування ендопротезування кульшового суглоба: положення компонентів, центр ротації та довжина кінцівки", "hip-replacement-access.jpg": "Анатомічна ілюстрація прямого переднього доступу до кульшового суглоба", "hip-replacement-case-after.jpg": "Післяопераційна рентгенограма кульшового суглоба після ендопротезування" },
    en: { "hip-replacement-planning.jpg": "Total hip replacement planning diagram with component position, hip centre and leg length", "hip-replacement-access.jpg": "Anatomical illustration of the direct anterior approach to the hip", "hip-replacement-case-after.jpg": "Postoperative hip replacement radiograph" },
    de: { "hip-replacement-planning.jpg": "Planung der Hüft-TEP mit Komponentenposition, Drehzentrum und Beinlänge", "hip-replacement-access.jpg": "Anatomische Darstellung des direkten vorderen Zugangs zur Hüfte", "hip-replacement-case-after.jpg": "Postoperatives Röntgenbild nach Hüftendoprothese" },
    pl: { "hip-replacement-planning.jpg": "Schemat planowania endoprotezoplastyki biodra: położenie implantów, środek obrotu i długość kończyny", "hip-replacement-access.jpg": "Ilustracja anatomiczna bezpośredniego dostępu przedniego do biodra", "hip-replacement-case-after.jpg": "Pooperacyjne zdjęcie RTG po endoprotezoplastyce stawu biodrowego" },
  };
  const kneeAlt: Record<Locale, Record<string,string>> = {
    uk: {},
    en: {"knee-replacement-diagram.jpg":"Knee mechanical-axis and surgical planning illustration","knee-replacement-what.jpg":"Diagram showing damaged knee joint surfaces and total knee replacement","knee-replacement-case-before1.jpg":"Standing radiograph of knees with osteoarthritis","knee-replacement-case-before2.jpg":"Knee osteoarthritis X-ray","knee-replacement-case-before3.jpg":"Full-length standing lower limb alignment X-ray","knee-replacement-case-after1.jpg":"Anteroposterior knee replacement radiograph","knee-replacement-case-after2.jpg":"Lateral knee replacement radiograph"},
    de: {"knee-replacement-diagram.jpg":"Schema zur Planung und mechanischen Beinachse bei Knie-TEP","knee-replacement-what.jpg":"Darstellung des Kniegelenkersatzes","knee-replacement-case-before1.jpg":"Belastete Röntgenaufnahme beider Knie mit Gonarthrose","knee-replacement-case-before2.jpg":"Röntgenbild einer Kniearthrose","knee-replacement-case-before3.jpg":"Ganzbeinaufnahme zur Achsbeurteilung","knee-replacement-case-after1.jpg":"Postoperative Knie-TEP in a.p. Projektion","knee-replacement-case-after2.jpg":"Postoperative Knie-TEP in seitlicher Projektion"},
    pl: {"knee-replacement-diagram.jpg":"Schemat planowania i osi mechanicznej kończyny przy endoprotezoplastyce kolana","knee-replacement-what.jpg":"Schemat całkowitej endoprotezoplastyki kolana","knee-replacement-case-before1.jpg":"RTG kolan pod obciążeniem z gonartrozą","knee-replacement-case-before2.jpg":"RTG choroby zwyrodnieniowej kolana","knee-replacement-case-before3.jpg":"RTG całych kończyn dolnych do oceny osi","knee-replacement-case-after1.jpg":"RTG endoprotezy kolana w projekcji przednio-tylnej","knee-replacement-case-after2.jpg":"RTG endoprotezy kolana w projekcji bocznej"}
  };
  const imageAlt = (file: string) => slug === "knee-replacement" ? (kneeAlt[lang][file] ?? ({
    "knee-replacement-diagram.jpg": "Схема ендопротеза колінного суглоба",
    "knee-replacement-what.jpg": "Анатомічна схема коліна й ендопротезування",
    "knee-replacement-case-before1.jpg": "Рентгенограма колінних суглобів при гонартрозі",
    "knee-replacement-case-before2.jpg": "Доопераційна рентгенограма при гонартрозі та деформації коліна",
    "knee-replacement-case-before3.jpg": "Панорамна рентгенограма нижніх кінцівок для оцінки механічної осі",
    "knee-replacement-case-after1.jpg": "Рентгенограма колінного ендопротеза у прямій проєкції",
    "knee-replacement-case-after2.jpg": "Рентгенограма колінного ендопротеза у бічній проєкції",
  }[file] ?? article.title)) : isTha ? (imageDescriptions[lang][file] ?? article.title) : "";

  const related: Record<Locale, { heading: string; links: { slug: string; label: string }[] }> = {
    uk: { heading: "Пов’язані напрямки лікування", links: [{ slug: "avn", label: "Асептичний некроз головки стегнової кістки" }, { slug: "revision-arthroplasty", label: "Ревізійне ендопротезування" }] },
    en: { heading: "Related treatments", links: [{ slug: "avn", label: "Avascular necrosis of the femoral head" }, { slug: "revision-arthroplasty", label: "Revision joint replacement" }] },
    de: { heading: "Verwandte Behandlungen", links: [{ slug: "avn", label: "Hüftkopfnekrose" }, { slug: "revision-arthroplasty", label: "Wechseloperation einer Endoprothese" }] },
    pl: { heading: "Powiązane metody leczenia", links: [{ slug: "avn", label: "Jałowa martwica głowy kości udowej" }, { slug: "revision-arthroplasty", label: "Rewizja endoprotezy" }] },
  };
  const zoomHint: Record<Locale, string> = { uk: "Натисніть на зображення, щоб збільшити", en: "Select the image to enlarge", de: "Bild zum Vergrößern auswählen", pl: "Kliknij obraz, aby powiększyć" };

  return (
    <>
      <div className="bg-tan-dark">
        <TopBar dict={dict} lang={lang} />
        <Nav dict={dict} lang={lang} current="home" />

        <div className="mx-auto max-w-[1200px] px-5 sm:px-8 pt-14 pb-16 sm:pt-20 sm:pb-24">
          <a
            href={`${BASE}/${lang}/#treatments`}
            className="inline-flex items-center gap-2 label-caps text-[11.5px] font-semibold text-white/70 hover:text-white transition-colors"
          >
            <span aria-hidden>←</span>
            {t.backLabel}
          </a>

          <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-6 lg:gap-10">
            <div className="shrink-0 w-40 sm:w-48 lg:w-56 aspect-[3/4] rounded-[8px] overflow-hidden bg-black/20 order-first">
              <img
                src={`${BASE}/directions/${article.hero}`}
                alt=""
                aria-hidden
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="label-caps-sm text-white/55 mb-4">{t.eyebrow}</div>
              <h1 className="font-sans font-light text-white leading-[1.05] tracking-[-0.02em] text-[clamp(1.75rem,4vw,3rem)]">
                {article.title}
              </h1>
              <p className="mt-5 text-white/80 text-lg sm:text-xl font-light leading-relaxed">
                {article.lead}
              </p>
            </div>
          </div>
        </div>
      </div>

      <main className="bg-paper">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8 py-14 sm:py-20">
          {article.gallery.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-10 items-center">
              <div className="min-w-0">
                <ImageLightbox
                  images={article.gallery.map((img) => `${BASE}/directions/${localizedTreatmentImage(img, slug, lang)}`)}
                  altTexts={article.gallery.map(imageAlt)}
                  className={`grid gap-3 ${article.gallery.length > 1 ? "grid-cols-2" : "grid-cols-1"}`}
                  aspect="aspect-[3/2]"
                  fit="contain"
                  letterboxBg="bg-white"
                />
                <p className="text-center text-xs text-ink-muted mt-2">{zoomHint[lang]}</p>
              </div>
              <p className="text-ink text-lg leading-relaxed">{article.intro}</p>
            </div>
          ) : (
            <p className="text-ink text-lg leading-relaxed">{article.intro}</p>
          )}

          <div className="mt-4">
            {groupBlocks(article.blocks).map((group, i) => {
              if (group.kind === "divider") {
                return (
                  <h2
                    key={i}
                    className="mt-14 mb-6 pb-3 border-b border-hairline label-caps text-ink-muted text-[12px] font-semibold"
                  >
                    {group.heading}
                  </h2>
                );
              }

              if (group.kind === "faq") {
                return (
                  <div key={i} className="mt-8 rounded-[8px] border border-hairline divide-y divide-hairline overflow-hidden">
                    {group.blocks.map((block, j) => (
                      <details key={j} className="group/faq px-5 py-4 sm:px-6 sm:py-5 open:bg-cream/50">
                        <summary className="cursor-pointer list-none flex items-center justify-between gap-4 marker:content-none [&::-webkit-details-marker]:hidden">
                          <h3 className="font-sans font-medium text-ink text-base sm:text-lg leading-snug">
                            {block.heading}
                          </h3>
                          <span
                            aria-hidden
                            className="shrink-0 flex items-center justify-center w-6 h-6 rounded-full border border-hairline text-ink-muted text-base leading-none transition-transform group-open/faq:rotate-45"
                          >
                            +
                          </span>
                        </summary>
                        <div className="mt-4 space-y-3.5 text-ink leading-relaxed">
                          <BlockBody block={block} />
                        </div>
                      </details>
                    ))}
                  </div>
                );
              }

              const block = group.block;
              const caseLayout = isTha && !!block.caseImages?.length;
              return (
                <div key={i} className="mt-6 rounded-[8px] border border-hairline bg-cream/60 p-6 lg:p-7">
                  {block.heading && (isRich ? <h2 className="font-sans font-medium text-ink text-lg mb-3">{block.heading}</h2> : <h3 className="font-sans font-medium text-ink text-lg mb-3">{block.heading}</h3>)}
                  {caseLayout ? (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-10 items-start">
                      <div className="min-w-0">
                        <ImageLightbox
                          images={block.caseImages!.map((img) => `${BASE}/directions/${img}`)}
                          altTexts={block.caseImages!.map(imageAlt)}
                          className="grid grid-cols-1"
                          aspect="aspect-[3/2]"
                          fit="contain"
                          letterboxBg="bg-white"
                        />
                        <p className="text-center text-xs text-ink-muted mt-2">{zoomHint[lang]}</p>
                      </div>
                      <div className="space-y-3.5 text-ink leading-relaxed min-w-0">
                        <BlockBody block={{ ...block, caseImages: [] }} />
                      </div>
                    </div>
                  ) : block.diagram ? (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-10 items-start">
                      <div className="min-w-0">
                        <ImageLightbox
                          images={[`${BASE}/directions/${localizedTreatmentImage(block.diagram, slug, lang)}`]}
                          altTexts={[imageAlt(block.diagram)]}
                          className="grid grid-cols-1"
                          aspect="aspect-[3/2]"
                          fit="contain"
                          letterboxBg="bg-white"
                        />
                        <p className="text-center text-xs text-ink-muted mt-2">{zoomHint[lang]}</p>
                      </div>
                      <div className="space-y-3.5 text-ink leading-relaxed min-w-0">
                        <BlockBody block={block} hideDiagram />
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-3.5 text-ink leading-relaxed">
                      <BlockBody block={block} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {(isTha || slug === "knee-replacement" || slug === "shoulder-replacement") && (
            <nav aria-label={related[lang].heading} className="mt-12 border-t border-hairline pt-8">
              <h2 className="text-lg font-medium text-ink mb-3">{related[lang].heading}</h2>
              <ul className="space-y-2">
                {(slug === "shoulder-replacement" ? [
                  { slug: "revision-arthroplasty", label: related[lang].links[1].label },
                  { slug: "hip-replacement", label: {uk:"Ендопротезування кульшового суглоба",en:"Hip replacement",de:"Hüftendoprothese",pl:"Endoprotezoplastyka biodra"}[lang] },
                ] : slug === "knee-replacement" ? [
                  { slug: "hip-replacement", label: { uk: "Ендопротезування кульшового суглоба", en: "Hip replacement surgery", de: "Hüftendoprothese", pl: "Endoprotezoplastyka biodra" }[lang] },
                  { slug: "revision-arthroplasty", label: related[lang].links[1].label },
                ] : related[lang].links).filter(item => !!getDirections(lang).articles[item.slug]).map(item => (
                  <li key={item.slug}><a className="text-tan-dark underline hover:no-underline" href={`${BASE}/${lang}/treatments/${item.slug}/`}>{item.label}</a></li>
                ))}
              </ul>
            </nav>
          )}
          {slug === "hallux-valgus" && (lang === "uk" ? <HalluxInternationalUk /> : <HalluxInternational lang={lang} />)}
          {slug === "shoulder-replacement" && (lang === "uk" ? <ShoulderInternationalUk /> : <ShoulderInternational lang={lang} />)}
          {slug === "hip-replacement" && lang === "uk" && <HipInternationalUk />}
          {slug === "knee-replacement" && lang === "uk" && <KneeInternationalUk />}
          {(slug === "hip-replacement" || slug === "knee-replacement") && lang !== "uk" && <ArthroplastyInternational lang={lang} joint={slug === "hip-replacement" ? "hip" : "knee"} />}

          <div className="mt-14 pt-10 border-t border-hairline">
            <a
              href={`${BASE}/${lang}/#consultation`}
              className="group inline-flex items-center justify-between gap-6 btn-metallic text-white px-8 py-4 label-caps w-full sm:w-auto sm:min-w-[280px]"
            >
              {dict.common.ctaPrimary}
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </main>

      <Footer dict={dict} lang={lang} />
    </>
  );
}
