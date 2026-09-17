import { capsuleProducts, iconProducts } from '../data/products.js';

/**
 * Fully functional shopping cart:
 *  - state persisted in localStorage (survives reloads)
 *  - header badge ([data-cart-count]) stays in sync, hidden when empty
 *  - slide-over drawer: line items, quantity steppers, remove, subtotal
 *  - "Acquire" buttons add items + fire the existing toast
 *  - bag icons ([data-cart-open]) open the drawer; Esc / backdrop closes
 *
 * Products are looked up by name from the catalogue, so the existing
 * data-add-to-cart / data-price buttons need no changes.
 */

const STORAGE_KEY = 'th-cart-v1';
const catalog = [...capsuleProducts, ...iconProducts];

let items = load();

function load() {
  try {
    const raw = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    return Array.isArray(raw) ? raw.filter((it) => it && it.name) : [];
  } catch {
    return [];
  }
}

function save() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    /* private mode etc. — cart still works in-memory for the session */
  }
}

const fmt = (n) => `E£${n.toLocaleString('en-US')}`;
const badgeTotal = () => items.reduce((n, it) => n + it.qty, 0);
const subtotal = () => items.reduce((s, it) => s + it.price * it.qty, 0);
const findProduct = (name) => catalog.find((p) => p.name === name);

/* ------------------------------------------------------------------ */
/* Rendering                                                           */
/* ------------------------------------------------------------------ */
function renderBadge() {
  const n = badgeTotal();
  document.querySelectorAll('[data-cart-count]').forEach((el) => {
    el.textContent = n;
    el.classList.toggle('hidden', n === 0);
  });
}

function renderDrawer() {
  const list = document.getElementById('cartItems');
  const subtotalEl = document.getElementById('cartSubtotal');
  const countEl = document.getElementById('cartDrawerCount');
  if (!list) return;

  const n = badgeTotal();
  if (countEl) countEl.textContent = n ? `(${n})` : '';

  list.innerHTML = items.length
    ? `<ul>${items
        .map(
          (it) => `
      <li class="flex gap-space-md p-space-md border-b border-outline-variant/30">
        <img src="${it.img}" alt="${it.name}" class="w-16 h-16 object-cover object-center shrink-0">
        <div class="flex-1 min-w-0">
          <div class="flex items-start justify-between gap-space-xs">
            <p class="font-headline-sm text-headline-sm text-on-surface leading-snug truncate">${it.name}</p>
            <button aria-label="Remove ${it.name}" data-remove="${it.name}" class="text-outline hover:text-error transition-colors shrink-0">
              <span class="material-symbols-outlined text-[18px]">delete</span>
            </button>
          </div>
          <p class="font-label-sm text-label-sm text-tertiary uppercase tracking-wider mt-0.5">${fmt(it.price)}</p>
          <div class="flex items-center justify-between mt-space-sm">
            <div class="flex items-center border border-outline-variant/50">
              <button aria-label="Decrease quantity of ${it.name}" data-qty-minus="${it.name}" class="w-8 h-8 flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors">
                <span class="material-symbols-outlined text-[16px]">remove</span>
              </button>
              <span class="w-8 text-center font-body-sm text-body-sm text-on-surface">${it.qty}</span>
              <button aria-label="Increase quantity of ${it.name}" data-qty-plus="${it.name}" class="w-8 h-8 flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors">
                <span class="material-symbols-outlined text-[16px]">add</span>
              </button>
            </div>
            <span class="font-body-md text-body-md font-medium text-on-surface">${fmt(it.price * it.qty)}</span>
          </div>
        </div>
      </li>`
        )
        .join('')}</ul>`
    : `<div class="h-full min-h-[16rem] flex flex-col items-center justify-center text-center gap-space-md p-space-xl">
        <span class="material-symbols-outlined text-[40px] text-outline">shopping_bag</span>
        <p class="font-headline-sm text-headline-sm text-on-surface">Your vault is empty</p>
        <p class="font-body-sm text-body-sm text-on-surface-variant max-w-[15rem]">Discover hand-sculpted 18KT gold pieces and certified Muzo emeralds.</p>
        <a href="#collections" data-cart-close class="px-space-lg py-space-sm bg-on-surface text-surface hover:bg-primary transition-colors font-label-sm text-label-sm uppercase tracking-widest">Explore The Collection</a>
      </div>`;

  if (subtotalEl) subtotalEl.textContent = fmt(subtotal());
}

