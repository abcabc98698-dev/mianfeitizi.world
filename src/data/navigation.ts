import type { FooterColumn, NavigationItem } from '../types';

export const primaryNav: NavigationItem[] = [
  { label: '首页', href: '/' },
  { label: 'VPN指南', href: '/vpn/' },
  { label: '机场推荐', href: '/jichang/' },
  { label: 'Clash配置', href: '/clash/' },
  { label: '节点测速', href: '/nodes/' },
  { label: '梯子避坑', href: '/tizi/' },
  { label: '免费资源', href: '/free/' },
  { label: '使用教程', href: '/tutorial/' },
  { label: '42家品牌库', href: '/brands/' },
];

export const headerActions = {
  schedule: { label: 'TOP 1 光速云', ariaLabel: '查看年度首选推荐：光速云机场详细评测', href: '/brands/guangsuyun/' },
  memberships: { ariaLabel: '查看全部 42 家机场套餐与优惠码', href: '/brands/' },
};

export const footerColumns: FooterColumn[] = [
  {
    title: '八大核心栏目索引',
    links: [
      { label: 'VPN 科学上网全景指南', href: '/vpn/' },
      { label: '2026 高速专线机场推荐', href: '/jichang/' },
      { label: 'Clash 规则与客户端配置', href: '/clash/' },
      { label: '海外落地节点测速与选型', href: '/nodes/' },
      { label: '防跑路梯子选型与避坑雷达', href: '/tizi/' },
      { label: '免费梯子与出海免费资源箱', href: '/free/' },
      { label: '科学上网与客户端小白教程', href: '/tutorial/' },
      { label: '42 家专线机场全景评测库', href: '/brands/' },
    ],
  },
  {
    title: '深度专题与工具矩阵',
    links: [
      { label: '机场百科全书级 FAQ 中心', href: '/faq/' },
      { label: '机场跑路预警与防失联雷达', href: '/runaway-watch/' },
      { label: '全平台代理客户端下载大全', href: '/clients/' },
      { label: '深度技术评测与协议专栏', href: '/journal/' },
      { label: '评测实验室与联系方式', href: '/contact/' },
    ],
  },
  {
    title: 'Top 6 年度主力专线品牌',
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
  { label: '免费资源中心', href: '/free/' },
  { label: '机场FAQ百科', href: '/faq/' },
  { label: '跑路预警雷达', href: '/runaway-watch/' },
  { label: '客户端下载', href: '/clients/' },
  { label: '商务与纠错反馈', href: '/contact/' },
];
