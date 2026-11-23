/* Logo vectorisé de Créations Bendigo (signature « Bendigo » et empreinte de main), en SVG en ligne :
   couleur courante, et dessin révélé par un masque qui avance de gauche à droite (effet « signature »). */
import { readFileSync } from 'node:fs';
import { brut } from '../../outils/gabarit.mjs';

const d = readFileSync(new URL('./logo-chemin.txt', import.meta.url), 'utf8').trim();
let n = 0;
export function logoSvg({ classe = '', titre = '' } = {}) {
  const id = `sig-${++n}`;
  return brut(`<svg class="logo-svg ${classe}" viewBox="0 0 640 430" ${titre ? `role="img" aria-label="${titre}"` : 'aria-hidden="true"'} data-typo-ignorer>
<defs><clipPath id="${id}"><rect class="sig-masque" x="0" y="0" width="640" height="430"/></clipPath></defs>
<path fill="currentColor" fill-rule="evenodd" clip-path="url(#${id})" d="${d}"/></svg>`);
}
