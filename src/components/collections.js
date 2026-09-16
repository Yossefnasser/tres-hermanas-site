import { placeholder } from './placeholder.js';
import { vitrines } from '../data/sections.js';

/** Section 3 — Curated Universes (archival vitrines). */
export function collections() {
  return `
  <!-- ================= DESKTOP ================= -->
  <div data-variant="desktop">
    <section class="w-full bg-surface py-space-xl" id="collections">
      <div class="w-full px-margin space-y-space-xl">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-space-sm pb-space-sm">
          <div>
            <span class="font-label-sm text-label-sm uppercase tracking-[0.25em] text-primary">Curated Vitrines</span>
            <h2 class="font-headline-lg text-headline-lg text-on-surface">Explore By Universe</h2>
          </div>
          <p class="font-body-sm text-body-sm text-on-surface-variant max-w-sm">Select an archival curation curated by creative director Marian Samuel Emil.</p>
        </div>
        <!-- 4-collection bento matrix -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-gutter">
          ${vitrines
            .map(
              (v) => `
          <div class="lg:col-span-6 relative group overflow-hidden bg-surface-container shadow-sm flex flex-col justify-end aspect-[4/3] p-space-lg">
            ${v.img
              ? `<img src="${v.img}" alt="${v.title}" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">`
              : placeholder(v.title, { tone: 'low', absolute: true })}
            <div class="absolute inset-0 bg-gradient-to-t from-on-surface/90 via-on-surface/40 to-transparent"></div>
            <div class="relative z-10 space-y-space-xs text-surface">
              <span class="font-label-sm text-label-sm uppercase tracking-widest text-primary-fixed">${v.label}</span>
              <h3 class="font-headline-md text-headline-md leading-tight">${v.title}</h3>
              <p class="font-body-sm text-body-sm text-surface-container-high line-clamp-2">${v.desc}</p>
              <div class="pt-space-sm">
                <span class="inline-flex items-center gap-space-xs font-label-md text-label-md uppercase tracking-[0.16em] text-surface group-hover:text-primary-fixed transition-colors">
                  <span>${v.cta}</span>
                  <span class="material-symbols-outlined text-[14px]">arrow_forward</span>
                </span>
              </div>
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
    <section class="w-full px-margin-mobile py-space-xl flex flex-col gap-space-md">
      <div class="flex flex-col items-center text-center gap-1">
        <span class="font-label-sm text-label-sm text-primary uppercase tracking-[0.2em]">CURATED VITRINES</span>
        <h2 class="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">Explore By Universe</h2>
        <div class="w-12 h-0.5 bg-primary-container mt-1"></div>
      </div>
      <div class="flex flex-col gap-space-md mt-1">
        ${vitrines
          .map(
            (v) => `
        <div class="relative w-full overflow-hidden bg-surface-container group">
          <div class="w-full aspect-[16/9] overflow-hidden">
            ${v.img
              ? `<img src="${v.img}" alt="${v.title}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">`
              : placeholder(v.title, { tone: 'low' })}
          </div>
          <div class="p-space-md bg-surface-container-high flex items-center justify-between">
            <div class="flex flex-col">
              <span class="font-label-sm text-label-sm text-tertiary uppercase tracking-wider">${v.label.toUpperCase()}</span>
              <h3 class="font-headline-sm text-headline-sm text-on-surface">${v.title}</h3>
            </div>
            <span class="w-10 h-10 bg-on-surface text-surface flex items-center justify-center shrink-0">
              <span class="material-symbols-outlined text-[20px]">arrow_forward</span>
            </span>
          </div>
        </div>`
          )
          .join('')}
      </div>
    </section>
  </div>`;
}
