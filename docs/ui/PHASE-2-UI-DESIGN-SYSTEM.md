# BR TECH SÀRL — PHASE 2 · UI DESIGN + DESIGN SYSTEM
### Site internet · Ventilation · Suisse romande
**Statut : EN ATTENTE DE VALIDATION**  
**Base :** Phase 1 UX Strategy validée · Brand Book v1.0  
**Interdit jusqu’à validation : Développement (Phase 3)**

---

# 0. PRINCIPES UI

1. **Blanc ≥ 70 %** de l’interface  
2. **Minimalisme technique** — aucun effet de mode  
3. **Intemporalité 10 ans** — aplats, filets, typo stable  
4. **Confiance > séduction** — zéro gadget  
5. **Cohérence totale** — tout composant dérive de tokens  
6. **WCAG 2.2 AA** dès le Design System  

Inspirations calibrées : Apple (respiration) · Swiss / Rolex (calme) · Hälg/Burkhalter (institutionnel B2B) · Material 3 (états, pas esthétique Google)

---

# 1. FONDEMENTS — DESIGN TOKENS

## 1.1 Couleur

### Brand
| Token | HEX | Usage |
|---|---|---|
| `color.brand.primary` | `#0E4A8C` | CTA, liens forts, accents UI |
| `color.brand.primary-hover` | `#0A3A70` | Hover CTA |
| `color.brand.primary-active` | `#08305C` | Pressed |
| `color.brand.primary-subtle` | `#E8F1F8` | Fonds tintés légers |
| `color.brand.light` | `#3D8BC7` | **Logo uniquement** |
| `color.brand.navy` | `#1B3147` | Titres secondaires, footer |

### Neutrals
| Token | HEX | Usage |
|---|---|---|
| `color.ink` | `#2A2F36` | Texte principal |
| `color.ink-secondary` | `#5C6670` | Texte secondaire |
| `color.ink-muted` | `#8A949E` | Placeholders, meta |
| `color.line` | `#C9D3DC` | Bordures, filets |
| `color.line-strong` | `#A8B4C0` | Inputs focus ring outer |
| `color.surface` | `#FFFFFF` | Cards, header, inputs |
| `color.surface-page` | `#F7F9FB` | Fond page (Snow) |
| `color.surface-muted` | `#E8EEF3` | Sections alternées (Mist) |
| `color.surface-overlay` | `rgba(255,255,255,0.85)` | Header blur |

### Semantic (restreint)
| Token | HEX | Usage |
|---|---|---|
| `color.success` | `#1F7A6C` | Succès, « conforme » |
| `color.success-subtle` | `#E6F4F1` | Alert success bg |
| `color.warning` | `#8A6A2F` | Attention (jamais jaune fluo) |
| `color.warning-subtle` | `#F7F1E6` | Alert warning bg |
| `color.danger` | `#8B2E2E` | Erreurs formulaire |
| `color.danger-subtle` | `#F8ECEC` | Alert/error bg |
| `color.focus` | `#0E4A8C` | Focus ring |

### Règles
- Pas de dégradés hors logo  
- Pas de violet / orange / glow  
- Texte sur fond : contraste ≥ 4.5:1 (corps) / 3:1 (large)  

### Surfaces de page (rythme)
| Section | Fond |
|---|---|
| Header | `surface` + blur |
| Hero | `surface` |
| Trust band | `surface-muted` |
| Pourquoi | `surface` |
| Expertise | `surface-page` |
| Réalisations | `surface` |
| Méthode | `surface-page` |
| Chiffres | `brand.navy` texte blanc **OU** `surface-muted` si sobriété max |
| FAQ | `surface` |
| Contact | `surface-page` |
| Footer | `brand.navy` |

**Recommandation chiffres :** fond `surface-muted`, ink foncé (plus intemporel que navy plein). Option navy validable.

---

## 1.2 Typographie

