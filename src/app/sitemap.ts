import type { MetadataRoute } from "next";
import { site } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const paths = [
    "",
    "/services",
    "/services/installation",
    "/services/double-flux",
    "/services/depannage",
    "/maintenance",
    "/contact",
    "/mentions-legales",
    "/confidentialite",
  ];

  return paths.map((path) => ({
    url: `${site.url}${path}`,
    lastModified,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.startsWith("/services") || path === "/maintenance" ? 0.8 : 0.6,
  }));
}
