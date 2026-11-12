"use client";

import { FileText, Phone } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cta } from "@/config/site";

const hiddenRoutes = new Set(["/contact", "/merci"]);

/**
 * La barre apparaît une fois les boutons du hero ([data-hero-cta]) sortis de
 * l'écran : elle ne les recouvre jamais (ex. /services/depannage à 320 px).
 * Sans boutons dans le hero, elle est visible tout de suite.
 */
export function StickyMobileCta() {
  const pathname = usePathname();
  const [heroCtaOnScreen, setHeroCtaOnScreen] = useState(true);
  const suppressed = hiddenRoutes.has(pathname);

  useEffect(() => {
    let observer: IntersectionObserver | undefined;
    const frame = window.requestAnimationFrame(() => {
      const targets = document.querySelectorAll("[data-hero-cta]");
      if (!targets.length) {
        setHeroCtaOnScreen(false);
        return;
      }
      const onScreen = new Set<Element>();
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) onScreen.add(entry.target);
            else onScreen.delete(entry.target);
          }
          setHeroCtaOnScreen(onScreen.size > 0);
        });
      targets.forEach((target) => observer?.observe(target));
    });
    return () => {
      window.cancelAnimationFrame(frame);
      observer?.disconnect();
    };
  }, [pathname]);

  const visible = !suppressed && !heroCtaOnScreen;
  if (!visible) return null;

  return (
    <div
      data-sticky-cta
      className="fixed bottom-0 inset-x-0 z-40 flex h-16 border-t border-white/15 bg-navy pb-[env(safe-area-inset-bottom)] md:hidden"
    >
      <a
        href={cta.call.href}
        className="flex flex-1 items-center justify-center gap-2 bg-primary text-[13px] font-medium text-white"
      >
        <Phone className="size-4" strokeWidth={1.75} aria-hidden />
        {cta.call.label}
      </a>
      <span className="w-px self-stretch bg-white/20" aria-hidden />
      <a
        href={cta.primary.href}
        className="flex flex-1 items-center justify-center gap-2 text-[13px] font-medium text-white"
      >
        <FileText className="size-4" strokeWidth={1.75} aria-hidden />
        {cta.primary.label}
      </a>
    </div>
  );
}