### Familles
| Rôle | Police | Fallback |
|---|---|---|
| UI / titres / corps | **IBM Plex Sans** | system-ui, sans-serif |
| Specs / chiffres / codes | **IBM Plex Mono** | ui-monospace, monospace |

### Scale (Desktop → Mobile)

| Token | Desktop | Laptop | Tablet | Mobile | Weight | Line-height | Letter-spacing |
|---|---|---|---|---|---|---|---|
| `display` | 56px | 48px | 40px | 36px | 600 | 1.12 | -0.02em |
| `h1` | 48px | 40px | 36px | 32px | 600 | 1.15 | -0.01em |
| `h2` | 32px | 28px | 28px | 24px | 600 | 1.2 | 0 |
| `h3` | 24px | 22px | 22px | 20px | 550 | 1.25 | 0 |
| `h4` | 20px | 18px | 18px | 18px | 550 | 1.3 | 0 |
| `body-lg` | 18px | 18px | 17px | 17px | 400 | 1.6 | 0 |
| `body` | 17px | 16px | 16px | 16px | 400 | 1.6 | 0 |
| `body-sm` | 14px | 14px | 14px | 14px | 400 | 1.5 | 0 |
| `label` | 14px | 14px | 13px | 13px | 500 | 1.4 | 0.01em |
| `micro` | 12px | 12px | 12px | 12px | 500 | 1.4 | 0.02em |
| `button` | 15px | 15px | 15px | 15px | 500 | 1 | 0.01em |

### Hero H1 spécifique
Utilise `display` : **L'air, maîtrisé.**

---

## 1.3 Grid & Layout

### Breakpoints
| Nom | Min width | Colonnes | Gutter | Margin |
|---|---|---|---|---|
| `mobile` | 0 | 4 | 16px | 20px |
| `tablet` | 768px | 8 | 20px | 32px |
| `laptop` | 1024px | 12 | 24px | 48px |
| `desktop` | 1280px | 12 | 24px | 64px |
| `wide` | 1440px | 12 | 24px | auto |

### Container
| Token | Max-width |
|---|---|
| `container.sm` | 720px |
| `container.md` | 960px |
| `container.lg` | 1200px |
| `container.xl` | 1320px |
| `container.default` | **1200px** |

### Hero split (desktop/laptop)
- Colonne texte : 5–6 / 12  
- Colonne image : 6–7 / 12  
- Gap : 48–64px  

### Section vertical rhythm
| Token | Valeur |
|---|---|
| `section.padding-y.desktop` | 96px |
| `section.padding-y.laptop` | 80px |
| `section.padding-y.tablet` | 64px |
| `section.padding-y.mobile` | 56px |
| `section.gap-title-content` | 40–48px |

---

## 1.4 Spacing scale (base 4)

```
0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128
```

Tokens sémantiques :
- `space.xs` 4 · `sm` 8 · `md` 16 · `lg` 24 · `xl` 32 · `2xl` 48 · `3xl` 64 · `4xl` 96

---

## 1.5 Radius

| Token | Valeur | Usage |
|---|---|---|
| `radius.none` | 0 | Tables, filets |
| `radius.sm` | 2px | Inputs, tags |
| `radius.md` | 4px | Boutons, cards |
| `radius.lg` | 6px | Modales, images hero (max) |
| `radius.full` | 999px | **Interdit** (pas de pills mode) sauf focus dot / status |

---

## 1.6 Elevation & Ombres

Philosophie : **quasi-flat**. Ombres uniquement pour états flottants.

| Token | Valeur | Usage |
|---|---|---|
| `shadow.none` | none | Default cards |
| `shadow.xs` | `0 1px 2px rgba(27,49,71,0.04)` | Header scrolled |
| `shadow.sm` | `0 4px 12px rgba(27,49,71,0.06)` | Dropdown |
| `shadow.md` | `0 8px 24px rgba(27,49,71,0.08)` | Modal |
| `shadow.focus` | `0 0 0 3px rgba(14,74,140,0.25)` | Focus ring |

