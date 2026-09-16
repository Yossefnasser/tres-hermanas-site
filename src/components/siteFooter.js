import { footerCollections, footerConcierge } from '../data/sections.js';

/** Footer — desktop 4-column + mobile centered variants. */
export function siteFooter() {
  return `
  <!-- ================= DESKTOP ================= -->
  <div data-variant="desktop">
    <footer class="w-full bg-surface-container-low">
      <div class="w-full px-margin pt-space-2xl pb-space-2xl">
        <div class="grid grid-cols-12 gap-space-xl mb-space-2xl">
          <div class="col-span-4 flex flex-col justify-between">
            <div class="space-y-space-md">
              <div class="flex items-center gap-space-xs">
                <span class="font-headline-md text-headline-md text-on-surface tracking-tight">TRES HERMANAS</span>
              </div>
              <p class="font-headline-sm text-headline-sm italic text-tertiary">Heirloom craftsmanship born of Madrid &amp; sun-drenched Mediterranean shores.</p>
              <p class="font-body-sm text-body-sm text-on-surface-variant leading-relaxed max-w-sm">Handcrafted with certified ethical gemstones, fairmined 18-karat solid gold, and ancestral lapidary artistry passed through generations of master goldsmiths.</p>
            </div>
            <div class="pt-space-lg">
              <a class="inline-flex items-center gap-space-xs font-label-md text-label-md uppercase tracking-widest text-primary hover:text-on-primary-fixed-variant transition-colors" href="https://instagram.com/treshermanasjewellery" rel="noreferrer" target="_blank">
                <span class="material-symbols-outlined text-[16px]">photo_camera</span>
                <span>@treshermanasjewellery · Private Salon</span>
              </a>
            </div>
          </div>
          <div class="col-span-2 space-y-space-md">
            <h4 class="font-label-sm text-label-sm uppercase tracking-[0.2em] text-on-surface">Collections</h4>
            <ul class="space-y-space-sm font-body-sm text-body-sm">
              ${footerCollections
                .map(
                  (l) => `
              <li><a class="text-on-surface-variant hover:text-on-surface transition-colors" data-path="collections" href="#">${l}</a></li>`
                )
                .join('')}
            </ul>
          </div>
          <div class="col-span-2 space-y-space-md">
            <h4 class="font-label-sm text-label-sm uppercase tracking-[0.2em] text-on-surface">Client Concierge</h4>
            <ul class="space-y-space-sm font-body-sm text-body-sm">
              ${footerConcierge
                .map(
                  (l) => `
              <li><a class="text-on-surface-variant hover:text-on-surface transition-colors" data-path="client-services" href="#">${l}</a></li>`
                )
                .join('')}
            </ul>
          </div>
          <div class="col-span-4 space-y-space-md">
            <h4 class="font-label-sm text-label-sm uppercase tracking-[0.2em] text-on-surface">Private Atelier Gazettes</h4>
            <p class="font-body-sm text-body-sm text-on-surface-variant">Receive invitations to private salon viewings, limited gemstone acquisitions, and bespoke releases.</p>
            <form class="flex flex-col sm:flex-row items-stretch gap-space-xs pt-space-xs" data-newsletter>
              <input class="flex-1 bg-surface-container-lowest px-space-md py-space-sm font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:bg-surface border-0" placeholder="Enter your correspondence email" type="email">
              <button class="bg-on-surface text-surface hover:bg-primary hover:text-on-primary px-space-lg py-space-sm font-label-md text-label-md uppercase tracking-widest transition-colors" type="submit">Subscribe</button>
            </form>
            <p class="font-label-sm text-label-sm text-outline">Confidentiality assured. Unsubscribe at your discretion.</p>
          </div>
        </div>
        <div class="pt-space-lg flex items-center justify-between gap-space-md text-outline font-label-sm text-label-sm">
          <p>© 2025 TRES HERMANAS HAUTE JOAILLERIE S.L. MADRID. ALL RIGHTS RESERVED.</p>
          <div class="flex items-center gap-space-lg">
            <a class="text-outline hover:text-on-surface transition-colors uppercase tracking-wider" data-path="legal-mentions" href="#">Legal Notice</a>
            <a class="text-outline hover:text-on-surface transition-colors uppercase tracking-wider" data-path="privacy-charter" href="#">Privacy Charter</a>
            <a class="text-outline hover:text-on-surface transition-colors uppercase tracking-wider" data-path="hallmark-standards" href="#">Hallmarks &amp; Sourcing</a>
          </div>
        </div>
      </div>
    </footer>
  </div>

  <!-- ================= MOBILE ================= -->
  <div data-variant="mobile">
    <footer class="mt-space-2xl bg-surface-container-low px-margin-mobile pt-space-xl pb-space-2xl">
      <div class="flex flex-col items-center text-center">
        <span class="font-label-sm text-label-sm text-primary uppercase tracking-[0.2em] mb-space-xs">HAUTE JOAILLERIE SALON</span>
        <h2 class="font-headline-md text-headline-md text-on-surface mb-space-sm">Tres Hermanas</h2>
        <p class="font-body-sm text-body-sm text-on-surface-variant max-w-xs mb-space-lg leading-relaxed">Handcrafted high jewelry balancing ancestral Mediterranean goldsmithing with rare untreated gemstones and certified 18KT Fairmined ethical gold.</p>
        <div class="w-full max-w-sm mb-space-xl">
          <p class="font-label-md text-label-md text-tertiary uppercase tracking-widest mb-space-xs text-left">PRIVATE SALON DISPATCH</p>
          <div class="flex items-center gap-space-xs">
            <input class="flex-1 bg-surface-container-lowest text-on-surface font-body-sm text-body-sm px-space-md py-3 focus:outline-none focus:ring-1 focus:ring-primary placeholder:text-outline/70" placeholder="Enter your correspondence email" type="email">
            <button class="bg-on-surface text-surface font-label-md text-label-md uppercase tracking-wider px-space-md py-3 hover:bg-primary transition-colors" type="button" data-newsletter-mobile>JOIN</button>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-space-md w-full max-w-sm mb-space-xl py-space-md">
          <div class="flex flex-col items-center p-space-sm bg-surface">
            <span class="material-symbols-outlined text-primary text-[24px] mb-1">verified</span>
            <span class="font-label-sm text-label-sm text-on-surface uppercase tracking-wider">18KT FAIRMINED</span>
            <span class="font-body-sm text-body-sm text-outline">Ethical Gold Certified</span>
          </div>
          <div class="flex flex-col items-center p-space-sm bg-surface">
            <span class="material-symbols-outlined text-primary text-[24px] mb-1">diamond</span>
            <span class="font-label-sm text-label-sm text-on-surface uppercase tracking-wider">RARE GEMSTONES</span>
            <span class="font-body-sm text-body-sm text-outline">Sustainably Sourced</span>
          </div>
        </div>
        <div class="flex flex-wrap justify-center gap-space-lg text-tertiary font-label-sm text-label-sm tracking-[0.14em] uppercase mb-space-lg">
          <span class="flex items-center gap-1">
            <span class="material-symbols-outlined text-[14px] text-primary">location_on</span> MADRID ATELIER
          </span>
          <span class="flex items-center gap-1">
            <span class="material-symbols-outlined text-[14px] text-primary">location_on</span> CAIRO SALON
          </span>
          <span class="flex items-center gap-1">
            <span class="material-symbols-outlined text-[14px] text-primary">location_on</span> ATHENS WORKSHOP
          </span>
        </div>
        <div class="flex flex-wrap justify-center gap-space-md font-label-sm text-label-sm tracking-wider text-outline mb-space-md">
          <a class="hover:text-primary transition-colors" data-path="certificates" href="#">AUTHENTICITY CERTIFICATES</a>
          <span class="opacity-40">•</span>
          <a class="hover:text-primary transition-colors" data-path="bespoke" href="#">BESPOKE COMMISSIONS</a>
          <span class="opacity-40">•</span>
          <a class="hover:text-primary transition-colors" data-path="care" href="#">CARE GUIDE</a>
          <span class="opacity-40">•</span>
          <a class="hover:text-primary transition-colors" data-path="privacy" href="#">LEGAL PRIVACY</a>
        </div>
        <span class="font-body-sm text-body-sm text-outline/80">© 2025 Tres Hermanas Haute Joaillerie. All rights reserved.</span>
      </div>
    </footer>
  </div>`;
}
