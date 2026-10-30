import type { PricingPlan } from '../types';

export const pricing = {
  currency: '¥',
  monthlyLabel: '/ 月（支持9折码 AMM）',
  yearlyLabel: '/ 月（按年付或买断折算）',
  yearlySavings: '年付立省 60%+',
};

export const plans: PricingPlan[] = [
  {
    name: '轻量入门年付档（光速云轻量版）',
    description: '替代高风险免费梯子的最佳百元内真专线方案（99元/年）。',
    monthlyPrice: 12,
    yearlyPrice: 8,
    features: [
      '年付仅 ¥99/年（折合每月约 ¥8.25，用码 AMM 享 9 折）',
      '每月 69 GB 企业级 IEPL 内网专线流量',
      '新一代 VLESS 抗封锁协议，不限制峰值速率',
      '共享港、台、日、新、美、英、土、阿 10+ 地区完整节点池',
    ],
    ctaLabel: '查看光速云 99元/年详情',
    ctaUrl: '/brands/guangsuyun/',
  },
  {
    name: '极速主力全能档（光速云极速/流光）',
    description: '适合日常高频使用 ChatGPT/Claude 与 4K 流媒体的主力套餐。',
    monthlyPrice: 25,
    yearlyPrice: 20,
    features: [
      '极速版 ¥25/月（168GB）｜流光版 ¥34/月（238GB）',
      '结账输入专属优惠码 AMM 立即享 9 折（到手 ¥22.5/月起）',
      '全节点 IEPL 物理专线过境，晚高峰 4K 视频零缓冲',
      '原生解锁 Netflix、Disney+、YouTube 4K 与 OpenAI / Claude',
      '兼容 Clash Verge Rev、FlClash、v2rayN 与小火箭一键导入',
    ],
    featured: true,
    badge: '80% 用户主力首选',
    ctaLabel: '获取 AMM 优惠码并评测',
    ctaUrl: '/brands/guangsuyun/',
  },
  {
    name: '永久不限时 / 团队旗舰档',
    description: '一次买断永不过期（147元/247GB）或 500GB–1200GB 重度包。',
    monthlyPrice: 68,
    yearlyPrice: 49,
    features: [
      '致敬斯诺克147永久套餐：¥147 一次性买断 247GB 永不过期',
      '量子版 ¥68/月（500GB）｜微风破风 ¥57/月（500GB 不限设备）',
      '暮光加速提供 200GB 至 2000GB 四档永久不限时包（88折码 muguang5555）',
      '支持 OpenWrt 软路由全家共享与多终端工作室并发',
    ],
    ctaLabel: '对比全部 42 家套餐',
    ctaUrl: '/brands/',
  },
];
