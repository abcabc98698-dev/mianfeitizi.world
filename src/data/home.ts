import type { CallToAction, FocusArea, GalleryImage, HeroWord, ImageData, VisitStep } from '../types';

export const hero = {
  title: [{ text: 'Ground' }, { text: 'Soften', serif: true }, { text: 'Rise' }] satisfies HeroWord[],
  description:
    'Guided classes, breathwork and gentle routines for every body, whether you are unrolling a mat for the first time or returning to a practice you have missed.',
  cta: { label: 'Book a Free Class', href: '/#memberships' } satisfies CallToAction,
  image: {
    src: '/media/banners/sunset-meadow-meditation-hero.webp',
    alt: 'A woman meditating cross-legged in tall grass, backlit by the setting sun',
  } satisfies ImageData,
  proof: {
    label: 'Practicing with us',
    value: '30,000+ Members',
    avatars: [
      { src: '/media/community/member-portrait-elena.webp', alt: '' },
      { src: '/media/community/member-portrait-marcus.webp', alt: '' },
      { src: '/media/community/member-portrait-claire.webp', alt: '' },
    ] satisfies ImageData[],
  },
};

export const approach = {
  title: 'Practice With Purpose',
  intro:
    'Every class is built to strengthen the body, quiet the mind and send you home steadier than when you walked in.',
  pillars: [
    { title: 'Rooted Strength', description: 'Build stable joints and a stronger core through slow, deliberate flows.' },
    { title: 'Steady Breath', description: 'Learn simple pranayama techniques that lower stress and sharpen focus.' },
    { title: 'Shared Space', description: 'Practice beside a warm, welcoming group that shows up for each other.' },
    { title: 'Mindful Mobility', description: 'Move joints through their full range with control, so everyday movement feels easier.' },
    { title: 'Deep Rest', description: 'Restorative shapes and quiet pauses that help the body recover and the mind settle.' },
    { title: 'Lasting Habits', description: 'Simple routines you can carry home, so your practice keeps going between classes.' },
  ],
  cta: { label: 'Plan Your First Visit', href: '/#first-session' } satisfies CallToAction,
  image: {
    src: '/media/banners/zen-balanced-stones-mindfulness.webp',
    alt: 'Two smooth stones balanced on a mossy ledge in warm evening light',
  } satisfies ImageData,
};

export const classesSection = {
  title: 'Find Your Class',
  intro:
    'Six styles, one studio. Start gentle, build heat or slow everything down. Each class lists its pace and length so you know what to expect.',
  cta: { label: 'See Full Timetable', href: '/#timetable' } satisfies CallToAction,
};

export const focus = {
  title: 'Poses Shaped Around You',
  intro:
    'Our coaches bring years of teaching to every session, adjusting each pose to your comfort, mobility and pace.',
  image: {
    src: '/media/banners/coastal-dunes-seated-posture.webp',
    alt: 'Woman seated cross-legged on a mat in the dunes, facing the sea with her back to the camera',
  } satisfies ImageData,
  initial: 1,
  areas: [
    {
      title: 'Release Your Neck',
      description: 'Slow neck rolls and gentle side stretches melt the tension that builds up after long hours at a screen.',
      spot: 'Neck',
      x: '58%',
      y: '37%',
    },
    {
      title: 'Open Your Shoulders',
      description: 'Heart-opening poses counter hunched posture, widen the chest and make every breath feel fuller.',
      spot: 'Shoulders',
      x: '72%',
      y: '46%',
    },
    {
      title: 'Lengthen Your Spine',
      description: 'Seated twists and folds create space between the vertebrae, easing lower back pain and improving mobility.',
      spot: 'Spine',
      x: '57%',
      y: '66%',
    },
  ] satisfies FocusArea[],
};

export const scheduleSection = {
  title: 'This Week at the Studio',
  intro: 'Pick a day to see every class, who is teaching and how long it runs. Spots open seven days ahead.',
  note: 'Arrive ten minutes early. Mats, blocks and bolsters are provided.',
  reserveLabel: 'Reserve',
};

