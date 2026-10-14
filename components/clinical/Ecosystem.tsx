import type { Dict } from "@/app/i18n";
import { BASE } from "@/app/base";

export default function Ecosystem({ dict }: { dict: Dict }) {
  const t = dict.clinical.ecosystem;
  return (
    <section id="ecosystem" className="bg-cream py-20 sm:py-28 scroll-mt-24">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-12 label-caps-sm text-ink-muted">
          <span>01</span>
          <span className="w-16 h-px bg-hairline" />
          <span>{t.sectionLabel}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center mb-16">
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
          </div>

          {/* Knee geometry visual */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div aria-hidden className="absolute inset-0 translate-x-4 translate-y-4 bg-tan rounded-[20px]" />
              <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] border border-hairline-soft">
                <img
                  src={`${BASE}/clinical-knee.jpg`}
                  alt={t.imageAlt}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 4 workflow layers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-hairline border-y border-hairline">
          {t.layers.map((l, i) => (
            <div
              key={l.title}
              className="group relative flex flex-col bg-cream p-8 lg:p-10 transition-colors hover:bg-paper"
            >
              <span
                aria-hidden
                className="absolute top-0 left-0 h-px w-full bg-tan scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"
              />
              <div className="flex items-start justify-between mb-6">
                <h3 className="font-sans font-semibold text-xl tracking-tight max-w-[18ch]">{l.title}</h3>
                <span className="font-serif italic text-3xl text-hairline-soft leading-none">{`0${i + 1}`}</span>
              </div>
              <p className="text-ink-muted text-[15px] leading-relaxed mb-7 max-w-[52ch]">{l.body}</p>
              <div className="mt-auto flex flex-col sm:flex-row sm:flex-wrap gap-2">
                {l.tags.map((tag) => (
                  <span
                    key={tag}
                    className="label-caps-sm bg-paper text-ink-muted px-4 py-2 rounded-[10px] border border-hairline-soft text-center"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
