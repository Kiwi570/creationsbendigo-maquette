# Rapport d’audit

Projet : `creationsbendigo-maquette` · 23/11/2026 18:58:26 · 21 min · 6 page(s) · audit complet

## Résumé

- Statut : **1 échec(s)**
- Passe : `20261123-173708-complet` · version ?v=2
- Échecs : **1**
- À regarder : **15**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (5), mesures (234), balayage (5), films d’ouverture (10), films de transition (10), bords de l’écran (6), intro accélérable et passable (7), menu (1), clavier (6), liens et boutons (6), liens profonds (10), liens vers la page en cours (5), changements de hauteur (5), fluidité (10), défilement selon l’appareil (5), mouvement (10), effets du plan (11), souris immobile (8), vitesse (5), captures (1)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | ✓ présent | accueil |
| 2. L’intro devient la page | ✗ absent | versObjet absent |
| 3. La transition reprend le motif | ✓ présent | voile en coupe |
| 4. Quelque chose relie les sections et les pages | ✓ présent | sur les 5 page(s) |
| 5. Un titre fait l’événement sur chaque page | ✗ absent | sur aucune page |
| 6. La scène est un geste du métier | · sans objet | aucune scène épinglée marquée ni galerie générique |
| 7. L’action principale a un retour physique | ✓ présent | sur /toiles |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

## Échecs

### texte coupé (1)

- **texte coupé** — `/sculptures` — section#sept-pieds > div.conteneur.bande-texte > div > p.bande-chiffre:nth-of-type(1) « Gardez 7 à 8 pieds » — coupé par section#sept-pieds « Illustration générée Gardez 7 à 8 pieds La hauteur » _(320×568 normal, 320×568 sansJs, 320×568 sansWebgl)_

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### journal du projet (1)

- **journal du projet** — aucune entrée pour la version 2 de donnees/site.json

### grille : l’intro ne finit pas sur la page (point 2) (1)

- **grille : l’intro ne finit pas sur la page (point 2)** — versObjet(tl, …) absent de assets/js : l’intro doit finir sur l’objet d’ouverture (socle : import { versObjet } from './socle/index.js')

### grille : aucun titre ne fait l’événement (point 5) (1)

- **grille : aucun titre ne fait l’événement (point 5)** — sur aucune page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"

### section sans visuel (9)

- **section sans visuel** — `/` — section#commander « Commander en quatre étapes Pas de commande sur le  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 375×667 normal, 844×390 normal, 320×568 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/artiste` — section#parcours « Le parcours, cerne par cerne Comme dans un tronc,  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 320×568 sansJs, 375×667 sansJs, 390×844 sansJs, +3)_
- **section sans visuel** — `/artiste` — section#fin « Ses œuvres, chez vous Les sculptures ne se command » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/contact` — section#demande « Ma demande Vos toiles, vos coordonnées : le courri » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/contact` — section#reception « Paiement et réception 01 Paiement Virement Interac » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/contact` — section#faq « Questions fréquentes Que veut dire NB ? Et les cod » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/contact` — section#fin « Encore à choisir ? Le catalogue vous attend : bois » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/sculptures` — section#fin « Ces œuvres existent en toile Sculptures sur bois,  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/toiles` — section#fin « Votre sélection est prête ? Les toiles ajoutées vo » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_

### retour arrière : changement brusque (1)

- **retour arrière : changement brusque** — `/` — à 88 ms (différence 22 %) (films/retour-arrière-390.png) _(390×844 retour arrière)_

### rechargement au milieu de la page (1)

- **rechargement au milieu de la page** — `/sculptures` — écran différent à la même position après rechargement (4.7 %), voir comparaisons/rechargement-sculptures-*.png _(1366×768)_

## Non lancé

- **Safari (WebKit)** : WebKit ne peut pas s’installer ici : vérification à faire dans Safari sur le Mac (liste dans le rapport)

### À vérifier dans Safari sur le Mac (WebKit indisponible ici)

- Ouverture de chaque page : rien qui clignote, intro complète au premier chargement et au rechargement.
- Changement de page : le voile couvre l’écran, pas de page blanche ; retour arrière sans intro ni voile resté.
- Défilement : fluide (natif), en-tête qui se cache et revient sans clignoter, sections épinglées entières.
- Menu sur iPhone (mode Responsive de Safari) : ouverture, fermeture, page bloquée derrière.
- Polices, images, mention « Illustration générée », formulaires et barre fixe du bas.

## Repères

- Numéro de version des fichiers : ?v=2
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2574 ms depuis le premier octet
- Ouverture /artiste (1366×768) : 2348 ms depuis le premier octet
- Ouverture /contact (1366×768) : 2332 ms depuis le premier octet
- film de l'ouverture /contact 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /sculptures (1366×768) : 2371 ms depuis le premier octet
- Ouverture /toiles (1366×768) : 2338 ms depuis le premier octet
- film de l'ouverture /toiles 1366×768 : réussi à la tentative 3 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture / (390×844) : 2564 ms depuis le premier octet
- film de l'ouverture / 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /artiste (390×844) : 2335 ms depuis le premier octet
- Ouverture /contact (390×844) : 2338 ms depuis le premier octet
- Ouverture /sculptures (390×844) : 2333 ms depuis le premier octet
- Ouverture /toiles (390×844) : 2302 ms depuis le premier octet
- bords de l’écran /toiles 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 10 images d’intro, 21 de voile et 135 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /artiste : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /sculptures : aucune section épinglée ou plein écran.
- Tient dans l'écran /toiles : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 1 % d'images lentes sur 400, tâche la plus longue 65 ms
- Fluidité /artiste 1366×768 (molette) : 0 % d'images lentes sur 236, tâche la plus longue 0 ms
- Fluidité /contact 1366×768 (molette) : 0 % d'images lentes sur 226, tâche la plus longue 0 ms
- Fluidité /sculptures 1366×768 (molette) : 0 % d'images lentes sur 440, tâche la plus longue 0 ms
- Fluidité /toiles 1366×768 (molette) : 0 % d'images lentes sur 284, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1421, tâche la plus longue 0 ms
- Fluidité /artiste 390×844 (doigt) : 0 % d'images lentes sur 1341, tâche la plus longue 0 ms
- Fluidité /contact 390×844 (doigt) : 0 % d'images lentes sur 1338, tâche la plus longue 0 ms
- Fluidité /sculptures 390×844 (doigt) : 0 % d'images lentes sur 1339, tâche la plus longue 0 ms
- Fluidité /toiles 390×844 (doigt) : 0 % d'images lentes sur 1342, tâche la plus longue 0 ms
- Vitesse / : 0.53 s de calcul au chargement (téléphone ralenti).
- Vitesse /artiste : 0.36 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.31 s de calcul au chargement (téléphone ralenti).
- Vitesse /sculptures : 0.69 s de calcul au chargement (téléphone ralenti).
- Vitesse /toiles : 0.40 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --complet --pages=/,/sculptures --seulement=fichiers,mesures
```
