import { site } from "@/config/site";
import type { ServicePageContent } from "@/content/types";

export const maintenancePage: ServicePageContent = {
  path: "/maintenance",
  title: "Entretien VMC Suisse romande",
  description:
    "Entretien et contrat de VMC à Renens et en Suisse romande. BR Tech Sàrl : filtres, débits, hygiène des réseaux et nettoyage de conduits selon le contrat.",
  h1: "Maintenance et entretien de VMC",
  lead: `La performance d’une VMC (débits, filtres, hygiène des réseaux) se tient par un suivi. BR Tech Sàrl propose l’entretien et le contrat depuis Renens, dans les ${site.serviceZone.display}.`,
  serviceName: "Maintenance et entretien de VMC",
  contactType: "maintenance",
  includeLausanne: true,
  audience: {
    professionals:
      "Planning d’entretien pour immeubles et tertiaire, compte-rendu simple — un interlocuteur pour régies, promoteurs et entreprises générales.",
    individuals:
      "Filtres et réseau suivis pour garder un air sain au quotidien, avec un rythme fixé dans le contrat.",
  },
  sections: [
    {
      title: "Pourquoi un contrat",
      answer:
        "La performance (débits, filtres, hygiène des réseaux) se maintient par un suivi régulier.",
      body: "Sans passages documentés, les filtres s’encrassent et les débits chutent. Le contrat fixe le rythme et le périmètre, lisible pour une régie comme pour un particulier.",
    },
    {
      title: "Fréquence",
      answer:
        "Il n’existe pas une fréquence légale unique : le rythme est fixé par le fabricant et le contrat d’entretien.",
      body: "Un usage intensif, un environnement poussiéreux ou un cahier des charges plus exigeant peuvent justifier des passages plus rapprochés. Nous respectons les consignes du fabricant et les fixons dans le contrat.",
    },
    {
      title: "Ce qui est contrôlé",
      answer:
        "Filtres, bouches, débits ; l’hygiène des réseaux aérauliques conditionne la qualité de l’air, ce n’est pas un nettoyage de locaux.",
      body: "Selon le contrat : contrôle visuel, remplacement ou nettoyage des filtres, relevé de débits lorsque prévu, observations écrites. Le nettoyage de conduits, quand il est nécessaire, peut être inclus au contrat ou proposé en complément.",
    },
    {
      title: "Processus et livrables",
      answer:
        "Planification du passage, intervention sur site, compte-rendu simple, suite éventuelle (pièces, nettoyage de conduits, reprise).",
      body: "Pour un parc ou un immeuble, les passages et les observations restent traçables. Pour un logement, le compte-rendu reste court et lisible. En cas de panne, l’intervention est décrite sur la page Dépannage.",
    },
    {
      title: "Normes appliquées",
      answer:
        "Pour une installation d’habitation : SIA 382/5:2021 et SIA 382/1. Humidité et climat intérieur : SIA 180.",
      body: "Dans le suivi, elles concernent les débits, les filtres et l’hygiène du réseau. Les exigences énergétiques cantonales portent sur le bâtiment et ne remplacent pas le contrat d’entretien.",
    },
  ],
  faq: [
    {
      q: "À quelle fréquence entretenir une VMC en Suisse ?",
      a: "Il n’existe pas une fréquence légale unique : le rythme est fixé par le fabricant et le contrat d’entretien.",
    },
    {
      q: "Faut-il un contrat d’entretien après l’installation ?",
      a: "Oui. Un suivi régulier maintient débits, filtres et hygiène des réseaux. BR Tech propose l’entretien et le contrat après l’installation.",
    },
    {
      q: "Le nettoyage des conduits fait-il partie de la ventilation ?",
      a: "L’hygiène des réseaux aérauliques conditionne la qualité de l’air ; ce n’est pas un nettoyage de locaux. Quand un nettoyage de conduits est nécessaire, il peut être inclus au contrat ou proposé en complément.",
    },
  ],
  related: [
    { label: "Installation", href: "/services/installation" },
    { label: "VMC double flux", href: "/services/double-flux" },
    { label: "Demander un devis", href: "/contact?type=maintenance" },
  ],
};
