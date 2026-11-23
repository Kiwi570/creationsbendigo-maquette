/* Créations Bendigo · effets propres au projet (direction « Le trait de scie »).
   Le socle gère l'ouverture, les transitions, l'en-tête, le menu, les mesures et la bibliothèque d'effets.
   Effets propres (data-effet) : coup-de-scie (intro et voile), eventail, toile-3d, rangee, signature,
   catalogue, decor, avant-apres, cernes ; et la demande de toiles (liste partagée entre les pages). */
import { demarrer, boucle, etat, quand, centreOuverture, suivre, lacher, bloquerDefilement, debloquerDefilement } from './socle/index.js?v=1';

const gsap = window.gsap;
const ST = window.ScrollTrigger;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const mm = gsap ? gsap.matchMedia() : null;

/* ------------------------------------------------------------------ Demande de toiles (localStorage) */
const CLE = 'bendigo:demande';
const lireDemande = () => {
  try {
    const v = JSON.parse(localStorage.getItem(CLE) || '[]');
    return Array.isArray(v) ? v.filter((x) => typeof x === 'string').slice(0, 40) : [];
  } catch { try { localStorage.removeItem(CLE); } catch {} return []; }
};
const ecrireDemande = (l) => { try { localStorage.setItem(CLE, JSON.stringify(l)); } catch {} majDemande(); };
const CATALOGUE = (() => { try { return JSON.parse($('#donnees-toiles')?.textContent || '[]'); } catch { return []; } })();
function majDemande() {
  const l = lireDemande();
  $$('[data-demande-compte]').forEach((el) => { el.textContent = l.length; el.hidden = !l.length; });
  $$('[data-ajouter]').forEach((b) => {
    const dedans = l.includes(b.dataset.ajouter);
    b.setAttribute('aria-pressed', dedans ? 'true' : 'false');
    const t = b.querySelector('[data-libelle-bouton]');
    if (t) t.textContent = dedans ? b.dataset.libelleAjoutee : b.dataset.libelleAjouter;
  });
  majListeDemande(l);
}
function basculer(id, bouton) {
  const l = lireDemande();
  const ajout = !l.includes(id);
  ecrireDemande(ajout ? [...l, id] : l.filter((x) => x !== id));
  if (ajout && bouton) envol(bouton);
}
/* Retour de l'action : la toile ajoutée part en vignette vers « Ma demande », qui rebondit. */
function envol(bouton) {
  if (!gsap) return;
  const source = bouton.closest('.carte-toile, .vis-cadre')?.querySelector('img');
  const visible = (el) => el && el.offsetParent !== null && el.getBoundingClientRect().width > 0;
  /* L'en-tête caché en descendant revient d'abord : la vignette vise la position finale du bouton. */
  const entete = $('[data-entete]');
  document.documentElement.classList.remove('entete-cache');
  const decalage = entete ? new DOMMatrix(getComputedStyle(entete).transform).m42 : 0;
  const rect = (el) => { const r = el.getBoundingClientRect(); return el.closest('[data-entete]') ? { left: r.left, width: r.width, height: r.height, top: r.top - decalage, bottom: r.bottom - decalage } : r; };
  const cible = [$('.entete-actions .bouton'), $('[data-barre-fixe] .bouton:last-child')].find((el) => visible(el) && rect(el).top >= 0 && rect(el).bottom <= innerHeight);
  if (!source || !cible) return;
  const a = source.getBoundingClientRect(), b = rect(cible);
  const v = source.cloneNode();
  v.removeAttribute('srcset'); v.alt = ''; v.setAttribute('aria-hidden', 'true');
  Object.assign(v.style, { position: 'fixed', left: `${a.left}px`, top: `${a.top}px`, width: `${a.width}px`, height: `${a.height}px`, objectFit: 'contain', zIndex: 880, pointerEvents: 'none', margin: 0 });
  document.body.appendChild(v);
  const dx = b.left + b.width / 2 - (a.left + a.width / 2), dy = b.top + b.height / 2 - (a.top + a.height / 2);
  const tl = gsap.timeline({ onComplete: () => v.remove() });
  tl.to(v, { x: dx, duration: 0.7, ease: 'power1.inOut' }, 0)
    .to(v, { y: dy, duration: 0.7, ease: 'back.in(1.4)' }, 0)
    .to(v, { scale: 0.12, rotation: 14, duration: 0.7, ease: 'power2.in' }, 0)
    .to(v, { opacity: 0, duration: 0.12 }, 0.62)
    .fromTo(cible, { scale: 1 }, { scale: 1.12, duration: 0.14, yoyo: true, repeat: 1, ease: 'power2.out', clearProps: 'scale' }, 0.66);
}
function initDemande() {
  document.addEventListener('click', (e) => {
    const b = e.target.closest('[data-ajouter]');
    if (b) { e.preventDefault(); basculer(b.dataset.ajouter, b); const annonce = $('[data-annonce]'); if (annonce) annonce.textContent = b.getAttribute('aria-pressed') === 'true' ? `${b.dataset.titre} : ajoutée à votre demande.` : `${b.dataset.titre} : retirée de votre demande.`; }
    const r = e.target.closest('[data-retirer]');
    if (r) { e.preventDefault(); ecrireDemande(lireDemande().filter((x) => x !== r.dataset.retirer)); }
  });
  window.addEventListener('storage', (e) => { if (e.key === CLE) majDemande(); });
  majDemande();
}
function majListeDemande(l) {
  const liste = $('[data-demande-liste]');
  if (!liste) return;
  const vide = $('[data-demande-vide]');
  const items = l.map((id) => CATALOGUE.find((t) => t.id === id)).filter(Boolean);
  liste.replaceChildren(...items.map((t) => {
    const li = document.createElement('li');
    li.className = 'demande-item';
    li.innerHTML = `<img src="/assets/images/${t.image}-480.webp" alt="" width="96" height="${Math.round(96 / t.proportion)}" loading="lazy"><span class="demande-item-texte"><strong></strong><span class="code"></span></span><button type="button" class="demande-retirer" data-retirer="${t.id}">Retirer<span class="visuellement-cache"></span></button>`;
    li.querySelector('strong').textContent = t.titre;
    li.querySelector('.code').textContent = t.codes;
    li.querySelector('.visuellement-cache').textContent = ` ${t.titre}, ${t.codes}`;
    return li;
  }));
  if (vide) vide.hidden = items.length > 0;
}

