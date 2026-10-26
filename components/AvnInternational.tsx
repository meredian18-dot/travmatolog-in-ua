import { BASE } from "@/app/base";
import type { Locale } from "@/app/i18n";

const content = {
  uk: {
    label:"ПАЦІЄНТАМ З ІНШИХ РЕГІОНІВ І КРАЇН",
    title:"Лікування асептичного некрозу для пацієнтів з інших міст і країн",
    paragraphs:[
      "Якщо ви проживаєте за межами Києва або за кордоном, перший етап звернення можна організувати дистанційно. Для попередньої оцінки бажано надати МРТ, рентгенограми та попередні медичні висновки, за можливості — оригінальні DICOM-зображення.",
      "Після аналізу матеріалів узгоджуємо доцільність очної консультації, додаткові обстеження та можливі варіанти лікування. Якщо операція показана, окремо обговорюємо її місце, строки, реабілітацію й контроль після повернення додому.",
      "Залежно від клінічних та організаційних можливостей лікування може розглядатися не лише в Києві, а й у західних регіонах України, які можуть бути відносно безпечнішими. Клінічна база й умови узгоджуються індивідуально. Жодна локація в Україні не гарантує повної безпеки."
    ],
    link:"Детальніше про звернення з-за кордону",
    faq:"Поширені питання щодо організації лікування",
    questions:[
      ["Чи можна отримати попередню оцінку МРТ дистанційно?","Так. Можна надіслати наявні МРТ, рентгенограми та висновки. Попередній розгляд допомагає спланувати наступні дії, але не завжди замінює очний огляд."],
      ["Чи можна приїхати на лікування з Польщі, Німеччини або Чехії?","Можливість приїзду, місце та строки лікування обговорюємо індивідуально після оцінки стану суглоба. Необхідно враховувати актуальні ризики безпеки подорожі в Україну."],
      ["Скільки коштує лікування асептичного некрозу?","Вартість залежить від стадії, обстежень та обраної тактики: спостереження, органозберігальної операції або ендопротезування. Персональний кошторис можливий після оцінювання випадку."],
      ["Хто контролює стан після повернення за кордон?","План контрольних обстежень та реабілітації обговорюється заздалегідь. За потреби координуємо спостереження з лікарем за місцем проживання; дистанційний зв'язок не замінює необхідного очного огляду."]
    ]
  },
  en: {
    label:"PATIENTS FROM OTHER REGIONS AND COUNTRIES",
    title:"Femoral head osteonecrosis treatment for patients travelling from abroad",
    paragraphs:[
      "If you live outside Kyiv or Ukraine, the initial assessment can be arranged remotely. Please provide any existing MRI, X-rays and medical reports, preferably including the original DICOM image files.",
      "After reviewing the records, we can discuss whether an in-person visit, additional imaging or treatment is appropriate. If surgery is indicated, the location, timing, rehabilitation and follow-up after returning home are planned individually.",
      "Depending on clinical and organisational circumstances, care may be considered in Kyiv or in western regions of Ukraine that may be relatively safer. The specific facility and arrangements are agreed individually. No location in Ukraine can guarantee complete safety."
    ],
    link:"More information for international patients",
    faq:"Practical questions about travelling for treatment",
    questions:[
      ["Can my MRI be reviewed before I travel?","Yes. Available MRI, X-rays and reports can be reviewed to help plan next steps. A remote preliminary assessment does not always replace an in-person examination."],
      ["Can I travel for treatment from Poland, Germany or Czechia?","Travel, treatment location and timing can be discussed after clinical assessment. Current security risks associated with travel to Ukraine must be considered."],
      ["How much does osteonecrosis treatment cost?","Costs depend on the stage, required investigations and treatment chosen, such as monitoring, joint-preserving surgery or hip replacement. An individual estimate follows assessment."],
      ["How will follow-up work after I return home?","Imaging, rehabilitation and follow-up arrangements are discussed in advance. Collaboration with a doctor in your home country may be needed; remote contact cannot replace essential examinations."]
    ]
  },
  de: {
    label:"PATIENTEN AUS ANDEREN REGIONEN UND LÄNDERN",
    title:"Behandlung der Hüftkopfnekrose für Patienten aus dem Ausland",
    paragraphs:[
      "Wenn Sie außerhalb von Kyjiw oder der Ukraine leben, kann die erste Einschätzung aus der Ferne erfolgen. Bitte senden Sie vorhandene MRT- und Röntgenbilder sowie Befunde, möglichst mit den originalen DICOM-Dateien.",
      "Nach Sichtung der Unterlagen besprechen wir die Notwendigkeit einer persönlichen Untersuchung, zusätzliche Diagnostik und Behandlungsoptionen. Ist eine Operation angezeigt, werden Ort, Zeitpunkt, Rehabilitation und Nachkontrollen individuell geplant.",
      "Je nach medizinischen und organisatorischen Möglichkeiten kann die Behandlung in Kyjiw oder in westlichen Regionen der Ukraine erwogen werden, die relativ sicherer sein können. Klinik und Bedingungen werden individuell vereinbart. Kein Ort in der Ukraine bietet vollständige Sicherheit."
    ],
    link:"Weitere Informationen für internationale Patienten",
    faq:"Häufige Fragen zur Organisation der Behandlung",
    questions:[
      ["Kann mein MRT vor der Reise beurteilt werden?","Ja. Bereits vorhandene MRT-, Röntgenbilder und Befunde können für eine erste Einschätzung übermittelt werden. Diese ersetzt nicht in jedem Fall die persönliche Untersuchung."],
      ["Ist eine Anreise aus Deutschland, Polen oder Tschechien möglich?","Möglichkeiten, Behandlungsort und Zeitpunkt werden nach medizinischer Einschätzung geklärt. Die aktuellen Sicherheitsrisiken einer Reise in die Ukraine sind zu berücksichtigen."],
      ["Was kostet die Behandlung einer Hüftkopfnekrose?","Die Kosten richten sich nach Stadium, Diagnostik und Behandlungsverfahren – Verlaufskontrolle, gelenkerhaltender Eingriff oder Endoprothese. Ein individueller Kostenvoranschlag erfolgt nach Prüfung."],
      ["Wie erfolgen Kontrollen nach der Rückreise?","Kontrollen und Rehabilitation werden vorher geplant, gegebenenfalls zusammen mit einer Ärztin oder einem Arzt am Wohnort. Fernkontakt ersetzt notwendige Untersuchungen nicht."]
    ]
  },
  pl: {
    label:"PACJENCI Z INNYCH REGIONÓW I KRAJÓW",
    title:"Leczenie jałowej martwicy głowy kości udowej dla pacjentów z zagranicy",
    paragraphs:[
      "Jeśli mieszkasz poza Kijowem lub Ukrainą, wstępną ocenę można zorganizować zdalnie. Warto przesłać dostępne badania MRI, RTG i dokumentację medyczną, najlepiej również oryginalne pliki DICOM.",
      "Po analizie dokumentacji omawiamy potrzebę osobistej konsultacji, dalszą diagnostykę i opcje leczenia. Jeśli operacja będzie wskazana, indywidualnie ustalamy miejsce, termin, rehabilitację i kontrole po powrocie do domu.",
      "W zależności od możliwości klinicznych i organizacyjnych leczenie można rozważać w Kijowie lub w zachodnich regionach Ukrainy, które mogą być względnie bezpieczniejsze. Placówkę i warunki ustala się indywidualnie. Żadna lokalizacja w Ukrainie nie gwarantuje pełnego bezpieczeństwa."
    ],
    link:"Więcej informacji dla pacjentów z zagranicy",
    faq:"Pytania dotyczące organizacji leczenia",
    questions:[
      ["Czy można ocenić moje MRI przed przyjazdem?","Tak. Można przesłać wykonane MRI, RTG i opisy badań. Wstępna analiza pomoże zaplanować dalsze kroki, ale nie zawsze zastąpi badanie osobiste."],
      ["Czy można przyjechać na leczenie z Polski, Niemiec lub Czech?","Możliwość przyjazdu, miejsce i termin leczenia uzgadnia się po ocenie medycznej. Trzeba uwzględnić aktualne zagrożenia związane z podróżą do Ukrainy."],
      ["Ile kosztuje leczenie martwicy głowy kości udowej?","Koszt zależy od stadium, potrzebnej diagnostyki i metody leczenia: obserwacji, zabiegu oszczędzającego staw lub endoprotezoplastyki. Indywidualną wycenę przygotowuje się po ocenie przypadku."],
      ["Jak będą przebiegały kontrole po powrocie za granicę?","Plan kontroli i rehabilitacji uzgadnia się wcześniej. W razie potrzeby pacjent pozostaje pod opieką lekarza w miejscu zamieszkania; kontakt zdalny nie zastępuje koniecznych badań."]
    ]
  }
} as const;

export default function AvnInternational({lang}:{lang:Locale}) {
  const d=content[lang];
  return (
    <section className="mt-12 rounded-[8px] border border-hairline bg-cream p-6 sm:p-9" aria-labelledby="avn-international-heading">
      <p className="label-caps text-ink-muted mb-4">{d.label}</p>
      <h2 id="avn-international-heading" className="text-2xl sm:text-3xl font-light text-ink mb-5">{d.title}</h2>
      <div className="space-y-4 text-ink leading-relaxed">
        {d.paragraphs.map((paragraph,i)=><p key={i}>{paragraph}</p>)}
        <p><a className="font-medium underline underline-offset-4 text-tan-dark hover:no-underline" href={`${BASE}/${lang}/international-patients/`}>{d.link} →</a></p>
      </div>
      <h3 className="text-xl font-medium mt-9 mb-4">{d.faq}</h3>
      <div className="divide-y divide-hairline border-y border-hairline">
        {d.questions.map(([question,answer])=>(
          <details key={question} className="group px-1 py-4">
            <summary className="font-medium text-ink cursor-pointer">{question}</summary>
            <p className="mt-3 text-ink leading-relaxed">{answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
