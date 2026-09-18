---
tags: [intelligence-engine, project, br-tech, seo, geo, aeo]
status: first-run
date: 2026-08-15
---

# Brief Engine — BR Tech Sàrl (premier run)

**Date :** 2026-08-15  
**Projet Engine :** `BR Tech` (raison sociale : BR Tech Sàrl)  
**Site :** brtech.ch — **neuf, pas en ligne** (repo `sopdibran-collab/br-tech`)  
**Langue :** fr-CH · **Siège :** Rue de Lausanne 49g, 1020 Renens VD  
**Algorithme :** `algorithm_bundle.v0.1` (non modifié)

**Outil :** `swiss-construction-intelligence` (analyse seulement)  
**Profil :** [`engine-profile.br-tech.v0.1.json`](engine-profile.br-tech.v0.1.json) · [`LEXIQUE-METIER.md`](LEXIQUE-METIER.md)  
**Procédure :** [`docs/ops/ENGINE-SEO-GEO-AEO.md`](../ops/ENGINE-SEO-GEO-AEO.md)

Handoff Engine → **appliquer ici en Phase 3.1** (pas dans le repo moteur). Ne pas coder les 6 services + 8 zones d’un coup. `.cursor/project-context/04-seo-aeo-geo.md` non recalé (écarts listés en fin de brief).

**NAP après ce run (chat client 2026-08-15) :** tél. **confirmé** ; horaires **lun.–ven. 7h00–17h00**. Appliqué vault + site — ne plus masquer tél./horaires.

## Limites (à relire avant d’appliquer)

| Donnée | Statut |
| --- | --- |
| GSC | **Aucune.** Pas d’impressions, positions, CTR. Ne pas lire les scores comme un volume de recherche. |
| SERP | **Non disponible.** Pas de commande `serp:sync` dans le moteur v0.1 ; aucun export SERP dans `data/samples/`. brtech.ch **non crawlé**. |
| On-page | **N/A** — site neuf. |
| Demand (composante) | Proxy d’intentions (`opportunity.v0.1`) : `0.35·COMMERCIAL + 0.25·LOCAL + 0.25·EMERGENCY + 0.15·TRANSACTIONAL`. Plafond observé ≈ 49/100 sans GSC. |
| Trend `GROWING` | **Non attribuable à BR Tech.** L’intérêt taxonomique `ventilation` est partagé ; des signaux Trends d’autres projets peuvent fuiter. Ignorer comme preuve de marché. |
| Décision `score≥80` | Aucune requête n’atteint 80 (demande plafonnée). Le **classement relatif** reste utilisable. |
| Tél. | +41 79 176 38 19 — **à confirmer**, pas une preuve verrouillée. Horaires manquants. |
| Avis / certifs / « devis gratuit » / « intervention rapide » / « installation certifiée » | **Interdit** d’inventer. |

## Commandes lancées

```bash
npm run db:seed
# → projects: « BR Tech » + « Sopjani Tech » (intact)

npm run import:queries -- --file data/samples/queries.br-tech.a-priori.v0.1.csv --project "BR Tech"
# → 45 inserted, 0 updated — seed a priori, PAS GSC, PAS queries.bulk.v0.1.csv

npm run embed:project -- --project "BR Tech"          # 45, local-hash
npm run analyze:project -- --project "BR Tech"        # 45 queries, HDBSCAN 3 clusters
npm run opportunities:project -- --project "BR Tech"  # 45 opportunités
```

**Non lancés :** `import:gsc`, `gsc:sync`, `serp:sync` (inexistant), `onpage:crawl`.

## Seed vérifié (SQL)

