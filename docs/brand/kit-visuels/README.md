# Kit visuels — BR Tech Sàrl

**Usage :** générer des images alignées sur le site, des vêtements Alpe Workwear, et des stickers fourgon.  
**Signature :** L’air, maîtrisé.  
**Baseline SEO :** Spécialistes ventilation · Suisse romande  
**NAP :** Rue de Lausanne 49g, 1020 Renens VD · +41 79 176 38 19 · info@brtech.ch

Dossier logos : `logos/`  
Prompts prêts à coller : `prompts/`

---

## 1. Palette (web = référence)

| Token | HEX | RGB | Usage |
|---|---|---|---|
| Primary Blue | `#0E4A8C` | 14, 74, 140 | CTA, liens, accents UI, broderie dominante |
| Blue Light | `#3D8BC7` | 61, 139, 199 | **Logo uniquement** (gradient) — pas en déco web |
| Navy | `#1B3147` | 27, 49, 71 | Titres, footer, textiles foncés, fond fourgon sombre |
| Graphite | `#2A2F36` | 42, 47, 54 | Texte principal |
| Steel | `#5C6670` | 92, 102, 112 | Texte secondaire |
| Mist | `#E8EEF3` | 232, 238, 243 | Fonds de section |
| Snow | `#F7F9FB` | 247, 249, 251 | Fond page |
| White | `#FFFFFF` | 255, 255, 255 | Cartes, polos clairs |
| Line | `#C9D3DC` | 201, 211, 220 | Filets, bordures |
| Teal (≤5 %) | `#1F7A6C` | 31, 122, 108 | « Conforme », pastilles, détail broderie |

### Interdits
Orange / jaune chantier · rouge agressif · violet SaaS · vert fluo · dégradés décoratifs hors logo · glow · 3D flashy

---

## 2. Typo

| Rôle | Police |
|---|---|
| UI / titres / corps (site) | **IBM Plex Sans** (+ Outfit display selon Phase 2.1 site) |
| Specs / chiffres | **IBM Plex Mono** |
| Broderie textile | IBM Plex Sans Medium / SemiBold — ou logo brodé (préférer logo) |

---

## 3. Logos — quelle variante ?

| Besoin | Fichier |
|---|---|
| Fond clair (mockup site, print) | `logos/BR-Tech_Logo_Primary.svg` ou `…_Horizontal.svg` |
| Header / bandeau long | `logos/BR-Tech_Logo_Horizontal.svg` |
| Fond Navy / sombre | `logos/BR-Tech_Logo_Inverse.svg` ou `…_Mono-Blanc.svg` |
| Broderie / gravure | `logos/BR-Tech_Logo_Mono-Noir.svg` ou Mono-Blanc |
| Petit (avatar, patch) | `logos/BR-Tech_Logo_Submark.png` ou `BR-Tech_Icon_Helix.svg` |
| Favicon | `logos/BR-Tech_Favicon.png` |
| Planche complète | `logos/BR-Tech_Logo_Planche-declinaisons.png` |

**Zone de sécurité :** hauteur de la lettre « B » autour du logo.  
**Taille mini :** ≥ 120 px large (écran) · ≥ 25 mm (print) · broderie icône ≥ 10 mm.

---

## 4. Identité visuelle WEB (génération d’images)

### Mood
Air froid du Léman · aluminium brossé · béton clair · conduits alignés · silence technique · beaucoup de blanc · précision suisse.

### Photo / rendu
Réel, net, calme. Lumière froide légère. Pas de stock « ouvrier casque orange pouce levé ». Détails : gaines, grilles, joints, mesure, tablette.

### À générer (priorité site)
1. Hero chantier (install propre, intérieur romand)  
2. Détail conduit / grille alignée  
3. Mains gants propres au travail (pas de visage stock)  
4. Open Graph 1200×630 : logo + signature sur fond Snow/Navy

Voir `prompts/01-web.md`.

---

## 5. Identité VÊTEMENTS (via Alpe Workwear)

Objectif : tenue pro BR Tech, fabriquée / personnalisée chez **Alpe Workwear**, cohérente avec le site (pas look BTP orange).

### Palette textile
| Pièce | Fond | Marquage |
|---|---|---|
| Polo / softshell | Navy `#1B3147` ou Graphite | Logo Mono-Blanc poitrine G |
| Polo clair | White / Mist | Logo Primary ou Mono-Noir |
| Softshell chantier | Navy | Logo Mono-Blanc + baseline dos discret (option) |
| Casque | Blanc | Sticker Mono-Noir face |
| Badge nominatif | Navy / blanc | Texte Plex, petit |

### Règles
- Broderie ou transfert propre, logo ≤ 8–10 cm poitrine  
- Dos : logo max 18–22 cm **ou** baseline seule « Spécialistes ventilation · Suisse romande » — pas les deux géants  
- Interdit : fluo, slogans tape-à-l’œil, logos plein dos cartoon  
- Coupe : pro B2B, pas streetwear

### Pack Alpe à commander (proposition)
1. Polo Navy + broderie Mono-Blanc  
2. Softshell Navy + logo Mono-Blanc  
3. Tee technique Graphite (option équipe)  
4. Casquette Navy / blanc + helix  
5. Pack nominatif (prénom + BR Tech)

Voir `prompts/02-vetements-alpe.md`.

---

## 6. Stickers FOURGON

### Concept A — Portes avant (recommandé)
- Fond : blanc / gris clair utilitaire  
- Logo Horizontal Primary (portes)  
- Sous le logo, Steel : `+41 79 176 38 19` · `brtech.ch`  
- Baseline option : Spécialistes ventilation · Suisse romande

### Concept B — Bande basse « Flux »
- Bande Navy fine bas de caisse + liseré Primary  
- Motif flux discret (lignes courbes opacité basse) — Brand Book §20  
- Logo Mono-Blanc dans la bande

### Concept C — Panneau latéral
- Rectangle blanc + filet Line  
- Logo Primary + « L’air, maîtrisé. »  
- QR vers brtech.ch/contact (quand live)

### Formats stickers (proposés)
| Nom | Taille approx. | Support |
|---|---|---|
| Logo portes | 40–50 cm large | Vinyle brillant / mat |
| Téléphone porte | 25–30 cm | Vinyle |
| Banner latéral | 80–120 × 30–40 cm | Vinyle |
| Magnum helix | 15–20 cm | Coin vitre / outil |
| Interdit | Full wrap criard, orange chantier, slogans géants |

Voir `prompts/03-fourgon.md`.

---

## 7. Checklist génération IA

Avant d’accepter un rendu :
- [ ] Couleurs dans la palette (pas d’orange)  
- [ ] Logo non déformé, zone de sécurité OK  
- [ ] Pas de faux chiffres / faux avis dans l’image  
- [ ] Ton calme (pas « meilleur de Suisse »)  
- [ ] Texte lisible si numéro / URL présents

© BR Tech Sàrl — kit dérivé du Brand Book v1.0
