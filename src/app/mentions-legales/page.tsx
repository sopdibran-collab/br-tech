import type { Metadata } from "next";
import { mentions } from "@/content/legal";
import { pageMeta } from "@/lib/page-meta";

export const metadata: Metadata = pageMeta({
  title: mentions.title,
  description: mentions.description,
  path: mentions.path,
});

export default function MentionsPage() {
  return (
    <article className="mx-auto max-w-[720px] px-5 py-14 md:px-8 md:py-20">
      <h1 className="text-[32px] font-semibold text-navy">{mentions.title}</h1>
      <div className="mt-8 space-y-4 text-[16px] text-ink-secondary">
        {mentions.paragraphs.map((p) => (
          <p key={p.slice(0, 40)}>{p}</p>
        ))}
      </div>
    </article>
  );
}
