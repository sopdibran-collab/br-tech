# Phase 3.1 — Content plan & tickets

**Date :** 2026-08-15  
**Source :** [`BRIEF-ENGINE.md`](BRIEF-ENGINE.md) (run Engine a priori, pas de GSC)  
**Produit :** Phase 1 UX — URLs `/services/…` et `/maintenance/`  
**Code Must :** implémenté 2026-08-15 (hub + 3 services + maintenance + titles). Pas de `/zones/*`.

CTA figés : **Demander un devis** · hero **Planifier une visite technique** · tél. header / sticky — pas dans le hero.

---

## Périmètre

| Dans 3.1 | Hors 3.1 |
| --- | --- |
| Accueil : title / meta / schema / maillage (H1 inchangé) | `/zones/*` (Renens / Lausanne = **3.2**) |
| `/services/` hub | Genève, Morges, Ouest lausannois, Nyon, Vevey, Yverdon |
| `/services/installation/` | `/services/extraction/`, `/renovation/`, `/optimisation-energetique/` |
| `/services/double-flux/` | `/ventilation/…` (Brand Book §26 — ne pas créer) |
| `/services/depannage/` | Ressources / FAQ hub, nettoyage gaines |
| `/maintenance/` | Secteurs dédiés (immeubles / EG = ticket Should, pas Must) |
| `/contact/` : title / chapô / AEO devis | `/a-propos/`, `/processus/` (Should EEAT) |
| Nav / footer / sitemap branchés sur ces URLs | Schema `telephone` / `Review` · « devis gratuit » · « intervention rapide » |

Photos chantier : placeholders annotés. Pas de faux projets.

---

## Mapping Engine → URL produit

| # | Intention (query seed) | Score* | URL 3.1 | Pas ça |
| --- | --- | --- | --- | --- |
| 1 | installateur ventilation Vaud | 77.98 | `/services/installation/` | `/zones/vaud/` |
| 2 | entreprise ventilation Suisse romande | 75.33 | `/` (title SEO) | `/zones/suisse/` |
| 3 | installateur VMC double flux Suisse romande | 72.04 | `/services/double-flux/` | `/ventilation/double-flux/` |
| 4 | dépannage ventilation Renens | 65.08 | `/services/depannage/` | page zone (3.2) · délai promis |
| 5 | devis ventilation immeuble Vaud | 63.48 | `/contact/` (+ mention immeuble) | « devis gratuit » |
| — | entretien / contrat / préventif | sous-top | `/maintenance/` | `/services/maintenance/` |
| — | VMC Lausanne / ventilation Lausanne | 61.08 | copy + schema `areaServed` sur services | `/zones/lausanne/` (3.2) |

\*Classement relatif a priori. Pas un volume de recherche.

Hub `/services/` : porte d’entrée mega-menu, pas une 4ᵉ intention head.

---

## Tickets Must (une PR pages 3.1, quand go code)

Copy dans `src/content/` (pas hardcodé dans les TSX). Template service = Phase 1 §10.5 + Brand Book §34, **sans** préfixes `01`–`06` sur les étapes. Une phrase-réponse sous chaque H2, puis développement.

### T-NAV — Brancher la nav réelle

État 3.0 : Services → `/#expertise` · Maintenance → `/contact?type=maintenance` · footer services → `?type=`.

- Services (item) → `/services/`
- Mega-menu live : Installation, Double flux, Dépannage
- Mega-menu pas encore de page : Rénovation, Extraction, Optimisation → ancres hub ou `/contact?type=…` (pas d’URL service fantôme)
- Maintenance → `/maintenance/`
- Pas d’item Zones

### T-HOME — Accueil (pas de nouvelle route)

| Champ | Valeur |
| --- | --- |
| H1 | **L’air, maîtrisé.** (verrouillé) |
| Title (déjà 3.0) | `BR Tech Sàrl \| Ventilation Suisse romande — Renens (VD)` |
| Meta | `BR Tech Sàrl installe et entretient la ventilation à Renens et en Suisse romande — VMC, réseaux, maintenance. Devis après visite technique.` |
| Schema | `Organization` + `HVACBusiness` : `areaServed` = Suisse romande **et** canton de Vaud **et** Renens. `telephone` + `openingHours` lun.–ven. 7h00–17h00. **Sans** `Review`. |

- Cartes expertise : liens vers `/services/installation/`, `/services/double-flux/`, `/maintenance/`
- FAQ accueil : garder les 6 ; aligner les réponses 1 phrase sur le brief F (simple/double flux, CVC, Renens, devis, architectes). Corriger « insufflé » → « insuffle ».
- Entité à répéter (GEO) : BR Tech Sàrl + ventilation + Renens + Suisse romande + VMC + maintenance — sans stuffing.

### T-HUB — `/services/`

| Champ | Valeur |
| --- | --- |
| Title | `Services de ventilation — BR Tech Sàrl` |
| H1 | Installation, double flux et dépannage |
| Chapô (AEO) | BR Tech Sàrl conçoit, pose et dépanne les réseaux de ventilation en Suisse romande, depuis Renens. Trois portes d’entrée : installation neuve, VMC double flux, dépannage. La maintenance préventive a sa propre page. Pas de chauffage ni de plomberie. |

