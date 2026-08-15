# 01 — Identité & marque — BR Tech Sàrl

Source : Brand Book v1.0 (`docs/brand/BR-TECH-BRAND-BOOK.md`) + fiche vault.  
Miroir — **Obsidian gagne** si divergence.

## Couleurs

### Principales
| Nom | Hex | Usage |
|-----|-----|-------|
| Primary / CTA | `#0E4A8C` | Boutons, liens forts, header |
| Navy | `#1B3147` | Footer, « TECH SÀRL », titres secondaires |
| Graphite | `#2A2F36` | Texte principal |
| Snow | `#F7F9FB` | Fond page |
| White | `#FFFFFF` | Cartes, header |

### Secondaires / accents
| Nom | Hex | Usage |
|-----|-----|-------|
| Blue Light | `#3D8BC7` | **Logo uniquement** — pas de dégradés UI |
| Steel | `#5C6670` | Texte secondaire |
| Mist | `#E8EEF3` | Fonds de section |
| Line | `#C9D3DC` | Filets, bordures |
| Precision Teal | `#1F7A6C` | Succès / « conforme » ≤ 5 % |

### Variables CSS (synchroniser avec le code Phase 3)
```css
:root {
  --color-primary: #0e4a8c;
  --color-primary-hover: #0a3a70;
  --color-navy: #1b3147;
  --color-ink: #2a2f36;
  --color-ink-secondary: #5c6670;
  --color-line: #c9d3dc;
  --color-surface: #ffffff;
  --color-surface-page: #f7f9fb;
  --color-surface-muted: #e8eef3;
  --color-success: #1f7a6c;
  --font-display: 'Outfit', system-ui, sans-serif;
  --font-sans: 'IBM Plex Sans', system-ui, sans-serif;
  --font-mono: 'IBM Plex Mono', ui-monospace, monospace;
}
```

## Typographie

| Élément | Police | Fallback | Graisses |
|---------|--------|----------|----------|
| Titres / display | Outfit (Google Fonts) | system-ui | 600–700 |
| Corps / UI | IBM Plex Sans | system-ui | 400–500 |
| Specs / chiffres | IBM Plex Mono | ui-monospace | 400 |

**À confirmer avant Phase 3** : `docs/design/TYPOGRAPHY-REVIEW.md` est encore ouvert. Fiche vault = Outfit + Plex. Brand Book historique = Plex seul. Google Fonts only — pas Fontshare / Inter identité.

## Logo

| Variante | Fichier | Usage |
|----------|---------|-------|
| Horizontal | `assets/logo/responsive/BR-Tech_Logo_Horizontal.svg` | Header desktop |
| Vertical / primary | `assets/logo/principale/BR-Tech_Logo_Primary.svg` | Docs, carrés sociaux |
| Submark | `assets/logo/submark/BR-Tech_Logo_Submark.svg` | Espaces étroits |
| Icon hélice | `assets/logo/icon/BR-Tech_Icon_Helix.svg` | Favicon / bullets |
| Mono noir | `assets/logo/monochrome-noir/` | Impression |
| Inversé / blanc | `assets/logo/couleur-inversee/` ou `monochrome-blanc/` | Fond sombre / footer |

Index : `assets/logo/README.md`  
Source Affinity : `WEBDEV/Variantes logos/BR Tech Sàrl/`  
Figma : https://www.figma.com/design/tgdNkuqg78irYGVcXPceOX

## Voix & ton

- **Ton** : calme, précis, technique traduit, autorité sans arrogance
- **Vouvoiement / tutoiement** : vouvoiement
- **Slogan / baseline** : L’air, maîtrisé. · SEO : Spécialistes ventilation · Suisse romande
- **À privilégier** : maîtriser, mesurer, installer, maintenir, conformer, documenter, planifier
- **À éviter** : meilleur, révolutionnaire, imbattable, miracle, low-cost, « #1 », points d’exclamation multiples

## UI

- Style : minimalisme technique suisse, blanc ≥ 70 %, filets plutôt que cards ombrées
- Rayons : 2–4 px (max 6 px images) — pas de pills
- Espacement sections : 96 / 80 / 64 / 56 px (desktop → mobile)
- Hero : still-life conceptuel (bouche + plume), champ Mist — **pas** de photo chantier en 1er viewport. Photos réelles = réalisations.
