import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CtaBand } from "@/components/layout/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbNode, organizationNode } from "@/components/seo/schema";
import { pageMeta } from "@/lib/page-meta";
import { BrandIcon } from "@/components/icons/BrandIcon";
import { servicesHub } from "@/content/services";

export const metadata: Metadata = pageMeta({
  title: servicesHub.title,
  description: servicesHub.description,
  path: "/services",
});

export default function ServicesHubPage() {
  return (
    <>
      <JsonLd
        graph={[
          organizationNode(),
          breadcrumbNode([
            { name: "Accueil", path: "/" },
            { name: "Services", path: "/services" },
          ]),
        ]}
      />
      <article className="bg-white">
        <div className="mx-auto max-w-[720px] px-5 py-14 md:px-8 md:py-20">
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "Services" },
            ]}
          />
          <h1 className="font-display text-[32px] font-semibold tracking-tight text-navy md:text-[40px]">
            {servicesHub.h1}
          </h1>
          <p className="mt-5 text-[17px] text-ink">{servicesHub.lead}</p>

          <dl className="mt-12 divide-y divide-line border-y border-line">
            {servicesHub.live.map((item) => (
              <div key={item.href} className="flex gap-4 py-6">
                <BrandIcon
                  name={item.icon}
                  className="mt-1 size-5 text-primary"
                />
                <div>
                  <dt>
                    <Link
                      href={item.href}
                      className="text-[18px] font-semibold text-navy hover:text-primary"
                    >
                      {item.title}
                    </Link>
                  </dt>
                  <dd className="mt-2 text-[15px] text-ink-secondary">{item.text}</dd>
                </div>
              </div>
            ))}
          </dl>

          <section className="mt-12">
            <h2 className="text-[22px] font-semibold text-navy">Maintenance</h2>
            <p className="mt-3 text-[17px] text-ink">
              L’entretien préventif n’est pas un sous-lien des services.
            </p>
            <p className="mt-3 text-[15px] text-ink-secondary">{servicesHub.maintenance.text}</p>
            <p className="mt-4 flex items-center gap-2">
              <BrandIcon name={servicesHub.maintenance.icon} className="size-[18px] text-primary" />
              <Link href={servicesHub.maintenance.href} className="text-primary hover:text-primary-hover">
                {servicesHub.maintenance.title}
              </Link>
            </p>
          </section>

          <section className="mt-12 border-t border-line pt-10">
            <h2 className="text-[22px] font-semibold text-navy">Autres besoins</h2>
            <p className="mt-3 text-[17px] text-ink">
              Rénovation, extraction et optimisation se discutent au devis — les pages dédiées viendront ensuite.
            </p>
            <ul className="mt-6 divide-y divide-line border-y border-line">
              {servicesHub.later.map((item) => (
                <li key={item.href} className="flex gap-4 py-4">
                  <BrandIcon
                    name={item.icon}
                    className="mt-0.5 size-[18px] text-ink-muted"
                  />
                  <div>
                    <Link href={item.href} className="text-[16px] font-medium text-navy hover:text-primary">
                      {item.title}
                    </Link>
                    <p className="mt-1 text-[15px] text-ink-secondary">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </article>
      <CtaBand
        title="Un bâtiment à ventiler ?"
        text="Décrivez le bâtiment, le besoin et le délai — nous revenons vers vous."
      />
    </>
  );
}
