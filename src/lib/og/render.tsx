import { readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { ImageResponse } from "next/og";
import { site, socialMeta } from "@/config/site";

const ogDir = dirname(fileURLToPath(import.meta.url));

export const ogSize = { width: 1200, height: 630 } as const;
export const ogContentType = "image/png";

function loadAsset(file: string) {
  return readFile(join(ogDir, file));
}

function toDataUri(data: Buffer, mime: string) {
  return `data:${mime};base64,${data.toString("base64")}`;
}

/**
 * Carte 1200×630 — Snow, filet Primary, logo horizontal, signature.
 * Polices : Outfit (titres) · IBM Plex Sans · IBM Plex Mono. Pas de dégradé UI.
 */
export async function renderOgImage() {
  const [outfit, sans, mono, logo] = await Promise.all([
    loadAsset("./fonts/Outfit-SemiBold.woff"),
    loadAsset("./fonts/IBMPlexSans-Regular.woff"),
    loadAsset("./fonts/IBMPlexMono-Medium.woff"),
    loadAsset("./logo-horizontal.png"),
  ]);

  const zone = site.serviceZone.cantons.join(" · ");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#F7F9FB",
          color: "#1B3147",
        }}
      >
        <div style={{ width: 10, height: "100%", background: "#0E4A8C" }} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            flex: 1,
            height: "100%",
            padding: "60px 72px 48px 62px",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={toDataUri(logo, "image/png")}
            width={336}
            height={69}
            alt=""
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontFamily: "Outfit",
                fontSize: 78,
                fontWeight: 600,
                letterSpacing: "-0.8px",
                lineHeight: 1.05,
                color: "#1B3147",
              }}
            >
              {site.signature}
            </div>
            <div
              style={{
                marginTop: 18,
                fontFamily: "IBM Plex Sans",
                fontSize: 30,
                fontWeight: 400,
                lineHeight: 1.35,
                color: "#2A2F36",
              }}
            >
              {socialMeta.cardLead}
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                height: 1,
                width: "100%",
                background: "#C9D3DC",
              }}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 20,
                fontFamily: "IBM Plex Mono",
                fontSize: 18,
                fontWeight: 500,
                color: "#5C6670",
              }}
            >
              <span>
                {site.address.city} ({site.address.region})
              </span>
              <span>{site.domain}</span>
            </div>
            <div
              style={{
                marginTop: 8,
                fontFamily: "IBM Plex Mono",
                fontSize: 16,
                fontWeight: 500,
                color: "#5C6670",
              }}
            >
              {zone}
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: "Outfit", data: outfit, weight: 600, style: "normal" },
        { name: "IBM Plex Sans", data: sans, weight: 400, style: "normal" },
        { name: "IBM Plex Mono", data: mono, weight: 500, style: "normal" },
      ],
    },
  );
}
