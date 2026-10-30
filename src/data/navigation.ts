import type { FooterColumn, NavigationItem } from '../types';
import { classes } from './classes';

export const primaryNav: NavigationItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Classes', href: '/#sessions' },
  { label: 'Schedule', href: '/#timetable' },
  { label: 'Coaches', href: '/#instructors' },
  { label: 'Pricing', href: '/#memberships' },
  { label: 'Retreats', href: '/#immersions' },
  { label: 'Journal', href: '/journal/' },
  { label: 'Contact', href: '/contact/' },
];

export const headerActions = {
  schedule: { label: 'Schedule', ariaLabel: 'View weekly class timetable', href: '/#timetable' },
  memberships: { ariaLabel: 'Memberships and class passes', href: '/#memberships' },
};

export const footerColumns: FooterColumn[] = [
  {
    title: 'Studio',
    links: [
      { label: 'Philosophy', href: '/#philosophy' },
      { label: 'Instructors', href: '/#instructors' },
      { label: 'Memberships', href: '/#memberships' },
      { label: 'Journal', href: '/journal/' },
      { label: 'FAQ', href: '/#common-questions' },
      { label: 'Contact', href: '/contact/' },
    ],
  },
  {
    title: 'Sessions',
    links: classes.slice(0, 5).map((item) => ({ label: item.title, href: '/#sessions' })),
  },
];

export const legalNav: NavigationItem[] = [
  { label: 'Editorial Journal', href: '/journal/' },
  { label: 'Studio Contact', href: '/contact/' },
];
