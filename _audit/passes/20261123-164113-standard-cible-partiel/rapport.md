# Rapport d’audit

Projet : `creationsbendigo-maquette` · 23/11/2026 17:43:14 · 2 min · 6 page(s) · audit standard ciblé sur /,/404,/artiste,/contact,/sculptures,/toiles (étapes : fichiers, mesures)

## Résumé

- Statut : **12 échec(s)**
- Passe : `20261123-164113-standard-cible-partiel` · version ?v=1
- Échecs : **12**
- À regarder : **11**
- Non lancé : **0**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), mesures (66), balayage (5)

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261123-162305-standard | standard | toutes | toutes | 54 | 30 | 1 | échecs |
| **20261123-164113-standard-cible-partiel** (celle-ci) | standard | /,/404,/artiste,/contact,/sculptures,/toiles | fichiers, mesures | 12 | 11 | 0 | échecs |

## Échecs

### zone tactile sous 44 px (6)

- **zone tactile sous 44 px** — `/` — nav > ul > li:nth-of-type(2) > a « Toiles » — 42 × 44 px _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/404` — nav > ul > li:nth-of-type(2) > a « Toiles » — 42 × 44 px _(320×568 normal, 390×844 normal, 390×844 sansJs, 320×568 sansJs, 390×844 sansWebgl)_
- **zone tactile sous 44 px** — `/artiste` — nav > ul > li:nth-of-type(2) > a « Toiles » — 42 × 44 px _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/contact` — nav > ul > li:nth-of-type(2) > a « Toiles » — 42 × 44 px _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/sculptures` — nav > ul > li:nth-of-type(2) > a « Toiles » — 42 × 44 px _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/toiles` — nav > ul > li:nth-of-type(2) > a « Toiles » — 42 × 44 px _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_

### contenu inaccessible (2)

- **contenu inaccessible** — `/` — section#sur-le-mur > div.rangee-fenetre:nth-of-type(2) > ul.rangee-piste > li.rangee-item.rangee-item--toile:nth-of-type(4) « Dragonlake mod tag NB » — 7 élément(s) de galerie hors de l'écran, sans défilement possible _(1366×768 sansJs)_
- **contenu inaccessible** — `/sculptures` — section#bancs > div.rangee-fenetre:nth-of-type(2) > ul.rangee-piste > li.rangee-item.rangee-item--banc:nth-of-type(4) « Guitare et botte » — 3 élément(s) de galerie hors de l'écran, sans défilement possible _(1366×768 sansJs)_

### premier écran : information clé hors de l’écran (1)

- **premier écran : information clé hors de l’écran** — `/artiste` — section#debut > div.ar-hero-texte > p.hero-info.ouv-el:nth-of-type(4) « Sculpteur public de 2004 à 2023 » _(390×844 normal, 390×844 sansJs, 390×844 sansWebgl)_

### photo faible affichée en grand (2)

- **photo faible affichée en grand** — `/sculptures` — div.neige-grands.fx-fini > figure.media:nth-of-type(2) > picture > img « Divinementmains : deux mains de neige qui portent  » — toiles/divinementmains-nb (5/5, faible, 64 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_
- **photo faible affichée en grand** — `/sculptures` — div.neige-grands.fx-fini > figure.media:nth-of-type(2) > picture > img « Divinementmains : deux mains de neige qui portent  » — toiles/divinementmains-nb (5/5, faible, 35 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_

### débordement horizontal (1)

- **débordement horizontal** — `/` — page large de 347 px — largeurs : 320, 800, 840 px _(balayage 320–1920 normal)_

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### journal du projet (1)

- **journal du projet** — aucune entrée pour la version 1 de donnees/site.json

### section sans visuel (8)

- **section sans visuel** — `/` — section#commander « Commander en quatre étapes Pas de commande sur le  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1920×1080 normal, +5)_
- **section sans visuel** — `/artiste` — section#fin « Ses œuvres, chez vous Les sculptures ne se command » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/contact` — section#demande « Ma demande Vos toiles, vos coordonnées : le courri » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/contact` — section#reception « Paiement et réception 01 Paiement Virement Interac » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/contact` — section#faq « Questions fréquentes Que veut dire NB ? Et les cod » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/contact` — section#fin « Encore à choisir ? Le catalogue vous attend : bois » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/sculptures` — section#fin « Ces œuvres existent en toile Sculptures sur bois,  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/toiles` — section#fin « Votre sélection est prête ? Les toiles ajoutées vo » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_

### photo moyenne affichée en très grand (1)

- **photo moyenne affichée en très grand** — `/sculptures` — div.aa-image.aa-avant:nth-of-type(2) > figure.media > picture > img « Avant : un tronc brut debout sur l’herbe » — sculptures/ouverture-eclaire-songe-avant (3/5, 52 % de l'écran) : une image notée 4 ou 5 à cette taille _(390×844 normal)_

## Non lancé

Tout a été lancé.


## Repères

- Numéro de version des fichiers : ?v=1
- Audit standard : étapes lourdes sur /, /artiste, /contact, /sculptures, /toiles.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --pages=/,/404,/artiste,/contact,/sculptures,/toiles --seulement=fichiers,mesures
```
