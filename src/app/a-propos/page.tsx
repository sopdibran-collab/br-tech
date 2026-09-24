import type { Metadata } from "next";
import Image from "next/image";
import { about } from "@/content/about";
import { home } from "@/content/home";
import { pageMeta } from "@/lib/page-meta";
import { CtaBand } from "@/components/layout/CtaBand";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import roofOutletPhoto from "../../../assets/photos/sortie-toiture.jpg";

export const metadata: Metadata = pageMeta({
  title: about.title,
  description: about.description,
  path: about.path,
});

export default function AboutPage() {
  return (
    <>
      <div className="mx-auto grid max-w-[1200px] items-start gap-10 px-5 py-14 md:grid-cols-[minmax(0,40rem)_minmax(0,1fr)] md:gap-16 md:px-8 md:py-20">
        <article>
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "À propos" },
            ]}
          />
          <h1 className="mt-8 text-[32px] font-semibold text-navy md:text-[40px]">
            {about.title}
          </h1>
          <div className="mt-8 space-y-5 text-[16px] leading-relaxed text-ink-secondary md:text-[17px]">
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 48)}>{p}</p>
            ))}
          </div>
        </article>
        <Image
          src={roofOutletPhoto}
          alt={home.illustrations.roofOutlet.alt}
          sizes="(min-width: 768px) 38vw, 100vw"
          className="aspect-[3/2] w-full rounded-[4px] object-cover"
        />
      </div>
      <CtaBand title={about.band.title} text={about.band.text} />
    </>
  );
}
