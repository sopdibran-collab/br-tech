import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export const brandIconNames = [
  "flow",
  "doubleFlux",
  "wrench",
  "filter",
  "building",
  "clipboard",
  "pin",
  "energy",
] as const;

export type BrandIconName = (typeof brandIconNames)[number];

/**
 * Line icons 24×24 — Brand Book §16.
 * Stroke 1.75, round caps, currentColor. Optical grid, not Lucide clones.
 */
const paths: Record<BrandIconName, ReactNode> = {
  flow: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="1.5" />
      <path d="M12 4.75v2.75M12 16.5v2.75M4.75 12h2.75M16.5 12h2.75" />
      <path d="M6.7 6.7 8.7 8.7M15.3 15.3l2 2M17.3 6.7 15.3 8.7M8.7 15.3l-2 2" />
    </>
  ),
  doubleFlux: (
    <>
      <rect x="4" y="4.5" width="16" height="15" rx="1.25" />
      <path d="M8.5 8.25v7.5" />
      <path d="M7.4 14.15 8.5 15.75 9.6 14.15" />
      <path d="M15.5 15.75V8.25" />
      <path d="M14.4 9.85 15.5 8.25 16.6 9.85" />
    </>
  ),
  wrench: (
    <>
      <path d="M14.2 5.15a3.4 3.4 0 0 1 4.65 4.65L16.7 9.75l-2.45-2.45z" />
      <path d="M8.35 16.35 15.85 8.85" />
      <path d="M5.2 18.55 8.35 16.4l1.95 1.95-2.2 2.2a1.4 1.4 0 0 1-1.98 0l-.72-.72a1.4 1.4 0 0 1 0-1.98z" />
    </>
  ),
  filter: (
    <>
      <rect x="6.25" y="3.75" width="11.5" height="16.5" rx="1.15" />
      <path d="M8.5 7.5h7M8.5 10.5h7M8.5 13.5h7M8.5 16.5h7" />
      <path d="M12 7.5v9" />
    </>
  ),
  building: (
    <>
      <path d="M4.5 20.25V8.35L12 3.6l7.5 4.75v11.9" />
      <path d="M9.5 20.25v-5h5v5" />
      <path d="M8 10h2v2H8zM14 10h2v2h-2zM8 14h2v1.75H8zM14 14h2v1.75h-2z" />
    </>
  ),
  clipboard: (
    <>
      <rect x="6.25" y="5.5" width="11.5" height="14.75" rx="1.15" />
      <rect x="9" y="3.5" width="6" height="3.25" rx="0.7" />
      <path d="M9 11h6M9 14.25h6M9 17.5h3.5" />
    </>
  ),
  pin: (
    <>
      <path d="M12 20.75s5.75-5.6 5.75-9.65a5.75 5.75 0 1 0-11.5 0c0 4.05 5.75 9.65 5.75 9.65z" />
      <circle cx="12" cy="10.85" r="1.7" />
    </>
  ),
  energy: (
    <>
      <path d="M12 3.75c3.35 3.2 4.15 7.45 0 16.5-4.15-9.05-3.35-13.3 0-16.5z" />
      <path d="M12 7.25v9.5" />
    </>
  ),
};

type BrandIconProps = {
  name: BrandIconName;
  className?: string;
  title?: string;
};

export function BrandIcon({ name, className, title }: BrandIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("size-5 shrink-0", className)}
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
    >
      {title ? <title>{title}</title> : null}
      {paths[name]}
    </svg>
  );
}
