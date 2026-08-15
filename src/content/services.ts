import type { ServicePageContent } from "@/content/types";

export const servicesHub = {
  title: "Services de ventilation",
  description:
    "Installation, VMC double flux et dépannage de ventilation à Renens et en Suisse romande. Maintenance sur une page séparée.",
  h1: "Installation, double flux et dépannage",
  lead: "BR Tech Sàrl conçoit, pose et dépanne les réseaux de ventilation en Suisse romande, depuis Renens. Trois portes d’entrée : installation neuve, VMC double flux, dépannage. La maintenance préventive a sa propre page. Pas de chauffage ni de plomberie.",
  live: [
    {
      title: "Installation",
      href: "/services/installation",
      text: "Réseaux neufs, calage sur le cahier des charges, mise en service mesurée — Vaud, depuis Renens.",
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
      text: "Diagnostic et remise en service d’un réseau d’air, sans promesse de délai.",
      icon: "wrench",
    },
  ],
  later: [
    {
      title: "Rénovation aéraulique",
      href: "/contact?type=renovation",
      text: "Remplacement ou reprise d’une installation existante — décrivez le bâtiment.",
      icon: "building",
    },
    {
      title: "Simple flux / extraction",
      href: "/contact?type=extraction",
      text: "Extraction d’air vicié lorsque le double flux n’est pas le bon lot.",
      icon: "flow",
    },
    {
      title: "Optimisation énergétique",
      href: "/contact?type=optimisation",
      text: "Réglages, débits et récupération de chaleur sur une installation en place.",
      icon: "energy",
    },
  ],
  maintenance: {
    title: "Maintenance",
    href: "/maintenance",
    text: "Entretien préventif, filtres, débits — offre distincte de l’installation.",
    icon: "filter",
  },
} as const;

export const installationPage: ServicePageContent = {
  path: "/services/installation",
  title: "Installateur ventilation Vaud",
  description:
    "BR Tech Sàrl installe la ventilation à Renens et en Vaud : relevé, pose, mise en service mesurée. Devis après visite technique.",
  h1: "Installation de ventilation à Renens et en Vaud",
  lead: "BR Tech Sàrl installe des systèmes de ventilation à Renens et dans le canton de Vaud : relevé, calage sur le cahier des charges, pose, mise en service mesurée. Résidentiel, immeubles, tertiaire. Le devis suit la visite technique. Offre limitée à l’air — pas le CVC généraliste.",
  serviceName: "Installation de ventilation",
  contactType: "installation",
  includeLausanne: true,
  illustration: "airflow",
  sections: [
    {
      title: "Pour qui",
      answer:
        "Architectes, régies, entreprises générales et maîtres d’ouvrage qui ont un lot air à poser sans le diluer dans le chauffage.",
      body: "Nous intervenons sur le résidentiel, les immeubles et le tertiaire en Suisse romande, depuis le siège de Renens. Le périmètre se confirme selon le projet — pas une page par commune.",
    },
    {
      title: "Ce que nous posons",
      answer:
        "Réseaux neufs, caissons, bouches, simple ou double flux selon le projet.",
      body: "Le système suit l’usage du bâtiment et le cahier des charges : débits, chemins de gaines, accès maintenance. La VMC double flux a sa page dédiée lorsque c’est l’intention principale.",
    },
    {
      title: "Comment ça se passe",
      answer:
        "Visite technique, analyse, offre, installation, mise en service, puis maintenance si elle est retenue.",
      body: "L’offre décrit le périmètre et les délais. À la réception : documentation et mesures de débit. La maintenance n’est pas noyée dans l’installation : elle se discute à part.",
    },
    {
      title: "Normes",
      answer:
        "Les installations de ventilation des bâtiments sont traitées notamment par la SIA 382/1 ; l’humidité et le climat intérieur relèvent aussi de la SIA 180.",
      body: "Nous inscrivons le travail dans les exigences du cahier des charges et du cadre suisse applicable. Nous n’annonçons pas une « conformité garantie » hors contexte de projet.",
    },
    {
      title: "Livrables",
      answer:
        "Documentation, mesures de débit, chantier rangé, plan d’entretien proposé.",
      body: "Les photographies de chantier seront publiées après le shooting. En attendant, le process et l’adresse de Renens portent la preuve locale.",
    },
  ],
  faq: [
    {
      q: "Quelle norme suisse concerne la ventilation des logements ?",
      a: "Les installations de ventilation des bâtiments sont traitées notamment par la SIA 382/1 (ventilation et climatisation des bâtiments) ; l’humidité et le climat intérieur relèvent aussi de la SIA 180.",
    },
    {
      q: "BR Tech fait-elle aussi chauffage ou plomberie ?",
      a: "Non : l’offre est la ventilation et la maintenance associée, pas le CVC généraliste.",
    },
    {
      q: "Faut-il une page par commune vaudoise ?",
      a: "Non : une page zone seulement si le territoire d’intervention est réel ; le canton de Vaud se porte sur l’accueil et les services.",
    },
    {
      q: "Une régie ou un immeuble peut-il demander un devis ventilation ?",
      a: "Oui. Le devis suit la compréhension du besoin, et une visite technique si elle est nécessaire.",
    },
  ],
  related: [
    { label: "Tous les services", href: "/services" },
    { label: "VMC double flux", href: "/services/double-flux" },
    { label: "Dépannage", href: "/services/depannage" },
    { label: "Maintenance", href: "/maintenance" },
  ],
};

