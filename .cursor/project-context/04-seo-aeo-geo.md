# 04 — SEO / AEO / GEO — BR Tech Sàrl

> Recalé 2026-08-15 après [`docs/seo/BRIEF-ENGINE.md`](../../docs/seo/BRIEF-ENGINE.md).  
> Application 3.1 : [`docs/seo/PHASE-3.1-CONTENT-PLAN.md`](../../docs/seo/PHASE-3.1-CONTENT-PLAN.md).  
> Prestations / nav / CTA → Phase 1 UX. Preuves / NAP → vault. Priorités mots-clés / zones à publier → Engine.

## Objectifs

- **SEO** : intentions locales ventilation / VMC (Renens, Lausanne, Vaud) + services
- **AEO** : réponses citables (FAQ, chapô 40–60 mots, H2 + 1 phrase)
- **GEO** : entité « BR Tech Sàrl + ventilation + Renens + Suisse romande »

## Outil obligatoire — Engine

`swiss-construction-intelligence` = étude. Site = ce repo.

1. Lexique : `docs/seo/LEXIQUE-METIER.md`
2. Profil : `docs/seo/engine-profile.br-tech.v0.1.json`
3. Procédure : `docs/ops/ENGINE-SEO-GEO-AEO.md`
4. Sortie : `docs/seo/BRIEF-ENGINE.md` (**premier run 2026-08-15**, seed a priori, **pas de GSC**)

Sans GSC : ne pas lire les scores comme des volumes. Relancer après go-live.

## Mots-clés (Engine v1 → URLs produit)

1 page = 1 intention. **Pas** d’arborescence Brand Book `/ventilation/…`.

### 3.1 — publier

| Page | Mot-clé principal (Engine) | Secondaires |
|------|----------------------------|-------------|
| Accueil `/` | entreprise ventilation Suisse romande | ventilation Renens (entité, pas page zone) |
| `/services/installation/` | installateur ventilation Vaud | installation ventilation Vaud |
| `/services/double-flux/` | installateur VMC double flux Suisse romande | VMC double flux Vaud / Lausanne |
| `/services/depannage/` | dépannage ventilation Renens | dépannage VMC Lausanne |
| `/maintenance/` | entretien VMC Suisse romande | maintenance ventilation Lausanne |
| `/contact/` | devis ventilation immeuble Vaud | CTA **Demander un devis** |
| `/services/` | hub (pas une requête head) | porte mega-menu |

### 3.2 — pages zone (pas maintenant)

| Page | Mot-clé | Statut |
|------|---------|--------|
| `/zones/renens/` | ventilation Renens | **PUBLIER** en 3.2 (siège = territoire réel) |
| `/zones/lausanne/` | ventilation Lausanne / VMC Lausanne | **PUBLIER** en 3.2 (2ᵉ page) |

### Cluster-only — ne pas publier

Nyon, Vevey, Montreux, Yverdon-les-Bains, Morges, Ouest lausannois, Genève, `/zones/vaud/`, `/zones/suisse/`.

### Plus tard (hors 3.1)

Extraction · rénovation · optimisation énergétique · nettoyage gaines · ressources QAI/SIA · secteurs industriels/bureaux.

## Longue traîne / questions (AEO) — brief F

Mapping pages : voir plan 3.1. Sources : SIA 382/1, SIA 180 ; fréquence entretien = fabricant + contrat (pas une loi unique). Pas de « conformité garantie ».

## Meta & titres (3.1)

**Modèle** : `[Service] [Ville/Canton] — BR Tech Sàrl`

| Page | Title (≤ 60) |
|------|----------------|
| Accueil | BR Tech Sàrl \| Ventilation Suisse romande — Renens (VD) |
| Installation | Installateur ventilation Vaud — BR Tech Sàrl |
| Double flux | VMC double flux Vaud — BR Tech Sàrl |
| Dépannage | Dépannage ventilation Renens — BR Tech Sàrl |
| Maintenance | Entretien VMC Suisse romande — BR Tech Sàrl |
| Contact | Devis ventilation Vaud — BR Tech Sàrl |
| Hub services | Services de ventilation — BR Tech Sàrl |

H1 accueil **reste** : L'air, maîtrisé. Le title porte la requête.

## Structure contenu (AEO)

- Réponses directes en tête de section (40–80 mots)
- FAQ avec schema `FAQPage` (questions réelles seulement)
- Données factuelles vérifiables uniquement (NAP, process — pas de chiffres inventés)
- Sources CH si pertinent (SIA, canton VD) — pas « conformité garantie à 100 % »

## Schema.org (Phase 3)

| Type | Pages | Champs clés |
|------|-------|-------------|
| Organization + HVACBusiness | Accueil, contact | name, url, address Renens, telephone, openingHours lun.–ven. 7h00–17h00, areaServed (Suisse romande + Vaud + Renens) |
| Service | 3 services + maintenance | name, areaServed |
| FAQPage | FAQ page / accueil | questions réelles |
| BreadcrumbList | Toutes 3.1 | — |
| Review / AggregateRating | — | **Interdit** sans avis réels |

## SEO local (GEO)

- **Pays / locale HTML** : `fr-CH`
- **3.1** : entité via NAP + copy + schema — **pas** de `/zones/*`
- **3.2** : Renens puis Lausanne seulement
- **Google Business Profile** : à créer (catégorie ventilation, pas CVC) — pending
- NAP identique partout. Mail reste Infomaniak.

## Technique SEO (Phase 3)

- Canonical, sitemap, robots, IndexNow (3.0 fait ; sitemap à étendre en 3.1)
- GSC + Bing Webmaster après DNS
- Analytics : non défini

## KPIs

- Demandes devis / visites / appels
- Impressions GSC post-lancement (Tier 1 brief G)
- Citations IA (5 prompts brief G) — noter dans la fiche client
