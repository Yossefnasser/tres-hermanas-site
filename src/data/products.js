/**
 * Product data — copy extracted verbatim from the Stitch exports
 * (tres_hermanas_flagship_homepage + _mobile).
 *
 * `tag`      = desktop corner badge · `tagTone`: 'primary' | 'dark'
 * `mTag`     = mobile corner badge · `mTagTone`: 'primary' | 'dark' | 'olive'
 * `category` = mobile card category label (desktop uses meta pair instead)
 */

export const capsuleProducts = [
  {
    name: 'Emerald Cord Choker & Amulet',
    img: '/imgs/2.jpg', // e.g. '/assets/imgs/capsule-1.jpg'
    tag: 'Waterproof Cord',
    tagTone: 'primary',
    mTag: 'Muzo',
    mTagTone: 'dark',
    category: 'NECKLACES',
    meta: ['Colombian Emerald', '18KT Solid Gold'],
    desc: 'Solid 18KT gold, untreated Colombian emerald, water-resistant Italian cord.',
    price: 890,
    priceLabel: '€890'
  },
  {
    name: 'Delicate Emerald & Diamond Cuffs',
    img: '/imgs/3.jpg', // e.g. '/assets/imgs/capsule-2.jpg'
    tag: 'Seaside Stack',
    tagTone: 'dark',
    mTag: 'Icon',
    mTagTone: 'primary',
    category: 'BRACELETS',
    meta: ['Open Torques', '18KT Yellow Gold'],
    desc: '18KT solid gold flexible open wire bangle duo set with brilliant emeralds.',
    price: 1650,
    priceLabel: '€1,650'
  },
  {
    name: 'Sunlit Topaz & Pavé Orbit Ring',
    img: '/imgs/4.jpg',   // ← was null, now a real image
    tag: 'Summer Solitaire',
    tagTone: 'dark',
    mTag: null,
    mTagTone: null,
    category: 'RINGS',
    meta: ['Golden Honey Topaz', '18KT Gold Pavé'],
    desc: 'Pear cut radiant honey topaz cradled over crisscross diamond pavé stems.',
    price: 1850,
    priceLabel: '€1,850'
  },
  {
    name: 'Summer Multi-Gem Charm Cord',
    img: '/imgs/5.jpg', // e.g. '/assets/imgs/capsule-4.jpg'
    tag: 'Limited Edition',
    tagTone: 'primary',
    mTag: 'Talisman',
    mTagTone: 'olive',
    category: 'TALISMANS',
    meta: ['Multi-Gem Cluster', '18KT Solid Gold'],
    desc: 'Quad clip-on pendant drops with Muzo emerald, Ceylon sapphire, and ruby.',
    price: 2450,
    priceLabel: '€2,450'
  }
];

export const iconProducts = [
  {
    name: 'The Sovereign Emerald Cord Pendant',
    img: '/imgs/2.jpg', // e.g. '/assets/imgs/icon-1.jpg'
    badge: 'Archival Best Seller',
    badgeTone: 'dark',
    category: 'EMERALD',
    meta: ['Colombian Emerald', '18KT Solid Gold'],
    desc: 'Natural Colombian bezel-set emerald on adjustable hand-finished black cord.',
    price: 1280,
    priceLabel: '€1,280'
  },
  {
    name: 'Mediterranean Multi-Gem Amulet',
    img: '/imgs/3.jpg', // e.g. '/assets/imgs/icon-2.jpg'
    badge: 'Atelier Icon',
    badgeTone: 'primary',
    category: 'TALISMAN',
    meta: ['Multi-Gem Talisman', '18KT Solid Gold'],
    desc: 'Natural Ceylon sapphire, ruby, smoky quartz, and Colombian emerald drops.',
    price: 2450,
    priceLabel: '€2,450'
  },
  {
    name: 'Marquise Diamond & Emerald Ring',
    img: '/imgs/6.jpg', // e.g. '/assets/imgs/icon-3.jpg'
    badge: null,
    badgeTone: null,
    category: 'RINGS',
    meta: ['Pavé & Marquise', '18KT Yellow Gold'],
    desc: 'Protective evil-eye contour with micro-pavé diamonds and central emerald.',
    price: 980,
    priceLabel: '€980'
  },
  {
    name: 'Diamond Star & Tennis Stack',
    img: '/imgs/5.jpg', // e.g. '/assets/imgs/icon-4.jpg'
    badge: 'Stack of 4',
    badgeTone: 'dark',
    category: 'BRACELETS',
    meta: ['Fine Diamonds', '18KT Solid Gold'],
    desc: 'Includes bezel star chain, emerald cut drop charm, and round brilliant tennis link.',
    price: 3100,
    priceLabel: '€3,100'
  },
  {
    name: 'Cushion Cut Solitaire Honey Topaz',
    img: '/imgs/1.jpg', // e.g. '/assets/imgs/icon-5.jpg'
    badge: null,
    badgeTone: null,
    category: 'SOLITAIRES',
    meta: ['Natural Golden Topaz', '18KT Gold Pavé'],
    desc: 'Deep golden cushion cut natural gem anchored in split diamond pavé prongs.',
    price: 1850,
    priceLabel: '€1,850'
  },
  {
    name: 'The Duo Delicate Emerald Cuff',
    img: '/imgs/4.jpg', // e.g. '/assets/imgs/icon-6.jpg'
    badge: null,
    badgeTone: null,
    category: 'CUFFS',
    meta: ['Open Torque', '18KT Yellow Gold'],
    desc: 'Solid gold flexible wire torque with terminal Colombian emerald and brilliant diamond.',
    price: 1420,
    priceLabel: '€1,420'
  }
];
