# Handoff DNS — brtech.ch (Infomaniak)

**Destinataire :** personne avec accès manager.infomaniak.com  
**Objectif :** pointer le site web vers Vercel **sans toucher aux e-mails** (`info@brtech.ch`)

---

## Règles absolues

1. **Ne pas** cliquer sur « Modifier les serveurs DNS »
2. **Garder** `nsany1.infomaniak.com` / `nsany2.infomaniak.com`
3. **Laisser** la réplication DNS mondiale **ACTIVÉE**
4. **Ne pas modifier** les enregistrements **MX**, **SPF**, **DKIM**, **DMARC**
5. Modifier uniquement la **Zone DNS** (enregistrements A / CNAME)

---

## Étapes Infomaniak

1. Ouvrir **Domaine** → `brtech.ch` → **Zone DNS** (pas « Serveurs DNS »)
2. Appliquer le tableau ci-dessous
3. Attendre la propagation (souvent 15 min – 2 h, parfois jusqu’à 24–48 h)
4. Confirmer à l’agence quand c’est fait

---

## Enregistrements à créer / remplacer

> Les valeurs exactes seront confirmées après ajout du domaine dans Vercel  
> (Projet Vercel → Settings → Domains).  
> En attendant, valeurs Vercel standard :

| Type | Nom / Hôte | Valeur | TTL | Action |
|------|------------|--------|-----|--------|
| **A** | `@` (ou vide / racine) | `76.76.21.21` | Auto / 3600 | Créer ou remplacer l’ancien A de la racine |
| **CNAME** | `www` | `cname.vercel-dns.com` | Auto / 3600 | Créer ou remplacer |

### Si un ancien enregistrement existe déjà

| Si tu vois… | Faire… |
|-------------|--------|
| A `@` vers une IP Infomaniak / autre | **Remplacer** par `76.76.21.21` |
| CNAME `www` vers autre chose | **Remplacer** par `cname.vercel-dns.com` |
| AAAA (IPv6) sur `@` ou `www` | **Supprimer** s’il entre en conflit (sauf consigne contraire Vercel) |
| Redirection Infomaniak `www` ↔ racine | Désactiver si elle bloque le CNAME / A Vercel |

---

## À ne pas toucher (e-mails)

| Type | Exemple | Pourquoi |
|------|---------|----------|
| **MX** | `mail.infomaniak.com` ou équivalent | Réception `info@brtech.ch` |
| **TXT** SPF | `v=spf1 …` | Anti-spam envoi |
| **TXT / CNAME** DKIM | `*.dkim…` | Signature mail |
| **TXT** DMARC | `_dmarc` | Politique mail |

---

## Checklist de validation (après modification)

- [ ] `https://brtech.ch` ouvre le site Vercel (certificat SSL OK)
- [ ] `https://www.brtech.ch` ouvre le même site
- [ ] Un mail de test vers `info@brtech.ch` est bien reçu
- [ ] Envoi depuis `info@brtech.ch` fonctionne toujours

---

## Message type à envoyer

```
Bonjour,

Merci de mettre à jour uniquement la Zone DNS de brtech.ch
(sans changer les serveurs DNS ni les MX) :

1) Type A — Nom @ — Valeur 76.76.21.21
2) Type CNAME — Nom www — Valeur cname.vercel-dns.com

Ne pas modifier MX / SPF / DKIM / DMARC (mailbox info@brtech.ch).
Laisser la réplication DNS mondiale activée.

Dès que c’est fait, merci de nous prévenir pour qu’on valide SSL + site.

Cordialement
```

---

## Suivi interne agence

| Item | Statut |
|------|--------|
| Domaine | `brtech.ch` |
| Mail gérant | `info@brtech.ch` (Infomaniak — inchangé) |
| Téléphone | `+41 79 176 38 19` *(confirmer — saisi +42)* |
| Adresse | Rue de Lausanne 49g, 1020 Renens VD |
| Hébergement site | Vercel |
| DNS / domaine | Infomaniak |
| Projet Vercel créé | ⏳ Après typo + design + Phase 3 |
| Domaine ajouté dans Vercel | ⏳ Puis coller les valeurs exactes ici |
| Handoff envoyé au client | ⏳ |
| Prep Vercel | [`VERCEL-PREP.md`](VERCEL-PREP.md) |
