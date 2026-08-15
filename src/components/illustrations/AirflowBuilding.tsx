import { fontMono, ink } from "@/components/illustrations/palette";

export function AirflowBuilding() {
  return (
    <svg
      viewBox="0 0 800 400"
      fill="none"
      className="h-auto w-full"
      role="img"
      aria-labelledby="ill-airflow-title ill-airflow-desc"
    >
      <title id="ill-airflow-title">Coupe de bâtiment et flux d’air</title>
      <desc id="ill-airflow-desc">
        Réseau aéraulique en plafond, insufflation dans les locaux, extraction vers le caisson.
      </desc>
      <defs>
        <marker
          id="af-arr-in"
          markerWidth="7"
          markerHeight="7"
          refX="6"
          refY="3.5"
          orient="auto"
        >
          <path d="M1 1.2 6 3.5 1 5.8" stroke={ink.primary} strokeWidth="1.2" />
        </marker>
        <marker
          id="af-arr-ex"
          markerWidth="7"
          markerHeight="7"
          refX="6"
          refY="3.5"
          orient="auto"
        >
          <path d="M1 1.2 6 3.5 1 5.8" stroke={ink.navy} strokeWidth="1.2" />
        </marker>
      </defs>
      <rect width="800" height="400" fill={ink.snow} />
      <path d="M32 348h736" stroke={ink.line} strokeWidth="1.5" />

      <path
        d="M148 348V128L400 58l252 70v220"
        stroke={ink.navy}
        strokeWidth="1.75"
      />
      <path d="M148 128h504" stroke={ink.navy} strokeWidth="1.75" />
      <path d="M400 58V128" stroke={ink.navy} strokeWidth="1.5" />

      <rect
        x="168"
        y="138"
        width="464"
        height="22"
        fill={ink.mist}
        stroke={ink.navy}
        strokeWidth="1.25"
      />

      <rect x="176" y="188" width="132" height="160" fill={ink.white} stroke={ink.line} strokeWidth="1.25" />
      <rect x="334" y="188" width="132" height="160" fill={ink.white} stroke={ink.line} strokeWidth="1.25" />
      <rect x="492" y="188" width="132" height="160" fill={ink.white} stroke={ink.line} strokeWidth="1.25" />
      <path d="M308 188v160M466 188v160" stroke={ink.line} strokeWidth="1.25" />

      <rect
        x="372"
        y="86"
        width="56"
        height="42"
        rx="2"
        fill={ink.white}
        stroke={ink.navy}
        strokeWidth="1.5"
      />
      <path d="M384 100h32M384 112h32" stroke={ink.teal} strokeWidth="1.4" />

      <path d="M192 149h416" stroke={ink.primary} strokeWidth="2" />
      <path d="M242 149v39M400 149v39M558 149v39" stroke={ink.primary} strokeWidth="1.6" />
      <path d="M234 188h16M392 188h16M550 188h16" stroke={ink.primary} strokeWidth="2.25" />
      <path
        d="M250 200c6 26 8 54 6 88"
        stroke={ink.primary}
        strokeWidth="1.35"
        strokeDasharray="3 5"
        markerEnd="url(#af-arr-in)"
      />
      <path
        d="M408 200c4 28 6 52 4 88"
        stroke={ink.primary}
        strokeWidth="1.35"
        strokeDasharray="3 5"
        markerEnd="url(#af-arr-in)"
      />
      <path
        d="M566 200c-2 30 2 54 4 88"
        stroke={ink.primary}
        strokeWidth="1.35"
        strokeDasharray="3 5"
        markerEnd="url(#af-arr-in)"
      />

      <path d="M288 328v-52M446 328v-52M604 328v-52" stroke={ink.navy} strokeWidth="1.45" />
      <path
        d="M288 276h-48M446 276h-48"
        stroke={ink.navy}
        strokeWidth="1.35"
        markerEnd="url(#af-arr-ex)"
      />
      <path d="M240 276V149" stroke={ink.navy} strokeWidth="1.35" opacity="0.85" />

      <text x="400" y="78" textAnchor="middle" fill={ink.steel} fontSize="11" fontFamily={fontMono}>
        Caisson
      </text>
      <text x="242" y="376" textAnchor="middle" fill={ink.steel} fontSize="11" fontFamily={fontMono}>
        Locaux
      </text>
      <text x="64" y="36" fill={ink.primary} fontSize="11" fontFamily={fontMono}>
        Insufflation
      </text>
      <path d="M48 44h96" stroke={ink.primary} strokeWidth="1.6" />
      <text x="64" y="68" fill={ink.navy} fontSize="11" fontFamily={fontMono}>
        Extraction
      </text>
      <path d="M48 76h96" stroke={ink.navy} strokeWidth="1.6" />
    </svg>
  );
}
