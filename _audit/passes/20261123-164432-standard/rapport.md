# Rapport d’audit

Projet : `creationsbendigo-maquette` · 23/11/2026 17:59:41 · 15 min · 6 page(s) · audit standard

## Résumé

- Statut : **2 échec(s)**
- Passe : `20261123-164432-standard` · version ?v=1
- Échecs : **2**
- À regarder : **17**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (3), mesures (66), balayage (5), films d’ouverture (8), films de transition (8), bords de l’écran (5), intro accélérable et passable (7), menu (1), clavier (6), liens et boutons (6), liens profonds (9), liens vers la page en cours (5), changements de hauteur (4), fluidité (8), défilement selon l’appareil (5), mouvement (8), effets du plan (11), souris immobile (5), vitesse (5), captures (1)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | ✗ absent | aucun data-grille="manipuler" sur l’accueil |
| 2. L’intro devient la page | ✗ absent | versObjet absent |
| 3. La transition reprend le motif | ✓ présent | voile en coupe |
| 4. Quelque chose relie les sections et les pages | ✗ absent | sur aucune page |
| 5. Un titre fait l’événement sur chaque page | ✗ absent | sur aucune page |
| 6. La scène est un geste du métier | · sans objet | aucune scène épinglée marquée ni galerie générique |
| 7. L’action principale a un retour physique | ✓ présent | sur /toiles |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261123-162305-standard | standard | toutes | toutes | 54 | 30 | 1 | échecs |
| 20261123-164113-standard-cible-partiel | standard | /,/404,/artiste,/contact,/sculptures,/toiles | fichiers, mesures | 12 | 11 | 0 | échecs |
| **20261123-164432-standard** (celle-ci) | standard | toutes | toutes | 2 | 17 | 1 | échecs |

## Échecs

### premier écran : information clé hors de l’écran (1)

- **premier écran : information clé hors de l’écran** — `/` — section#debut > div.hero-texte:nth-of-type(1) > p.hero-info.ouv-el:nth-of-type(4) « Jusqu'à 55 po · 100 % québécois » _(320×568 normal, 320×568 sansJs)_

### texte coupé (1)

- **texte coupé** — `/sculptures` — div.conteneur.neige-galerie:nth-of-type(2) > div.neige-grands.fx-fini > figure.media:nth-of-type(2) > figcaption.media-legende « Divinementmains » — coupé par section#neige > div.conteneur.neige-galerie:nth-of-type(2) > div.neige-grands.fx-fini > figure.media:nth-of-type(2) « Divinementmains » _(844×390 normal)_

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### journal du projet (1)

- **journal du projet** — aucune entrée pour la version 1 de donnees/site.json

### grille : effet signature qui ne se manipule pas (point 1) (1)

- **grille : effet signature qui ne se manipule pas (point 1)** — `/` — aucun élément data-grille="manipuler" sur l’accueil : objet à attraper, faire tourner ou glisser (module objet-a-faire-tourner, lumiere-au-pointeur…)

### grille : l’intro ne finit pas sur la page (point 2) (1)

- **grille : l’intro ne finit pas sur la page (point 2)** — versObjet(tl, …) absent de assets/js : l’intro doit finir sur l’objet d’ouverture (socle : import { versObjet } from './socle/index.js')

### grille : rien ne relie les sections (point 4) (1)

- **grille : rien ne relie les sections (point 4)** — sur aucune page : élément du métier qui relie les sections et les pages (fil dans la marge, objet unique qui change, lumière qui passe, carte, folio, frise), marqué data-grille="fil"

### grille : aucun titre ne fait l’événement (point 5) (1)

- **grille : aucun titre ne fait l’événement (point 5)** — sur aucune page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"

### section sans visuel (8)

