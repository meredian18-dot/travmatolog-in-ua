import { BASE } from "@/app/base";
import type { Locale } from "@/app/i18n";

const translations = {
  en: {
    kicker:"PATIENTS FROM OTHER REGIONS AND COUNTRIES", title:"Fracture care for patients travelling to Ukraine",
    paragraphs:[
      "If you live outside Kyiv or abroad, you may submit X-rays, CT images and medical reports for an initial review. We can discuss the format of consultation and whether further examinations or an in-person assessment are necessary.",
      "For cases suitable for planned treatment, travel fitness, the hospital location, postoperative care and follow-up are discussed individually.",
      "Depending on medical and organisational circumstances, planned treatment may be considered in Kyiv or in relatively safer western regions of Ukraine. No location in Ukraine can be guaranteed completely safe.",
      "IMPORTANT: A new fracture with emergency warning signs needs immediate local emergency assessment. Never postpone urgent treatment to travel to Ukraine."
    ],
    more:"Information for international patients", faq:"Practical questions about treatment",
    qa:[
      ["Can I travel from Poland, Germany or the Czech Republic for surgery?","This may be possible in selected non-emergency situations following assessment of your records, fitness to travel, care needs and current safety considerations. Emergency fractures must be treated promptly where you are."],
      ["How much does fracture fixation cost?","Costs depend on the fracture, implants, anaesthesia, treatment and hospital stay. An individual estimate follows assessment; a final quote requires a treatment plan."],
      ["Who will review my progress after I return home?","Follow-up should be arranged before treatment, including collaboration with a local clinician when appropriate. Remote image review cannot replace a necessary physical examination."]
    ]
  },
  de: {
    kicker:"PATIENTEN AUS ANDEREN REGIONEN UND LÄNDERN",title:"Frakturbehandlung für Patienten aus dem Ausland",
    paragraphs:[
      "Wenn Sie außerhalb von Kyjiw oder im Ausland wohnen, können Sie Röntgen- und CT-Aufnahmen sowie Befunde zur ersten Beurteilung übermitteln. Wir besprechen das Beratungsformat und notwendige zusätzliche Untersuchungen.",
      "Bei planbaren Fällen werden Reisefähigkeit, Klinikstandort, Nachbehandlung und Kontrollen individuell geklärt.",
      "Je nach medizinischen und organisatorischen Möglichkeiten kommt eine Behandlung in Kyjiw oder in vergleichsweise sichereren westlichen Regionen der Ukraine infrage. Kein Ort in der Ukraine bietet garantierte Sicherheit.",
      "WICHTIG: Bei einer frischen Fraktur mit Notfallzeichen benötigen Sie unverzüglich Hilfe vor Ort. Verschieben Sie die Notfallbehandlung nicht wegen einer Reise."
    ],
    more:"Informationen für internationale Patienten",faq:"Häufige organisatorische Fragen",
    qa:[
      ["Kann ich aus Polen, Deutschland oder Tschechien zur Operation kommen?","Bei ausgewählten planbaren Situationen kann dies nach Prüfung der Unterlagen, Reisefähigkeit und Sicherheitslage besprochen werden. Notfallfrakturen benötigen sofortige Versorgung vor Ort."],
      ["Was kostet die Frakturversorgung?","Die Kosten hängen von Fraktur, Implantaten, Narkose, Behandlung und Aufenthalt ab. Ein individueller Kostenvoranschlag folgt der Beurteilung."],
      ["Wer übernimmt Kontrollen nach meiner Rückkehr?","Ein Nachsorgeplan wird vorab vereinbart, gegebenenfalls mit einer Ärztin oder einem Arzt am Wohnort. Eine Fernbeurteilung ersetzt nötige persönliche Untersuchungen nicht."]
    ]
  },
  pl: {
    kicker:"PACJENCI Z INNYCH REGIONÓW I KRAJÓW",title:"Leczenie złamań u pacjentów przyjeżdżających do Ukrainy",
    paragraphs:[
      "Jeśli mieszkasz poza Kijowem lub za granicą, możesz wcześniej przesłać RTG, TK i dokumentację do wstępnej analizy. Omówimy formę konsultacji, potrzebne badania i możliwość wizyty osobistej.",
      "Gdy możliwe jest leczenie planowe, indywidualnie ustalimy możliwość podróży, miejsce zabiegu, opiekę pooperacyjną i wizyty kontrolne.",
      "Zależnie od możliwości medycznych i organizacyjnych leczenie planowe może odbywać się w Kijowie lub we względnie bezpieczniejszych zachodnich regionach Ukrainy. Żadne miejsce w Ukrainie nie gwarantuje pełnego bezpieczeństwa.",
      "WAŻNE: Świeże złamanie z objawami alarmowymi wymaga natychmiastowej pomocy na miejscu. Nie odkładaj leczenia ratunkowego z powodu podróży."
    ],
    more:"Informacje dla pacjentów zagranicznych",faq:"Pytania o organizację leczenia",
    qa:[
      ["Czy mogę przyjechać na operację z Polski, Niemiec lub Czech?","W wybranych sytuacjach planowych można to omówić po ocenie dokumentacji, możliwości podróży i bezpieczeństwa. Złamania wymagające pilnej pomocy trzeba leczyć na miejscu."],
      ["Ile kosztuje osteosynteza?","Koszt zależy od złamania, implantów, znieczulenia, zabiegu i pobytu. Indywidualna wycena jest możliwa po analizie przypadku."],
      ["Kto będzie mnie kontrolował po powrocie za granicę?","Plan kontroli ustala się przed leczeniem, w razie potrzeby we współpracy z lekarzem lokalnym. Ocena zdalna nie zastępuje koniecznego badania osobistego."]
    ]
  }
} as const;

export default function OsteosynthesisInternational({lang}:{lang:Locale}) {
  if(lang==="uk") return null;
  const t=translations[lang];
  return <section className="mt-12 rounded-[8px] border border-hairline bg-cream p-6 sm:p-9" aria-labelledby="osteosynthesis-international-intl-heading">
    <p className="label-caps text-ink-muted mb-4">{t.kicker}</p>
    <h2 id="osteosynthesis-international-intl-heading" className="text-2xl sm:text-3xl font-light text-ink mb-5">{t.title}</h2>
    <div className="space-y-4 text-ink leading-relaxed">{t.paragraphs.map(s=><p key={s}>{s}</p>)}
      <p><a className="font-medium underline underline-offset-4 text-tan-dark hover:no-underline" href={`${BASE}/${lang}/international-patients/`}>{t.more} →</a></p>
    </div>
    <h3 className="text-xl font-medium mt-9 mb-4">{t.faq}</h3>
    <div className="divide-y divide-hairline border-y border-hairline">{t.qa.map(([q,answer])=><details key={q} className="group px-1 py-4"><summary className="font-medium text-ink cursor-pointer">{q}</summary><p className="mt-3 text-ink leading-relaxed">{answer}</p></details>)}</div>
  </section>;
}
