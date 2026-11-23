/* Les toiles : catalogue filtrable, visionneuse, décor (la toile choisie posée au mur), fiche de la toile.
   Ouverture : un très grand titre, puis un bandeau de toiles (objet d'ouverture). */
import { html } from '../../outils/gabarit.mjs';

export const page = { cle: 'toiles', fichier: 'toiles', imagePartage: 'toiles/humanimal-nb-1200.webp' };

const libelleVersion = (c, v) => (v === 'nb' ? c.s('commun.nb') : c.s('commun.couleur'));

export default (c) => {
  const toiles = c.donnees.toiles;
  const T = Object.fromEntries(toiles.map((t) => [t.id, t]));
  const bandeau = ['western-lover', 'revolte-cellulaire-nb', 'dragonlake', 'divinementmains-nb', 'cliff-eagle-egg-mind'].map((id) => T[id]);
  const cols = c.donnees.collections;
  return html`
<section class="toiles-hero" id="debut">
  <div class="conteneur toiles-hero-tete">
    <p class="surtitre ouv-el" data-anime="gsap">${c.t('toiles.hero.sur')}</p>
    <h1 class="toiles-hero-titre ouv-titre" data-anime="gsap"><span class="ligne-masque"><span class="hero-ligne">${c.t('toiles.hero.titre')}</span></span></h1>
    <div class="toiles-hero-bas">
      <p class="toiles-hero-texte ouv-el" data-anime="gsap">${c.t('toiles.hero.texte')}</p>
      <p class="toiles-hero-actions ouv-el" data-anime="gsap">
        <a class="bouton" href="#catalogue" data-action-principale data-survol="magnetique">${c.t('toiles.hero.action')}</a>
        <span class="hero-info" data-info-cle>${c.t('toiles.hero.info')}</span>
      </p>
    </div>
  </div>
  <div class="toiles-bandeau ouv-visuel" data-iris-centre data-effet="bandeau">
    ${bandeau.map((t, i) => c.media({ nom: t.image, alt: `${t.titre}${t.version === 'nb' ? ', en noir et blanc' : ''}`, classe: `toile bandeau-toile`, sizes: '(max-width: 760px) 40vw, 20vw', ratio: t.ratio, priorite: true }))}
  </div>
</section>

<section class="catalogue conteneur" id="catalogue" data-catalogue>
  <div class="tete-section">
    <h2 data-anime="lignes">${c.t('toiles.catalogue.titre')}</h2>
    <p data-anime>${c.t('toiles.catalogue.selection')}</p>
  </div>
  <div class="filtres" data-anime>
    <div class="filtres-groupe" role="group" aria-label="${c.s('toiles.catalogue.collection')}">
      <span class="filtres-titre">${c.t('toiles.catalogue.collection')}</span>
      <div class="filtres-boutons">
        <button type="button" class="puce" data-filtre="collection" data-valeur="toutes" aria-pressed="true">${c.t('toiles.catalogue.toutes')} <span class="puce-n" data-filtre-compte="collection:toutes">${toiles.length}</span></button>
        ${cols.map((k) => html`<button type="button" class="puce" data-filtre="collection" data-valeur="${k.cle}" aria-pressed="false">${k.titre} <span class="puce-n" data-filtre-compte="collection:${k.cle}">${toiles.filter((t) => t.collection === k.cle).length}</span></button>`)}
      </div>
    </div>
    <div class="filtres-groupe" role="group" aria-label="${c.s('toiles.catalogue.version')}">
      <span class="filtres-titre">${c.t('toiles.catalogue.version')}</span>
      <div class="filtres-boutons">
        <button type="button" class="puce" data-filtre="version" data-valeur="toutes" aria-pressed="true">${c.t('toiles.catalogue.toutes')}</button>
        <button type="button" class="puce" data-filtre="version" data-valeur="couleur" aria-pressed="false">${c.t('commun.couleur')}</button>
        <button type="button" class="puce" data-filtre="version" data-valeur="nb" aria-pressed="false">${c.t('commun.nb')}</button>
      </div>
    </div>
  </div>
  <p class="catalogue-compte" aria-live="polite" data-catalogue-compte data-un="${c.s('toiles.catalogue.resultat1')}" data-plusieurs="${c.s('toiles.catalogue.resultat')}">${c.t('toiles.catalogue.resultat', { n: toiles.length })}</p>
  <ul class="catalogue-grille" aria-label="${c.s('toiles.catalogue.region')}">
    ${toiles.map((t) => html`<li class="carte-toile" id="toile-${t.id}" data-id="${t.id}" data-collection="${t.collection}" data-version="${t.version}">
      <a class="carte-toile-image" href="${c.url('toiles', '', `voir=${t.id}`)}" data-voir="${t.id}" data-sans-transition aria-label="${c.s('commun.agrandir')} : ${t.titre}, ${libelleVersion(c, t.version)}">
        ${c.media({ nom: t.image, alt: '', classe: 'toile', sizes: '(max-width: 760px) 80vw, (max-width: 1100px) 40vw, 26vw', ratio: t.ratio })}
      </a>
      <div class="carte-toile-texte">
        <h3>${t.titre}</h3>
        <p class="carte-toile-meta"><span>${cols.find((k) => k.cle === t.collection).titre} · ${libelleVersion(c, t.version)}</span> <span class="code" title="${c.s('commun.codes')}">${t.codes}</span></p>
        <button type="button" class="bouton bouton--contour bouton-ajouter" data-grille="retour" data-ajouter="${t.id}" data-titre="${t.titre}" aria-pressed="false" data-libelle-ajouter="${c.s('commun.ajouter')}" data-libelle-ajoutee="${c.s('commun.ajoutee')}"><span class="bouton-plus" aria-hidden="true"></span><span data-libelle-bouton>${c.t('commun.ajouter')}</span></button>
      </div>
    </li>`)}
  </ul>
  <p class="catalogue-aucune" data-catalogue-aucune hidden>${c.t('toiles.catalogue.aucune')}</p>
  <p class="catalogue-aide">${c.t('toiles.catalogue.codesAide')}</p>
</section>

<section class="decor" id="decor">
  <div class="conteneur decor-grille" data-effet="decor">
    <div class="decor-texte">
      <p class="surtitre" data-anime>${c.t('toiles.decor.sur')}</p>
      <h2 data-anime="lignes">${c.t('toiles.decor.titre')}</h2>
      <p data-anime>${c.t('toiles.decor.texte')}</p>
      <div class="decor-choix" role="group" aria-label="${c.s('toiles.decor.choix')}">
        ${toiles.filter((t) => ['dragonlake', 'humanimal-nb', 'western-lover', 're-invention-tour-nb', 'cliff-eagle-egg-mind'].includes(t.id)).map((t) => html`<button type="button" class="decor-bouton" data-decor="${t.id}" aria-pressed="false"><img src="/assets/images/${t.image}-480.webp" alt="" width="56" height="${Math.round(56 / t.proportion)}" loading="lazy"><span>${t.titre}${t.version === 'nb' ? ' NB' : ''}</span></button>`)}
      </div>
      <p class="decor-legende" data-decor-legende aria-live="polite"></p>
    </div>
    <div class="decor-scene">
      ${c.media({ nom: 'grok/salon-chalet', alt: c.s('toiles.decor.alt'), classe: 'decor-salon', sizes: '(max-width: 760px) 100vw, 60vw', ratio: '1600 / 1074' })}
      <div class="decor-toile" aria-hidden="true"><img src="/assets/images/toiles/dragonlake-800.webp" alt="" width="800" height="600" loading="lazy"></div>
    </div>
  </div>
  <div class="conteneur mises">
    <div class="tete-section">
      <h3 data-anime>${c.t('toiles.decor.miseTitre')}</h3>
      <p data-anime>${c.t('toiles.decor.miseTexte')}</p>
    </div>
    <ul class="mises-grille" data-anime="cascade">
      <li>${c.media({ nom: 'decor/salon-clair', alt: 'Toile de Bendigo au-dessus d’un canapé gris, dans un salon clair', sizes: '(max-width: 760px) 100vw, 33vw', ratio: '3 / 2' })}</li>
      <li>${c.media({ nom: 'decor/chambre', alt: 'Toile de dauphins accrochée au-dessus d’un lit', sizes: '(max-width: 760px) 100vw, 33vw', ratio: '3 / 2', cadrage: '50% 30%' })}</li>
      <li>${c.media({ nom: 'decor/foyer', alt: 'Toile de Bendigo au-dessus d’un foyer', sizes: '(max-width: 760px) 100vw, 33vw', ratio: '3 / 2' })}</li>
    </ul>
  </div>
</section>

<section class="fiche conteneur" id="la-toile">
  ${c.media({ nom: 'decor/aigle-entree', alt: 'Grande toile verticale d’un aigle sculpté, au-dessus d’un banc', classe: 'fiche-media', sizes: '(max-width: 760px) 100vw, 40vw', ratio: '1397 / 2000', attrs: 'data-fx="parallaxe"' })}
  <div class="fiche-texte">
    <h2 data-anime="lignes">${c.t('toiles.fiche.titre')}</h2>
    <ul class="fiche-liste" data-anime="cascade">
      ${[1, 2, 3, 4, 5, 6, 7].map((i) => html`<li>${c.t(`toiles.fiche.l${i}`)}</li>`)}
    </ul>
    <p class="fiche-prix" data-anime>${c.t('toiles.fiche.prix')}</p>
  </div>
</section>

<section class="fin fin--sombre fin--court" id="fin">
  <div class="conteneur fin-ligne">
    <div>
      <h2 data-anime="lignes">${c.t('toiles.fin.titre')}</h2>
      <p data-anime>${c.t('toiles.fin.texte')}</p>
    </div>
    <p class="actions" data-anime>${c.lien('contact', { ancre: 'demande', classe: 'bouton', texte: html`${c.t('toiles.fin.action')} <span class="demande-compte" data-demande-compte hidden></span>`, attrs: 'data-survol="magnetique"' })}</p>
  </div>
</section>

<div class="visionneuse" data-visionneuse data-recouvrement role="dialog" aria-modal="true" aria-label="${c.s('commun.agrandir')}" hidden>
  <div class="vis-cadre">
    <img class="vis-image" src="/assets/images/toiles/dragonlake-1200.webp" alt="" width="1200" height="900">
    <div class="vis-infos">
      <p class="vis-titre"></p>
      <p><span class="code vis-codes"></span></p>
      <button type="button" class="bouton vis-ajouter" data-ajouter="" data-titre="" aria-pressed="false" data-libelle-ajouter="${c.s('commun.ajouter')}" data-libelle-ajoutee="${c.s('commun.ajoutee')}"><span data-libelle-bouton>${c.t('commun.ajouter')}</span></button>
    </div>
  </div>
  <button type="button" class="vis-bouton vis-prec" aria-label="${c.s('commun.precedente')}">←</button>
  <button type="button" class="vis-bouton vis-suiv" aria-label="${c.s('commun.suivante')}">→</button>
  <button type="button" class="vis-bouton vis-fermer" aria-label="${c.s('commun.fermerVisionneuse')}">✕</button>
</div>
`;
};
