import { renderOgImage } from "@/lib/og/render";

export const alt =
  "BR Tech Sàrl — L’air, maîtrisé. Spécialistes ventilation en Suisse romande, depuis Renens.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function TwitterImage() {
  return renderOgImage();
}
