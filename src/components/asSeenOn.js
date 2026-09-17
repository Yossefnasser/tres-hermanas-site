import { placeholder } from './placeholder.js';
import { pressDesktop, pressMobile } from '../data/sections.js';

/* Shoppable jewellery hotspots: pulsing dots over the photo; hover / focus /
   tap reveals a popover with the jewellery image + label (see styles.css). */
function hotspots(spots = []) {
  if (!spots.length) return '';
  return `
  <div class="absolute inset-0 z-20 pointer-events-none">
    ${spots
      .map(
        (s) => `
    <div class="shop-spot" style="left:${s.x}%; top:${s.y}%">
      <button class="shop-dot" aria-label="View jewellery: ${s.label}" type="button"></button>
      <div class="shop-pop bg-surface-container-lowest shadow-lg">
        <img src="${s.img}" alt="${s.label}" loading="lazy" class="w-full aspect-square object-cover object-center">
        <span class="block px-1.5 py-1 font-label-sm text-[9px] uppercase tracking-wider text-on-surface text-center leading-tight">${s.label}</span>
      </div>
    </div>`
      )
      .join('')}
  </div>`;
}

/** Section 7 — As Seen On (press & community). */
export function asSeenOn() {
  return `
  <!-- ================= DESKTOP ================= -->
  <div data-variant="desktop">
    <section class="w-full bg-surface py-space-2xl">
      <div class="w-full px-margin space-y-space-xl">
        <div class="text-center max-w-2xl mx-auto space-y-space-xs">
          <span class="font-label-sm text-label-sm uppercase tracking-[0.25em] text-primary">Worn By Connoisseurs</span>
          <h2 class="font-headline-lg text-headline-lg text-on-surface">As Seen On</h2>
          <p class="font-body-md text-body-md text-on-surface-variant">
            Adored by Amina Khalil, Mayan El Sayed, and women who embrace effortless Mediterranean poise.
          </p>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-space-sm">
          ${pressDesktop
            .map(
              (p) => `
          <div class="group relative hover:z-30 aspect-[3/4] bg-surface-container shadow-sm flex flex-col justify-end">
            <div class="absolute inset-0 overflow-hidden">
              ${p.img
                ? `<img src="${p.img}" alt="${p.name}" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">`
                : placeholder(p.name, { tone: 'low', absolute: true })}
              <div class="absolute inset-0 bg-gradient-to-t from-on-surface/90 via-on-surface/30 to-transparent"></div>
            </div>
            ${hotspots(p.spots)}
            <div class="relative z-10 p-space-sm text-surface">
              <span class="font-label-sm text-label-sm uppercase tracking-wider text-primary-fixed block">${p.kicker}</span>
              <p class="font-headline-sm text-headline-sm">${p.name}</p>
            </div>
          </div>`
            )
            .join('')}
        </div>
        <div class="text-center">
          <a class="inline-flex items-center gap-space-xs font-label-md text-label-md uppercase tracking-[0.2em] text-primary hover:text-on-surface transition-colors" href="https://instagram.com/treshermanasjewellery" rel="noreferrer" target="_blank">
            <span class="material-symbols-outlined text-[16px]">photo_camera</span>
            <span>Join the Inner Circle @treshermanasjewellery</span>
          </a>
        </div>
      </div>
    </section>
  </div>

  <!-- ================= MOBILE ================= -->
  <div data-variant="mobile">
    <section class="w-full py-space-xl flex flex-col gap-space-md">
      <div class="px-margin-mobile flex flex-col gap-1">
        <div class="flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-primary"></span>
          <span class="font-label-sm text-label-sm text-primary uppercase tracking-[0.18em]">CELEBRITY MUSES &amp; PRESS</span>
        </div>
        <h2 class="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">As Seen On</h2>
        <p class="font-body-sm text-body-sm text-on-surface-variant">
          Adored by Amina Khalil, Mayan El Sayed, and women who embrace effortless Mediterranean poise.
        </p>
      </div>
      <div class="flex gap-space-sm overflow-x-auto px-margin-mobile pb-2 snap-x no-scrollbar">
        ${pressMobile
          .map(
            (c) => `
        <div class="w-56 flex-shrink-0 snap-start bg-surface-container flex flex-col shadow-sm relative">
          <div class="relative aspect-[3/4]">
            <div class="absolute inset-0 overflow-hidden">
              ${c.img
                ? `<img src="${c.img}" alt="${c.caption}" class="w-full h-full object-cover">`
                : placeholder(c.caption)}
            </div>
            ${hotspots(c.spots)}
          </div>
          <div class="p-space-xs bg-surface-container-high text-center">
            <span class="font-label-sm text-[10px] text-tertiary uppercase tracking-wider">${c.caption}</span>
          </div>
        </div>`
          )
          .join('')}
      </div>
      <div class="px-margin-mobile pt-1">
        <a class="w-full py-3 bg-surface-container-high text-on-surface hover:text-primary font-label-sm text-label-sm uppercase tracking-[0.16em] flex items-center justify-center gap-2 transition-colors" href="https://instagram.com/treshermanasjewellery" rel="noreferrer" target="_blank">
          <span>✦ JOIN THE INNER CIRCLE @TRESHERMANASJEWELLERY</span>
        </a>
      </div>
    </section>
  </div>`;
}
