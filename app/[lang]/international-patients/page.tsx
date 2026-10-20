import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale, locales, getDictionary, type Locale } from "@/app/i18n";
import { localizedAlternates } from "@/app/seo";
import { BASE } from "@/app/base";

import BookOnline from "@/components/BookOnline";
import { TreatmentCards } from "@/components/Treatments";
import TopBar from "@/components/TopBar";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

type Copy = {
  title: string; description: string; eyebrow: string; intro: string;
  contact: string; audienceTitle: string; audiences: string[];
  stepsTitle: string; steps: { title: string; body: string }[];
  treatmentTitle: string; treatments: {title:string;slug:string;body:string}[];
  locationTitle: string; location: string; disclaimer: string; finalTitle: string;
};
const copy: Record<Locale, Copy> = {
  uk: {
    title:"Пацієнтам з інших міст і країн | Ортопед Максим Байда",
    description:"Ортопедична консультація для пацієнтів з України та з-за кордону. Попереднє звернення, оцінка випадку й індивідуальне планування можливого лікування.",
    eyebrow:"INTERNATIONAL PATIENTS",intro:"Зверніться щодо ортопедичної консультації незалежно від країни проживання. Перший контакт допоможе визначити наступні кроки та доцільність очної оцінки.",
    contact:"Звернутися щодо консультації",audienceTitle:"Кому може бути корисно",audiences:["Українцям, які проживають у країнах Європи чи інших країнах","Пацієнтам з різних регіонів України","Пацієнтам зі складними ортопедичними проблемами, які шукають фахову оцінку"],
    stepsTitle:"Як відбувається звернення",steps:[{title:"Перший контакт",body:"Напишіть країну проживання, коротко опишіть запит і залиште зручний спосіб зв’язку."},{title:"Узгодження формату",body:"Уточнимо, чи можлива дистанційна консультація, які документи потрібні та як їх безпечно передати."},{title:"Подальший маршрут",body:"За результатами консультації обговорюються клінічні можливості, потреба в очному огляді та можливі наступні кроки."}],
    treatmentTitle:"Напрямки ортопедичної допомоги",treatments:[{title:"Hallux valgus і деформації стопи",slug:"hallux-valgus",body:"Консультація щодо деформацій переднього відділу стопи."},{title:"Ендопротезування суглобів",slug:"hip-replacement",body:"Оцінка показань і планування лікування захворювань суглобів."},{title:"Складна реконструкція",slug:"trauma-reconstruction",body:"Посттравматичні деформації та складні реконструктивні випадки."}],
    locationTitle:"Де можливе лікування",location:"Місце проведення консультації чи операції визначається індивідуально після підтвердження можливостей конкретної клінічної бази. Локації, терміни та вартість не гарантуються до узгодження.",disclaimer:"Дистанційне звернення не замінює очного обстеження й не є гарантією операції. Безпекові ризики поїздок в Україну необхідно оцінювати індивідуально. Не надсилайте медичні документи через незахищені форми.",finalTitle:"Обговоримо ваш випадок?"
  },
  en: {
    title:"International Orthopaedic Patients | Dr Maksym Baida",
    description:"Orthopaedic enquiries from Ukraine and abroad. Initial contact, individual case assessment and discussion of potential treatment pathways.",
    eyebrow:"INTERNATIONAL PATIENTS",intro:"Contact Dr Maksym Baida about an orthopaedic consultation wherever you live. An initial enquiry helps clarify appropriate next steps and whether an in-person assessment is needed.",
    contact:"Enquire about a consultation",audienceTitle:"Who this is for",audiences:["Ukrainians living in Europe or elsewhere abroad","Patients from different regions of Ukraine","Patients seeking expert assessment of complex orthopaedic conditions"],
    stepsTitle:"How to get started",steps:[{title:"Initial enquiry",body:"Share your country of residence, a brief description of your request and your preferred contact method."},{title:"Agree on the format",body:"We will clarify whether a remote consultation is appropriate and arrange a secure way to share any necessary medical records."},{title:"Discuss next steps",body:"A consultation can identify possible clinical options, the need for an in-person examination and next steps."}],
    treatmentTitle:"Orthopaedic care",treatments:[{title:"Hallux valgus and foot deformities",slug:"hallux-valgus",body:"Consultation on forefoot deformities."},{title:"Joint replacement",slug:"hip-replacement",body:"Assessment and treatment planning for joint disorders."},{title:"Complex limb reconstruction",slug:"trauma-reconstruction",body:"Post-traumatic deformities and complex reconstruction."}],
    locationTitle:"Where treatment may take place",location:"Any consultation or surgery location is agreed individually, subject to verified clinical facilities and appropriate care pathways. Locations, dates and prices are not guaranteed in advance.",disclaimer:"A remote enquiry does not replace a physical examination or guarantee surgery. Travel to Ukraine carries security risks that require individual consideration. Do not submit medical records through unsecured forms.",finalTitle:"Discuss your case"
  },
  de: {
    title:"Internationale Orthopädie-Patienten | Dr. Maksym Baida",
    description:"Orthopädische Anfragen aus der Ukraine und dem Ausland. Erstkontakt, individuelle Fallbeurteilung und Planung möglicher Behandlungswege.",
    eyebrow:"INTERNATIONALE PATIENTEN",intro:"Kontaktieren Sie Dr. Maksym Baida für eine orthopädische Beratung – unabhängig von Ihrem Wohnsitz. Die erste Anfrage klärt mögliche nächste Schritte und ob eine persönliche Untersuchung erforderlich ist.",
    contact:"Beratung anfragen",audienceTitle:"Für wen ist dieses Angebot gedacht?",audiences:["Ukrainerinnen und Ukrainer im europäischen Ausland","Patientinnen und Patienten aus verschiedenen Regionen der Ukraine","Menschen mit komplexen orthopädischen Beschwerden, die eine fachliche Einschätzung suchen"],
    stepsTitle:"So läuft eine Anfrage ab",steps:[{title:"Erstkontakt",body:"Nennen Sie Ihr Wohnsitzland, beschreiben Sie Ihr Anliegen kurz und geben Sie Ihren bevorzugten Kontaktweg an."},{title:"Beratungsformat abstimmen",body:"Wir klären, ob eine Fernberatung geeignet ist und wie erforderliche medizinische Unterlagen sicher übermittelt werden können."},{title:"Nächste Schritte besprechen",body:"Im Rahmen der Beratung können Behandlungsoptionen, die Notwendigkeit einer Untersuchung vor Ort und weitere Schritte besprochen werden."}],
    treatmentTitle:"Orthopädische Behandlungsbereiche",treatments:[{title:"Hallux valgus und Fußdeformitäten",slug:"hallux-valgus",body:"Beratung zu Fehlstellungen des Vorfußes."},{title:"Gelenkersatz",slug:"hip-replacement",body:"Beurteilung und Planung bei Gelenkerkrankungen."},{title:"Komplexe Rekonstruktion",slug:"trauma-reconstruction",body:"Posttraumatische Deformitäten und komplexe Rekonstruktionen."}],
    locationTitle:"Mögliche Behandlungsorte",location:"Der Ort einer Beratung oder Operation wird individuell festgelegt und hängt von bestätigten klinischen Möglichkeiten ab. Standorte, Termine und Preise können nicht im Voraus garantiert werden.",disclaimer:"Eine Online-Anfrage ersetzt keine persönliche Untersuchung und garantiert keine Operation. Reisen in die Ukraine sind mit Sicherheitsrisiken verbunden. Bitte senden Sie keine medizinischen Unterlagen über ungesicherte Formulare.",finalTitle:"Besprechen Sie Ihren Fall"
  },
  pl: {
    title:"Pacjenci międzynarodowi | Ortopeda Maksym Baida",
    description:"Konsultacje ortopedyczne dla pacjentów z Ukrainy i zagranicy. Pierwszy kontakt, indywidualna ocena przypadku i omówienie możliwego leczenia.",
    eyebrow:"PACJENCI MIĘDZYNARODOWI",intro:"Skontaktuj się z dr. Maksymem Baidą w sprawie konsultacji ortopedycznej niezależnie od kraju zamieszkania. Pierwsze zgłoszenie pomoże określić dalsze kroki i potrzebę badania osobistego.",
    contact:"Zapytaj o konsultację",audienceTitle:"Dla kogo",audiences:["Dla Ukraińców mieszkających w Europie lub poza nią","Dla pacjentów z różnych regionów Ukrainy","Dla osób ze złożonymi problemami ortopedycznymi szukających specjalistycznej opinii"],
    stepsTitle:"Jak wygląda kontakt",steps:[{title:"Pierwsze zgłoszenie",body:"Podaj kraj zamieszkania, krótki opis problemu i preferowany sposób kontaktu."},{title:"Ustalenie formy konsultacji",body:"Ustalimy, czy możliwa jest konsultacja zdalna i jak bezpiecznie przekazać niezbędną dokumentację."},{title:"Dalsze kroki",body:"Podczas konsultacji można omówić możliwości kliniczne, konieczność badania osobistego i kolejne etapy."}],
    treatmentTitle:"Zakres opieki ortopedycznej",treatments:[{title:"Hallux valgus i deformacje stóp",slug:"hallux-valgus",body:"Konsultacje dotyczące deformacji przodostopia."},{title:"Endoprotezoplastyka stawów",slug:"hip-replacement",body:"Ocena wskazań i planowanie leczenia chorób stawów."},{title:"Złożona rekonstrukcja kończyn",slug:"trauma-reconstruction",body:"Deformacje pourazowe i złożona rekonstrukcja."}],
    locationTitle:"Gdzie może odbyć się leczenie",location:"Miejsce konsultacji lub operacji jest uzgadniane indywidualnie po potwierdzeniu możliwości konkretnej placówki. Lokalizacja, termin i cena nie są gwarantowane z góry.",disclaimer:"Kontakt zdalny nie zastępuje badania osobistego i nie gwarantuje operacji. Podróż do Ukrainy wiąże się z zagrożeniami bezpieczeństwa. Nie przesyłaj dokumentacji medycznej przez niezabezpieczone formularze.",finalTitle:"Omówmy Twój przypadek"
  }
};
export function generateStaticParams(){ return locales.map(lang=>({lang})); }
export async function generateMetadata({params}:{params:Promise<{lang:string}>}):Promise<Metadata>{
 const {lang}=await params;if(!hasLocale(lang))return {};
 const c=copy[lang];return {title:c.title,description:c.description,alternates:localizedAlternates(lang,"international-patients")};
}
export default async function InternationalPatients({params}:{params:Promise<{lang:string}>}){
 const {lang}=await params;if(!hasLocale(lang))notFound();
 const locale=lang as Locale;const c=copy[locale];const dict=getDictionary(locale);
 return <><div className="bg-tan-dark"><TopBar dict={dict} lang={locale}/><Nav dict={dict} lang={locale} current="international"/>
 <section className="relative isolate overflow-hidden mx-auto max-w-[1440px] px-5 sm:px-8 pt-14 pb-20 sm:pt-20 sm:pb-24 text-white">
 <div aria-hidden="true" className="absolute inset-y-0 right-0 w-[72%] lg:w-[57%] pointer-events-none opacity-20 sm:opacity-50 lg:opacity-80 flex items-center"><img src={`${BASE}/graphics/europe-network-soft.svg`} alt="" className="w-full h-auto max-h-full object-contain" /></div>
 <div className="relative z-10 lg:max-w-[64%]">
 <p className="label-caps text-white/60 mb-7">{c.eyebrow}</p>
 <h1 className="font-sans font-light text-[clamp(2rem,4.3vw,3.8rem)] leading-[1.1]">{c.title.split(" | ")[0]}</h1>
 <p className="mt-7 text-lg sm:text-xl text-white/85 max-w-[790px] leading-relaxed">{c.intro}</p>
 <a href="#consultation" className="inline-flex mt-9 border border-white/50 px-7 py-4 text-sm font-medium hover:bg-white hover:text-ink transition-colors">{c.contact} →</a>
 </div></section></div>
 <main className="bg-paper">
 <section className="mx-auto max-w-[1200px] px-5 sm:px-8 py-16 sm:py-20">
 <h2 className="text-3xl font-light mb-8">{c.audienceTitle}</h2>
 <div className="grid md:grid-cols-3 gap-4">{c.audiences.map(a=><div key={a} className="bg-cream border border-hairline p-7 leading-relaxed">{a}</div>)}</div>
 </section>
 <section className="bg-cream"><div className="mx-auto max-w-[1200px] px-5 sm:px-8 py-16 sm:py-20">
 <h2 className="text-3xl font-light mb-8">{c.stepsTitle}</h2>
 <div className="grid md:grid-cols-3 gap-5">{c.steps.map((s,i)=><div key={s.title} className="border-t border-hairline pt-5"><span className="text-sm text-ink-muted">0{i+1}</span><h3 className="text-xl mt-4 mb-3">{s.title}</h3><p className="text-ink-muted leading-relaxed">{s.body}</p></div>)}</div>
 </div></section>
 <section className="bg-tan-dark py-16 sm:py-20"><div className="mx-auto max-w-[1440px] px-5 sm:px-8">
 <h2 className="text-white text-3xl font-light mb-9">{c.treatmentTitle}</h2>
 <TreatmentCards dict={dict} lang={locale}/>
 </div></section>
 <section className="bg-cream"><div className="mx-auto max-w-[1200px] px-5 sm:px-8 py-16"><h2 className="text-3xl font-light mb-5">{c.locationTitle}</h2><p className="leading-relaxed max-w-[850px]">{c.location}</p><p className="mt-6 text-sm text-ink-muted max-w-[850px]">{c.disclaimer}</p></div></section>
 </main><BookOnline dict={dict}/><Footer dict={dict} lang={locale}/></>;
}
