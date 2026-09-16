import { placeholder } from './placeholder.js';

/** Section 5 — Editorial storytelling "Out & About". */
export function editorial() {
  return `
  <!-- ================= DESKTOP ================= -->
  <div data-variant="desktop">
    <section class="w-full bg-surface py-space-2xl overflow-hidden" id="ethos">
      <div class="w-full px-margin">
        <div class="grid grid-cols-2 gap-space-xl items-center">
          <div class="relative shadow-md">
            <div class="aspect-[4/5] overflow-hidden bg-surface-container">
            <img
              src="/imgs/8.jpg"
              alt="Emerald Cord Choker & Amulet on sunlit collarbone"
              class="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              >
              ${placeholder('Mediterranean out and about lifestyle with gold layered jewellery')}
            </div>
            <div class="absolute -bottom-6 -right-6 w-48 h-48 bg-primary-fixed/60 p-space-md shadow-md">
              <div class="w-full h-full flex flex-col justify-center text-center">
                <span class="font-label-sm text-label-sm uppercase tracking-widest text-on-primary-fixed">Mediterranean</span>
                <span class="font-headline-sm text-headline-sm text-on-primary-fixed font-serif">RESORT ELEGANCE</span>
              </div>
            </div>
          </div>
          <div class="space-y-space-lg">
            <div class="space-y-space-xs">
              <span class="font-label-sm text-label-sm uppercase tracking-[0.25em] text-primary">Lifestyle Narrative</span>
              <h2 class="font-display-lg text-display-lg text-on-surface leading-[1.1]">OUT &amp; ABOUT</h2>
              <p class="font-headline-sm text-headline-sm italic text-tertiary">Jewelry made for wherever the day takes you.</p>
            </div>
            <p class="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              From relaxed terrace breakfasts under coastal pine groves to golden hour cocktails in Madrid, Tres Hermanas designs are created to be lived in. We believe fine jewellery gains soul when it gathers stories—sunscreen, ocean spray, and late-night laughter included.
            </p>
            <blockquote class="bg-surface-container p-space-lg space-y-space-xs">
              <p class="font-headline-sm text-headline-sm italic text-on-surface">
                “Jewellery shouldn’t stay locked away in a safe waiting for an occasion. True luxury is living in your pieces every single day.”
              </p>
              <cite class="block font-label-md text-label-md uppercase tracking-wider text-primary not-italic">
                — Marian Samuel Emil, Founder &amp; Designer
              </cite>
            </blockquote>
            <div class="pt-space-xs flex items-center gap-space-lg">
              <div>
                <p class="font-headline-sm text-headline-sm text-on-surface">18.1K</p>
                <p class="font-label-sm text-label-sm text-outline uppercase tracking-wider">Passionate Collectors</p>
              </div>
              <div class="w-[1px] h-8 bg-outline-variant"></div>
              <div>
                <p class="font-headline-sm text-headline-sm text-on-surface">Madrid &amp; Cairo</p>
                <p class="font-label-sm text-label-sm text-outline uppercase tracking-wider">Private Atelier Salons</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <!-- ================= MOBILE ================= -->
  <div data-variant="mobile">
    <section class="w-full px-margin-mobile py-space-xl flex flex-col gap-space-md">
      <div class="relative w-full aspect-[4/5] bg-surface-container overflow-hidden shadow-sm">
      <img
              src="/imgs/8.jpg"
              alt="Emerald Cord Choker & Amulet on sunlit collarbone"
              class="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              >
        ${placeholder('Lady with woven clutch and layered gold cuffs out and about')}
        <div class="absolute bottom-0 inset-x-0 p-space-md bg-gradient-to-t from-surface via-surface/80 to-transparent flex flex-col">
          <span class="font-label-sm text-label-sm text-primary uppercase tracking-[0.2em]">LIFESTYLE ARCHIVE</span>
          <h2 class="font-headline-md text-headline-md text-on-surface mt-1">Out &amp; About</h2>
          <span class="font-body-sm text-body-sm text-on-surface-variant">Jewelry made for wherever the day takes you.</span>
        </div>
      </div>
      <div class="p-space-md bg-surface-container-high flex flex-col gap-space-sm">
        <span class="material-symbols-outlined text-primary text-[28px]">format_quote</span>
        <p class="font-headline-sm text-headline-sm italic text-on-surface leading-snug">
          “Jewellery shouldn’t stay locked away in a safe waiting for an occasion. True luxury is living in your pieces every single day.”
        </p>
        <span class="font-label-sm text-label-sm text-tertiary uppercase tracking-wider">
          — Marian Samuel Emil, Founder &amp; Designer
        </span>
        <div class="grid grid-cols-2 gap-2 pt-space-sm border-t border-outline-variant/30 mt-1">
          <div class="flex flex-col">
            <span class="font-headline-sm text-headline-sm text-primary font-bold">18.1K</span>
            <span class="font-label-sm text-[10px] text-tertiary uppercase tracking-wider">Passionate Collectors</span>
          </div>
          <div class="flex flex-col">
            <span class="font-headline-sm text-headline-sm text-primary font-bold">Madrid &amp; Cairo</span>
            <span class="font-label-sm text-[10px] text-tertiary uppercase tracking-wider">Private Atelier Salons</span>
          </div>
        </div>
      </div>
    </section>
  </div>`;
}
