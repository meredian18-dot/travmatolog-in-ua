import { BASE } from "@/app/base";
import type { Locale } from "@/app/i18n";
const content = {
  "en": {
    "eye": "FOR PATIENTS FROM OTHER REGIONS AND COUNTRIES",
    "title": "Shoulder replacement for patients from other cities and countries",
    "intro": "If you live outside Kyiv or abroad, the first consultation may be arranged remotely. We can review existing X-rays and reports and discuss whether CT, MRI, ultrasound or an in-person examination is needed.",
    "surgery": "If shoulder replacement is indicated, we discuss anatomic versus reverse replacement, where surgery might take place, the rehabilitation programme, follow-up appointments and travel home.",
    "region": "Depending on clinical and organisational feasibility, surgery may be considered in Kyiv or in western regions of Ukraine that may be relatively safer. The specific hospital and arrangements are agreed individually. No place in Ukraine guarantees complete safety.",
    "link": "Information for international patients →",
    "faq": "Questions about arranging treatment",
    "q1": "Can I travel from Poland, Germany or Czechia for surgery?",
    "a1": "This can be discussed during the initial consultation. Indications, location and timing depend on clinical assessment and practical arrangements. Please consider current security risks when travelling to Ukraine.",
    "q2": "How much does shoulder replacement cost?",
    "a2": "Cost depends on anatomic or reverse implant selection, complexity, hospital, anaesthesia and postoperative care. An individual estimate requires reviewing your case.",
    "q3": "How can rehabilitation be arranged after I return abroad?",
    "a3": "Plan the rehabilitation and follow-up before surgery, involving local clinicians when appropriate. Remote contact does not replace required in-person care."
  },
  "de": {
    "eye": "FÜR PATIENTEN AUS ANDEREN REGIONEN UND LÄNDERN",
    "title": "Schulterendoprothese für Patienten aus anderen Städten und Ländern",
    "intro": "Wenn Sie außerhalb von Kyjiw oder im Ausland leben, kann die erste Beratung aus der Ferne stattfinden. Wir können vorhandene Röntgenbilder und Befunde prüfen und besprechen, ob CT, MRT, Ultraschall oder eine persönliche Untersuchung notwendig sind.",
    "surgery": "Falls eine Schulterprothese angezeigt ist, besprechen wir anatomische und inverse Verfahren, den Operationsort, Rehabilitation, Nachkontrollen und die Heimreise.",
    "region": "Je nach medizinischen und organisatorischen Möglichkeiten kann die Operation in Kyjiw oder in westlichen Regionen der Ukraine erwogen werden, die vergleichsweise sicherer sein können. Klinik und Bedingungen werden individuell vereinbart. Kein Ort in der Ukraine bietet vollständige Sicherheit.",
    "link": "Informationen für Patienten aus dem Ausland →",
    "faq": "Fragen zur Organisation der Behandlung",
    "q1": "Kann ich aus Polen, Deutschland oder Tschechien zur Operation anreisen?",
    "a1": "Das kann vorab besprochen werden. Indikation, Ort und Termin hängen von der medizinischen Abklärung und den organisatorischen Voraussetzungen ab. Aktuelle Sicherheitsrisiken sind zu berücksichtigen.",
    "q2": "Was kostet eine Schulterendoprothese?",
    "a2": "Die Kosten hängen von anatomischer oder inverser Prothese, Operationsaufwand, Klinik, Anästhesie und Nachbehandlung ab. Ein individuelles Angebot folgt nach Prüfung der Unterlagen.",
    "q3": "Wie wird die Rehabilitation nach der Rückkehr ins Ausland organisiert?",
    "a3": "Rehabilitation und Nachkontrollen werden vorab geplant, bei Bedarf mit Behandelnden am Wohnort. Fernberatung ersetzt keine notwendige persönliche Untersuchung."
  },
  "pl": {
    "eye": "DLA PACJENTÓW Z INNYCH REGIONÓW I KRAJÓW",
    "title": "Endoprotezoplastyka barku dla pacjentów z innych miast i krajów",
    "intro": "Jeśli mieszkasz poza Kijowem lub za granicą, pierwszą konsultację można zorganizować zdalnie. Możemy omówić dotychczasowe zdjęcia RTG i dokumentację oraz potrzebę wykonania TK, MRI, USG lub badania osobistego.",
    "surgery": "Jeżeli wskazana jest endoprotezoplastyka barku, omawiamy wybór protezy anatomicznej lub odwróconej, miejsce operacji, rehabilitację, wizyty kontrolne i powrót do domu.",
    "region": "Zależnie od możliwości medycznych i organizacyjnych operację można rozważyć w Kijowie lub w zachodnich regionach Ukrainy, które mogą być względnie bezpieczniejsze. Placówkę i warunki ustala się indywidualnie. Żadne miejsce na Ukrainie nie gwarantuje pełnego bezpieczeństwa.",
    "link": "Informacje dla pacjentów z zagranicy →",
    "faq": "Pytania dotyczące organizacji leczenia",
    "q1": "Czy mogę przyjechać na operację z Polski, Niemiec lub Czech?",
    "a1": "Można to omówić podczas pierwszego kontaktu. Wskazania, miejsce i termin zależą od oceny klinicznej i warunków organizacyjnych. Należy uwzględnić aktualne zagrożenia związane z podróżą do Ukrainy.",
    "q2": "Ile kosztuje endoprotezoplastyka barku?",
    "a2": "Koszt zależy od wyboru protezy anatomicznej lub odwróconej, złożoności operacji, placówki, znieczulenia i opieki pooperacyjnej. Indywidualna wycena wymaga oceny dokumentacji.",
    "q3": "Jak zorganizować rehabilitację po powrocie za granicę?",
    "a3": "Plan rehabilitacji i wizyt kontrolnych ustala się przed operacją, w razie potrzeby z lokalnymi specjalistami. Kontakt zdalny nie zastępuje koniecznych wizyt osobistych."
  }
} as const;
export default function ShoulderInternational({lang}:{lang:Exclude<Locale,"uk">}){
 const t=content[lang];
 return <section className="mt-12 rounded-[8px] border border-hairline bg-cream p-6 sm:p-9" aria-labelledby="shoulder-international-heading">
 <p className="label-caps text-ink-muted mb-4">{t.eye}</p>
 <h2 id="shoulder-international-heading" className="text-2xl sm:text-3xl font-light text-ink mb-5">{t.title}</h2>
 <div className="space-y-4 text-ink leading-relaxed"><p>{t.intro}</p><p>{t.surgery}</p><p>{t.region}</p><p><a className="font-medium underline underline-offset-4 text-tan-dark hover:no-underline" href={`${BASE}/${lang}/international-patients/`}>{t.link}</a></p></div>
 <h3 className="text-xl font-medium mt-9 mb-4">{t.faq}</h3>
 <div className="divide-y divide-hairline border-y border-hairline">{[{q:t.q1,a:t.a1},{q:t.q2,a:t.a2},{q:t.q3,a:t.a3}].map(({q,a})=><details key={q} className="group px-1 py-4"><summary className="font-medium text-ink cursor-pointer">{q}</summary><p className="mt-3 text-ink leading-relaxed">{a}</p></details>)}</div>
 </section>;
}