/* ------------------------------------------------------------------ */
/* Operations                                                          */
/* ------------------------------------------------------------------ */
function showToast(name, price) {
  const toast = document.getElementById('cartToast');
  const toastItem = document.getElementById('cartToastItem');
  if (!toast || !toastItem) return;
  toastItem.textContent = `${name} — ${fmt(price)}`;
  toast.classList.remove('translate-y-24', 'opacity-0');
  toast.classList.add('translate-y-0', 'opacity-100');
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => {
    toast.classList.add('translate-y-24', 'opacity-0');
    toast.classList.remove('translate-y-0', 'opacity-100');
  }, 4000);
}

function addToCart(name) {
  const product = findProduct(name);
  if (!product) return;
  const existing = items.find((it) => it.name === name);
  if (existing) existing.qty += 1;
  else items.push({ name: product.name, price: product.price, img: product.img, qty: 1 });
  save();
  renderBadge();
  renderDrawer();
  showToast(product.name, product.price);
}

function setQty(name, delta) {
  const it = items.find((i) => i.name === name);
  if (!it) return;
  it.qty += delta;
  if (it.qty <= 0) items = items.filter((i) => i.name !== name);
  save();
  renderBadge();
  renderDrawer();
}

function removeItem(name) {
  items = items.filter((i) => i.name !== name);
  save();
  renderBadge();
  renderDrawer();
}

/* ------------------------------------------------------------------ */
/* Drawer open / close                                                 */
/* ------------------------------------------------------------------ */
function openCart() {
  const drawer = document.getElementById('cartDrawer');
  const backdrop = document.getElementById('cartBackdrop');
  if (!drawer || !backdrop) return;
  drawer.classList.remove('translate-x-full');
  backdrop.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  const drawer = document.getElementById('cartDrawer');
  const backdrop = document.getElementById('cartBackdrop');
  if (!drawer || !backdrop) return;
  drawer.classList.add('translate-x-full');
  backdrop.classList.add('hidden');
  document.body.style.overflow = '';
}

/* ------------------------------------------------------------------ */
/* Public API — called once from main.js after the page is rendered    */
/* ------------------------------------------------------------------ */
export function initCart() {
  renderBadge();
  renderDrawer();

  /* "Acquire" buttons on every product card */
  document.querySelectorAll('[data-add-to-cart]').forEach((btn) => {
    btn.addEventListener('click', () => addToCart(btn.getAttribute('data-add-to-cart')));
  });

  /* Bag icons (header, both variants) + toast "View Bag" */
  document.querySelectorAll('[data-cart-open]').forEach((el) => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      openCart();
    });
  });

  /* Close: X button, empty-state CTA, backdrop, Escape */
  document.querySelectorAll('[data-cart-close]').forEach((el) => {
    el.addEventListener('click', closeCart);
  });
  const backdrop = document.getElementById('cartBackdrop');
  if (backdrop) backdrop.addEventListener('click', closeCart);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeCart();
  });

  /* Qty steppers + remove (event delegation — drawer re-renders itself) */
  const list = document.getElementById('cartItems');
  if (list) {
    list.addEventListener('click', (e) => {
      const minus = e.target.closest('[data-qty-minus]');
      const plus = e.target.closest('[data-qty-plus]');
      const remove = e.target.closest('[data-remove]');
      if (minus) setQty(minus.getAttribute('data-qty-minus'), -1);
      else if (plus) setQty(plus.getAttribute('data-qty-plus'), 1);
      else if (remove) removeItem(remove.getAttribute('data-remove'));
    });
  }

  /* Checkout placeholder */
  const checkout = document.getElementById('checkoutBtn');
  if (checkout) {
    checkout.addEventListener('click', () => {
      if (!items.length) return;
      window.alert(
        'Thank you. Our Madrid & Cairo concierge will contact you to complete the acquisition and arrange complimentary insured courier.'
      );
    });
  }
}