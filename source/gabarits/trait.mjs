/* Trait de scie orange qui se dessine au défilement : il relie l'intro, le voile et la fin de chaque page. */
import { brut } from '../../outils/gabarit.mjs';

export const traitScie = (classe = '') => brut(`<svg class="trait-scie ${classe}" viewBox="0 0 1200 60" preserveAspectRatio="none" aria-hidden="true" data-fx="trace" data-grille="fil" data-visuel>
<path d="M0 46 L1200 10" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
<path d="M0 50 L1200 14" fill="none" stroke="currentColor" stroke-opacity=".35" stroke-width="1.2" stroke-dasharray="2 9" stroke-linecap="round"/></svg>`);
