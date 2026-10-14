import type { Dict } from "@/app/i18n";
import { BASE } from "@/app/base";

export default function Technology({ dict }: { dict: Dict }) {
  const t = dict.technology;
  return (
    <section id="technology" className="bg-paper py-20 sm:py-28 scroll-mt-24">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12 label-caps-sm text-ink-muted">
          <span>05</span>
          <span className="w-16 h-px bg-hairline" />
          <span>{t.sectionLabel}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center mb-16">
          {/* Heading + text + accent */}
          <div className="lg:col-span-7">
            <h2 className="font-sans leading-[1.05] tracking-[-0.02em] text-[clamp(2rem,4vw,3.25rem)] mb-8">
              <span className="font-light">{t.headingLight}</span>
              <span className="font-extrabold">{t.headingBold}</span>
              <span className="font-serif italic font-medium text-tan">.</span>
            </h2>

            <div className="space-y-5 text-ink leading-relaxed text-lg max-w-2xl">
              {t.paragraphs.map((p, i) => (
                <p key={i} className={i === 0 ? "" : "text-ink-muted text-[17px]"}>
                  {p}
                </p>
              ))}
            </div>

            <blockquote className="mt-10 pl-6 border-l-2 border-tan font-serif italic text-ink/85 leading-snug text-[clamp(1.25rem,2vw,1.625rem)] max-w-xl">
              {t.quote}
            </blockquote>
          </div>

          {/* Operating room portrait */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div aria-hidden className="absolute inset-0 translate-x-4 translate-y-4 bg-tan rounded-[20px]" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[20px] border border-hairline-soft">
                <img
                  src={`${BASE}/or-portrait.jpg`}
                  alt={t.imageAlt}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 4 mini-cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-hairline border-y border-hairline">
          {t.miniCards.map((card, i) => (
            <div key={card.title} className="group relative flex flex-col bg-paper p-8 hover:bg-cream transition-colors">
              <span
                aria-hidden
                className="absolute top-0 left-0 h-px w-full bg-tan scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"
              />
              <span className="font-serif italic text-2xl text-hairline-soft leading-none mb-6">
                {`0${i + 1}`}
              </span>
              <h3 className="font-sans font-semibold text-lg mb-2 tracking-tight">{card.title}</h3>
              <p className="text-ink-muted text-[14px] leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