/* ------------------------------------------------------------------ Intro : signature, coup de scie, copeaux */
const COUPE = (g, s) => {
  const a = (s - g).toFixed(2), b = (s + g - 100).toFixed(2);
  return `polygon(0% 0%, ${a}% 0%, 0% ${a}%, 0% 0%, 100% ${b}%, 100% 100%, ${b}% 100%, 100% ${b}%, 0% 0%)`;
};
function copeaux(canvas, trait, duree = 1.5) {
  if (!canvas) return;
  const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
  const W = innerWidth, H = innerHeight;
  canvas.width = W * dpr; canvas.height = H * dpr;
  const ctx = canvas.getContext('2d');
  ctx.scale(dpr, dpr);
  const couleurs = ['#f27d3f', '#e2531f', '#f2ebdf', '#d6bd96', '#ffb27a'];
  const parts = [];
  const t0 = performance.now();
  let dernier = t0;
  const pas = (t) => {
    const dt = Math.min(0.05, (t - dernier) / 1000); dernier = t;
    const age = (t - t0) / 1000;
    const p = trait.progres();
    if (p > 0 && p < 1 && parts.length < 260) {
      const x = trait.x0 + (trait.x1 - trait.x0) * p, y = trait.y0 + (trait.y1 - trait.y0) * p;
      for (let i = 0; i < 7; i++) parts.push({ x, y, vx: (Math.random() - .3) * 520, vy: -Math.random() * 420 - 60, r: Math.random() * 6.28, vr: (Math.random() - .5) * 14, l: 3 + Math.random() * 7, h: 1.5 + Math.random() * 2.5, c: couleurs[(Math.random() * couleurs.length) | 0], v: 0 });
    }
    ctx.clearRect(0, 0, W, H);
    for (const q of parts) {
      q.v += dt; q.vy += 900 * dt; q.vx *= 0.985; q.x += q.vx * dt; q.y += q.vy * dt; q.r += q.vr * dt;
      ctx.save(); ctx.globalAlpha = Math.max(0, 1 - q.v / 1.2); ctx.translate(q.x, q.y); ctx.rotate(q.r); ctx.fillStyle = q.c; ctx.fillRect(-q.l / 2, -q.h / 2, q.l, q.h); ctx.restore();
    }
    if (age < duree && !html().classList.contains('intro-finie')) requestAnimationFrame(pas); else ctx.clearRect(0, 0, W, H);
  };
  requestAnimationFrame(pas);
}
const html = () => document.documentElement;

