import { site } from "@/config/site";

const hours = `${site.hours.display.charAt(0).toLowerCase()}${site.hours.display.slice(1)}`;

export const profile = {
  process: {
    title: "Déroulement",
    intro: "L’intervention de ventilation suit ces six étapes.",
    compact:
      "L’intervention suit six étapes : contact, visite, offre, pose, mise en service, entretien. Le devis suit la visite technique lorsque le bâtiment doit être vu.",
    services:
      "Ce déroulement couvre l’installation, la VMC double flux, le simple flux et l’extraction, la rénovation d’un réseau d’air, le dépannage, l’entretien et le contrat, la pose de gaines et de bouches, le nettoyage de conduits, la réparation de conduits et de bouches, ainsi que l’étude et les plans. Le planning est annoncé, et les interfaces avec les autres lots sont coordonnées. L’entretien porte ensuite sur les filtres, les débits et l’hygiène du réseau, selon le contrat.",
    team:
      "Six personnes qualifiées prennent en charge les questions techniques de vos chantiers de petite et de moyenne taille. Elles exercent ce métier depuis plus de dix ans.",
  },
  clients: {
    title: "Interlocuteurs",
    paragraphs: [
      "Les chantiers de ventilation sont menés pour des particuliers, des architectes, des régies, des entreprises générales, des promoteurs et l’industrie. Le lot est traité en construction neuve comme en rénovation. Les appels d’offres pour le lot ventilation suivent le même déroulement : compréhension du besoin, visite technique si elle est nécessaire, puis offre écrite.",
      "Pour un particulier, il s’agit en général d’une villa ou d’une PPE : installation, remplacement ou entretien du logement. Les demandes des architectes, des régies, des entreprises générales et des promoteurs portent sur des immeubles et des bâtiments tertiaires, avec un calage sur les plans et le cahier des charges. Pour l’industrie, le dimensionnement suit l’usage du bâtiment. Dans chaque cas, l’offre décrit le périmètre avant la pose.",
    ],
  },
  frameworks: {
    title: "Cadre du projet",
    paragraphs: [
      "Le lot ventilation se cale sur le cahier des charges du projet. La ventilation mécanique s’y réfère par la SIA 382/1, édition 2025. L’habitation s’y réfère par la SIA 382/5:2021. L’humidité et le climat intérieur s’y réfèrent par la SIA 180.",
      "Lorsque le dossier le prévoit, l’intervention suit un projet SIA ou un bâtiment Minergie. Les exigences énergétiques cantonales sont celles du dossier. Ce cadre est celui du bâtiment concerné.",
    ],
  },
  area: {
    title: "Zone d’intervention",
    paragraphs: [
      `Les interventions couvrent les ${site.serviceZone.display}. Elles concernent les logements (villas, PPE), les immeubles, le tertiaire et l’industrie, pour une installation neuve, une rénovation de réseau d’air ou une extraction.`,
      `Les demandes sont reçues ${hours}. Le même périmètre de ventilation est proposé dans ces cinq cantons : installation, double flux, dépannage et entretien.`,
    ],
  },
} as const;
