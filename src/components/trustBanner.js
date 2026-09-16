import { trustDesktop, trustMobile } from '../data/sections.js';

/** Section 8 — Client concierge & guarantees banner. */
export function trustBanner() {
  return `
  <!-- ================= DESKTOP ================= -->
  <div data-variant="desktop">
    <section class="w-full bg-surface-container-high py-space-xl">
      <div class="w-full px-margin">
        <div class="grid grid-cols-4 gap-gutter text-left">
          ${trustDesktop
            .map(
              (t) => `
          <div class="flex items-center gap-space-md p-space-sm">
            <span class="material-symbols-outlined text-primary text-[28px]">${t.icon}</span>
            <div>
              <h5 class="font-label-md text-label-md uppercase tracking-wider text-on-surface">${t.title}</h5>
              <p class="font-body-sm text-body-sm text-on-surface-variant">${t.desc}</p>
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
    <section class="w-full px-margin-mobile py-space-lg bg-surface-container-highest flex flex-col gap-space-md">
      <div class="grid grid-cols-2 gap-space-sm">
        ${trustMobile
          .map(
            (t) => `
        <div class="p-space-sm bg-surface flex flex-col items-center text-center gap-1 shadow-sm">
          <span class="material-symbols-outlined text-primary text-[24px]">${t.icon}</span>
          <span class="font-label-sm text-[11px] text-on-surface uppercase font-bold tracking-wider">${t.title}</span>
          <span class="font-body-sm text-[11px] text-tertiary leading-tight">${t.desc}</span>
        </div>`
          )
          .join('')}
      </div>
    </section>
  </div>`;
}
