import { fontMono, ink } from "@/components/illustrations/palette";

export function DepannageSchema() {
  return (
    <svg
      viewBox="0 0 800 400"
      fill="none"
      className="h-auto w-full"
      role="img"
      aria-labelledby="ill-dep-title ill-dep-desc"
    >
      <title id="ill-dep-title">Diagnostic d’un réseau d’air</title>
      <desc id="ill-dep-desc">
        Relevé sur une bouche et un caisson — identification avant réparation, sans délai annoncé.
      </desc>
      <rect width="800" height="400" fill={ink.snow} />

      <rect
        x="88"
        y="72"
        width="292"
        height="232"
        rx="3"
        fill={ink.white}
        stroke={ink.navy}
        strokeWidth="1.75"
      />
      <circle cx="234" cy="176" r="64" stroke={ink.navy} strokeWidth="1.5" />
      <circle cx="234" cy="176" r="40" stroke={ink.line} strokeWidth="1.2" />
      <circle cx="234" cy="176" r="12" fill={ink.mist} stroke={ink.navy} strokeWidth="1.35" />
      <path
        d="M234 124v16M234 212v16M182 176h16M270 176h16"
        stroke={ink.navy}
        strokeWidth="1.35"
      />
      <circle cx="278" cy="128" r="7" stroke={ink.primary} strokeWidth="1.5" />
      <path d="M278 122v6M278 128h.01" stroke={ink.primary} strokeWidth="1.5" />

      <path d="M448 96h264" stroke={ink.line} strokeWidth="1.25" />
      <path d="M448 96v200h264" stroke={ink.line} strokeWidth="1.25" />
      <path
        d="M480 140h196M480 176h148M480 212h108"
        stroke={ink.primary}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <rect
        x="480"
        y="248"
        width="88"
        height="28"
        fill={ink.white}
        stroke={ink.navy}
        strokeWidth="1.35"
      />
      <path d="M494 262h60" stroke={ink.navy} strokeWidth="1.35" />

      <text x="234" y="336" textAnchor="middle" fill={ink.steel} fontSize="12" fontFamily={fontMono}>
        Relevé
      </text>
      <text x="448" y="80" fill={ink.steel} fontSize="12" fontFamily={fontMono}>
        Mesures / observations
      </text>
      <text x="448" y="368" fill={ink.navy} fontSize="11" fontFamily={fontMono}>
        Puis réparation ou préconisation
      </text>
    </svg>
  );
}
