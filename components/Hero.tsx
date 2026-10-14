import Image from "next/image";
import { BASE } from "@/app/base";
import type { Dict, Locale } from "@/app/i18n";

export default function Hero({ dict, lang }: { dict: Dict; lang: Locale }) {
  const t = dict.hero;
  return (
    <section className="relative bg-tan-dark overflow-hidden">
      {/* Background photo — used from sm up (phones get the stacked photo below).
          Starts below the translucent header so the doctor's head is never hidden behind it. */}
      <div aria-hidden className="hidden sm:block absolute inset-x-0 bottom-0 top-[82px] md:top-[121px] xl:top-[132px]">
        {/* Blurred cover fill — only visible on ultra-wide screens, where the sharp
            photo below switches to object-contain and no longer spans full width.
            Fills that letterboxed gap with the same photo instead of flat bg color. */}
        <Image
          src={`${BASE}/or-gloves.jpg`}
          alt=""
          fill
          sizes="100vw"
          className="hidden [@media(min-aspect-ratio:8/5)]:block object-cover object-[78%_top] scale-150 blur-[120px] brightness-[0.55] saturate-75"
        />
        <Image
          src={`${BASE}/or-gloves.jpg`}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[78%_top] [@media(min-aspect-ratio:8/5)]:object-contain [@media(min-aspect-ratio:8/5)]:object-right-bottom [@media(min-aspect-ratio:8/5)]:[mask-image:linear-gradient(to_right,transparent_10%,black_45%)]"
        />
      </div>

      {/* Scrim for the in-between range (sm–lg): top-down for legibility */}
      <div
        aria-hidden
        className="hidden sm:block lg:hidden absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(10,25,41,0.92) 0%, rgba(10,25,41,0.72) 45%, rgba(10,25,41,0.35) 72%, rgba(10,25,41,0.12) 100%)",
        }}
      />
      {/* Scrim for desktop (lg+): classic left fade */}
      <div
        aria-hidden
        className="hidden lg:block absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(10,25,41,0.9) 0%, rgba(10,25,41,0.78) 25%, rgba(10,25,41,0.45) 50%, rgba(10,25,41,0) 80%)",
        }}
      />

      <div className="relative z-10 flex flex-col sm:min-h-screen">
        {/* Text content */}
        <div className="flex-1 w-full max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-16 pt-[120px] md:pt-[170px] lg:pt-[216px] pb-10 sm:pb-32 lg:pb-36 text-white">
          <div className="relative max-w-md sm:max-w-xl lg:max-w-2xl">
            {/* Vertical hairline accent on left */}
            <span aria-hidden className="hidden lg:block absolute -left-12 top-2 bottom-2 w-px bg-white/20" />

            {/* H1 */}
            <h1 className="font-sans font-light leading-[1.05] tracking-[-0.01em] text-[clamp(1.875rem,7vw,4.5rem)]">
              Dr. Maksym Baida, <span className="text-white/75">PhD</span>
            </h1>

            {/* Positioning line */}
            <div className="mt-5 lg:mt-6 label-caps text-[11px]! sm:text-[12px]! text-white/85 tracking-[0.22em]">
              {t.eyebrow}
            </div>

            {/* Subtitle */}
            <p className="mt-7 lg:mt-10 text-white/90 text-xl sm:text-2xl lg:text-3xl font-light leading-snug text-balance max-w-[34ch]">
              {t.subtitle}
            </p>

            {/* Body */}
            <p className="mt-4 lg:mt-6 text-white/85 leading-relaxed text-[15px] sm:text-lg font-light text-balance max-w-[58ch]">
              {t.body}
            </p>

            {/* Primary CTA */}
            <div className="mt-8 lg:mt-12">
              <a
                href={`${BASE}/${lang}/#consultation`}
                className="group inline-flex items-center justify-between gap-6 btn-metallic text-white px-6 sm:px-8 py-4 label-caps w-full sm:w-auto sm:min-w-[280px]"
              >
                {dict.common.ctaPrimary}
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Phone-only doctor photo — flows below the text (sm and up use the bg photo) */}
        <div className="sm:hidden relative mt-2">
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 h-12 z-10"
            style={{ backgroundImage: "linear-gradient(to bottom, var(--color-tan-dark), rgba(10,25,41,0))" }}
          />
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src={`${BASE}/or-gloves.jpg`}
              alt="Dr. Maksym Baida"
              className="absolute inset-0 w-full h-full object-cover object-[72%_center]"
            />
          </div>
        </div>

        {/* Trust-bar — experience stats */}
        <div className="relative z-20 bg-black/30 backdrop-blur-md border-t border-white/15">
          <div className="grid grid-cols-3 md:grid-cols-4 divide-x divide-white/15">
            {t.stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col sm:flex-row items-center sm:items-baseline justify-center gap-1 sm:gap-3 px-3 sm:px-6 py-4 sm:py-5 text-center"
              >
                <span className="font-sans font-light text-white text-lg leading-none tracking-tight">
                  {stat.value}
                </span>
                <span className="label-caps text-white/75">{stat.label}</span>
              </div>
            ))}
            <div className="hidden md:flex items-center justify-center p-3 btn-metallic">
              <a
                href={`${BASE}/${lang}/#consultation`}
                className="group flex items-center justify-between gap-6 w-full border border-white/40 hover:border-white text-white px-5 py-2.5 label-caps transition-colors"
              >
                <span>{t.ctaBook}</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
