# Rapport d’audit

Projet : `creationsbendigo-maquette` · 23/11/2026 18:06:28 · 6 min · 6 page(s) · audit complet (étapes : mesures, ecran)

## Résumé

- Statut : **2 échec(s)**
- Passe : `20261123-170047-complet-partiel` · version ?v=1
- Échecs : **2**
- À regarder : **8**
- Non lancé : **0**
- Contrôles passés : mesures (234), balayage (5)

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261123-162305-standard | standard | toutes | toutes | 54 | 30 | 1 | échecs |
| 20261123-164113-standard-cible-partiel | standard | /,/404,/artiste,/contact,/sculptures,/toiles | fichiers, mesures | 12 | 11 | 0 | échecs |
| 20261123-164432-standard | standard | toutes | toutes | 2 | 17 | 1 | échecs |
| **20261123-170047-complet-partiel** (celle-ci) | complet | toutes | mesures, ecran | 2 | 8 | 0 | échecs |

## Échecs

### premier écran : information clé hors de l’écran (2)

- **premier écran : information clé hors de l’écran** — `/` — section#debut > div.hero-texte:nth-of-type(1) > p.hero-info.ouv-el:nth-of-type(4) « Jusqu'à 55 po · 100 % québécois » _(844×390 sansJs, 1000×560 sansJs)_
- **premier écran : information clé hors de l’écran** — `/404` — section#debut > div.p404-texte > p.hero-info.ouv-el:nth-of-type(3) « creationsbendigo@hotmail.com » _(1000×560 sansJs)_

## À regarder

### section sans visuel (8)

- **section sans visuel** — `/` — section#commander « Commander en quatre étapes Pas de commande sur le  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 375×667 normal, 844×390 normal, 320×568 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/artiste` — section#fin « Ses œuvres, chez vous Les sculptures ne se command » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/contact` — section#demande « Ma demande Vos toiles, vos coordonnées : le courri » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(375×667 normal, 320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/contact` — section#reception « Paiement et réception 01 Paiement Virement Interac » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(375×667 normal, 320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/contact` — section#faq « Questions fréquentes Que veut dire NB ? Et les cod » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(375×667 normal, 320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/contact` — section#fin « Encore à choisir ? Le catalogue vous attend : bois » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(375×667 normal, 320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/sculptures` — section#fin « Ces œuvres existent en toile Sculptures sur bois,  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/toiles` — section#fin « Votre sélection est prête ? Les toiles ajoutées vo » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(375×667 normal, 320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_

## Non lancé

Tout a été lancé.


## Repères

- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /artiste : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /sculptures : aucune section épinglée ou plein écran.
- Tient dans l'écran /toiles : aucune section épinglée ou plein écran.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --complet --pages=/,/404 --seulement=fichiers,mesures
```
