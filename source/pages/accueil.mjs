/* Accueil de Créations Bendigo : direction « Le trait de scie ».
   Ouverture : coup de scie (intro), trois toiles en éventail (objet d'ouverture : la toile du milieu).
   Chaque section a au moins un effet au défilement, visible aussi sur téléphone. */
import { html } from '../../outils/gabarit.mjs';
import { logoSvg } from '../gabarits/logo.mjs';

export const page = { cle: 'accueil', fichier: 'index', imagePartage: 'toiles/dragonlake-1200.webp' };

const toile = (c, t, { classe = '', sizes = '(max-width: 760px) 60vw, 26vw', priorite = false, attrs = '' } = {}) => c.media({
  nom: t.image, alt: `${t.titre}${t.version === 'nb' ? ', en noir et blanc' : ''}`, classe: `toile ${classe}`, sizes, priorite, ratio: t.ratio, attrs,
});

export default (c) => {
  const T = Object.fromEntries(c.donnees.toiles.map((t) => [t.id, t]));
  const rangee = [
    { t: T['western-lover'] }, { d: 'decor/salon-clair', alt: 'Toile de Bendigo au-dessus d’un canapé gris, dans un salon clair', ratio: '2000 / 1333' },
    { t: T['re-invention-tour-nb'] }, { t: T['dragonlake-nb'] }, { d: 'decor/aigle-entree', alt: 'Grande toile verticale d’un aigle sculpté, au-dessus d’un banc', ratio: '1397 / 2000' },
    { t: T['revolte-cellulaire-nb'] }, { t: T['cliff-eagle-egg-mind'] }, { d: 'decor/foyer', alt: 'Toile de Bendigo au-dessus d’un foyer', ratio: '1892 / 1232' },
    { t: T['divinementmains-nb'] }, { t: T['humanimal-nb'] },
  ];
  return html`
<section class="hero" id="debut">
  <canvas class="hero-sciure" data-effet="sciure" aria-hidden="true" width="10" height="10"></canvas>
  <div class="hero-texte">
    <p class="surtitre hero-sur ouv-el" data-anime="gsap">${c.t('accueil.hero.sur')}</p>
    <h1 class="hero-titre" data-anime="gsap"><span class="ligne-masque"><span class="hero-ligne">${c.t('accueil.hero.titre1')}</span></span> <span class="ligne-masque"><span class="hero-ligne">${c.t('accueil.hero.titre2')}</span></span> <span class="ligne-masque"><span class="hero-ligne accent">${c.t('accueil.hero.titre3')}</span></span></h1>
    <p class="hero-intro ouv-el" data-anime="gsap">${c.t('accueil.hero.texte')}</p>
    <p class="hero-actions ouv-el" data-anime="gsap">
      ${c.lien('toiles', { classe: 'bouton', texte: c.t('accueil.hero.action'), attrs: 'data-action-principale data-survol="magnetique"' })}
      <a class="lien-fleche" href="#commander">${c.t('accueil.hero.action2')}</a>
    </p>
    <p class="hero-info ouv-el" data-info-cle data-anime="gsap">${c.t('accueil.hero.info')}</p>
  </div>
  <div class="hero-toiles" data-effet="eventail">
    ${toile(c, T['western-lover'], { classe: 'hero-toile hero-toile--1', sizes: '(max-width: 760px) 46vw, 22vw' })}
    ${toile(c, T['humanimal-nb'], { classe: 'hero-toile hero-toile--3', sizes: '(max-width: 760px) 46vw, 22vw' })}
    ${toile(c, T.dragonlake, { classe: 'hero-toile hero-toile--2', sizes: '(max-width: 760px) 70vw, 30vw', priorite: true, attrs: 'data-iris-centre' })}
  </div>
</section>

<section class="manifeste conteneur" id="toile-reelle">
  <div class="manifeste-texte">
    <p class="surtitre" data-anime>${c.t('accueil.manifeste.sur')}</p>
    <h2 class="manifeste-titre" data-anime="lignes">${c.t('accueil.manifeste.titre')}</h2>
    <p data-anime>${c.t('accueil.manifeste.texte')}</p>
    <ul class="chiffres manifeste-chiffres" data-anime>
      <li><strong data-compteur="130">130</strong> <span>${c.t('accueil.manifeste.c1')}</span></li>
      <li><strong>≈ <span data-compteur="300">300</span></strong> <span>${c.t('accueil.manifeste.c2')}</span></li>
      <li><strong data-compteur="55">55</strong> <span>${c.t('accueil.manifeste.c3')}</span></li>
    </ul>
  </div>
  ${c.media({ nom: 'decor/salon-pierre', alt: 'Toile de Bendigo accrochée au mur de pierre d’un salon', classe: 'manifeste-media', sizes: '(max-width: 760px) 100vw, 46vw', ratio: '2000 / 1506', attrs: 'data-fx="parallaxe"' })}
</section>

<section class="collections" id="collections">
  <div class="conteneur">
    <div class="tete-section">
      <h2 data-anime="lignes">${c.t('accueil.collections.titre')}</h2>
      <p data-anime>${c.t('accueil.collections.texte')}</p>
    </div>
    <div class="collections-grille" data-anime="cascade">
      ${c.donnees.collections.map((k) => html`<a class="collection" href="${c.url('toiles', 'catalogue', `collection=${k.cle}`)}" data-libelle="${c.libelle('toiles')}">
        <span class="collection-image" data-survol="incline">${c.media({ nom: k.image, alt: '', classe: 'toile', sizes: '(max-width: 760px) 70vw, 22vw', ratio: k.ratio })}</span>
        <span class="collection-nombre"><strong>${k.nombre}</strong> ${c.t('accueil.collections.images')}</span>
        <span class="collection-titre">${k.titre}</span>
        <span class="collection-texte">${k.texte}</span>
        <span class="lien-fleche">${c.t('accueil.collections.voir')}</span>
      </a>`)}
    </div>
  </div>
</section>

<section class="toile3d" id="la-toile" data-scene data-entete-cache>
  <div class="toile3d-collant" data-collant>
    <div class="toile3d-tete">
      <p class="surtitre">${c.t('accueil.toile.sur')}</p>
      <h2 data-anime="lignes">${c.t('accueil.toile.titre')}</h2>
      <p class="toile3d-aide masque-ecran-bas">${c.t('accueil.toile.texte')}</p>
    </div>
    <div class="toile3d-scene" data-effet="toile-3d" data-visuel>
      <div class="toile3d-objet">
        <div class="t3-face t3-avant">${c.media({ nom: 'toiles/dragonlake', alt: c.s('accueil.toile.alt'), sizes: '(max-width: 760px) 80vw, 40vw', ratio: '4 / 3' })}</div>
        <div class="t3-face t3-droite" aria-hidden="true"></div>
        <div class="t3-face t3-gauche" aria-hidden="true"></div>
        <div class="t3-face t3-haut" aria-hidden="true"></div>
        <div class="t3-face t3-bas" aria-hidden="true"></div>
        <div class="t3-face t3-dos" data-face="dos">
          <span class="t3-traverse t3-traverse--v" aria-hidden="true"></span>
          <span class="t3-traverse t3-traverse--h" aria-hidden="true"></span>
          <span class="t3-signature">${logoSvg({ classe: 'logo-dos' })}<span class="t3-signature-texte">${c.t('accueil.toile.dos')}</span></span>
        </div>
      </div>
    </div>
    <ol class="toile3d-etapes">
      ${[1, 2, 3, 4].map((i) => html`<li data-etape="${i}"><strong>${c.t(`accueil.toile.e${i}t`)}</strong><span>${c.t(`accueil.toile.e${i}`)}</span></li>`)}
    </ol>
    <p class="toile3d-note masque-ecran-bas">${c.t('accueil.toile.note')}</p>
  </div>
</section>

<section class="rangee-section" id="sur-le-mur">
  <div class="conteneur tete-section tete-section--ligne">
    <div>
      <h2 data-anime="lignes">${c.t('accueil.rangee.titre')}</h2>
      <p data-anime>${c.t('accueil.rangee.texte')}</p>
    </div>
    <p data-anime>${c.lien('toiles', { ancre: 'catalogue', classe: 'bouton bouton--contour', texte: c.t('accueil.rangee.tout') })}</p>
  </div>
  <div class="rangee-fenetre" tabindex="0" role="region" aria-label="${c.s('accueil.rangee.region')}">
    <ul class="rangee-piste" data-effet="rangee" data-galerie>
      ${rangee.map((r) => r.t ? html`<li class="rangee-item rangee-item--toile">
        ${toile(c, r.t, { sizes: '(max-width: 760px) 60vw, 24vw' })}
        <p class="rangee-legende"><strong>${r.t.titre}</strong> <span class="code">${r.t.codes}</span></p>
      </li>` : html`<li class="rangee-item rangee-item--decor">
        ${c.media({ nom: r.d, alt: r.alt, sizes: '(max-width: 760px) 80vw, 34vw', ratio: r.ratio })}
      </li>`)}
    </ul>
  </div>
</section>

<section class="sculpteur conteneur" id="sculpteur">
  ${c.media({ nom: 'sculptures/souche-tigre', alt: c.s('accueil.sculpteur.alt'), classe: 'sculpteur-media', sizes: '(max-width: 760px) 100vw, 50vw', ratio: '4 / 3', attrs: 'data-fx="zoom"' })}
  <div class="sculpteur-texte">
    <p class="surtitre" data-anime>${c.t('accueil.sculpteur.sur')}</p>
    <h2 data-anime="lignes">${c.t('accueil.sculpteur.titre')}</h2>
    <div class="sculpteur-cernes">
      <svg class="cernes-svg" viewBox="0 0 220 220" aria-hidden="true" data-fx="trace">
        ${[18, 34, 50, 64, 78, 92, 104].map((r, i) => html`<path d="${cercle(110, 110, r, i)}" fill="none" stroke="currentColor" stroke-width="${i === 0 || i === 6 ? 3 : 1.4}" stroke-linecap="round"/>`)}
      </svg>
      <p class="cernes-annees"><span>2004</span><span class="cernes-fleche" aria-hidden="true">→</span><span>2023</span></p>
    </div>
    <p data-anime>${c.t('accueil.sculpteur.texte')}</p>
    <p class="actions" data-anime>
      ${c.lien('sculptures', { classe: 'bouton', texte: c.t('accueil.sculpteur.sculptures'), attrs: 'data-survol="magnetique"' })}
      ${c.lien('artiste', { classe: 'lien-fleche', texte: c.t('accueil.sculpteur.parcours') })}
    </p>
  </div>
</section>

<section class="commander" id="commander">
  <div class="conteneur">
    <div class="tete-section">
      <h2 data-anime="lignes">${c.t('accueil.commander.titre')}</h2>
      <p data-anime>${c.t('accueil.commander.texte')}</p>
    </div>
    <div class="commander-trait" aria-hidden="true">
      <svg viewBox="0 0 1000 40" preserveAspectRatio="none" data-fx="trace"><path d="M4 28 C 160 10, 330 34, 500 18 S 840 6, 996 22" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg>
    </div>
    <ol class="etapes" data-anime="cascade">
      ${[1, 2, 3, 4].map((i) => html`<li class="etape"><span class="etape-num" aria-hidden="true">${i}</span><h3>${c.t(`accueil.commander.e${i}t`)}</h3><p>${c.t(`accueil.commander.e${i}`)}</p></li>`)}
    </ol>
    <p class="commander-pied" data-anime><span>${c.t('accueil.commander.paiement')}</span> ${c.lien('contact', { ancre: 'demande', classe: 'bouton', texte: c.t('accueil.commander.action'), attrs: 'data-survol="magnetique"' })}</p>
  </div>
</section>

<section class="fin fin--sombre" id="fin">
  <div class="conteneur fin-grille">
    <div class="fin-signature" data-effet="signature">${logoSvg({ classe: 'logo-fin', titre: c.site.nom })}</div>
    <div class="fin-texte">
      <h2 data-anime="lignes">${c.t('accueil.fin.titre1')} <span class="accent">${c.t('accueil.fin.titre2')}</span></h2>
      <p data-anime>${c.t('accueil.fin.texte')}</p>
      <p class="actions" data-anime>
        ${c.lien('contact', { ancre: 'demande', classe: 'bouton', texte: c.t('accueil.fin.action'), attrs: 'data-survol="magnetique"' })}
        ${c.lien('toiles', { classe: 'bouton bouton--contour', texte: c.t('accueil.fin.action2') })}
      </p>
      <p class="fin-courriel" data-anime>${c.site.contact.email}</p>
    </div>
  </div>
</section>
`;
};

/* Cerne irrégulier : un cercle légèrement déformé, différent pour chaque anneau. */
function cercle(cx, cy, r, graine) {
  const n = 48, pts = [];
  for (let i = 0; i <= n; i++) {
    const a = (i / n) * Math.PI * 2;
    const ondule = 1 + 0.035 * Math.sin(a * 3 + graine) + 0.02 * Math.sin(a * 5 + graine * 2);
    pts.push(`${(cx + Math.cos(a) * r * ondule).toFixed(1)} ${(cy + Math.sin(a) * r * ondule * 0.96).toFixed(1)}`);
  }
  return 'M' + pts.join(' L') + 'Z';
}
