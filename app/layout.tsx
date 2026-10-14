import type { Metadata } from "next";
import { Manrope, Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

// Production origin — the site's custom domain.
const SITE_URL = "https://travmatolog.in.ua";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Dr. Maksym Baida, PhD — Modern Orthopaedic Reconstruction",
  description:
    "Сучасна реконструктивна ортопедія, корекція деформацій та подовження кінцівок. Київ.",
  openGraph: {
    type: "website",
    siteName: "Modern Orthopaedic Reconstruction",
    title: "Dr. Maksym Baida, PhD — Modern Orthopaedic Reconstruction",
    description:
      "Сучасна реконструктивна ортопедія, корекція деформацій та подовження кінцівок. Київ.",
    images: [
      {
        url: `${SITE_URL}/og.jpg`,
        width: 1200,
        height: 630,
        alt: "Dr. Maksym Baida, PhD — Modern Orthopaedic Reconstruction",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Maksym Baida, PhD — Modern Orthopaedic Reconstruction",
    description:
      "Сучасна реконструктивна ортопедія, корекція деформацій та подовження кінцівок. Київ.",
    images: [`${SITE_URL}/og.jpg`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="uk"
      className={`${manrope.variable} ${inter.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink">
        {children}
      </body>
    </html>
  );
}
