/**
 * Section-level copy + link data, extracted verbatim from the Stitch exports.
 */

export const navLinks = [
  { label: 'Collections', path: 'collections', active: true },
  { label: 'Emeralds & Gems', path: 'emeralds-gems' },
  { label: 'Everyday 18KT Gold', path: 'everyday-18kt-gold' },
  { label: 'Mediterranean Charms', path: 'mediterranean-charms' },
  { label: 'Bespoke Atelier', path: 'bespoke-atelier' },
  { label: 'Our Story', path: 'our-story' }
];

export const vitrines = [
  {
    label: 'Vitrine 01',
    title: 'Emeralds & Colored Gemstones',
    img: '/imgs/10.jpg', // e.g. '/assets/imgs/vitrine-1.jpg'
    desc: 'Saturated Colombian Muzo emeralds, natural sapphire cabochons, and hand-cut bezel pendants.',
    cta: 'View 18 Emerald Designs'
  },
  {
    label: 'Vitrine 02',
    title: 'Layered 18KT Gold & Diamond Tennis',
    img: '/imgs/18.png', // e.g. '/assets/imgs/vitrine-2.jpg'
    desc: 'Flawless diamond pavé chains, talismanic stars, emerald accent bangles, and fluid wrists.',
    cta: 'Explore Wrist Stacks'
  },
  {
    label: 'Vitrine 03',
    title: 'Signature Charms & Cord Amulets',
    img: '/imgs/4.jpg', // e.g. '/assets/imgs/vitrine-3.jpg'
    desc: 'Hand-rolled Italian leather cord with clip-in gold gem charms for casual Mediterranean elegance.',
    cta: 'Discover Cord Amulets'
  },
  {
    label: 'Vitrine 04',
    title: 'Everyday Rings & Pavé Stacks',
    img: '/imgs/5.jpg', // e.g. '/assets/imgs/vitrine-4.jpg'
    desc: 'Marquise eye motifs, curved bypass bands, and solitaire cushion gems crafted for perpetual wear.',
    cta: 'View Stackable Rings'
  }
];

/* Shoppable jewellery hotspots per celebrity photo:
   x/y = % position over the card image, img/label shown in the hover popover.
   Swap `img` for real product shots as they become available. */
const pressSpots = {
  amina: [{ x: 54, y: 27, img: '/imgs/17.jpg', label: 'Turquoise Cabochon Drop Earring' }],
  mayan: [
    { x: 65.5, y: 30, img: '/imgs/2.jpg', label: 'Amethyst Charm Hoop' },
    { x: 40, y: 42, img: '/imgs/6.jpg', label: 'Diamond Pavé Ring' }
  ],
  rakaan: [{ x: 38, y: 41, img: '/imgs/6.jpg', label: 'Emerald Cut Ring Stack' }],
  menna: [
    { x: 36.5, y: 33, img: '/imgs/11.jpg', label: 'Diamond Drop Earrings' },
    { x: 47.5, y: 54, img: '/imgs/11.jpg', label: 'Tennis Necklace Layering' }
  ]
};

export const pressDesktop = [
  { kicker: 'Gouna Film Festival', name: 'Amina Khalil', img: '/imgs/amina.jpg', spots: pressSpots.amina }, // e.g. '/assets/imgs/press-1.jpg'
  { kicker: 'Vogue Arabia Feature', name: 'Mayan El Sayed', img: '/imgs/mayan.jpg', spots: pressSpots.mayan }, // e.g. '/assets/imgs/press-2.jpg'
  { kicker: 'Editorial Portrait', name: 'Rakeen Saad', img: '/imgs/rakaan.jpg', spots: pressSpots.rakaan }, // e.g. '/assets/imgs/press-3.jpg'
  { kicker: 'Artisan High Jewellery', name: 'Menna Shalaby', img: '/imgs/menna.jpg', spots: pressSpots.menna } // e.g. '/assets/imgs/press-4.jpg'
];

export const pressMobile = [
  { caption: 'Amina Khalil · Cairo Gala', img: '/imgs/amina.jpg', spots: pressSpots.amina }, // e.g. '/assets/imgs/press-1.jpg'
  { caption: 'Mayan El Sayed · Cannes', img: '/imgs/mayan.jpg', spots: pressSpots.mayan }, // e.g. '/assets/imgs/press-2.jpg'
  { caption: 'Vogue Arabia Editorial', img: '/imgs/rakaan.jpg', spots: pressSpots.rakaan }, // e.g. '/assets/imgs/press-3.jpg'
  { caption: "L'Officiel Haute Joaillerie", img: '/imgs/menna.jpg', spots: pressSpots.menna } // e.g. '/assets/imgs/press-4.jpg'
];

export const trustDesktop = [
  { icon: 'lock', title: 'Insured Vault Transit', desc: 'DHL & FedEx Insured global courier' },
  { icon: 'workspace_premium', title: 'Hallmark Authenticity', desc: 'Official Madrid 18KT gold stamps' },
  { icon: 'straighten', title: 'Complimentary Resizing', desc: 'Bespoke fitting within 60 days' },
  { icon: 'card_giftcard', title: 'Signature Saffron Gift Box', desc: 'Silk pouch & wax seal envelope' }
];

export const trustMobile = [
  { icon: 'local_shipping', title: 'Insured Vault Transit', desc: 'Global armored door-to-door delivery' },
  { icon: 'verified', title: 'Official Hallmarks', desc: 'Madrid 18KT gold laboratory stamps' },
  { icon: 'straighten', title: 'Custom Resizing', desc: 'Complimentary within 60 days' },
  { icon: 'featured_seasonal_and_gifts', title: 'Saffron Gift Chest', desc: 'Wax-sealed certificate of origin' }
];

export const footerCollections = [
  'High Joaillerie Vitrine',
  'Colombian Emeralds',
  'Solid 18KT Essentials',
  'Talismanic Charms',
  'Bespoke Commissions'
];

export const footerConcierge = [
  'Ring Sizing & Care',
  'Insured Vault Transit',
  'GIA & HRD Certificates',
  'Madrid & Ibiza Salons',
  'Archival Heritage'
];

export const bespokeSteps = {
  desktop: [
    { n: '01', title: 'Choose Your Foundation', desc: 'Solid 18KT link chain, diamond tennis choker, or Italian waxed cord.' },
    { n: '02', title: 'Hand-Select Your Charms', desc: 'Choose from 24 talismanic motifs with diamonds, emeralds, and rubies.' },
    { n: '03', title: 'Atelier Hand-Assembly', desc: 'Master goldsmiths assemble, hallmark, and dispatch in our saffron presentation chest.' }
  ],
  mobile: [
    { n: '01', title: 'Choose Your Foundation', desc: 'Solid 18KT gold link chain, graduated diamond tennis choker, or Italian waterproof waxed cord.' },
    { n: '02', title: 'Hand-Select Your Charms', desc: '24 talismanic motifs with bezel-set Muzo emeralds, untreated rubies, and celestial diamond stars.' },
    { n: '03', title: 'Atelier Hand-Assembly', desc: 'Master goldsmiths assemble, hallmark, and dispatch inside our signature saffron presentation chest.' }
  ]
};

export const commissionOptions = [
  'Custom Multi-Gem Talisman',
  'Colombian Emerald Acquisition',
  'Everyday 18KT Gold Stack Set',
  'Bridal & Private Milestone'
];
