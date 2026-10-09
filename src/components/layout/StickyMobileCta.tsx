"use client";

import { FileText, Phone } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cta } from "@/config/site";

const hiddenRoutes = new Set(["/contact", "/merci"]);

export function StickyMobileCta() {
  const pathname = usePathname();
  const [pastFirstScreen, setPastFirstScreen] = useState(false);
  const suppressed = hiddenRoutes.has(pathname);

  useEffect(() => {
    if (pathname !== "/") return;

    const onScroll = () => {
      setPastFirstScreen(window.scrollY > window.innerHeight * 0.9);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    const frame = window.requestAnimationFrame(onScroll);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, [pathname]);

  const visible = !suppressed && (pathname !== "/" || pastFirstScreen);
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
