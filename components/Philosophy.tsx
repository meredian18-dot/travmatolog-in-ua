import type { Dict } from "@/app/i18n";

export default function Philosophy({ dict }: { dict: Dict }) {
  const t = dict.philosophy;
  return (
    <section className="bg-paper border-y border-hairline py-10 sm:py-12">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <blockquote className="font-serif italic text-ink/85 leading-snug tracking-[-0.01em] text-[clamp(1.125rem,2vw,1.625rem)] lg:whitespace-nowrap">
          <span className="text-tan-dark">“</span>
          {t.pre}
          {t.words.map((w, i) => (
            <span key={i}>
              <em className="not-italic font-medium font-sans text-ink">{w}</em>
              {i < t.words.length - 2 ? t.join : i === t.words.length - 2 ? t.lastJoin : t.end}
            </span>
          ))}
        </blockquote>

        <div className="flex items-center gap-3 label-caps-sm text-ink/55 shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-tan" />
          <span>{t.author}</span>
        </div>
      </div>
    </section>
  );
}
