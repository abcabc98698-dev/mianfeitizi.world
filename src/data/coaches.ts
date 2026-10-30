import type { Coach } from '../types';

export const coaches: Coach[] = [
  {
    name: 'Maya Collins',
    role: 'Prenatal & Hatha',
    image: {
      src: '/media/instructors/instructor-maya-collins-hatha.webp',
      alt: 'Maya Collins seated in a gentle twist on a mat by the sea',
    },
    socials: [
      { label: 'View Maya on the timetable', href: '/#timetable', icon: 'calendar' },
      { label: 'Book a private session with Maya', href: '/contact/', icon: 'mail' },
    ],
  },
  {
    name: 'Arjun Mehta',
    role: 'Power & Vinyasa',
    image: {
      src: '/media/instructors/instructor-arjun-mehta-vinyasa.webp',
      alt: 'Arjun Mehta balancing in crow pose on a sandy beach',
    },
    socials: [
      { label: 'View Arjun on the timetable', href: '/#timetable', icon: 'calendar' },
      { label: 'Book a private session with Arjun', href: '/contact/', icon: 'mail' },
    ],
  },
  {
    name: 'Sofia Lindqvist',
    role: 'Meditation & Breathwork',
    image: {
      src: '/media/instructors/instructor-sofia-lindqvist-breathwork.webp',
      alt: 'Sofia Lindqvist meditating cross-legged with eyes closed',
    },
    socials: [
      { label: 'View Sofia on the timetable', href: '/#timetable', icon: 'calendar' },
      { label: 'Book a private session with Sofia', href: '/contact/', icon: 'mail' },
    ],
  },
  {
    name: 'Walter Greene',
    role: 'Yin & Restorative',
    image: {
      src: '/media/instructors/instructor-walter-greene-yin.webp',
      alt: 'Walter Greene meditating on a red rock ledge above a canyon',
    },
    socials: [
      { label: 'View Walter on the timetable', href: '/#timetable', icon: 'calendar' },
      { label: 'Book a private session with Walter', href: '/contact/', icon: 'mail' },
    ],
  },
];