export const doubleFluxPage: ServicePageContent = {
  path: "/services/double-flux",
  title: "VMC double flux Vaud",
  description:
    "Installation de VMC double flux en Vaud et à Lausanne, depuis Renens. Récupération de chaleur, sans pourcentage inventé.",
  h1: "VMC double flux en Vaud et à Lausanne",
  lead: "Une VMC double flux insuffle et extrait l’air, en général avec récupération de chaleur. BR Tech Sàrl l’installe en Suisse romande depuis Renens, pour le logement, l’immeuble et le tertiaire. Le gain énergétique dépend du bâtiment et de la pose — pas d’un pourcentage annoncé.",
  serviceName: "Installation de VMC double flux",
  contactType: "double-flux",
  includeLausanne: true,
  illustration: "double-flux",
  sections: [
    {
      title: "Simple flux ou double flux",
      answer:
        "Le simple flux extrait l’air vicié et laisse entrer l’air neuf par des entrées ; le double flux insuffle et extrait, en général avec récupération de chaleur sur l’air extrait.",
      body: "Le choix dépend de l’étanchéité du bâtiment, du confort visé et du cahier des charges. Nous expliquons l’option retenue dans l’offre, sans jargon inutile.",
    },
    {
      title: "Efficacité énergétique",
      answer:
        "Un double flux avec récupération de chaleur réduit les pertes liées au renouvellement d’air par rapport à une extraction sans récupération ; le gain dépend de l’installation et du bâtiment, pas d’un pourcentage inventé.",
      body: "En Vaud, les exigences énergétiques du bâtiment s’inscrivent dans le cadre cantonal (LVLEne / MoPEC) applicable au projet. Nous citons le texte du dossier, pas un slogan.",
    },
    {
      title: "Pour quel bâtiment",
      answer:
        "Logement étanche, immeuble, bureaux : le dimensionnement suit l’usage.",
      body: "Villa, copropriété ou tertiaire : les débits, le caisson et les réseaux se calent sur les locaux et l’accès entretien. Lausanne et le canton se traitent depuis l’ancrage de Renens.",
    },
    {
      title: "Pose et mise en service",
      answer:
        "Réseaux, caisson, équilibrage des débits, traces écrites.",
      body: "La mise en service documente les réglages. Un plan d’entretien est proposé pour garder filtres et débits dans le temps.",
    },
    {
      title: "Entretien",
      answer:
        "Filtres et débits se maintiennent par un suivi — la maintenance a sa propre page.",
      body: "Sans entretien, le double flux perd débit et hygiène de réseau. Voir l’offre maintenance, distincte de l’installation.",
    },
  ],
  faq: [
    {
      q: "Quelle est la différence entre VMC simple flux et double flux ?",
      a: "Le simple flux extrait l’air vicié et laisse entrer l’air neuf par des entrées ; le double flux insuffle et extrait, en général avec récupération de chaleur sur l’air extrait.",
    },
    {
      q: "La VMC double flux améliore-t-elle l’efficacité énergétique ?",
      a: "Un double flux avec récupération de chaleur réduit les pertes liées au renouvellement d’air par rapport à une extraction sans récupération ; le gain dépend de l’installation et du bâtiment, pas d’un pourcentage inventé.",
    },
    {
      q: "À quelle fréquence entretenir une VMC en Suisse ?",
      a: "Il n’existe pas une fréquence légale unique : le rythme est fixé par le fabricant et le contrat d’entretien (souvent au moins un passage filtres par an en logement).",
    },
  ],
  related: [
    { label: "Installation", href: "/services/installation" },
    { label: "Maintenance", href: "/maintenance" },
    { label: "Demander un devis", href: "/contact?type=double-flux" },
  ],
};

