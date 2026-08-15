import { fontMono, ink } from "@/components/illustrations/palette";

export function MaintenanceSchema() {
  return (
    <svg
      viewBox="0 0 800 400"
      fill="none"
      className="h-auto w-full"
      role="img"
      aria-labelledby="ill-maint-title ill-maint-desc"
    >
      <title id="ill-maint-title">Grille, filtre et débits</title>
      <desc id="ill-maint-desc">
        Bouche de ventilation, cassette filtrante et contrôle des débits — pas un nettoyage de locaux.
      </desc>
      <rect width="800" height="400" fill={ink.snow} />

      <circle cx="236" cy="196" r="122" fill={ink.white} stroke={ink.navy} strokeWidth="1.75" />
      <circle cx="236" cy="196" r="96" stroke={ink.line} strokeWidth="1.2" />
      <circle cx="236" cy="196" r="68" stroke={ink.line} strokeWidth="1.2" />
      <circle cx="236" cy="196" r="22" fill={ink.mist} stroke={ink.navy} strokeWidth="1.5" />
      <path
        d="M236 88v28M236 276v28M118 196h28M326 196h28M152 112l20 20M300 260l20 20M320 112l-20 20M172 260l-20 20"
        stroke={ink.navy}
        strokeWidth="1.45"
        strokeLinecap="round"
      />
      <path
        d="M236 128c30 16 48 40 54 68"
        stroke={ink.primary}
        strokeWidth="1.35"
        strokeDasharray="4 5"
      />
      <path
        d="M236 264c-30-16-48-40-54-68"
        stroke={ink.primary}
        strokeWidth="1.35"
        strokeDasharray="4 5"
      />

      <rect
        x="468"
        y="92"
        width="252"
        height="216"
        rx="3"
        fill={ink.white}
        stroke={ink.navy}
        strokeWidth="1.75"
      />
      <path
        d="M492 128h204M492 164h204M492 200h204M492 236h204M492 272h204"
        stroke={ink.line}
        strokeWidth="7"
        strokeLinecap="round"
      />
      <path d="M594 128v144" stroke={ink.primary} strokeWidth="1.5" />
      <path d="M594 272l-8-11M594 272l8-11" stroke={ink.primary} strokeWidth="1.5" />

      <text x="236" y="352" textAnchor="middle" fill={ink.steel} fontSize="12" fontFamily={fontMono}>
        Bouche
      </text>
      <text x="594" y="76" textAnchor="middle" fill={ink.steel} fontSize="12" fontFamily={fontMono}>
        Cassette filtrante
      </text>
      <text x="594" y="340" textAnchor="middle" fill={ink.navy} fontSize="11" fontFamily={fontMono}>
        Contrôle des débits
      </text>
    </svg>
  );
}
