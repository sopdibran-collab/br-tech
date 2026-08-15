import type { ReactNode } from "react";

export function SchemaFigure({
  caption,
  children,
}: {
  caption: string;
  children: ReactNode;
}) {
  return (
    <figure className="mt-10 overflow-hidden border border-line bg-surface-muted">
      {children}
      <figcaption className="border-t border-line bg-white px-4 py-2.5 font-mono text-[11px] tracking-wide text-ink-muted md:px-5">
        {caption}
      </figcaption>
    </figure>
  );
}
