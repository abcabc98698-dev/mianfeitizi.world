import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const origin = site ? site.href.replace(/\/$/, '') : 'https://mianfeitizi.world';

  const robots = `# ========================================================
# 免费梯子 (mianfeitizi.world) 搜索引擎爬虫协议
# 生产环境正式配置 · 确保全球主流引擎与国内爬虫高效索引
# ========================================================

User-agent: *
Allow: /
Disallow: /404.html
Disallow: /404/

# Google 搜索引擎爬虫
User-agent: Googlebot
Allow: /

# Bing 搜索引擎爬虫
User-agent: bingbot
Allow: /

# 百度搜索引擎爬虫
User-agent: Baiduspider
Allow: /

# 神马搜索 / UC / 夸克浏览器爬虫
User-agent: yisouspider
Allow: /

# 360 搜索爬虫
User-agent: 360Spider
Allow: /

# 搜狗搜索爬虫
User-agent: Sogou web spider
Allow: /

# XML Sitemap 声明 (提供主入口与备用索引)
Sitemap: ${origin}/sitemap.xml
Sitemap: ${origin}/sitemap-index.xml
`;

  return new Response(robots, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
