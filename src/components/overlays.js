import { commissionOptions } from '../data/sections.js';

/** Bespoke consultation modal + "Acquisition Added" cart toast. */
export function overlays() {
  return `
  <!-- ================= CONSULTATION MODAL ================= -->
  <div class="fixed inset-0 z-50 bg-on-surface/50 backdrop-blur-sm hidden items-center justify-center p-margin-mobile" id="consultationModal">
    <div class="bg-surface max-w-lg w-full p-space-xl shadow-xl relative space-y-space-md">
      <button class="absolute top-4 right-4 text-on-surface-variant hover:text-on-surface" data-close-consultation>
        <span class="material-symbols-outlined">close</span>
      </button>
      <div class="space-y-space-xs">
        <span class="font-label-sm text-label-sm uppercase tracking-widest text-primary">Private Appointment</span>
        <h3 class="font-headline-md text-headline-md text-on-surface">Begin Your Bespoke Journey</h3>
        <p class="font-body-sm text-body-sm text-on-surface-variant">
          Connect directly with Marian Samuel Emil to customize your 18KT gold amulet, source rare Colombian emeralds, or design a custom heirloom.
        </p>
      </div>
      <form class="space-y-space-sm" id="consultationForm">
        <div>
          <label class="block font-label-sm text-label-sm uppercase tracking-wider text-on-surface mb-1">Your Full Name</label>
          <input class="w-full bg-surface-container-low px-space-md py-space-sm font-body-sm text-body-sm text-on-surface border-0 focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Elena Rodriguez" required="" type="text">
        </div>
        <div>
          <label class="block font-label-sm text-label-sm uppercase tracking-wider text-on-surface mb-1">Contact Email / WhatsApp</label>
          <input class="w-full bg-surface-container-low px-space-md py-space-sm font-body-sm text-body-sm text-on-surface border-0 focus:outline-none focus:ring-1 focus:ring-primary" placeholder="elena@luxury.com or +34 600..." required="" type="text">
        </div>
        <div>
          <label class="block font-label-sm text-label-sm uppercase tracking-wider text-on-surface mb-1">Commission Interest</label>
          <select class="w-full bg-surface-container-low px-space-md py-space-sm font-body-sm text-body-sm text-on-surface border-0 focus:outline-none focus:ring-1 focus:ring-primary">
            ${commissionOptions.map((o) => `<option>${o}</option>`).join('')}
          </select>
        </div>
        <div>
          <label class="block font-label-sm text-label-sm uppercase tracking-wider text-on-surface mb-1">Notes or Preferred Gemstones</label>
          <textarea class="w-full bg-surface-container-low px-space-md py-space-sm font-body-sm text-body-sm text-on-surface border-0 focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Tell us about the piece you envision..." rows="3"></textarea>
        </div>
        <button class="w-full py-space-md bg-on-surface text-surface hover:bg-primary font-label-md text-label-md uppercase tracking-widest transition-colors mt-space-sm" type="submit">
          Request Confidential Salon Viewing
        </button>
      </form>
    </div>
  </div>

  <!-- ================= CART TOAST ================= -->
  <div class="fixed bottom-24 lg:bottom-6 right-4 lg:right-6 z-50 bg-on-surface text-surface p-space-md shadow-xl translate-y-24 opacity-0 transition-all duration-300 flex items-center gap-space-md max-w-sm" id="cartToast">
    <div class="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary shrink-0">
      <span class="material-symbols-outlined text-[18px]">check</span>
    </div>
    <div class="flex-1">
      <p class="font-label-sm text-label-sm uppercase tracking-wider text-primary-fixed">Acquisition Added</p>
      <p class="font-body-sm text-body-sm line-clamp-1 font-serif" id="cartToastItem"></p>
    </div>
    <a class="font-label-sm text-label-sm uppercase tracking-widest underline hover:text-primary-fixed" data-path="shopping-bag" href="#">
      View Bag
    </a>
  </div>`;
}
