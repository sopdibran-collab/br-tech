import type { Metadata } from "next";
import { about } from "@/content/about";
import { pageMeta } from "@/lib/page-meta";
import { CtaBand } from "@/components/layout/CtaBand";
import { ContentSection } from "@/components/layout/ContentSection";
import { PageHero } from "@/components/layout/PageHero";
import hallPhoto from "../../../assets/photos/halle-gaines.jpg";

export const metadata: Metadata = pageMeta({
  title: about.title,
  description:
    "BR Tech Sàrl, ventilation à Renens (VD). Équipe de spécialistes en Suisse romande, installations calées sur le bâtiment et le cahier des charges.",
  path: about.path,
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        image={hallPhoto}
        alt={about.heroAlt}
        objectPosition="center 38%"
        crumbs={[
          { label: "Accueil", href: "/" },
          { label: "À propos" },
        ]}
        title="À propos — ventilation à Renens"
      />
      <ContentSection>
        <div className="space-y-5 text-[16px] leading-relaxed text-ink-secondary md:text-[17px]">
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 48)}>{p}</p>
          ))}
        </div>
      </ContentSection>
      <CtaBand title={about.band.title} text={about.band.text} />
    </>
  );
}
