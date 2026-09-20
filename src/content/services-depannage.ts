import { site } from "@/config/site";
import type { ServicePageContent } from "@/content/types";

export const depannagePage: ServicePageContent = {
  path: "/services/depannage",
  title: "Dépannage ventilation Renens",
  description:
    "Dépannage de ventilation à Renens : diagnostic et remise en service du réseau d’air. BR Tech Sàrl.",
  h1: "Dépannage de ventilation à Renens",
  lead: `BR Tech Sàrl intervient sur les pannes de ventilation depuis son siège à Renens (${site.address.street}). Diagnostic, réparation de conduits et bouches, remise en service du réseau d’air. Le délai d’intervention est fixé après le diagnostic. Zone : ${site.serviceZone.display}.`,
  serviceName: "Dépannage de ventilation",
  contactType: "depannage",
  includeLausanne: true,
  audience: {
    professionals:
      "Diagnostic du réseau d’air, remise en service documentée — pour régies, promoteurs, entreprises générales et interlocuteurs de chantier.",
    individuals:
      "Nous identifions la panne et remettons l’air en route après visite. Le délai d’intervention est fixé après le diagnostic.",
  },
  sections: [
    {
      title: "Quand appeler",
      answer:
        "L’air vicié (CO₂, odeurs, humidité), le bruit inhabituel, la perte de débit ou une hygrométrie qui dérive justifient un diagnostic du réseau.",
      body: "Une aération ponctuelle ne remplace pas un renouvellement d’air mécanique adapté ni l’entretien des filtres et des bouches. Nous relevons le réseau avant de préconiser une réparation ou un remplacement. Le délai d’intervention est fixé une fois le besoin compris.",
    },
    {
      title: "Ce que nous faisons",
      answer:
        "Relevé sur place, identification de la cause, réparation ciblée des conduits ou bouches, ou préconisation de remplacement, puis remise en service du réseau d’air.",
      body: "Selon l’état du caisson, des bouches et des gaines, l’intervention reste un dépannage ou bascule vers une rénovation aéraulique. L’offre le dit clairement. Livrables typiques : constat, actions réalisées, observations utiles pour la suite (entretien ou reprise). Nous ne traitons pas le chauffage, la climatisation ni la plomberie.",
    },
    {
      title: "Renens et zone d’intervention",
      answer: `BR Tech Sàrl a son siège à Renens (VD), ${site.address.street}, ${site.address.postalCode}, et intervient dans les ${site.serviceZone.display}.`,
      body: `Siège à Renens (${site.address.street}, ${site.address.postalCode}). Zone d’intervention : ${site.serviceZone.display}.`,
    },
    {
      title: "Cadre normatif (référence métier)",
      answer:
        "Le diagnostic et la remise en service s’inscrivent dans le même cadre métier que l’installation : SIA 382/1 (bases et exigences), SIA 382/5:2021 pour l’habitation, SIA 180 pour humidité et climat intérieur.",
      body: "Ces références aident à lire débits, hygiène de réseau et confort lors du diagnostic et de la remise en service.",
    },
    {
      title: "Après la panne",
      answer:
        "Un contrat d’entretien limite les pannes répétées liées aux filtres, aux débits et à l’hygiène de réseau.",
      body: "Après le dépannage, un entretien régulier peut limiter les pannes liées aux filtres et aux débits. Voir l’offre maintenance.",
    },
  ],
  faq: [
    {
      q: "Air vicié : que faire avec une VMC ?",
      a: "L’air vicié (CO₂, odeurs, humidité) se traite par un renouvellement d’air mécanique adapté et un entretien (filtres, bouches), pas seulement par une aération ponctuelle.",
    },
    {
      q: "Qui intervient à Renens ?",
      a: `BR Tech Sàrl a son siège à Renens (VD), ${site.address.street}, ${site.address.postalCode}, et intervient dans les ${site.serviceZone.display}.`,
    },
    {
      q: "L’humidité dans un appartement vient-elle d’un défaut de ventilation ?",
      a: "Un renouvellement d’air insuffisant favorise l’humidité et les moisissures ; une VMC dimensionnée et entretenue évacue la vapeur d’eau, sans remplacer un diagnostic de l’enveloppe. La SIA 180 traite notamment protection thermique, humidité et climat intérieur.",
    },
  ],
  related: [
    { label: "Appeler", href: `tel:${site.phoneTel}` },
    { label: "Maintenance", href: "/maintenance" },
    { label: "Demander un devis", href: "/contact?type=depannage" },
  ],
};
