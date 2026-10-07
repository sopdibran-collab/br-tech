import type { Metadata } from "next";
import { ContactForm } from "@/app/contact/ContactForm";
import { PageHero } from "@/components/layout/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbNode, organizationNode } from "@/components/seo/schema";
import { formatAddress, site } from "@/config/site";
import { contactCopy } from "@/content/contact";
import { pageMeta } from "@/lib/page-meta";
import roofOutletPhoto from "../../../assets/photos/sortie-toiture.jpg";

const MAP_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2744.6839842427353!2d6.590294499999999!3d46.5341549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c31fb36385d73%3A0x2802a37ea7b6971a!2sBR%20tech%20sarl!5e0!3m2!1sfr!2sch!4v1791407210324!5m2!1sfr!2sch";
const MAP_LINK_HREF =
  "https://maps.google.com/?q=BR+Tech+S%C3%A0rl+Rue+de+Lausanne+49g+1020+Renens";

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
          </div>
          <figure className="mt-6">
            <div className="overflow-hidden rounded-[4px] border border-line bg-white">
              <iframe
                src={MAP_EMBED_SRC}
                title={`Carte : ${site.legalName}, ${site.address.street}, ${site.address.postalCode} ${site.address.city}`}
                className="block h-[400px] w-full border-0"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <figcaption className="mt-3 text-[14px]">
              <a
                href={MAP_LINK_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Ouvrir dans Google Maps
                <span className="sr-only"> (nouvel onglet)</span>
              </a>
            </figcaption>
          </figure>
        </aside>
      </div>
    </div>
  );
}
