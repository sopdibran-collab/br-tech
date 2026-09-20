import { ButtonLink } from "@/components/ui/ButtonLink";
import { cta } from "@/config/site";

export function CtaBand({
  title,
  text,
  href = cta.primary.href,
  label = cta.primary.label,
}: {
  title: string;
  text: string;
  href?: string;
  label?: string;
}) {
  return (
    <section className="bg-navy text-white">
      <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-6 px-5 py-14 md:flex-row md:items-center md:px-8 md:py-16">
        <div>
          <h2 className="text-[24px] font-semibold md:text-[32px]">{title}</h2>
          <p className="mt-2 max-w-[42ch] text-white/75">{text}</p>
        </div>
        <ButtonLink href={href} variant="inverse">
          {label}
        </ButtonLink>
      </div>
    </section>
  );
}
