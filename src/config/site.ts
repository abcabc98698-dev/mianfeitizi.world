import type { SiteConfig } from '../types';

export const site: SiteConfig = {
  name: '免费梯子 · MianFeiTiZi.World',
  logoText: 'mianfeitizi',
  tagline: '2026 免费梯子避坑指南、42家专线机场实测与全平台代理客户端导航',
  description:
    '免费梯子（mianfeitizi.world）专注 2026 科学上网节点评测、免费梯子风险甄别与百元内高性价比 IEPL 专线机场推荐。收录光速云、微风网络、暮光加速、飞猫云等 42 家机场真实测速图档、优惠码及 Clash / Shadowrocket / v2rayN 全平台客户端教程。',
  footerAbout:
    '独立客观的科学上网与跨境网络评测实验室。严格区分 2026 实测节点图档与品牌官方资料，助您避开高风险伪免费陷阱，用最低成本获得稳定的 IEPL/IPLC 专线体验。',
  lang: 'zh-CN',
  locale: 'zh_CN',

  contact: {
    email: 'hello@mianfeitizi.world',
    phone: '+852 3008-5688',
    phoneHref: '+85230085688',
    address: {
      street: '亚洲跨境网络测速实验室 · 珠海联通5G/9G测试后端',
      locality: 'Hong Kong & Zhuhai',
      region: 'APAC',
      postalCode: '999077',
      country: 'CN',
    },
  },

  hours: [
    {
      label: '节点连通巡检',
      hours: '每日 00:00 至 24:00 自动监测',
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '00:00',
      closes: '23:59',
    },
    { label: '晚高峰压力抽测', hours: '20:00 至 23:00 (UTC+8)', days: ['Saturday'], opens: '20:00', closes: '23:00' },
    { label: '优惠码与价格核验', hours: '每周定期复核更新', days: ['Sunday'], opens: '09:00', closes: '21:00' },
  ],

  socials: [
    { label: '42家机场评测库', href: '/brands/', icon: 'globe' },
    { label: '免费梯子与平替专题', href: '/free-nodes/', icon: 'play' },
    { label: '全平台客户端大全', href: '/clients/', icon: 'camera' },
    { label: '提交收录与纠错', href: '/contact/', icon: 'chat' },
  ],

  bookingUrl: '/brands/guangsuyun/',

  forms: {
    contactAction: '',
    newsletterAction: '',
  },

  seo: {
    defaultTitle: '免费梯子 (mianfeitizi.world) | 2026科学上网指南、42家IEPL专线机场实测与客户端下载',
    titleSeparator: '|',
    ogImage: '/media/brand/social-share-cover.jpg',
    ogImageAlt: '免费梯子 mianfeitizi.world — 42家专线机场实测与代理客户端导航',
    twitterHandle: '',
    themeColor: '#F5F4F1',
  },

  copyright: 'mianfeitizi.world (免费梯子评测实验室). 保留所有权利。站内含推广链接，不影响用户购买价格。',
};
