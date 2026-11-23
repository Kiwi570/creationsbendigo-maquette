/* Sculptures (archives) : ouverture scindée (ours géant de l'Ermitage), sur souche, avant / après,
   collection, bancs de jardin (rangée qui glisse), neige. */
import { html } from '../../outils/gabarit.mjs';
import { traitScie } from '../gabarits/trait.mjs';

export const page = { cle: 'sculptures', fichier: 'sculptures', imagePartage: 'sculptures/ermitage-ours-1200.webp' };

export default (c) => {
  const S = c.donnees.sculptures;
  return html`
<section class="sc-hero" id="debut">
  <div class="sc-hero-texte">
    <p class="surtitre ouv-el" data-anime="gsap">${c.t('sculptures.hero.sur')}</p>
    <h1 class="sc-hero-titre ouv-titre" data-anime="gsap"><span class="ligne-masque"><span class="hero-ligne">${c.t('sculptures.hero.titre')}</span></span></h1>
    <p class="sc-hero-intro ouv-el" data-anime="gsap">${c.t('sculptures.hero.texte')}</p>
    <p class="actions ouv-el" data-anime="gsap">${c.lien('toiles', { classe: 'bouton', texte: c.t('sculptures.hero.action'), attrs: 'data-action-principale data-survol="magnetique"' })}</p>
    <p class="hero-info ouv-el" data-info-cle data-anime="gsap">${c.t('sculptures.hero.info')}</p>
  </div>
  ${c.media({ nom: 'sculptures/ermitage-ours', alt: 'Ours géant sculpté dans une souche haute, à côté du sculpteur, à l’Ermitage sur le lac Sainte-Adèle', classe: 'sc-hero-media ouv-visuel', sizes: '(max-width: 760px) 100vw, 44vw', priorite: true, ratio: '3 / 4', cadrage: '50% 40%', attrs: 'data-iris-centre data-effet="hero-parallaxe"' })}
</section>

<section class="souche conteneur" id="souche">
  <div class="tete-section">
    <p class="surtitre" data-anime>${c.t('sculptures.souche.sur')}</p>
    <h2 data-anime="lignes">${c.t('sculptures.souche.titre')}</h2>
    <p data-anime>${c.t('sculptures.souche.texte')}</p>
  </div>
  <ul class="mosaique" data-anime="cascade">
    ${S.souche.map((x) => html`<li class="${x.grand ? 'mosaique-grand' : ''}">${c.media({ nom: x.image, alt: x.titre, sizes: '(max-width: 760px) 100vw, 33vw', ratio: x.ratio, legende: x.titre })}</li>`)}
  </ul>
</section>

<section class="bande" id="sept-pieds">
  ${c.media({ nom: 'grok/souche-attente', alt: c.s('sculptures.souche.alt'), classe: 'bande-media', sizes: '100vw', attrs: 'data-fx="parallaxe"' })}
  <div class="conteneur bande-texte">
    <div>
      <p class="bande-chiffre" data-anime="lignes">${c.t('sculptures.souche.bandeTitre')}</p>
      <p data-anime>${c.t('sculptures.souche.bandeTexte')}</p>
    </div>
    <figure class="bande-reel" data-anime>
      ${c.media({ nom: 'sculptures/tornade-minerve', alt: 'Souches debout laissées par une tornade à La Minerve, le sculpteur à côté', sizes: '(max-width: 760px) 70vw, 26vw', ratio: '4 / 3', cadrage: '45% 50%' })}
      <figcaption>${c.t('sculptures.souche.reel')}</figcaption>
    </figure>
  </div>
</section>

<section class="avant-apres conteneur" id="avant-apres">
  <div class="aa-texte">
    <p class="surtitre" data-anime>${c.t('sculptures.avant.sur')}</p>
    <h2 data-anime="lignes">${c.t('sculptures.avant.titre')}</h2>
    <p data-anime>${c.t('sculptures.avant.texte')}</p>
  </div>
  <div class="aa-scene" data-effet="avant-apres">
    <div class="aa-image aa-apres">${c.media({ nom: 'sculptures/hommutant', alt: 'Après : oiseau et visage fondus dans une même pièce de bois', sizes: '(max-width: 760px) 90vw, 40vw', ratio: '3 / 4' })}<span class="aa-etiquette aa-etiquette--apres">${c.t('sculptures.avant.apres')}</span></div>
    <div class="aa-image aa-avant">${c.media({ nom: 'sculptures/ouverture-eclaire-songe-avant', alt: 'Avant : un tronc brut debout sur l’herbe', sizes: '(max-width: 760px) 90vw, 40vw', ratio: '3 / 4' })}<span class="aa-etiquette">${c.t('sculptures.avant.avant')}</span></div>
    <span class="aa-poignee" aria-hidden="true"></span>
    <label class="aa-curseur"><span class="visuellement-cache">${c.t('sculptures.avant.glisser')}</span><input type="range" min="0" max="100" value="78"></label>
    <p class="aa-aide">${c.t('sculptures.avant.glisser')}</p>
  </div>
</section>

<section class="collection-sc conteneur" id="collection">
  <div class="tete-section">
    <h2 data-anime="lignes">${c.t('sculptures.collection.titre')}</h2>
    <p data-anime>${c.t('sculptures.collection.texte')}</p>
  </div>
  <ul class="oeuvres" data-anime="cascade">
    ${S.collection.map((x) => html`<li class="oeuvre">${c.media({ nom: x.image, alt: x.titre, sizes: '(max-width: 760px) 100vw, 33vw', ratio: x.ratio })}<p class="oeuvre-titre">${x.titre}</p></li>`)}
  </ul>
</section>

<section class="bancs rangee-section" id="bancs">
  <div class="conteneur tete-section">
    <h2 data-anime="lignes">${c.t('sculptures.bancs.titre')}</h2>
    <p data-anime>${c.t('sculptures.bancs.texte')}</p>
  </div>
  <p class="glisser conteneur" aria-hidden="true">${c.t('sculptures.bancs.glisser')}</p>
  <div class="rangee-fenetre" tabindex="0" role="region" aria-label="${c.s('sculptures.bancs.region')}">
    <ul class="rangee-piste" data-effet="rangee" data-galerie>
      ${S.bancs.map((b) => html`<li class="rangee-item rangee-item--banc">${c.media({ nom: b.image, alt: b.titre, sizes: '(max-width: 760px) 80vw, 36vw', ratio: '4 / 3' })}<p class="rangee-legende"><strong>${b.titre}</strong></p></li>`)}
    </ul>
  </div>
</section>

<section class="neige" id="neige">
  <div class="neige-tete">
    ${c.media({ nom: 'grok/neige-bloc', alt: c.s('sculptures.neige.alt'), classe: 'neige-media', sizes: '100vw', attrs: 'data-fx="zoom"' })}
    <div class="conteneur neige-texte">
      <p class="surtitre" data-anime>${c.t('sculptures.neige.sur')}</p>
      <h2 data-anime="lignes">${c.t('sculptures.neige.titre')}</h2>
      <p data-anime>${c.t('sculptures.neige.texte')}</p>
    </div>
  </div>
  <div class="conteneur neige-galerie">
    <div class="neige-grands" data-anime="cascade">
      ${c.media({ nom: 'toiles/dragonlake', alt: 'Dragonlake : dragon sculpté dans la neige, la nuit', sizes: '(max-width: 760px) 100vw, 56vw', ratio: '4 / 3', legende: 'Dragonlake' })}
      ${c.media({ nom: 'toiles/divinementmains-nb', alt: 'Divinementmains : deux mains de neige qui portent un enfant, la nuit', sizes: '(max-width: 760px) 100vw, 34vw', ratio: '1218 / 2000' })}
    </div>
    <h3 class="neige-sous" data-anime>${c.t('sculptures.neige.galerie')}</h3>
    <ul class="vignettes" data-anime="cascade">
      ${S.neige.map((x) => html`<li>${c.media({ nom: x.image, alt: x.titre, sizes: '(max-width: 760px) 45vw, 20vw', ratio: '1 / 1' })}<p>${x.titre}</p></li>`)}
    </ul>
  </div>
</section>

<section class="fin fin--sombre fin--court" id="fin">
  ${traitScie()}
  <div class="conteneur fin-ligne">
    <div>
      <h2 data-anime="lignes">${c.t('sculptures.fin.titre')}</h2>
      <p data-anime>${c.t('sculptures.fin.texte')}</p>
    </div>
    <p class="actions" data-anime>${c.lien('toiles', { classe: 'bouton', texte: c.t('sculptures.fin.action'), attrs: 'data-survol="magnetique"' })}</p>
  </div>
</section>
`;
};
