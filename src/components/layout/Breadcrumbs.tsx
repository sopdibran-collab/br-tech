import Link from "next/link";

export type Crumb = {
  label: string;
  href?: string;
};

export function Breadcrumbs({ items }: { items: readonly Crumb[] }) {
  return (
    <nav aria-label="Fil d’Ariane" className="mb-6">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-2 text-[13px] text-ink-secondary">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              {index > 0 ? <span aria-hidden>/</span> : null}
              {isLast || !item.href ? (
                <span className="text-ink">{item.label}</span>
              ) : (
                <Link href={item.href} className="tap hover:text-primary">
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
