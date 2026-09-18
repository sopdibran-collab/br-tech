import Image from "next/image";
import Link from "next/link";
import { footerGroups, formatAddress, site } from "@/config/site";

function Chip({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="rounded-[2px] border border-white/15 px-2 py-0.5 text-[11px] text-white/80 hover:border-white/40 hover:text-white"
    >
      {label}
    </Link>
  );
}

export function Footer() {
  const address = formatAddress();

  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-[1200px] px-5 py-3 md:px-8 md:py-5">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <Image
            src="/logo/inverse.svg"
            alt=""
            width={96}
            height={66}
            className="h-8 w-auto"
            unoptimized
          />
          <p className="text-[11px] text-white/70">{site.signature}</p>
          <p className="text-[11px] text-white/70">{address}</p>
          <p className="text-[11px] text-white/70">{site.hours.compact}</p>
          <a href={`tel:${site.phoneTel}`} className="text-[11px] text-white/80 hover:text-white">
            {site.phoneDisplay}
          </a>
          <a href={`mailto:${site.email}`} className="text-[11px] text-white/80 hover:text-white">
            {site.email}
          </a>
        </div>

        <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
          <div className="flex flex-wrap items-center gap-1.5">
            {footerGroups.navigation.map((item) => (
              <Chip key={item.label} href={item.href} label={item.label} />
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-[10px] uppercase tracking-wider text-white/70">
              Prestations
            </span>
            {footerGroups.services.map((item) => (
              <Chip key={item.label} href={item.href} label={item.label} />
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center gap-x-3 gap-y-1 px-5 py-2 text-[10px] text-white/70 md:px-8">
          <span>
            © {new Date().getFullYear()} {site.legalName}
          </span>
          {footerGroups.legal.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-white/80">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
