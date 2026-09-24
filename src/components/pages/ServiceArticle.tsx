import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ContentSection } from "@/components/layout/ContentSection";
import { CtaBand } from "@/components/layout/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  breadcrumbNode,
  faqNode,
  organizationNode,
  serviceNode,
} from "@/components/seo/schema";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { cta } from "@/config/site";
import type { ServicePageContent } from "@/content/types";

export function ServiceArticle({
  content,
  crumbs,
  image,
}: {
  content: ServicePageContent;
  crumbs: readonly { label: string; href?: string }[];
  image?: { src: StaticImageData; alt: string; caption: string };
}) {
  const contactHref = `/contact?type=${content.contactType}`;
  const isDepannage = content.contactType === "depannage";
  const showVisite =
    content.contactType !== "depannage" && content.contactType !== "maintenance";

  const graph = [
    organizationNode(),
    serviceNode({
      name: content.serviceName,
      path: content.path,
      includeLausanne: content.includeLausanne,
    }),
    breadcrumbNode(
      crumbs.map((crumb) => ({
        name: crumb.label,
        path: crumb.href ?? content.path,
      })),
    ),
    faqNode(content.faq),
  ];

  // Intro = white (block 0). Later blocks alternate: odd = muted, even = white.
  const isMuted = (blockIndex: number) => blockIndex % 2 === 1;
  const faqIndex = 2 + content.sections.length;
  const relatedIndex = faqIndex + 1;

  return (
    <>
      <JsonLd graph={graph} />
      <article>
        <ContentSection>
          <Breadcrumbs items={crumbs} />
          <h1 className="font-display text-[32px] font-semibold tracking-tight text-navy md:text-[40px]">
            {content.h1}
          </h1>
          <p className="mt-5 text-[17px] text-ink">{content.lead}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {isDepannage ? (
              <>
                <ButtonLink href={cta.call.href}>{cta.call.label}</ButtonLink>
                <ButtonLink href={contactHref} variant="secondary">
                  {cta.primary.label}
                </ButtonLink>
              </>
            ) : (
              <>
                <ButtonLink href={contactHref}>{cta.primary.label}</ButtonLink>
                {showVisite ? (
                  <ButtonLink href={cta.secondary.href} variant="secondary">
                    {cta.secondary.label}
                  </ButtonLink>
                ) : null}
              </>
            )}
          </div>
          {image ? (
            <figure className="mt-10">
              <Image
                src={image.src}
                alt={image.alt}
                sizes="(min-width: 768px) 720px, 100vw"
                className="aspect-[1372/980] w-full rounded-[4px] object-cover"
              />
              <figcaption className="mt-2 text-[13px] text-ink-secondary">
                {image.caption}
              </figcaption>
            </figure>
          ) : null}
        </ContentSection>

        <ContentSection muted={isMuted(1)}>
          <h2 className="text-[22px] font-semibold text-navy md:text-[24px]">
            Pour qui
          </h2>
          <div className="mt-6 grid gap-8 sm:grid-cols-2 sm:gap-10">
            <div>
              <h3 className="text-[15px] font-semibold text-navy">
                Professionnels
              </h3>
              <p className="mt-1 text-[13px] text-ink-secondary">
                Promoteurs · architectes · régies
              </p>
              <p className="mt-3 text-[15px] text-ink-secondary">
                {content.audience.professionals}
              </p>
            </div>
            <div>
              <h3 className="text-[15px] font-semibold text-navy">
                Particuliers
              </h3>
              <p className="mt-3 text-[15px] text-ink-secondary">
                {content.audience.individuals}
              </p>
            </div>
          </div>
        </ContentSection>

        {content.sections.map((section, i) => (
          <ContentSection key={section.title} muted={isMuted(2 + i)}>
            <h2 className="text-[22px] font-semibold text-navy md:text-[24px]">
              {section.title}
            </h2>
            <p className="mt-3 text-[17px] text-ink">{section.answer}</p>
            <p className="mt-3 text-[15px] text-ink-secondary">{section.body}</p>
          </ContentSection>
        ))}

        <ContentSection muted={isMuted(faqIndex)}>
          <h2 className="text-[22px] font-semibold text-navy md:text-[24px]">
            Questions fréquentes
          </h2>
          <div className="mt-6 divide-y divide-line border-y border-line">
            {content.faq.map((item) => (
              <details key={item.q} className="py-4">
                <summary className="cursor-pointer list-none text-[17px] font-medium text-navy marker:content-none [&::-webkit-details-marker]:hidden">
                  {item.q}
                </summary>
                <p className="mt-3 text-[15px] text-ink-secondary">{item.a}</p>
              </details>
            ))}
          </div>
        </ContentSection>

        <ContentSection muted={isMuted(relatedIndex)} tight>
          <nav aria-label="Pages liées">
            <p className="text-[13px] text-ink-secondary">Voir aussi</p>
            <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
              {content.related.map((item) => {
                const external =
                  item.href.startsWith("tel:") || item.href.startsWith("mailto:");
                const className =
                  "text-[15px] text-primary hover:text-primary-hover";
                return (
                  <li key={item.href}>
                    {external ? (
                      <a href={item.href} className={className}>
                        {item.label}
                      </a>
                    ) : (
                      <Link href={item.href} className={className}>
                        {item.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        </ContentSection>
      </article>
      {isDepannage ? (
        <CtaBand
          title="Une panne de ventilation ?"
          text="Appelez-nous pour un diagnostic — le délai d’intervention est fixé après le relevé."
          href={cta.call.href}
          label={cta.call.label}
        />
      ) : (
        <CtaBand
          title="Un bâtiment à ventiler ?"
          text="Décrivez le bâtiment, le besoin et le délai — nous revenons vers vous."
          href={contactHref}
        />
      )}
    </>
  );
}
