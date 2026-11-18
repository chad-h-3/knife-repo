// Category artwork is remotely hosted by Wikimedia Commons.
// See /image-credits/ for photo creators and license information.
export const categories = [
  { slug: 'fixed-blade', title: 'Fixed Blade Knives', description: 'Full-tang, hunting, outdoor and utility knives.', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Hunting_knives.jpg', imageAlt: 'Fixed Blade Knives example photograph' },
  { slug: 'spring-assisted', title: 'Spring Assisted', description: 'Assisted-opening knives and related collectibles.', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Spring-assisted_knife-_(Opened)_2013-04-06_19-28.jpg', imageAlt: 'Spring Assisted example photograph' },
  { slug: 'folding', title: 'Folding Knives', description: 'Classic and modern folding pocket knives.', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Hand_made_folding_knife.jpg', imageAlt: 'Folding Knives example photograph' },
  { slug: 'multi-tools', title: 'Multi-Tools', description: 'Practical multi-tools and everyday gear.', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Leatherman-Style.jpg', imageAlt: 'Multi-Tools example photograph' },
  { slug: 'antiques', title: 'Antique Knives', description: 'Older collectible pieces and historical knives.', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Pocket_Knife.jpg', imageAlt: 'Antique Knives example photograph' },
  { slug: 'vintage', title: 'Vintage Knives', description: 'Vintage production knives and distinctive finds.', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Pocket_Knife_Collection.jpg', imageAlt: 'Vintage Knives example photograph' },
] as const;

export type CategorySlug = typeof categories[number]['slug'];
