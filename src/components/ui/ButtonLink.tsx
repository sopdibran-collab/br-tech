import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "inverse";
  className?: string;
};

const variants = {
  primary:
    "bg-primary text-white hover:bg-primary-hover border border-transparent",
  secondary:
    "bg-white text-primary border border-primary hover:bg-primary-subtle",
  ghost: "bg-transparent text-ink border border-transparent hover:text-primary",
  inverse:
    "bg-transparent text-white border border-white/70 hover:bg-white hover:text-navy",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
}: ButtonLinkProps) {
  const isExternal = href.startsWith("tel:") || href.startsWith("mailto:");
  const classes = cn(
    "inline-flex h-12 items-center justify-center px-6 text-[15px] font-medium tracking-wide transition-colors duration-[180ms]",
    "rounded-[4px] no-underline",
    variants[variant],
    className,
  );

  if (isExternal) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
