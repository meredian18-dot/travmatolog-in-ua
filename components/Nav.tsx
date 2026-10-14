import { locales, localeNames, type Dict, type Locale } from "@/app/i18n";
import { BASE } from "@/app/base";
import MobileMenu from "@/components/MobileMenu";

function LocaleDropdown({ lang, current }: { lang: Locale; current: "home" | "clinical" }) {
  const suffix = current === "clinical" ? "clinical/" : "";
  return (
    <details className="relative group">
      <summary className="flex items-center gap-2 px-6 py-5 label-caps text-[11.5px] font-semibold text-white/85 hover:text-white cursor-pointer list-none border-l border-white/15 h-full transition-colors">
        <span>{localeNames[lang]}</span>
        <svg
          className="transition-transform group-open:rotate-180"
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M1 1 L5 5 L9 1" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </summary>
      <div className="absolute right-0 top-full mt-0 min-w-[80px] bg-cream border border-hairline shadow-lg z-50">
        {locales.map((l) => (
          <a
            key={l}
            href={`${BASE}/${l}/${suffix}`}
            className={`block w-full text-left px-5 py-3 label-caps transition-colors ${
              l === lang
                ? "text-ink bg-paper"
                : "text-ink-muted hover:text-ink hover:bg-paper"
            }`}
          >
            {localeNames[l]}
          </a>
        ))}
      </div>
    </details>
  );
}

export default function Nav({
  dict,
  lang,
  current,
}: {
  dict: Dict;
  lang: Locale;
  current: "home" | "clinical";
}) {
  const navLinks = [
    { label: dict.nav.home, href: `${BASE}/${lang}/`, key: "home" },
    { label: dict.nav.field, href: `${BASE}/${lang}/#about-field`, key: "field" },
    { label: dict.nav.treatments, href: `${BASE}/${lang}/#treatments`, key: "treatments" },
    { label: dict.nav.doctor, href: `${BASE}/${lang}/#about-doctor`, key: "doctor" },
    { label: dict.nav.tech, href: `${BASE}/${lang}/#technology`, key: "tech" },
    { label: dict.nav.contacts, href: `${BASE}/${lang}/#consultation`, key: "contacts" },
  ];

  const onClinical = current === "clinical";
  const audience = onClinical
    ? { label: dict.nav.forPatients, href: `${BASE}/${lang}/` }
    : { label: dict.nav.forColleagues, href: `${BASE}/${lang}/clinical/` };

  const suffix = onClinical ? "clinical/" : "";
  const localeItems = locales.map((l) => ({
    code: l,
    name: localeNames[l],
    href: `${BASE}/${l}/${suffix}`,
    active: l === lang,
  }));

  return (
    <header className="bg-black/25 backdrop-blur-md border-b border-white/10">
      <div className="flex items-stretch">
        {/* Logo */}
        <a href={`${BASE}/${lang}/`} className="flex flex-col justify-center px-6 xl:px-8 py-5 xl:w-[220px] border-r border-white/15">
          <span className="font-serif italic text-2xl leading-none tracking-tight text-white">
            Baida<span className="text-tan">.</span>
          </span>
          <span className="label-caps-sm text-white/65 font-semibold mt-1.5 leading-tight">
            {dict.common.brandTagline}
          </span>
        </a>

        {/* Main nav — desktop */}
        <nav className="hidden xl:flex items-center gap-8 px-8 flex-1">
          {navLinks.map((link) => {
            const active = current === "home" && link.key === "home";
            return (
              <a
                key={link.key}
                href={link.href}
                className={`label-caps text-[11.5px] font-semibold relative py-2 transition-colors ${
                  active ? "text-white" : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
                {active && (
                  <span className="absolute left-0 right-0 -bottom-px h-px bg-tan" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Locale dropdown — desktop */}
        <div className="hidden xl:flex items-stretch">
          <LocaleDropdown lang={lang} current={current} />
        </div>

        {/* Audience toggle — desktop */}
        {onClinical ? (
          <a
            href={audience.href}
            className="hidden xl:flex items-center gap-2 px-6 border-l border-white/15 label-caps text-[11.5px] font-semibold text-white/85 hover:text-tan transition-colors"
          >
            <span aria-hidden>←</span>
            {audience.label}
          </a>
        ) : (
          <a
            href={audience.href}
            className="hidden xl:flex items-center gap-2 px-6 border-l border-white/15 label-caps text-[11.5px] font-semibold text-white/85 hover:text-tan transition-colors"
          >
            {audience.label}
            <span aria-hidden>→</span>
          </a>
        )}

        {/* Mobile menu — below lg */}
        <div className="flex xl:hidden ml-auto items-stretch">
          <MobileMenu
            menuLabel={dict.nav.menu}
            links={navLinks.map(({ label, href }) => ({ label, href }))}
            audience={audience}
            locales={localeItems}
          />
        </div>
      </div>
    </header>
  );
}