| Champ | Valeur |
| --- | --- |
| `projects.name` | `BR Tech` |
| Domains | `hvac`, `maintenance` |
| Services | `ventilation`, `maintenance-hvac`, `maintenance` |
| Geo | VD (10) · Renens (11) · Lausanne (12) · Nyon (20) · Vevey (21) · Montreux (22) · Yverdon-les-Bains (30) |
| `excluded_topics` | painting, cleaning, plastering, carpentry, **heating, plumbing, sanitary, sprinkler, fire-protection** |
| Sopjani | présent (domains fire-protection / hvac / maintenance / sanitary-plumbing ; 131 requêtes inchangées) |

CSV : `data/samples/queries.br-tech.a-priori.v0.1.csv` (45 lignes, schema `raw_query,language,date`, dates = snapshot seed 2026-08-15).

Clusters HDBSCAN (17/45 membres ; 28 noise) : `installateur ventilation vaud` (9) · `vmc lausanne` (4) · `ventilation lausanne` (4).

---

## A. Priorités — Top 5 opportunités

Scores = `opportunity.v0.1` sur seed **a priori**. GSC = n/a partout. `business_relevance.v0.1` : overlap domain/service/geo du profil (95 = canton/ville du profil ; 80 = Suisse / Suisse romande hors `company_profile_geo`).

| # | Query | Intent moteur | Ville / canton | Score | Action | WHY |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | installateur ventilation Vaud | COMMERCIAL 0.8 · LOCAL 0.85 | **Vaud** (canton, prio 10) | **77.98** (conf. 0.882) | `CREATE_LOCAL_PAGE` | Fit métier 95 + intent installateur + geo profil. Content gap 75 (aucune page GSC). Demand 49 = proxy, pas un volume. **Mapper vers `/services/installation/`**, pas `/zones/vaud/` (un canton n’est pas une page ville). |
| 2 | entreprise ventilation Suisse romande | COMMERCIAL 0.8 · LOCAL 0.85 | Suisse **et** Suisse romande (pays + `language_region`) | **75.33** (0.882) | `CREATE_LOCAL_PAGE` | Même pattern commercial+local. Fit 80 : « Suisse romande » n’est **pas** dans `company_profile_geo` (VD only). Le titre moteur « page — Suisse » est un **anti-pattern** : ne **pas** publier `/zones/suisse`. **Mapper vers l’accueil** (entité + areaServed). |
| 3 | installateur VMC double flux Suisse romande | COMMERCIAL 0.8 · LOCAL 0.85 | Suisse + Suisse romande | **72.04** (0.764) | `CREATE_LOCAL_PAGE` | Même logique que #2, intérêt `VMC` (alias ventilation). Trend `INSUFFICIENT_DATA` (intérêt distinct). **Mapper vers `/services/double-flux/`**. |
| 4 | dépannage ventilation Renens | EMERGENCY 0.8 · LOCAL 0.85 | **Renens** (siège, prio 11) | **65.08** (0.882) | `CREATE_LOCAL_PAGE` | Seule requête top-5 **ville + siège**. Fit 95. Content gap 71. **Mapper vers `/services/depannage/`** + preuve locale sur `/zones/renens/` (3.2). Ne pas promettre un délai. |
| 5 | devis ventilation immeuble Vaud | TRANSACTIONAL 0.8 · LOCAL 0.85 | **Vaud** | **63.48** (0.882) | `CREATE_PAGE` | `devis` n’est pas COMMERCIAL/EMERGENCY → pas `CREATE_LOCAL_PAGE`. Fit 95. CTA produit déjà **Demander un devis**. **Mapper vers `/contact/` + `/services/installation/`** ; secteur immeubles en 3.1 si le cocon secteurs est ouvert. |

**Lecture du classement.** Sans GSC, les queries **commerciales / urgence + geo profil** sortent devant les queries « ventilation {ville} » (toutes à 61.08, demand 21). L’égalité de score entre Renens / Nyon / Vevey / Montreux / Yverdon sur `ventilation {ville}` **n’est pas** une preuve d’égalité de marché — c’est le même pattern d’intent + `geo_overlap=1`. La règle de publication zones (siège / territoire réel) prime sur ce plateau.

