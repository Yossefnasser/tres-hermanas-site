/** Mobile fixed bottom navigation (Stitch mobile design only). */
const items = [
  { icon: 'auto_awesome', label: 'Explore', path: 'explore', active: true },
  { icon: 'diamond', label: 'Jewels', path: 'jewels' },
  { icon: 'handyman', label: 'Atelier', path: 'atelier' },
  { icon: 'favorite', label: 'Saved', path: 'saved' },
  { icon: 'apartment', label: 'Salons', path: 'salons' }
];

export function mobileNav() {
  return `
  <nav class="lg:hidden fixed bottom-0 inset-x-0 z-50 pb-safe bg-surface/95 backdrop-blur-xl shadow-[0_-1px_8px_rgba(0,0,0,0.03)]">
    <div class="flex justify-around items-center h-20 px-space-xs">
      ${items
        .map(
          (i) => `
      <a ${
        i.active
          ? 'aria-current="page" class="flex flex-col items-center justify-center gap-1 w-16 h-16 transition-all duration-200 text-primary font-semibold"'
          : 'class="flex flex-col items-center justify-center gap-1 w-16 h-16 text-on-surface-variant hover:text-primary transition-all duration-200"'
      } data-path="${i.path}" href="#">
        <span class="material-symbols-outlined text-[24px]">${i.icon}</span>
        <span class="font-label-sm text-label-sm uppercase tracking-wider">${i.label}</span>
      </a>`
        )
        .join('')}
    </div>
  </nav>`;
}
