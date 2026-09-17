import './styles.css';

import { siteHeader } from './components/siteHeader.js';
import { hero, initHeroVideo } from './components/hero.js';
import { summerCapsule } from './components/summerCapsule.js';
import { collections } from './components/collections.js';
import { iconsCollection } from './components/iconsCollection.js';
// Paused for now — to re-enable, uncomment these two imports,
// add ${editorial()} / ${bespoke()} back into <main>, and remove the
// leading "//" from the lines in the EDITORIAL & BESPOKE note below.
// import { editorial } from './components/editorial.js';
// import { bespoke } from './components/bespoke.js';
import { asSeenOn } from './components/asSeenOn.js';
import { trustBanner } from './components/trustBanner.js';
import { siteFooter } from './components/siteFooter.js';
import { overlays } from './components/overlays.js';

/* EDITORIAL & BESPOKE — paused, not deleted.
   editorial.js renders the "Our Story / ethos" section (anchor: #ethos)
   bespoke.js    renders the "Bespoke Atelier" section.
   To re-enable: uncomment the two imports above, then insert
   the matching section back into <main> (previously between
   iconsCollection and trustBanner). Both component files are intact. */

document.getElementById('app').innerHTML = `
  ${siteHeader()}
  <main class="w-full pt-16 lg:pt-20 bg-surface flex flex-col">
    ${hero()}
    ${summerCapsule()}
    ${collections()}
    ${asSeenOn()}
    ${iconsCollection()}
    ${trustBanner()}
  </main>
  ${siteFooter()}
  ${overlays()}
`;

initHeroVideo();
bindInteractions();

function bindInteractions() {
  /* ---- Cart toast (Acquire buttons) ---- */
  const toast = document.getElementById('cartToast');
  const toastItem = document.getElementById('cartToastItem');
  let toastTimer;

  document.querySelectorAll('[data-add-to-cart]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const name = btn.getAttribute('data-add-to-cart');
      const price = Number(btn.dataset.price || 0).toLocaleString('en-US');
      toastItem.textContent = `${name} — E£${price}`;
      toast.classList.remove('translate-y-24', 'opacity-0');
      toast.classList.add('translate-y-0', 'opacity-100');
      clearTimeout(toastTimer);
      toastTimer = setTimeout(() => {
        toast.classList.add('translate-y-24', 'opacity-0');
        toast.classList.remove('translate-y-0', 'opacity-100');
      }, 4500);
    });
  });

  /* ---- Wishlist hearts ---- */
  document.querySelectorAll('.wishlist-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const icon = btn.querySelector('.material-symbols-outlined');
      const filled = icon.classList.toggle('is-filled');
      btn.classList.toggle('text-error', filled);
      btn.classList.toggle('text-on-surface', !filled);
    });
  });

  /* ---- Category filters (desktop + mobile pills) ---- */
  document.querySelectorAll('[data-filter-group]').forEach((group) => {
    const buttons = [...group.querySelectorAll('button')];
    const activeCls = group.dataset.activeClasses;
    const idleCls = group.dataset.idleClasses;
    const cards = group.dataset.filterTarget ? [...document.querySelectorAll(`${group.dataset.filterTarget} > [data-filter-key]`)] : [];

    buttons.forEach((btn) => {
      btn.addEventListener('click', () => {
        buttons.forEach((b) => (b.className = idleCls));
        btn.className = activeCls;
        const key = btn.dataset.filter;
        cards.forEach((card) => {
          card.classList.toggle('hidden', key !== 'all' && card.dataset.filterKey !== key);
        });
      });
    });
  });

  /* ---- Consultation modal ---- */
  const modal = document.getElementById('consultationModal');
  const openModal = (show) => {
    modal.classList.toggle('hidden', !show);
    modal.classList.toggle('flex', show);
    document.body.style.overflow = show ? 'hidden' : '';
  };
  document.querySelectorAll('[data-open-consultation]').forEach((btn) => btn.addEventListener('click', () => openModal(true)));
  document.querySelectorAll('[data-close-consultation]').forEach((btn) => btn.addEventListener('click', () => openModal(false)));
  modal.addEventListener('click', (e) => {
    if (e.target === modal) openModal(false);
  });
  document.getElementById('consultationForm').addEventListener('submit', (e) => {
    e.preventDefault();
    window.alert('Thank you. Marian Samuel Emil and our Madrid atelier concierge will reach out to you within 24 business hours.');
    openModal(false);
  });

  /* ---- Mobile slide-down menu ---- */
  const menuBtn = document.querySelector('[data-menu-toggle]');
  const menuPanel = document.getElementById('mobileMenu');
  menuBtn.addEventListener('click', () => menuPanel.classList.toggle('hidden'));
  menuPanel.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => menuPanel.classList.add('hidden')));

  /* ---- Smooth scroll buttons (mobile hero CTAs) ---- */
  document.querySelectorAll('[data-scroll-to]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = document.querySelector(btn.dataset.scrollTo);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  /* ---- Newsletter forms ---- */
  document.querySelectorAll('form[data-newsletter]').forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const b = form.querySelector('button');
      const original = b.textContent;
      b.textContent = 'Subscribed';
      setTimeout(() => (b.textContent = original), 2500);
      form.reset();
    });
  });
  document.querySelectorAll('[data-newsletter-mobile]').forEach((btn) => {
    const input = btn.parentElement.querySelector('input');
    btn.addEventListener('click', () => {
      if (!input.value || !input.checkValidity()) {
        input.focus();
        return;
      }
      const original = btn.textContent;
      btn.textContent = 'JOINED';
      input.value = '';
      setTimeout(() => (btn.textContent = original), 2500);
    });
  });

  /* ---- Placeholder routes: keep hash links from jumping ---- */
  document.querySelectorAll('a[href="#"]').forEach((a) => {
    a.addEventListener('click', (e) => e.preventDefault());
  });

  /* ---- As Seen On jewellery hotspot dots (tap toggle for touch) ---- */
  document.querySelectorAll('.shop-dot').forEach((dot) => {
    dot.addEventListener('click', (e) => {
      e.stopPropagation();
      const spot = dot.closest('.shop-spot');
      const wasOpen = spot.classList.contains('is-open');
      document.querySelectorAll('.shop-spot.is-open').forEach((s) => s.classList.remove('is-open'));
      if (!wasOpen) spot.classList.add('is-open');
    });
  });
  document.addEventListener('click', () => {
    document.querySelectorAll('.shop-spot.is-open').forEach((s) => s.classList.remove('is-open'));
  });
}
