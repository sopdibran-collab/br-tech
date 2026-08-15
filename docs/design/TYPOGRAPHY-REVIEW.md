# Revue typographie — décision

**Statut :** recommandation verrouillable  
**Source prioritaire :** fiche vault `04 Clients/BR Tech Sàrl/00 - BR Tech Sàrl.md` (MAJ 2026-08-12)  
**Règle vault :** *Si la fiche client impose déjà des fonts → elles gagnent.* (`05 - Typography`)

---

## Verdict

| Rôle | Police | Pourquoi |
|------|--------|----------|
| **Titres (display / H1–H3)** | **Outfit** (Google Fonts) | Imposée fiche client · géométrique moderne · distinctive vs Inter · listée vault corps/titres OK |
| **Corps / UI / nav / forms** | **IBM Plex Sans** | Imposée fiche client · technique / IBM / suisse-crédible · excellente lisibilité (Google Knowledge : taille + leading) |
| **Specs / chiffres (option)** | **IBM Plex Mono** | Brand Book — codes, données, étapes « 01 » |

**Pas** Inter · Roboto · Open Sans · system-ui · Fontshare générique.

Fallbacks fiche si Plex indispo : DM Sans / Manrope — **ne pas** les préférer à Plex tant que Plex est dispo.

---

## Pourquoi c’est la meilleure pour BR Tech

1. **Fiche client vault (12 août)** = source de vérité identité — déjà `Outfit` + `IBM Plex Sans`
2. **Anti-template IA** — Outfit ≠ Inter ; paire 2 familles = signal marque
3. **B2B ventilation CH** — Plex = précision technique ; Outfit = titres nets sans serif « luxe crème » (éviter Void Warm Cream / Playfair ici)
4. **Google Fonts Readability** — Plex corps aéré + Outfit display ; éviter tracking ultra-serré sur H1 ; body ≥ 16–17 px ; line-height généreux
5. **Mockups / Figma** — Figma était full Plex ; on **upgrade titres → Outfit** pour coller à la fiche vault (plus expressif, moins template)

---

## Specs de départ (à peaufiner en design)

| Token | Font | Size desktop | Notes |
|-------|------|--------------|-------|
| Display / H1 | Outfit SemiBold–Bold | 48–56 | Tracking léger (−1 à −2 %), pas crowding |
| H2 | Outfit SemiBold | 28–32 | |
| H3–H4 | Outfit Medium | 20–24 | |
| Body | IBM Plex Sans Regular | 16–17 | Line-height ~1.5–1.6 |
| Label / Button | IBM Plex Sans Medium | 14–15 | |
| Mono | IBM Plex Mono Medium | 14–16 | Specs only |

Chargement : `next/font` · subset latin · 2–3 graisses max par famille · `display: swap`.

---

## Alignement Brand Book

Le Brand Book v1.0 disait « IBM Plex everywhere ».  
**Mise à jour proposée :** titres → Outfit ; corps/UI → IBM Plex Sans (conforme fiche vault).

---

## Checklist lock

- [ ] Client / toi valides **Outfit + IBM Plex Sans**
- [ ] Maj Brand Book § Typographies
- [ ] Maj Figma text styles
- [ ] Specimens lisibilité (corps + H1) selon PDF Google Knowledge
- [ ] Puis Phase 3 / tokens CSS
