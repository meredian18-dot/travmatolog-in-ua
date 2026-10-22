import { BASE } from "@/app/base";
import type { Locale } from "@/app/i18n";

type InternationalLocale = Exclude<Locale, "uk">;
const copy = {
  "en": {
    "eye": "FOR PATIENTS FROM OTHER REGIONS AND COUNTRIES",
    "title": {
      "hip": "Hip replacement for patients from other cities and countries",
      "knee": "Knee replacement for patients from other cities and countries"
    },
    "intro": "If you live outside Kyiv or abroad, an initial consultation can be arranged remotely. We can discuss your medical records, necessary imaging and whether an in-person assessment is appropriate.",
    "surgery": {
      "hip": "If hip replacement is indicated, we discuss implant selection, the surgical plan, the location of treatment, early walking, rehabilitation and follow-up before your return home.",
      "knee": "If knee replacement is indicated, we discuss total or partial replacement, surgical planning, the location of treatment, walking and mobility rehabilitation, and follow-up before your return home."
    },
    "region": "Subject to clinical and organisational feasibility, treatment may be considered not only in Kyiv but also in western regions of Ukraine that may be relatively safer. The hospital and arrangements are agreed individually. No location in Ukraine can guarantee complete safety.",
    "link": "More about seeking care from abroad →",
    "faq": "Practical questions about arranging treatment",
    "q1": "Can I travel for surgery from Poland, Germany or Czechia?",
    "a1": "We can discuss this during the initial consultation. Surgery, location and timing are decided after clinical assessment and confirmation of arrangements. Current security risks of travelling to Ukraine must be considered.",
    "q2": {
      "hip": "How much does hip replacement cost?",
      "knee": "How much does knee replacement cost?"
    },
    "a2": "Costs depend on the condition, implant, surgical complexity, anaesthesia, hospital arrangements and postoperative care. An individual estimate is discussed after reviewing your case.",
    "q3": "Who will organise rehabilitation and follow-up after I return abroad?",
    "a3": "A rehabilitation and follow-up plan should be agreed before surgery, with local clinicians involved where appropriate. Remote communication does not replace necessary in-person assessments."
  },
  "de": {
    "eye": "FÜR PATIENTEN AUS ANDEREN REGIONEN UND LÄNDERN",
    "title": {
      "hip": "Hüftendoprothese für Patienten aus anderen Städten und Ländern",
      "knee": "Knieendoprothese für Patienten aus anderen Städten und Ländern"
    },
    "intro": "Wenn Sie außerhalb von Kyjiw oder im Ausland leben, kann die erste Kontaktaufnahme aus der Ferne erfolgen. Dabei besprechen wir vorhandene Befunde, erforderliche Bildgebung und die Möglichkeit einer persönlichen Untersuchung.",
    "surgery": {
      "hip": "Ist eine Hüftendoprothese angezeigt, besprechen wir Implantatwahl, Operationsplanung, Behandlungsort, frühe Mobilisation, Rehabilitation und Nachkontrollen vor Ihrer Heimreise.",
      "knee": "Ist eine Knieendoprothese angezeigt, besprechen wir den vollständigen oder teilweisen Gelenkersatz, die Operationsplanung, den Behandlungsort, Geh- und Bewegungstraining sowie die Nachkontrollen vor Ihrer Heimreise."
    },
    "region": "Abhängig von den medizinischen und organisatorischen Möglichkeiten kann die Behandlung nicht nur in Kyjiw, sondern auch in westlichen Regionen der Ukraine erwogen werden, die vergleichsweise sicherer sein können. Klinik und Bedingungen werden individuell vereinbart. Kein Ort in der Ukraine bietet vollständige Sicherheit.",
    "link": "Mehr zur Behandlung bei Anreise aus dem Ausland →",
    "faq": "Häufige Fragen zur Organisation der Behandlung",
    "q1": "Kann ich aus Polen, Deutschland oder Tschechien zur Operation anreisen?",
    "a1": "Das können wir bei der ersten Kontaktaufnahme besprechen. Indikation, Ort und Termin werden nach medizinischer Beurteilung und organisatorischer Abstimmung festgelegt. Aktuelle Sicherheitsrisiken der Reise in die Ukraine sind zu berücksichtigen.",
    "q2": {
      "hip": "Was kostet eine Hüftendoprothese?",
      "knee": "Was kostet eine Knieendoprothese?"
    },
    "a2": "Die Kosten hängen von Erkrankung, Implantat, Operationsaufwand, Anästhesie, Klinik und Nachbehandlung ab. Ein individueller Kostenvoranschlag folgt nach Prüfung Ihrer Unterlagen.",
    "q3": "Wie erfolgen Rehabilitation und Nachkontrollen nach der Rückkehr ins Ausland?",
    "a3": "Der Plan wird vor der Operation vereinbart, gegebenenfalls gemeinsam mit Ärzten oder Therapeuten am Wohnort. Fernkontakte ersetzen erforderliche persönliche Untersuchungen nicht."
  },
  "pl": {
    "eye": "DLA PACJENTÓW Z INNYCH REGIONÓW I KRAJÓW",
    "title": {
      "hip": "Endoprotezoplastyka biodra dla pacjentów z innych miast i krajów",
      "knee": "Endoprotezoplastyka kolana dla pacjentów z innych miast i krajów"
    },
    "intro": "Jeśli mieszkasz poza Kijowem lub za granicą, pierwszy kontakt można zorganizować zdalnie. Omawiamy dokumentację medyczną, potrzebne badania obrazowe i możliwość późniejszej konsultacji osobistej.",
    "surgery": {
      "hip": "Jeżeli wskazana jest endoprotezoplastyka biodra, omawiamy dobór implantu, plan operacji, miejsce leczenia, wczesne uruchamianie, rehabilitację i wizyty kontrolne przed powrotem do domu.",
      "knee": "Jeżeli wskazana jest endoprotezoplastyka kolana, omawiamy wymianę całkowitą lub częściową, plan operacji, miejsce leczenia, naukę chodzenia, rehabilitację i wizyty kontrolne przed powrotem do domu."
    },
    "region": "W zależności od możliwości klinicznych i organizacyjnych leczenie można rozważyć nie tylko w Kijowie, lecz także w zachodnich regionach Ukrainy, które mogą być względnie bezpieczniejsze. Placówka i warunki są ustalane indywidualnie. Żadna lokalizacja na Ukrainie nie gwarantuje pełnego bezpieczeństwa.",
    "link": "Więcej o leczeniu dla pacjentów z zagranicy →",
    "faq": "Najczęstsze pytania dotyczące organizacji leczenia",
    "q1": "Czy mogę przyjechać na operację z Polski, Niemiec lub Czech?",
    "a1": "Możemy to omówić podczas pierwszego kontaktu. Wskazania, miejsce i termin operacji określa się po ocenie klinicznej i uzgodnieniu warunków. Trzeba uwzględnić aktualne zagrożenia związane z podróżą do Ukrainy.",
    "q2": {
      "hip": "Ile kosztuje endoprotezoplastyka biodra?",
      "knee": "Ile kosztuje endoprotezoplastyka kolana?"
    },
    "a2": "Koszt zależy od schorzenia, implantu, złożoności zabiegu, znieczulenia, placówki i opieki pooperacyjnej. Indywidualną wycenę omawia się po ocenie dokumentacji.",
    "q3": "Jak zorganizować rehabilitację i kontrole po powrocie za granicę?",
    "a3": "Plan rehabilitacji i kontroli ustala się przed operacją, w razie potrzeby we współpracy z lekarzami lub fizjoterapeutami w miejscu zamieszkania. Kontakt zdalny nie zastępuje niezbędnych wizyt osobistych."
  }
} as const;

