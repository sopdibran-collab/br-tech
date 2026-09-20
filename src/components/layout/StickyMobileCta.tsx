import { FileText, Phone } from "lucide-react";
import { cta } from "@/config/site";

export function StickyMobileCta() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 flex h-16 border-t border-white/15 bg-navy md:hidden pb-[env(safe-area-inset-bottom)]">
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
