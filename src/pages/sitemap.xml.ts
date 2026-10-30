import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const origin = site ? site.href.replace(/\/$/, '') : 'https://mianfeitizi.world';

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${origin}/sitemap-0.xml</loc>
  </sitemap>
</sitemapindex>
`;

  return new Response(xml.trim(), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'X-Robots-Tag': 'noindex',
    },
  });
};