**Juste sous le top 5 (pour le cocon, pas pour réordonner A) :** sous-traitance EG 63.07 · installation ventilation Vaud / maintenance Lausanne / ventilation industrielle|bureaux Vaud / ventilation {Renens,Lausanne,satellites} 61.08 · dépannage VMC Lausanne 59.60 (`CREATE_LOCAL_PAGE`).

---

## B. SERP

**N/A — SERP non disponible.** Site neuf ; pas de pipeline `serp:sync` dans le moteur v0.1 ; pas de fichier SERP réel dans `data/samples/` ; brtech.ch non crawlé.

Conséquence : `competition_inverse` = défaut 55. **Ne pas** confondre un futur mix annuaires (`search.ch`, local.ch, directories) avec des concurrents métier. Relancer après go-live + export SERP réel.

---

## C. On-page

**N/A — site neuf, non crawlable.** Pas de titles/H1/coverage. La Phase 3.0 (accueil + contact) peut chevaucher ; la 3.1 **attend** ce brief.

---

## D. Contenu — pages / sections

Intentions → **URLs produit** (`/services/…`, `/maintenance/`). Ne **pas** imposer l’arborescence Brand Book `/ventilation/…`.

### v1 Phase 3.1 (livrable site — après fondation 3.0)

Ordre Engine, plafonné à ce que la Phase 3.1 prévoit déjà (hub + 3 services max + maintenance + EEAT) :

| Intention Engine | URL produit | Note |
| --- | --- | --- |
| entreprise ventilation Suisse romande / installateur Vaud | `/` (title SEO, pas le H1) | H1 reste **L’air, maîtrisé.** Title porte la requête. areaServed : Vaud / Suisse romande. |
| installateur / installation ventilation | `/services/` + `/services/installation/` | Top query. |
| VMC double flux | `/services/double-flux/` | #3 + cluster `vmc lausanne`. |
| dépannage | `/services/depannage/` | #4 siège + `dépannage VMC Lausanne`. Sans « intervention rapide ». |
| entretien / contrat / maintenance préventive | `/maintenance/` | Nav **séparée** (pas `/services/maintenance/`). |
| devis immeuble / régie / architecte | `/contact/` (CTA) + 2 secteurs si 3.1 les ouvre : immeubles · architectes/EG | #5 + queries B2B 52.55. |

Chapô AEO 40–60 mots + **1 phrase sous chaque H2**. Schema `Organization` + `HVACBusiness` **sans** `telephone` tant que le tél. n’est pas confirmé ; **sans** `Review`.

### Plus tard (cocon — ne pas publier en 3.1)

| Intention | URL probable | Pourquoi plus tard |
| --- | --- | --- |
| extraction / simple flux | `/services/extraction/` | Score VMC extraction 54.74 ; pas dans le top commercial. |
| rénovation aéraulique | `/services/renovation/` | « aéraulique » **non mappé** (intérêts vides, fit 15, score 33.67). Intention réelle ; le lexique doit porter, pas une page vide. |
| optimisation énergétique / récupération de chaleur | `/services/optimisation-energetique/` | Plateau VMC 54.74. |
| nettoyage gaines | ressource / service satellite | Score **28.82**, `business_relevance=0` : `excluded_topics` contient `cleaning` → faux positif vs nettoyage de **gaines**. Cocon Brand Book, pas 3.1. **Ne pas** conclure que l’offre est hors scope. |
| QAI, humidité, simple vs double flux, SIA, fréquence entretien | `/ressources/…` ou FAQ | Scores AEO 36–58 ; `CREATE_FAQ` peu déclenché (lexique INFORMATIONAL étroit). Traiter en 3.2. |
| ventilation industrielle / bureaux | `/secteurs/…` | 61.08, après les 2 secteurs Marc. |
| pages `/zones/*` | voir **E** | 3.2 seulement. |

---

## E. Local / GEO

