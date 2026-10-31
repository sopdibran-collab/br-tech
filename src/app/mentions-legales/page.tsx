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
      <section className="mt-10">
        <h2 className="text-[20px] font-semibold text-navy">{mentions.credit.heading}</h2>
        <p className="mt-4 text-[16px] text-ink-secondary">
          {mentions.credit.label}{" "}
          <a
            href={mentions.credit.href}
            target="_blank"
            rel="noopener"
            className="underline underline-offset-2 hover:text-navy"
          >
            {mentions.credit.name}
          </a>
        </p>
      </section>
    </article>
  );
}