export default function ArthroplastyInternational({ lang, joint }: { lang: InternationalLocale; joint: "hip" | "knee" }) {
  const t = copy[lang];
  return (
    <section className="mt-12 rounded-[8px] border border-hairline bg-cream p-6 sm:p-9" aria-labelledby={`${joint}-international-heading`}>
      <p className="label-caps text-ink-muted mb-4">{t.eye}</p>
      <h2 id={`${joint}-international-heading`} className="text-2xl sm:text-3xl font-light text-ink mb-5">{t.title[joint]}</h2>
      <div className="space-y-4 text-ink leading-relaxed">
        <p>{t.intro}</p><p>{t.surgery[joint]}</p><p>{t.region}</p>
        <p><a className="font-medium underline underline-offset-4 text-tan-dark hover:no-underline" href={`${BASE}/${lang}/international-patients/`}>{t.link}</a></p>
      </div>
      <h3 className="text-xl font-medium mt-9 mb-4">{t.faq}</h3>
      <div className="divide-y divide-hairline border-y border-hairline">
        {[{q:t.q1,a:t.a1},{q:t.q2[joint],a:t.a2},{q:t.q3,a:t.a3}].map(({q,a})=>(
          <details key={q} className="group px-1 py-4"><summary className="font-medium text-ink cursor-pointer">{q}</summary><p className="mt-3 text-ink leading-relaxed">{a}</p></details>
        ))}
      </div>
    </section>
  );
}
