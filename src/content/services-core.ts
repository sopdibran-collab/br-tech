import { site } from "@/config/site";
import type { ServicePageContent } from "@/content/types";

export const servicesHub = {
  title: "Services de ventilation",
  description:
    "Installation, VMC double flux et dépannage de ventilation à Renens et en Suisse romande. BR Tech Sàrl : entretien préventif et contrats de maintenance.",
  h1: "Installation, double flux et dépannage",
  lead: `BR Tech Sàrl conçoit, pose et dépanne les réseaux de ventilation depuis Renens, dans les ${site.serviceZone.display}. Installation neuve, VMC double flux et dépannage. L’entretien préventif est présenté sur la page Maintenance.`,
  live: [
    {
      title: "Installation",
      href: "/services/installation",
      text: "Réseaux neufs, calage sur le cahier des charges, pose de gaines et bouches, mise en service mesurée — depuis Renens.",
      icon: "flow",
    },
    {
      title: "VMC double flux",
      href: "/services/double-flux",
      text: "Insufflation et extraction avec récupération de chaleur, dimensionnées selon le bâtiment.",
      icon: "doubleFlux",
    },
    {
      title: "Dépannage",
      href: "/services/depannage",
      text: "Diagnostic et remise en service d’un réseau d’air. Le délai d’intervention est fixé après le diagnostic.",
      icon: "wrench",
    },
  ],
  later: [
    {
      title: "Remplacement / rénovation",
      href: "/contact?type=renovation",
      text: "Reprise ou remplacement d’une installation existante — décrivez le bâtiment.",
      icon: "building",
    },
    {
      title: "Simple flux / extraction",
      href: "/contact?type=extraction",
      text: "Extraction d’air vicié lorsque le double flux n’est pas adapté au projet.",
      icon: "flow",
    },
    {
      title: "Étude / devis / planification",
      href: "/contact?type=etude",
      text: "Analyse du besoin, élaboration de plans et devis — avant la pose.",
      icon: "clipboard",
    },
    {
      title: "Nettoyage de conduits",
      href: "/contact?type=nettoyage",
      text: "Hygiène des réseaux aérauliques, intégrée au devis ou au contrat d’entretien selon le besoin.",
      icon: "filter",
    },
    {
      title: "Réparation conduits / bouches",
      href: "/contact?type=reparation",
      text: "Remise en état ciblée des gaines et des bouches après diagnostic.",
      icon: "wrench",
    },
  ],
  maintenance: {
    title: "Maintenance",
    href: "/maintenance",
    text: "Entretien préventif et contrat : filtres, débits et suivi dans le temps.",
    icon: "filter",
  },
} as const;

export const installationPage: ServicePageContent = {
  path: "/services/installation",
  title: "Installateur ventilation Suisse romande",
  description:
    "Installation de ventilation à Renens et en Suisse romande. BR Tech Sàrl : relevé, pose, mise en service mesurée. Devis après visite technique.",
  h1: "Installation de ventilation à Renens et en Suisse romande",
  lead: `BR Tech Sàrl installe des systèmes de ventilation depuis Renens, dans les ${site.serviceZone.display} : relevé, calage sur le cahier des charges, pose de gaines et bouches, mise en service mesurée. Particuliers, immeubles, tertiaire et industrie. Le devis suit la visite technique.`,
  serviceName: "Installation de ventilation",
  contactType: "installation",
  includeLausanne: true,
  audience: {
    professionals:
      "Installation calée sur le cahier des charges, interlocuteur unique, mise en service mesurée — pour architectes, régies, entreprises générales, promoteurs et industrie.",
    individuals:
      "Une installation claire, des débits réglés, un chantier rangé. Nous expliquons le périmètre avant de poser.",
  },
  sections: [
    {
      title: "Ce que nous posons",
      answer:
        "Réseaux d’air neufs ou en rénovation : caissons, gaines, bouches d’extraction et d’insufflation, simple ou double flux selon le projet.",
      body: "Le système suit l’usage du bâtiment et le cahier des charges : débits, chemins de gaines, accès pour l’entretien. Nous coordonnons les interfaces avec le second œuvre lorsque le planning le demande. La VMC double flux est décrite sur sa page.",
    },
    {
      title: "Comment ça se passe",
      answer:
        "Contact, visite technique, offre écrite, pose, mise en service mesurée, puis proposition d’entretien.",
      body: "Après le relevé, l’offre décrit le périmètre, les hypothèses et le planning prévisionnel. Le délai d’intervention est fixé une fois le besoin compris. Sur le chantier : pose du réseau, raccordements, contrôle des accès maintenance. À la réception : mesures de débit, schéma et PV de mise en service. Un plan d’entretien peut ensuite être proposé — voir la page maintenance.",
    },
    {
      title: "Normes appliquées",
      answer:
        "Ventilation mécanique : SIA 382/1, édition 2025 (elle remplace l’édition 2014). Habitation : SIA 382/5:2021 (elle remplace la SIA 2023). Protection thermique, humidité et climat intérieur : SIA 180.",
      body: "Le projet et le cahier des charges s’y réfèrent. Lorsque le dossier le prévoit, l’intervention suit aussi un projet SIA ou un bâtiment Minergie. Les exigences énergétiques cantonales sont celles du dossier.",
    },
    {
      title: "Livrables",
      answer:
        "Mesures de débit, schéma, PV de mise en service, chantier rangé, proposition de plan d’entretien.",
      body: `Vous disposez d’une trace écrite des réglages et du périmètre réalisé. Notre siège à Renens (${formatAddressInline()}) ancre l’intervention dans la zone.`,
    },
  ],
  faq: [
    {
      q: "Quelle norme suisse concerne la ventilation des logements ?",
      a: "Ventilation mécanique : SIA 382/1 (bases et exigences, édition 2025). Habitation : SIA 382/5:2021. Humidité et climat intérieur : SIA 180. Le projet et le cahier des charges s’y réfèrent.",
    },
    {
      q: "Où intervenez-vous pour une installation ?",
      a: `Depuis Renens, dans les ${site.serviceZone.display}.`,
    },
    {
      q: "Une régie ou un immeuble peut-il demander un devis ventilation ?",
      a: "Oui. Le devis suit la compréhension du besoin, et une visite technique si elle est nécessaire. Étude et élaboration de plans sur demande.",
    },
  ],
  related: [
    { label: "Tous les services", href: "/services" },
    { label: "VMC double flux", href: "/services/double-flux" },
    { label: "Dépannage", href: "/services/depannage" },
    { label: "Maintenance", href: "/maintenance" },
  ],
};

