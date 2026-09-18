# Proposition Phase 3 — BR Tech Sàrl

> 2026-08-13 · Vault (feuille de route, Motion, footer, nav mobile, SEO local, checks, conversion B2B)  
> **Pas un go code.** Scaffold seulement après validation UI (2 vs 2.1) + typo.  
> Engine peut **chevaucher** 3.0 ; il **bloque** 3.1 (quelles pages publier).

---

## Ce qui change vs l’ancien plan

L’ancien plan : Next.js + Tailwind + Framer + shadcn + Lucide, puis tout le sitemap Brand Book.

Le vault impose autre chose :

| Sujet | Ancien réflexe | Proposition vault |
| --- | --- | --- |
| Périmètre v1 | Toutes les pages services / secteurs / zones | **3.0 fondation** puis pages **priorisées par l’Engine** |
| Aceternity | Dans la stack « premium » | **Non** pour BR Tech (matrice : micro-motion + shadcn thémé seulement) |
| shadcn | Look lib / cards partout | Primitives (form, sheet, accordion) **retokenisées** (radius 4 px, pas de pills) |
| Footer mobile | Accordéons 4 colonnes (Phase 2 DS) | **[[09]] chips ultra-compact** dès le 1er layout |
| Nav mobile | Burger plein écran (implicite) | **Pas** de bottom nav Gzimmo. **Option B** drawer 70 % + sticky Devis / Appeler |
| Hero | Phase 2 split + checklist dans le fold | **Recommandé : Phase 2.1** (plein cadre, checklist hors 1er viewport) — anti-template |
| SEO technique | Plus tard | **IndexNow + robots/sitemap dès 3.0** ([[04 - Onboarding SEO local]]) |
| Copy | Hardcodé dans les TSX | `content/` (MD/JSON) + `site-config.ts` — l’Engine met à jour le brief, pas 20 composants |
| Formulaire | Client fetch | Server Action + Zod + nLPD ([[01 - Code Standards]] · conversion B2B) |

---

## Conditions de départ (inchangées)

- [ ] Choix visuel **2 ou 2.1** (reco vault : **2.1**)
- [ ] Typo confirmée : Outfit + IBM Plex Sans + Plex Mono (Google Fonts, `next/font`)
- [ ] NAP : tél. confirmé si possible ; horaires = masquer tant que manquants
- [ ] Engine : **3.0 peut commencer** sans brief ; **3.1 attend** `docs/seo/BRIEF-ENGINE.md` v1

---

## 3.0 — Fondation (preview Vercel, 0 domaine custom)

Objectif : une URL preview qui *ressemble* à la marque et convertit (accueil + contact). Pas le cocon entier.

### Stack

- Next.js App Router, TypeScript strict, Tailwind  
- RSC par défaut ; `'use client'` seulement header sticky, drawer, form UX, accordion  
- shadcn : `button`, `input`, `textarea`, `select`, `checkbox`, `sheet` (drawer), `accordion` — **thème = tokens Phase 2** (`--radius: 4px`, primary `#0E4A8C`)  
- **Pas** Aceternity. Motion : 2–3 intentions max (entrée section `once`, chevron FAQ, header blur). `prefers-reduced-motion`. Durées ≈ 180–280 ms (Phase 2)  
- Lucide stroke 1.75–2  
- `next/font` : Outfit (titres) + IBM Plex Sans + IBM Plex Mono — subset, `display: swap`, peu de graisses  
- Pas de CMS / Payload

### Architecture repo (dès scaffold)

```
src/app/                 App Router, locale fr-CH
src/components/layout/   Header, Footer (compact), SkipLink, StickyMobileCta
src/components/ui/       shadcn thémé
content/                 copy pages (pas dans les composants)
src/config/site.ts       NAP, CTA, nav routes (une source → .map())
public/4e83fba7d06a413e96b4abe69b2f5256.txt   IndexNow
```

### Pages 3.0

| Route | Pourquoi |
| --- | --- |
| `/` | Confiance + CTA (mockup choisi) |
| `/contact/` | Conversion (form + NAP + map texte) |
| `/mentions-legales/` `/confidentialite/` | nLPD / Sàrl |
| 404 | microcopy Brand Book |

