export const categories = [
  { slug: 'fixed-blade', title: 'Fixed Blade Knives', description: 'Full-tang, hunting, outdoor and utility knives.', accent: 'fixed' },
  { slug: 'spring-assisted', title: 'Spring Assisted', description: 'Assisted-opening knives and related collectibles.', accent: 'assisted' },
  { slug: 'folding', title: 'Folding Knives', description: 'Classic and modern folding pocket knives.', accent: 'folding' },
  { slug: 'multi-tools', title: 'Multi-Tools', description: 'Practical multi-tools and everyday gear.', accent: 'multi' },
  { slug: 'antiques', title: 'Antique Knives', description: 'Older collectible pieces and historical knives.', accent: 'antique' },
  { slug: 'vintage', title: 'Vintage Knives', description: 'Vintage production knives and distinctive finds.', accent: 'vintage' },
] as const;

export type CategorySlug = typeof categories[number]['slug'];
