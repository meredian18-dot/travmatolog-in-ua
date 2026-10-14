import type { Dict } from "@/app/i18n";
import { CONTACTS, CHANNEL_HREFS } from "@/app/contacts";

const trackIds = ["referral", "cosurgery", "medtech"];

export default function Partnership({ dict }: { dict: Dict }) {
  const t = dict.clinical.partnership;
  return (
    <section id="partnership" className="bg-cream py-20 sm:py-28 scroll-mt-24">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-12 label-caps-sm text-ink-muted">
          <span>04</span>
          <span className="w-16 h-px bg-hairline" />
          <span>{t.sectionLabel}</span>
        </div>

        <h2 className="font-sans leading-[1.05] tracking-[-0.02em] text-[clamp(2rem,4vw,3.25rem)] max-w-3xl mb-14">
          <span className="font-light">{t.headingLight}</span>
          <span className="font-extrabold">{t.headingBold}</span>
          <span className="font-serif italic font-medium text-tan">.</span>
        </h2>

        {/* Tracks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-hairline border-y border-hairline mb-20">
          {t.tracks.map((track, i) => (
            <div
              key={trackIds[i]}
              id={trackIds[i]}
              className="group relative flex flex-col bg-cream p-8 lg:p-10 transition-colors hover:bg-paper scroll-mt-28"
            >
              <span
                aria-hidden
                className="absolute top-0 left-0 h-px w-full bg-tan scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"
              />
              <span className="font-serif italic text-3xl text-hairline-soft leading-none mb-7">{`0${i + 1}`}</span>
              <h3 className="font-sans font-semibold text-xl mb-3 tracking-tight max-w-[20ch]">{track.title}</h3>
              <p className="text-ink-muted text-[15px] leading-relaxed mb-7">{track.body}</p>
              <ul className="mt-auto space-y-2.5 border-t border-hairline-soft pt-5 md:min-h-[200px] xl:min-h-0">
                {track.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-[14px] text-ink">
                    <span aria-hidden className="mt-[7px] w-1.5 h-1.5 rounded-full bg-tan shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact CTA card */}
        <div className="relative">
          <div aria-hidden className="absolute inset-0 translate-x-3 translate-y-3 lg:translate-x-5 lg:translate-y-5 bg-tan rounded-[24px]" />
          <div className="relative bg-gradient-to-br from-tan-dark via-tan-dark to-blue text-white rounded-[24px] p-10 lg:p-16 overflow-hidden">
            <div aria-hidden className="absolute -top-16 -right-16 w-48 h-48 rounded-full border border-white/15" />

            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-4 mb-9 label-caps-sm text-white/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  <span>{t.ctaLabel}</span>
                  <span className="w-16 h-px bg-white/30" />
                </div>

                <h3 className="font-sans font-bold leading-[1.04] tracking-[-0.02em] text-[clamp(1.875rem,4.5vw,3.25rem)] max-w-[16ch]">
                  {t.ctaHeadingPre}
                  <span className="font-serif italic font-medium">{t.ctaHeadingItalic}</span>.
                </h3>

                <p className="mt-7 text-white/85 leading-relaxed max-w-xl text-[15px]">
                  {t.ctaBody}
                </p>

                <div className="mt-10">
                  <a
                    href={CONTACTS.emailHref}
                    className="group inline-flex items-center justify-between gap-6 btn-metallic text-white px-7 py-5 label-caps w-full sm:w-auto sm:min-w-[280px]"
                  >
                    {t.ctaSend}
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </a>
                </div>
              </div>

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