### Layout — décisions vault (écrire dans le code, pas improviser)

1. **Skip link** « Aller au contenu » ([[C - Skip link keyboard]])  
2. **Nav** : tableau `navigationRoutes` partagé header / drawer / footer chips ([[10]])  
3. **Mobile** : header Logo · Tel · Devis · burger → **drawer droite ≤ 70 %** (Option B). Sticky **Devis \| Appeler**. **Pas** de tab bar (conflit sticky + 6 items + méga-menus)  
4. **Footer mobile** : chips wrap, `py-2`/`py-3`, pas un mur de colonnes ([[09]]). Desktop : 4 groupes en chips, pas mega-footer  
5. **Hero 2.1** : photo edge-to-edge, H1 signature, 2 CTA, **checklist hors fold**  
6. **Pourquoi BR Tech** : **pas** 4 cards clonées icône+titre+texte (anti-template). Split éditorial / filets / 4 blocs asymétriques  
7. **Section chiffres** : absente tant que pas de data → « Ce que nous livrons » (livrables) ou rien  
8. Copy FR-CH : guillemets `« »`, pas de soulignement décoratif, titres sans point final ([[02 - Typographie française web]])

### Formulaire (crédibilité B2B)

Champs Phase 1. Validation Zod client **et** serveur. Honeypot + rate limit. Consentement nLPD.  
Pas de « devis gratuit » / « certifiée ». Succès 24 h **seulement** si ops le tient.  
Mesure : événement submit (sans GTM tant que pas de consentement cookies).

### SEO technique 3.0 (nouveau site)

- `sitemap.ts` / `robots.ts`  
- IndexNow fichier public (clé agence)  
- `metadata` accueil : title Brand Book (H1 reste *L’air, maîtrisé.*)  
- Schema `Organization` + `HVACBusiness` **sans** `telephone` si tél. non confirmé ; **sans** `Review`  
- Dupliquer [[T - Onboarding SEO local]] → vault `03 Projects/BR Tech Sàrl/03 - Onboarding SEO local.md` (GBP = pending)

### Infra

- Projet Vercel **preview only** — pas `brtech.ch` dans Domains  
- DNS Infomaniak inchangé

---

## 3.1 — Pages métier (après brief Engine)

Ne **pas** coder les 6 services + 6 secteurs + 8 zones d’un coup.

Ordre type (à recaler par blocs A/D/E du brief) :

1. `/services/` + **3 pages** max (probables : installation, double-flux, dépannage)  
2. `/maintenance/` (offre récurrente — déjà dans la nav)  
3. `/a-propos/` + `/processus/` (EEAT, 6 étapes)  
4. 2 secteurs qui matchent le persona Marc (immeubles / architectes-EG)  
5. Réalisations : **index placeholder** tant que photos absentes — pas de faux chantiers

Template page service = Brand Book §34 + chapô AEO 40–60 mots + 1 phrase sous chaque H2 ([[01_AIO_AEO_MAXIMIZER_CH]]).

Zones `/zones/*` : **3.2 seulement**, et seulement territoires confirmés.

---

## 3.2 — Local / AEO / go-live prep

- 1–2 pages zone (Renens, éventuellement Lausanne) si le client confirme  
- FAQ / 1 ressource (entretien VMC **ou** normes — celle que l’Engine classe en F)  
- Alts images ([[C - Image alt]])  
- Handoff DNS **après** recette preview  
- GSC + Bing + GBP (humain) · relancer Engine avec GSC plus tard

---

## Definition of Done (chaque PR pages)

Checks : Hero clarity · Scan & fold · Primary CTA · Trust signals · Form · Contrast AA · Anti AI template · Image alt.  
Nouveau site (à la prod) : Indexation Bing GBP.

---

## Hors v1 (Won’t)

CMS · blog · multi-langue · Aceternity / glow · bottom nav · chiffres fictifs · avis schema · chat · GTM avant politique cookies · pages Genève / satellites non confirmés

---

## Prochaine action concrète (pas du code)

1. Trancher **2.1 (reco)** vs 2  
2. Run Engine → `BRIEF-ENGINE.md`  
3. Confirmer tél. / horaires  
4. *Puis* `create-next-app` dans **ce** repo
