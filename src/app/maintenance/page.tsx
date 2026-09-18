import type { Metadata } from "next";
import { ServiceArticle } from "@/components/pages/ServiceArticle";
import { maintenancePage } from "@/content/maintenance";
import { pageMeta } from "@/lib/page-meta";

export const metadata: Metadata = pageMeta({
  title: maintenancePage.title,
  description: maintenancePage.description,
  path: maintenancePage.path,
});

export default function MaintenancePage() {
  return (
    <ServiceArticle
      content={maintenancePage}
      crumbs={[
        { label: "Accueil", href: "/" },
        { label: "Maintenance" },
      ]}
    />
  );
}
