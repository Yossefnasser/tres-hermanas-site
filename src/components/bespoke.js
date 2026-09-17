import { placeholder } from './placeholder.js';
import { bespokeSteps } from '../data/sections.js';

/** Section 6 — Curate Your Personal Amulet (bespoke atelier). */
export function bespoke() {
  return `
  <!-- ================= DESKTOP ================= -->
  <div data-variant="desktop">
    <section class="w-full bg-surface-container py-space-2xl">
      <div class="w-full px-margin">
        <div class="bg-surface p-space-xl lg:p-space-2xl shadow-sm">
          <div class="grid grid-cols-2 gap-space-xl items-center">
            <div class="space-y-space-md">
              <div class="space-y-space-xs">
                <span class="font-label-sm text-label-sm uppercase tracking-[0.25em] text-primary">Private Commissions</span>
                <h2 class="font-headline-lg text-headline-lg text-on-surface">Curate Your Personal Amulet</h2>
              </div>
              <p class="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Design a bespoke talisman tailored to your milestones. Select your custom hand-braided cord or solid 18KT chain, followed by individual clip-on pendants: diamond pavé sabers, radiant sun medallions, bezel emeralds, and protective evil eyes.
              </p>
              <div class="space-y-space-sm pt-space-xs">
                ${bespokeSteps.desktop
                  .map(
                    (s) => `
                <div class="flex items-start gap-space-md p-space-sm bg-surface-container-low">
                  <span class="font-headline-sm text-headline-sm text-primary">${s.n}</span>
                  <div>
                    <h4 class="font-label-md text-label-md uppercase tracking-wider text-on-surface">${s.title}</h4>
                    <p class="font-body-sm text-body-sm text-on-surface-variant">${s.desc}</p>
                  </div>
                </div>`
                  )
                  .join('')}
              </div>
              <div class="pt-space-md">
                <button class="px-space-xl py-space-md bg-primary text-on-primary hover:bg-on-surface transition-colors font-label-md text-label-md uppercase tracking-[0.18em]" data-open-consultation>
                  Begin Bespoke Consultation
                </button>
              </div>
            </div>
            <div class="relative group overflow-hidden bg-surface-container-lowest shadow-md">
              <div class="aspect-[4/5] overflow-hidden">
              <img
              src="/imgs/7.jpg"
              alt="Emerald Cord Choker & Amulet on sunlit collarbone"
              class="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              >
                ${placeholder('Curated assortment of 18KT gold charms with diamonds and emeralds', { tone: 'low' })}
              </div>
              <div class="absolute bottom-0 inset-x-0 bg-surface/90 backdrop-blur-md p-space-md flex items-center justify-between">
                <div>
                  <span class="font-label-sm text-label-sm uppercase tracking-widest text-primary">Atelier Sample Vitrine</span>
                  <p class="font-headline-sm text-headline-sm text-on-surface">The Celestial &amp; Sea Collection</p>
                </div>
                <span class="font-label-sm text-label-sm text-outline uppercase tracking-wider">From E£450 / Charm</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <!-- ================= MOBILE ================= -->
  <div data-variant="mobile">
    <section class="w-full px-margin-mobile py-space-xl bg-surface-container-low flex flex-col gap-space-md">
      <div class="flex flex-col text-center gap-1">
        <span class="font-label-sm text-label-sm text-primary uppercase tracking-[0.2em]">BESPOKE ATELIER</span>
        <h2 class="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">Curate Your Personal Amulet</h2>
        <p class="font-body-sm text-body-sm text-on-surface-variant">
          Sculpted around your birthstones, milestones, and personal talismanic symbols.
        </p>
      </div>
      <div class="relative w-full aspect-[4/3] bg-surface-container overflow-hidden shadow-sm">
      <img
              src="/imgs/7.jpg"
              alt="Emerald Cord Choker & Amulet on sunlit collarbone"
              class="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              >
        ${placeholder('Artisanal gem collets and talisman components laid on jeweler bench')}
        <div class="absolute top-2 left-2 bg-on-surface/90 backdrop-blur px-2.5 py-1 text-surface font-label-sm text-[10px] uppercase tracking-wider">
          The Goldsmith's Bench
        </div>
      </div>
      <div class="flex flex-col gap-space-sm">
        ${bespokeSteps.mobile
          .map(
            (s) => `
        <div class="p-space-md bg-surface-container-lowest flex gap-space-sm items-start shadow-sm">
          <span class="font-headline-sm text-headline-sm text-primary font-bold leading-none">${s.n}</span>
          <div class="flex flex-col">
            <h3 class="font-headline-sm text-[17px] text-on-surface">${s.title}</h3>
            <p class="font-body-sm text-body-sm text-on-surface-variant mt-0.5">${s.desc}</p>
          </div>
        </div>`
          )
          .join('')}
      </div>
      <button class="w-full py-3.5 px-space-md bg-primary text-on-primary font-label-md text-label-md uppercase tracking-[0.16em] hover:bg-on-surface transition-colors flex items-center justify-center gap-2 mt-1" data-open-consultation>
        <span class="material-symbols-outlined text-[18px]">handyman</span>
        <span>BEGIN BESPOKE CONSULTATION</span>
      </button>
    </section>
  </div>`;
}
