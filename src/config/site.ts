import type { SiteConfig } from '../types';

export const site: SiteConfig = {
  name: 'Yoga Fitness',
  logoText: 'yogafitness',
  tagline: 'Mindful movement, breathwork & restorative yoga studio',
  description:
    'Yoga Fitness offers guided vinyasa, hatha, yin restorative classes, pranayama breathwork labs and seasonal retreats for every level of practice.',
  footerAbout:
    'A neighborhood sanctuary for mindful movement, steady breath and a supportive community dedicated to lifelong wellbeing.',
  lang: 'en',
  locale: 'en_US',

  contact: {
    email: 'hello@mianfeitizi.world',
    phone: '+1 (415) 890-4321',
    phoneHref: '+14158904321',
    address: {
      street: '428 Valencia Street, Suite 2B',
      locality: 'San Francisco',
      region: 'CA',
      postalCode: '94103',
      country: 'USA',
    },
  },

  hours: [
    {
      label: 'Mon to Fri',
      hours: '6:00 to 21:00',
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '06:00',
      closes: '21:00',
    },
    { label: 'Saturday', hours: '7:00 to 18:00', days: ['Saturday'], opens: '07:00', closes: '18:00' },
    { label: 'Sunday', hours: '8:00 to 14:00', days: ['Sunday'], opens: '08:00', closes: '14:00' },
  ],

  socials: [
    { label: 'Studio Gallery', href: '/#community-moments', icon: 'camera' },
    { label: 'Practice Sessions', href: '/#sessions', icon: 'play' },
    { label: 'Editorial Journal', href: '/journal/', icon: 'globe' },
    { label: 'Direct Inquiry', href: '/contact/', icon: 'chat' },
  ],

  bookingUrl: '/contact/',

  forms: {
    contactAction: '',
    newsletterAction: '',
  },

  seo: {
    defaultTitle: 'Yoga Fitness | Mindful Movement, Breathwork & Restorative Yoga Studio',
    titleSeparator: '|',
    ogImage: '/media/brand/social-share-cover.jpg',
    ogImageAlt: 'A practitioner meditating cross-legged in a sunlit meadow at dusk',
    twitterHandle: '',
    themeColor: '#F5F4F1',
  },

  copyright: 'Yoga Fitness Studio. All rights reserved.',
};