Cards : **bordure `color.line` 1px**, pas d’ombre par défaut.

---

## 1.7 Motion

| Token | Valeur |
|---|---|
| `motion.fast` | 120ms |
| `motion.base` | **180ms** |
| `motion.slow` | 280ms |
| `easing.standard` | `cubic-bezier(0.2, 0, 0, 1)` |
| `easing.exit` | `cubic-bezier(0.4, 0, 1, 1)` |

### Micro-interactions autorisées
- Hover bouton : background 180ms  
- Hover card expertise : translateY(-2px) + border color, 180ms  
- Header blur on scroll  
- Accordéon height 280ms  
- Compteur chiffres : count-up une fois (si données réelles), 800ms ease-out  
- Fade-in sections : opacity 0→1 + 8px, une fois, `prefers-reduced-motion` respecté  

### Interdits
Parallax agressif · glow · bounce · confetti · loaders décoratifs · carrousels autoplay

---

# 2. COMPOSANTS — DESIGN SYSTEM

## 2.1 Boutons

### Anatomie
Height : 48px (desktop/mobile primary) · 40px (secondary compact)  
Padding X : 24px · Radius : `md` · Font : `button`

### Variants

| Variant | BG | Text | Border | Usage |
|---|---|---|---|---|
| **Primary** | `brand.primary` | white | none | Demander un devis |
| **Secondary** | transparent | `brand.primary` | 1px `brand.primary` | Planifier une visite |
| **Tertiary / Ghost** | transparent | `ink` | none | Liens actions faibles |
| **Inverse** | white | `brand.navy` | none | Sur navy |
| **Phone** | transparent | `ink` | none + icon | Header téléphone |

### States
Default · Hover (`primary-hover`) · Active · Focus (`shadow.focus`) · Disabled (opacity 0.4, no pointer)

### Règles
- Un seul Primary visible par viewport  
- Icône Lucide optionnelle à gauche (16–18px)  
- Pas de boutons pill  

---

## 2.2 Liens
Couleur `brand.primary` · Underline on hover · External icon si besoin  
Nav links : `ink` → hover `brand.primary` · weight 500 · 14–15px

---

## 2.3 Cards

### Card — Pourquoi (4 colonnes)
```
┌─────────────────────┐
│ [icon 24]           │
│ Titre (h3)          │
│ Description body-sm │
└─────────────────────┘
```
- BG `surface` · Border `line` · Padding 32px · Radius `md`  
- Hover : border `brand.primary` 30% · **pas d’ombre lourde**

### Card — Expertise (grandes)
```
┌──────────────────────────┐
│ Titre                    │
│ Description              │
│ [ CTA text → ]           │
└──────────────────────────┘
```
Min-height desktop ~220px · Padding 40px · Peut inclure pictogramme discret haut droite

### Card — Réalisation
Image ratio 4:3 ou 3:2 · Caption : secteur · lieu · type  
Hover : léger overlay titre (accessible, pas de texte illisible)

### Quand NE PAS utiliser de card
Hero · Trust band · Timeline · FAQ (utiliser accordion) · Footer

---

## 2.4 Badges / Tags

| Type | Style |
|---|---|
| Tag filtre | Border `line` · bg `surface` · radius `sm` · padding 8×12 · active = bg `brand.primary` text white |
| Badge status | Success/Warning/Danger subtle + label |
| Trust chip | Texte seul ou ★ + label — **pas de pastilles marketing** |

---

## 2.5 Alertes
Padding 16×20 · Border-left 3px semantic · Icon + texte + dismiss optionnel  
Roles : `status` / `alert`

---

