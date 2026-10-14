import type { Dict, Locale } from "@/app/i18n";
import { BASE } from "@/app/base";
import { getDirections } from "@/app/directions";

function SectionHeader({ t }: { t: Dict["treatments"] }) {
  return (
    <div className="mb-10">
      <div className="label-caps-sm text-white/55 mb-6">
        {t.sectionNum} — {t.sectionLabel}
      </div>
      <h2 className="font-sans text-white leading-[1.05] tracking-[-0.02em] text-[clamp(1.5rem,3vw,2.75rem)] lg:whitespace-nowrap">
        <span className="font-light">{t.headingLight}</span>
        <span className="font-extrabold">{t.headingBold}</span>
        <span className="font-serif italic font-medium text-tan">.</span>
      </h2>
    </div>
  );
}

export default function Treatments({ dict, lang }: { dict: Dict; lang: Locale }) {
  const t = dict.treatments;
  const directions = getDirections(lang);

  return (
    <section id="treatments" className="bg-tan-dark py-14 sm:py-20 scroll-mt-24">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8">
        <SectionHeader t={t} />

        {/* 3×4 direction-card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {directions.cards.map((card, i) => (
            <a
              key={`${card.slug}-${i}`}
              href={`${BASE}/${lang}/treatments/${card.slug}/`}
              className="group flex items-center gap-5 p-5 lg:p-6 rounded-[8px] bg-navy-90 hover:bg-navy-90/70 border border-white/10 hover:border-tan/50 hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              <div className="shrink-0 w-14 h-14 lg:w-16 lg:h-16 rounded-[6px] overflow-hidden bg-black/20">
                <img
                  src={`${BASE}/directions/${card.hero}`}
                  alt=""
                  aria-hidden
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-sans font-light text-white text-base lg:text-lg tracking-tight leading-snug">
                  {card.title}
                </h3>
                <div className="mt-2 inline-flex items-center gap-2 label-caps text-[10.5px] font-semibold text-tan">
                  {t.learnMore}
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
