"use client";

import { useEffect } from "react";
import { BASE } from "./base";

// Default locale. Static export can't redirect server-side, so the root
// route bounces to the default locale via meta-refresh (+ JS for instant nav).
const TARGET = `${BASE}/uk/`;

export default function RootRedirect() {
  useEffect(() => {
    window.location.replace(TARGET);
  }, []);

  return (
    <>
      <meta httpEquiv="refresh" content={`0; url=${TARGET}`} />
      <main className="min-h-screen flex items-center justify-center bg-cream">
        <a href={TARGET} className="label-caps text-ink-muted hover:text-ink transition-colors">
          Continue →
        </a>
      </main>
    </>
  );
}
