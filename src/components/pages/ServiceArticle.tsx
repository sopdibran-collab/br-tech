import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
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
}: {
  content: ServicePageContent;
  crumbs: readonly { label: string; href?: string }[];
}) {
  const contactHref = `/contact?type=${content.contactType}`;
  const showVisite = content.contactType !== "depannage" && content.contactType !== "maintenance";

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

  return (
    <>
      <JsonLd graph={graph} />
      <article className="bg-white">
        <div className="mx-auto max-w-[720px] px-5 py-14 md:px-8 md:py-20">
          <Breadcrumbs items={crumbs} />
          <h1 className="font-display text-[32px] font-semibold tracking-tight text-navy md:text-[40px]">
            {content.h1}
          </h1>
          <p className="mt-5 text-[17px] text-ink">{content.lead}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href={contactHref}>{cta.primary.label}</ButtonLink>
            {showVisite ? (
              <ButtonLink href={cta.secondary.href} variant="secondary">
                {cta.secondary.label}
              </ButtonLink>
            ) : null}
          </div>

          {content.sections.map((section) => (
            <section key={section.title} className="mt-12 border-t border-line pt-10">
              <h2 className="text-[22px] font-semibold text-navy md:text-[24px]">
                {section.title}
              </h2>
              <p className="mt-3 text-[17px] text-ink">{section.answer}</p>
              <p className="mt-3 text-[15px] text-ink-secondary">{section.body}</p>
            </section>
          ))}

          <section className="mt-12 border-t border-line pt-10">
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
          </section>

          <nav aria-label="Pages liées" className="mt-12 border-t border-line pt-8">
            <p className="text-[13px] text-ink-muted">Voir aussi</p>
            <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
              {content.related.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-[15px] text-primary hover:text-primary-hover">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </article>
      <CtaBand
        title="Un bâtiment à ventiler ?"
        text="Décrivez le bâtiment, le besoin et le délai — nous revenons vers vous."
        href={contactHref}
      />
    </>
  );
}
