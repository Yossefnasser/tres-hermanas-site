import { placeholder } from './placeholder.js';
import { iconProducts, DEFAULT_HOVER_IMG } from '../data/products.js';

const badgeTone = { primary: 'bg-primary text-on-primary', dark: 'bg-on-surface text-surface' };

const FILTER_ACTIVE_DESKTOP = 'px-space-md py-space-xs bg-on-surface text-surface font-label-sm text-label-sm uppercase tracking-wider whitespace-nowrap';
const FILTER_IDLE_DESKTOP = 'px-space-md py-space-xs bg-surface text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm uppercase tracking-wider whitespace-nowrap transition-colors';
const FILTER_ACTIVE_MOBILE = 'px-3 py-1.5 bg-on-surface text-surface font-label-sm text-label-sm uppercase tracking-wider';
const FILTER_IDLE_MOBILE = 'px-3 py-1.5 bg-surface-container text-on-surface font-label-sm text-label-sm uppercase tracking-wider hover:bg-surface-container-high transition-colors';

const filters = [
  { label: 'All Icons', key: 'all' },
  { label: 'Emeralds', key: 'emeralds' },
  { label: 'Bracelets', key: 'bracelets' },
  { label: 'Rings', key: 'rings' }
];

const filterKeyByIndex = ['emeralds', 'emeralds', 'rings', 'bracelets', 'rings', 'bracelets'];

/** Section 4 — The Icons Collection with interactive category filters. */
export function iconsCollection() {
  return `
  <!-- ================= DESKTOP ================= -->
  <div data-variant="desktop">
    <section class="w-full bg-surface-container-low py-space-2xl">
      <div class="w-full px-margin space-y-space-xl">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
          <div class="space-y-space-xs">
            <span class="font-label-sm text-label-sm uppercase tracking-[0.25em] text-primary">Atelier Favorites</span>
            <h2 class="font-headline-lg text-headline-lg text-on-surface">The Icons Collection</h2>
            <p class="font-body-sm text-body-sm text-on-surface-variant">Signature pieces hand-sculpted in Madrid with certifiable 18KT gold and fine gems.</p>
          </div>
          <div class="flex items-center gap-space-xs overflow-x-auto pb-1 no-scrollbar" data-filter-group data-filter-target="#iconsGridDesktop" data-active-classes="${FILTER_ACTIVE_DESKTOP}" data-idle-classes="${FILTER_IDLE_DESKTOP}">
            ${filters
              .map(
                (f, i) => `
            <button class="${i === 0 ? FILTER_ACTIVE_DESKTOP : FILTER_IDLE_DESKTOP}" data-filter="${f.key}">${f.label}</button>`
              )
              .join('')}
          </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter lg:gap-space-lg" id="iconsGridDesktop">
          ${iconProducts
            .map(
              (p, i) => `
          <div class="group bg-surface flex flex-col justify-between shadow-sm p-space-md transition-shadow hover:shadow-md" data-filter-key="${filterKeyByIndex[i]}">
            <div class="relative overflow-hidden aspect-square bg-surface-container-lowest mb-space-md">
              ${p.img
                ? `<img src="${p.img}" alt="${p.name}" class="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105">`
                : placeholder(p.name, { tone: 'low' })}
              <img src="${p.hoverImg || p.img}" alt="${p.name} — alternate view" loading="lazy"
                class="absolute inset-0 w-full h-full object-cover object-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              ${p.badge ? `<span class="absolute top-2 left-2 ${badgeTone[p.badgeTone]} font-label-sm text-label-sm px-2 py-0.5 tracking-wider uppercase">${p.badge}</span>` : ''}
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
              <p class="font-body-sm text-body-sm text-on-surface-variant line-clamp-1">${p.desc}</p>
            </div>
            <div class="pt-space-md mt-space-md flex items-center justify-between">
              <span class="font-body-lg text-body-lg font-medium text-on-surface">${p.priceLabel}</span>
              <button class="px-space-md py-space-xs bg-on-surface text-surface hover:bg-primary transition-colors font-label-sm text-label-sm uppercase tracking-widest" data-add-to-cart="${p.name}" data-price="${p.price}">Acquire</button>
            </div>
          </div>`
            )
            .join('')}
        </div>
        <div class="text-center pt-space-lg">
          <a class="inline-flex items-center gap-space-xs font-label-md text-label-md uppercase tracking-[0.2em] text-on-surface hover:text-primary transition-colors pb-1" href="#collections">
            <span>View All 52 Archival Creations</span>
            <span class="material-symbols-outlined text-[16px]">arrow_right_alt</span>
          </a>
        </div>
      </div>
    </section>
  </div>

  <!-- ================= MOBILE ================= -->
  <div data-variant="mobile">
    <section class="w-full px-margin-mobile py-space-xl bg-surface-container-low flex flex-col gap-space-md">
      <div class="flex flex-col gap-1 text-center">
        <span class="font-label-sm text-label-sm text-primary uppercase tracking-[0.2em]">PERENNIAL FAVORITES</span>
        <h2 class="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">The Icons Collection</h2>
      </div>
      <div class="flex items-center justify-center gap-1.5 overflow-x-auto pb-1 no-scrollbar" data-filter-group data-filter-target="#iconsGridMobile" data-active-classes="${FILTER_ACTIVE_MOBILE}" data-idle-classes="${FILTER_IDLE_MOBILE}">
        ${filters
          .map(
            (f, i) => `
        <button class="${i === 0 ? FILTER_ACTIVE_MOBILE : FILTER_IDLE_MOBILE}" data-filter="${f.key}">${f.label.toUpperCase()}</button>`
          )
          .join('')}
      </div>
      <div class="grid grid-cols-2 gap-gutter-mobile" id="iconsGridMobile">
        ${iconProducts
          .map(
            (p, i) => `
        <div class="bg-surface-container-lowest flex flex-col group relative shadow-sm" data-filter-key="${filterKeyByIndex[i]}">
          <div class="relative w-full aspect-square bg-surface-container overflow-hidden">
            ${p.img
              ? `<img src="${p.img}" alt="${p.name}" class="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105">`
              : placeholder(p.name)}
            <img src="${p.hoverImg || p.img}" alt="${p.name} — alternate view" loading="lazy"
              class="absolute inset-0 w-full h-full object-cover object-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <button class="wishlist-btn absolute top-2 right-2 w-8 h-8 rounded-full bg-surface/80 backdrop-blur text-on-surface hover:text-primary flex items-center justify-center transition-colors">
              <span class="material-symbols-outlined text-[18px]">favorite</span>
            </button>
          </div>
          <div class="p-space-sm flex flex-col flex-grow justify-between gap-1.5">
            <div>
              <span class="font-label-sm text-[10px] text-tertiary uppercase tracking-wider">${p.category}</span>
              <h3 class="font-headline-sm text-[16px] text-on-surface leading-tight mt-0.5">${p.name}</h3>
            </div>
            <div class="flex items-center justify-between pt-1">
              <span class="font-body-sm text-body-sm font-semibold text-on-surface">${p.priceLabel}</span>
              <button class="bg-on-surface text-surface hover:bg-primary font-label-sm text-[10px] px-2 py-1 uppercase tracking-wider transition-colors" data-add-to-cart="${p.name}" data-price="${p.price}">Acquire</button>
            </div>
          </div>
        </div>`
          )
          .join('')}
      </div>
    </section>
  </div>`;
}
