import type { Metadata } from "next";
import { privacy } from "@/content/legal";
import { pageMeta } from "@/lib/page-meta";

export const metadata: Metadata = pageMeta({
  title: privacy.title,
  description: privacy.description,
  path: privacy.path,
});

export default function ConfidentialitePage() {
  return (
    <article className="mx-auto max-w-[720px] px-5 py-14 md:px-8 md:py-20">
      <h1 className="text-[32px] font-semibold text-navy">{privacy.title}</h1>
      <div className="mt-8 space-y-4 text-[16px] text-ink-secondary">
        {privacy.paragraphs.map((p) => (
          <p key={p.slice(0, 40)}>{p}</p>
        ))}
      </div>
    </article>
  );
}
