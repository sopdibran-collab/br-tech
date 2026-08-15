import type { ServicePageContent } from "@/content/types";

export const maintenancePage: ServicePageContent = {
  path: "/maintenance",
  title: "Entretien VMC Suisse romande",
  description:
    "Maintenance et entretien de VMC en Suisse romande, depuis Renens. Contrats, filtres, débits — offre distincte de l’installation.",
  h1: "Maintenance et entretien de VMC",
  lead: "La performance d’une VMC (débits, filtres, hygiène des réseaux) se tient par un suivi. BR Tech Sàrl propose la maintenance comme offre distincte de l’installation, en Suisse romande, depuis Renens.",
  serviceName: "Maintenance et entretien de VMC",
  contactType: "maintenance",
  includeLausanne: true,
  illustration: "maintenance",
  sections: [
    {
      title: "Pourquoi un contrat",
      answer:
        "La performance (débits, filtres, hygiène des réseaux) se maintient par un suivi ; BR Tech propose la maintenance comme offre séparée de l’installation.",
      body: "Sans passages documentés, les filtres s’encrassent et les débits chutent. Le contrat fixe le rythme et le périmètre, lisible pour une régie comme pour un particulier.",
    },
    {
      title: "Fréquence",
      answer:
        "Il n’existe pas une fréquence légale unique : le rythme est fixé par le fabricant et le contrat d’entretien (souvent au moins un passage filtres par an en logement).",
      body: "Un usage intensif, un environnement poussiéreux ou un cahier des charges plus exigeant peuvent justifier des passages plus rapprochés. Nous ne remplaçons pas les consignes du fabricant par un slogan.",
    },
    {
      title: "Ce qui est contrôlé",
      answer:
        "Filtres, bouches, débits ; l’hygiène des réseaux aérauliques conditionne la qualité de l’air, ce n’est pas un nettoyage de locaux.",
      body: "Le nettoyage de gaines, quand il est nécessaire, se discute dans le contrat ou en complément — ce n’est pas une page séparée à ce stade.",
    },
    {
      title: "Pour les régies",
      answer:
        "Suivi documenté, un interlocuteur sur le lot air.",
      body: "Immeuble ou parc : les passages, les mesures et les observations restent traçables. Le devis de maintenance se demande comme les autres prestations, sans « gratuit » annoncé.",
    },
  ],
  faq: [
    {
      q: "À quelle fréquence entretenir une VMC en Suisse ?",
      a: "Il n’existe pas une fréquence légale unique : le rythme est fixé par le fabricant et le contrat d’entretien (souvent au moins un passage filtres par an en logement).",
    },
    {
      q: "Faut-il un contrat d’entretien après l’installation ?",
      a: "La performance (débits, filtres, hygiène des réseaux) se maintient par un suivi ; BR Tech propose la maintenance comme offre séparée de l’installation.",
    },
    {
      q: "Le nettoyage des gaines fait-il partie de la ventilation ?",
      a: "L’hygiène des réseaux aérauliques conditionne la qualité de l’air ; ce n’est pas un nettoyage de locaux.",
    },
  ],
  related: [
    { label: "Installation", href: "/services/installation" },
    { label: "VMC double flux", href: "/services/double-flux" },
    { label: "Demander un devis", href: "/contact?type=maintenance" },
  ],
};
