import { site } from "@/config/site";

export const contactCopy = {
  title: "Contact",
  heroAlt:
    "Sortie de toiture en acier, grille de protection, au-dessus d’un paysage",
  lead: `Demandez un devis, une étude ou une visite technique pour un logement, un immeuble ou un chantier dans les ${site.serviceZone.display}.`,
  aeo: "Le devis suit la compréhension du besoin, et une visite technique si elle est nécessaire. Étude et élaboration de plans sur demande.",
  success:
    "Merci. Votre demande a bien été envoyée. Nous vous répondrons dans les meilleurs délais.",
  error: "Vérifiez les champs marqués, puis renvoyez.",
  consent:
    "J’accepte que BR Tech Sàrl utilise ces données pour traiter ma demande (nLPD).",
  placeholderMessage: "Décrivez le bâtiment, le besoin et le délai souhaité.",
  metaTitle: "Devis ventilation Suisse romande",
  metaDescription: `Demander un devis ou planifier une visite technique — ventilation à Renens et dans les ${site.serviceZone.display}. BR Tech Sàrl.`,
} as const;
