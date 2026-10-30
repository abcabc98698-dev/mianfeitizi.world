import { site } from '../config/site';
import { classes } from '../data/classes';
import { faqs } from '../data/faq';
import { absoluteUrl } from './url';

type Json = Record<string, unknown>;

export function websiteSchema(siteUrl: URL | undefined): Json {
  const rootUrl = absoluteUrl('/', siteUrl);
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${rootUrl}#website`,
    name: site.name,
    description: site.description,
    url: rootUrl,
    inLanguage: site.lang,
    publisher: {
      '@type': 'Organization',
      name: site.name,
      url: rootUrl,
      logo: {
        '@type': 'ImageObject',
        url: absoluteUrl('/favicon.svg', siteUrl),
      },
    },
  };
}

export function businessSchema(siteUrl: URL | undefined): Json {
  const { contact } = site;
  const rootUrl = absoluteUrl('/', siteUrl);
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${rootUrl}#organization`,
    name: site.name,
    description: site.description,
    url: rootUrl,
    image: absoluteUrl(site.seo.ogImage, siteUrl),
    email: contact.email,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: '2026 科学上网专线机场与客户端评测矩阵',
      itemListElement: classes.map((c) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: c.title,
          description: c.description,
        },
      })),
    },
  };
}

export function faqPageSchema(customFaqs?: Array<{ question: string; answer: string }>): Json {
  const list = customFaqs ?? faqs;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: list.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function itemListSchema(
  title: string,
  description: string,
  items: Array<{ name: string; url: string; description?: string; position?: number }>,
  siteUrl: URL | undefined,
): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: title,
    description,
    numberOfItems: items.length,
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: item.position ?? idx + 1,
      name: item.name,
      description: item.description,
      url: absoluteUrl(item.url, siteUrl),
    })),
  };
}

export function breadcrumbSchema(items: Array<{ name: string; href: string }>, siteUrl: URL | undefined): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.href, siteUrl),
    })),
  };
}

export function blogPostingSchema(
  post: {
    title: string;
    description: string;
    image: string;
    author: string;
    category?: string;
    tags?: string[];
    minutes?: number;
    pubDate: Date;
    updatedDate?: Date;
    path: string;
  },
  siteUrl: URL | undefined,
): Json {
  const rootUrl = absoluteUrl('/', siteUrl);
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: absoluteUrl(post.image, siteUrl),
    datePublished: post.pubDate.toISOString(),
    dateModified: (post.updatedDate ?? post.pubDate).toISOString(),
    ...(post.category ? { articleSection: post.category } : {}),
    ...(post.tags && post.tags.length > 0 ? { keywords: post.tags.join(', ') } : {}),
    ...(post.minutes ? { timeRequired: `PT${post.minutes}M` } : {}),
    author: { '@type': 'Organization', name: post.author },
    publisher: {
      '@type': 'Organization',
      name: site.name,
      url: rootUrl,
      logo: {
        '@type': 'ImageObject',
        url: absoluteUrl('/favicon.svg', siteUrl),
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': absoluteUrl(post.path, siteUrl),
    },
    inLanguage: site.lang,
  };
}
