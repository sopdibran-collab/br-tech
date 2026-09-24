import type { Metadata } from "next";
import { ServiceArticle } from "@/components/pages/ServiceArticle";
import { installationPage } from "@/content/services";
import { home } from "@/content/home";
import { pageMeta } from "@/lib/page-meta";
import hallPhoto from "../../../../assets/photos/halle-gaines.jpg";

export const metadata: Metadata = pageMeta({
  title: installationPage.title,
  description: installationPage.description,
  path: installationPage.path,
});

export default function InstallationPage() {
  return (
    <ServiceArticle
      content={installationPage}
      crumbs={[
        { label: "Accueil", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Installation" },
      ]}
      image={{
        src: hallPhoto,
        alt: home.realisations.hall.alt,
        caption: home.realisations.hall.caption,
      }}
    />
  );
}
