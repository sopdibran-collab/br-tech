import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { pageLastModified } from "@/lib/lastmod";

/**
 * lastmod = dernier commit des fichiers de la page, quand l’historique git
 * est complet au moment du build. Sinon (pas de git, clone shallow, date
 * illisible) : date du build. /merci est noindex : elle n’est pas listée.
 */
const routes: {
  path: string;
  files: readonly string[];
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;
  priority: number;
}[] = [
  {
    path: "",
    files: ["src/app/page.tsx", "src/content/home.ts"],
    changeFrequency: "weekly",
    priority: 1,
  },
  {
    path: "/services",
    files: [
      "src/app/services/page.tsx",
      "src/content/services.ts",
      "src/content/services-core.ts",
    ],
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    path: "/services/installation",
    files: [
      "src/app/services/installation/page.tsx",
      "src/content/services-core.ts",
    ],
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/services/double-flux",
    files: [
      "src/app/services/double-flux/page.tsx",
      "src/content/services-core.ts",
    ],
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/services/depannage",
    files: [
      "src/app/services/depannage/page.tsx",
      "src/content/services-depannage.ts",
    ],
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/maintenance",
    files: ["src/app/maintenance/page.tsx", "src/content/maintenance.ts"],
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/contact",
    files: [
      "src/app/contact/page.tsx",
      "src/app/contact/ContactForm.tsx",
      "src/content/contact.ts",
    ],
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    path: "/a-propos",
    files: ["src/app/a-propos/page.tsx", "src/content/about.ts"],
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    path: "/mentions-legales",
    files: ["src/app/mentions-legales/page.tsx", "src/content/legal.ts"],
    changeFrequency: "yearly",
    priority: 0.2,
  },
  {
    path: "/confidentialite",
    files: ["src/app/confidentialite/page.tsx", "src/content/legal.ts"],
    changeFrequency: "yearly",
    priority: 0.2,
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${site.url}${route.path}`,
    lastModified: pageLastModified(route.files),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
