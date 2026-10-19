import type { Metadata } from "next";
import { ProfileSections } from "@/components/content/ProfileSections";
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
        <div className="prose-brt space-y-5">
          <h2 className="text-[22px] font-semibold text-navy">L’entreprise</h2>
          <p>{about.paragraphs[0]}</p>
          <p>{about.paragraphs[1]}</p>
          <h3 className="pt-2 text-[18px] font-semibold text-navy">
            Suivi et interventions
          </h3>
          <p className="callout-brt">{about.paragraphs[2]}</p>
          <p>{about.paragraphs[3]}</p>
        </div>
      </ContentSection>
      <ProfileSections surface="page" />
      <CtaBand title={about.band.title} text={about.band.text} />
    </>
  );
}
