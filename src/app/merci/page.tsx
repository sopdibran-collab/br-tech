import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { cta, formatAddress, site } from "@/config/site";
import { pageMeta } from "@/lib/page-meta";

export const metadata: Metadata = {
  ...pageMeta({
    title: "Merci",
    description:
      "Votre demande a bien été envoyée. BR Tech Sàrl vous répondra dans les meilleurs délais.",
    path: "/merci",
  }),
  robots: { index: false, follow: false },
};

export default function MerciPage() {
  const address = formatAddress();

  return (
    <div className="mx-auto max-w-[720px] px-5 py-14 md:px-8 md:py-20">
      <h1 className="font-display text-[32px] font-semibold tracking-tight text-navy md:text-[40px]">
        Merci
      </h1>
      <p className="mt-5 text-[17px] text-ink">
        Votre demande a bien été envoyée. Nous vous répondrons dans les meilleurs
        délais.
      </p>
      <p className="mt-4 text-[15px] text-ink-secondary">
        Pour une urgence ou un dépannage, vous pouvez aussi nous appeler
        directement.
      </p>

      <div className="mt-10 border border-line bg-white p-6 md:p-8">
        <h2 className="text-[18px] font-semibold text-navy">{site.legalName}</h2>
        <p className="mt-3 text-[15px] text-ink-secondary">{address}</p>
        <p className="mt-3 text-[15px]">
          <a
            href={`tel:${site.phoneTel}`}
            className="text-primary hover:underline"
          >
            {site.phoneDisplay}
          </a>
        </p>
        <p className="mt-2 text-[15px]">
          <a
            href={`mailto:${site.email}`}
            className="text-primary hover:underline"
          >
            {site.email}
          </a>
        </p>
        <p className="mt-6 text-[14px] text-ink-secondary">
          Horaires : {site.hours.display}.
        </p>
      </div>

      <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <ButtonLink href={cta.call.href}>{cta.call.label}</ButtonLink>
        <ButtonLink href="/contact" variant="secondary">
          Retour au contact
        </ButtonLink>
        <ButtonLink href="/" variant="ghost">
          Accueil
        </ButtonLink>
      </div>
    </div>
  );
}
