"use client";

import { useState } from "react";

export function MapEmbed({
  src,
  title,
  linkHref,
  address,
}: {
  src: string;
  title: string;
  linkHref: string;
  address: string;
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <figure className="mt-6">
      <div className="overflow-hidden rounded-[4px] border border-line bg-white">
        {loaded ? (
          <iframe
            src={src}
            title={title}
            className="block h-[400px] w-full border-0"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <div className="flex h-[400px] flex-col items-center justify-center gap-4 bg-surface-muted px-6 text-center">
            <p className="max-w-[28ch] text-[15px] text-ink-secondary">{address}</p>
            <button
              type="button"
              onClick={() => setLoaded(true)}
              className="inline-flex h-12 items-center justify-center rounded-[4px] bg-primary px-6 text-[15px] font-medium text-white hover:bg-primary-hover"
            >
              Afficher la carte
            </button>
          </div>
        )}
      </div>
      <figcaption className="mt-3 text-[14px]">
        <a
          href={linkHref}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          Ouvrir dans Google Maps
          <span className="sr-only"> (nouvel onglet)</span>
        </a>
      </figcaption>
    </figure>
  );
}
