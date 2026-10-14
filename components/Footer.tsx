import { localeNames, type Dict, type Locale } from "@/app/i18n";
import { BASE } from "@/app/base";
import { CONTACTS } from "@/app/contacts";

export default function Footer({ dict, lang }: { dict: Dict; lang: Locale }) {
  const navLinks = [
    { label: dict.nav.home, href: `${BASE}/${lang}/` },
    { label: dict.nav.field, href: `${BASE}/${lang}/#about-field` },
    { label: dict.nav.treatments, href: `${BASE}/${lang}/#treatments` },
    { label: dict.nav.doctor, href: `${BASE}/${lang}/#about-doctor` },
    { label: dict.nav.tech, href: `${BASE}/${lang}/#technology` },
    { label: dict.nav.contacts, href: `${BASE}/${lang}/#consultation` },
    { label: dict.nav.forColleagues, href: `${BASE}/${lang}/clinical/` },
  ];

  return (
    <footer className="bg-cream border-t border-hairline">
      {/* Single-row layout: brand — nav — contacts */}
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 py-12 flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-8">
        <div className="lg:w-64 shrink-0">
          <div className="font-serif italic text-3xl tracking-tight leading-none mb-2">
            Baida<span className="text-tan">.</span>
          </div>
          <div className="label-caps-sm text-ink-muted">{dict.common.brandTagline}</div>
        </div>

        <nav className="flex-1">
          <ul className="flex flex-wrap lg:justify-center gap-x-7 gap-y-3">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-sm text-ink hover:text-tan-dark transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:w-64 shrink-0 flex flex-col items-start lg:items-end gap-1.5">
          <a
            href={CONTACTS.telegramHref}
            className="text-sm font-medium text-ink hover:text-tan-dark transition-colors"
          >
            {CONTACTS.phoneDisplay}
          </a>
          <a
            href={CONTACTS.emailHref}
            className="text-sm font-medium text-ink hover:text-tan-dark transition-colors"
          >
            {CONTACTS.email}
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-hairline">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4 label-caps-sm text-ink-muted">
          <span>{dict.footer.copyright}</span>
          <div className="flex items-center gap-4">
            {(Object.keys(localeNames) as Locale[]).map((l, i) => (
              <span key={l} className="flex items-center gap-4">
                {i > 0 && <span className="opacity-30">·</span>}
                <a
                  href={`${BASE}/${l}/`}
                  className={l === lang ? "text-ink" : "opacity-50 hover:opacity-100 transition-opacity"}
                >
                  {localeNames[l]}
                </a>
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
