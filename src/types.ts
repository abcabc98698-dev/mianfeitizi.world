export type IconName =
  | 'logo'
  | 'calendar'
  | 'bag'
  | 'menu'
  | 'close'
  | 'arrow-left'
  | 'arrow-right'
  | 'arrow-up'
  | 'focus'
  | 'lotus'
  | 'clock'
  | 'level'
  | 'pin'
  | 'check'
  | 'plus'
  | 'camera'
  | 'play'
  | 'chat'
  | 'globe'
  | 'mail'
  | 'phone';

export interface ImageData {
  src: string;
  alt: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: IconName;
}

export interface OpeningHours {
  label: string;
  hours: string;
  days: Array<'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday'>;
  opens: string;
  closes: string;
}

export interface SiteConfig {
  name: string;
  logoText: string;
  tagline: string;
  description: string;
  footerAbout: string;
  lang: string;
  locale: string;
  contact: {
    email: string;
    phone: string;
    phoneHref: string;
    address: {
      street: string;
      locality: string;
      region: string;
      postalCode: string;
      country: string;
    };
  };
  hours: OpeningHours[];
  socials: SocialLink[];
  bookingUrl: string;
  forms: {
    contactAction: string;
    newsletterAction: string;
  };
  seo: {
    defaultTitle: string;
    titleSeparator: string;
    ogImage: string;
    ogImageAlt: string;
    twitterHandle: string;
    themeColor: string;
  };
  verification?: {
    google?: string;
    bing?: string;
    baidu?: string;
    shenma?: string;
  };
  copyright: string;
}

export interface NavigationItem {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: NavigationItem[];
}

export interface HeroWord {
  text: string;
  serif?: boolean;
}

export interface CallToAction {
  label: string;
  href: string;
}

export interface FeatureTopic {
  title: string;
  description: string;
  image: ImageData;
  level: string;
  duration: string;
  intensity: string;
  href?: string;
}
export type YogaClass = FeatureTopic;

export interface ScheduleItem {
  time: string;
  period: 'am' | 'pm';
  className: string;
  instructor: string;
  duration: string;
  level?: string;
  bookingUrl?: string;
}

export interface ScheduleDay {
  short: string;
  name: string;
  classes: ScheduleItem[];
}

export interface Coach {
  name: string;
  role: string;
  bio?: string;
  image: ImageData;
  socials: SocialLink[];
}

export interface FocusArea {
  title: string;
  description: string;
  spot: string;
  x: string;
  y: string;
}

export interface VisitStep {
  title: string;
  description: string;
}

export interface PricingPlan {
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: string[];
  featured?: boolean;
  badge?: string;
  ctaLabel: string;
  ctaUrl: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  image: ImageData;
}

export interface GalleryImage extends ImageData {
  caption?: string;
  href?: string;
}

export interface SpecialHighlight {
  title: string;
  description: string;
  date: string;
  location: string;
  image: ImageData;
  price: string;
  ctaLabel: string;
  bookingUrl: string;
}
export type Retreat = SpecialHighlight;

export interface FAQ {
  question: string;
  answer: string;
}
