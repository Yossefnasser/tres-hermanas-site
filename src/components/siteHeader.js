import { brandMark } from './placeholder.js';
import { navLinks } from '../data/sections.js';

/** Fixed header — desktop design + mobile design variants. */
export function siteHeader() {
  return `
  <header class="fixed top-0 left-0 right-0 z-50">
    <!-- ================= DESKTOP (Stitch: flagship homepage) ================= -->
    <div data-variant="desktop" class="bg-surface/95 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.03)]">
      <div class="bg-on-surface text-surface py-space-xs overflow-hidden" data-announcement>
        <div class="marquee-track flex whitespace-nowrap will-change-transform">
          ${Array.from({ length: 6 })
            .map(
              () => `
          <span class="marquee-item font-label-sm text-label-sm uppercase tracking-[0.2em] px-gutter">20% OFF YOUR FIRST ORDER · COMPLIMENTARY WORLDWIDE INSURED COURIER ON ALL 18KT FINE JEWELLERY</span>`
            )
            .join('')}
        </div>
      </div>
      <div class="h-20 w-full px-margin-mobile lg:px-margin flex items-center justify-between">
        <div class="flex items-center gap-space-lg">
          <a class="flex items-center gap-space-sm group" data-path="collections" href="#">
            ${brandMark('h-8 w-8')}
            <div class="flex flex-col">
              <span class="font-headline-sm text-headline-sm tracking-tight text-on-surface leading-none">TRES HERMANAS</span>
            </div>
          </a>
        </div>
        <nav class="hidden lg:flex items-center gap-space-lg" data-active-classes="text-on-surface font-semibold">
          ${navLinks
            .map((l) => {
              const cls = l.active
                ? 'uppercase transition-colors tracking-widest text-on-surface font-semibold'
                : 'font-label-md text-label-md uppercase text-on-surface-variant hover:text-on-surface transition-colors tracking-widest';
              return `<a ${l.active ? 'aria-current="page" ' : ''}class="${cls}" data-path="${l.path}" href="#">${l.label}</a>`;
            })
            .join('')}
        </nav>
        <div class="flex items-center gap-space-md">
          <button aria-label="Search Archive" class="text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer flex items-center" type="button">
            <span class="material-symbols-outlined text-[20px]">search</span>
          </button>
          <a aria-label="Wishlist" class="text-on-surface-variant hover:text-on-surface transition-colors flex items-center" data-path="wishlist" href="#">
            <span class="material-symbols-outlined text-[20px]">favorite</span>
          </a>
          <a aria-label="Shopping Bag" class="text-on-surface-variant hover:text-on-surface transition-colors relative flex items-center" data-path="shopping-bag" data-cart-open href="#">
            <span class="material-symbols-outlined text-[20px]">shopping_bag</span>
            <span class="absolute -top-1.5 -right-2 bg-primary text-on-primary font-label-sm text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold leading-none" data-cart-count>2</span>
          </a>
          <div class="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span class="material-symbols-outlined text-on-primary text-[18px]">person</span>
          </div>
        </div>
      </div>
    </div>

    <!-- ================= MOBILE (Stitch: flagship homepage_mobile) ================= -->
    <div data-variant="mobile" class="bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div class="pt-safe"></div>
      <div class="bg-on-surface text-surface py-1.5 overflow-hidden" data-announcement>
        <div class="marquee-track flex whitespace-nowrap will-change-transform">
          ${Array.from({ length: 6 })
            .map(
              () => `
          <span class="marquee-item font-label-sm text-label-sm uppercase tracking-[0.18em] px-4">20% OFF YOUR FIRST ORDER · COMPLIMENTARY INSURED SHIPPING ON FINE HEIRLOOMS</span>`
            )
            .join('')}
        </div>
      </div>
      <div class="h-16 px-margin-mobile flex items-center justify-between gap-space-sm">
        <div class="flex items-center gap-space-sm">
          <button aria-label="Open Navigation Menu" class="w-11 h-11 flex items-center justify-center text-on-surface hover:text-primary transition-colors" data-menu-toggle>
            <span class="material-symbols-outlined text-[24px]">menu</span>
          </button>
          <a class="flex items-center gap-space-xs" data-path="explore" href="#">
            <div class="flex flex-col">
              <span class="font-headline-sm text-headline-sm tracking-[0.08em] leading-none text-on-surface uppercase">TRES HERMANAS</span>
            </div>
          </a>
        </div>
        <div class="flex items-center gap-1">
          <button aria-label="Search Catalog" class="w-11 h-11 flex items-center justify-center text-on-surface hover:text-primary transition-colors">
            <span class="material-symbols-outlined text-[22px]">search</span>
          </button>
          <a aria-label="Shopping Bag" class="w-11 h-11 flex items-center justify-center text-on-surface hover:text-primary transition-colors relative" data-path="shopping-bag" data-cart-open href="#">
            <span class="material-symbols-outlined text-[22px]">shopping_bag</span>
            <span class="absolute top-2 right-2 w-4 h-4 bg-primary text-on-primary font-label-sm text-label-sm rounded-full flex items-center justify-center" data-cart-count>2</span>
          </a>
        </div>
      </div>
      <!-- Slide-down menu (not specified in the static export; minimal token-consistent drawer) -->
      <nav id="mobileMenu" class="hidden border-t border-outline-variant/40 bg-surface px-margin-mobile py-space-md" data-menu-panel>
        <ul class="flex flex-col">
          ${navLinks
            .map(
              (l) => `
          <li>
            <a class="flex items-center justify-between py-space-sm font-label-md text-label-md uppercase tracking-widest ${l.active ? 'text-on-surface font-semibold' : 'text-on-surface-variant'}" data-path="${l.path}" href="#">
              ${l.label}
              <span class="material-symbols-outlined text-[16px] text-outline">arrow_forward</span>
            </a>
          </li>`
            )
            .join('')}
        </ul>
        <!-- Moved from the header row: wishlist + account -->
        <div class="mt-space-sm border-t border-outline-variant/40 pt-space-sm flex flex-col">
          <a class="flex items-center gap-space-sm py-space-sm font-label-md text-label-md uppercase tracking-widest text-on-surface-variant hover:text-on-surface transition-colors" data-path="saved" href="#">
            <span class="material-symbols-outlined text-[20px] text-outline">favorite</span>
            <span>Wishlist</span>
          </a>
          <a class="flex items-center gap-space-sm py-space-sm font-label-md text-label-md uppercase tracking-widest text-on-surface-variant hover:text-on-surface transition-colors" href="#">
            <span class="material-symbols-outlined text-[20px] text-outline">person</span>
            <span>Account</span>
          </a>
        </div>
      </nav>
    </div>
  </header>`;
}