Règle : une ville = **publier** **ou** **cluster-only**, jamais les deux. Page `/zones/{ville}/` seulement si territoire d’intervention **réel**.

### Publier (éligible — preuve d’opportunité + ville du profil)

| Zone | Décision | WHY |
| --- | --- | --- |
| `/zones/renens/` | **PUBLIER** (3.2) | Siège NAP = territoire réel. Queries : `dépannage ventilation Renens` 65.08 `CREATE_LOCAL_PAGE` ; `ventilation Renens` / `VMC Renens` / `installation VMC double flux Renens` / `contrat entretien VMC Renens`. Prio geo 11. |
| `/zones/lausanne/` | **PUBLIER** (3.2, 2ᵉ page) | Ville du profil prio 12 + opportunités (`ventilation Lausanne` 61.08, `dépannage VMC Lausanne` 59.60 `CREATE_LOCAL_PAGE`, cluster `vmc lausanne` / `ventilation lausanne`). Brand Book : ancrage arc lémanique. Pas de preuve chantier ; pas hors profil. |

Pas de `/zones/vaud/` (canton → accueil / services). Pas de `/zones/suisse/`.

### Clusterer seulement — ne pas publier

| Zone | WHY |
| --- | --- |
| Nyon, Vevey, Montreux, Yverdon-les-Bains | Villes du profil (prio 20–30) : `ventilation {ville}` **même score 61.08** que Renens (artifact sans GSC). Pas de siège. UX/Brand Book : seulement si zone réelle. **Scorer, ne pas publier** tant que l’intervention n’est pas confirmée. |
| Morges | **Pas** dans le geo profil. Gazetteer : **aucune** ville `Morges` (`locations=null`, score 36.64). Brand Book `/zones/morges/` = trop tôt. Clusterer (Ouest lémanique / Lausanne) — **ne pas publier**. |
| Ouest lausannois | Pas une loc gazetteer (`locations=null`, 46.18). Clusterer **dans Renens** (siège de l’agglomération). **Ne pas** publier `/zones/ouest-lausannois/`. |
| Vevey–Montreux (page fusionnée Brand Book) | Deux villes seedées séparément ; fusion = encore une page zone. Cluster-only tant que territoire non confirmé. |

### Ne pas publier (hors VD / non seedé)

**Genève** : non seedée. Interdit `/zones/geneve/` tant que non confirmé.  
Hors VD / Valais / etc. : hors profil.

### Entité à entraîner — **validée** (avec limites moteur)

Cible Brand Book : « BR Tech Sàrl » + ventilation + Renens + Suisse romande + maintenance + VMC.

| Signal | Verdict |
| --- | --- |
| Profil + graphe `OFFERS` | Company **BR Tech Sàrl** → `ventilation`, `maintenance-hvac`, `maintenance`. |
| Queries a priori | ventilation/VMC **co-annotés** avec Renens, Lausanne, Vaud, Suisse romande (`language_region` CH-FR). |
| Marque dans les queries | **Absente** du CSV → intent BRAND = 0. L’entité marque se construit **sur le site / GBP / citations**, pas dans ce seed. |
| Co-occurrence `SEARCHED_WITH` | Intérêt↔intérêt, **pas** marque↔lieu. 5 arêtes ; ne pas lire comme un graphe d’entité web. |
| Gazetteer « Suisse romande » | Détecté **et** « Suisse » (sous-chaîne pays). D’où les titres « page — Suisse ». Correction humaine : entité romande sur l’accueil, pas une URL Suisse. |

**Ne pas infirmer** la stratégie d’entité. **Pas de preuve web** (pas de SERP/GSC/crawl) qu’elle est déjà apprise par Google/IA.

### GBP (recommandation — profil **non** inventé)

Aucun GBP constaté (site hors ligne, pas d’audit directory). **À créer** (pending ops), aligné NAP :