## 2.6 Icônes
- Lib : **Lucide** (stroke 1.75–2)  
- Sizes : 16 / 20 / 24  
- Color : `brand.navy` ou `brand.primary`  
- Set page : Building2, Wind, ShieldCheck, Wrench, ClipboardCheck, CalendarClock, MapPin, Phone, Mail, ChevronDown, ArrowRight, Check

---

## 2.7 Inputs & Formulaire

| Propriété | Valeur |
|---|---|
| Height | 48px |
| Padding | 12×16 |
| Border | 1px `line` |
| Radius | `sm` |
| Focus | border `brand.primary` + `shadow.focus` |
| Error | border `danger` + message sous champ |
| Label | au-dessus, `label`, toujours visible (pas floating) |
| Helper | `body-sm` `ink-secondary` |

### Champs Contact
Nom* · Société · Téléphone* · E-mail* · Type projet* (select) · Localisation · Message* (textarea min 120px) · Consentement* (checkbox)

### Select
Même hauteur que input · Chevron Lucide  

### Checkbox / Radio
24×24 hit area · Focus ring · Label cliquable  

---

## 2.8 Navbar (Header)

### Specs
- Height : 72px desktop · 64px mobile  
- Position : sticky top  
- BG : `rgba(255,255,255,0.85)` + `backdrop-filter: blur(12px)`  
- Border-bottom : 1px `line` @ 60% opacity **ou** `shadow.xs` au scroll  
- Z-index : 50  

### Contenu Desktop
Gauche : Logo  
Centre : Nav links  
Droite : Téléphone (numéro complet visible) + Button Primary « Demander un devis »

### Contenu Mobile
Logo · Phone icon (tel:) · Button Devis compact · Burger  

### Dropdown Services / Secteurs
Panel blanc · `shadow.sm` · liens en liste · largeur max 320–480px · fermeture Esc / outside / blur

---

## 2.9 Footer

### Structure Desktop — 4 colonnes
1. Marque + signature + adresse  
2. Navigation  
3. Services  
4. Zones desservies  

Bas de footer : Mentions · Confidentialité · FAQ · LinkedIn · © BR Tech Sàrl  

BG : `brand.navy` · Texte : blanc / blanc 70% · Liens hover blanc  

### Mobile
Accordéons par colonne + bloc contact toujours ouvert

---

## 2.10 Modales
Max-width 560px · Overlay `rgba(27,49,71,0.4)` · Focus trap · Esc close · Bouton X · Rare en v1 (préférence pages)

---

## 2.11 Accordéons (FAQ)
Row : question `h4` + chevron  
Open : réponse `body` · padding  
Une seule ouverte (option recommandée) · Animation height 280ms  
Schema FAQ prévu Phase 3

---

## 2.12 Tables
Header bg `surface-muted` · Filets horizontaux seulement · Padding 12×16 · Usage rapports / docs futurs

---

## 2.13 Checklist (Hero)
Liste verticale (mobile) / wrap 2 colonnes max (desktop)  
Item : Icon Check (`success` ou `brand.primary`) + texte `body-sm`  
5 items max  

**Copy validée temporairement (Phase 1) — à confirmer ops :**
1. Devis gratuit  
2. Intervention rapide  
3. Respect des normes SIA  
4. Solutions sur mesure  
5. Maintenance préventive  

---

## 2.14 Timeline (Méthode)

Desktop : horizontale 6 étapes avec connecteurs  
Tablet/Mobile : verticale  

Chaque step :
- Numéro Mono `01`–`06`  
- Titre  
- 1 ligne description  

Steps :
1. Visite technique  
2. Analyse  
3. Offre  
4. Installation  
5. Mise en service  
6. Maintenance  

---

## 2.15 Trust Band

Ligne 1 : `★★★★★` + audiences séparées par points médians  
Ligne 2 : 4 preuves textuelles séparées par filets verticaux (desktop) / wrap (mobile)  

Pas de logos clients inventés.

---

