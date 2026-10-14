import type { Dict } from "@/app/i18n";

export default function StatsBar({ dict }: { dict: Dict }) {
  const stats = dict.statsBar;
  return (
    <section className="bg-cream pb-20 sm:pb-28">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8">
        <div className="relative">
          {/* Offset pad */}
          <div aria-hidden className="absolute inset-0 translate-x-3 translate-y-3 lg:translate-x-5 lg:translate-y-5 bg-tan rounded-[24px]" />
          {/* Gradient stats bar (cyan → blue → navy) */}
          <div className="relative bg-gradient-to-r from-tan via-blue to-tan-dark text-white rounded-[24px] p-10 lg:p-14 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/20">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center text-center pt-8 md:pt-0 md:px-6 first:pt-0">
                <div className="font-sans font-bold text-5xl lg:text-6xl tracking-tight mb-2 leading-none">
                  {s.value}
                </div>
                <div className="label-caps-sm text-white/75">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
