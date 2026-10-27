import { BASE } from "@/app/base";

type Locale = "uk" | "en" | "de" | "pl";

const translations = {
  "uk": {
    "eyebrow": "ПАЦІЄНТАМ З ІНШИХ РЕГІОНІВ І КРАЇН",
    "title": "Артроскопічне лікування для пацієнтів з інших міст і країн",
    "p": [
      "Якщо ви проживаєте за межами Києва або за кордоном, перший етап звернення можна організувати дистанційно. Під час попереднього контакту погоджуємо формат консультації, необхідні медичні документи й обстеження та можливість подальшого очного огляду.",
      "Якщо після клінічної оцінки артроскопічне втручання буде показане, окремо обговоримо тип операції, місце її проведення, необхідний час перебування, обмеження після операції, реабілітацію та контрольні огляди. Терміни залежать від процедури: шов меніска, реконструкція ACL та операції на плечі потребують різних програм відновлення.",
      "Залежно від клінічних і організаційних можливостей лікування може розглядатися не лише в Києві, а й у західних регіонах України, які можуть бути відносно безпечнішими. Конкретна клінічна база та умови узгоджуються індивідуально. Жодна локація в Україні не гарантує повної безпеки."
    ],
    "link": "Детальніше про звернення з-за кордону",
    "faqTitle": "Поширені питання щодо організації лікування",
    "faq": [
      [
        "Чи можна приїхати на артроскопію з Польщі, Німеччини або Чехії?",
        "Можливість лікування обговорюємо після дистанційного розгляду документів і подальшої очної оцінки за потреби. Дату, місце та обсяг втручання узгоджуємо індивідуально з урахуванням поточних безпекових і транспортних умов."
      ],
      [
        "Які обстеження потрібно надіслати для попередньої консультації?",
        "Корисно надати короткий опис симптомів і попередніх операцій, висновки МРТ, рентгенографії чи КТ, а за можливості самі зображення. Після перегляду визначимо, чи потрібні додаткові дослідження або очний огляд."
      ],
      [
        "Як організувати реабілітацію після повернення додому?",
        "План реабілітації та контрольних оглядів обговорюємо до операції. За можливості залучаємо фахівця за місцем проживання пацієнта; дистанційні консультації не замінюють обов'язкових очних оглядів."
      ]
    ]
  },
  "en": {
    "eyebrow": "PATIENTS FROM OTHER REGIONS AND COUNTRIES",
    "title": "Arthroscopic treatment for patients travelling from other cities and countries",
    "p": [
      "If you live outside Kyiv or abroad, the initial enquiry can be arranged remotely. We can discuss the consultation format, medical records and imaging required, and whether an in-person examination is necessary.",
      "If surgery is indicated after assessment, we will separately discuss the procedure, treatment location, length of stay, postoperative restrictions, rehabilitation and follow-up. Recovery planning differs considerably between meniscal repair, ACL reconstruction and shoulder procedures.",
      "Depending on clinical and organisational circumstances, treatment may be considered in Kyiv or western regions of Ukraine that may be relatively safer. The hospital and arrangements are confirmed individually. No location in Ukraine can guarantee complete safety."
    ],
    "link": "Information for international patients",
    "faqTitle": "Common questions about arranging treatment",
    "faq": [
      [
        "Can I travel for arthroscopy from Poland, Germany or Czechia?",
        "This can be considered after a preliminary remote review and, where needed, an in-person examination. The location, timing and procedure are agreed individually, considering current travel and security conditions."
      ],
      [
        "What records should I send before a consultation?",
        "A brief symptom history, information about previous operations, MRI, X-ray or CT reports and, ideally, the actual images. We will advise whether further tests or examination are required."
      ],
      [
        "Who will manage rehabilitation after I return home?",
        "We discuss follow-up and rehabilitation before surgery, including cooperation with a local clinician when possible. Remote follow-up cannot replace required in-person examinations."
      ]
    ]
  },
  "de": {
    "eyebrow": "PATIENTEN AUS ANDEREN REGIONEN UND LÄNDERN",
    "title": "Arthroskopische Behandlung für Patienten aus anderen Städten und Ländern",
    "p": [
      "Wenn Sie außerhalb von Kyjiw oder im Ausland leben, kann die erste Kontaktaufnahme aus der Ferne erfolgen. Dabei klären wir das Beratungsformat, erforderliche Befunde und Aufnahmen sowie die Notwendigkeit einer persönlichen Untersuchung.",
      "Ist nach ärztlicher Beurteilung eine Operation angezeigt, besprechen wir Art und Ort des Eingriffs, Aufenthaltsdauer, postoperative Einschränkungen, Rehabilitation und Kontrollen. Die Erholung unterscheidet sich beispielsweise nach Meniskusnaht, Kreuzbandrekonstruktion und Schulteroperation.",
      "Je nach medizinischen und organisatorischen Möglichkeiten kann die Behandlung in Kyjiw oder in westlichen Regionen der Ukraine stattfinden, die unter Umständen vergleichsweise sicherer sind. Klinik und Rahmenbedingungen werden individuell vereinbart. Kein Ort in der Ukraine bietet vollständige Sicherheit."
    ],
    "link": "Weitere Informationen für internationale Patienten",
    "faqTitle": "Häufige Fragen zur Behandlungsorganisation",
    "faq": [
      [
        "Kann ich aus Polen, Deutschland oder Tschechien für eine Arthroskopie anreisen?",
        "Dies kann nach einer ersten Fernbeurteilung und gegebenenfalls persönlicher Untersuchung besprochen werden. Ort, Zeitpunkt und Eingriff werden individuell unter Berücksichtigung aktueller Reise- und Sicherheitsbedingungen abgestimmt."
      ],
      [
        "Welche Unterlagen soll ich vor der Beratung schicken?",
        "Hilfreich sind eine kurze Beschwerdebeschreibung, Angaben zu früheren Operationen, MRT-, Röntgen- oder CT-Befunde und möglichst die Originalaufnahmen. Anschließend klären wir, ob weitere Untersuchungen nötig sind."
      ],
      [
        "Wer übernimmt die Rehabilitation nach der Rückkehr?",
        "Die Rehabilitation und Kontrolltermine werden vor der Operation geplant, gegebenenfalls in Zusammenarbeit mit einem Arzt am Wohnort. Eine Fernberatung ersetzt keine erforderlichen persönlichen Kontrollen."
      ]
    ]
  },
  "pl": {
    "eyebrow": "DLA PACJENTÓW Z INNYCH REGIONÓW I KRAJÓW",
    "title": "Leczenie artroskopowe dla pacjentów z innych miast i krajów",
    "p": [
      "Jeżeli mieszkasz poza Kijowem lub za granicą, pierwszy kontakt można zorganizować zdalnie. Omawiamy formę konsultacji, niezbędną dokumentację i badania obrazowe oraz potrzebę osobistego badania.",
      "Jeśli po ocenie klinicznej istnieją wskazania do artroskopii, oddzielnie ustalamy rodzaj i miejsce operacji, długość pobytu, ograniczenia po zabiegu, rehabilitację i kontrole. Rekonwalescencja po szyciu łąkotki, rekonstrukcji ACL i operacjach barku przebiega inaczej.",
      "Zależnie od możliwości medycznych i organizacyjnych leczenie można rozważyć w Kijowie lub zachodnich regionach Ukrainy, które mogą być względnie bezpieczniejsze. Placówkę i warunki ustala się indywidualnie. Żadne miejsce w Ukrainie nie gwarantuje pełnego bezpieczeństwa."
    ],
    "link": "Więcej informacji dla pacjentów zagranicznych",
    "faqTitle": "Pytania dotyczące organizacji leczenia",
    "faq": [
      [
        "Czy można przyjechać na artroskopię z Polski, Niemiec lub Czech?",
        "Możliwość przyjazdu omawiamy po wstępnej zdalnej ocenie dokumentacji i, gdy potrzeba, osobistym badaniu. Miejsce, termin i zakres zabiegu ustalamy indywidualnie, uwzględniając aktualne warunki podróży i bezpieczeństwa."
      ],
      [
        "Jaką dokumentację przesłać przed konsultacją?",
        "Warto przesłać opis objawów i poprzednich operacji, wyniki MRI, RTG lub TK oraz — jeśli to możliwe — same obrazy. Po analizie ustalimy, czy potrzebne są dodatkowe badania."
      ],
      [
        "Jak zorganizować rehabilitację po powrocie do domu?",
        "Plan rehabilitacji i wizyt kontrolnych ustalamy przed operacją, w miarę możliwości we współpracy z lekarzem w miejscu zamieszkania. Konsultacje zdalne nie zastępują koniecznych badań osobistych."
      ]
    ]
  }
} as const;

export default function ArthroscopyInternational({ lang }: { lang: Locale }) {
  const t = translations[lang];
  return (
    <section className="mt-12 rounded-[8px] border border-hairline bg-cream p-6 sm:p-9" aria-labelledby="arthroscopy-international-heading">
      <p className="label-caps text-ink-muted mb-4">{t.eyebrow}</p>
      <h2 id="arthroscopy-international-heading" className="text-2xl sm:text-3xl font-light text-ink mb-5">{t.title}</h2>
      <div className="space-y-4 text-ink leading-relaxed">
        {t.p.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        <p><a className="font-medium underline underline-offset-4 text-tan-dark hover:no-underline" href={`${BASE}/${lang}/international-patients/`}>{t.link} →</a></p>
      </div>
      <h3 className="text-xl font-medium mt-9 mb-4">{t.faqTitle}</h3>
      <div className="divide-y divide-hairline border-y border-hairline">
        {t.faq.map(([question,answer])=><details key={question} className="group px-1 py-4"><summary className="font-medium text-ink cursor-pointer">{question}</summary><p className="mt-3 text-ink leading-relaxed">{answer}</p></details>)}
      </div>
    </section>
  );
}
