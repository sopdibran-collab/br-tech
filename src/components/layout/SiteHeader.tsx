"use client";

import { ChevronDown, Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { cta, navigationRoutes, type NavItem, site } from "@/config/site";
import { cn } from "@/lib/cn";

function DesktopItem({ item }: { item: NavItem }) {
  if (!item.children?.length) {
    return (
      <Link href={item.href} className="text-[14px] font-medium text-ink hover:text-primary">
        {item.label}
      </Link>
    );
  }

  return (
    <div className="group relative">
      <Link
        href={item.href}
        className="inline-flex items-center gap-1 text-[14px] font-medium text-ink hover:text-primary"
      >
        {item.label}
        <ChevronDown className="size-3.5" strokeWidth={1.75} aria-hidden />
      </Link>
      <div className="invisible absolute left-0 top-full z-50 pt-2 opacity-0 transition-opacity duration-[180ms] motion-reduce:transition-none group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <ul className="min-w-[12.5rem] border border-line bg-white py-2 shadow-[0_8px_24px_rgba(27,49,71,0.08)]">
          {item.children.map((child) => (
            <li key={child.href}>
              <Link
                href={child.href}
                className="block px-4 py-2 text-[14px] text-ink hover:bg-surface-muted hover:text-primary"
              >
                {child.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href={item.href}
              className="block border-t border-line px-4 py-2 text-[13px] text-ink-secondary hover:text-primary"
            >
              Tous les services
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

function DrawerLinks({
  item,
  onNavigate,
}: {
  item: NavItem;
  onNavigate: () => void;
}) {
  return (
    <div>
      <Link
        href={item.href}
        className="block px-3 py-2 text-[15px] font-medium text-ink hover:bg-surface-muted"
        onClick={onNavigate}
      >
        {item.label}
      </Link>
      {item.children?.length ? (
        <ul className="mb-1 ml-3 border-l border-line">
          {item.children.map((child) => (
            <li key={child.href}>
              <Link
                href={child.href}
                className="block px-3 py-1.5 text-[14px] text-ink-secondary hover:bg-surface-muted hover:text-primary"
                onClick={onNavigate}
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const drawerId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 h-16 border-b border-line bg-white md:h-[72px]">
      <div className="mx-auto flex h-full max-w-[1200px] items-center justify-between gap-4 px-5 md:px-8">
        <Link href="/" className="flex shrink-0 items-center" aria-label="BR Tech — accueil">
          <Image
            src="/logo/horizontal.svg"
            alt=""
            width={168}
            height={40}
            className="h-8 w-auto md:h-9"
            unoptimized
            priority
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Principale">
          {navigationRoutes.map((item) => (
            <DesktopItem key={item.href + item.label} item={item} />
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={cta.call.href}
            className="hidden items-center gap-2 text-[14px] font-medium text-ink hover:text-primary md:inline-flex"
          >
            <Phone className="size-4" strokeWidth={1.75} aria-hidden />
            {site.phoneDisplay}
          </a>
          <a
            href={cta.call.href}
            className="inline-flex size-10 items-center justify-center text-ink md:hidden"
            aria-label={`Appeler ${site.phoneDisplay}`}
          >
            <Phone className="size-[18px]" strokeWidth={1.75} />
          </a>
          <ButtonLink
            href={cta.primary.href}
            className="hidden h-10 px-4 sm:inline-flex md:h-12 md:px-6"
          >
            <span className="md:hidden">Devis</span>
            <span className="hidden md:inline">{cta.primary.label}</span>
          </ButtonLink>
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center lg:hidden"
            aria-expanded={open}
            aria-controls={drawerId}
            onClick={() => setOpen(true)}
          >
            <span className="sr-only">Ouvrir le menu</span>
            <Menu className="size-5" strokeWidth={1.75} />
          </button>
        </div>
      </div>

      {open ? (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-navy/40"
            aria-label="Fermer le menu"
            onClick={() => setOpen(false)}
          />
          <div
            id={drawerId}
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            className={cn(
              "absolute right-0 top-0 flex h-full w-[min(70vw,320px)] flex-col bg-white shadow-[0_8px_24px_rgba(27,49,71,0.08)]",
            )}
          >
            <div className="flex items-center justify-between border-b border-line px-4 py-3">
              <span className="text-[15px] font-medium text-navy">Menu</span>
              <button
                type="button"
                className="inline-flex size-10 items-center justify-center"
                onClick={() => setOpen(false)}
              >
                <span className="sr-only">Fermer</span>
                <X className="size-4" strokeWidth={1.75} />
              </button>
            </div>
            <nav className="flex flex-col gap-1 overflow-y-auto p-3">
              {navigationRoutes.map((item) => (
                <DrawerLinks
                  key={item.href + item.label}
                  item={item}
                  onNavigate={() => setOpen(false)}
                />
              ))}
            </nav>
          </div>
        </div>
      ) : null}
    </header>
  );
}
