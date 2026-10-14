import type { Dict, Locale } from "@/app/i18n";
import { BASE } from "@/app/base";
import { CONTACTS } from "@/app/contacts";

export default function TopBar({ dict, lang }: { dict: Dict; lang: Locale }) {
  return (
    <div className="hidden md:block bg-black/20 backdrop-blur-sm text-white/80 border-b border-white/10">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 py-3 flex items-center justify-center gap-6 lg:gap-12 label-caps-sm">
        <a href={CONTACTS.emailHref} className="flex items-center gap-2 hover:text-white transition-colors">
          <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2">
            <rect x="1.5" y="3.5" width="13" height="9" />
            <path d="M1.5 4l6.5 5 6.5-5" />
          </svg>
          {CONTACTS.email.toUpperCase()}
        </a>
        <span className="opacity-30">·</span>
        <a href={CONTACTS.phoneHref} className="flex items-center gap-2 hover:text-white transition-colors">
          <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M3.5 2.5l2 .5 1 3-1.5 1.5a8 8 0 003.5 3.5L10 9.5l3 1 .5 2L12 14a10 10 0 01-10-10l1.5-1.5z" />
          </svg>
          {CONTACTS.phoneDisplay}
        </a>
        <span className="opacity-30">·</span>
        <a href={`${BASE}/${lang}/#consultation`} className="flex items-center gap-2 hover:text-white transition-colors">
          <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2">
            <circle cx="8" cy="8" r="6" />
            <path d="M8 4v8M4 8h8" />
          </svg>
          {dict.topbar.online}
        </a>
      </div>
    </div>
  );
}
