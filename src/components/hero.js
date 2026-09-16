import { placeholder } from './placeholder.js';

/** Hero — desktop split editorial layout + mobile stacked editorial layout. */
export function hero() {
  return `
  <!-- ================= DESKTOP HERO ================= -->
  <div data-variant="desktop">
    <section class="relative w-full bg-surface pb-space-2xl">
      <div class="w-full px-margin">
        <div class="grid grid-cols-12 gap-space-xl items-center pt-space-xl">
          <div class="col-span-5 flex flex-col justify-center space-y-space-lg">
            <div class="space-y-space-xs">
              <span class="inline-block px-space-sm py-1 bg-surface-container text-on-surface-variant font-label-sm text-label-sm uppercase tracking-[0.25em]">
                Haute Joaillerie · Madrid &amp; Mediterranean
              </span>
              <p class="font-label-md text-label-md uppercase tracking-[0.2em] text-primary pt-space-xs">Everyday 18KT Gold Fine Jewellery</p>
            </div>
            <h1 class="font-display-lg text-display-lg text-on-surface leading-[1.1] tracking-tight">
              Handmade for the <span class="italic font-headline-lg font-light text-primary">bold &amp; beautiful</span>
            </h1>
            <p class="font-body-lg text-body-lg text-on-surface-variant max-w-lg leading-relaxed">
              Ethically sourced Colombian emeralds, radiant natural diamonds, and talismanic charms sculpted in timeless solid 18K gold. Crafted for sun-drenched days and whispered evenings.
            </p>
            <div class="flex items-center gap-space-md pt-space-sm">
              <a class="inline-flex items-center justify-center px-space-xl py-space-md bg-on-surface text-surface hover:bg-primary transition-colors font-label-md text-label-md uppercase tracking-[0.18em] text-center shadow-sm" href="#collections">
                Explore The Collection
              </a>
              <a class="inline-flex items-center justify-start gap-space-xs font-label-md text-label-md uppercase tracking-[0.18em] text-on-surface hover:text-primary transition-colors py-space-sm group" href="#ethos">
                <span>Discover The Story</span>
                <span class="material-symbols-outlined text-[16px] transition-transform group-hover:translate-x-1">arrow_forward</span>
              </a>
            </div>
            <div class="pt-space-md grid grid-cols-3 gap-space-sm text-left bg-surface-container-low p-space-md">
              <div>
                <p class="font-headline-sm text-headline-sm text-on-surface">18KT</p>
                <p class="font-label-sm text-label-sm text-outline uppercase tracking-wider">Solid Gold Only</p>
              </div>
              <div>
                <p class="font-headline-sm text-headline-sm text-on-surface">Muzo</p>
                <p class="font-label-sm text-label-sm text-outline uppercase tracking-wider">Certified Emeralds</p>
              </div>
              <div>
                <p class="font-headline-sm text-headline-sm text-on-surface">100%</p>
                <p class="font-label-sm text-label-sm text-outline uppercase tracking-wider">Handmade Atelier</p>
              </div>
            </div>
          </div>
          <div class="col-span-7 grid grid-cols-12 gap-space-sm">
            <div class="col-span-7 relative group overflow-hidden bg-surface-container shadow-md">
              <div class="aspect-[3/4] overflow-hidden">
              <img
              src="/imgs/1.jpg"
              alt="Emerald Cord Choker & Amulet on sunlit collarbone"
              class="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              >
                ${placeholder('Layered 18kt gold emerald necklace on crisp cotton blouse')}
              </div>
              <div class="absolute bottom-0 inset-x-0 bg-gradient-to-t from-on-surface/80 via-on-surface/30 to-transparent p-space-md text-surface">
                <span class="font-label-sm text-label-sm uppercase tracking-widest text-primary-fixed">The Sovereign Stack</span>
                <p class="font-headline-sm text-headline-sm italic">Triple Emerald Colombian Cascades</p>
              </div>
            </div>
            <div class="col-span-5 flex flex-col gap-space-sm">
              <div class="relative group overflow-hidden bg-surface-container shadow-sm aspect-[4/5]">
              <img
              src="/imgs/2.jpg"
              alt="Emerald Cord Choker & Amulet on sunlit collarbone"
              class="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              >  
              ${placeholder('Multi-gem talismanic pendant on leather cord')}
                <div class="absolute top-space-xs right-space-xs bg-surface/90 backdrop-blur-sm px-space-xs py-1 text-on-surface font-label-sm text-label-sm uppercase tracking-wider">
                  Signature Charm
                </div>
              </div>
              <div class="bg-surface-container p-space-lg flex flex-col justify-center gap-space-md flex-1">
                <div>
                  <span class="font-label-md text-label-md text-primary uppercase tracking-[0.2em]">Designed By</span>
                  <p class="font-headline-md text-headline-md text-on-surface pt-1">Marian Samuel Emil</p>
                </div>
                <p class="font-headline-sm text-headline-sm italic text-on-surface-variant leading-snug">
                  “Pieces designed to wake with you, bathe in the sea, and dance through midnight.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <!-- ================= MOBILE HERO ================= -->
  <div data-variant="mobile">
    <section class="w-full px-margin-mobile pt-space-md pb-space-xl flex flex-col gap-space-md">
      <div class="flex flex-col gap-space-xs">
        <div class="flex flex-wrap items-center gap-1.5 text-primary">
          <span class="font-label-sm text-label-sm uppercase tracking-[0.16em]">HAUTE JOAILLERIE · MARIAN SAMUEL EMIL</span>
          <span class="text-outline/40 text-[10px]">•</span>
          <span class="font-label-sm text-label-sm uppercase tracking-[0.14em] text-tertiary">EVERYDAY 18KT GOLD FINE JEWELLERY</span>
        </div>
        <h1 class="font-display-lg-mobile text-display-lg-mobile text-on-surface leading-tight mt-1">
          Handmade for the <span class="italic font-display-lg-mobile text-primary font-normal">Bold &amp; Beautiful</span>
        </h1>
        <p class="font-body-md text-body-md text-on-surface-variant mt-1 leading-relaxed">
          Ethically sourced Colombian emeralds, radiant natural diamonds, and talismanic charms sculpted in timeless solid 18K gold. Crafted for sun-drenched days and whispered evenings.
        </p>
      </div>
      <div class="flex flex-col sm:flex-row gap-space-xs pt-1">
        <button class="w-full py-3.5 px-space-md bg-on-surface text-surface font-label-md text-label-md uppercase tracking-[0.14em] hover:bg-primary transition-colors flex items-center justify-center gap-2" data-scroll-to="#collections">
          <span>EXPLORE THE COLLECTION</span>
          <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
        </button>
        <button class="w-full py-3.5 px-space-md bg-surface-container-high text-on-surface font-label-md text-label-md uppercase tracking-[0.14em] hover:bg-surface-container-highest transition-colors flex items-center justify-center gap-1" data-scroll-to="#ethos">
          <span>DISCOVER THE STORY</span>
        </button>
      </div>
      <div class="grid grid-cols-3 gap-1 py-2 bg-surface-container-low px-2 mt-1">
        <div class="flex flex-col items-center text-center p-1">
          <span class="font-label-sm text-label-sm text-primary uppercase font-bold tracking-widest">18KT GOLD</span>
          <span class="font-label-sm text-[9px] text-tertiary uppercase leading-tight mt-0.5">SOLID ONLY</span>
        </div>
        <div class="flex flex-col items-center text-center p-1 bg-surface-container">
          <span class="font-label-sm text-label-sm text-primary uppercase font-bold tracking-widest">MUZO CERTIFIED</span>
          <span class="font-label-sm text-[9px] text-tertiary uppercase leading-tight mt-0.5">COLOMBIAN</span>
        </div>
        <div class="flex flex-col items-center text-center p-1">
          <span class="font-label-sm text-label-sm text-primary uppercase font-bold tracking-widest">100% BENCH</span>
          <span class="font-label-sm text-[9px] text-tertiary uppercase leading-tight mt-0.5">HAND ATELIER</span>
        </div>
      </div>
      <div class="flex flex-col gap-space-md mt-2">
        <div class="relative w-full overflow-hidden bg-surface-container-low shadow-sm">
          <div class="w-full aspect-[4/5] overflow-hidden bg-surface-container">
              <img
              src="/imgs/1.jpg"
              alt="Emerald Cord Choker & Amulet on sunlit collarbone"
              class="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              >
          </div>
          <div class="p-space-md bg-surface-container-low flex items-center justify-between">
            <div class="flex flex-col">
              <span class="font-label-sm text-label-sm text-primary uppercase tracking-widest">PIÈCE UNIQUE</span>
              <span class="font-headline-sm text-headline-sm text-on-surface mt-0.5">Triple Emerald Colombian Cascade</span>
            </div>
            <span class="font-label-md text-label-md text-tertiary uppercase">Madrid Salon</span>
          </div>
        </div>
        <div class="relative w-full bg-surface-container-high p-space-md flex flex-col gap-space-sm shadow-sm">
          <div class="w-full aspect-[4/5] overflow-hidden bg-surface">
            <img
              src="/imgs/2.jpg"
              alt="Emerald Cord Choker & Amulet on sunlit collarbone"
              class="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              >
          </div>
          <div class="flex flex-col gap-1.5 pt-1">
            <span class="font-label-sm text-label-sm text-primary uppercase tracking-[0.16em]">THE ATELIER PHILOSOPHY</span>
            <p class="font-headline-sm text-headline-sm italic text-on-surface leading-snug">
              “Pieces designed to wake with you, bathe in the sea, and dance through midnight.”
            </p>
            <span class="font-label-sm text-label-sm text-tertiary uppercase tracking-wider mt-1">
              — Marian Samuel Emil, Founder &amp; Head Goldsmith
            </span>
          </div>
        </div>
      </div>
    </section>
  </div>`;
}
