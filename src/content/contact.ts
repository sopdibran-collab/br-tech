import { site } from "@/config/site";

export const contactCopy = {
  title: "Contact",
  lead: `Demandez un devis, une étude ou une visite technique pour un logement, un immeuble ou un chantier dans les ${site.serviceZone.display}.`,
  aeo: "Le devis suit la compréhension du besoin, et une visite technique si elle est nécessaire. Étude et élaboration de plans sur demande.",
  success:
    "Merci. Votre message est prêt. Un e-mail vers info@brtech.ch peut s’ouvrir pour l’envoi — ou écrivez-nous directement.",
  error: "Vérifiez les champs marqués, puis renvoyez.",
  consent:
    "J’accepte que BR Tech Sàrl utilise ces données pour traiter ma demande (nLPD).",
  placeholderMessage: "Décrivez le bâtiment, le besoin et le délai souhaité.",
  metaTitle: "Devis ventilation Suisse romande",
  metaDescription: `Demander un devis ou planifier une visite technique — ventilation à Renens et dans les ${site.serviceZone.display}. BR Tech Sàrl.`,
} as const;
