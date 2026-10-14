import type { Dict } from "@/app/i18n";
import { CONTACTS, CHANNEL_HREFS } from "@/app/contacts";

export default function BookOnline({ dict }: { dict: Dict }) {
  const t = dict.bookOnline;
  return (
    <section id="consultation" className="bg-cream py-20 sm:py-28 scroll-mt-24">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8">
        <div className="relative">
          <div aria-hidden className="absolute inset-0 translate-x-3 translate-y-3 lg:translate-x-5 lg:translate-y-5 bg-tan rounded-[24px]" />
          <div className="relative bg-gradient-to-br from-tan-dark via-tan-dark to-blue text-white rounded-[24px] p-10 lg:p-16 overflow-hidden">
          {/* Geometric decor */}
          <div aria-hidden className="absolute -top-16 -right-16 w-48 h-48 rounded-full border border-white/15" />
          <div aria-hidden className="absolute top-12 right-32 w-2.5 h-2.5 rounded-full bg-white/40" />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: heading + CTA */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-4 mb-10 label-caps-sm text-white/70">
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                <span>{t.sectionLabel}</span>
                <span className="w-16 h-px bg-white/30" />
              </div>

              <h2 className="font-sans font-bold leading-[1.02] tracking-[-0.02em] text-[clamp(2.25rem,5.5vw,4.25rem)] max-w-[12ch]">
                {t.headingPre}
                <span className="font-serif italic font-medium">{t.headingItalic}</span>.
              </h2>

              <div className="mt-8 flex flex-col lg:flex-row lg:items-center gap-6">
                <p className="text-white/85 leading-relaxed text-[15px] lg:flex-1 lg:min-w-0">
                  {t.body}
                </p>

                <a
                  href={CONTACTS.telegramHref}
                  className="group inline-flex items-center justify-between gap-6 btn-metallic text-white px-7 py-5 label-caps w-full lg:w-auto lg:shrink-0 lg:min-w-[300px]"
                >
                  {dict.common.ctaPrimary}
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>

            {/* Right: direct channels */}
            <div className="lg:col-span-5">
              <div className="flex items-center gap-4 mb-8 label-caps-sm text-white/70">
                <span className="w-12 h-px bg-white/30" />
                <span>{t.channelsLabel}</span>
              </div>

              <div className="divide-y divide-white/15 border-y border-white/15">
                {t.channels.map((c) => (
                  <a
                    key={c.label}
                    href={CHANNEL_HREFS[c.mono] ?? "#"}
                    className="group flex items-center gap-5 py-5 hover:bg-white/[0.05] transition-colors px-1"
                  >
                    <span className="w-12 h-12 border border-white/25 flex items-center justify-center label-caps-sm text-white/85 group-hover:border-white group-hover:text-white transition-colors">
                      {c.mono}
                    </span>
                    <div className="flex-1">
                      <div className="label-caps-sm text-white/65 mb-0.5">{c.label}</div>
                      <div className="font-sans font-medium text-white">{c.handle}</div>
                    </div>
                    <span className="text-white/55 group-hover:text-white group-hover:translate-x-1 transition-all">
                      ↗
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
