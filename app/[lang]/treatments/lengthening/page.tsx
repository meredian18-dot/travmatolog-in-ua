import { locales } from "@/app/i18n";
import { BASE } from "@/app/base";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function LegacyLengthening({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const target = `${BASE}/${lang}/treatments/limb-lengthening/`;
  return (
    <html lang={lang}>
      <head>
        <meta httpEquiv="refresh" content={`0; url=${target}`} />
        <meta name="robots" content="noindex,follow" />
        <link rel="canonical" href={`https://travmatolog.in.ua/${lang}/treatments/limb-lengthening/`} />
      </head>
      <body><p><a href={target}>Continue to the current page</a></p></body>
    </html>
  );
}
