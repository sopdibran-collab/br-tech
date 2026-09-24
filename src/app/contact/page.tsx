import type { Metadata } from "next";
import { ContactForm } from "@/app/contact/ContactForm";
import { PageHero } from "@/components/layout/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbNode, organizationNode } from "@/components/seo/schema";
import { formatAddress, site } from "@/config/site";
import { contactCopy } from "@/content/contact";
import { pageMeta } from "@/lib/page-meta";
import roofOutletPhoto from "../../../assets/photos/sortie-toiture.jpg";

export const metadata: Metadata = pageMeta({
  title: contactCopy.metaTitle,
  description: contactCopy.metaDescription,
  path: "/contact",
});

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) {
  const { type } = await searchParams;
  const address = formatAddress();

  return (
    <div className="bg-surface-page">
      <JsonLd
        graph={[
          organizationNode(),
          breadcrumbNode([
            { name: "Accueil", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ]}
      />
      <PageHero
        image={roofOutletPhoto}
        alt={contactCopy.heroAlt}
        objectPosition="62% 42%"
        crumbs={[
          { label: "Accueil", href: "/" },
          { label: "Contact" },
        ]}
        title={contactCopy.title}
        lead={contactCopy.lead}
      />
      <div className="mx-auto grid max-w-[1200px] gap-12 px-5 py-14 md:grid-cols-12 md:px-8 md:py-20">
        <div className="md:col-span-7">
          <p className="text-[15px] text-ink">{contactCopy.aeo}</p>
          <div className="mt-8">
            <ContactForm defaultType={type} />
          </div>
        </div>
        <aside className="md:col-span-5">
          <div className="border border-line bg-white p-6 md:p-8">
            <h2 className="text-[18px] font-semibold text-navy">{site.legalName}</h2>
            <p className="mt-3 text-[15px] text-ink-secondary">{address}</p>
            <p className="mt-3 text-[15px]">
              <a href={`tel:${site.phoneTel}`} className="text-primary hover:underline">
                {site.phoneDisplay}
              </a>
            </p>
            <p className="mt-2 text-[15px]">
              <a href={`mailto:${site.email}`} className="text-primary hover:underline">
                {site.email}
              </a>
            </p>
            <p className="mt-6 text-[14px] text-ink-secondary">
              Horaires : {site.hours.display}.
            </p>
            <p className="mt-2 text-[14px] text-ink-secondary">
              Carte : {address}.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
