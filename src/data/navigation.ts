import type { FooterColumn, NavigationItem } from '../types';

export const primaryNav: NavigationItem[] = [
  { label: '首页', href: '/' },
  { label: '42家机场库', href: '/brands/' },
  { label: '免费梯子专题', href: '/free-nodes/' },
  { label: '客户端大全', href: '/clients/' },
  { label: '速查对比表', href: '/#timetable' },
  { label: '深度评测专栏', href: '/journal/' },
];

export const headerActions = {
  schedule: { label: 'TOP 1 光速云', ariaLabel: '查看年度首选推荐：光速云机场详细评测', href: '/brands/guangsuyun/' },
  memberships: { ariaLabel: '查看全部 42 家机场套餐与优惠码', href: '/brands/' },
};

export const footerColumns: FooterColumn[] = [
  {
    title: '核心导航与专题',
    links: [
      { label: '42家机场全景评测库', href: '/brands/' },
      { label: '免费梯子真相与平价替代', href: '/free-nodes/' },
      { label: '全平台代理客户端下载', href: '/clients/' },
      { label: 'Top 10 主力机场对比表', href: '/#timetable' },
      { label: '深度评测与防跑路教程', href: '/journal/' },
      { label: '常见问题 (GEO FAQ)', href: '/#common-questions' },
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
  { label: '42家机场完整名录', href: '/brands/' },
  { label: '代理客户端下载', href: '/clients/' },
  { label: '深度评测专栏', href: '/journal/' },
  { label: '商务与纠错反馈', href: '/contact/' },
];