/* Géométrie du trait : la diagonale de l'écran (du bas à gauche vers le haut à droite), passant par l'objet d'ouverture. */
function geometrieCoupe() {
  const W = document.documentElement.clientWidth || innerWidth, H = innerHeight;
  const c = centreOuverture();
  const s = (c.x / W) * 100 + (c.y / H) * 100; /* x% + y% = s */
  const angle = -Math.atan2(H, W) * 180 / Math.PI;
  /* Extrémités du trait sur les bords de l'écran : x% + y% = s. */
  const y0 = Math.min(100, s), x0 = s - y0, x1 = Math.min(100, s), y1 = s - x1;
  return { s, angle, c, x0: x0 * W / 100, y0: y0 * H / 100, x1: x1 * W / 100, y1: y1 * H / 100, W, H };
}

/* Animations d'entrée de la page (fin de l'intro, ou voile qui se retire). */
function entreePage(tl, t) {
  const lignes = $$('.hero-ligne');
  if (lignes.length) {
    const masques = lignes.map((l) => l.parentElement);
    tl.call(() => masques.forEach((m) => m.classList.add('actif')), null, Math.max(0, t - 0.01))
      .fromTo(lignes, { yPercent: 110, y: 0 }, { yPercent: 0, y: 0, duration: 0.85, stagger: 0.1, ease: 'power4.out' }, t)
      .call(() => masques.forEach((m) => m.classList.remove('actif')), null, t + 0.9 + lignes.length * 0.1);
  }
  const els = $$('.ouv-el');
  if (els.length) tl.fromTo(els, { y: 22, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.07, ease: 'power3.out' }, t + 0.2);
  const titre = $('.hero-titre, .ouv-titre');
  if (titre) tl.set(titre, { opacity: 1 }, t);
  const toiles = $$('.hero-toile');
  if (toiles.length) {
    const fin = [{ rotation: -6, x: 0, y: 0 }, { rotation: 5, x: 0, y: 0 }, { rotation: 0, x: 0, y: 0 }];
    const dep = [{ rotation: -16, x: -60, y: 50 }, { rotation: 14, x: 60, y: 60 }, { rotation: -3, x: 0, y: 70 }];
    toiles.forEach((el, i) => tl.fromTo(el, dep[i], { ...fin[i], duration: 1, ease: 'back.out(1.4)' }, t - 0.15 + i * 0.06));
  }
  const visuel = $('.ouv-visuel');
  if (visuel) tl.fromTo(visuel, { clipPath: 'inset(8% 8% 8% 8%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.1, ease: 'power3.out' }, t - 0.2);
}
function etatFinalPage() {
  if (!gsap) return;
  gsap.set('.hero-ligne', { yPercent: 0, y: 0 });
  gsap.set('.ouv-el, .hero-titre, .ouv-titre', { opacity: 1, y: 0 });
  const fin = [{ rotation: -6, x: 0, y: 0 }, { rotation: 5, x: 0, y: 0 }, { rotation: 0, x: 0, y: 0 }];
  $$('.hero-toile').forEach((el, i) => gsap.set(el, fin[i]));
  gsap.set('.ouv-visuel', { clipPath: 'inset(0% 0% 0% 0%)' });
}

/* ------------------------------------------------------------------ Accueil */
function eventail() {
  const zone = $('.hero-toiles');
  if (!zone || !ST) return;
  const [t1, t3, t2] = $$('.hero-toile', zone);
  const tl = gsap.timeline({ scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 0.6 } });
  tl.to(t1, { xPercent: -14, yPercent: -10, ease: 'none' }, 0)
    .to(t3, { xPercent: 14, yPercent: 12, ease: 'none' }, 0)
    .to(t2, { yPercent: -8, scale: 1.04, ease: 'none' }, 0);
}

/* Sciure qui tombe doucement derrière le premier écran (ne tourne qu'à l'écran, onglet visible). */
function sciure() {
  const c = $('[data-effet="sciure"]');
  if (!c) return;
  const ctx = c.getContext('2d');
  let W = 0, H = 0, dpr = 1;
  const taille = () => { dpr = Math.min(window.devicePixelRatio || 1, 1.5); W = c.clientWidth; H = c.clientHeight; c.width = W * dpr; c.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0); };
  taille();
  window.addEventListener('resize', taille);
  const n = innerWidth < 761 ? 22 : 46;
  const teintes = ['#d9b98b', '#c99a64', '#e2531f', '#b98a58'];
  const P = Array.from({ length: n }, () => ({ x: Math.random(), y: Math.random(), v: 0.018 + Math.random() * 0.03, r: Math.random() * 6.28, vr: (Math.random() - .5) * 1.6, l: 2 + Math.random() * 5, h: 1 + Math.random() * 1.6, o: 0.25 + Math.random() * 0.45, d: Math.random() * 6.28, c: teintes[(Math.random() * teintes.length) | 0] }));
  boucle(c, (dt, t) => {
    ctx.clearRect(0, 0, W, H);
    for (const q of P) {
      q.y += q.v * dt; q.r += q.vr * dt;
      if (q.y > 1.05) { q.y = -0.05; q.x = Math.random(); }
      const x = (q.x + Math.sin(t * 0.6 + q.d) * 0.012) * W, y = q.y * H;
      ctx.save(); ctx.globalAlpha = q.o; ctx.translate(x, y); ctx.rotate(q.r); ctx.fillStyle = q.c; ctx.fillRect(-q.l / 2, -q.h / 2, q.l, q.h); ctx.restore();
    }
  });
}

