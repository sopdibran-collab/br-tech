import { ButtonLink } from "@/components/ui/ButtonLink";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-[720px] px-5 py-24 md:px-8">
      <h1 className="text-[32px] font-semibold text-navy">Cette page n’existe pas</h1>
      <p className="mt-4 text-ink-secondary">Retour à l’accueil.</p>
      <ButtonLink href="/" className="mt-8">
        Accueil
      </ButtonLink>
    </div>
  );
}