- Catégorie primaire : **entreprise de ventilation** / équivalent « HVAC contractor » **centré ventilation** — pas plombier, pas chauffage, pas peintre, pas sprinkler.
- Secondaire éventuelle : installateur de systèmes de ventilation / maintenance HVAC — seulement si l’UI Google l’offre **sans** diluer en CVC généraliste.
- Description : nom légal, Renens, ventilation, Suisse romande, VMC, maintenance. Pas de superlatif, pas d’avis fantômes.
- Tél. seulement si confirmé ; horaires masqués tant que manquants.

---

## F. AEO — questions → 1 phrase (faits seulement)

À coller sous H2 / FAQ. Pas de superlatif. Sources CH quand c’est le sujet.

1. **Quelle est la différence entre VMC simple flux et double flux ?**  
   Le simple flux extrait l’air vicié et laisse entrer l’air neuf par des entrées ; le double flux insuffle et extrait, en général avec récupération de chaleur sur l’air extrait.

2. **À quelle fréquence entretenir une VMC en Suisse ?**  
   Il n’existe pas une fréquence légale unique : le rythme est fixé par le fabricant et le contrat d’entretien (souvent au moins un passage filtres / an en logement).  
   *Source : consignes fabricant + contrat — pas un article de loi inventé.*

3. **Quelle norme suisse concerne la ventilation des logements ?**  
   Les installations de ventilation des bâtiments sont traitées notamment par la **SIA 382/1** (ventilation et climatisation des bâtiments) ; l’humidité et le climat intérieur relèvent aussi de la **SIA 180**.  
   *Source : SIA 382/1, SIA 180. Ne pas affirmer « conformité garantie ».*

4. **L’humidité dans un appartement vient-elle d’un défaut de ventilation ?**  
   Un renouvellement d’air insuffisant favorise l’humidité et les moisissures ; une VMC dimensionnée et entretenue évacue la vapeur d’eau, sans remplacer un diagnostic de l’enveloppe.  
   *Source : SIA 180 (protection contre l’humidité).*

5. **Air vicié : que faire avec une VMC ?**  
   L’air vicié (CO₂, odeurs, humidité) se traite par un renouvellement d’air mécanique adapté et un entretien (filtres, bouches), pas seulement par une aération ponctuelle.

6. **La VMC double flux améliore-t-elle l’efficacité énergétique ?**  
   Un double flux avec récupération de chaleur réduit les pertes liées au renouvellement d’air par rapport à une extraction sans récupération ; le gain dépend de l’installation et du bâtiment, pas d’un pourcentage inventé.  
   *Canton VD : exigences énergétiques via la LVLEne / MoPEC cantonal — citer le texte applicable au projet, pas un slogan.*

7. **Faut-il un contrat d’entretien après l’installation ?**  
   La performance (débits, filtres, hygiène des réseaux) se maintient par un suivi ; BR Tech propose la maintenance comme offre séparée de l’installation (nav `/maintenance/`).

8. **Qui intervient à Renens ?**  
   BR Tech Sàrl a son siège à Renens (VD), Rue de Lausanne 49g, 1020, et travaille la ventilation en Suisse romande depuis cet ancrage.

9. **Une régie ou un immeuble peut-il demander un devis ventilation ?**  
   Oui : le devis est le CTA primaire ; la visite technique est le CTA secondaire du hero — sans promettre un « devis gratuit ».

10. **Le nettoyage des gaines fait-il partie de la ventilation ?**  
    L’hygiène des réseaux aérauliques conditionne la qualité de l’air ; ce n’est pas un nettoyage de locaux. (Page dédiée = cocon, pas 3.1.)

11. **BR Tech fait-il aussi chauffage ou plomberie ?**  
    Non : l’offre seedée est **ventilation** (et maintenance associée), pas le CVC généraliste.

12. **Faut-il une page par commune vaudoise ?**  
    Non : une page zone seulement si le territoire d’intervention est réel ; le canton de Vaud se porte sur l’accueil et les services.