function bandeau() {
  const b = $('[data-effet="bandeau"]');
  if (!b || !ST) return;
  gsap.fromTo(b, { xPercent: 0 }, { xPercent: -8, ease: 'none', scrollTrigger: { trigger: '.toiles-hero', start: 'top top', end: 'bottom top', scrub: 0.6 } });
}

function parallaxes() {
  if (!ST) return;
  const a = $('[data-effet="annee"]');
  if (a) gsap.fromTo(a, { yPercent: 0 }, { yPercent: -22, ease: 'none', scrollTrigger: { trigger: '.ar-hero', start: 'top top', end: 'bottom top', scrub: 0.5 } });
  const h = $('[data-effet="hero-parallaxe"]');
  if (h) gsap.fromTo(h, { y: 0 }, { y: () => innerHeight * 0.08, ease: 'none', scrollTrigger: { trigger: '.sc-hero', start: 'top top', end: 'bottom top', scrub: 0.5, invalidateOnRefresh: true } });
}

function toile3d() {
  const s = $('.toile3d');
  if (!s || !ST) return;
  const objet = $('.toile3d-objet', s);
  const etapes = $$('.toile3d-etapes li', s);
  const masque = $('.logo-dos .sig-masque', s);
  if (masque) gsap.set(masque, { attr: { width: 0 } });
  const seuils = [0, 0.27, 0.49, 0.7];
  let courante = -1;
  const marquer = (p) => {
    let i = 0;
    seuils.forEach((x, k) => { if (p >= x) i = k; });
    if (i === courante) return;
    courante = i;
    etapes.forEach((li, k) => li.classList.toggle('actif', k === i));
  };
  marquer(0);
  const tl = gsap.timeline({ defaults: { ease: 'none' }, scrollTrigger: { trigger: s, start: 'top top', end: 'bottom bottom', scrub: 0.6, invalidateOnRefresh: true,
    onUpdate: (st) => marquer(st.progress), onRefresh: (st) => marquer(st.progress) } });
  tl.to(objet, { rotationY: -16, rotationX: 4, duration: 0.03 })
    .to(objet, { rotationY: -30, rotationX: 7, duration: 0.22 })
    .to(objet, { rotationY: -80, rotationX: 3, duration: 0.22 })
    .to(objet, { rotationY: -132, rotationX: 9, duration: 0.2 })
    .to(objet, { rotationY: -180, rotationX: 2, duration: 0.18 });
  if (masque) tl.to(masque, { attr: { width: 640 }, duration: 0.12 }, '-=0.04');
  tl.to({}, { duration: 0.08 });
}

