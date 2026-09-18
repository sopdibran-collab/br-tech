# 06 — Feuille de route — BR Tech Sàrl

Alignée sur vault `02 System/Workflows/05 - Feuille de route conception site.md`.  
Checklist vault : `03 Projects/BR Tech Sàrl/01 - Feuille de route.md`

## Objectif de lancement

- **Date cible** : non fixée
- **URL de production** : https://brtech.ch

## Phases agence

### Phase 1 — Cadrage
- [x] Brief / Brand Book / UX
- [x] NAP : tél. +41 79 176 38 19 · lun.–ven. 7h00–17h00 (confirmés 2026-08-15)
- [x] Lexique v1 (`docs/seo/LEXIQUE-METIER.md`)
- [x] **Run Engine** + `docs/seo/BRIEF-ENGINE.md` (2026-08-15)
- [ ] Arborescence zones confirmée (territoires réels) — 3.2 : Renens + Lausanne seulement

### Phase 2 — Design
- [x] Wireframes Phase 1
- [x] Design System + maquettes Phase 2
- [x] Proposition Phase 2.1
- [ ] Choix 2 vs 2.1
- [ ] Typo confirmée
- [ ] Mockup validé client (ou go explicite)

### Phase 3 — Production
Voir `docs/ops/PHASE-3-PROPOSAL.md` (vault Motion / footer / nav / IndexNow / anti-template).

- [x] **3.0** Scaffold + tokens + accueil 2.1 + contact + IndexNow (`npm run build` OK)
- [ ] Preview Vercel (sans domaine custom)
- [x] **3.1** Pages métier selon `docs/seo/PHASE-3.1-CONTENT-PLAN.md` (hub + 3 services + maintenance)
- [ ] **3.2** Zones confirmées + FAQ + onboarding Bing/GBP
- [ ] Drawer 70 % + footer chips — **pas** bottom nav Gzimmo
- [ ] **Pas** Aceternity

### Phase 4 — Recette
- [ ] Responsive / a11y / CWV
- [ ] QC vault + checks (scan, anti-template, trust, CTA)

### Phase 5 — Déploiement
- [ ] Domains Vercel + handoff Infomaniak (A/CNAME seulement)
- [ ] IndexNow / GSC / Bing / GBP
- [ ] Relancer Engine avec GSC réel

## Priorités (MoSCoW)

| Must | Should | Could | Won't (v1) |
|------|--------|-------|------------|
| Accueil, services, maintenance, contact, légal | Secteurs, processus, 2–3 zones confirmées | Ressources / guides | CMS, blog, multi-langue, chiffres fictifs, TikTok |

## Jalons & livrables

| Date | Jalon | Livrable |
|------|-------|----------|
| 2026-07-30 | Brand + P1–P2 | Docs + logos + Figma |
| 2026-08-13 | Instructions repo + Engine prêt | `AGENTS.md`, project-context, lexique, profil Engine |
| TBD | Validation UI | Go Phase 3 |
| TBD | Preview Vercel | URL preview |
| TBD | Prod | brtech.ch |

## Risques & dépendances

| Risque | Impact | Mitigation |
|--------|--------|------------|
| Tél. / horaires | Trust / schema | Confirmés 2026-08-15 — schema `telephone` + `openingHours` |
| Photos absentes | EEAT | Placeholders annotés ; ne pas stock BTP |
| « Certifiée / devis gratuit » | Crédibilité | Reformuler jusqu’à preuve |
| Pages zones hors territoire | SEO + légal | Engine + confirmation client |
| Coder dans l’Engine | Livraison au mauvais endroit | `workspace-roles.mdc` |

## Post-lancement

- Import GSC → relancer Engine → PR dans **ce** repo
- GBP photos réelles
- Maintenance hébergement : Vercel + DNS Infomaniak