export const depannagePage: ServicePageContent = {
  path: "/services/depannage",
  title: "Dépannage ventilation Renens",
  description:
    "Dépannage de ventilation à Renens : diagnostic et remise en service du réseau d’air, sans promesse de délai. BR Tech Sàrl.",
  h1: "Dépannage de ventilation à Renens",
  lead: "BR Tech Sàrl intervient sur les pannes de ventilation depuis son siège à Renens (Rue de Lausanne 49g). Diagnostic, remise en service du réseau d’air, sans promesse de délai. Lausanne et le canton se confirment selon le projet.",
  serviceName: "Dépannage de ventilation",
  contactType: "depannage",
  includeLausanne: true,
  illustration: "depannage",
  sections: [
    {
      title: "Quand appeler",
      answer:
        "L’air vicié (CO₂, odeurs, humidité) se traite par un renouvellement d’air mécanique adapté et un entretien (filtres, bouches), pas seulement par une aération ponctuelle.",
      body: "Bruit, perte de débit, hygrométrie qui dérive : nous relevons le réseau avant de préconiser une réparation ou un remplacement. Pas de délai d’arrivée annoncé.",
    },
    {
      title: "Ce que nous faisons",
      answer:
        "Relevé, identification, réparation ou préconisation de remplacement.",
      body: "Selon l’état du caisson, des bouches et des gaines, l’intervention reste un dépannage ou bascule vers une rénovation. L’offre le dit clairement.",
    },
    {
      title: "Renens et alentours",
      answer:
        "BR Tech Sàrl a son siège à Renens (VD), Rue de Lausanne 49g, 1020, et travaille la ventilation en Suisse romande depuis cet ancrage.",
      body: "La preuve locale est l’adresse, pas une galerie de communes. Une page par ville n’est publiée que si le territoire d’intervention est réel.",
    },
    {
      title: "Après la panne",
      answer:
        "Un contrat d’entretien limite les pannes répétées sur filtres, débits et hygiène de réseau.",
      body: "La maintenance est une offre séparée. Elle se discute après le diagnostic, sans l’imposer dans le dépannage.",
    },
  ],
  faq: [
    {
      q: "Air vicié : que faire avec une VMC ?",
      a: "L’air vicié (CO₂, odeurs, humidité) se traite par un renouvellement d’air mécanique adapté et un entretien (filtres, bouches), pas seulement par une aération ponctuelle.",
    },
    {
      q: "Qui intervient à Renens ?",
      a: "BR Tech Sàrl a son siège à Renens (VD), Rue de Lausanne 49g, 1020, et travaille la ventilation en Suisse romande depuis cet ancrage.",
    },
    {
      q: "L’humidité dans un appartement vient-elle d’un défaut de ventilation ?",
      a: "Un renouvellement d’air insuffisant favorise l’humidité et les moisissures ; une VMC dimensionnée et entretenue évacue la vapeur d’eau, sans remplacer un diagnostic de l’enveloppe.",
    },
  ],
  related: [
    { label: "Installation", href: "/services/installation" },
    { label: "Maintenance", href: "/maintenance" },
    { label: "Demander un devis", href: "/contact?type=depannage" },
  ],
};