function rangee() {
  $$('.rangee-section').forEach(rangeeUne);
}
function rangeeUne(s) {
  if (!mm) return;
  const fenetre = $('.rangee-fenetre', s), piste = $('.rangee-piste', s);
  mm.add('(max-width: 760px)', () => { piste.removeAttribute('data-effet'); return () => piste.setAttribute('data-effet', 'rangee'); });
  mm.add('(min-width: 761px)', () => {
    gsap.fromTo(piste, { x: 0 }, { x: () => -Math.max(0, piste.scrollWidth - fenetre.clientWidth), ease: 'none',
      scrollTrigger: { trigger: s, start: 'top bottom', end: 'bottom top', scrub: 0.5, invalidateOnRefresh: true } });
  });
}

function signature() {
  $$('[data-effet="signature"]').forEach((z) => {
    const m = $('.sig-masque', z);
    if (!m || !ST) return;
    gsap.fromTo(m, { attr: { width: 0 } }, { attr: { width: 640 }, ease: 'none', scrollTrigger: { trigger: z, start: 'top 85%', end: 'bottom 55%', scrub: 0.6 } });
  });
}

/* ------------------------------------------------------------------ Les toiles : catalogue, visionneuse, décor */
function catalogue() {
  const zone = $('[data-catalogue]');
  if (!zone) return;
  const cartes = $$('.carte-toile', zone);
  const compte = $('[data-catalogue-compte]');
  const aucune = $('[data-catalogue-aucune]');
  const params = new URLSearchParams(location.search);
  const filtre = { collection: params.get('collection') || 'toutes', version: params.get('version') || 'toutes' };
  const boutons = $$('[data-filtre]');
  const appliquer = (anime) => {
    boutons.forEach((b) => b.setAttribute('aria-pressed', filtre[b.dataset.filtre] === b.dataset.valeur ? 'true' : 'false'));
    let n = 0;
    const faire = () => {
      cartes.forEach((c) => {
        const ok = (filtre.collection === 'toutes' || c.dataset.collection === filtre.collection) && (filtre.version === 'toutes' || c.dataset.version === filtre.version);
        c.hidden = !ok; if (ok) n++;
      });
      if (compte) compte.textContent = n === 1 ? compte.dataset.un : compte.dataset.plusieurs.replace('{n}', n);
      if (aucune) aucune.hidden = n > 0;
      $$('[data-filtre-compte]').forEach((el) => {
        const [k, v] = el.dataset.filtreCompte.split(':');
        const f = { ...filtre, [k]: v };
        el.textContent = cartes.filter((c) => (f.collection === 'toutes' || c.dataset.collection === f.collection) && (f.version === 'toutes' || c.dataset.version === f.version)).length;
      });
    };
    const grille = $('.catalogue-grille', zone);
    if (anime && gsap && grille) {
      gsap.to(grille, { opacity: 0.25, duration: 0.15, onComplete: () => { faire(); gsap.fromTo(grille, { opacity: 0.25 }, { opacity: 1, duration: 0.3 }); gsap.fromTo(cartes.filter((c) => !c.hidden), { y: 16 }, { y: 0, duration: 0.45, stagger: 0.04, ease: 'power3.out', clearProps: 'transform' }); if (ST) ST.refresh(); } });
    } else faire();
  };
  boutons.forEach((b) => b.addEventListener('click', () => {
    filtre[b.dataset.filtre] = b.dataset.valeur;
    const u = new URL(location.href);
    ['collection', 'version'].forEach((k) => { if (filtre[k] === 'toutes') u.searchParams.delete(k); else u.searchParams.set(k, filtre[k]); });
    u.searchParams.delete('voir');
    history.replaceState(history.state, '', u.pathname + u.search + u.hash);
    appliquer(true);
  }));
  appliquer(false);
}