function formatAddressInline() {
  return `${site.address.street}, ${site.address.postalCode}`;
}

export const doubleFluxPage: ServicePageContent = {
  path: "/services/double-flux",
  title: "VMC double flux Suisse romande",
  description:
    "Installation de VMC double flux à Renens et en Suisse romande. BR Tech Sàrl : insufflation, extraction et récupération de chaleur selon le bâtiment.",
  h1: "VMC double flux en Suisse romande",
  lead: `Une VMC double flux insuffle et extrait l’air, en général avec récupération de chaleur. BR Tech Sàrl l’installe depuis Renens, dans les ${site.serviceZone.display}, pour le logement, l’immeuble et le tertiaire. Le gain énergétique dépend du bâtiment et de la pose.`,
  serviceName: "Installation de VMC double flux",
  contactType: "double-flux",
  includeLausanne: true,
  audience: {
    professionals:
      "Récupération de chaleur et débits calés sur le projet architectural — interlocuteur unique pour architectes, régies, EG et promoteurs.",
    individuals:
      "Air renouvelé, moins de pertes de chaleur liées au renouvellement d’air, confort au quotidien — le gain dépend du bâtiment et de la pose.",
  },
  sections: [
    {
      title: "Simple flux ou double flux",
      answer:
        "Le simple flux extrait l’air vicié et laisse entrer l’air neuf par des entrées ; le double flux insuffle et extrait, en général avec récupération de chaleur sur l’air extrait.",
      body: "Le choix dépend de l’étanchéité du bâtiment, du confort visé et du cahier des charges. Nous expliquons l’option retenue dans l’offre. Lorsque le double flux n’est pas adapté, une extraction seule peut être étudiée — décrivez votre besoin via le contact.",
    },
    {
      title: "Efficacité énergétique",
      answer:
        "Un double flux avec récupération de chaleur réduit les pertes liées au renouvellement d’air par rapport à une extraction sans récupération ; le gain dépend de l’installation et du bâtiment.",
      body: "Les exigences énergétiques du bâtiment s’inscrivent dans le cadre cantonal applicable au projet. Nous nous référons au texte du dossier. Le dimensionnement et la mise en service mesurée conditionnent le résultat autant que le choix du caisson. Sur les bâtiments Minergie, le lot ventilation suit le cahier des charges du projet.",
    },
    {
      title: "Pour quel bâtiment",
      answer:
        "Logement étanche, immeuble, petits tertiaires : le dimensionnement suit l’usage et les locaux.",
      body: `Villa, copropriété ou bureaux : les débits, le caisson et les réseaux se calent sur les volumes, les chemins de gaines et l’accès entretien. Zone d’intervention : ${site.serviceZone.display}, depuis Renens.`,
    },
    {
      title: "Pose, mise en service et livrables",
      answer:
        "Réseaux, caisson, équilibrage des débits, mesures de débit, schéma, PV de mise en service, proposition de plan d’entretien.",
      body: "Contact, visite ou lecture du projet, offre, pose, mise en service avec mesures, puis proposition d’entretien. Le planning et le rendement attendu s’appuient sur le relevé et les mesures réelles du bâtiment.",
    },
    {
      title: "Normes appliquées",
      answer:
        "Habitation : SIA 382/5:2021 (elle remplace la SIA 2023). Bases et exigences : SIA 382/1, édition 2025. Humidité et climat intérieur : SIA 180.",
      body: "Le projet et le cahier des charges s’y réfèrent.",
    },
    {
      title: "Entretien",
      answer:
        "Filtres et débits se maintiennent par un suivi régulier.",
      body: "Sans entretien, le double flux perd débit et hygiène de réseau. Voir la page maintenance.",
    },
  ],
  faq: [
    {
      q: "Quelle est la différence entre VMC simple flux et double flux ?",
      a: "Le simple flux extrait l’air vicié et laisse entrer l’air neuf par des entrées ; le double flux insuffle et extrait, en général avec récupération de chaleur sur l’air extrait.",
    },
    {
      q: "La VMC double flux améliore-t-elle l’efficacité énergétique ?",
      a: "Un double flux avec récupération de chaleur réduit les pertes liées au renouvellement d’air par rapport à une extraction sans récupération ; le gain dépend de l’installation et du bâtiment.",
    },
    {
      q: "Quelle norme suisse s’applique à la VMC en habitation ?",
      a: "Habitation : SIA 382/5:2021 pour la ventilation mécanique. Bases et exigences : SIA 382/1. Humidité et climat intérieur : SIA 180.",
    },
    {
      q: "À quelle fréquence entretenir une VMC en Suisse ?",
      a: "Il n’existe pas une fréquence légale unique : le rythme est fixé par le fabricant et le contrat d’entretien.",
    },
  ],
  related: [
    { label: "Installation", href: "/services/installation" },
    { label: "Maintenance", href: "/maintenance" },
    { label: "Demander un devis", href: "/contact?type=double-flux" },
  ],
};
