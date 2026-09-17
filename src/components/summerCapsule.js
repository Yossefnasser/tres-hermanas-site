import { placeholder } from './placeholder.js';
import { capsuleProducts, DEFAULT_HOVER_IMG } from '../data/products.js';

const tagTone = {
  primary: 'bg-primary text-on-primary',
  dark: 'bg-on-surface text-surface',
  olive: 'bg-on-secondary-container text-surface-container-lowest'
};

function badge(tag, tone, extra = '') {
  if (!tag) return '';
  return `<span class="absolute ${extra} ${tagTone[tone]} font-label-sm text-[9px] px-1.5 py-0.5 uppercase tracking-wider">${tag}</span>`;
}

/** Section 2 — Sun-Drenched 18KT Essentials. */
export function summerCapsule() {
  return `
  <!-- ================= DESKTOP ================= -->
  <div data-variant="desktop">
    <section class="w-full bg-surface-container-low py-space-2xl" id="summer-capsule">
      <div class="w-full px-margin space-y-space-xl">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-space-md pb-space-sm border-b border-outline-variant/30">
          <div>
            <span class="font-label-sm text-label-sm uppercase tracking-[0.25em] text-primary">MEDITERRANEAN SUMMER CAPSULE · 2026</span>
            <h2 class="font-headline-lg text-headline-lg text-on-surface tracking-tight mt-1">Sun-Drenched <span class="italic font-light text-primary">18KT Essentials</span></h2>
          </div>
          <div>
            <a class="inline-flex items-center gap-space-xs font-label-md text-label-md uppercase tracking-[0.18em] text-on-surface hover:text-primary transition-colors py-space-xs whitespace-nowrap group" href="#collections">
              <span>Discover The Summer Capsule</span>
              <span class="material-symbols-outlined text-[16px] transition-transform group-hover:translate-x-1">arrow_forward</span>
            </a>
          </div>
        </div>
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-gutter">
          ${capsuleProducts
            .map(
              (p) => `
          <div class="group bg-surface flex flex-col justify-between shadow-sm p-space-md transition-shadow hover:shadow-md">
            <div class="relative overflow-hidden aspect-square bg-surface-container-lowest mb-space-md">
            ${p.img
              ? `<img src="${p.img}" alt="${p.name}" class="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105">`
              : placeholder(p.name, { tone: 'low' })}
            <img src="${p.hoverImg || DEFAULT_HOVER_IMG}" alt="${p.name} — alternate view" loading="lazy"
              class="absolute inset-0 w-full h-full object-cover object-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              ${p.tag ? `<span class="absolute top-2 left-2 ${tagTone[p.tagTone]} font-label-sm text-label-sm px-2 py-0.5 tracking-wider uppercase">${p.tag}</span>` : ''}
              <button aria-label="Add to Wishlist" class="wishlist-btn absolute top-2 right-2 w-8 h-8 rounded-full bg-surface/80 backdrop-blur-sm flex items-center justify-center text-on-surface hover:text-error transition-colors" type="button">
                <span class="material-symbols-outlined text-[18px]">favorite</span>
              </button>
            </div>
            <div class="space-y-space-xs flex-1">
              <div class="flex items-center justify-between text-outline font-label-sm text-label-sm">
                <span class="uppercase tracking-widest">${p.meta[0]}</span>
                <span>${p.meta[1]}</span>
              </div>
              <h3 class="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">${p.name}</h3>
              <p class="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">${p.desc}</p>
            </div>
            <div class="pt-space-md mt-space-md flex items-center justify-between">
              <span class="font-body-lg text-body-lg font-medium text-on-surface">${p.priceLabel}</span>
              <button class="px-space-md py-space-xs bg-on-surface text-surface hover:bg-primary transition-colors font-label-sm text-label-sm uppercase tracking-widest" data-add-to-cart="${p.name}" data-price="${p.price}">Acquire</button>
            </div>
          </div>`
            )
            .join('')}
        </div>
      </div>
    </section>
  </div>

  <!-- ================= MOBILE ================= -->
  <div data-variant="mobile">
    <section class="w-full px-margin-mobile py-space-xl bg-surface-container-low flex flex-col gap-space-md">
      <div class="flex flex-col gap-1">
        <div class="flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-primary"></span>
          <span class="font-label-sm text-label-sm text-primary uppercase tracking-[0.18em]">DAILY HEIRLOOMS</span>
        </div>
        <h2 class="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">Sun-Drenched 18KT Essentials</h2>
      </div>
      <div class="grid grid-cols-2 gap-gutter-mobile">
        ${capsuleProducts
          .map(
            (p) => `
        <div class="bg-surface-container-lowest flex flex-col group relative shadow-sm">
          <div class="relative w-full aspect-square bg-surface-container overflow-hidden">
            ${p.img
              ? `<img src="${p.img}" alt="${p.name}" class="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105">`
              : placeholder(p.name)}
            <img src="${p.hoverImg || DEFAULT_HOVER_IMG}" alt="${p.name} — alternate view" loading="lazy"
              class="absolute inset-0 w-full h-full object-cover object-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <button class="wishlist-btn absolute top-2 right-2 w-8 h-8 rounded-full bg-surface/80 backdrop-blur text-on-surface hover:text-primary flex items-center justify-center transition-colors">
              <span class="material-symbols-outlined text-[18px]">favorite</span>
            </button>
            ${badge(p.mTag, p.mTagTone, 'bottom-2 left-2')}
          </div>
          <div class="p-space-sm flex flex-col flex-grow justify-between gap-2">
            <div>
              <span class="font-label-sm text-[10px] text-tertiary uppercase tracking-wider block">${p.category}</span>
              <h3 class="font-headline-sm text-[17px] text-on-surface leading-tight mt-0.5">${p.name}</h3>
            </div>
            <div class="flex items-center justify-between pt-1">
              <span class="font-body-sm text-body-sm text-on-surface font-semibold">${p.priceLabel}</span>
              <button class="bg-surface-container-high hover:bg-primary hover:text-on-primary text-on-surface font-label-sm text-[10px] px-2 py-1 uppercase tracking-wider transition-colors" data-add-to-cart="${p.name}" data-price="${p.price}">Acquire</button>
            </div>
          </div>
        </div>`
          )
          .join('')}
      </div>
    </section>
  </div>`;
}
