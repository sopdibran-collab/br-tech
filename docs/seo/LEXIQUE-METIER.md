# Lexique métier — BR Tech Sàrl

> À lire **avant** tout run Engine.  
> Source : Brand Book §27–30 + Phase 1 UX. Ne pas élargir au CVC généraliste.

## Entité

- Nom légal : **BR Tech Sàrl**
- Marque : BR Tech
- Siège : Renens (VD), Rue de Lausanne 49g, 1020
- Métier : **ventilation** (spécialiste)
- Signature : L’air, maîtrisé.

## Termes canoniques (utiliser)

| Champ | Termes |
| --- | --- |
| Technique | ventilation, VMC, double flux, simple flux, extraction, insufflation, débit d’air, renouvellement d’air, gaines, réseaux aérauliques, filtration, caisson, bouche, diffuseur, récupération de chaleur |
| Qualité | qualité de l’air intérieur, humidité, condensation, moisissures, CO₂, confort, hygiène de l’air |
| Suisse | normes SIA, conformité, réception, documentation, traçabilité, standards suisses, devis, régie, canton |
| Service | installation, rénovation, maintenance préventive, entretien, dépannage, diagnostic, mise en service, suivi |
| Bénéfices | efficacité énergétique, performance, durabilité, fiabilité, précision, propreté de chantier |
| Territoire | Renens, Lausanne, Canton de Vaud, Suisse romande, arc lémanique, Ouest lausannois |

## Synonymes / alias Engine

- VMC = ventilation mécanique contrôlée
- Double flux = VMC DF, récupération de chaleur
- Simple flux = extraction
- Maintenance = entretien VMC, contrat de maintenance, préventif
- Dépannage = panne VMC, urgence ventilation *(sans promettre un délai non validé)*

## Termes à éviter (copy + Engine excluded_topics)

chauffage (comme offre), plomberie, peinture, climatisation comme métier principal, sprinkler, « pas cher », « révolutionnaire », « meilleur de Suisse », « installation certifiée » (sans preuve)

## Mapping taxonomie Engine (CH construction)

| Offre site | domain_slug | service_slug |
| --- | --- | --- |
| Ventilation (cœur) | `hvac` | `ventilation` |
| Maintenance VMC | `hvac` + `maintenance` | `maintenance-hvac`, `maintenance` |

Ne **pas** mapper heating / plumbing / fire-protection.

## Intentions types (pour l’Engine)

- Transactionnel local : ventilation Renens, VMC Lausanne
- Service : installation VMC double flux, rénovation ventilation immeuble
- B2B : ventilation régie, sous-traitance entreprise générale
- Problème / AEO : humidité appartement ventilation, fréquence entretien VMC
- Maintenance : entretien VMC Vaud

## Pages locales — règle

Une page `/zones/{ville}/` seulement si **intervention réelle**. Sinon clusterer dans l’Engine mais ne pas publier.
