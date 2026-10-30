import type { Retreat } from '../types';

export const retreats: Retreat[] = [
  {
    title: 'Coastal Reset Weekend',
    description: 'Three days of sunrise flows, cliff walks and slow, seasonal meals.',
    date: '2026-11-14',
    location: 'Coastal retreat house',
    image: {
      src: '/media/immersions/coastal-cliff-reset-weekend.webp',
      alt: 'Woman in a seated backbend on a mat at the edge of a sea cliff',
    },
    price: 'From $620',
    ctaLabel: 'Reserve',
    bookingUrl: '/contact/',
  },
  {
    title: 'Breath & Stillness Workshop',
    description: 'A half-day intensive on pranayama, nervous system care and sleep.',
    date: '2026-12-05',
    location: 'Main studio',
    image: {
      src: '/media/immersions/sunset-breath-stillness-workshop.webp',
      alt: 'Silhouette in tree pose with arms raised against an orange sunset',
    },
    price: '$85',
    ctaLabel: 'Reserve',
    bookingUrl: '/contact/',
  },
  {
    title: 'New Year Mountain Retreat',
    description: 'Five days of practice, journaling and quiet mornings above the clouds.',
    date: '2027-01-22',
    location: 'Mountain lodge',
    image: {
      src: '/media/immersions/alpine-summit-new-year-retreat.webp',
      alt: 'Person sitting on a rocky summit above a sea of clouds',
    },
    price: 'From $1,180',
    ctaLabel: 'Reserve',
    bookingUrl: '/contact/',
  },
];
