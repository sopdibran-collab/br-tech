import Image from "next/image";
import Link from "next/link";
import { BrandIcon } from "@/components/icons/BrandIcon";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { CtaBand } from "@/components/layout/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqNode, organizationNode } from "@/components/seo/schema";
import { cta } from "@/config/site";
import { home } from "@/content/home";
import heroPhoto from "../../public/images/hero.webp";

function Section({
  id,
  children,
  muted = false,
  tight = false,
}: {
  id?: string;
  children: React.ReactNode;
  muted?: boolean;
  tight?: boolean;
}) {
  return (
    <section id={id} className={muted ? "bg-surface-muted" : "bg-white"}>
      <div
        className={
          tight
            ? "mx-auto max-w-[1200px] px-5 py-10 md:px-8 md:py-12"
            : "mx-auto max-w-[1200px] px-5 py-14 md:px-8 md:py-20"
        }
      >
        {children}
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <JsonLd graph={[organizationNode(), faqNode(home.faq.items)]} />
      <section className="hero-studio relative min-h-[calc(100vh-4rem)] overflow-hidden md:min-h-[calc(100vh-72px)]">
        <Image
          src={heroPhoto}
          alt="Bouche de ventilation et plume immobile — visuel conceptuel, l’air calme"
          fill
          priority
          placeholder="blur"
          sizes="100vw"
          className="object-cover object-[62%_42%] md:object-[72%_48%]"
        />
        <div className="hero-veil absolute inset-0" aria-hidden />
        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-4rem)] max-w-[1200px] flex-col justify-center px-5 py-16 md:min-h-[calc(100vh-72px)] md:px-8">
          <h1 className="max-w-[16ch] font-display text-[36px] font-semibold tracking-tight text-navy sm:text-[48px] lg:text-[56px] lg:leading-[1.12]">
            {home.hero.h1}
          </h1>
          <p className="mt-4 max-w-[36ch] text-lg text-ink">{home.hero.sub}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href={cta.primary.href}>{cta.primary.label}</ButtonLink>
            <ButtonLink href={cta.secondary.href} variant="secondary">
              {cta.secondary.label}
            </ButtonLink>
          </div>
        </div>
      </section>

      <div id="secteurs" className="border-t border-line bg-white">
        <p className="mx-auto max-w-[1200px] px-5 py-8 text-center text-sm tracking-wide text-ink-secondary md:px-8">
          {home.audiences.join(" · ")}
        </p>
      </div>

      <Section tight>
        <div className="md:grid md:grid-cols-12 md:items-start md:gap-16">
          <h2 className="text-[20px] font-semibold text-navy md:col-span-4 md:text-[24px]">
            {home.checklistTitle}
          </h2>
          <ul className="mt-6 divide-y divide-line border-y border-line md:col-span-8 md:mt-0">
            {home.checklist.map((item) => (
              <li key={item} className="py-3 text-[15px] text-ink">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section id="pourquoi" muted>
        <div className="md:grid md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <h2 className="text-[24px] font-semibold text-navy md:text-[32px]">
              {home.why.title}
            </h2>
            <p className="mt-4 max-w-[36ch] text-ink-secondary">{home.why.lead}</p>
          </div>
          <div className="mt-10 divide-y divide-line border-y border-line md:col-span-7 md:mt-0">
            {home.why.items.map((item) => (
              <div key={item.title} className="py-6">
                <h3 className="text-[17px] font-semibold text-navy">{item.title}</h3>
                <p className="mt-2 text-[15px] text-ink-secondary">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="expertise">
        <h2 className="text-[24px] font-semibold text-navy md:text-[32px]">
          {home.expertise.title}
        </h2>
        <p className="mt-3 max-w-[48ch] text-ink-secondary">{home.expertise.lead}</p>
        <dl className="mt-12 max-w-[44rem] divide-y divide-line border-y border-line">
          {home.expertise.items.map((item) => (
            <div
              key={item.title}
              className="grid gap-1 py-6 sm:grid-cols-[13rem_1fr] sm:gap-8"
            >
              <dt className="flex items-start gap-3 text-[17px] font-semibold text-navy">
                <BrandIcon
                  name={item.icon}
                  className="mt-0.5 size-[18px] text-primary"
                />
                <Link href={item.href} className="hover:text-primary">
                  {item.title}
                </Link>
              </dt>
              <dd className="text-[15px] text-ink-secondary">{item.text}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-8">
          <Link href={home.expertise.allHref} className="text-[15px] text-primary hover:text-primary-hover">
            {home.expertise.allLabel}
          </Link>
        </p>
        <p className="mt-10">
          <ButtonLink href={cta.primary.href}>{cta.primary.label}</ButtonLink>
        </p>
      </Section>

      <Section id="methode" muted>
        <h2 className="text-[24px] font-semibold text-navy md:text-[32px]">
          {home.method.title}
        </h2>
        <p className="mt-3 max-w-[42ch] text-ink-secondary">{home.method.lead}</p>
        <ol className="mt-10 max-w-[40rem] list-none space-y-8 border-l border-line pl-6">
          {home.method.steps.map((step) => (
            <li key={step.title}>
              <h3 className="flex items-start gap-3 text-[18px] font-semibold text-navy">
                <BrandIcon
                  name={step.icon}
                  className="mt-0.5 size-[18px] text-primary"
                />
                {step.title}
              </h3>
              <p className="mt-1 pl-8 text-[15px] text-ink-secondary">{step.text}</p>
            </li>
          ))}
        </ol>
        <p className="mt-10 max-w-[48ch] text-[15px] text-ink">{home.method.reception}</p>
      </Section>

      <Section id="equipe" muted>
        <h2 className="text-[24px] font-semibold text-navy md:text-[32px]">
          {home.team.title}
        </h2>
        <p className="mt-4 max-w-[48ch] text-[17px] text-ink-secondary">{home.team.lead}</p>
      </Section>

      <Section>
        <h2 className="max-w-[40rem] text-[24px] font-semibold text-navy md:text-[32px]">
          {home.faq.title}
        </h2>
        <div className="mt-8 max-w-[40rem] divide-y divide-line border-y border-line">
          {home.faq.items.map((item) => (
            <details key={item.q} className="py-4">
              <summary className="cursor-pointer list-none text-[17px] font-medium text-navy marker:content-none [&::-webkit-details-marker]:hidden">
                {item.q}
              </summary>
              <p className="mt-3 text-[15px] text-ink-secondary">{item.a}</p>
            </details>
          ))}
        </div>
      </Section>

      <CtaBand title={home.band.title} text={home.band.text} />
    </>
  );
}
