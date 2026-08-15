import type { Metadata } from "next";
import { ServiceArticle } from "@/components/pages/ServiceArticle";
import { doubleFluxPage } from "@/content/services";
import { pageMeta } from "@/lib/page-meta";

export const metadata: Metadata = pageMeta({
  title: doubleFluxPage.title,
  description: doubleFluxPage.description,
  path: doubleFluxPage.path,
});

export default function DoubleFluxPage() {
  return (
    <ServiceArticle
      content={doubleFluxPage}
      crumbs={[
        { label: "Accueil", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Double flux" },
      ]}
    />
  );
}
