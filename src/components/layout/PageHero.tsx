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
    <section className="relative min-h-[22rem] overflow-hidden bg-surface-page md:min-h-[28rem] lg:min-h-[32rem]">
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
      <div className="page-hero-veil absolute inset-0" aria-hidden />
      <div className="relative z-10 mx-auto flex min-h-[22rem] max-w-[1200px] flex-col justify-center px-5 py-10 md:min-h-[28rem] md:px-8 md:py-16 lg:min-h-[32rem]">
        <div className="max-w-[34rem]">
          <Breadcrumbs items={crumbs} />
          <h1 className="font-display text-[32px] font-semibold tracking-tight text-navy md:text-[40px]">
            {title}
          </h1>
          {lead ? (
            <p className="mt-3 max-w-[42ch] text-[16px] text-ink md:text-[17px]">{lead}</p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
