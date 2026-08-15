# Instructions agent — site BR Tech Sàrl (brtech.ch)

> **Tout le travail du site se fait dans ce repo.**  
> `swiss-construction-intelligence` n’est **pas** le site : c’est l’outil d’étude SEO / GEO / AEO, obligatoire avant de figer l’arborescence et le copy.

Workspace local : `/Users/dibransopj/Documents/Github/br-tech-website`  
GitHub : `https://github.com/sopdibran-collab/br-tech`

---

## 1. Rôles des outils (ne pas inverser)

| Outil | Rôle | Interdit |
| --- | --- | --- |
| **Ce repo** (`br-tech`) | Brand, UX, UI, assets, code Next.js, copy publié, meta, schema | Remplacer la fiche Obsidian |
| **Vault** `AI Agency OS` | Vérité métier, checks, process agence | Volumes GSC / clusters |
| **Spec Kit** (GitHub) | Spec / plan / tâches **d’une feature** (`.specify/`, `specs/`) | Remplacer la fiche, inventer NAP |
| **swiss-construction-intelligence** | Analyse marché CH construction → brief opportunités | Coder le site, inventer des pages live |

**Flux :** vault + lexique (ici) → **Engine** → synthèse ramassée **ici** (`docs/seo/`) + vault projet → **puis** pages / code dans ce repo.

Checklist livraison Engine → PR site : vault `INTELLIGENCE-ENGINE/13_RECOMMENDATIONS/01_DELIVERY_CHECKLIST_ENGINE_TO_PR.md`

---

## 2. Lecture obligatoire (ordre)

1. Fiche vault `04 Clients/BR Tech Sàrl/00 - BR Tech Sàrl.md`
2. Projet vault `03 Projects/BR Tech Sàrl/00 - Projet BR Tech Sàrl.md` + feuille de route
3. Vault `02 System/Cursor/01 - Workflow Cursor.md` + `02 System/Workflows/05 - Feuille de route conception site.md`
4. `.cursor/project-context/PROJECT.md` (miroir — **Obsidian gagne** en conflit)
5. Brand Book `docs/brand/BR-TECH-BRAND-BOOK.md`
6. Phase 1 UX `docs/ux/PHASE-1-UX-STRATEGY.md`
7. Phase 2 UI `docs/ui/PHASE-2-UI-DESIGN-SYSTEM.md`
8. `STATUS.md`

Skill Cursor : `ai-agency-os`. Rule : `.cursor/rules/agency-os-vault.mdc`.  
Spec Kit : constitution `.specify/memory/constitution.md` · commandes `/speckit-specify` etc. (skills dans `.cursor/skills/`).  
Palette : `src/app/globals.css` + Brand Book. Pas Specify specifyapp.com.

---

## 3. Phase 3 (code) — conditions

Proposition détaillée (vault 2026-08) : [`docs/ops/PHASE-3-PROPOSAL.md`](docs/ops/PHASE-3-PROPOSAL.md)

**Ne pas** scaffolder Next.js tant que :

- [ ] Direction visuelle **Phase 2 ou Phase 2.1** validée (reco vault : **2.1**)
- [ ] Paire typo confirmée (Google Fonts only)
- [ ] Pour **3.1** (pages services/zones) : brief Engine `docs/seo/BRIEF-ENGINE.md` — le **3.0** (layout + accueil + contact) peut chevaucher l’Engine

Exception : l’utilisateur dit explicitement « go Phase 3 » / « scaffold maintenant ».

Découpage : **3.0 fondation** → **3.1 pages Engine** → **3.2 local/AEO**.  
Pas Aceternity. Footer chips. Drawer 70 % — pas de bottom nav. IndexNow dès 3.0.

Stack cible : Next.js App Router · TypeScript · Tailwind · Motion (micro) · shadcn thémé · Lucide · WCAG 2.2 AA.  
**Pas** de Payload/CMS. Polices : Google Fonts uniquement (pas Fontshare, pas Inter comme identité).

---