Liste : 3 cartes live + 3 lignes « aussi » (rénovation, extraction, optimisation) vers contact, sans pages vides.

### T-INSTALL — `/services/installation/`

Intention #1.

| Champ | Valeur |
| --- | --- |
| Title | `Installateur ventilation Vaud — BR Tech Sàrl` |
| H1 | Installation de ventilation à Renens et en Vaud |
| Chapô | BR Tech Sàrl installe des systèmes de ventilation à Renens et dans le canton de Vaud : relevé, calage sur le cahier des charges, pose, mise en service mesurée. Résidentiel, immeubles, tertiaire. Le devis suit la visite technique. Offre limitée à l’air — pas le CVC généraliste. |

**H2 (1 phrase puis détail)**

- Pour qui — Architectes, régies, EG et maîtres d’ouvrage qui ont un lot air à poser sans le diluer dans le chauffage.
- Ce que nous posons — Réseaux neufs, caissons, bouches, simple ou double flux selon le projet.
- Comment ça se passe — Visite technique, analyse, offre, installation, mise en service, puis maintenance si elle est retenue.
- Normes — Les installations s’inscrivent notamment dans le cadre **SIA 382/1** ; l’humidité intérieure relève aussi de la **SIA 180**. Pas de « conformité garantie ».
- Livrables — Documentation, mesures de débit, chantier rangé, plan d’entretien proposé.

**FAQ (schema `FAQPage`)** — F3 (SIA), F11 (pas chauffage/plomberie), F12 (pas une page par commune), F9 (devis).

Maillage : hub · double-flux · dépannage · maintenance · contact. **Pas** de lien `/zones/renens/` tant que 3.2.

`Service` schema : name Installation de ventilation, areaServed Vaud / Suisse romande.

### T-DOUBLE-FLUX — `/services/double-flux/`

Intention #3 + cluster `vmc lausanne`.

| Champ | Valeur |
| --- | --- |
| Title | `VMC double flux Vaud — BR Tech Sàrl` |
| H1 | VMC double flux en Vaud et à Lausanne |
| Chapô | Une VMC double flux insuffle et extrait l’air, en général avec récupération de chaleur. BR Tech Sàrl l’installe en Suisse romande depuis Renens, pour le logement, l’immeuble et le tertiaire. Le gain énergétique dépend du bâtiment et de la pose — pas d’un pourcentage annoncé. |

**H2**

- Simple flux ou double flux — F1 (différence, 1 phrase).
- Efficacité énergétique — F6 (récupération ; citer LVLEne / MoPEC **seulement** comme cadre cantonal, pas un slogan).
- Pour quel bâtiment — Logement étanche, immeuble, bureaux : le dimensionnement suit l’usage.
- Pose et mise en service — Réseaux, caisson, équilibrage des débits, traces écrites.
- Entretien — Filtres et débits : renvoyer vers `/maintenance/`.

**FAQ** — F1, F6, F2 (fréquence — sans fréquence « légale » inventée).

Maillage : installation · maintenance · contact.

### T-DEPANNAGE — `/services/depannage/`

Intention #4. **Interdit :** « intervention rapide », délai d’arrivée, urgence 24/7 non prouvé.

| Champ | Valeur |
| --- | --- |
| Title | `Dépannage ventilation Renens — BR Tech Sàrl` |
| H1 | Dépannage de ventilation à Renens |
| Chapô | BR Tech Sàrl intervient sur les pannes de ventilation depuis son siège à Renens (Rue de Lausanne 49g). Diagnostic, remise en service du réseau d’air, sans promesse de délai. Lausanne et le canton se confirment selon le projet. |

**H2**

- Quand appeler — Bruit, perte de débit, air vicié, hygrométrie qui dérive (F5) — sans en faire une page QAI.
- Ce que nous faisons — Relevé, identification, réparation ou préconisation de remplacement.
- Renens et alentours — NAP siège ; pas de page commune. Preuve locale = adresse réelle, pas une galerie de villes.
- Après la panne — Passage vers contrat d’entretien (`/maintenance/`).

**FAQ** — F5, F8 (siège Renens), F4 (humidité : ventilation **et** enveloppe, pas un diagnostic magique).

Maillage : installation · maintenance · contact.

### T-MAINTENANCE — `/maintenance/`

Nav **séparée**. Pas `/services/maintenance/`.

| Champ | Valeur |
| --- | --- |
| Title | `Entretien VMC Suisse romande — BR Tech Sàrl` |
| H1 | Maintenance et entretien de VMC |
| Chapô | La performance d’une VMC (débits, filtres, hygiène des réseaux) se tient par un suivi. BR Tech Sàrl propose la maintenance comme offre distincte de l’installation, en Suisse romande, depuis Renens. |

**H2**

