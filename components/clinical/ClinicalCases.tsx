import type { Dict } from "@/app/i18n";
import { BASE } from "@/app/base";

const codes = ["CASE 01", "CASE 02", "CASE 03"];

export default function ClinicalCases({ dict }: { dict: Dict }) {
  const t = dict.clinical.cases;
  return (
    <section id="cases" className="bg-tan-dark text-white py-20 sm:py-28 scroll-mt-24">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-12 label-caps-sm text-white/55">
          <span>02</span>
          <span className="w-16 h-px bg-white/25" />
          <span>{t.sectionLabel}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-14">
          <div className="lg:col-span-8">
            <h2 className="font-sans leading-[1.05] tracking-[-0.02em] text-[clamp(2rem,4vw,3.25rem)]">
              <span className="font-light">{t.headingLight}</span>
              <span className="font-extrabold">{t.headingBold}</span>
              <span className="font-serif italic font-medium text-tan">.</span>
            </h2>
            <p className="mt-7 text-white/70 leading-relaxed text-[15px] max-w-xl">
              {t.intro}
            </p>
          </div>

          {/* Reconstruction system visual */}
          <div className="lg:col-span-4">
            <div className="relative aspect-square overflow-hidden rounded-[20px] border border-white/15 bg-navy-90">
              <img
                src={`${BASE}/orthonail.png`}
                alt={t.imageAlt}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Case cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border-y border-white/15">
          {t.items.map((c, i) => {
            const fields = [
              { k: t.fieldIndication, v: c.indication },
              { k: t.fieldPlanning, v: c.planning },
              { k: t.fieldTechnique, v: c.technique },
              { k: t.fieldResult, v: c.result },
            ];
            return (
              <article key={c.title} className="flex flex-col bg-tan-dark p-8 lg:p-9">
                <div className="flex items-center justify-between mb-7">
                  <span className="label-caps-sm text-tan">{codes[i]}</span>
                  <span className="label-caps-sm text-white/45">{c.area}</span>
                </div>
                <h3 className="font-sans font-semibold text-xl tracking-tight mb-7 leading-snug">
                  {c.title}
                </h3>
                <dl className="space-y-0 border-t border-white/12">
                  {fields.map((f) => (
                    <div key={f.k} className="flex items-baseline gap-4 py-3 border-b border-white/12">
                      <dt className="label-caps-sm text-white/45 w-[88px] shrink-0">{f.k}</dt>
                      <dd className="text-[14px] text-white/85 leading-snug">{f.v}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-7 pt-1">
                  <span className="label-caps-sm text-white/55">{t.onRequest}</span>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-12">
          <a
            href="#partnership"
            className="group inline-flex items-center justify-between gap-6 border border-white/30 hover:border-white text-white px-7 py-4 label-caps transition-colors w-full sm:w-auto sm:min-w-[280px]"
          >
            {t.ctaRequest}
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