---

## G. Mesure

### Tier 1 — tracker dès GSC live (pas de volumes aujourd’hui)

1. installateur ventilation Vaud  
2. entreprise ventilation Suisse romande  
3. ventilation Renens  
4. ventilation Lausanne / VMC Lausanne  
5. VMC double flux Vaud (et Lausanne)  
6. dépannage VMC Lausanne / dépannage ventilation Renens  
7. entretien VMC Suisse romande / maintenance ventilation Lausanne  
8. devis ventilation immeuble Vaud  

Complément : `BR Tech` / `BR Tech Sàrl` (marque — absente du seed a priori).

### 5 prompts de test citation IA (mensuel)

Noter : cité / non cité / qui est cité à la place. Ne pas optimiser pour `llms.txt`.

1. « Quelle entreprise installe de la ventilation à Renens (Vaud) ? »  
2. « Différence VMC simple flux et double flux en Suisse, norme SIA ? »  
3. « Entretien VMC en Suisse romande : à quelle fréquence ? »  
4. « Installateur VMC double flux Lausanne / canton de Vaud pour une régie immobilière ? »  
5. « Humidité dans un appartement à Lausanne : est-ce un problème de ventilation ? »

---

## Anti-patterns détectés / à refuser

- Pages `/zones/*` hors territoire (Genève, Morges, Ouest lausannois, satellites non confirmés) alors que les scores `ventilation {ville}` sont **à égalité** sans GSC.  
- Confondre un futur SERP d’**annuaires** avec des concurrents métier.  
- Contenu IA scaled / fermes long-tail « pour l’AIO ».  
- `llms.txt` « pour Google » (ignoré par Search).  
- URL Brand Book `/ventilation/…` imposée alors que le produit a `/services/…`.  
- `/zones/suisse` à cause du match gazetteer pays.  
- Copy interdit : devis gratuit, intervention rapide, installation certifiée, avis, chiffres.  
- Dilution CVC (chauffage, plomberie, clim comme métier).

---

## Écarts Engine vs Brand Book (liste, Brand Book **non** réécrit)

1. **Arborescence services** — Brand Book §26 : `/ventilation/installation/` etc. Produit (Phase 1 UX) : `/services/installation/`. L’Engine **mappe les intentions** vers le produit.  
2. **Sitemap zones** — Brand Book liste Genève, Morges, Ouest lausannois, Nyon, Vevey–Montreux, Yverdon. Engine : **Renens publier** ; **Lausanne publier en 3.2** ; le reste **cluster-only** ; Genève **non seedé**.  
3. **Maintenance** — Brand Book sous `/ventilation/maintenance/` ; nav produit = `/maintenance/` séparée. Conserver le produit.  
4. **Nettoyage gaines** — au cocon Brand Book ; l’Engine le **pénalise** (`cleaning` ∈ excluded_topics, fit 0). Ne pas changer l’algo ; override éditorial en cocon, pas en 3.1.  
5. **« aéraulique »** — lexique métier, **pas** dans la gazetteer d’intérêts → sous-score 33.67. Ajouter l’alias côté taxonomie plus tard (données, pas le core).

`.cursor/project-context/04-seo-aeo-geo.md` n’a **pas** été recalé : pas de contradiction factuelle qui invalide les primaires accueil / double flux / maintenance / Renens / Lausanne — seulement un **refus de publier** le reste du sitemap zones.

---

## Definition of Done (ce run)

- [x] `db:seed` charge « BR Tech » sans casser Sopjani  
- [x] CSV a priori ventilation-only, 45 lignes, importé  
- [x] `analyze:project` + `opportunities:project` OK  
- [x] Brief A–G (ce fichier)  
- [x] Chaque zone = publier **ou** cluster-only  
- [x] Aucune preuve GSC/SERP/avis inventée  
- [x] Core toujours générique (`seedProjectFromFile`, pas de métier hardcodé)
