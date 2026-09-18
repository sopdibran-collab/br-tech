export type FaqItem = {
  q: string;
  a: string;
};

export type ContentSection = {
  title: string;
  answer: string;
  body: string;
};

export type RelatedLink = {
  label: string;
  href: string;
};

/** Bloc « Pour qui » — même prestation, deux angles (pro / particulier). */
export type AudienceBlock = {
  professionals: string;
  individuals: string;
};

export type ServicePageContent = {
  path: string;
  title: string;
  description: string;
  h1: string;
  lead: string;
  serviceName: string;
  contactType: string;
  /** Angles promoteurs / architectes / régies vs particuliers. */
  audience: AudienceBlock;
  sections: readonly ContentSection[];
  faq: readonly FaqItem[];
  related: readonly RelatedLink[];
  includeLausanne?: boolean;
};
