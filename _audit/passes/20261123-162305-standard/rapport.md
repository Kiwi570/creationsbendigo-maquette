# Rapport d’audit

Projet : `creationsbendigo-maquette` · 23/11/2026 17:38:10 · 15 min · 6 page(s) · audit standard

## Résumé

- Statut : **54 échec(s)**
- Passe : `20261123-162305-standard` · version ?v=1
- Échecs : **54**
- À regarder : **30**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (2), mesures (66), balayage (5), films d’ouverture (8), films de transition (8), bords de l’écran (5), intro accélérable et passable (7), menu (1), clavier (6), liens et boutons (6), liens profonds (9), liens vers la page en cours (5), changements de hauteur (4), fluidité (8), défilement selon l’appareil (5), mouvement (8), effets du plan (12), souris immobile (5), vitesse (5), captures (1)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | ✗ absent | aucun data-grille="manipuler" sur l’accueil |
| 2. L’intro devient la page | ✗ absent | versObjet absent |
| 3. La transition reprend le motif | ✓ présent | voile en coupe |
| 4. Quelque chose relie les sections et les pages | ✗ absent | sur aucune page |
| 5. Un titre fait l’événement sur chaque page | ✗ absent | sur aucune page |
| 6. La scène est un geste du métier | · sans objet | aucune scène épinglée marquée ni galerie générique |
| 7. L’action principale a un retour physique | ✗ absent | sur aucune page |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

## Échecs

### texte sous 12 px (1)

- **texte sous 12 px** — `/` — div.toile3d-objet > div.t3-face.t3-dos:nth-of-type(6) > span.t3-signature:nth-of-type(3) > span.t3-signature-texte « SIGNÉE AU DOS » — 11.5 px _(768×1024 normal, 390×844 normal, 844×390 normal, 320×568 normal, 390×844 sansWebgl)_

### texte coupé (13)

