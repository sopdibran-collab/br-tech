import { site } from "@/config/site";
import type { ServicePageContent } from "@/content/types";

export const maintenancePage: ServicePageContent = {
  path: "/maintenance",
  title: "Entretien VMC Suisse romande",
  description: `Maintenance et entretien de VMC dans les ${site.serviceZone.display}, depuis Renens. Contrats, filtres, débits, nettoyage de conduits.`,
  h1: "Maintenance et entretien de VMC",
  lead: `La performance d’une VMC (débits, filtres, hygiène des réseaux) se tient par un suivi. BR Tech Sàrl propose l’entretien et le contrat depuis Renens, dans les ${site.serviceZone.display}.`,
  serviceName: "Maintenance et entretien de VMC",
  contactType: "maintenance",
  includeLausanne: true,
  audience: {
    professionals:
      "Planning d’entretien pour immeubles et tertiaire, compte-rendu simple — un interlocuteur sur le lot air pour régies, promoteurs et entreprises générales.",
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
        "Il n’existe pas une fréquence légale unique : le rythme est fixé par le fabricant et le contrat d’entretien (souvent au moins un passage filtres par an en logement).",
      body: "Un usage intensif, un environnement poussiéreux ou un cahier des charges plus exigeant peuvent justifier des passages plus rapprochés. Nous respectons les consignes du fabricant et les fixons dans le contrat.",
    },
    {
      title: "Ce qui est contrôlé",
      answer:
        "Filtres, bouches, débits ; l’hygiène des réseaux aérauliques conditionne la qualité de l’air, ce n’est pas un nettoyage de locaux.",
      body: "Selon le contrat : contrôle visuel, remplacement ou nettoyage des filtres, relevé de débits lorsque prévu, observations écrites. Le nettoyage de conduits, quand il est nécessaire, peut être inclus au contrat ou proposé en complément. Nous ne traitons pas le chauffage, la climatisation ni la plomberie.",
    },
    {
      title: "Processus et livrables",
      answer:
        "Planification du passage, intervention sur site, compte-rendu simple, suite éventuelle (pièces, nettoyage de conduits, reprise).",
      body: "Pour un parc ou un immeuble, les passages et les observations restent traçables. Pour un logement, le compte-rendu reste lisible sans jargon. En cas de panne, le dépannage a sa propre page.",
    },
    {
      title: "Cadre normatif (référence métier)",
      answer:
        "Le suivi d’une installation d’habitation s’inscrit notamment dans le cadre SIA 382/5:2021 et des bases SIA 382/1 ; l’humidité et le climat intérieur relèvent aussi de la SIA 180.",
      body: "Ces normes aident à lire débits, filtres et hygiène de réseau dans le suivi. Les exigences énergétiques cantonales concernent le bâtiment ; elles ne se substituent pas au contrat d’entretien.",
    },
  ],
  faq: [
    {
      q: "À quelle fréquence entretenir une VMC en Suisse ?",
      a: "Il n’existe pas une fréquence légale unique : le rythme est fixé par le fabricant et le contrat d’entretien (souvent au moins un passage filtres par an en logement).",
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
