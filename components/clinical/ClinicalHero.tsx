import Image from "next/image";
import { BASE } from "@/app/base";
import type { Dict } from "@/app/i18n";

export default function ClinicalHero({ dict }: { dict: Dict }) {
  const t = dict.clinical.hero;
  return (
    <section className="relative">
      <div className="relative min-h-[88vh] overflow-hidden surface-navy bg-tan-dark flex flex-col">
        {/* Background — lower-limb reconstruction X-ray, cooled to the steel palette */}
        <Image
          src={`${BASE}/clinical-hero.jpg`}
          alt=""
          aria-hidden
          fill
          priority
          sizes="100vw"
          className="object-cover object-right"
          style={{ filter: "hue-rotate(160deg) saturate(0.8) brightness(0.9)" }}
        />

        {/* Navy readability gradient — heavier on the left, lets the X-ray show on the right */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(10,25,41,0.96) 0%, rgba(10,25,41,0.88) 42%, rgba(10,25,41,0.55) 78%, rgba(10,25,41,0.35) 100%)",
          }}
        />
        <div
          aria-hidden
          className="absolute right-[-6%] top-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full border border-white/10"
        />
        <div
          aria-hidden
          className="absolute right-[8%] top-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full border border-white/10"
        />

        {/* Content */}
        <div className="relative z-10 flex-1 w-full max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-16 pt-[120px] md:pt-[200px] lg:pt-[216px] pb-12 sm:pb-20 text-white">
          <div className="relative max-w-3xl">
            <span aria-hidden className="hidden lg:block absolute -left-12 top-2 bottom-2 w-px bg-white/20" />

            <div className="label-caps text-[12px]! text-tan tracking-[0.22em] mb-7">
              {t.eyebrow}
            </div>

            <h1 className="font-sans font-light leading-[1.05] tracking-[-0.015em] text-[clamp(2.25rem,4.6vw,4rem)]">
              {t.headingPre}
              <span className="font-extrabold">{t.headingBold}</span>
              <span className="font-serif italic font-medium text-tan">.</span>
            </h1>

            <p className="mt-8 text-white/90 text-xl lg:text-2xl font-light leading-snug text-balance max-w-[46ch]">
              {t.subtitle}
            </p>

            <p className="mt-6 text-white/80 leading-relaxed text-lg font-light text-balance max-w-[60ch]">
              {t.body}
            </p>

            <div className="mt-11 flex flex-col sm:flex-row sm:items-center gap-4">
              <a
                href="#partnership"
                className="group inline-flex items-center justify-between gap-6 btn-metallic text-white px-8 py-4 label-caps w-full sm:w-auto sm:min-w-[280px]"
              >
                {t.ctaPartnership}
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#referral"
                className="group inline-flex items-center justify-between gap-6 border border-white/30 hover:border-white text-white px-8 py-4 label-caps transition-colors w-full sm:w-auto sm:min-w-[280px]"
              >
                {t.ctaReferral}
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom audience bar */}
        <div className="relative z-20 bg-black/30 backdrop-blur-md border-t border-white/15">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/15">
            {t.audiences.map((a, i) => (
              <div key={a} className="flex items-center gap-4 px-6 py-5">
                <span className="font-serif italic text-xl text-tan leading-none">{`0${i + 1}`}</span>
                <span className="label-caps text-white/80">{a}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
