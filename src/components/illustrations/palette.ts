/** Brand tokens as CSS vars — stay aligned with globals.css / Brand Book. */
export const ink = {
  navy: "var(--brt-navy)",
  primary: "var(--brt-primary)",
  steel: "var(--brt-ink-secondary)",
  muted: "var(--brt-ink-muted)",
  line: "var(--brt-line)",
  mist: "var(--brt-surface-muted)",
  snow: "var(--brt-surface-page)",
  white: "var(--brt-surface)",
  teal: "var(--brt-success)",
} as const;

export const fontMono =
  "var(--font-ibm-plex-mono), ui-monospace, monospace";
