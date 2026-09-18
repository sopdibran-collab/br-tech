# BR Tech Sàrl — Site internet

Repo GitHub : **https://github.com/sopdibran-collab/br-tech**  
Local : `/Users/dibransopj/Documents/Github/br-tech-website`

**Tout le travail du site se fait ici.**  
`swiss-construction-intelligence` est l’outil d’étude SEO / GEO / AEO (tous projets construction CH), pas le repo de livraison.

Agents : lire **[`AGENTS.md`](AGENTS.md)** en premier.

---

## État du projet

| Phase | Statut |
|---|---|
| Brand Book | ✅ Livré |
| Phase 1 — UX Strategy | ✅ Validée |
| Phase 2 — UI Design System + maquettes | ✅ Direction **2.1** retenue pour 3.0 |
| Lexique + profil Engine | ✅ Dans `docs/seo/` |
| Run Engine SEO/GEO/AEO | ⏳ `docs/seo/BRIEF-ENGINE.md` vide |
| Phase 3.0 — Fondation Next.js | ✅ Accueil, contact, légal, IndexNow |
| Phase 3.1 — Pages métier | 🔒 Après brief Engine |

---

## Où est quoi

| Besoin | Endroit |
| --- | --- |
| Instructions agent | [`AGENTS.md`](AGENTS.md) |
| Spec Kit (feature) | [`.specify/`](.specify/) · constitution + `specs/` |
| Miroir brief | [`.cursor/project-context/`](.cursor/project-context/) |
| Brand | [`docs/brand/`](docs/brand/) |
| UX / UI | [`docs/ux/`](docs/ux/) · [`docs/ui/`](docs/ui/) |
| Engine (procédure) | [`docs/ops/ENGINE-SEO-GEO-AEO.md`](docs/ops/ENGINE-SEO-GEO-AEO.md) |
| DNS / Vercel | [`docs/ops/`](docs/ops/) |
| Logos | [`assets/logo/`](assets/logo/) |
| Code | `src/` (App Router, Phase 3.0) |

---

## Structure

```
br-tech-website/
├── AGENTS.md
├── STATUS.md
├── .cursor/project-context/   ← miroir (Obsidian gagne)
├── docs/
│   ├── brand/
│   ├── ux/
│   ├── ui/
│   ├── seo/                   ← lexique, profil Engine, brief
│   ├── ops/
│   └── design/
├── assets/
└── src/                       ← Phase 3
```

---

## Travail local (Mac)

Ouvrir **ce** dossier dans Cursor (pas `swiss-construction-intelligence`) :

```bash
cd /Users/dibransopj/Documents/Github/br-tech-website
npm install
cp .env.example .env.local   # puis renseigner RESEND_API_KEY
npm run dev
```

Engine (étape stratégie, autre workspace) :

```bash
cd /Users/dibransopj/Documents/WEBDEV/swiss-construction-intelligence
```

---

## Formulaire contact (Resend)

Envoi réel via [Resend](https://resend.com) — plus de fallback `mailto:`.

| Variable | Requis | Description |
| --- | --- | --- |
| `RESEND_API_KEY` | Oui (prod) | Clé API Resend |
| `CONTACT_FROM_EMAIL` | Non | Expéditeur. Défaut : `BR Tech <onboarding@resend.dev>` (tests). Après vérif. domaine : `BR Tech <contact@brtech.ch>` |
| `CONTACT_TO_EMAIL` | Non | Destinataire. Défaut : `info@brtech.ch` (`site.email`) |

Sans clé : message d’erreur en français (pas de mailto silencieux).  
Après déploiement : ajouter `RESEND_API_KEY` sur Vercel et vérifier le domaine dans Resend (DNS Infomaniak).

---

## Stack (Phase 3.0)

Next.js 16 App Router · TypeScript · Tailwind 4 · Lucide · Zod  
Polices : Outfit + IBM Plex Sans + IBM Plex Mono (`next/font`, Google Fonts).  
Pas d’Aceternity. Drawer 70 % + sticky Devis/Appeler. Footer chips.

---

## Contact entreprise

- **Raison sociale :** BR Tech Sàrl  
- **Adresse :** Rue de Lausanne 49g, 1020 Renens VD  
- **Téléphone :** +41 79 176 38 19 *(confirmer — saisi +42)*  
- **E-mail :** info@brtech.ch  
- **Domaine :** brtech.ch  

© BR Tech Sàrl
