/**
 * Hero — full-bleed looping video (desktop + mobile variants, switched by
 * data-variant wrappers at the 1024px breakpoint — see styles.css).
 *
 * ✏️ TO ADD YOUR VIDEO:
 *   1. Drop the file into /public  (e.g. /public/videos/hero.mp4)
 *   2. Set `src` (and optionally `poster`) in HERO_VIDEO below —
 *      leave `srcMobile` empty to reuse `src` on mobile too.
 *
 * Until a src is set, the section renders a dark tonal plate under the
 * gradient + copy, so the page still looks intentional in the meantime.
 */

const HERO_VIDEO = {
  src: '/videos/1.mp4',
  srcMobile: '/videos/2.mp4',
  poster: '',
  posterMobile: ''
};

/* ------------------------------------------------------------------ */
/* Overlaid copy (eyebrow / headline / sub / CTAs)                     */
/* ------------------------------------------------------------------ */
function heroCopy() {
  return `
  <div class="w-full max-w-2xl flex flex-col gap-space-sm lg:gap-space-md text-surface">
    <h1 class="font-display-lg-mobile text-display-lg-mobile lg:font-display-lg lg:text-display-lg leading-[1.08] tracking-tight drop-shadow-sm">
      Handmade for the <span class="italic font-light text-primary-fixed">bold &amp; beautiful</span>
    </h1>
    <div class="flex flex-wrap items-center gap-space-md pt-space-xs">
      <a
        class="inline-flex items-center justify-center px-space-lg lg:px-space-xl py-space-sm lg:py-space-md bg-surface text-on-surface hover:bg-primary-fixed transition-colors font-label-md text-label-md uppercase tracking-[0.18em] text-center shadow-sm"
        href="#collections"
      >
        Explore The Collection
      </a>
      <button
        class="inline-flex items-center gap-space-xs font-label-md text-label-md uppercase tracking-[0.18em] text-surface hover:text-primary-fixed transition-colors py-space-sm group"
        data-open-consultation
      >
        <span>Book A Consultation</span>
        <span class="material-symbols-outlined text-[16px] transition-transform group-hover:translate-x-1">arrow_forward</span>
      </button>
    </div>
  </div>`;
}

/* ------------------------------------------------------------------ */
/* Video section (shared by both variants)                             */
/* ------------------------------------------------------------------ */
function videoSection(variant) {
  const isDesktop = variant === 'desktop';
  const heightCls = isDesktop
    ? 'h-[calc(100svh_-_5rem)] min-h-[600px] max-h-[880px]'
    : 'h-[calc(100svh_-_4rem)] min-h-[500px]';
  const src = (isDesktop ? HERO_VIDEO.src : HERO_VIDEO.srcMobile || HERO_VIDEO.src) || '';
  const poster = (isDesktop ? HERO_VIDEO.poster : HERO_VIDEO.posterMobile || HERO_VIDEO.poster) || '';

  return `
  <section
    data-hero-video-section
    role="region"
    aria-label="Featured jewellery showreel"
    class="relative w-full overflow-hidden bg-inverse-surface ${heightCls}"
  >
    <video
      data-hero-video
      class="absolute inset-0 w-full h-full object-cover object-center"
      autoplay
      loop
      muted
      playsinline
      preload="metadata"
      disablepictureinpicture
      aria-hidden="true"
      ${src ? `src="${src}"` : ''}
      ${poster ? `poster="${poster}"` : ''}
    ></video>
    <div class="absolute inset-0 bg-gradient-to-t from-on-surface/90 via-on-surface/35 to-on-surface/10" aria-hidden="true"></div>
    <div class="absolute inset-x-0 bottom-0 px-margin-mobile lg:px-margin pb-space-2xl">
      ${heroCopy()}
    </div>
  </section>`;
}

/* ------------------------------------------------------------------ */
/* Trust stats strip under the video                                   */
/* ------------------------------------------------------------------ */
function statsStrip(variant) {
  const isDesktop = variant === 'desktop';
  const stats = [
    { value: '18KT', label: 'Solid Gold Only' },
    { value: 'Muzo', label: 'Certified Emeralds' },
    { value: '100%', label: 'Handmade Atelier' }
  ];

  return `
  <div class="w-full bg-surface border-b ${isDesktop ? 'border-outline-variant/50' : 'border-outline-variant/30'}">
    <div class="${isDesktop ? 'px-margin py-space-md' : 'px-margin-mobile py-space-sm'} grid grid-cols-3 gap-space-sm text-left">
      ${stats
        .map(
          (s) => `
      <div>
        <p class="font-headline-sm text-headline-sm text-on-surface ${isDesktop ? '' : '!text-[16px] !leading-[20px]'}">${s.value}</p>
        <p class="font-label-sm text-label-sm text-outline uppercase tracking-wider ${isDesktop ? '' : '!text-[8px]'}">${s.label}</p>
      </div>`
        )
        .join('')}
    </div>
  </div>`;
}

/* ------------------------------------------------------------------ */
/* Public API                                                          */
/* ------------------------------------------------------------------ */
export function hero() {
  return `
  <!-- ================= HERO VIDEO (DESKTOP) ================= -->
  <div data-variant="desktop">
    ${videoSection('desktop')}
    ${statsStrip('desktop')}
  </div>

  <!-- ================= HERO VIDEO (MOBILE) ================= -->
  <div data-variant="mobile">
    ${videoSection('mobile')}
    ${statsStrip('mobile')}
  </div>`;
}

/**
 * Boots every [data-hero-video] on the page:
 *  - forces the muted property (autoplay policies require it even with the
 *    muted attribute on some browsers)
 *  - starts playback as soon as the browser can
 *  - pauses when the tab is hidden, resumes on return
 * Called once from main.js after the page is rendered.
 */
export function initHeroVideo() {
  document.querySelectorAll('[data-hero-video]').forEach((video) => {
    video.muted = true;

    const tryPlay = () => video.play().catch(() => {});

    if (video.currentSrc || video.getAttribute('src')) tryPlay();
    video.addEventListener('canplay', tryPlay, { once: true });
    video.addEventListener('loadeddata', tryPlay, { once: true });

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) video.pause();
      else tryPlay();
    });
  });
}