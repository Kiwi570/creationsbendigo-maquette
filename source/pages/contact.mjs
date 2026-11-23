/* Contact et commande : ouverture plein cadre (l'atelier l'hiver) avec une carte de commande,
   ma demande (toiles choisies + courriel préparé), paiement et réception, questions fréquentes. */
import { html } from '../../outils/gabarit.mjs';
import { traitScie } from '../gabarits/trait.mjs';

export const page = { cle: 'contact', fichier: 'contact', imagePartage: 'grok/atelier-hiver-1280.webp' };

export default (c) => html`
<section class="ct-hero" id="debut">
  ${c.media({ nom: 'grok/atelier-hiver', alt: 'Petit atelier de bois dans la forêt enneigée, une fenêtre éclairée au crépuscule', classe: 'ct-hero-media', sizes: '100vw', priorite: true, cadrage: '70% 60%', attrs: 'data-fx="parallaxe" data-fx-force="6"' })}
  <div class="conteneur ct-hero-zone">
    <div class="ct-carte ouv-visuel" data-iris-centre>
      <p class="surtitre ouv-el" data-anime="gsap">${c.t('contact.hero.sur')}</p>
      <h1 class="ct-hero-titre ouv-titre" data-anime="gsap"><span class="ligne-masque"><span class="hero-ligne">${c.t('contact.hero.titre')}</span></span></h1>
      <p class="ouv-el" data-anime="gsap">${c.t('contact.hero.texte')}</p>
      <p class="actions ouv-el" data-anime="gsap"><a class="bouton" href="#demande" data-action-principale data-survol="magnetique">${c.t('contact.hero.action')} <span class="demande-compte" data-demande-compte hidden></span></a></p>
      <p class="hero-info ct-courriel ouv-el" data-info-cle data-anime="gsap">${c.t('contact.hero.info')}</p>
    </div>
  </div>
</section>

<section class="demande conteneur" id="demande">
  <div class="demande-col">
    <h2 data-anime="lignes">${c.t('contact.demande.titre')}</h2>
    <p data-anime>${c.t('contact.demande.texte')}</p>
    <div class="demande-panier" data-anime>
      <ul class="demande-liste" data-demande-liste aria-live="polite"></ul>
      <p class="demande-vide" data-demande-vide>${c.t('contact.demande.vide')} ${c.lien('toiles', { ancre: 'catalogue', classe: 'lien-fleche', texte: c.t('contact.demande.videLien') })}</p>
    </div>
    <p class="demande-direct" data-anime>${c.t('contact.demande.ecrireDirect')} <a href="mailto:${c.site.contact.email}">${c.site.contact.email}</a></p>
  </div>
  <form class="demande-form" data-demande-form novalidate data-email="${c.site.contact.email}" data-sujet="${c.s('contact.demande.sujet')}" data-aucune="${c.s('contact.demande.aucuneToile')}" data-erreur-nom="${c.s('contact.demande.erreurNom')}" data-erreur-courriel="${c.s('contact.demande.erreurCourriel')}" data-anime>
    <div class="champ"><label for="d-nom">${c.t('contact.demande.nom')}</label><input id="d-nom" name="nom" autocomplete="name" required aria-describedby="d-nom-erreur"><p class="champ-erreur" id="d-nom-erreur" hidden></p></div>
    <div class="champ"><label for="d-courriel">${c.t('contact.demande.courriel')}</label><input id="d-courriel" name="courriel" type="email" autocomplete="email" required aria-describedby="d-courriel-erreur"><p class="champ-erreur" id="d-courriel-erreur" hidden></p></div>
    <div class="champ"><label for="d-ville">${c.t('contact.demande.ville')}</label><input id="d-ville" name="ville" autocomplete="address-level2"></div>
    <div class="champ"><label for="d-taille">${c.t('contact.demande.taille')}</label><input id="d-taille" name="taille" aria-describedby="d-taille-aide"><p class="champ-aide" id="d-taille-aide">${c.t('contact.demande.tailleAide')}</p></div>
    <fieldset class="champ champ-radios"><legend>${c.t('contact.demande.reception')}</legend>
      ${['r1', 'r2', 'r3'].map((r, i) => html`<label class="radio"><input type="radio" name="reception" value="${c.s(`contact.demande.${r}`)}"${i === 0 ? html` checked` : ''}><span>${c.t(`contact.demande.${r}`)}</span></label>`)}
    </fieldset>
    <div class="champ"><label for="d-message">${c.t('contact.demande.message')}</label><textarea id="d-message" name="message" rows="4" placeholder="${c.s('contact.demande.messageAide')}"></textarea></div>
    <p class="champ-aide">${c.t('contact.demande.donnees')}</p>
    <p><button type="submit" class="bouton">${c.t('contact.demande.preparer')}</button></p>
    <div class="demande-sortie" data-demande-sortie tabindex="-1" hidden>
      <p>${c.t('contact.demande.apres')}</p>
      <pre class="demande-texte" data-demande-texte></pre>
      <p class="actions"><a class="bouton" href="mailto:${c.site.contact.email}" data-demande-mailto>${c.t('contact.demande.ouvrir')}</a> <button type="button" class="bouton bouton--contour" data-demande-copier data-copiee="${c.s('contact.demande.copiee')}"><span data-libelle-bouton>${c.t('contact.demande.copier')}</span></button></p>
    </div>
  </form>
</section>

<section class="reception" id="reception">
  <div class="conteneur">
    <h2 data-anime="lignes">${c.t('contact.reception.titre')}</h2>
    <ul class="reception-grille" data-anime="cascade">
      ${[1, 2, 3, 4].map((i) => html`<li class="reception-carte"><span class="reception-num" aria-hidden="true">0${i}</span><h3>${c.t(`contact.reception.p${i}t`)}</h3><p>${c.t(`contact.reception.p${i}`)}</p>${i === 3 ? html`<p class="reception-exemple">${c.t('contact.reception.p3ex')}</p>` : ''}</li>`)}
    </ul>
  </div>
</section>

<section class="faq conteneur" id="faq">
  <h2 data-anime="lignes">${c.t('contact.faq.titre')}</h2>
  <div class="faq-liste">
    ${c.donnees.faq.map((f) => html`<details class="faq-item" data-anime><summary>${f.q}</summary><p>${f.r}</p></details>`)}
  </div>
</section>

<section class="fin fin--sombre fin--court" id="fin">
  ${traitScie()}
  <div class="conteneur fin-ligne">
    <div>
      <h2 data-anime="lignes">${c.t('contact.fin.titre')}</h2>
      <p data-anime>${c.t('contact.fin.texte')}</p>
    </div>
    <p class="actions" data-anime>${c.lien('toiles', { classe: 'bouton', texte: c.t('contact.fin.action'), attrs: 'data-survol="magnetique"' })}</p>
  </div>
</section>
`;