- Pourquoi un contrat — F7.
- Fréquence — F2 (fabricant + contrat ; souvent au moins un passage filtres / an en logement — pas une loi unique).
- Ce qui est contrôlé — Filtres, bouches, débits ; l’hygiène des gaines n’est pas un nettoyage de locaux (F10 en une phrase, **sans** page dédiée).
- Pour les régies — Suivi documenté, interlocuteur unique sur le lot air.

**FAQ** — F2, F7, F10 (une phrase).

Maillage : installation · double-flux · contact `?type=maintenance`.

### T-CONTACT — `/contact/` (page existante)

Intention #5.

| Champ | Valeur |
| --- | --- |
| Title | `Devis ventilation Vaud — BR Tech Sàrl` |
| H1 | Contact (Phase 1 — inchangé) |
| Lead | Demandez un devis ou une visite technique pour un logement, un immeuble ou un chantier en Vaud. Pas de devis « gratuit » annoncé. |

- Préremplissage `?type=` déjà en place : conserver (installation, double-flux, dépannage, maintenance, visite).
- Une phrase AEO (F9) sous le H1 ou en aside : le devis suit la compréhension du besoin, et la visite technique si elle est nécessaire.
- NAP identique ; horaires lun.–ven. 7h00–17h00 ; tél. confirmé.
- Schema : même org que l’accueil ; BreadcrumbList.

### T-SCHEMA / T-SITEMAP

- `BreadcrumbList` sur hub + 3 services + maintenance + contact.
- `Service` sur les 3 services + maintenance.
- `sitemap.ts` : ajouter les 5 URLs (hub, 3 services, maintenance).
- Canonical par page. IndexNow déjà en 3.0 — ping plus tard (preview/prod).

---

## Tickets Should (pas dans le Must 3.1)

| ID | Route | Pourquoi attendre |
| --- | --- | --- |
| T-ABOUT | `/a-propos/` | EEAT utile ; Engine ne le classe pas en top 5. Accueil « Pourquoi » suffit en Must. |
| T-PROCESS | `/processus/` | 6 étapes déjà sur l’accueil. |
| T-SECTEURS | `/secteurs/immeubles/` · `/secteurs/architectes-entreprises-generales/` | Query #5 + B2B 52.55. Brief : seulement « si 3.1 les ouvre ». Contact porte le devis immeuble en Must. |
| T-REAL | `/realisations/` | Placeholder sans faux chantiers — après photos. |

---

## Hors scope (refuser dans la PR)

- `/zones/renens/`, `/zones/lausanne/` → **3.2** après confirmation territoire (Renens = siège = éligible ; Lausanne = 2ᵉ page).
- Nyon, Vevey, Montreux, Yverdon, Morges, Ouest lausannois, Genève, `/zones/vaud/`, `/zones/suisse/`.
- `/ventilation/…`, `/services/extraction/`, `/renovation/`, `/optimisation-energetique/`, page nettoyage gaines.
- Avis, AggregateRating, certifications, chiffres, « devis gratuit », « intervention rapide », « installation certifiée ».
- `llms.txt` « pour Google ».
- Aceternity, bottom nav, CMS.

---

## AEO — qui porte quelle question (brief F)

| # | Question | Page 3.1 |
| --- | --- | --- |
| 1 | Simple flux vs double flux | Accueil FAQ + `/services/double-flux/` |
| 2 | Fréquence entretien VMC CH | `/maintenance/` |
| 3 | SIA 382/1 · 180 | `/services/installation/` |
| 4 | Humidité / enveloppe | `/services/depannage/` (pas une page QAI) |
| 5 | Air vicié + VMC | `/services/depannage/` |
| 6 | Double flux et énergie | `/services/double-flux/` |
| 7 | Contrat après pose | `/maintenance/` |
| 8 | Qui à Renens | Accueil FAQ + dépannage + contact NAP |
| 9 | Devis régie / immeuble | `/contact/` |
| 10 | Gaines ≠ ménage | `/maintenance/` (1 phrase) |
| 11 | Pas chauffage / plomberie | Accueil FAQ + installation |
| 12 | Pas une page par commune | Installation FAQ |

---

## GEO (3.1 vs 3.2)

En 3.1 l’entité se construit **sans** pages ville : NAP Renens partout, `areaServed` Vaud + Suisse romande, copy « depuis Renens ».  
Pages `/zones/renens/` et `/zones/lausanne/` = 3.2. Satellites = cluster-only.

GBP : pending ops (catégorie ventilation, pas CVC). Hors code.

---

## Mesure (après go-live — pas maintenant)

GSC Tier 1 : liste brief G.  
5 prompts citation IA : brief G — noter dans la fiche vault, pas optimiser le copy pour ça en 3.1.

---

## Ordre d’implémentation (quand go code 3.1)

1. `src/content/` des 5 pages + titles  
2. Template service (RSC) + breadcrumbs  
3. Routes + nav/footer/`site.ts`  
4. Accueil liens + schema `areaServed`  
5. Contact title/lead  
6. `sitemap.ts`  
7. Checks : Scan & fold · Primary CTA · Trust · Anti AI template · Contrast AA

Pas de PR tant que ce plan n’est pas le brief d’implémentation — **go code 3.1** explicite.
