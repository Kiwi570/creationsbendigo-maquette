/* Page 404 : une bûche sciée de travers. */
import { html } from '../../outils/gabarit.mjs';

export const page = { cle: '404', fichier: '404', langues: ['fr'], partage: false };

export default (c) => html`
<section class="p404" id="debut">
  ${c.media({ nom: 'grok/page-404', alt: c.s('p404.alt'), classe: 'p404-media ouv-visuel', priorite: true, sizes: '(max-width: 760px) 100vw, 55vw', ratio: '3 / 2', attrs: 'data-iris-centre data-fx="zoom"' })}
  <div class="p404-texte">
    <h1 class="ouv-titre" data-anime="gsap"><span class="ligne-masque"><span class="hero-ligne">${c.t('p404.titre')}</span></span></h1>
    <p class="ouv-el" data-anime="gsap">${c.t('p404.texte')}</p>
    <p class="actions ouv-el" data-anime="gsap">${c.lien('accueil', { classe: 'bouton', texte: c.t('p404.accueil'), attrs: 'data-action-principale' })} ${c.lien('toiles', { classe: 'lien-fleche', texte: c.t('p404.toiles') })}</p>
    <p class="hero-info ouv-el" data-info-cle data-anime="gsap">${c.site.contact.email}</p>
  </div>
</section>
`;
