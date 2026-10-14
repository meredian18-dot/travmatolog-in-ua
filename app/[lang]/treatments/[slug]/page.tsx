import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary, hasLocale, locales, type Locale } from "@/app/i18n";
import { BASE } from "@/app/base";
import TopBar from "@/components/TopBar";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ImageLightbox from "@/components/ImageLightbox";
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
  return { title: `${article.title} — ${dict.meta.homeTitle}`, description: article.lead };
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
  return <RichDetail dict={dict} lang={loc} slug={slug} article={article} />;
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

function BlockBody({ block }: { block: Block }) {
  return (
    <>
      {block.diagram && (
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
          <p className="text-ink text-lg leading-relaxed">{article.intro}</p>

          {article.gallery.length > 0 && (
            <ImageLightbox
              images={article.gallery.map((img) => `${BASE}/directions/${img}`)}
              className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4"
              aspect="aspect-[3/2]"
              fit="contain"
              letterboxBg="bg-white"
            />
          )}

          <div className="mt-4">
            {groupBlocks(article.blocks).map((group, i) => {
              if (group.kind === "divider") {
                return (
                  <div
                    key={i}
                    className="mt-14 mb-6 pb-3 border-b border-hairline label-caps text-ink-muted text-[12px] font-semibold"
                  >
                    {group.heading}
                  </div>
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
              return (
                <div key={i} className="mt-6 rounded-[8px] border border-hairline bg-cream/60 p-6 lg:p-7">
                  {block.heading && (
                    <h3 className="font-sans font-medium text-ink text-lg mb-3">{block.heading}</h3>
                  )}
                  <div className="space-y-3.5 text-ink leading-relaxed">
                    <BlockBody block={block} />
                  </div>
                </div>
              );
            })}
          </div>

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
