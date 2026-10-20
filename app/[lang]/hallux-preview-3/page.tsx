import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BASE } from "@/app/base";
import ImageLightbox from "@/components/ImageLightbox";

export const metadata: Metadata = {
  title: "Попередній перегляд — компонування інфографік Hallux valgus",
  robots: { index: false, follow: false },
};



const infographics = [
  {
    image: "hallux-valgus-diagram1.jpg",
    heading: "Коли «кісточка» — вже не лише косметична проблема",
    text: [
      "Hallux valgus — це деформація переднього відділу стопи, при якій перший палець поступово відхиляється у бік інших пальців, а в ділянці першого плесно-фалангового суглоба формується характерна виступаюча «кісточка».",
      "Це не просто локальне збільшення кістки. Змінюються взаємне положення кісток, біомеханіка переднього відділу стопи та розподіл навантаження під час ходьби.",
      "На початкових етапах проблема може турбувати переважно зовнішнім виглядом. З прогресуванням деформації можуть з’являтися біль та складнощі з підбором взуття."
    ],
  },
  {
    image: "hallux-valgus-diagram2.jpg",
    heading: "Як виправляється деформація",
    text: [
      "Не існує однієї операції при hallux valgus, яка однаково підходить усім пацієнтам.",
      "Залежно від характеру та ступеня деформації можуть використовуватися різні варіанти коригуючих остеотомій та інші хірургічні методики.",
      "Під час операції може виконуватися корекція положення першої плеснової кістки та першого пальця, відновлення анатомічних співвідношень і стабілізація кісткових фрагментів."
    ],
  }
];

export default function HalluxLayoutPreview() {
  const variant = "3";
  const isSplit = variant === "3";
  return (
    <main className="min-h-screen bg-paper text-ink px-5 sm:px-8 py-10 sm:py-16">
      <div className="mx-auto max-w-[1100px]">
        <a className="text-tan-dark underline text-sm" href={`${BASE}/uk/treatments/hallux-valgus/`}>← До чинної сторінки Hallux valgus</a>
        <p className="mt-8 text-ink-muted text-xs uppercase tracking-widest">Попередній перегляд дизайну · не індексується Google</p>
        <h1 className="mt-3 text-3xl sm:text-4xl font-light">
          Варіант {variant}: {isSplit ? "інфографіка поряд із текстом" : "компактне прев’ю зі збільшенням"}
        </h1>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={`${BASE}/uk/hallux-preview-2/`} className={`rounded-md border px-5 py-3 text-sm ${!isSplit ? "bg-ink text-white" : "bg-white text-ink"}`}>Варіант 2</a>
          <a href={`${BASE}/uk/hallux-preview-3/`} className={`rounded-md border px-5 py-3 text-sm ${isSplit ? "bg-ink text-white" : "bg-white text-ink"}`}>Варіант 3</a>
        </div>
        <p className="mt-5 text-sm text-ink-muted">Це два макети з реальними інфографіками та фрагментами чинної статті. Зміни на основній сторінці не внесені.</p>
        <div className="mt-8 space-y-8">
          {infographics.map((item, index) => (
            <section key={item.image} className="rounded-[8px] border border-hairline bg-cream/60 p-5 sm:p-7">
              <h2 className="font-medium text-xl sm:text-2xl mb-6">{item.heading}</h2>
              <div className={isSplit ? "grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-10 items-start" : ""}>
                <div className={isSplit ? "" : "mx-auto max-w-[700px]"}>
                  <ImageLightbox images={[`${BASE}/directions/${item.image}`]} className="grid grid-cols-1" aspect="aspect-[3/2]" fit="contain" letterboxBg="bg-white"/>
                  <p className="mt-3 text-center text-xs text-ink-muted">Натисніть на інфографіку, щоб збільшити</p>
                </div>
                <div className={isSplit ? "mt-0 space-y-4 leading-relaxed" : "mt-7 space-y-4 leading-relaxed"}>
                  {item.text.map(paragraph=><p key={paragraph}>{paragraph}</p>)}
                </div>
              </div>
              {index === 0 && <p className="mt-7 text-sm text-ink-muted">На мобільному екрані обидва варіанти переходять у вертикальне розташування.</p>}
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
