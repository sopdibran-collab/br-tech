import type { Metadata } from "next";
import { about } from "@/content/about";
import { pageMeta } from "@/lib/page-meta";
import { CtaBand } from "@/components/layout/CtaBand";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = pageMeta({
  title: about.title,
  description: about.description,
  path: about.path,
});

export default function AboutPage() {
  return (
    <>
      <article className="mx-auto max-w-[720px] px-5 py-14 md:px-8 md:py-20">
        <Breadcrumbs
          items={[
            { label: "Accueil", href: "/" },
            { label: "À propos" },
          ]}
        />
        <h1 className="mt-8 text-[32px] font-semibold text-navy md:text-[40px]">
          {about.title}
        </h1>
        <div className="mt-8 space-y-5 text-[16px] leading-relaxed text-ink-secondary md:text-[17px]">
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 48)}>{p}</p>
          ))}
        </div>
      </article>
      <CtaBand title={about.band.title} text={about.band.text} />
    </>
  );
}
