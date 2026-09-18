# STATUS — BR Tech Website

**Dernière mise à jour :** 2026-08-15  
**Environnement de travail cible :** Local (Cursor Desktop)  
**Dossier projet local :** `/Users/dibransopj/Documents/Github/br-tech-website`

---

## Fait

- [x] Brand Book v1.0 (40 sections)
- [x] Phase 1 UX Strategy (validée)
- [x] Phase 2 Design System documenté
- [x] Maquettes Phase 2 / 2.1
- [x] Kit logo + favicon
- [x] Instructions agent + project-context + Engine profil
- [x] **Phase 3.0** Next.js 16 : accueil 2.1, contact, légal, IndexNow, sitemap (`npm run build` OK)
- [x] **Phase 3.1** hub `/services/` + installation + double-flux + dépannage + `/maintenance/` (pas de `/zones/*`)
- [x] Icônes SVG line (métier) — **pas** d’illustrations cartoon / Alegria (Brand Book §18)

## En attente

- [x] Run Engine → `docs/seo/BRIEF-ENGINE.md` (2026-08-15, a priori, pas de GSC)
- [x] Plan 3.1 → `docs/seo/PHASE-3.1-CONTENT-PLAN.md`
- [ ] Preview Vercel (projet pas encore créé — pas de domaine custom)
- [ ] Photos chantier réelles (hero = schéma annoté)
- [ ] Envoi e-mail formulaire (aujourd’hui : mailto vers `info@brtech.ch` après validation)
- [ ] Phase **3.2** zones Renens / Lausanne (après confirmation territoire)
- [ ] Handoff DNS Infomaniak (après Domains Vercel)

## Prochaine action

1. `npm run dev` — relire 3.1 (nav Services, 3 pages + maintenance, contact title)
2. Projet Vercel **preview only** — pas de `/zones/*`

## Où travailler

- **Site (ce repo)** : brand, UI, code, copy publié  
- **Engine** : `/Users/dibransopj/Documents/WEBDEV/swiss-construction-intelligence` — analyse only  
- **Vault** : `04 Clients/BR Tech Sàrl/` · `03 Projects/BR Tech Sàrl/`

## Contact entreprise (verrouillé)

| | |
|---|---|
| **Raison sociale** | BR Tech Sàrl |
| **E-mail** | info@brtech.ch |
| **Téléphone** | +41 79 176 38 19 |
| **Horaires** | Du lundi au vendredi, de 7h00 à 17h00 |
| **Adresse** | Rue de Lausanne 49g, 1020 Renens (VD) |
| **Domaine** | brtech.ch |

## Décisions produit verrouillées

- Direction UI 3.0 : **Phase 2.1**
- Signature : **L'air, maîtrisé.**
- CTA primaire : **Demander un devis**
- CTA secondaire hero : **Planifier une visite technique**
- Pas de lien « Appeler » dans le hero
- Typo : Outfit + IBM Plex Sans + IBM Plex Mono (`next/font`)
- Hébergement : **Vercel** · DNS/mails : **Infomaniak**
