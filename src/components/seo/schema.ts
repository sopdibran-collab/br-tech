import { site } from "@/config/site";
import type { FaqItem } from "@/content/types";

export function postalAddress() {
  return {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    postalCode: site.address.postalCode,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    addressCountry: site.address.country,
  };
}

export function areaServedOrg() {
  return [
    { "@type": "AdministrativeArea", name: "Suisse romande" },
    { "@type": "AdministrativeArea", name: "Canton de Vaud" },
    { "@type": "City", name: "Renens" },
  ];
}

export function organizationNode() {
  return {
    "@type": ["Organization", "HVACBusiness"],
    "@id": `${site.url}/#org`,
    name: site.legalName,
    url: site.url,
    email: site.email,
    telephone: site.phoneTel,
    address: postalAddress(),
    areaServed: areaServedOrg(),
    openingHours: site.hours.openingHours,
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [...site.hours.days],
      opens: site.hours.opens,
      closes: site.hours.closes,
    },
    knowsAbout: ["Ventilation", "VMC", "Maintenance VMC"],
  };
}

export function breadcrumbNode(
  items: readonly { name: string; path: string }[],
) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${site.url}${item.path === "/" ? "" : item.path}`,
    })),
  };
}

export function faqNode(items: readonly FaqItem[]) {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function serviceNode({
  name,
  path,
  includeLausanne = false,
}: {
  name: string;
  path: string;
  includeLausanne?: boolean;
}) {
  const areaServed = includeLausanne
    ? [...areaServedOrg(), { "@type": "City", name: "Lausanne" }]
    : areaServedOrg();

  return {
    "@type": "Service",
    name,
    url: `${site.url}${path}`,
    provider: { "@id": `${site.url}/#org` },
    areaServed,
  };
}
