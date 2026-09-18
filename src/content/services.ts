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
      text: "Réseaux neufs, calage sur le cahier des charges, pose, mise en service mesurée — Vaud, depuis Renens.",
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
  audience: {
    professionals:
      "Lot air calé sur le cahier des charges, interlocuteur unique, mise en service mesurée — pour promoteurs, architectes et régies.",
    individuals:
      "Une installation claire, des débits réglés, un chantier rangé. Nous expliquons le périmètre avant de poser.",
  },
  sections: [
    {
      title: "Ce que nous posons",
      answer:
        "Réseaux d’air neufs ou en rénovation : caissons, gaines, bouches d’extraction et d’insufflation, simple ou double flux selon le projet.",
      body: "Le système suit l’usage du bâtiment et le cahier des charges : débits, chemins de gaines, accès pour l’entretien. Nous coordonnons les interfaces avec le second œuvre lorsque le planning le demande. La VMC double flux a sa page dédiée lorsque c’est l’intention principale. Hors périmètre : chauffage, climatisation et plomberie.",
    },
    {
      title: "Comment ça se passe",
      answer:
        "Visite technique, analyse du besoin, offre écrite, pose, mise en service mesurée, puis discussion séparée de la maintenance.",
      body: "Après le relevé, l’offre décrit le périmètre, les hypothèses et le planning prévisionnel — sans délai d’intervention annoncé comme un slogan. Sur le chantier : pose du réseau, raccordements, contrôle des accès maintenance. À la réception : documentation et mesures de débit. La maintenance n’est pas noyée dans l’installation : elle se discute à part, sur la page dédiée.",
    },
    {
      title: "Cadre normatif (référence métier)",
      answer:
        "Les installations de ventilation mécanique s’inscrivent notamment dans le cadre SIA 382/1 (bases et exigences ; édition 2025, qui remplace celle de 2014), SIA 382/5:2021 pour les bâtiments d’habitation (qui remplace la SIA 2023), et SIA 180 pour la protection thermique, l’humidité et le climat intérieur.",
      body: "Nous traitons ces normes comme cadre de projet et de cahier des charges, pas comme une certification affichée hors contexte. Les exigences énergétiques cantonales (LVLEne / MoPEC) s’appliquent au bâtiment selon le dossier — nous citons le texte du projet, sans revendiquer une conformité générique.",
    },
    {
      title: "Livrables",
      answer:
        "Documentation de pose, mesures de débit à la mise en service, chantier rangé, proposition de plan d’entretien.",
      body: "Vous disposez d’une trace écrite des réglages et du périmètre réalisé. Les photographies de chantier seront publiées après le shooting dédié. En attendant, le process et l’adresse de Renens (Rue de Lausanne 49g, 1020) portent la preuve locale. Limite claire : nous ne livrons pas un lot chauffage ni un audit énergétique hors ventilation.",
    },
  ],
  faq: [
    {
      q: "Quelle norme suisse concerne la ventilation des logements ?",
      a: "Le cadre métier cite notamment la SIA 382/1 (ventilation mécanique — bases et exigences ; édition 2025) et, pour l’habitation, la SIA 382/5:2021. L’humidité et le climat intérieur relèvent aussi de la SIA 180. Ces références cadrent le projet ; elles ne constituent pas une certification de l’entreprise hors contexte.",
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
  audience: {
    professionals:
      "Récupération de chaleur et débits calés sur le projet architectural — interlocuteur unique sur le lot air.",
    individuals:
      "Air renouvelé, moins de pertes de chaleur liées au renouvellement d’air, confort au quotidien — sans pourcentage de gain annoncé.",
  },
  sections: [
    {
      title: "Simple flux ou double flux",
      answer:
        "Le simple flux extrait l’air vicié et laisse entrer l’air neuf par des entrées ; le double flux insuffle et extrait, en général avec récupération de chaleur sur l’air extrait.",
      body: "Le choix dépend de l’étanchéité du bâtiment, du confort visé et du cahier des charges. Nous expliquons l’option retenue dans l’offre, sans jargon inutile. Lorsque le double flux n’est pas le bon lot, l’extraction seule se discute via le contact — ce n’est pas une page séparée à ce stade.",
    },
    {
      title: "Efficacité énergétique",
      answer:
        "Un double flux avec récupération de chaleur réduit les pertes liées au renouvellement d’air par rapport à une extraction sans récupération ; le gain dépend de l’installation et du bâtiment, pas d’un pourcentage inventé.",
      body: "En Vaud, les exigences énergétiques du bâtiment s’inscrivent dans le cadre cantonal (LVLEne / MoPEC) applicable au projet. Nous citons le texte du dossier, pas un slogan. Le dimensionnement et la mise en service mesurée conditionnent le résultat autant que le choix du caisson.",
    },
    {
      title: "Pour quel bâtiment",
      answer:
        "Logement étanche, immeuble, petits tertiaires : le dimensionnement suit l’usage et les locaux.",
      body: "Villa, copropriété ou bureaux : les débits, le caisson et les réseaux se calent sur les volumes, les chemins de gaines et l’accès entretien. Lausanne et le canton se traitent depuis l’ancrage de Renens. Hors périmètre : chauffage, clim et plomberie.",
    },
    {
      title: "Pose, mise en service et livrables",
      answer:
        "Réseaux, caisson, équilibrage des débits, documentation des réglages, proposition de plan d’entretien.",
      body: "Processus : relevé ou lecture du projet, offre, pose, mise en service avec mesures, puis discussion séparée de la maintenance. Limite : nous ne promettons ni délai d’arrivée ni rendement chiffré hors mesures réelles du bâtiment.",
    },
    {
      title: "Cadre normatif (référence métier)",
      answer:
        "Pour l’habitation, la SIA 382/5:2021 traite de la ventilation mécanique dans les bâtiments d’habitation (elle remplace la SIA 2023). Les bases et exigences générales relèvent notamment de la SIA 382/1 (édition 2025). L’humidité et le climat intérieur s’inscrivent aussi dans la SIA 180.",
      body: "Ces normes cadrent le projet et le cahier des charges. Nous ne les présentons pas comme une certification de l’entreprise hors contexte de chantier.",
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
      q: "Quelle norme suisse s’applique à la VMC en habitation ?",
      a: "Le cadre métier cite notamment la SIA 382/5:2021 pour la ventilation mécanique dans les bâtiments d’habitation, et la SIA 382/1 pour les bases et exigences. La SIA 180 couvre aussi humidité et climat intérieur. Références de projet, pas certification affichée hors contexte.",
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
  audience: {
    professionals:
      "Diagnostic du réseau d’air, remise en service documentée — pour régies, promoteurs et interlocuteurs de chantier.",
    individuals:
      "Nous identifions la panne et remettons l’air en route après visite — sans délai d’arrivée annoncé.",
  },
  sections: [
    {
      title: "Quand appeler",
      answer:
        "L’air vicié (CO₂, odeurs, humidité), le bruit inhabituel, la perte de débit ou une hygrométrie qui dérive justifient un diagnostic du réseau.",
      body: "Une aération ponctuelle ne remplace pas un renouvellement d’air mécanique adapté ni l’entretien des filtres et des bouches. Nous relevons le réseau avant de préconiser une réparation ou un remplacement. Pas de « urgence 24/7 » ni de délai d’arrivée promis sur cette page.",
    },
    {
      title: "Ce que nous faisons",
      answer:
        "Relevé sur place, identification de la cause, réparation ciblée ou préconisation de remplacement, puis remise en service du réseau d’air.",
      body: "Selon l’état du caisson, des bouches et des gaines, l’intervention reste un dépannage ou bascule vers une rénovation aéraulique. L’offre le dit clairement. Livrables typiques : constat, actions réalisées, observations utiles pour la suite (entretien ou reprise). Limite : hors chauffage, clim et plomberie ; pas de garantie de délai de remise en route avant diagnostic.",
    },
    {
      title: "Renens et alentours",
      answer:
        "BR Tech Sàrl a son siège à Renens (VD), Rue de Lausanne 49g, 1020, et travaille la ventilation en Suisse romande depuis cet ancrage.",
      body: "La preuve locale est l’adresse, pas une galerie de communes. Une page par ville n’est publiée que si le territoire d’intervention est réel. Lausanne et le reste du canton se confirment selon le type de projet.",
    },
    {
      title: "Cadre normatif (référence métier)",
      answer:
        "Le diagnostic et la remise en service s’inscrivent dans le même cadre métier que l’installation : SIA 382/1 (bases et exigences), SIA 382/5:2021 pour l’habitation, SIA 180 pour humidité et climat intérieur.",
      body: "Ces références aident à lire débits, hygiène de réseau et confort — elles ne sont pas présentées comme une certification de l’entreprise hors contexte d’intervention.",
    },
    {
      title: "Après la panne",
      answer:
        "Un contrat d’entretien limite les pannes répétées liées aux filtres, aux débits et à l’hygiène de réseau.",
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
      a: "Un renouvellement d’air insuffisant favorise l’humidité et les moisissures ; une VMC dimensionnée et entretenue évacue la vapeur d’eau, sans remplacer un diagnostic de l’enveloppe. La SIA 180 traite notamment protection thermique, humidité et climat intérieur — cadre métier, pas diagnostic magique.",
    },
  ],
  related: [
    { label: "Installation", href: "/services/installation" },
    { label: "Maintenance", href: "/maintenance" },
    { label: "Demander un devis", href: "/contact?type=depannage" },
  ],
};
