import type { Metadata } from "next";
import { ServiceArticle } from "@/components/pages/ServiceArticle";
import { depannagePage } from "@/content/services";
import { pageMeta } from "@/lib/page-meta";

export const metadata: Metadata = pageMeta({
  title: depannagePage.title,
  description: depannagePage.description,
  path: depannagePage.path,
});

export default function DepannagePage() {
  return (
    <ServiceArticle
      content={depannagePage}
      crumbs={[
        { label: "Accueil", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Dépannage" },
      ]}
    />
  );
}