function visionneuse() {
  const d = $('[data-visionneuse]');
  if (!d) return;
  const img = $('.vis-image', d), titre = $('.vis-titre', d), codes = $('.vis-codes', d), ajout = $('.vis-ajouter', d);
  const ordre = () => $$('.carte-toile:not([hidden])').map((c) => c.dataset.id);
  let courant = null, retour = null;
  const montrer = (id) => {
    const t = CATALOGUE.find((x) => x.id === id);
    if (!t) return;
    courant = id;
    img.src = `/assets/images/${t.image}-1200.webp`;
    img.srcset = `/assets/images/${t.image}-800.webp 800w, /assets/images/${t.image}-1200.webp 1200w`;
    img.alt = `${t.titre}${t.version === 'nb' ? ', en noir et blanc' : ''}`;
    img.style.aspectRatio = t.ratio;
    titre.textContent = t.titre;
    codes.textContent = t.codes;
    ajout.dataset.ajouter = t.id; ajout.dataset.titre = t.titre;
    majDemande();
  };
  const ouvrir = (id, depuis) => {
    retour = depuis || document.activeElement;
    montrer(id);
    d.hidden = false;
    document.documentElement.classList.add('vis-ouverte');
    bloquerDefilement('visionneuse');
    suivre(d);
    if (gsap) gsap.fromTo(d, { opacity: 0 }, { opacity: 1, duration: 0.25 });
    $('.vis-fermer', d).focus();
  };
  const fermer = () => {
    if (d.hidden) return;
    d.hidden = true;
    document.documentElement.classList.remove('vis-ouverte');
    debloquerDefilement('visionneuse');
    lacher(d);
    const u = new URL(location.href);
    if (u.searchParams.has('voir')) { u.searchParams.delete('voir'); history.replaceState(history.state, '', u.pathname + u.search + u.hash); }
    if (retour && retour.focus) retour.focus();
  };
  const voisin = (k) => { const o = ordre(); const i = o.indexOf(courant); if (i >= 0 && o.length) montrer(o[(i + k + o.length) % o.length]); };
  document.addEventListener('click', (e) => {
    const b = e.target.closest('[data-voir]');
    if (b) { e.preventDefault(); ouvrir(b.dataset.voir, b); }
  });
  $('.vis-fermer', d).addEventListener('click', fermer);
  $('.vis-prec', d).addEventListener('click', () => voisin(-1));
  $('.vis-suiv', d).addEventListener('click', () => voisin(1));
  d.addEventListener('click', (e) => { if (e.target === d) fermer(); });
  d.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { e.preventDefault(); fermer(); }
    else if (e.key === 'ArrowLeft') voisin(-1);
    else if (e.key === 'ArrowRight') voisin(1);
    else if (e.key === 'Tab') {
      const f = $$('button, a[href]', d).filter((x) => !x.hidden && x.offsetParent !== null);
      if (!f.length) return;
      if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
      else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
    }
  });
  let x0 = null;
  d.addEventListener('touchstart', (e) => { x0 = e.touches[0].clientX; }, { passive: true });
  d.addEventListener('touchend', (e) => { if (x0 == null) return; const dx = e.changedTouches[0].clientX - x0; if (Math.abs(dx) > 50) voisin(dx < 0 ? 1 : -1); x0 = null; });
  const voir = new URLSearchParams(location.search).get('voir');
  if (voir && CATALOGUE.some((t) => t.id === voir)) quand('pret', () => ouvrir(voir));
}

function decor() {
  const z = $('[data-effet="decor"]');
  if (!z) return;
  const cadre = $('.decor-toile', z), im = $('img', cadre);
  const choix = $$('[data-decor]', z);
  const poser = (id, anime) => {
    const t = CATALOGUE.find((x) => x.id === id);
    if (!t) return;
    choix.forEach((b) => b.setAttribute('aria-pressed', b.dataset.decor === id ? 'true' : 'false'));
    /* Zone du mur, en % de l'image du salon : la toile y tient en entier, à sa proportion. */
    const zoneL = 34, zoneH = 40, ratioImage = 1600 / 1074;
    let h = zoneH, l = (h * t.proportion) / ratioImage;
    if (l > zoneL) { l = zoneL; h = (l * ratioImage) / t.proportion; }
    const changer = () => {
      cadre.style.setProperty('--l', `${l.toFixed(2)}%`);
      cadre.style.setProperty('--h', `${h.toFixed(2)}%`);
      im.src = `/assets/images/${t.image}-800.webp`;
      im.alt = `${t.titre} au mur du salon`;
      const leg = $('[data-decor-legende]', z); if (leg) leg.textContent = `${t.titre} · ${t.codes}`;
    };
    if (anime && gsap) gsap.to(cadre, { opacity: 0, y: -12, duration: 0.18, onComplete: () => { changer(); gsap.fromTo(cadre, { opacity: 0, y: -12 }, { opacity: 1, y: 0, duration: 0.45, ease: 'back.out(1.6)' }); } });
    else changer();
  };
  choix.forEach((b) => b.addEventListener('click', () => poser(b.dataset.decor, true)));
  poser(choix[0]?.dataset.decor, false);
  if (ST) gsap.fromTo(cadre, { y: 30, rotation: -2 }, { y: 0, rotation: 0, ease: 'none', scrollTrigger: { trigger: z, start: 'top 85%', end: 'center 50%', scrub: 0.6 } });
}

