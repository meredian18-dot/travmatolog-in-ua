import { BASE } from "@/app/base";
type Lang = "en" | "de" | "pl";
const copy = {
 en: {
  eyebrow:"FOR PATIENTS FROM OTHER REGIONS AND COUNTRIES",
  title:"Height lengthening for patients travelling from abroad",
  paras:[
   "If you live outside Kyiv or Ukraine, the first discussion can take place remotely. We can review your goals, history and available imaging. A final decision on surgery, the anatomical segment and the implant requires an in-person assessment.",
   "Cosmetic limb lengthening is not a short surgical trip. Regular radiographs, physiotherapy, assessment of joints and bone regenerate, and mobility restrictions may continue for months. Accommodation, practical assistance and follow-up after returning home should be agreed before surgery.",
   "Depending on confirmed clinical and organisational capacity, treatment may be considered in Kyiv or in relatively safer western regions of Ukraine. Actual availability must be confirmed individually; no location in Ukraine guarantees complete safety."
  ],
  link:"More information for international patients →",
  faqTitle:"Frequently asked questions about care arrangements",
  faqs:[
   ["Can I request a remote consultation from Poland, Germany or Czechia?","Yes. An initial review can help determine whether further assessment is appropriate. It does not replace the required in-person examination."],
   ["Which medical documents should I prepare?","Existing full-length radiographs where available, previous operation reports and a summary of health conditions and medications. Further investigations are agreed individually."],
   ["Can I have surgery in Ukraine and rehabilitation at home?","Sometimes, but only with a reliable local orthopaedic and physiotherapy team, scheduled imaging and a plan for urgent problems."],
   ["How long should I stay in Ukraine?","There is no universal period. It depends on distraction, bone healing, weight-bearing limits and the availability of safe follow-up."],
   ["Can I arrange radiographs abroad?","Often yes. Images must be appropriate and promptly reviewed; radiographs do not replace examination of joints and nerves."],
   ["What if a complication occurs after I return?","Seek timely medical care locally and contact the surgical team in parallel. Emergency conditions must never wait for an online reply."]
  ],
  generalTitle:"FREQUENTLY ASKED QUESTIONS",
  general:[
   ["Can I become taller without surgery?","After skeletal maturity, exercise and supplements cannot increase the length of the leg bones. Shoes or posture may change apparent height."],
   ["How many centimetres can I gain?","There is no universally safe number. Anatomy, joints, soft tissues and regeneration determine the individual plan."],
   ["Femurs or tibias?","The choice depends on proportions, anatomy and segment-specific risks. Neither is always preferable."],
   ["Can both segments be lengthened in stages?","Sometimes. A second operation is considered only after reassessment following the first."],
   ["How long does the process last?","Distraction takes weeks or months, followed by consolidation and rehabilitation. The full pathway often extends for many months."],
   ["Is treatment painful?","Pain and tissue tension can occur. Severe or worsening pain needs prompt assessment."],
   ["Can I walk during lengthening?","Often with aids and strict weight-bearing limits defined by the fixation system and regenerate."],
   ["What are the risks?","Contractures, neurological symptoms, infections, regenerate problems, deformity and further surgery are possible."],
   ["Is the increased height permanent?","Once new bone has consolidated, the added length usually remains. Functional recovery is a separate outcome."],
   ["Can I travel to Ukraine just for surgery?","A long-term monitoring and rehabilitation plan is essential; surgery alone is not the whole treatment."],
   ["Can I continue follow-up abroad?","Possibly, with local clinical support, imaging and physiotherapy. Remote contact is only supplementary."],
   ["How do I know whether surgery suits me?","Individual consultation must assess health, anatomy, expectations, risks and rehabilitation resources."]
  ]
 },
 de:{
  eyebrow:"FÜR PATIENTEN AUS ANDEREN REGIONEN UND LÄNDERN",
  title:"Beinverlängerung für Patienten aus dem Ausland",
  paras:[
   "Wenn Sie außerhalb von Kyjiw oder der Ukraine leben, kann die erste Beratung online erfolgen. Erwartungen, Krankengeschichte und vorhandene Aufnahmen können vorab geprüft werden. Die endgültige Operationsplanung setzt eine persönliche Untersuchung voraus.",
   "Die kosmetische Beinverlängerung ist keine kurze Reise nur für die Operation. Regelmäßige Röntgenkontrollen, Physiotherapie, Überwachung der Gelenke und des Regenerats sowie Belastungsgrenzen können über Monate notwendig sein. Unterkunft, Alltagshilfe und Nachsorge sollten vorab abgestimmt sein.",
   "Abhängig von bestätigten medizinischen und organisatorischen Voraussetzungen kann eine Behandlung in Kyjiw oder in relativ sichereren westlichen Regionen der Ukraine erwogen werden. Kein Ort garantiert vollständige Sicherheit."
  ],
  link:"Weitere Informationen für internationale Patienten →",
  faqTitle:"Häufige Fragen zur Organisation der Behandlung",
  faqs:[
   ["Ist eine Fernberatung aus Deutschland, Polen oder Tschechien möglich?","Ja. Eine erste Beurteilung kann den Bedarf weiterer Untersuchungen klären, ersetzt jedoch nicht die persönliche Untersuchung."],
   ["Welche Unterlagen sind sinnvoll?","Vorhandene Ganzbeinröntgenbilder, frühere Operationsberichte sowie Informationen über Erkrankungen und Medikamente."],
   ["Kann die Rehabilitation im Heimatland erfolgen?","Teilweise, sofern lokale Orthopädie, Physiotherapie, Bildgebung und Notfallversorgung vorab organisiert sind."],
   ["Wie lange muss ich in der Ukraine bleiben?","Es gibt keine feste Dauer; entscheidend sind Distraktion, Knochenheilung, Belastungsgrenzen und Nachsorgemöglichkeiten."],
   ["Können Röntgenbilder im Ausland angefertigt werden?","Oft ja. Sie müssen zeitnah ausgewertet werden; die klinische Untersuchung der Gelenke und Nerven bleibt notwendig."],
   ["Was tun bei Komplikationen nach der Rückreise?","Suchen Sie sofort lokale medizinische Hilfe auf und informieren Sie das Operationsteam. Notfälle dürfen nicht auf eine Onlineantwort warten."]
  ],
  generalTitle:"HÄUFIG GESTELLTE FRAGEN",
  general:[
   ["Kann man ohne Operation größer werden?","Nach Abschluss des Knochenwachstums verlängern Übungen und Nahrungsergänzungsmittel die Knochen nicht."],
   ["Wie viele Zentimeter sind möglich?","Eine allgemein sichere Zahl gibt es nicht. Anatomie, Gelenke, Weichteile und Regenerat bestimmen den Plan."],
   ["Oberschenkel oder Unterschenkel?","Entscheidend sind individuelle Proportionen, Anatomie und unterschiedliche Risiken."],
   ["Können beide Segmente nacheinander verlängert werden?","Manchmal. Über einen zweiten Eingriff wird erst nach erneuter Untersuchung entschieden."],
   ["Wie lange dauert das Ganze?","Auf die mehrwöchige oder mehrmonatige Distraktion folgen Konsolidierung und Rehabilitation."],
   ["Ist die Verlängerung schmerzhaft?","Schmerzen und Spannung sind möglich. Starke zunehmende Schmerzen erfordern dringende Beurteilung."],
   ["Kann ich währenddessen gehen?","Häufig mit Gehhilfen und individuellen Belastungsgrenzen."],
   ["Welche Risiken bestehen?","Kontrakturen, Nervenschäden, Infektionen, Regenerationsstörungen, Fehlstellungen und Folgeoperationen."],
   ["Bleibt der Größengewinn erhalten?","Nach guter Konsolidierung meist ja. Das funktionelle Ergebnis ist getrennt zu beurteilen."],
   ["Kann ich nur für die Operation anreisen?","Ein langfristiger Überwachungs- und Rehabilitationsplan ist unverzichtbar."],
   ["Ist die Nachsorge im Ausland möglich?","Unter bestimmten Voraussetzungen mit örtlichem Arzt und Physiotherapie. Fernkontakte allein reichen nicht."],
   ["Bin ich für die Operation geeignet?","Das entscheidet eine individuelle Untersuchung unter Berücksichtigung von Gesundheit, Erwartungen und Risiken."]
  ]
 },
 pl:{
  eyebrow:"DLA PACJENTÓW Z INNYCH REGIONÓW I KRAJÓW",
  title:"Zwiększanie wzrostu u pacjentów z innych miast i krajów",
  paras:[
   "Osoby mieszkające poza Kijowem lub Ukrainą mogą rozpocząć od konsultacji zdalnej. Omawiamy oczekiwania, historię zdrowia i dostępne badania. Ostateczny plan operacji wymaga jednak osobistej oceny ortopedycznej.",
   "Kosmetyczne wydłużanie kończyn nie jest krótkim wyjazdem jedynie na zabieg. Kontrolne RTG, fizjoterapia, ocena stawów i regeneratu oraz ograniczenia obciążania mogą trwać miesiącami. Zakwaterowanie, pomoc w codziennym życiu i dalsza opieka powinny być zaplanowane przed operacją.",
   "Zależnie od potwierdzonych warunków klinicznych i organizacyjnych leczenie można rozważać w Kijowie albo w relatywnie bezpieczniejszych zachodnich regionach Ukrainy. Żadna lokalizacja nie gwarantuje pełnego bezpieczeństwa."
  ],
  link:"Więcej informacji dla pacjentów z zagranicy →",
  faqTitle:"Najczęstsze pytania dotyczące organizacji leczenia",
  faqs:[
   ["Czy mogę skorzystać z konsultacji z Polski, Niemiec lub Czech?","Tak. Wstępna ocena zdalna może wskazać dalsze kroki, ale nie zastępuje osobistego badania."],
   ["Jakie dokumenty przygotować?","Dostępne zdjęcia RTG całych kończyn, wypisy po operacjach i informacje o chorobach oraz lekach."],
   ["Czy można operować się na Ukrainie, a rehabilitować w domu?","Niekiedy tak, pod warunkiem wcześniejszego ustalenia lokalnej opieki ortopedycznej, fizjoterapii, badań i pomocy w razie powikłań."],
   ["Ile czasu trzeba pozostać na Ukrainie?","Nie ma jednego okresu. Decydują etap dystrakcji, zrost, dopuszczalne obciążanie i dalsza opieka."],
   ["Czy można wykonywać RTG za granicą?","Zwykle tak, jeśli obrazy są właściwe i terminowo oceniane. Kontrola stawów i nerwów nadal wymaga badania."],
   ["Co zrobić w razie komplikacji po powrocie?","Niezwłocznie skorzystać z lokalnej pomocy medycznej i równocześnie poinformować zespół operujący. Nie wolno odkładać pomocy w stanach nagłych."]
  ],
  generalTitle:"NAJCZĘŚCIEJ ZADAWANE PYTANIA",
  general:[
   ["Czy można urosnąć bez operacji?","Po zakończeniu wzrastania ćwiczenia i suplementy nie wydłużą kości nóg."],
   ["O ile centymetrów można zwiększyć wzrost?","Nie ma jednej bezpiecznej wartości. Decydują anatomia, stawy, tkanki miękkie i przebieg gojenia."],
   ["Lepiej wydłużać uda czy podudzia?","To zależy od proporcji, anatomii i zagrożeń charakterystycznych dla każdego segmentu."],
   ["Czy można etapowo wydłużyć uda i podudzia?","W wybranych przypadkach, ale drugi etap wymaga ponownej kwalifikacji."],
   ["Ile trwa leczenie?","Po dystrakcji trwają konsolidacja i rehabilitacja; całość zwykle zajmuje wiele miesięcy."],
   ["Czy wydłużanie boli?","Możliwe są ból i napięcie tkanek. Narastający silny ból wymaga pilnej oceny."],
   ["Czy mogę chodzić podczas wydłużania?","Często z kulami lub chodzikiem i ograniczeniem obciążania."],
   ["Jakie są główne powikłania?","Przykurcze, neuropatie, zakażenia, problemy z regeneratem, deformacje i dodatkowe operacje."],
   ["Czy efekt jest trwały?","Po odpowiednim zroście długość kości zwykle pozostaje, lecz funkcję ocenia się osobno."],
   ["Czy mogę przyjechać tylko na operację?","Konieczny jest wcześniej uzgodniony plan długotrwałej kontroli i rehabilitacji."],
   ["Czy dalsza opieka może odbywać się za granicą?","Niekiedy tak, przy współpracy miejscowego ortopedy i fizjoterapeuty. Sam kontakt zdalny nie wystarczy."],
   ["Jak sprawdzić, czy zabieg jest dla mnie?","Potrzebna jest indywidualna ocena zdrowia, anatomii, oczekiwań, ryzyka i możliwości rehabilitacji."]
  ]
 }
} as const;
function Accordion({items}:{items: readonly (readonly [string,string])[]}) {
 return <div className="mt-5 border border-hairline rounded-[8px] overflow-hidden divide-y divide-hairline">
 {items.map(([q,a])=><details key={q} className="group/intlfaq px-5 py-5 sm:px-7 open:bg-cream/50"><summary className="cursor-pointer list-none flex items-center justify-between gap-4 [&::-webkit-details-marker]:hidden">
 <span className="font-medium text-ink text-lg">{q}</span><span aria-hidden className="shrink-0 rounded-full border border-hairline w-7 h-7 flex items-center justify-center group-open/intlfaq:rotate-45 transition-transform">+</span></summary>
 <p className="mt-4 leading-relaxed text-ink">{a}</p></details>)}</div>;
}
export default function LengtheningPatientInternational({lang}:{lang:Lang}){
 const x=copy[lang];
 return <>
 <section className="mt-12 rounded-[8px] border border-hairline bg-cream p-6 sm:p-9">
 <p className="label-caps text-ink-muted mb-4">{x.eyebrow}</p>
 <h2 className="text-2xl sm:text-3xl font-light text-ink mb-5">{x.title}</h2>
 <div className="space-y-4 text-ink leading-relaxed">{x.paras.map(p=><p key={p}>{p}</p>)}
 <p><a className="font-medium underline underline-offset-4 text-tan-dark hover:no-underline" href={`${BASE}/${lang}/international-patients/`}>{x.link}</a></p></div>
 <h3 className="text-xl font-medium mt-9">{x.faqTitle}</h3><Accordion items={x.faqs}/>
 </section>
 <section className="mt-14"><h2 className="label-caps text-ink-muted text-[12px] font-semibold pb-4 border-b border-hairline">{x.generalTitle}</h2><Accordion items={x.general}/></section>
 </>;
}