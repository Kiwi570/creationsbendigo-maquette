/* L'artiste : portrait et « 2004 » géant, parcours en cernes, sculpture rapide, la signature du geste. */
import { html } from '../../outils/gabarit.mjs';
import { traitScie } from '../gabarits/trait.mjs';
import { logoSvg } from '../gabarits/logo.mjs';

export const page = { cle: 'artiste', fichier: 'artiste', imagePartage: 'benoit-1000.webp' };

function cerne(r, graine) {
  const n = 64, pts = [];
  for (let i = 0; i <= n; i++) {
    const a = (i / n) * Math.PI * 2;
    const o = 1 + 0.03 * Math.sin(a * 3 + graine) + 0.018 * Math.sin(a * 7 + graine * 1.7);
    pts.push(`${(200 + Math.cos(a) * r * o).toFixed(1)} ${(200 + Math.sin(a) * r * o * 0.95).toFixed(1)}`);
  }
  return 'M' + pts.join(' L') + 'Z';
}

function cerneMini(r, graine) {
  const n = 40, pts = [];
  for (let i = 0; i <= n; i++) {
    const a = (i / n) * Math.PI * 2;
    const o = 1 + 0.04 * Math.sin(a * 3 + graine);
    pts.push(`${(32 + Math.cos(a) * r * o).toFixed(1)} ${(32 + Math.sin(a) * r * o * 0.95).toFixed(1)}`);
  }
  return 'M' + pts.join(' L') + 'Z';
}

export default (c) => {
  const P = c.donnees.parcours;
  return html`
<section class="ar-hero" id="debut">
  <p class="ar-annee" aria-hidden="true" data-audit-ignorer data-effet="annee">${c.t('artiste.hero.annee')}</p>
  ${c.media({ nom: 'benoit', alt: 'Benoit Sauvageau, dit Bendigo, casquette et collier de bois, sourire en coin', classe: 'ar-hero-media ouv-visuel', sizes: '(max-width: 760px) 70vw, 36vw', priorite: true, ratio: '1500 / 1590', attrs: 'data-iris-centre' })}
  <div class="ar-hero-texte">
    <p class="surtitre ouv-el" data-anime="gsap">${c.t('artiste.hero.sur')}</p>
    <h1 class="ar-hero-titre ouv-titre" data-anime="gsap"><span class="ligne-masque"><span class="hero-ligne">${c.t('artiste.hero.titre')}</span></span></h1>
    <p class="ar-hero-intro ouv-el" data-anime="gsap">${c.t('artiste.hero.texte')}</p>
    <p class="actions ouv-el" data-anime="gsap">${c.lien('toiles', { classe: 'bouton', texte: c.t('artiste.hero.action'), attrs: 'data-action-principale data-survol="magnetique"' })}</p>
    <p class="hero-info ouv-el" data-info-cle data-anime="gsap">${c.t('artiste.hero.info')}</p>
  </div>
</section>

<section class="parcours" id="parcours">
  <div class="conteneur parcours-grille" data-effet="cernes">
    <div class="parcours-visuel">
      <div class="parcours-collant">
        <svg class="parcours-svg" viewBox="0 0 400 400" aria-hidden="true">
          <circle cx="200" cy="200" r="196" class="cerne-fond"/>
          ${P.map((_, i) => html`<path class="cerne" d="${cerne(28 + i * 21, i * 1.3)}" fill="none" stroke-width="${i === P.length - 1 ? 4 : 2.2}" stroke-linecap="round"/>`)}
        </svg>
        <p class="parcours-annee" data-cerne-annee aria-hidden="true">${P[0].annee}</p>
      </div>
    </div>
    <div class="parcours-texte">
      <div class="tete-section">
        <h2 data-anime="lignes">${c.t('artiste.parcours.titre')}</h2>
        <p data-anime>${c.t('artiste.parcours.texte')}</p>
      </div>
      <ol class="parcours-liste">
        ${P.map((e, i) => html`<li class="parcours-entree" data-annee="${e.annee}"><svg class="mini-cernes" viewBox="0 0 64 64" aria-hidden="true" data-fx="trace">${P.slice(0, i + 1).map((_, k) => html`<path d="${cerneMini(7 + k * 3.2, k * 1.3)}" fill="none" stroke-width="${k === i ? 2.2 : 1.2}" stroke-linecap="round"/>`)}</svg><p class="parcours-an">${e.annee}</p><h3>${e.titre}</h3><p>${e.texte}</p></li>`)}
      </ol>
    </div>
  </div>
</section>

<section class="rapide conteneur" id="sculpture-rapide">
  <div class="rapide-images" data-anime="cascade">
    ${c.media({ nom: 'sculptures/demonstration', alt: 'Démonstration de sculpture devant un restaurant, le public autour du sculpteur', sizes: '(max-width: 760px) 100vw, 30vw', ratio: '4 / 3' })}
    ${c.media({ nom: 'sculptures/art-monisme-aquatique', alt: 'Art-monisme aquatique : grande sculpture musicale, à côté du sculpteur', sizes: '(max-width: 760px) 100vw, 30vw', ratio: '4 / 3' })}
  </div>
  <div class="rapide-texte">
    <h2 data-anime="lignes">${c.t('artiste.rapide.titre')}</h2>
    <p data-anime>${c.t('artiste.rapide.texte')}</p>
    <blockquote class="citation" data-anime><p>« ${c.t('artiste.rapide.citation')} »</p><footer>Bendigo</footer></blockquote>
  </div>
</section>

<section class="geste" id="geste">
  <div class="conteneur geste-grille">
    <div class="geste-signature" data-effet="signature">${logoSvg({ classe: 'logo-geste', titre: c.site.nom })}</div>
    <div>
      <h2 data-anime="lignes">${c.t('artiste.geste.titre')}</h2>
      <p data-anime>${c.t('artiste.geste.texte')}</p>
      <p data-anime><a class="lien-fleche" href="${c.site.contact.facebook}" target="_blank" rel="noopener">${c.t('artiste.geste.facebook')}</a></p>
    </div>
  </div>
</section>

<section class="fin fin--sombre fin--court" id="fin">
  ${traitScie()}
  <div class="conteneur fin-ligne">
    <div>
      <h2 data-anime="lignes">${c.t('artiste.fin.titre')}</h2>
      <p data-anime>${c.t('artiste.fin.texte')}</p>
    </div>
    <p class="actions" data-anime>${c.lien('toiles', { classe: 'bouton', texte: c.t('artiste.fin.action'), attrs: 'data-survol="magnetique"' })}</p>
  </div>
</section>
`;
};