/* ------------------------------------------------------------------ Sculptures : avant / après */
function avantApres() {
  $$('[data-effet="avant-apres"]').forEach((z) => {
    const r = $('input[type="range"]', z);
    const regler = (v) => z.style.setProperty('--coupe', `${v}%`);
    let touche = false;
    r.addEventListener('input', () => { touche = true; regler(r.value); });
    regler(r.value);
    if (ST) ST.create({ trigger: z, start: 'top 80%', end: 'bottom 40%', scrub: true, onUpdate: (st) => { if (touche) return; const v = Math.round(78 - st.progress * 50); r.value = v; regler(v); } });
  });
}

/* ------------------------------------------------------------------ L'artiste : cernes */
function cernes() {
  const z = $('[data-effet="cernes"]');
  if (!z || !ST) return;
  const anneaux = $$('.cerne', z);
  const entrees = $$('.parcours-entree', z);
  anneaux.forEach((a) => { const l = a.getTotalLength(); a.style.strokeDasharray = `${l}`; a.style.strokeDashoffset = `${l}`; a.dataset.l = l; });
  let debuts = [];
  const mesurer = () => { debuts = entrees.map((e) => e.getBoundingClientRect().top + scrollY - innerHeight * 0.6); };
  const maj = () => {
    const y = scrollY;
    let courant = -1;
    entrees.forEach((e, i) => {
      const p = Math.max(0, Math.min(1, (y - debuts[i] + innerHeight * 0.25) / (innerHeight * 0.25)));
      const a = anneaux[i];
      if (a) a.style.strokeDashoffset = `${(+a.dataset.l * (1 - p)).toFixed(1)}`;
      if (y >= debuts[i]) courant = i;
    });
    anneaux.forEach((a, i) => a.classList.toggle('actif', i === courant));
    entrees.forEach((e, i) => e.classList.toggle('actif', i === courant));
    const lab = $('[data-cerne-annee]', z);
    if (lab) lab.textContent = courant >= 0 ? entrees[courant].dataset.annee : entrees[0]?.dataset.annee || '';
  };
  ST.create({ trigger: z, start: 'top bottom', end: 'bottom top', onUpdate: maj, onRefresh: () => { mesurer(); maj(); } });
  mesurer(); maj();
}

