import type { Dict } from "@/app/i18n";

export default function Academic({ dict }: { dict: Dict }) {
  const t = dict.academic;
  return (
    <section id="academic" className="bg-tan-dark text-white py-20 sm:py-28 scroll-mt-24">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12 label-caps-sm text-white/55">
          <span>04</span>
          <span className="w-16 h-px bg-white/25" />
          <span>{t.sectionLabel}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Text */}
          <div className="lg:col-span-7">
            <h2 className="font-sans leading-[1.05] tracking-[-0.02em] text-[clamp(2rem,4vw,3.25rem)] mb-8">
              <span className="font-light">{t.headingLight}</span>
              <span className="font-extrabold">{t.headingBold}</span>
              <span className="font-serif italic font-medium text-tan">.</span>
            </h2>

            <div className="space-y-5 text-white/85 leading-relaxed text-lg max-w-2xl">
              {t.paragraphs.map((p, i) => (
                <p key={i} className={i === 0 ? "" : "text-white/70 text-[17px]"}>
                  {p}
                </p>
              ))}
            </div>

            {/* Accent phrase */}
            <blockquote className="mt-12 pl-6 border-l-2 border-tan font-serif italic text-white/90 leading-snug text-[clamp(1.25rem,2vw,1.625rem)] max-w-xl">
              {t.quote}
            </blockquote>
          </div>

          {/* Mini-cards */}
          <div className="lg:col-span-5">
            <div className="border-y border-white/15 divide-y divide-white/15">
              {t.miniCards.map((card, i) => (
                <div key={card} className="flex items-center gap-5 py-6">
                  <span className="font-serif italic text-2xl text-white/40 leading-none w-8">
                    {`0${i + 1}`}
                  </span>
                  <span className="font-sans font-medium text-white text-lg leading-snug">
                    {card}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
