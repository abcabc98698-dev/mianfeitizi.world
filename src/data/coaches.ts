import type { Coach } from '../types';

export const coaches: Coach[] = [
  {
    name: 'TOP 1 · 光速云 (Guangsuyun)',
    role: '2020老牌 IEPL+VLESS · 99元/年(8元/月) & 147元永久包 · 9折码 AMM',
    bio: '运营满 6 年的头号主力机场，覆盖港台日新美韩英土阿 10+ 地区，兼具百元年付小包与永久不过期套餐，实测晚高峰 4K 与 AI 表现顶尖。',
    image: {
      src: '/media/instructors/instructor-maya-collins-hatha.webp',
      alt: 'TOP 1 光速云机场 — 2020老牌 IEPL 专线与 VLESS 协议首选',
    },
    socials: [
      { label: '查看光速云深度评测与实测图', href: '/brands/guangsuyun/', icon: 'globe' },
      { label: '在对比表中查看光速云参数', href: '/#timetable', icon: 'calendar' },
    ],
  },
  {
    name: 'TOP 2 · 微风网络 (BreezeNet)',
    role: '全节点 10Gbps IEPL+VLESS · 清风137元/年(100GB/月) · 9折码 flat888',
    bio: '全套餐共享同一套 10Gbps IEPL 专线节点池且不限制同时在线设备数，提供 137元/年、27元/月及 200元/270GB 不限时流量包。',
    image: {
      src: '/media/instructors/instructor-arjun-mehta-vinyasa.webp',
      alt: 'TOP 2 微风网络机场 — 全节点 10Gbps IEPL 专线不限设备数',
    },
    socials: [
      { label: '查看微风网络深度评测', href: '/brands/weifeng/', icon: 'globe' },
      { label: '在对比表中查看微风网络', href: '/#timetable', icon: 'calendar' },
    ],
  },
  {
    name: 'TOP 3 · 暮光加速 (Twilight)',
    role: 'BGP智能调度+专线出口 · 109元/年 & 4档不限时包 · 88折码 muguang5555',
    bio: '罕见提供 88 折专属优惠码（muguang5555），基础月付折后仅 17.6 元，更有 200GB 至 2000GB 四档永久不限时流量包可选。',
    image: {
      src: '/media/instructors/instructor-sofia-lindqvist-breathwork.webp',
      alt: 'TOP 3 暮光加速机场 — 88折优惠码与大容量不限时流量包',
    },
    socials: [
      { label: '查看暮光加速深度评测', href: '/brands/muguang/', icon: 'globe' },
      { label: '在对比表中查看暮光加速', href: '/#timetable', icon: 'calendar' },
    ],
  },
  {
    name: 'TOP 4 · 飞猫云 (FlyCat)',
    role: '自研专属客户端免配置 · 学生版84元/年(折后6.3元/月) · 9折码 flycat888',
    bio: '专为怕麻烦的新手与学生党打造：既提供一键登录的自研客户端，也支持 Clash 订阅，学生年付折后每月仅约 6.3 元。',
    image: {
      src: '/media/instructors/instructor-walter-greene-yin.webp',
      alt: 'TOP 4 飞猫云机场 — 自研一键客户端与 84 元/年学生特惠',
    },
    socials: [
      { label: '查看飞猫云深度评测', href: '/brands/feimao/', icon: 'globe' },
      { label: '在对比表中查看飞猫云', href: '/#timetable', icon: 'calendar' },
    ],
  },
];
