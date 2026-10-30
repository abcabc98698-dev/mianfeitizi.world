import type { FooterColumn, NavigationItem } from '../types';

export const primaryNav: NavigationItem[] = [
  { label: '首页', href: '/' },
  { label: '42家机场库', href: '/brands/' },
  { label: '免费资源专题', href: '/free-nodes/' },
  { label: '机场FAQ百科', href: '/faq/' },
  { label: '跑路预警雷达', href: '/runaway-watch/' },
  { label: '客户端大全', href: '/clients/' },
  { label: '深度评测', href: '/journal/' },
];

export const headerActions = {
  schedule: { label: 'TOP 1 光速云', ariaLabel: '查看年度首选推荐：光速云机场详细评测', href: '/brands/guangsuyun/' },
  memberships: { ariaLabel: '查看全部 42 家机场套餐与优惠码', href: '/brands/' },
};

export const footerColumns: FooterColumn[] = [
  {
    title: '核心导航与万字专题矩阵',
    links: [
      { label: '42家机场全景评测库', href: '/brands/' },
      { label: '免费梯子与全球免费资源箱', href: '/free-nodes/' },
      { label: '机场百科全书级 FAQ 中心', href: '/faq/' },
      { label: '机场跑路预警与风控雷达', href: '/runaway-watch/' },
      { label: '全平台代理客户端下载', href: '/clients/' },
      { label: '深度评测与防跑路教程', href: '/journal/' },
    ],
  },
  {
    title: 'Top 主推品牌档案',
    links: [
      { label: 'TOP 1 · 光速云 (99元/年 IEPL)', href: '/brands/guangsuyun/' },
      { label: 'TOP 2 · 微风网络 (10Gbps 专线)', href: '/brands/weifeng/' },
      { label: 'TOP 3 · 暮光加速 (88折+不限时)', href: '/brands/muguang/' },
      { label: 'TOP 4 · 飞猫云 (84元/年+客户端)', href: '/brands/feimao/' },
      { label: 'TOP 5 · 大佬云 (5.6元/月 VLESS)', href: '/brands/dalaoyun/' },
      { label: 'TOP 6 · 星岛梦 (2020老牌专线)', href: '/brands/xingdaomeng/' },
    ],
  },
];

export const legalNav: NavigationItem[] = [
  { label: '42家机场名录', href: '/brands/' },
  { label: '免费资源中心', href: '/free-nodes/' },
  { label: '机场FAQ百科', href: '/faq/' },
  { label: '跑路预警雷达', href: '/runaway-watch/' },
  { label: '客户端下载', href: '/clients/' },
  { label: '商务与纠错反馈', href: '/contact/' },
];
