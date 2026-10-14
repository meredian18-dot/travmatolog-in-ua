import type { Dict, Locale } from "@/app/i18n";
import { BASE } from "@/app/base";

export default function AboutField({ dict, lang }: { dict: Dict; lang: Locale }) {
  const t = dict.aboutField;
  return (
    <section id="about-field" className="bg-cream py-20 sm:py-28 scroll-mt-24">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12 label-caps-sm text-ink-muted">
          <span>01</span>
          <span className="w-16 h-px bg-hairline" />
          <span>{t.sectionLabel}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Heading */}
          <div className="lg:col-span-5">
            <h2 className="font-sans leading-[1.05] tracking-[-0.02em] text-[clamp(2rem,4vw,3.25rem)]">
              <span className="font-light">{t.headingLight}</span>
              <span className="font-extrabold">{t.headingBold}</span>
              <span className="font-serif italic font-medium text-tan">.</span>
            </h2>
          </div>

          {/* Body */}
          <div className="lg:col-span-7">
            <div className="space-y-6 text-ink leading-relaxed">
              {t.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className={
                    i === 0
                      ? "text-[clamp(1.125rem,1.7vw,1.5rem)] leading-snug"
                      : "text-ink-muted text-[clamp(1rem,1.35vw,1.25rem)]"
                  }
                >
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-10">
              <a
                href={`${BASE}/${lang}/#consultation`}
                className="group inline-flex items-center justify-between gap-6 btn-metallic text-white px-7 py-4 label-caps w-full sm:w-auto sm:min-w-[260px]"
              >
                {dict.common.ctaPrimary}
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
