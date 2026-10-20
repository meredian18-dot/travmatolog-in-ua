import { BASE } from "@/app/base";
import type { Locale } from "@/app/i18n";

const copy = {
  pl: {
    eyebrow: "DLA PACJENTÓW Z POLSKI I INNYCH KRAJÓW",
    heading: "Operacja haluksów — konsultacja i planowanie leczenia w Ukrainie",
    paragraphs: [
      "Mieszkasz w Polsce lub innym kraju? Pierwszy kontakt dotyczący palucha koślawego (hallux valgus) można zorganizować zdalnie. Omawiamy dokumentację, potrzebne badania i możliwość późniejszej konsultacji osobistej.",
      "Jeśli operacja będzie wskazana, indywidualnie uzgodnimy miejsce zabiegu, sposób leczenia, kontrolę pooperacyjną i bezpieczny plan powrotu.",
      "Zależnie od możliwości klinicznych i organizacyjnych można rozważyć leczenie również w zachodnich regionach Ukrainy, które mogą być względnie bezpieczniejsze. Konkretne miejsce i warunki wymagają indywidualnego potwierdzenia; żadna lokalizacja w Ukrainie nie gwarantuje pełnego bezpieczeństwa."
    ],
    link: "Zobacz informacje dla pacjentów z zagranicy →",
    questions: [
      ["Czy można przyjechać na operację haluksów z Polski?", "Taką możliwość można omówić podczas wstępnej konsultacji. Decyzja zależy od oceny medycznej, dostępności placówki i aktualnych warunków bezpieczeństwa."],
      ["Ile kosztuje operacja palucha koślawego?", "Koszt zależy od stopnia deformacji, metody operacji, implantów, znieczulenia, placówki i opieki pooperacyjnej. Indywidualną wycenę można przygotować po ocenie przypadku."],
      ["Jak odbywają się kontrole po powrocie?", "Plan kontroli należy uzgodnić przed operacją. Może obejmować wizyty osobiste u lekarza w miejscu zamieszkania; kontakt zdalny nie zastępuje wymaganych badań."],
    ],
  },
  de: {
    eyebrow: "FÜR PATIENTINNEN UND PATIENTEN IM AUSLAND",
    heading: "Hallux valgus: Beratung und individuelle OP-Planung in der Ukraine",
    paragraphs: [
      "Sie leben in Deutschland, Österreich oder einem anderen Land? Ein erster Kontakt zur Beurteilung eines Hallux valgus (Ballenzeh) kann aus der Ferne erfolgen. Wir besprechen vorhandene Befunde, mögliche Untersuchungen und die Voraussetzungen für eine persönliche Untersuchung.",
      "Wenn eine Operation medizinisch angezeigt ist, werden Behandlungsort, Verfahren, Nachkontrollen und Reiseplanung individuell abgestimmt.",
      "Je nach klinischen und organisatorischen Möglichkeiten kann eine Behandlung auch in westlichen Regionen der Ukraine erwogen werden, die vergleichsweise sicherer sein können. Ein konkreter Standort wird individuell bestätigt; vollständige Sicherheit kann in der Ukraine nirgendwo garantiert werden."
    ],
    link: "Informationen für internationale Patienten →",
    questions: [
      ["Kann ich für eine Hallux-valgus-Operation aus Deutschland anreisen?", "Dies kann nach einer ersten medizinischen Einschätzung und unter Berücksichtigung der verfügbaren Klinik und der aktuellen Sicherheitslage besprochen werden."],
      ["Was kostet eine Hallux-valgus-Operation?", "Die Kosten hängen von Befund, Operationsmethode, Implantaten, Anästhesie, Klinik und Nachsorge ab. Eine individuelle Einschätzung ist nach Prüfung der Unterlagen möglich."],
      ["Wie funktioniert die Nachsorge nach meiner Rückreise?", "Der Nachsorgeplan wird vor dem Eingriff festgelegt und kann die Zusammenarbeit mit einem Arzt am Wohnort erfordern. Fernkontakt ersetzt keine notwendigen persönlichen Untersuchungen."],
    ],
  },
  en: {
    eyebrow: "FOR PATIENTS LIVING ABROAD",
    heading: "Bunion (hallux valgus) surgery — consultation and planning in Ukraine",
    paragraphs: [
      "If you live abroad, an initial enquiry about bunion (hallux valgus) treatment can be arranged remotely. We can discuss your existing records, required investigations and the need for an in-person assessment.",
      "If surgery is clinically appropriate, the treatment location, procedure, follow-up visits and travel arrangements are discussed individually.",
      "Depending on clinical and organisational arrangements, treatment may also be considered in western regions of Ukraine that could be relatively safer. The specific facility must be confirmed for each patient, and nowhere in Ukraine can complete safety be guaranteed."
    ],
    link: "Information for international patients →",
    questions: [
      ["Can I travel to Ukraine for bunion surgery?", "The possibility can be discussed following clinical assessment, confirmation of available facilities and consideration of current travel and security risks."],
      ["How much does bunion surgery cost?", "Costs depend on the deformity, operation, implants, anaesthesia, facility and follow-up care. An individual estimate can be discussed after assessment."],
      ["How will follow-up work when I return home?", "A follow-up plan is agreed before surgery and may involve a clinician near your home. Remote communication does not replace necessary in-person assessments."],
    ],
  }
} as const;

export default function HalluxInternational({ lang }: { lang: Locale }) {
  if (lang === "uk") return null;
  const t = copy[lang];
  return (
    <section className="mt-12 rounded-[8px] border border-hairline bg-cream p-6 sm:p-9" aria-labelledby="hallux-international-heading">
      <p className="label-caps text-ink-muted mb-4">{t.eyebrow}</p>
      <h2 id="hallux-international-heading" className="text-2xl sm:text-3xl font-light text-ink mb-5">{t.heading}</h2>
      <div className="space-y-4 text-ink leading-relaxed">
        {t.paragraphs.map(p => <p key={p}>{p}</p>)}
        <p><a className="font-medium underline underline-offset-4 text-tan-dark hover:no-underline" href={`${BASE}/${lang}/international-patients/`}>{t.link}</a></p>
      </div>
      <div className="divide-y divide-hairline border-y border-hairline mt-8">
        {t.questions.map(([question,answer]) => <details key={question} className="px-1 py-4"><summary className="font-medium text-ink cursor-pointer">{question}</summary><p className="mt-3 text-ink leading-relaxed">{answer}</p></details>)}
      </div>
    </section>
  );
}
