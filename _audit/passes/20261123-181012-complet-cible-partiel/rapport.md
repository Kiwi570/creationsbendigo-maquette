# Rapport d’audit

Projet : `creationsbendigo-maquette` · 23/11/2026 19:12:42 · 2 min · 1 page(s) · audit complet ciblé sur / (étapes : fichiers, mesures, mouvement, films)

## Résumé

- Statut : **1 échec(s)**
- Passe : `20261123-181012-complet-cible-partiel` · version ?v=2
- Échecs : **1**
- À regarder : **3**
- Non lancé : **0**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), mesures (39), balayage (1), films d’ouverture (2), films de transition (2), mouvement (2), effets du plan (11), souris immobile (2)

## Passes de cette version (?v=2)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261123-173708-complet | complet | toutes | toutes | 1 | 15 | 1 | échecs |
| 20261123-180133-complet-cible-partiel | complet | /,/sculptures | fichiers, mesures, films | 1 | 3 | 0 | échecs |
| 20261123-180458-complet-cible-partiel | complet | /,/sculptures | fichiers, mesures | 0 | 3 | 0 | complet |
| **20261123-181012-complet-cible-partiel** (celle-ci) | complet | / | fichiers, mesures, mouvement, films | 1 | 3 | 0 | échecs |

## Échecs

### effet qui dérive sous la souris immobile (1)

- **effet qui dérive sous la souris immobile** — `/` — [data-souris] eventail — l’image change encore 0.7 % plus qu’au repos, 1,5 à 4,5 s après l’arrêt de la souris _(1366×768 souris)_

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### section sans visuel (1)

- **section sans visuel** — `/` — section#commander « Commander en quatre étapes Pas de commande sur le  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 375×667 normal, 844×390 normal, 320×568 normal, 768×1024 normal, 1024×768 normal, +33)_

### retour arrière : changement brusque (1)

- **retour arrière : changement brusque** — `/` — à 86 ms (différence 25 %) (films/retour-arrière-390.png) _(390×844 retour arrière)_

## Non lancé

Tout a été lancé.


## Repères

- Numéro de version des fichiers : ?v=2
- Journal v2 : 2 étape(s) notée(s), 16 min de travail pour 40 min de budget, 0 min d’attente de l’utilisateur.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2534 ms depuis le premier octet
- Ouverture / (390×844) : 2529 ms depuis le premier octet

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --complet --pages=/ --seulement=fichiers,mouvement
```