## 2.16 Sticky Mobile CTA Bar
Height 64px + safe-area  
2 boutons 50% : Primary Devis | Secondary Appeler (`tel:`)  
Visible après scroll 400px **ou** toujours (reco : toujours sur pages conversion)

---

# 3. PAGE D’ACCUEIL — SPÉCIFICATIONS UI PAR SECTION

## 3.1 Hero
- Min-height : `calc(100vh - header)` plafonnée ~820px desktop  
- H1 display  
- Sous-titre `body-lg` max-width 36ch  
- Checklist  
- CTA group gap 12–16px  
- Image : object-fit cover · radius `lg` · **pas d’overlay badge**  
- Image alt factuel  

## 3.2 Trust
Padding Y 32–40px · Centré · Typo `body-sm` / `label`

## 3.3 Pourquoi (4 cards)
Titre section H2 + 1 phrase support  
Grid 4 → 2 → 1  

Contenu :
1. Installation conforme  
2. Respect des délais  
3. Maintenance durable  
4. Solutions personnalisées  

## 3.4 Expertise
Grandes cards 2×3 ou 3×2 :  
Résidentielle · Industrielle · Double flux · Extraction · Maintenance · Optimisation énergétique  
CTA text « En savoir plus → » vers pages services

## 3.5 Réalisations
Filtres tags · Grille 3 → 2 → 1 · Images XL · Lien « Voir toutes »

## 3.6 Méthode
Timeline composant  

## 3.7 Chiffres
4 métriques — **placeholder UI** : structure prête, contenu « sur validation données »  
Si pas de data : section alternative « Ce que nous livrons » (4 livrables)

## 3.8 FAQ
6–8 questions accueil (lien vers FAQ complète)  

## 3.9 Contact
Split 7/5 form/infos · Map iframe lazy · NAP cohérent

---

# 4. RESPONSIVE — RÈGLES DE RÉORGANISATION

| Zone | Desktop 1440 | Laptop 1280 | Tablet 768 | Mobile 390 |
|---|---|---|---|---|
| Header | Full nav | Full nav condensed | Burger + tel + devis | Burger + tel + devis |
| Hero | Text L / Image R | Idem ratio 50/50 | Stack text→image | Stack + CTA full width |
| Trust | 2 lignes centrées | Idem | Wrap | Scroll horizontal audiences OK |
| Pourquoi | 4 col | 4 ou 2 | 2 | 1 |
| Expertise | 3 ou 2 | 2 | 2 | 1 |
| Réalisations | 3 | 3 ou 2 | 2 | 1 |
| Timeline | Horizontal | Horizontal scroll-safe | Vertical | Vertical |
| Contact | 2 col | 2 | 1 (infos puis form **ou** form puis infos) | Form first, map after |
| Footer | 4 col | 4 | 2 | Accordéons |
| Sticky CTA | Non | Non | Option | **Oui** |

---

# 5. ACCESSIBILITÉ UI (WCAG 2.2 AA)

| Exigence | Spec |
|---|---|
| Contraste texte | Ink sur white ≥ 7:1 (visé AAA corps) |
| Contraste UI | Boutons / borders ≥ 3:1 |
| Focus visible | `shadow.focus` jamais removed |
| Cibles | ≥ 24×24 px (idéalement 48px boutons) |
| Motion | `prefers-reduced-motion: reduce` → disable transform/count-up |
| Images | Alt textuels ; décoratif `alt=""` |
| Forms | Label visible + `aria-invalid` + messages liés |
| Nav mobile | `aria-expanded` burger · focus trap menu |
| Skip link | « Aller au contenu » |

---

# 6. MOTION DESIGN — DÉTAIL

| Élément | Trigger | Animation |
|---|---|---|
| Primary button | hover | bg 180ms |
| Secondary button | hover | bg subtle `primary-subtle` 180ms |
| Expertise card | hover | border + translateY(-2px) |
| Header | scroll > 8px | shadow.xs on |
| FAQ | click | height + rotate chevron 280ms |
| Section enter | in-view once | opacity + 8px Y, 400ms |
| Chiffres | in-view once | count-up 800ms si data |
| Mobile menu | open | panel slide from right 280ms |

