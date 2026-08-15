import { fontMono, ink } from "@/components/illustrations/palette";

export function DoubleFluxSchema() {
  return (
    <svg
      viewBox="0 0 800 400"
      fill="none"
      className="h-auto w-full"
      role="img"
      aria-labelledby="ill-df-title ill-df-desc"
    >
      <title id="ill-df-title">Schéma VMC double flux</title>
      <desc id="ill-df-desc">
        Air neuf insufflé et air extrait, avec récupération de chaleur dans le caisson.
      </desc>
      <defs>
        <marker id="df-arr-in" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
          <path d="M1 1.2 6 3.5 1 5.8" stroke={ink.primary} strokeWidth="1.2" />
        </marker>
        <marker id="df-arr-ex" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
          <path d="M1 1.2 6 3.5 1 5.8" stroke={ink.navy} strokeWidth="1.2" />
        </marker>
      </defs>
      <rect width="800" height="400" fill={ink.snow} />

      <rect x="40" y="52" width="228" height="296" fill={ink.mist} stroke={ink.line} strokeWidth="1.25" />
      <rect x="532" y="52" width="228" height="296" fill={ink.white} stroke={ink.line} strokeWidth="1.25" />

      <rect
        x="292"
        y="108"
        width="216"
        height="184"
        rx="3"
        fill={ink.white}
        stroke={ink.navy}
        strokeWidth="1.75"
      />
      <path d="M324 148h152M324 252h152" stroke={ink.line} strokeWidth="1.2" />
      <path d="M340 164 460 236M460 164 340 236" stroke={ink.teal} strokeWidth="1.85" />

      <path
        d="M88 92h204v52"
        stroke={ink.primary}
        strokeWidth="2"
        markerEnd="url(#df-arr-in)"
      />
      <path
        d="M508 148h36V92h140"
        stroke={ink.primary}
        strokeWidth="2"
        markerEnd="url(#df-arr-in)"
      />
      <path d="M676 92v40" stroke={ink.primary} strokeWidth="2" />

      <path
        d="M676 276v28H508v-52"
        stroke={ink.navy}
        strokeWidth="2"
        markerEnd="url(#df-arr-ex)"
      />
      <path
        d="M292 252h-20v52H88"
        stroke={ink.navy}
        strokeWidth="2"
        markerEnd="url(#df-arr-ex)"
      />

      <text x="154" y="38" textAnchor="middle" fill={ink.steel} fontSize="12" fontFamily={fontMono}>
        Extérieur
      </text>
      <text x="646" y="38" textAnchor="middle" fill={ink.steel} fontSize="12" fontFamily={fontMono}>
        Intérieur
      </text>
      <text x="400" y="96" textAnchor="middle" fill={ink.navy} fontSize="12" fontFamily={fontMono}>
        Caisson / échangeur
      </text>
      <text x="154" y="80" textAnchor="middle" fill={ink.primary} fontSize="11" fontFamily={fontMono}>
        Air neuf
      </text>
      <text x="646" y="80" textAnchor="middle" fill={ink.primary} fontSize="11" fontFamily={fontMono}>
        Insufflation
      </text>
      <text x="646" y="328" textAnchor="middle" fill={ink.navy} fontSize="11" fontFamily={fontMono}>
        Air extrait
      </text>
      <text x="154" y="328" textAnchor="middle" fill={ink.navy} fontSize="11" fontFamily={fontMono}>
        Rejet
      </text>
      <text x="400" y="210" textAnchor="middle" fill={ink.teal} fontSize="11" fontFamily={fontMono}>
        Récupération
      </text>
      <text x="400" y="380" textAnchor="middle" fill={ink.steel} fontSize="11" fontFamily={fontMono}>
        Simple flux : extraction seule — pas d’échangeur
      </text>
    </svg>
  );
}
