import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, Outfit } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SkipLink } from "@/components/layout/SkipLink";
import { StickyMobileCta } from "@/components/layout/StickyMobileCta";
import { site } from "@/config/site";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "BR Tech Sàrl | Ventilation Suisse romande — Renens (VD)",
    template: "%s — BR Tech Sàrl",
  },
  description:
    "BR Tech Sàrl installe et entretient la ventilation à Renens et en Suisse romande — VMC, réseaux, maintenance. Devis après visite technique.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    locale: "fr_CH",
    siteName: site.legalName,
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr-CH"
      className={`${outfit.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-surface-page text-ink pb-16 md:pb-0">
        <SkipLink />
        <SiteHeader />
        <main id="contenu" className="flex-1">
          {children}
        </main>
        <Footer />
        <StickyMobileCta />
      </body>
    </html>
  );
}
