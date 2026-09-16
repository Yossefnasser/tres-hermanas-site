/**
 * Image placeholder.
 *
 * This demo intentionally ships with ZERO image assets. Every `<img>` from the
 * Stitch export is swapped for this component, which keeps the exact footprint
 * (parent containers define aspect ratio / positioning) and renders a neutral
 * tonal swatch + caption instead of loading any external file.
 *
 * absolute=true  -> absolutely fills its positioned parent (use where the
 *                   original img was `absolute inset-0`)
 * tone           -> background tone token matching the section's surface step
 */
export function placeholder(label, opts = {}) {
  const { absolute = false, tone = 'container' } = opts;

  const tones = {
    container: 'bg-surface-container',
    low: 'bg-surface-container-low',
    lowest: 'bg-surface-container-lowest',
    high: 'bg-surface-container-high',
    highest: 'bg-surface-container-highest'
  };

  const position = absolute ? 'absolute inset-0' : 'w-full h-full';
  const bg = tones[tone] || tones.container;

  return `
  <div class="${position} ${bg} flex items-center justify-center select-none pointer-events-none" title="${esc(label)}">
    <span class="font-label-sm text-label-sm uppercase tracking-[0.2em] text-outline/70 text-center px-space-md line-clamp-2">${esc(label)}</span>
  </div>`;
}

/** Circular brand-mark placeholder (original: circular logo image asset). */
export function brandMark(size = 'w-8 h-8') {
  return `
  <span class="${size} rounded-full bg-primary-container flex items-center justify-center shrink-0" title="Tres Hermanas brand mark (placeholder)">
    <span class="font-headline-sm text-[11px] leading-none text-on-primary-container tracking-[0.08em]">TH</span>
  </span>`;
}

function esc(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