/* ------------------------------------------------------------------ Contact : demande par courriel */
function formulaireDemande() {
  const f = $('[data-demande-form]');
  if (!f) return;
  const sortie = $('[data-demande-sortie]');
  const texte = $('[data-demande-texte]');
  const email = f.dataset.email;
  const erreur = (champ, msg) => {
    const el = $(`#${champ.id}-erreur`);
    champ.setAttribute('aria-invalid', msg ? 'true' : 'false');
    if (el) { el.textContent = msg || ''; el.hidden = !msg; }
  };
  const composer = () => {
    const d = new FormData(f);
    const toiles = lireDemande().map((id) => CATALOGUE.find((t) => t.id === id)).filter(Boolean);
    const lignes = [
      'Bonjour Bendigo,', '',
      'Je souhaite commander :',
      ...(toiles.length ? toiles.map((t) => `- ${t.titre} (${t.codes})`) : [`- ${f.dataset.aucune}`]),
      '',
      d.get('taille') ? `Taille ou espace : ${d.get('taille')}` : '',
      d.get('reception') ? `Réception : ${d.get('reception')}` : '',
      d.get('ville') ? `Ville ou région : ${d.get('ville')}` : '',
      d.get('message') ? `\n${d.get('message')}` : '',
      '', `${d.get('nom')}`, `${d.get('courriel')}`,
    ].filter((x, i, a) => x !== '' || a[i - 1] !== '');
    return lignes.join('\n');
  };
  let occupe = false;
  f.addEventListener('submit', (e) => {
    e.preventDefault();
    if (occupe) return;
    const nom = f.elements.nom, courriel = f.elements.courriel;
    let ok = true;
    if (!nom.value.trim()) { erreur(nom, f.dataset.erreurNom); ok = false; } else erreur(nom, '');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(courriel.value.trim())) { erreur(courriel, f.dataset.erreurCourriel); ok = false; } else erreur(courriel, '');
    if (!ok) { (f.querySelector('[aria-invalid="true"]') || nom).focus(); return; }
    occupe = true;
    const bouton = f.querySelector('[type="submit"]');
    bouton.disabled = true;
    const corps = composer();
    texte.textContent = corps;
    sortie.hidden = false;
    if (gsap) gsap.fromTo(sortie, { y: 14, opacity: 0 }, { y: 0, opacity: 1, duration: 0.45, ease: 'power3.out' });
    sortie.focus();
    const lien = $('[data-demande-mailto]');
    const href = `mailto:${email}?subject=${encodeURIComponent(f.dataset.sujet)}&body=${encodeURIComponent(corps)}`;
    if (lien) lien.href = href;
    setTimeout(() => { occupe = false; bouton.disabled = false; }, 1500);
  });
  const copier = $('[data-demande-copier]');
  if (copier) copier.addEventListener('click', async () => {
    const t = texte.textContent;
    try { await navigator.clipboard.writeText(t); } catch {
      const r = document.createRange(); r.selectNodeContents(texte); const s = getSelection(); s.removeAllRanges(); s.addRange(r);
    }
    copier.querySelector('[data-libelle-bouton]').textContent = copier.dataset.copiee;
  });
}

/* ------------------------------------------------------------------ Démarrage */
demarrer({
  preparer() {
    initDemande();
    eventail();
    sciure();
    bandeau();
    parallaxes();
    toile3d();
    rangee();
    signature();
    catalogue();
    visionneuse();
    decor();
    avantApres();
    cernes();
    formulaireDemande();
  },
  jouer() {
    if (!gsap) return null;
    const g = geometrieCoupe();
    const panneau = $('.ouverture-panneau');
    const coupe = $('.ouverture-coupe', panneau);
    const logo = $('.ouverture-logo', panneau);
    panneau.style.setProperty('--angle', `${g.angle}deg`);
    gsap.set(coupe, { x: g.x0, y: g.y0, yPercent: -50, rotation: g.angle, scaleX: 0, opacity: 1, transformOrigin: '0% 50%', width: Math.hypot(g.x1 - g.x0, g.y1 - g.y0) });
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.fromTo(logo, { clipPath: 'inset(0% 100% 0% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.55, ease: 'power2.inOut' }, 0)
      .fromTo('.ouverture-ligne', { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.3 }, 0.25)
      .fromTo(coupe, { scaleX: 0 }, { scaleX: 1, duration: 0.32, ease: 'power2.in' }, 0.6)
      .call(() => copeaux($('.ouverture-copeaux', panneau), { ...g, progres: () => gsap.getProperty(coupe, 'scaleX') }), null, 0.6)
      .to([logo, '.ouverture-ligne'], { opacity: 0, duration: 0.2 }, 0.95);
    const ouv = { g: 0 };
    tl.fromTo(ouv, { g: 0 }, { g: 112, duration: 0.8, ease: 'power3.inOut', onUpdate: () => { panneau.style.clipPath = COUPE(ouv.g, g.s); } }, 0.95)
      .to(coupe, { opacity: 0, duration: 0.3 }, 1.2);
    entreePage(tl, 1.15);
    return tl;
  },
  etatFinal() { etatFinalPage(); },
  arrivee() {
    if (!gsap) return;
    const tl = gsap.timeline();
    entreePage(tl, 0.1);
  },
});