- **texte coupé** — `/` — div.hero-texte:nth-of-type(1) > h1.hero-titre > span.ligne-masque:nth-of-type(1) > span.hero-ligne « Le Magicien » — coupé par section#debut > div.hero-texte:nth-of-type(1) > h1.hero-titre > span.ligne-masque:nth-of-type(1) « Le Magicien » _(768×1024 normal, 390×844 normal, 844×390 normal, 320×568 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **texte coupé** — `/` — div.hero-texte:nth-of-type(1) > h1.hero-titre > span.ligne-masque:nth-of-type(2) > span.hero-ligne « à la » — coupé par section#debut > div.hero-texte:nth-of-type(1) > h1.hero-titre > span.ligne-masque:nth-of-type(2) « à la » _(768×1024 normal, 390×844 normal, 844×390 normal, 320×568 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **texte coupé** — `/` — div.hero-texte:nth-of-type(1) > h1.hero-titre > span.ligne-masque:nth-of-type(3) > span.hero-ligne.accent « tronçonneuse » — coupé par section#debut > div.hero-texte:nth-of-type(1) > h1.hero-titre > span.ligne-masque:nth-of-type(3) « tronçonneuse » _(768×1024 normal, 390×844 normal, 844×390 normal, 320×568 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **texte coupé** — `/` — ul.rangee-piste > li.rangee-item.rangee-item--toile:nth-of-type(3) > p.rangee-legende > strong « Re Invention Tour » — coupé par section#sur-le-mur > div.rangee-fenetre:nth-of-type(2) « Western Lover mod tag Re Invention Tour mod tag 3D » _(844×390 normal)_
- **texte coupé** — `/` — ul.rangee-piste > li.rangee-item.rangee-item--toile:nth-of-type(3) > p.rangee-legende > span.code « mod tag 3D NB » — coupé par section#sur-le-mur > div.rangee-fenetre:nth-of-type(2) « Western Lover mod tag Re Invention Tour mod tag 3D » _(1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte coupé** — `/404` — div.p404-texte > h1.ouv-titre > span.ligne-masque > span.hero-ligne « Coupe de travers » — coupé par section#debut > div.p404-texte > h1.ouv-titre > span.ligne-masque « Coupe de travers » _(320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **texte coupé** — `/artiste` — section#debut > p.ar-annee « 2004 » — coupé par section#debut « 2004 BENOIT SAUVAGEAU Bendigo Sculpteur autodidact » _(390×844 normal, 768×1024 normal, 390×844 sansJs, 1366×768 normal, 1920×1080 normal, 390×844 sansWebgl, +2)_
- **texte coupé** — `/artiste` — div.ar-hero-texte > h1.ar-hero-titre.ouv-titre > span.ligne-masque > span.hero-ligne « Bendigo » — coupé par section#debut > div.ar-hero-texte > h1.ar-hero-titre.ouv-titre > span.ligne-masque « Bendigo » _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **texte coupé** — `/artiste` — section#debut > p.ar-annee « 2004 » — coupé par section#debut « 2004 BENOIT SAUVAGEAU Bendigo Voir ses toiles Scul » _(320×568 normal, 844×390 normal, 320×568 sansJs)_
- **texte coupé** — `/contact` — div.ct-carte.ouv-visuel > h1.ct-hero-titre.ouv-titre > span.ligne-masque > span.hero-ligne « Commander une toile » — coupé par div.conteneur.ct-hero-zone > div.ct-carte.ouv-visuel > h1.ct-hero-titre.ouv-titre > span.ligne-masque « Commander une toile » _(320×568 normal, 390×844 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **texte coupé** — `/sculptures` — div.sc-hero-texte > h1.sc-hero-titre.ouv-titre > span.ligne-masque > span.hero-ligne « Sculptures » — coupé par section#debut > div.sc-hero-texte > h1.sc-hero-titre.ouv-titre > span.ligne-masque « Sculptures » _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **texte coupé** — `/sculptures` — ul.rangee-piste > li.rangee-item.rangee-item--banc:nth-of-type(2) > p.rangee-legende > strong « Chat dans son fauteuil » — coupé par section#bancs > div.rangee-fenetre:nth-of-type(2) « Fée sur un champignon Chat dans son fauteuil Banc  » _(768×1024 normal)_
- **texte coupé** — `/toiles` — div.conteneur.toiles-hero-tete:nth-of-type(1) > h1.toiles-hero-titre.ouv-titre > span.ligne-masque > span.hero-ligne « Les toiles » — coupé par section#debut > div.conteneur.toiles-hero-tete:nth-of-type(1) > h1.toiles-hero-titre.ouv-titre > span.ligne-masque « Les toiles » _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_

### zone tactile sous 44 px (6)

- **zone tactile sous 44 px** — `/` — nav > ul > li:nth-of-type(2) > a « Toiles » — 42 × 44 px _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/404` — nav > ul > li:nth-of-type(2) > a « Toiles » — 42 × 44 px _(320×568 normal, 390×844 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/artiste` — nav > ul > li:nth-of-type(2) > a « Toiles » — 42 × 44 px _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/contact` — nav > ul > li:nth-of-type(2) > a « Toiles » — 42 × 44 px _(320×568 normal, 390×844 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/sculptures` — nav > ul > li:nth-of-type(2) > a « Toiles » — 42 × 44 px _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/toiles` — nav > ul > li:nth-of-type(2) > a « Toiles » — 42 × 44 px _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_

### accessibilité (axe) : color-contrast (12)

- **accessibilité (axe) : color-contrast** — `/` — a[data-action-principale=""] ; a[href$="sculptures"][data-libelle="Sculptures"][data-survol="magnetique"] ; .commander-pied > a[data-survol="magnetique"][href$="contact#demande"][data-libelle="Contact"] — Elements must meet minimum color contrast ratio thresholds _(390×844 normal)_
- **accessibilité (axe) : color-contrast** — `/` — .entete-actions > .bouton[href$="contact#demande"][data-libelle="Contact"] ; a[data-action-principale=""] ; a[href$="sculptures"][data-libelle="Sculptures"][data-survol="magnetique"] — Elements must meet minimum color contrast ratio thresholds _(1366×768 normal)_
- **accessibilité (axe) : color-contrast** — `/404` — a[data-action-principale=""] — Elements must meet minimum color contrast ratio thresholds _(390×844 normal)_
- **accessibilité (axe) : color-contrast** — `/404` — .entete-actions > .bouton[href$="contact#demande"][data-libelle="Contact"] ; a[data-action-principale=""] — Elements must meet minimum color contrast ratio thresholds _(1366×768 normal)_
- **accessibilité (axe) : color-contrast** — `/artiste` — a[data-action-principale=""] ; .actions.vu[data-anime=""] > a[data-survol="magnetique"][href$="toiles"][data-libelle="Toiles"] ; div[data-barre-fixe=""] > .bouton[href$="contact#demande"][data-libelle="Contact"] — Elements must meet minimum color contrast ratio thresholds _(390×844 normal)_
- **accessibilité (axe) : color-contrast** — `/artiste` — .entete-actions > .bouton[href$="contact#demande"][data-libelle="Contact"] ; a[data-action-principale=""] ; .actions.vu[data-anime=""] > a[data-survol="magnetique"][data-souris=""][href$="toiles"] — Elements must meet minimum color contrast ratio thresholds _(1366×768 normal)_
- **accessibilité (axe) : color-contrast** — `/contact` — .actions.ouv-el[data-anime="gsap"] > a[href$="#demande"] ; button[type="submit"] ; a[data-survol="magnetique"][href$="toiles"][data-libelle="Toiles"] — Elements must meet minimum color contrast ratio thresholds _(390×844 normal)_
- **accessibilité (axe) : color-contrast** — `/contact` — .actions.ouv-el[data-anime="gsap"] > a[href$="#demande"] ; button[type="submit"] ; a[data-survol="magnetique"][data-souris=""][href$="toiles"] — Elements must meet minimum color contrast ratio thresholds _(1366×768 normal)_
- **accessibilité (axe) : color-contrast** — `/sculptures` — a[data-action-principale=""] ; .actions.vu[data-anime=""] > a[data-survol="magnetique"][href$="toiles"][data-libelle="Toiles"] ; div[data-barre-fixe=""] > .bouton[href$="contact#demande"][data-libelle="Contact"] — Elements must meet minimum color contrast ratio thresholds _(390×844 normal)_
- **accessibilité (axe) : color-contrast** — `/sculptures` — .entete-actions > .bouton[href$="contact#demande"][data-libelle="Contact"] ; a[data-action-principale=""] ; .actions.vu[data-anime=""] > a[data-survol="magnetique"][data-souris=""][href$="toiles"] — Elements must meet minimum color contrast ratio thresholds _(1366×768 normal)_
- **accessibilité (axe) : color-contrast** — `/toiles` — a[href$="#catalogue"] ; .surtitre.vu[data-anime=""] ; a[data-survol="magnetique"][href$="contact#demande"][data-libelle="Contact"] — Elements must meet minimum color contrast ratio thresholds _(390×844 normal)_
- **accessibilité (axe) : color-contrast** — `/toiles` — .entete-actions > .bouton[href$="contact#demande"][data-libelle="Contact"] ; a[href$="#catalogue"] ; .surtitre.vu[data-anime=""] — Elements must meet minimum color contrast ratio thresholds _(1366×768 normal)_

### premier écran : bouton principal hors de l’écran (1)

- **premier écran : bouton principal hors de l’écran** — `/404` — section#debut > div.p404-texte > p.actions.ouv-el:nth-of-type(2) > a.bouton:nth-of-type(1) « Retour à l'accueil » _(320×568 normal, 320×568 sansJs)_

### premier écran : information clé hors de l’écran (2)

- **premier écran : information clé hors de l’écran** — `/404` — section#debut > div.p404-texte > p.hero-info.ouv-el:nth-of-type(3) « creationsbendigo@hotmail.com » _(320×568 normal, 844×390 normal, 320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/contact` — section#debut > div.conteneur.ct-hero-zone > div.ct-carte.ouv-visuel > p.hero-info.ct-courriel:nth-of-type(4) « creationsbendigo@hotmail.com » _(390×844 sansJs, 320×568 sansJs)_

### contraste insuffisant (2)

- **contraste insuffisant** — `/artiste` — section#debut > p.ar-annee « 2004 » — 1.15:1 (minimum 3:1) _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **contraste insuffisant** — `/toiles` — section#decor > div.conteneur.decor-grille:nth-of-type(1) > div.decor-texte:nth-of-type(1) > p.surtitre:nth-of-type(1) « DANS VOTRE DÉCOR » — 4.41:1 (minimum 4.5:1) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_

### textes qui se chevauchent (9)

- **textes qui se chevauchent** — `/artiste` — section#debut > p.ar-annee « 2004 » — avec div.conteneur.parcours-grille > div.parcours-texte:nth-of-type(2) > div.tete-section > h2 « Le parcours, cerne par cerne » _(768×1024 normal, 844×390 normal, 1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **textes qui se chevauchent** — `/artiste` — section#debut > p.ar-annee « 2004 » — avec div.ar-hero-texte > h1.ar-hero-titre.ouv-titre > span.ligne-masque > span.hero-ligne « Bendigo » _(844×390 normal)_
- **textes qui se chevauchent** — `/artiste` — section#debut > p.ar-annee « 2004 » — avec section#debut > div.ar-hero-texte > p.actions.ouv-el:nth-of-type(3) > a.bouton « Voir ses toiles » _(844×390 normal, 1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **textes qui se chevauchent** — `/artiste` — section#debut > p.ar-annee « 2004 » — avec section#debut > div.ar-hero-texte > p.hero-info.ouv-el:nth-of-type(4) « Sculpteur public de 2004 à 2023 » _(844×390 normal, 1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **textes qui se chevauchent** — `/artiste` — section#debut > p.ar-annee « 2004 » — avec section#debut > div.ar-hero-texte > p.ar-hero-intro.ouv-el:nth-of-type(2) « Sculpteur autodidacte à la tronçonneuse, surnommé  » _(1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **textes qui se chevauchent** — `/artiste` — section#debut > div.ar-hero-texte > p.surtitre.ouv-el:nth-of-type(1) « BENOIT SAUVAGEAU » — avec div.ar-hero-texte > h1.ar-hero-titre.ouv-titre > span.ligne-masque > span.hero-ligne « Bendigo » _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **textes qui se chevauchent** — `/sculptures` — section#debut > div.sc-hero-texte > p.surtitre.ouv-el:nth-of-type(1) « ARCHIVES · 2004 À 2023 » — avec div.sc-hero-texte > h1.sc-hero-titre.ouv-titre > span.ligne-masque > span.hero-ligne « Sculptures » _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **textes qui se chevauchent** — `/toiles` — section#debut > div.conteneur.toiles-hero-tete:nth-of-type(1) > p.surtitre.ouv-el « CATALOGUE » — avec div.conteneur.toiles-hero-tete:nth-of-type(1) > h1.toiles-hero-titre.ouv-titre > span.ligne-masque > span.hero-ligne « Les toiles » _(768×1024 normal, 1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **textes qui se chevauchent** — `/toiles` — div.conteneur.toiles-hero-tete:nth-of-type(1) > h1.toiles-hero-titre.ouv-titre > span.ligne-masque > span.hero-ligne « Les toiles » — avec section#debut > div.conteneur.toiles-hero-tete:nth-of-type(1) > div.toiles-hero-bas > p.toiles-hero-texte.ouv-el:nth-of-type(1) « Sculptures sur bois, sur neige, tableaux au pointi » _(768×1024 normal, 390×844 normal, 390×844 sansJs, 390×844 sansWebgl)_

### débordement horizontal (7)

- **débordement horizontal** — `/sculptures` — body#haut > div:nth-of-type(1) > span.voile-trait — page large de 1539 px pour un écran de 1366 px _(1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **débordement horizontal** — `/sculptures` — section#souche > ul.mosaique.fx-fini > li:nth-of-type(3) > figure.media « Souche sculptée, détail » — dépasse aussi à droite _(1366×768 normal, 1366×768 sansWebgl)_
- **débordement horizontal** — `/sculptures` — section#souche > ul.mosaique.fx-fini > li:nth-of-type(5) > figure.media « Souches sculptées » — dépasse aussi à droite _(1366×768 normal, 1366×768 sansWebgl)_
- **débordement horizontal** — `/sculptures` — section#souche > ul.mosaique > li:nth-of-type(3) > figure.media « Souche sculptée, détail » — dépasse aussi à droite _(1366×768 sansJs)_
- **débordement horizontal** — `/sculptures` — section#souche > ul.mosaique > li:nth-of-type(5) > figure.media « Souches sculptées » — dépasse aussi à droite _(1366×768 sansJs)_
- **débordement horizontal** — `/` — page large de 347 px — largeurs : 320, 800, 840 px _(balayage 320–1920 normal)_
- **débordement horizontal** — `/sculptures` — page large de 391 px — largeurs : 320 à 1760 px (37 largeurs) _(balayage 320–1920 normal)_

### photo faible affichée en grand (1)

- **photo faible affichée en grand** — `/sculptures` — div.neige-grands.fx-fini > figure.media:nth-of-type(2) > picture > img « Deux figures de neige adossées, devant une église, » — sculptures/neige-eglise (3/5, faible, 27 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_

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

### grille : action principale sans retour physique (point 7) (1)

- **grille : action principale sans retour physique (point 7)** — ajout au panier, réservation, envoi ou filtre : quelque chose de l’objet part, se pose ou se transforme (module envol-vers-le-panier, tampon « reçu »), marqué data-grille="retour"

### section sans visuel (8)

- **section sans visuel** — `/` — section#commander « Commander en quatre étapes Pas de commande sur le  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 844×390 normal, 320×568 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/artiste` — section#fin « Ses œuvres, chez vous Les sculptures ne se command » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/contact` — section#demande « Ma demande Vos toiles, vos coordonnées : le courri » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 390×844 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/contact` — section#reception « Paiement et réception 01 Paiement Virement Interac » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 390×844 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/contact` — section#faq « Questions fréquentes Que veut dire NB ? Et les cod » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 390×844 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/contact` — section#fin « Encore à choisir ? Le catalogue vous attend : bois » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 390×844 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/sculptures` — section#fin « Ces œuvres existent en toile Sculptures sur bois,  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/toiles` — section#fin « Votre sélection est prête ? Les toiles ajoutées vo » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_

### texte de contenu sous 13 px (ordinateur) (8)

- **texte de contenu sous 13 px (ordinateur)** — `/` — div.toile3d-objet > div.t3-face.t3-dos:nth-of-type(6) > span.t3-signature:nth-of-type(3) > span.t3-signature-texte « SIGNÉE AU DOS » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — ul.rangee-piste > li.rangee-item.rangee-item--toile:nth-of-type(3) > p.rangee-legende > span.code « mod tag 3D NB » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/404` — section#debut > figure.media.p404-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/contact` — section#debut > figure.media.ct-hero-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/sculptures` — section#sept-pieds > figure.media.bande-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/sculptures` — section#neige > div.neige-tete:nth-of-type(1) > figure.media.neige-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/toiles` — li#toile-re-invention-tour-nb > div.carte-toile-texte > p.carte-toile-meta > span.code:nth-of-type(2) « mod tag 3D NB » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/toiles` — div.conteneur.decor-grille:nth-of-type(1) > div.decor-scene:nth-of-type(2) > figure.media.decor-salon > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_

### typographie française (1)

- **typographie française** — `/artiste` — section#sculpture-rapide > div.rapide-texte:nth-of-type(2) > blockquote.citation > p « « Toutes les idées ont un potentiel, car tous les  » — espace insécable manquante avant ou après « « » » _(1366×768 normal)_

### retour avant : changement brusque (2)

- **retour avant : changement brusque** — `/toiles` — à 79 ms (différence 22 %) (films/retour-avant-1366.png) _(1366×768 retour avant)_
- **retour avant : changement brusque** — `/toiles` — à 74 ms (différence 24 %) (films/retour-avant-390.png) _(390×844 retour avant)_

### rechargement au milieu de la page (1)

- **rechargement au milieu de la page** — `/sculptures` — écran différent à la même position après rechargement (4.5 %), voir comparaisons/rechargement-sculptures-*.png _(1366×768)_

### effet qui ne bouge pas au défilement (3)

- **effet qui ne bouge pas au défilement** — `/toiles` — section#catalogue.catalogue.conteneur — catalogue : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal, 390×844 normal)_
- **effet qui ne bouge pas au défilement** — `/` — ul.rangee-piste — rangee : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(390×844 normal)_
- **effet qui ne bouge pas au défilement** — `/sculptures` — ul.rangee-piste — rangee : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(390×844 normal)_

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
- Ouverture / (1366×768) : 2392 ms depuis le premier octet
- Ouverture /contact (1366×768) : 2352 ms depuis le premier octet
- Ouverture /sculptures (1366×768) : 2316 ms depuis le premier octet
- Ouverture /toiles (1366×768) : 2285 ms depuis le premier octet
- Ouverture / (390×844) : 2356 ms depuis le premier octet
- film de l'ouverture / 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /contact (390×844) : 2316 ms depuis le premier octet
- Ouverture /sculptures (390×844) : 2352 ms depuis le premier octet
- Ouverture /toiles (390×844) : 2259 ms depuis le premier octet
- bords de l’écran /toiles 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 8 images d’intro, 16 de voile et 114 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /artiste : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /sculptures : aucune section épinglée ou plein écran.
- Tient dans l'écran /toiles : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 397, tâche la plus longue 0 ms
- Fluidité /contact 1366×768 (molette) : 0 % d'images lentes sur 231, tâche la plus longue 0 ms
- Fluidité /sculptures 1366×768 (molette) : 0 % d'images lentes sur 440, tâche la plus longue 0 ms
- Fluidité /toiles 1366×768 (molette) : 0 % d'images lentes sur 297, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1420, tâche la plus longue 0 ms
- Fluidité /contact 390×844 (doigt) : 0 % d'images lentes sur 1346, tâche la plus longue 0 ms
- Fluidité /sculptures 390×844 (doigt) : 0 % d'images lentes sur 1339, tâche la plus longue 0 ms
- Fluidité /toiles 390×844 (doigt) : 0 % d'images lentes sur 1340, tâche la plus longue 0 ms
- Vitesse / : 0.55 s de calcul au chargement (téléphone ralenti).
- Vitesse /artiste : 0.33 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.31 s de calcul au chargement (téléphone ralenti).
- Vitesse /sculptures : 0.39 s de calcul au chargement (téléphone ralenti).
- Vitesse /toiles : 0.54 s de calcul au chargement (téléphone ralenti).

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
