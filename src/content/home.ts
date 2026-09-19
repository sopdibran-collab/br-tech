import { site } from "@/config/site";

export const home = {
  hero: {
    h1: "L’air, maîtrisé.",
    sub: "Spécialistes ventilation · Suisse romande",
  },
  audiences: [
    "Particuliers",
    "Architectes",
    "Régies",
    "Entreprises générales",
    "Promoteurs",
    "Industrie",
  ],
  checklistTitle: "Ce que nous engageons",
  checklist: [
    "Devis clair et détaillé",
    "Intervention planifiée",
    "Cadre SIA applicable au projet",
    "Solutions calées sur le bâtiment",
    "Entretien préventif",
  ],
  why: {
    title: "L’expertise ventilation",
    lead: "Un lot air uniquement — pas de chauffage, ni de climatisation, ni de plomberie. Documenté, calé sur le bâtiment et le planning.",
    items: [
      {
        title: "Installation documentée",
        text: "Pose, mise en service et traces écrites pour la réception.",
      },
      {
        title: "Cadre de projet",
        text: "Interventions inscrites dans les projets SIA et, le cas échéant, les bâtiments Minergie, selon le cahier des charges du projet.",
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
    lead: "Installation neuve ou remplacement, VMC double flux ou simple flux, pose de gaines et bouches, puis entretien dans le temps.",
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
        text: "Entretien préventif et contrat : débits, hygiène, pannes évitées plutôt que subies.",
        href: "/maintenance",
        icon: "filter",
      },
    ],
    allHref: "/services",
    allLabel: "Tous les services",
  },
  method: {
    title: "Du contact à l’entretien",
    lead: "Une affaire se tient dans cet ordre.",
    steps: [
      {
        title: "Contact",
        text: "Vous décrivez le bâtiment et le besoin.",
        icon: "clipboard",
      },
      {
        title: "Visite",
        text: "Relevé sur site, contraintes et besoins.",
        icon: "pin",
      },
      {
        title: "Offre",
        text: "Devis lisible, périmètre et délais.",
        icon: "building",
      },
      {
        title: "Pose",
        text: "Installation soignée, chantier net.",
        icon: "flow",
      },
      {
        title: "Mise en service",
        text: "Réglages, mesures, documentation.",
        icon: "energy",
      },
      {
        title: "Entretien",
        text: "Suivi préventif après réception.",
        icon: "filter",
      },
    ],
    reception:
      "À la réception : mesures de débit, schéma, PV de mise en service, chantier rangé, plan d’entretien.",
  },

  team: {
    title: "Une société récente, une expérience de terrain",
    lead:
      "BR Tech Sàrl est une entreprise jeune. Les deux fondateurs comptent chacun plus de dix ans d’expérience en ventilation. L’équipe réunit six personnes qualifiées, intervenues sur des chantiers de petite et moyenne taille en Suisse romande.",
  },
  faq: {
    title: "Questions fréquentes",
    items: [
      {
        q: "Vous êtes ventiliste ou CVC généraliste ?",
        a: "Ventiliste. Installation, rénovation et entretien de réseaux d’air — pas le chauffage, ni la climatisation, ni la plomberie.",
      },
      {
        q: "Où intervenez-vous ?",
        a: `BR Tech Sàrl a son siège à Renens (VD), ${site.address.street}, ${site.address.postalCode}, et intervient dans les ${site.serviceZone.display}.`,
      },
      {
        q: "Quelle est la différence entre simple flux et double flux ?",
        a: "Le simple flux extrait l’air vicié et laisse entrer l’air neuf par des entrées ; le double flux insuffle et extrait, en général avec récupération de chaleur sur l’air extrait.",
      },
      {
        q: "Proposez-vous l’entretien après installation ?",
        a: "Oui. Après l’installation, nous proposons un entretien préventif et un contrat : débits, hygiène, passages documentés.",
      },
      {
        q: "Pour qui travaillez-vous ?",
        a: "Particuliers, architectes, régies, entreprises générales (EG), promoteurs et industrie. Nous répondons également aux appels d’offres pour le lot ventilation.",
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
