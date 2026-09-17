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

/**
 * Header brand mark.
 *
 * ✏️ TO ADD YOUR LOGO: drop the file into /public/imgs (e.g. logo.png)
 * and set LOGO_SRC below. Until it is set, the circular "TH" monogram
 * placeholder is shown instead.
 */
const LOGO_SRC = '/imgs/logo.jpg'; // e.g. '/imgs/logo.png'

export function brandMark(size = 'h-8 w-auto') {
  if (!LOGO_SRC) {
    /* Fallback placeholder (circular TH monogram) until LOGO_SRC is set */
    return `
    <span class="h-8 w-8 rounded-full bg-primary-container flex items-center justify-center shrink-0" title="Tres Hermanas brand mark (placeholder)">
      <span class="font-headline-sm text-[11px] leading-none text-on-primary-container tracking-[0.08em]">TH</span>
    </span>`;
  }
  return `<img src="${LOGO_SRC}" alt="Tres Hermanas logo" class="${size} object-cover rounded-full shrink-0">`;
}

function esc(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
