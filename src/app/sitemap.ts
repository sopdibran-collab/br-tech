import type { MetadataRoute } from "next";
import { site } from "@/config/site";

/**
 * Date de contenu, pas la date de build.
 * Google ignore un lastmod qui change à chaque déploiement.
 * Avancer la date d’une URL seulement quand son contenu change.
 * /merci est noindex : elle n’est pas listée.
 */
const published = new Date("2026-09-23T00:00:00.000Z");

const routes: {
  path: string;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;
  priority: number;
}[] = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/services", changeFrequency: "monthly", priority: 0.9 },
  { path: "/services/installation", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services/double-flux", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services/depannage", changeFrequency: "monthly", priority: 0.8 },
  { path: "/maintenance", changeFrequency: "monthly", priority: 0.8 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.7 },
  { path: "/a-propos", changeFrequency: "monthly", priority: 0.6 },
  { path: "/mentions-legales", changeFrequency: "yearly", priority: 0.2 },
  { path: "/confidentialite", changeFrequency: "yearly", priority: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${site.url}${route.path}`,
    lastModified: published,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
