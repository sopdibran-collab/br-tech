import Image, { type StaticImageData } from "next/image";
import { Breadcrumbs, type Crumb } from "@/components/layout/Breadcrumbs";

export function PageHero({
  image,
  alt,
  crumbs,
  title,
  lead,
  objectPosition = "center",
}: {
  image: StaticImageData;
  alt: string;
  crumbs: readonly Crumb[];
  title: string;
  lead?: string;
  objectPosition?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-white md:min-h-[28rem] lg:min-h-[32rem]">
      <div className="relative aspect-[16/10] md:absolute md:inset-0 md:aspect-auto">
        <Image
          src={image}
          alt={alt}
          fill
          priority
          placeholder="blur"
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition }}
        />
      </div>
      <div className="relative z-10 mx-auto max-w-[1200px] md:flex md:min-h-[28rem] md:items-center md:px-8 md:py-16 lg:min-h-[32rem]">
        <div className="hero-panel px-5 py-8">
          <Breadcrumbs items={crumbs} />
          <h1 className="font-display text-[32px] font-semibold tracking-tight text-[#1B3147] md:text-[40px]">
            {title}
          </h1>
          {lead ? (
            <p className="mt-3 text-[17px] text-ink">{lead}</p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