---

# 7. ASSETS REQUIS POUR FIDélité FINALE

| Asset | Spec |
|---|---|
| Logo SVG | Primary + mono white |
| Hero photo | Installation réelle, lumière froide, architecture CH |
| 6–9 photos réalisations | Avant/après si possible |
| Favicon | Icône pale |
| Open Graph image | 1200×630 marque + signature |

Tant que photos réelles absentes : maquettes utilisent **placeholders photographiques réalistes** annotés « Remplacer par shoot BR Tech ».

---

# 8. MAQUETTES — INVENTAIRE

Les maquettes haute fidélité générées (référence visuelle) :

1. `phase2-desktop-home.png` — Accueil Desktop (hero + trust + début sections)  
2. `phase2-desktop-home-below.png` — Accueil Desktop (méthode / FAQ / contact)  
3. `phase2-laptop-home.png` — Laptop  
4. `phase2-tablet-home.png` — Tablet  
5. `phase2-mobile-home.png` — Mobile + sticky  
6. `phase2-design-system.png` — Planche composants  

*(Chemins : `br-tech-brand/visuels/phase2/`)*

---

# 9. COPY UI VERROUILLÉE (v1)

### Hero
**H1 :** L'air, maîtrisé.  
**Sub :** Installation, rénovation et maintenance de systèmes de ventilation pour les entreprises et bâtiments en Suisse romande.  
**Primary CTA :** Demander un devis  
**Secondary CTA :** Planifier une visite technique  

### Header CTA
Demander un devis  

### Trust audiences
Architectes · Régies · PME · Industries · Collectivités  

### Trust preuves
Respect des normes · Installation certifiée · Suivi personnalisé · Maintenance  

### Sections titles
Pourquoi choisir BR Tech ?  
Domaines d'expertise  
Nos réalisations  
Notre méthode  
FAQ  
Contact  

---

# 10. JUSTIFICATIONS UI (extrait)

| Choix | Pourquoi |
|---|---|
| Radius 4px | Technique suisse ; évite soft-UI daté |
| Cards bordées sans ombre | Crédibilité ingénierie ; ombres = app grand public |
| Header blur léger | Pattern Apple/Jakob ; modernité discrète 10 ans |
| Blanc dominant | Perception propreté / air / précision |
| Primary blue aplats | Héritage logo sans gradient fashion |
| 48px controls | Fitts + accessibilité pouce |
| Timeline numérotée Mono | Signal « process industriel documenté » |
| Sticky mobile dual | Conversion terrain (appel) + devis |

---

# 11. CHECKLIST VALIDATION PHASE 2

- [ ] Tokens couleur / typo / spacing / radius / shadow OK  
- [ ] Composants (boutons, cards, form, nav, footer, FAQ, timeline) OK  
- [ ] Hero conforme brief (2 CTA, pas de lien Appeler)  
- [ ] Trust band OK  
- [ ] Responsive rules OK  
- [ ] Motion 180ms OK  
- [ ] Maquettes Desktop / Laptop / Tablet / Mobile OK  
- [ ] Section Chiffres : décider data / alternative  
- [ ] Checklist hero copy ops confirmée  
- [ ] Téléphone / e-mail réels à intégrer Phase 3  

---

# 12. STATUT

| Phase | Statut |
|---|---|
| Phase 1 UX Strategy | ✅ Validée |
| Phase 2 UI Design + Design System | ⏳ En attente validation |
| Phase 3 Développement Next.js | 🔒 Bloquée |

**Répondre « Phase 2 validée »** (avec ajustements éventuels) pour démarrer le développement.

---

*BR Tech Sàrl — Phase 2 UI Design System v1.0*
