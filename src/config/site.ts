export const site = {
  legalName: "BR Tech Sàrl",
  brandName: "BR Tech",
  signature: "L’air, maîtrisé.",
  baseline: "Spécialistes ventilation · Suisse romande",
  domain: "brtech.ch",
  url: "https://brtech.ch",
  locale: "fr-CH",
  email: "info@brtech.ch",
  phoneDisplay: "+41 79 176 38 19",
  phoneTel: "+41791763819",
  phoneConfirmed: true,
  hours: {
    display: "Du lundi au vendredi, de 7h00 à 17h00",
    compact: "Lun.–Ven. 7h00–17h00",
    openingHours: "Mo-Fr 07:00-17:00",
    days: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
    ] as const,
    opens: "07:00",
    closes: "17:00",
  },
  address: {
    street: "Rue de Lausanne 49g",
    postalCode: "1020",
    city: "Renens",
    region: "VD",
    country: "CH",
    countryName: "Suisse",
  },
  mapsQuery: "Rue de Lausanne 49g, 1020 Renens VD",
} as const;

export function formatAddress() {
  return `${site.address.street}, ${site.address.postalCode} ${site.address.city} ${site.address.region}`;
}

export const cta = {
  primary: { label: "Demander un devis", href: "/contact" },
  secondary: {
    label: "Planifier une visite technique",
    href: "/contact?type=visite",
  },
  call: { label: "Appeler", href: `tel:${site.phoneTel}` },
} as const;

export type NavItem = {
  label: string;
  href: string;
  children?: readonly NavItem[];
};

export const serviceNavLive: readonly NavItem[] = [
  { label: "Installation", href: "/services/installation" },
  { label: "Double flux", href: "/services/double-flux" },
  { label: "Dépannage", href: "/services/depannage" },
];

export const navigationRoutes: readonly NavItem[] = [
  { label: "Services", href: "/services", children: serviceNavLive },
  { label: "Secteurs", href: "/#secteurs" },
  { label: "Réalisations", href: "/#realisations" },
  { label: "Maintenance", href: "/maintenance" },
  { label: "À propos", href: "/#pourquoi" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerGroups = {
  navigation: navigationRoutes,
  services: [
    { label: "Installation", href: "/services/installation" },
    { label: "Double flux", href: "/services/double-flux" },
    { label: "Dépannage", href: "/services/depannage" },
    { label: "Maintenance", href: "/maintenance" },
    { label: "Rénovation", href: "/contact?type=renovation" },
    { label: "Extraction", href: "/contact?type=extraction" },
  ],
  legal: [
    { label: "Mentions légales", href: "/mentions-legales" },
    { label: "Confidentialité", href: "/confidentialite" },
  ],
} as const;

export const projectTypes = [
  { value: "installation", label: "Installation" },
  { value: "renovation", label: "Rénovation" },
  { value: "maintenance", label: "Maintenance" },
  { value: "depannage", label: "Dépannage" },
  { value: "visite", label: "Visite technique" },
  { value: "double-flux", label: "VMC double flux" },
  { value: "extraction", label: "Simple flux / extraction" },
  { value: "optimisation", label: "Optimisation énergétique" },
  { value: "autre", label: "Autre" },
] as const;
