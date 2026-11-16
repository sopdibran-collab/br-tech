# Audit SEO technique — BR Tech Sàrl

**Date :** 16 novembre 2026  
**Dépôt audité :** `sopdibran-collab/br-tech`  
**Branche de référence :** `main`  
**Périmètre :** code, architecture, métadonnées, contenu publié dans le dépôt, données structurées, indexabilité déclarée et maillage interne.

## Synthèse

La fondation SEO du site est déjà structurée : Next.js App Router, métadonnées par page, URL canoniques, sitemap, robots, données structurées, pages services distinctes et maillage interne. L’audit ne justifie pas de créer artificiellement des pages locales ou de multiplier les pages de services.

Trois améliorations techniques ont été appliquées dans cette branche :

1. **Sitemap — dates `lastmod` fiables uniquement.** La date de build était utilisée en secours lorsque l’historique Git était incomplet. Cela pouvait faire croire aux moteurs que toutes les pages avaient été modifiées à chaque déploiement. La date est désormais omise si le dernier commit ne peut pas être établi de façon fiable.
2. **JSON-LD — sérialisation sécurisée.** Les caractères `<` sont échappés avant l’injection du JSON-LD dans le document HTML, ce qui évite qu’une chaîne de données puisse fermer prématurément l’élément `script`.
3. **Entité locale — type Schema.org plus précis.** `HVACBusiness` désigne une entreprise de chauffage, ventilation et climatisation. Comme le positionnement publié de BR Tech est centré sur la ventilation, le type plus large `HomeAndConstructionBusiness` évite d’affirmer implicitement des prestations de chauffage et de climatisation.

## Audit par domaine

| Domaine | Constat dans le dépôt | Évaluation |
|---|---|---|
| Architecture | Accueil, hub services, installation, double flux, dépannage, maintenance, à propos, contact et pages légales | Solide |
| Titles / descriptions | Métadonnées dédiées via `pageMeta`, métadonnées globales et titre d’accueil | Solide ; à revalider sur HTML rendu après déploiement |
| Canonical | Canonical déclaré sur l’accueil et les pages utilisant `pageMeta` | Solide |
| Langue / marché | `lang=fr-CH`, locale `fr_CH`, domaine canonique en HTTPS | Cohérent |
| Robots | Règle générale autorisant le crawl et référence du sitemap | Cohérent ; contrôle HTTP réel impossible ici |
| Sitemap | Routes principales déclarées explicitement ; pages de confirmation exclues | Solide ; correction `lastmod` appliquée |
| Données structurées | Organisation / entreprise, Service, BreadcrumbList et FAQPage visibles | Bonne couverture ; type d’entité corrigé |
| Maillage interne | Hub vers services, liens associés, contact et maintenance | Cohérent |
| Images | Usage de `next/image`, tailles responsive, hero prioritaire et textes alternatifs | Bon socle ; poids et LCP réels à mesurer |
| Contenu local | Renens comme siège, cantons déclarés dans la configuration, pas de pages ville artificielles | Respecte les règles métier du projet |
| AEO / FAQ | Réponses courtes et FAQ visibles, reprises dans le JSON-LD | Cohérent ; aucun affichage enrichi garanti |

## Points à surveiller dans le code existant

- Le site possède déjà des métadonnées et des canoniques ; éviter de réécrire les titles à l’aveugle sans données Search Console ou nouvelle analyse Engine.
- Les pages `/services/renovation`, `/services/extraction` et les pages locales ne doivent pas être créées uniquement pour couvrir des variantes de mots-clés. Les instructions du projet réservent ces extensions à une validation du périmètre et du brief Engine.
- Le contenu contient des engagements opérationnels (délais annoncés, mesures, livrables, expérience de l’équipe). Ils ne doivent pas être amplifiés ou transformés en preuves chiffrées sans validation documentaire.
- Le balisage FAQ est aligné sur les questions visibles. Il ne faut pas promettre de résultat enrichi Google : l’éligibilité et l’affichage dépendent des règles du moteur.
- Les pages légales sont présentes dans le sitemap. Leur maintien n’est pas un défaut technique ; leur priorité SEO reste naturellement faible.

## Vérifications non réalisables depuis le dépôt seul

Ces contrôles ne sont pas simulés et aucun résultat n’est inventé :

- données Google Search Console (indexation, impressions, clics, CTR, positions et requêtes) ;
- crawl de production et vérification des réponses HTTP, redirections, headers, canonical réellement rendu et robots réellement servis ;
- Core Web Vitals / Lighthouse sur appareils et réseaux réels ;
- validation des résultats enrichis via les outils Google ;
- présence et état de la propriété Search Console, analytics et conversions ;
- déploiement Vercel, DNS et configuration externe.

La tentative de lecture directe de `https://brtech.ch` n’a pas été servie par l’outil de consultation utilisé pendant cet audit. Une recherche web ciblée n’a pas retourné de page du domaine. Cela ne prouve ni une panne ni une absence d’indexation ; cela signifie que le crawl public n’a pas pu être confirmé dans cette session.

## Tests et validation

Les modifications ont été relues dans le dépôt et isolées sur une branche. Le build Next.js, ESLint, tests automatisés, rendu HTTP et validation Google n’ont pas été exécutés depuis cette connexion GitHub. Ils doivent être confirmés par les contrôles CI / preview de la Pull Request avant merge.

## Hors périmètre volontaire

Aucune donnée métier, certification, note client, adresse, zone d’intervention, promesse de délai ou preuve commerciale n’a été inventée. Aucune configuration externe (Search Console, Google Business Profile, DNS, Vercel ou analytics) n’a été modifiée. Aucune page locale non autorisée par les règles du projet n’a été créée.
