"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const ID = "G-5VGYV62NPE";
const CONSENT_KEY = "travmatolog-analytics-consent";

export default function Analytics() {
  const [consent, setConsent] = useState<"unknown" | "yes" | "no">("unknown");

  useEffect(() => {
    const choice = window.localStorage.getItem(CONSENT_KEY);
    if (choice === "yes" || choice === "no") setConsent(choice);
  }, []);

  useEffect(() => {
    if (!ID || consent !== "yes") return;
    const onContactClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const a = target.closest("a[href]");
      if (!a) return;
      const href = a.getAttribute("href") || "";
      let channel: string | undefined;
      if (href.startsWith("tel:")) channel = "phone";
      else if (href.startsWith("mailto:")) channel = "email";
      else if (href.startsWith("https://t.me/")) channel = "telegram";
      else if (href.startsWith("https://wa.me/")) channel = "whatsapp";
      if (channel) window.gtag?.("event", "contact_click", {
        contact_channel: channel,
        page_path: window.location.pathname,
        page_language: window.location.pathname.split("/")[1] || "unknown",
      });
    };
    document.addEventListener("click", onContactClick);
    return () => document.removeEventListener("click", onContactClick);
  }, [consent]);

  if (!ID) return null;

  const save = (answer: "yes" | "no") => {
    window.localStorage.setItem(CONSENT_KEY, answer);
    setConsent(answer);
  };

  return (
    <>
      {consent === "yes" && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${ID}`} strategy="afterInteractive" />
          <Script id="ga4-init" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('js', new Date());
gtag('config', '${ID}', { send_page_view: true, page_language: window.location.pathname.split('/')[1] || 'unknown' });`}
          </Script>
        </>
      )}
      {consent === "unknown" && (
        <aside role="dialog" aria-label="Аналітичні файли cookie" className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-xl rounded-xl border border-neutral-300 bg-white p-4 text-neutral-900 shadow-lg">
          <p className="text-sm">Ми використовуємо необов'язкову аналітику відвідуваності, щоб покращувати сайт. Ви можете погодитися або відмовитися.</p>
          <div className="mt-3 flex gap-3">
            <button type="button" className="rounded-md bg-neutral-900 px-4 py-2 text-sm text-white" onClick={() => save("yes")}>Погоджуюся</button>
            <button type="button" className="rounded-md border border-neutral-400 px-4 py-2 text-sm" onClick={() => save("no")}>Відмовитися</button>
          </div>
        </aside>
      )}
    </>
  );
}
