# Créations Bendigo · maquette

Maquette de présentation du futur site de Créations Bendigo (Benoit Sauvageau, dit Bendigo) : toiles imprimées de ses sculptures sur bois, sur neige et de ses tableaux au pointillisme.

- Adresse de la maquette : https://creationsbendigo-maquette.vercel.app
- Site actuel : https://www.creationsbendigo.com (Wix)
- Direction : « Le trait de scie » (fond sciure, noyer, orange tronçonneuse ; Bricolage Grotesque et DM Sans).

## Pages

| Page | Ouverture | Contenu |
|---|---|---|
| Accueil `/` | coup de scie (intro), trois toiles en éventail | toile d'œuvre réelle, trois collections, la toile en 3D (face, bordure miroir, dos signé), rangée de toiles, le sculpteur, commander en 4 étapes, appel final |
| Les toiles `/toiles` | très grand titre, bandeau de toiles | catalogue filtrable (collection, couleur ou NB), visionneuse (`?voir=<toile>`), « Dans votre décor » (la toile choisie posée au mur), fiche de la toile |
| Sculptures `/sculptures` | ouverture scindée, ours de l'Ermitage | sur souche, 7 à 8 pieds, avant / après, collection, bancs de jardin, neige |
| L'artiste `/artiste` | portrait et « 2004 » géant | parcours en cernes (journal « Le Mont-Réel »), sculpture rapide, la signature du geste |
| Contact `/contact` | l'atelier l'hiver, carte de commande | ma demande (toiles choisies + courriel préparé), paiement et réception, questions fréquentes |
| 404 | une bûche sciée de travers | |

Pages du site actuel non reprises en v1 (disponibles en v2) : vidéos du sculpteur, livre des visiteurs, journal « Le Mont-Réel » complet, sculptures « variées » et « clients » en entier.

## Fiche : ce que le client doit fournir (à compléter)

- **Mentions légales : à compléter** (nom légal, NEQ ou numéro d'entreprise, adresse de l'éditeur).
- **Politique de confidentialité : à compléter** (Loi 25 au Québec : responsable de la protection des renseignements personnels, usage des courriels reçus).
- **Hébergeur** : Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis (adresse vérifiée le 23 novembre 2026 dans la politique de confidentialité de Vercel, à jour du 1er juin 2026).
- **Assurances, numéro d'entreprise** : à compléter si le client souhaite les afficher.
- **Crédits des illustrations générées** : les 5 images du dossier `assets/images/grok/` (souche, bloc de neige, salon de chalet, atelier l'hiver, bûche de la 404) sont des illustrations générées par IA ; la mention « Illustration générée » est affichée sur chacune et **doit rester sur le site final**.

Retiré ou remplacé faute d'information :
- **Codes mod, tag et 3D** : leur sens n'est pas expliqué sur le site actuel. Seul NB (noir et blanc) est expliqué ; les autres sont affichés tels quels (« à recopier dans le courriel »). À faire préciser par le client (pages Toiles et Contact).
- **Prix des toiles** : aucun sur le site actuel → « Prix confirmé par courriel avec votre commande » (page Toiles). Grille de prix à fournir si le client le souhaite.
- **Délais** : aucun → « Bendigo vous les confirme par courriel » (Contact, FAQ).
- **Catalogue complet** : seules 9 images du catalogue (7 œuvres) ont pu être récupérées (diaporamas Wix). La page Toiles l'annonce : « une sélection de 9 images parmi les 128 en ligne ». Fichiers des 128 images avec titres et codes à fournir.
- **Compteurs** : le site annonce 130 images en ligne (fin août 2025) et ses galeries en comptent 128 (82 + 18 + 28) : à faire confirmer.
- **Adresse de l'atelier, téléphone, horaires** : aucun sur le site actuel ; non affichés.
- **Vidéos** : le site liste plus de 15 titres de vidéos (Speed carve hibou en 5 minutes, La Petite Séduction à Val-David…) sans lien récupérable. Liens à fournir pour une page Vidéos en v2.
- **Originaux à vendre** (trois sculptures marquées « à vendre », de 1 600 $ à 7 900 $) : présentés en archives sans prix, comme convenu ; à confirmer avec le client.
- **Titres des bancs de jardin** : le site n'en donne pas ; les légendes sont descriptives (« Deux castors »).

Incohérences du site actuel signalées : nom du musée instable (« Musée J.L.M.R », « Le journal Le Mont-Réel », « journal de mon réel ») ; services arrêtés depuis 2020-2023 encore listés ; lien « Informez-vous des forfaits » sans forfait ; page Contact annoncée avec « toutes les coordonnées » mais un seul courriel.

## À la mise en ligne définitive

- Retirer : `noindex` (balise robots dans `source/gabarits/commun.mjs` et en-tête X-Robots-Tag dans `vercel.json`) ; les mentions « à compléter » du pied de page (remplacées par de vraies pages) ; la phrase « Maquette de présentation » du pied de page ; la phrase de sélection du catalogue une fois les 128 images en place.
- Garder : la mention « Illustration générée » sur les images créées par IA.
- La demande de toiles prépare un vrai courriel (lien mailto vers creationsbendigo@hotmail.com) : rien n'est envoyé par le site. La liste des toiles choisies est gardée dans le navigateur du visiteur (localStorage).

## Travailler sur la maquette

```
node outils/generer.mjs          pages HTML à partir de donnees/ et source/
node _audit/audit.mjs            audit standard (Playwright)
```
Les images d’origine du site et les images Grok ne sont pas dans le zip (dossier `recu/`) : elles sont dans ~/Downloads (zips des images du site et des images Grok).

Textes : `donnees/textes/fr.json` ; catalogue : `donnees/toiles.json` ; sculptures : `donnees/sculptures.json` ; parcours : `donnees/parcours.json`. Ne jamais modifier les pages `.html` à la main.