- **section sans visuel** — `/` — section#commander « Commander en quatre étapes Pas de commande sur le  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 844×390 normal, 320×568 normal, 390×844 sansJs, 1920×1080 normal, +5)_
- **section sans visuel** — `/artiste` — section#fin « Ses œuvres, chez vous Les sculptures ne se command » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 844×390 normal, 768×1024 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/contact` — section#demande « Ma demande Vos toiles, vos coordonnées : le courri » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 390×844 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/contact` — section#reception « Paiement et réception 01 Paiement Virement Interac » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 390×844 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/contact` — section#faq « Questions fréquentes Que veut dire NB ? Et les cod » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 390×844 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/contact` — section#fin « Encore à choisir ? Le catalogue vous attend : bois » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 390×844 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/sculptures` — section#fin « Ces œuvres existent en toile Sculptures sur bois,  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/toiles` — section#fin « Votre sélection est prête ? Les toiles ajoutées vo » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 320×568 normal, 390×844 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_

### photo moyenne affichée en très grand (1)

- **photo moyenne affichée en très grand** — `/sculptures` — div.aa-image.aa-avant:nth-of-type(2) > figure.media > picture > img « Avant : un tronc brut debout sur l’herbe » — sculptures/ouverture-eclaire-songe-avant (3/5, 52 % de l'écran) : une image notée 4 ou 5 à cette taille _(390×844 normal)_

### retour arrière : changement brusque (1)

- **retour arrière : changement brusque** — `/` — à 72 ms (différence 21 %) (films/retour-arrière-390.png) _(390×844 retour arrière)_

### rechargement au milieu de la page (1)

- **rechargement au milieu de la page** — `/sculptures` — écran différent à la même position après rechargement (4.6 %), voir comparaisons/rechargement-sculptures-*.png _(1366×768)_

## Non lancé

- **Safari (WebKit)** : WebKit ne peut pas s’installer ici : vérification à faire dans Safari sur le Mac (liste dans le rapport)

### À vérifier dans Safari sur le Mac (WebKit indisponible ici)

- Ouverture de chaque page : rien qui clignote, intro complète au premier chargement et au rechargement.
- Changement de page : le voile couvre l’écran, pas de page blanche ; retour arrière sans intro ni voile resté.
- Défilement : fluide (natif), en-tête qui se cache et revient sans clignoter, sections épinglées entières.
- Menu sur iPhone (mode Responsive de Safari) : ouverture, fermeture, page bloquée derrière.
- Polices, images, mention « Illustration générée », formulaires et barre fixe du bas.

## Repères

- Numéro de version des fichiers : ?v=1
- Audit standard : étapes lourdes sur /, /contact, /sculptures, /toiles.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2537 ms depuis le premier octet
- Ouverture /contact (1366×768) : 2306 ms depuis le premier octet
- Ouverture /sculptures (1366×768) : 2312 ms depuis le premier octet
- Ouverture /toiles (1366×768) : 2349 ms depuis le premier octet
- Ouverture / (390×844) : 2542 ms depuis le premier octet
- Ouverture /contact (390×844) : 2330 ms depuis le premier octet
- Ouverture /sculptures (390×844) : 2332 ms depuis le premier octet
- Ouverture /toiles (390×844) : 2327 ms depuis le premier octet
- Bords de l’écran : 11 images d’intro, 13 de voile et 109 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /artiste : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /sculptures : aucune section épinglée ou plein écran.
- Tient dans l'écran /toiles : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 407, tâche la plus longue 0 ms
- Fluidité /contact 1366×768 (molette) : 0 % d'images lentes sur 220, tâche la plus longue 0 ms
- Fluidité /sculptures 1366×768 (molette) : 0 % d'images lentes sur 443, tâche la plus longue 0 ms
- Fluidité /toiles 1366×768 (molette) : 0 % d'images lentes sur 289, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1414, tâche la plus longue 0 ms
- Fluidité /contact 390×844 (doigt) : 0 % d'images lentes sur 1340, tâche la plus longue 0 ms
- Fluidité /sculptures 390×844 (doigt) : 0 % d'images lentes sur 1338, tâche la plus longue 0 ms
- Fluidité /toiles 390×844 (doigt) : 0 % d'images lentes sur 1332, tâche la plus longue 0 ms
- Vitesse / : 0.50 s de calcul au chargement (téléphone ralenti).
- Vitesse /artiste : 0.37 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.33 s de calcul au chargement (téléphone ralenti).
- Vitesse /sculptures : 0.41 s de calcul au chargement (téléphone ralenti).
- Vitesse /toiles : 0.35 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --pages=/,/sculptures --seulement=fichiers,mesures
```
