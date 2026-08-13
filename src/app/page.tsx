import Image from "next/image";
import { Check } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { JsonLd } from "@/components/seo/JsonLd";
import { cta } from "@/config/site";
import { home } from "@/content/home";
import heroPhoto from "../../public/images/hero.webp";

function Section({
  id,
  children,
  muted = false,
}: {
  id?: string;
  children: React.ReactNode;
  muted?: boolean;
}) {
  return (
    <section
      id={id}
      className={muted ? "bg-surface-muted" : "bg-white"}
    >
      <div className="mx-auto max-w-[1200px] px-5 py-14 md:px-8 md:py-20 lg:py-24">{children}</div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <section className="relative min-h-[calc(100vh-4rem)] overflow-hidden md:min-h-[calc(100vh-72px)]">
        <div className="absolute inset-0">
          <Image
            src={heroPhoto}
            alt="Gaine de ventilation rectangulaire continue sous plafond vitré, lumière naturelle — visuel d’ambiance, photographie de chantier à venir"
            fill
            priority
            placeholder="blur"
            sizes="100vw"
            className="object-cover object-[50%_32%] md:object-[58%_28%]"
          />
        </div>
        <div className="hero-veil absolute inset-0" aria-hidden />
        <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-[1200px] flex-col justify-center px-5 py-16 md:min-h-[calc(100vh-72px)] md:px-8">
          <h1 className="max-w-[16ch] font-display text-[36px] font-semibold tracking-tight text-navy sm:text-[48px] lg:text-[56px] lg:leading-[1.12]">
            {home.hero.h1}
          </h1>
          <p className="mt-4 max-w-[36ch] text-lg text-ink-secondary">{home.hero.sub}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href={cta.primary.href}>{cta.primary.label}</ButtonLink>
            <ButtonLink href={cta.secondary.href} variant="secondary">
              {cta.secondary.label}
            </ButtonLink>
          </div>
        </div>
      </section>

      <div id="secteurs" className="bg-surface-muted">
        <p className="mx-auto max-w-[1200px] px-5 py-8 text-center text-sm tracking-wide text-ink-secondary md:px-8">
          {home.audiences.join(" · ")}
        </p>
      </div>

      <Section muted>
        <h2 className="text-[24px] font-semibold text-navy md:text-[32px]">
          {home.checklistTitle}
        </h2>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {home.checklist.map((item) => (
            <li key={item} className="flex items-start gap-3 text-[15px] text-ink">
              <Check
                className="mt-0.5 size-4 shrink-0 text-success"
                strokeWidth={1.75}
                aria-hidden
              />
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section id="pourquoi">
        <h2 className="text-[24px] font-semibold text-navy md:text-[32px]">{home.why.title}</h2>
        <p className="mt-3 max-w-[42ch] text-ink-secondary">{home.why.lead}</p>
        <div className="mt-12 grid gap-0 border-t border-line md:grid-cols-2 lg:grid-cols-4">
          {home.why.items.map((item) => (
            <div
              key={item.title}
              className="border-b border-line py-8 md:border-b-0 md:px-6 md:py-10 lg:border-r lg:last:border-r-0 first:md:pl-0"
            >
              <h3 className="text-[18px] font-semibold text-navy">{item.title}</h3>
              <p className="mt-3 text-[15px] text-ink-secondary">{item.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="expertise" muted>
        <h2 className="text-[24px] font-semibold text-navy md:text-[32px]">
          {home.expertise.title}
        </h2>
        <p className="mt-3 max-w-[48ch] text-ink-secondary">{home.expertise.lead}</p>
        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          {home.expertise.items.map((item) => (
            <article key={item.title} className="border-t border-primary/40 pt-6">
              <h3 className="text-[20px] font-semibold text-navy">{item.title}</h3>
              <p className="mt-3 text-[15px] text-ink-secondary">{item.text}</p>
              <ButtonLink href={item.href} variant="ghost" className="mt-4 h-auto px-0">
                En savoir plus →
              </ButtonLink>
            </article>
          ))}
        </div>
      </Section>

      <Section id="methode">
        <h2 className="text-[24px] font-semibold text-navy md:text-[32px]">
          {home.method.title}
        </h2>
        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {home.method.steps.map((step) => (
            <li key={step.n}>
              <span className="font-mono text-[13px] text-primary">{step.n}</span>
              <h3 className="mt-2 text-[18px] font-semibold text-navy">{step.title}</h3>
              <p className="mt-2 text-[15px] text-ink-secondary">{step.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section muted>
        <h2 className="text-[24px] font-semibold text-navy md:text-[32px]">
          {home.deliverables.title}
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {home.deliverables.items.map((item) => (
            <div key={item.title}>
              <h3 className="text-[16px] font-semibold text-navy">{item.title}</h3>
              <p className="mt-2 text-[14px] text-ink-secondary">{item.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="realisations">
        <h2 className="text-[24px] font-semibold text-navy md:text-[32px]">Réalisations</h2>
        <p className="mt-3 max-w-[52ch] text-ink-secondary">
          Les photographies de chantiers BR Tech seront publiées après le shooting. Aucune image
          d’illustration générique n’est utilisée à la place.
        </p>
      </Section>

      <Section>
        <h2 className="text-[24px] font-semibold text-navy md:text-[32px]">{home.faq.title}</h2>
        <div className="mt-8 divide-y divide-line border-y border-line">
          {home.faq.items.map((item) => (
            <details key={item.q} className="group py-4">
              <summary className="cursor-pointer list-none text-[17px] font-medium text-navy marker:content-none [&::-webkit-details-marker]:hidden">
                {item.q}
              </summary>
              <p className="mt-3 max-w-[68ch] text-[15px] text-ink-secondary">{item.a}</p>
            </details>
          ))}
        </div>
      </Section>

      <section className="bg-navy text-white">
        <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-6 px-5 py-14 md:flex-row md:items-center md:px-8 md:py-16">
          <div>
            <h2 className="text-[24px] font-semibold md:text-[32px]">{home.band.title}</h2>
            <p className="mt-2 max-w-[42ch] text-white/75">{home.band.text}</p>
          </div>
          <ButtonLink href={cta.primary.href} variant="inverse">
            {cta.primary.label}
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
