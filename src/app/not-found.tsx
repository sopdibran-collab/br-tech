import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/ButtonLink";

const notFoundDescription =
  "Cette page n’existe pas. BR Tech Sàrl, ventilation à Renens et en Suisse romande.";

export const metadata: Metadata = {
  title: "Page introuvable",
  description: notFoundDescription,
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
    },
  },
  openGraph: {
    title: "Page introuvable — BR Tech Sàrl",
    description: notFoundDescription,
  },
  twitter: {
    title: "Page introuvable — BR Tech Sàrl",
    description: notFoundDescription,
  },
};

export default function NotFound() {
  return (
    <div className="mx-auto max-w-[720px] px-5 py-24 md:px-8">
      <h1 className="text-[32px] font-semibold text-navy">Cette page n’existe pas</h1>
      <p className="mt-4 text-ink-secondary">Retour à l’accueil.</p>
      <ButtonLink href="/" className="mt-8">
        Accueil
      </ButtonLink>
    </div>
  );
}