export const coachesSection = {
  title: 'Meet Your Coaches',
  intro:
    'Experienced teachers with thousands of hours on the mat and a shared belief that yoga should fit the person, not the other way round.',
  cta: { label: 'Book a Private Session', href: '/contact/' } satisfies CallToAction,
};

export const visit = {
  title: 'Your First Visit, Made Simple',
  intro:
    'New to yoga or new to us? Here is exactly what happens from the moment you book to the moment you roll up your mat.',
  cta: { label: 'Claim Your Free Class', href: '/#memberships' } satisfies CallToAction,
  steps: [
    { title: 'Book online', description: 'Choose any beginner-friendly class from the timetable and reserve your spot in under a minute.' },
    { title: 'Meet your coach', description: 'Arrive a little early. Your coach will ask about injuries, goals and anything you want to avoid.' },
    { title: 'Practice at your pace', description: 'Follow along with options for every pose. Resting whenever you need to is always encouraged.' },
    { title: 'Find your rhythm', description: 'After class we suggest a weekly plan and a membership that fits your schedule and budget.' },
  ] satisfies VisitStep[],
};

export const pricingSection = {
  title: 'Memberships That Fit',
  intro: 'No joining fees and no long contracts. Pause or cancel anytime from your account.',
};

export const storiesSection = {
  title: 'Real People,\nReal Change',
  intro: 'How a regular practice has reshaped the bodies, moods and routines of our members.',
};

export const gallery = {
  title: 'Moments on the Mat',
  intro: 'Inside the studio, on the coast and up in the hills. A few snapshots from our community.',
  images: [
    {
      src: '/media/community/harbor-sunset-meditation-moment.webp',
      alt: 'Silhouette meditating on a jetty post at sunset, mirrored in the water',
      caption: 'Harbor sunset',
    },
    {
      src: '/media/community/red-canyon-dancer-pose-moment.webp',
      alt: 'Woman in dancer pose on red rocks in a desert canyon',
      caption: 'Canyon session',
    },
    {
      src: '/media/community/shoreline-twilight-flow-moment.webp',
      alt: 'Silhouette in dancer pose on a wet beach at sunset',
      caption: 'Sunset flow',
    },
    {
      src: '/media/community/granite-bay-tree-pose-balance.webp',
      alt: 'Woman in tree pose on a granite boulder beside a calm bay',
      caption: 'Coastal balance',
    },
  ] satisfies GalleryImage[],
  note: 'Practice with our community in the studio or at our seasonal outdoor sessions.',
  noteLinkLabel: 'Reserve a studio visit',
};

export const retreatsSection = {
  title: 'Retreats & Workshops',
  intro: 'Step away from routine with small-group weekends and deep-dive workshops led by our senior coaches.',
  cta: { label: 'Ask About Retreats', href: '/contact/' } satisfies CallToAction,
};

export const faqSection = {
  title: 'Questions, Answered',
  intro: 'Still unsure about something? Our front desk team replies to every message within one working day.',
  cta: { label: 'Ask Us Anything', href: '/contact/' } satisfies CallToAction,
};

export const journalSection = {
  title: 'From the Journal',
  intro: 'Practical notes from our coaches on movement, breath and building habits that last.',
  cta: { label: 'Read All Articles', href: '/journal/' } satisfies CallToAction,
};

export const newsletter = {
  title: 'A Calmer Inbox, Once a Week',
  intro:
    'One short practice, one breathing tip and first access to retreat spots every Sunday morning. Unsubscribe anytime.',
  placeholder: 'Your email address',
  buttonLabel: 'Subscribe',
};

export const cta = {
  title: 'The Mat Is Where\nChange {lotus} Begins',
  intro: 'Join thousands who have made room for calm in their week. Your first class is on us.',
  button: { label: 'Book a Free Class', href: '/#memberships' } satisfies CallToAction,
  contactLabel: 'Get in touch with us',
  image: { src: '/media/banners/ocean-horizon-practice-banner.webp', alt: '' } satisfies ImageData,
  marquee: { before: 'Begin Your', emphasis: 'Practice' },
};
