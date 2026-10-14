"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type LinkItem = { label: string; href: string };
type LocaleItem = { code: string; name: string; href: string; active: boolean };

export default function MobileMenu({
  menuLabel,
  links,
  audience,
  locales,
}: {
  menuLabel: string;
  links: LinkItem[];
  audience: LinkItem;
  locales: LocaleItem[];
}) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Lock body scroll while the drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const overlay = (
    <div
      className={`fixed inset-0 z-[100] overflow-hidden transition-opacity duration-300 ${
        open ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      />
      <nav
        className={`absolute top-0 right-0 h-full w-[86%] max-w-sm surface-navy bg-tan-dark text-white flex flex-col shadow-2xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/15">
          <span className="font-serif italic text-2xl leading-none tracking-tight">
            Baida<span className="text-tan">.</span>
          </span>
          <button
            type="button"
            aria-label="Close"
            onClick={() => setOpen(false)}
            className="w-10 h-10 flex items-center justify-center border border-white/20 hover:border-white transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="3" y1="3" x2="13" y2="13" />
              <line x1="13" y1="3" x2="3" y2="13" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-8">
          <ul className="space-y-1">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 font-sans font-light text-2xl tracking-tight text-white/90 hover:text-tan transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Audience toggle — prominent */}
          <a
            href={audience.href}
            onClick={() => setOpen(false)}
            className="mt-8 flex items-center justify-between w-full label-caps text-white bg-white/[0.06] border border-tan hover:bg-white/10 px-5 py-4 transition-colors"
          >
            {audience.label}
            <span aria-hidden className="text-tan">→</span>
          </a>
        </div>

        <div className="px-6 py-6 border-t border-white/15 flex items-center gap-5">
          {locales.map((loc) => (
            <a
              key={loc.code}
              href={loc.href}
              className={`label-caps text-[12px] transition-colors ${
                loc.active ? "text-white" : "text-white/50 hover:text-white"
              }`}
            >
              {loc.name}
            </a>
          ))}
        </div>
      </nav>
    </div>
  );

  return (
    <>
      {/* Burger */}
      <button
        type="button"
        aria-label={menuLabel}
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className="flex items-center justify-center w-[72px] sm:w-[100px] border-l border-white/15 hover:bg-white/10 transition-colors text-white"
      >
        <svg width="20" height="14" viewBox="0 0 20 14" fill="none" stroke="currentColor" strokeWidth="1.4">
          <line x1="0" y1="1" x2="20" y2="1" />
          <line x1="0" y1="7" x2="20" y2="7" />
          <line x1="0" y1="13" x2="20" y2="13" />
        </svg>
      </button>

      {mounted && createPortal(overlay, document.body)}
    </>
  );
}
