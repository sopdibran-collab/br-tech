# Engine SEO / GEO / AEO — BR Tech

`swiss-construction-intelligence` est un **outil transverse** (tous les projets construction CH).  
Ce n’est **pas** le lieu du site BR Tech.

**Analyse là-bas → brief ici → code ici.**

Repo Engine : `/Users/dibransopj/Documents/WEBDEV/swiss-construction-intelligence`  
Specs : vault `INTELLIGENCE-ENGINE/`  
Livraison : `INTELLIGENCE-ENGINE/13_RECOMMENDATIONS/01_DELIVERY_CHECKLIST_ENGINE_TO_PR.md`  
AEO : `INTELLIGENCE-ENGINE/11_SEO/01_AIO_AEO_MAXIMIZER_CH.md`

---

## Prérequis

1. Lexique lu : [`LEXIQUE-METIER.md`](../seo/LEXIQUE-METIER.md)
2. Profil prêt : [`engine-profile.br-tech.v0.1.json`](../seo/engine-profile.br-tech.v0.1.json)
3. Fiche vault BR Tech lue
4. Ne pas inventer de preuves dans le brief

---

## Dans l’Engine (workspace `swiss-construction-intelligence`)

### A. Seed projet

`db:seed` charge **tous** les JSON de `data/seed/projects/` (Sopjani + BR Tech) via `seedProjectFromFile` — pas de métier hardcodé.

Profil Engine (canon ici) : [`engine-profile.br-tech.v0.1.json`](../seo/engine-profile.br-tech.v0.1.json)  
Copie outil : `swiss-construction-intelligence/data/seed/projects/br-tech.v0.1.json`

```bash
npm run db:seed
npm run import:queries -- --file data/samples/queries.br-tech.a-priori.v0.1.csv --project "BR Tech"
```

(CSV a priori ventilation-only — **pas** `queries.bulk.v0.1.csv` / pas GSC.)

### B. Analyser (site encore hors ligne)

Pas de GSC. Lancer quand même opportunités / taxonomie / geo :

```bash
cd /Users/dibransopj/Documents/WEBDEV/swiss-construction-intelligence
npm run analyze:project -- --project "BR Tech"
npm run opportunities:project -- --project "BR Tech"
```

SERP / GSC : seulement si fichier réel ou site live. Ne pas inventer un crawl.

### C. Sortie obligatoire (blocs A–G)

| Bloc | Contenu |
| --- | --- |
| A. Priorités | Top 5 opportunités (query / intent / ville / score + WHY) |
| B. SERP | Concurrents métier vs annuaires (si SERP dispo) |
| C. On-page | N/A tant que site non crawlable — noter « site neuf » |
| D. Contenu | Pages / sections à créer (cas CH, pas commodity) |
| E. Local | Zones éligibles vs à ne **pas** publier |
| F. AEO | Questions → réponses 1 phrase ; sources CH |
| G. Mesure | Requêtes à tracker dès GSC live |

**Ne pas** ouvrir de PR de pages dans l’Engine.

---

## Retour dans ce repo (obligatoire)

Créer / mettre à jour :

1. `docs/seo/BRIEF-ENGINE.md` — coller A–G
2. Vault `03 Projects/BR Tech Sàrl/` — même synthèse
3. Recaler `.cursor/project-context/04-seo-aeo-geo.md` si l’Engine infirme le Brand Book (zones, priorités)
4. **Appliquer** titles / H1 / FAQ / maillage **uniquement ici**

Conflit Engine vs Brand Book vs UX :

- Prestations / nav / CTA → **Phase 1 UX** (produit)
- Preuves / NAP / ton → **vault + Brand Book**
- Priorités mots-clés / zones à publier → **Engine** (après confirmation territoire réel)

---

## Après mise en ligne

1. GSC sur brtech.ch
2. `npm run import:gsc -- --project "BR Tech" --file …`
3. Relancer analyze + opportunities
4. Nouvelle PR **dans ce repo**
