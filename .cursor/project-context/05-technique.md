# 05 — Technique — BR Tech Sàrl

## Domaine & hébergement

- **Domaine** : brtech.ch
- **Registrar / DNS** : Infomaniak — **ne pas changer les serveurs NS**
- **Hébergement site** : Vercel (projet **pas encore créé**)
- **Mail** : info@brtech.ch chez Infomaniak (MX / SPF / DKIM / DMARC intouchables)
- **Repo Git** : https://github.com/sopdibran-collab/br-tech
- **Local** : `/Users/dibransopj/Documents/Github/br-tech-website`
- **Environnements** : preview Vercel d’abord · prod + domaine **après** Phase 3

Docs : `docs/ops/VERCEL-PREP.md` · `docs/ops/DNS-HANDOFF-INFOMANIAK.md`

Team Vercel : `sopdibran-collabs-projects`

## Stack cible

- **Frontend** : Next.js (App Router) — **pas encore scaffoldé** (`src/` vide)
- **CMS** : aucun
- **CSS** : Tailwind + tokens Phase 2
- **UI** : shadcn/ui thémé · Lucide · Framer Motion (restraint)
- **Langages** : fr-CH
- **Node** : ≥ 20

## Intégrations

| Service | ID / config | Usage |
|---------|-------------|-------|
| Formulaire | TBD Phase 3 | Contact / devis (honeypot + rate limit, pas captcha agressif) |
| Map | Embed contact | Alternative texte = adresse |
| Analytics / GTM | non défini | — |
| Engine SEO | `swiss-construction-intelligence` | Analyse only — pas runtime du site |

## Fonctionnalités

- [x] Formulaire contact (spécifié, pas codé)
- [x] Portfolio / réalisations (structure — photos manquantes)
- [ ] Blog
- [ ] Multilingue
- [ ] E-commerce
- [ ] Espace client / CMS

## Performance & sécurité

- Images WebP, lazy load, alt factuels
- HTTPS (Vercel)
- Cookie consent si analytics (CH/nLPD)
- WCAG 2.2 AA
- IndexNow + GSC + Bing à l’onboarding prod

## Pages légales requises

- [ ] Mentions légales
- [ ] Confidentialité / nLPD
- [ ] CGV (si applicable — non requis v1 site vitrine)

## Accès & credentials

> Ne pas stocker de secrets ici.

- DNS Infomaniak : client / agence selon accès manager
- Vercel : après création projet Phase 3
