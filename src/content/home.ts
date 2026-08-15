export const home = {
  hero: {
    h1: "L’air, maîtrisé.",
    sub: "Spécialistes ventilation · Suisse romande",
  },
  audiences: ["Architectes", "Régies", "PME", "Industries", "Collectivités"],
  checklistTitle: "Ce que nous engageons",
  checklist: [
    "Devis clair et détaillé",
    "Intervention planifiée",
    "Respect des normes SIA applicables",
    "Solutions calées sur le bâtiment",
    "Maintenance préventive",
  ],
  why: {
    title: "L’expertise ventilation",
    lead: "Pas un catalogue CVC. Un lot air, documenté, calé sur le bâtiment et le planning.",
    items: [
      {
        title: "Installation documentée",
        text: "Pose, mise en service et traces écrites pour la réception.",
      },
      {
        title: "Cadre SIA du projet",
        text: "Interventions inscrites dans les normes suisses applicables au cahier des charges.",
      },
      {
        title: "Chantier planifié",
        text: "Délais annoncés, coordination avec les autres lots, chantier tenu propre.",
      },
      {
        title: "Adapté au bâtiment",
        text: "Dimensionnement selon l’usage — villa, immeuble, tertiaire ou industrie.",
      },
    ],
  },
  expertise: {
    title: "Installer, ventiler, entretenir",
    lead: "Conception et pose de réseaux aérauliques, double flux ou extraction, puis suivi dans le temps.",
    items: [
      {
        title: "Installation",
        text: "Réseaux neufs, calage sur le projet et mise en service mesurée.",
        href: "/services/installation",
        icon: "flow",
      },
      {
        title: "Double flux",
        text: "VMC avec récupération de chaleur, pour le confort et les débits.",
        href: "/services/double-flux",
        icon: "doubleFlux",
      },
      {
        title: "Maintenance",
        text: "Entretien préventif : débits, hygiène, pannes évitées plutôt que subies.",
        href: "/maintenance",
        icon: "filter",
      },
    ],
    allHref: "/services",
    allLabel: "Tous les services",
  },
  method: {
    title: "De la visite à l’entretien",
    lead: "Une affaire se tient dans cet ordre.",
    steps: [
      { title: "Visite technique", text: "Relevé sur site, contraintes et besoins." },
      { title: "Analyse", text: "Dimensionnement et options expliquées." },
      { title: "Offre", text: "Devis lisible, périmètre et délais." },
      { title: "Installation", text: "Pose soignée, chantier net." },
      { title: "Mise en service", text: "Réglages, mesures, documentation." },
      { title: "Maintenance", text: "Suivi préventif après réception." },
    ],
    reception:
      "À la réception : documentation, mesures de débit, chantier rangé, plan d’entretien.",
  },
  faq: {
    title: "Questions fréquentes",
    items: [
      {
        q: "Vous êtes ventiliste ou CVC généraliste ?",
        a: "Ventiliste. Installation, rénovation et maintenance de réseaux d’air, à Renens et en Suisse romande — pas le chauffage ni la plomberie.",
      },
      {
        q: "Où intervenez-vous ?",
        a: "BR Tech Sàrl a son siège à Renens (VD), Rue de Lausanne 49g, 1020, et travaille la ventilation en Suisse romande depuis cet ancrage. La zone se confirme selon le type de projet.",
      },
      {
        q: "Quelle est la différence entre simple flux et double flux ?",
        a: "Le simple flux extrait l’air vicié et laisse entrer l’air neuf par des entrées ; le double flux insuffle et extrait, en général avec récupération de chaleur sur l’air extrait.",
      },
      {
        q: "Proposez-vous la maintenance après installation ?",
        a: "La maintenance préventive est proposée après installation : débits, hygiène, passages documentés.",
      },
      {
        q: "Travaillez-vous avec les architectes et entreprises générales ?",
        a: "Nous collaborons avec architectes, régies, entreprises générales et maîtres d’ouvrage — coordination de chantier et dossier pour la réception.",
      },
      {
        q: "Comment obtenir un devis ?",
        a: "Le devis suit la compréhension du besoin, et une visite technique si elle est nécessaire. Formulaire, téléphone ou e-mail.",
      },
    ],
  },
  band: {
    title: "Un bâtiment à ventiler ?",
    text: "Décrivez le bâtiment, le besoin et le délai — nous revenons vers vous.",
  },
} as const;