## 4. Prestations v1 (source produit = Phase 1 UX)

Nav : **Services · Secteurs · Réalisations · Maintenance · À propos · Contact**

### Services (`/services/`)

| Slug | Prestation |
| --- | --- |
| `/services/installation/` | Installation de ventilation |
| `/services/renovation/` | Rénovation aéraulique |
| `/services/double-flux/` | VMC double flux |
| `/services/extraction/` | Simple flux / extraction |
| `/services/depannage/` | Dépannage |
| `/services/optimisation-energetique/` | Optimisation énergétique |

### Maintenance (item nav séparé)

`/maintenance/` — entretien préventif, contrats, suivi. **Pas** un sous-lien noyé dans Services.

### Cocon SEO Brand Book (après Engine — ne pas publier hors zone réelle)

Nettoyage de gaines · qualité de l’air intérieur · pages `/zones/*` **uniquement** si intervention réelle.

### Secteurs

Résidentiel haut de gamme · Immeubles / copropriétés · Bureaux & administratif · Industriel · Collectivités · Architectes & EG.

### Processus (6 étapes)

Visite technique → Analyse → Offre → Installation → Mise en service → Maintenance.

### CTA

- Primaire : **Demander un devis**
- Secondaire hero : **Planifier une visite technique**
- Téléphone : header + sticky mobile — **pas** de lien « Appeler » dans le hero

---

## 5. NAP / preuves (ne jamais inventer)

| Champ | Valeur | Statut |
| --- | --- | --- |
| Raison sociale | BR Tech Sàrl | Verrouillé |
| Adresse | Rue de Lausanne 49g, 1020 Renens VD | Verrouillé |
| E-mail | info@brtech.ch | Verrouillé (Infomaniak) |
| Téléphone | +41 79 176 38 19 | Verrouillé |
| Horaires | Du lundi au vendredi, de 7h00 à 17h00 | Verrouillé |
| Signature | L’air, maîtrisé. | Verrouillé |
| Domaine | brtech.ch | Verrouillé |
| Hosting | Vercel (site) · Infomaniak (DNS + mail) | Verrouillé — **ne pas changer les NS** |

Interdit : certifications, avis, chiffres, « devis gratuit », « intervention rapide », « installation certifiée » — sauf validation ops / preuve réelle.

Photos chantier : placeholders annotés jusqu’au shoot.

---

## 6. Engine SEO / GEO / AEO (étape indispensable)

Site neuf → pas de GSC encore. L’Engine sert quand même : taxonomie HVAC/ventilation, geo CH, opportunités, AEO, pages zones **éligibles**.

Procédure complète : [`docs/ops/ENGINE-SEO-GEO-AEO.md`](docs/ops/ENGINE-SEO-GEO-AEO.md)  
Profil à injecter dans l’Engine : [`docs/seo/engine-profile.br-tech.v0.1.json`](docs/seo/engine-profile.br-tech.v0.1.json)  
Lexique (avant run) : [`docs/seo/LEXIQUE-METIER.md`](docs/seo/LEXIQUE-METIER.md)

**Après analyse :** coller le brief (blocs A–G) dans `docs/seo/BRIEF-ENGINE.md` **et** vault `03 Projects/BR Tech Sàrl/`.  
**Appliquer** titles, H1, pages, FAQ **uniquement dans ce repo**.

Repo Engine : `/Users/dibransopj/Documents/WEBDEV/swiss-construction-intelligence`

---

## 7. Infra (plus tard — pas maintenant)

- Prep Vercel : `docs/ops/VERCEL-PREP.md`
- Handoff DNS : `docs/ops/DNS-HANDOFF-INFOMANIAK.md`
- Ne pas déployer, ne pas ajouter le domaine Vercel, ne pas envoyer le handoff DNS avant Phase 3 + preview.

---

## 8. Capture chat

Infos client reçues ici → classer d’abord dans le vault (`02 System/Cursor/03 - Capture client chat.md`), puis refléter dans `.cursor/project-context/` et `STATUS.md`.
