export type FaqItem = {
  q: string;
  a: string;
};

export type ContentSection = {
  title: string;
  answer: string;
  body: string;
};

export type SchemaIllustration = "airflow" | "double-flux" | "maintenance" | "depannage";

export type RelatedLink = {
  label: string;
  href: string;
};

export type ServicePageContent = {
  path: string;
  title: string;
  description: string;
  h1: string;
  lead: string;
  serviceName: string;
  contactType: string;
  sections: readonly ContentSection[];
  faq: readonly FaqItem[];
  related: readonly RelatedLink[];
  includeLausanne?: boolean;
  illustration?: SchemaIllustration;
};
