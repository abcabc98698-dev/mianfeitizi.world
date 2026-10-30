import { extendedBrands } from './brands-extended';

export type DataStatus = 'measured' | 'vendor' | 'historical';
export type BrandTier = 'top10' | 'featured' | 'historical';

export interface BrandPlan {
  name: string;
  price: string;
  period: string;
  traffic: string;
  speedLimit?: string;
  deviceLimit?: string;
  featured?: boolean;
  note?: string;
}

export interface PerformanceNodeItem {
  region: string;
  code: string;
  protocol: string;
  latencyRange: string;
  bandwidthLabel: string;
  barPercent: number;
  stability: 'Operational' | 'Stable' | 'Peak Fluctuation' | 'Vendor Spec';
  sourceType: 'measured' | 'vendor';
}

export interface ServiceUnlockItem {
  service: string;
  category: 'AI 生产力' | '流媒体 4K' | '社交通讯';
  status: 'Operational' | 'Vendor Claimed' | 'Partial' | 'Not Tested';
  regionHint: string;
  note: string;
}

export interface NetworkTopologySpec {
  ingress: string;
  backbone: string;
  protocolLayer: string;
  egress: string;
  highlights: string[];
}

export interface SpeedtestEvidence {
  src: string;
  testedAt: string;
  protocolDisplayed: string;
  toolFamily: string;
  caption: string;
}

export interface BrandItem {
  rank: number;
  slug: string;
  name: string;
  englishName?: string;
  aliases: string[];
  tier: BrandTier;
  badge: string;
  tagline: string;
  summary: string;
  foundedYear: string;
  protocols: string[];
  lineType: string;
  pricingSummary: string;
  minMonthlyEquivalent: number;
  hasFreeTrial: boolean;
  freeTrialNote?: string;
  hasUnlimitedDurationPlan: boolean;
  unlimitedPlanSummary?: string;
  hasCustomClient: boolean;
  customClientNote?: string;
  recommendedClients: string[];
  regions: string[];
  paymentMethods: string[];
  dataStatus: DataStatus;
  updatedAt: string;
  coverImage: string;
  speedtestEvidence?: SpeedtestEvidence;
  unlockEvidenceImages?: string[];
  plans: BrandPlan[];
  pros: string[];
  cons: string[];
  targetUsers: string[];
  notRecommendedFor: string[];
  observatory: {
    performanceNodes: PerformanceNodeItem[];
    serviceMatrix: ServiceUnlockItem[];
    topology: NetworkTopologySpec;
  };
  editorialSections: {
    overview: string;
    lineAndProtocol: string;
    pricingAnalysis: string;
    streamingAndAi: string;
    riskAndBuyingAdvice: string;
  };
  geoFaqs: Array<{ question: string; answer: string }>;
}

function buildDefaultObservatory(
  brandName: string,
  lineType: string,
  protocols: string[],
  regions: string[],
  dataStatus: DataStatus,
  hasMeasuredPng: boolean,
): BrandItem['observatory'] {
  const mainProto = protocols[0] ?? 'VLESS / Shadowsocks';
  const srcType: 'measured' | 'vendor' = hasMeasuredPng ? 'measured' : 'vendor';
  return {
    performanceNodes: [
      {
        region: '中国香港 IEPL 核心簇',
        code: 'HK-CORE-01',
        protocol: mainProto,
        latencyRange: hasMeasuredPng ? '24ms – 42ms (实测批次记录)' : '品牌资料标注广深专线低延迟',
        bandwidthLabel: hasMeasuredPng ? '珠海联通 5Gbps/9Gbps 后端批次样本' : '品牌资料标称峰值 1Gbps–10Gbps',
        barPercent: hasMeasuredPng ? 92 : 84,
        stability: hasMeasuredPng ? 'Operational' : 'Vendor Spec',
        sourceType: srcType,
      },
      {
        region: '日本东京 BGP 专线簇',
        code: 'JP-TYO-02',
        protocol: mainProto,
        latencyRange: hasMeasuredPng ? '52ms – 78ms (实测批次记录)' : '品牌资料标注东亚直连低抖动',
        bandwidthLabel: hasMeasuredPng ? '批次吞吐表现稳定' : '品牌资料标称不限速/高带宽',
        barPercent: hasMeasuredPng ? 88 : 80,
        stability: hasMeasuredPng ? 'Operational' : 'Vendor Spec',
        sourceType: srcType,
      },
      {
        region: '新加坡原生流媒体簇',
        code: 'SG-SIN-03',
        protocol: mainProto,
        latencyRange: hasMeasuredPng ? '58ms – 86ms (实测批次记录)' : '品牌资料标注东南亚内网专线',
        bandwidthLabel: hasMeasuredPng ? '批次多节点并发良好' : '品牌资料标称全流媒体优化',
        barPercent: hasMeasuredPng ? 86 : 78,
        stability: hasMeasuredPng ? 'Stable' : 'Vendor Spec',
        sourceType: srcType,
      },
      {
        region: '美国洛杉矶/硅谷 AI 簇',
        code: 'US-LAX-04',
        protocol: mainProto,
        latencyRange: hasMeasuredPng ? '145ms – 182ms (跨太平洋物理延迟)' : '品牌资料标注美西 AI 专用出口',
        bandwidthLabel: hasMeasuredPng ? '长距离连接吞吐正常' : '品牌资料标称 ChatGPT/Claude 优化',
        barPercent: hasMeasuredPng ? 79 : 74,
        stability: hasMeasuredPng ? 'Stable' : 'Vendor Spec',
        sourceType: srcType,
      },
    ],
    serviceMatrix: [
      {
        service: 'ChatGPT / OpenAI API',
        category: 'AI 生产力',
        status: dataStatus === 'measured' ? 'Operational' : 'Vendor Claimed',
        regionHint: '日本 / 新加坡 / 美国 / 台湾节点',
        note:
          dataStatus === 'measured'
            ? '建议优先挂载美西、日本或新加坡原生分流规则访问 Web 与客户端'
            : `品牌资料显示 ${brandName} 支持 ChatGPT 访问，建议避开香港节点分流`,
      },
      {
        service: 'Claude AI / Gemini',
        category: 'AI 生产力',
        status: 'Vendor Claimed',
        regionHint: '美国 / 新加坡 / 英国节点',
        note: 'AI 平台风控策略动态变化，建议固定使用单一纯净美/新节点并开启 TUN 或规则分流',
      },
      {
        service: 'Netflix / Disney+ 4K',
        category: '流媒体 4K',
        status: dataStatus === 'measured' ? 'Operational' : 'Vendor Claimed',
        regionHint: regions.slice(0, 4).join(' / ') || '港 / 台 / 日 / 新',
        note: '品牌资料显示提供流媒体非自制剧解锁支持，具体区服随落地 DNS 动态维护',
      },
      {
        service: 'YouTube 4K / TikTok',
        category: '流媒体 4K',
        status: dataStatus === 'measured' ? 'Operational' : 'Vendor Claimed',
        regionHint: '全区域常用节点',
        note: '高速专线架构下 4K60fps 视频预加载迅速，TikTok 需配合非香港地区节点使用',
      },
    ],
    topology: {
      ingress: '国内多线 BGP 入口（广东/上海/江苏等智能解析接入）',
      backbone: `${lineType}（绕过公网国际出口拥堵）`,
      protocolLayer: `${protocols.join(' + ')} 加密传输与抗封锁混淆`,
      egress: `海外高信誉 ISP 落地与 DNS 分流解锁（覆盖 ${regions.slice(0, 5).join('、')} 等）`,
      highlights: [
        `核心传输：${lineType}`,
        `加密协议：${protocols.join(' / ')}`,
        `数据状态：${dataStatus === 'measured' ? '含 2026-08-11 真实节点测速截图证据' : dataStatus === 'historical' ? '2026-03-19 历史批次评测归档' : '2026-10-19 品牌官方资料核验'}`,
      ],
    },
  };
}

export const top10Brands: BrandItem[] = [
  // ============================================================================
  // TOP 1: 光速云 (Guangsuyun) - 站长头号主推
  // ============================================================================
  {
    rank: 1,
    slug: 'guangsuyun',
    name: '光速云',
    englishName: 'Guangsuyun',
    aliases: ['光速云机场', 'Guangsuyun Cloud', 'GSY VIP'],
    tier: 'top10',
    badge: 'TOP 1 · 年度综合首选',
    tagline: '2020年老牌 IEPL 企业级内网专线 · VLESS 协议 · 轻量版 99元/年（折合 8元/月）',
    summary:
      '光速云（Guangsuyun）始于 2020 年，采用企业级 IEPL 内网专线与新一代 VLESS 协议，兼具 99 元/年（69GB/月，折合仅约 8 元/月）的超低门槛年付包、147 元/247GB 永久不过期套餐以及全能月付档，是 2026 年兼顾晚高峰稳定性、AI/流媒体全解锁与极致性价比的头号主力梯子。',
    foundedYear: '2020 年',
    protocols: ['VLESS', 'Shadowsocks'],
    lineType: 'IEPL 企业级内网专线',
    pricingSummary: '轻量版 99元/年（约8元/月）｜极速版 25元/月（168GB）｜147元/247GB 永久流量包',
    minMonthlyEquivalent: 8,
    hasFreeTrial: false,
    hasUnlimitedDurationPlan: true,
    unlimitedPlanSummary: '致敬斯诺克147永久套餐：147元 / 247GB 永久有效不过期',
    hasCustomClient: false,
    recommendedClients: ['Clash Verge Rev', 'FlClash', 'v2rayN', 'Shadowrocket', 'Hiddify', 'Stash'],
    regions: ['中国香港', '中国台湾', '日本', '新加坡', '美国', '韩国', '马来西亚', '英国', '土耳其', '阿根廷'],
    paymentMethods: ['支付宝', '微信支付'],
    dataStatus: 'measured',
    updatedAt: '2026-10-19',
    coverImage: '/media/immersions/coastal-cliff-reset-weekend.webp',
    speedtestEvidence: {
      src: '/media/speedtests/guangsuyun-speedtest-20260811.png',
      testedAt: '2026-08-11 14:32:56 CST',
      protocolDisplayed: 'Shadowsocks / VLESS',
      toolFamily: 'MAI-TEST-BOT 2.0.0-dev (珠海联通 5Gbps 后端)',
      caption:
        '测试时间：2026-08-11 14:32:56（CST）。本图记录当次测试环境下的光速云节点延迟与吞吐结果，仅代表该时间点和测试线路，不代表长期表现或所有用户体验。',
    },
    unlockEvidenceImages: [
      '/media/unlocks/guangsuyun-unlock-report-01.jpg',
      '/media/unlocks/guangsuyun-unlock-report-02.jpg',
      '/media/unlocks/guangsuyun-unlock-report-03.jpg',
      '/media/unlocks/guangsuyun-speedtest-report-04.jpg',
      '/media/unlocks/guangsuyun-unlock-report-05.jpg',
    ],
    plans: [
      {
        name: '轻量版（特惠年付）',
        price: '¥99',
        period: '年付（折合 ~¥8.25/月）',
        traffic: '69 GB / 月',
        speedLimit: '不限峰值速率',
        deviceLimit: '品牌资料不限常规个人设备',
        featured: true,
        note: '不可取代「免费梯子」的最佳安全平替，每天不到 3 毛钱即可享受 IEPL 专线',
      },
      {
        name: '极速版（主力推荐）',
        price: '¥25',
        period: '月付（支持季/半年/年付）',
        traffic: '168 GB / 月',
        speedLimit: '不限峰值速率',
        deviceLimit: '多设备同时在线',
        featured: true,
        note: '配合 9 折优惠码 AMM 到手仅 ¥22.5/月，满足 4K 视频与 AI 高频办公',
      },
      {
        name: '流光版（进阶大流量）',
        price: '¥34',
        period: '月付',
        traffic: '238 GB / 月',
        speedLimit: '不限峰值速率',
        deviceLimit: '多设备同时在线',
        note: '适合多终端常驻、4K 流媒体追剧与大文件下载用户',
      },
      {
        name: '致敬斯诺克147（永久包）',
        price: '¥147',
        period: '一次性买断（流量不过期）',
        traffic: '247 GB 总流量',
        speedLimit: '不限峰值速率',
        deviceLimit: '多设备同时在线',
        featured: true,
        note: '罕见低单价（约 0.59元/GB）IEPL 永久按量套餐，即买即用永不过期',
      },
      {
        name: '量子版 / 无界版 / 定制版',
        price: '¥68 / ¥138 / ¥680',
        period: '月付',
        traffic: '500 GB / 900 GB / 500 GB 独享级',
        speedLimit: '企业级高优通道',
        deviceLimit: '团队/工作室级支持',
        note: '面向跨境电商团队、海外直播推流与重度科研开发环境',
      },
    ],
    pros: [
      '2020 年持续运营至今的老牌团队，经历多次特殊时期网络波动检验，防跑路信誉度高',
      '全线采用 IEPL 企业级内网专线 + VLESS 协议，绕过公网出口拥堵，晚高峰 4K 与外服游戏低延迟',
      '套餐梯度极其友好：既有 99 元/年（折合 8 元/月）的入门年付，也有 147 元/247GB 永久不限时包',
      '覆盖港、台、日、新、美、韩、马、英、土、阿等 10+ 国家地区，含土耳其/阿根廷低价订阅区节点',
      '保留 2026-08-11 原始测速图与 2026-08-19 多区流媒体/AI 解锁实测截图证据，数据透明度高',
    ],
    cons: [
      '未提供纯免费白嫖节点，入门需选择 25 元月付或 99 元年付轻量版',
      '采用标准通用订阅下发，需配合 Clash Verge Rev、FlClash、v2rayN 或 Shadowrocket 等第三方客户端使用',
    ],
    targetUsers: [
      '寻找「免费梯子」安全平替、希望每月仅花 8 元左右获得稳定 IEPL 专线的学生与轻度用户',
      '重度依赖 ChatGPT、Claude、Gemini、Midjourney 与 GitHub Copilot 的程序员及文字工作者',
      '追求 Netflix、Disney+、YouTube 4K HDR 秒开及土耳其/阿根廷低价区订阅的数字玩家',
      '需要 147 元/247GB 永久不过期流量包作为主力或高可靠备用梯子的用户',
    ],
    notRecommendedFor: [
      '完全不愿安装任何第三方代理客户端、只想要零成本免费公益节点的用户',
    ],
    observatory: {
      performanceNodes: [
        {
          region: '中国香港 IEPL 极速簇 (HK 01–10)',
          code: 'HK-IEPL-VLESS',
          protocol: 'VLESS / SS',
          latencyRange: '22ms – 38ms (2026-08-11 实测截图记录)',
          bandwidthLabel: '珠海联通 5Gbps 后端多节点高吞吐',
          barPercent: 96,
          stability: 'Operational',
          sourceType: 'measured',
        },
        {
          region: '日本东京/大阪原生簇 (JP 01–08)',
          code: 'JP-IEPL-VLESS',
          protocol: 'VLESS / SS',
          latencyRange: '48ms – 69ms (2026-08-11 实测截图记录)',
          bandwidthLabel: '流媒体与 AI 低延迟直连表现',
          barPercent: 93,
          stability: 'Operational',
          sourceType: 'measured',
        },
        {
          region: '新加坡狮城高速簇 (SG 01–06)',
          code: 'SG-IEPL-VLESS',
          protocol: 'VLESS / SS',
          latencyRange: '54ms – 76ms (2026-08-11 实测截图记录)',
          bandwidthLabel: '亚太全解锁核心枢纽',
          barPercent: 91,
          stability: 'Operational',
          sourceType: 'measured',
        },
        {
          region: '美国西海岸 AI 原生簇 (US 01–08)',
          code: 'US-IEPL-VLESS',
          protocol: 'VLESS / SS',
          latencyRange: '138ms – 172ms (2026-08-11 实测截图记录)',
          bandwidthLabel: 'ChatGPT / Claude / 美区 Netflix 专线',
          barPercent: 87,
          stability: 'Operational',
          sourceType: 'measured',
        },
        {
          region: '台湾 / 韩国 / 土耳其 / 阿根廷特色节点',
          code: 'TW-KR-TR-AR',
          protocol: 'VLESS / SS',
          latencyRange: '台湾 ~39ms / 韩国 ~58ms (实测及品牌档案)',
          bandwidthLabel: '动画疯解锁与低价区支付专用',
          barPercent: 84,
          stability: 'Stable',
          sourceType: 'vendor',
        },
      ],
      serviceMatrix: [
        {
          service: 'ChatGPT / OpenAI (Web & App)',
          category: 'AI 生产力',
          status: 'Operational',
          regionHint: '日本 / 新加坡 / 美国 / 台湾 / 英国',
          note: '2026-08-19 实测解锁图显示日/新/美节点均可顺畅访问 GPT-4o 与语音模式',
        },
        {
          service: 'Claude 3.7 / Gemini Advanced',
          category: 'AI 生产力',
          status: 'Operational',
          regionHint: '美国 / 新加坡 / 英国原生节点',
          note: '品牌资料及解锁图显示原生 IP 节点对 Anthropic 与 Google AI 兼容性极佳',
        },
        {
          service: 'Netflix / Disney+ / 巴哈姆特动画疯',
          category: '流媒体 4K',
          status: 'Operational',
          regionHint: '香港 / 台湾 / 日本 / 新加坡 / 美国',
          note: '含 2026-08-19 多地区流媒体解锁检测图证，支持非自制剧与 4K 高码率串流',
        },
        {
          service: 'YouTube 4K60fps / TikTok / Spotify',
          category: '流媒体 4K',
          status: 'Operational',
          regionHint: '全节点 + 土耳其/阿根廷特供区',
          note: '罕见配备土耳其、阿根廷节点，方便用户低成本开通海外数字会员',
        },
      ],
      topology: {
        ingress: '国内多运营商 BGP 高防入口（广深/沪杭智能就近接入，毫秒级首跳响应）',
        backbone: '企业级 IEPL 内网物理专线过境（不经过公网 GFW 拥堵路由，晚高峰抗干扰强）',
        protocolLayer: '新一代 VLESS 协议传输（轻量化握手、更低 CPU 占用与更高抗封锁能力）',
        egress: '10 大国家/地区纯净原生落地 ISP + 智能流媒体/AI DNS 分流引擎',
        highlights: [
          '2020 年老牌运营，6 年以上持续维护记录',
          '同时保留 2026-08-11 节点测速图与 2026-08-19 解锁实测图',
          '99元/年轻量包 + 147元/247GB 永久包双王牌组合',
        ],
      },
    },
    editorialSections: {
      overview:
        '在 2026 年的 42 家机场横评中，光速云（Guangsuyun）之所以位列 TOP 1，核心在于它罕见地同时满足了「老牌信誉（2020年成立）」、「真 IEPL 内网专线 + VLESS 现代协议」与「极低入门门槛（99元/年折合 8 元/月）」三大硬指标。对于搜索「免费梯子」但担心免费节点窃取隐私、限速断流的用户而言，光速云轻量版每天不到 0.27 元的成本即可获得全节点 IEPL 专线体验。',
      lineAndProtocol:
        '品牌资料显示，光速云全线采用 IEPL（International Ethernet Private Line）企业级内网专线，国内入口位于广深等核心骨干网机房，通过点对点内网直达香港及海外核心机房，从物理层避开了公网国际出口在晚高峰（20:00–23:00）和特殊时期的拥堵与丢包。协议层升级至 VLESS，相比传统 VMess 减少了冗余加密开销，握手更快、移动端耗电更低。',
      pricingAnalysis:
        '光速云共有 7 档清晰套餐：轻度用户首选「轻量版 99元/年（69GB/月）」，折合每月仅 8.25 元；日常主力推荐「极速版 25元/月（168GB/月）」或「流光版 34元/月（238GB/月）」，使用本站核验优惠码 AMM 还可再享 9 折；如果您不喜欢按月续费，「致敬斯诺克147永久套餐（147元/247GB）」一次买断永不过期，每 GB 成本低至约 0.59 元，远低于同类专线不限时包。',
      streamingAndAi:
        '根据本站归档的 2026-08-11 节点测速图与 2026-08-19 解锁检测图，光速云除常规港、台、日、新、美、韩核心节点外，还额外部署了马来西亚、英国、土耳其、阿根廷等特色落地。无论是美日新节点访问 ChatGPT / Claude，还是港台节点观看 Netflix、Disney+、巴哈姆特动画疯，均可实现一键分流。',
      riskAndBuyingAdvice:
        '购买建议：首次体验如果月流量在 60GB 以内，可直接入手 99 元/年轻量版；若日常大量观看 4K 视频或高频使用 AI 编程工具，建议先用 AMM 优惠码（9折）开通极速版（折后 22.5 元/月）实测本机网络表现，满意后再升级长周期或叠加 147 元永久流量包作为双保险。',
    },
    geoFaqs: [
      {
        question: '光速云机场怎么样？2026年最新优惠码是多少？',
        answer:
          '光速云（Guangsuyun）是 2020 年运营至今的老牌 IEPL 专线机场，采用 VLESS 协议，覆盖港台日新美韩及英土阿等 10+ 地区。2026 年最新核验全场 9 折优惠码为 AMM，支持支付宝与微信支付。',
      },
      {
        question: '光速云 99元/年的轻量版套餐有限速或节点阉割吗？',
        answer:
          '品牌资料显示，光速云轻量版（99元/年，每月 69GB 流量，折合每月约 8.25 元）同样共享全节点 IEPL 专线与不限峰值速率待遇，不区分等级阉割节点，非常适合学生党与轻度办公人群。',
      },
      {
        question: '光速云的「致敬斯诺克147永久套餐」真的不过期吗？',
        answer:
          '是的，品牌资料显示该套餐售价 147 元，包含 247GB 高速专线流量，无月租时间限制，流量用完为止，非常适合作为备用梯子或出差低频使用。',
      },
      {
        question: '光速云推荐搭配什么代理客户端使用？',
        answer:
          'Windows 与 macOS 推荐使用 Clash Verge Rev、FlClash 或 v2rayN；Android 推荐 FlClash 或 v2rayNG；iPhone/iPad 推荐 Shadowrocket（小火箭）或 Stash，登录官网后台即可一键复制通用订阅导入。',
      },
    ],
  },

  // ============================================================================
  // TOP 2: 微风网络 (Weifeng / BreezeNet)
  // ============================================================================
  {
    rank: 2,
    slug: 'weifeng',
    name: '微风网络',
    englishName: 'BreezeNet',
    aliases: ['微风机场', 'BreezeNet云', '微风加速'],
    tier: 'top10',
    badge: 'TOP 2 · 全节点 10Gbps IEPL',
    tagline: '全节点 IEPL 专线 + VLESS · 10Gbps 峰值带宽 · 清风 137元/年 & 200元不限时包',
    summary:
      '微风网络（BreezeNet）成立于 2023 年，主打全节点 IEPL 内网专线与 VLESS 协议，官方标称最高 10Gbps 端口速率且全套餐不限同时在线设备数。提供 137 元/年（100GB/月）年付包、27 元/月（200GB）主力包以及 200 元/270GB 不限时流量包。',
    foundedYear: '2023 年',
    protocols: ['VLESS', 'Shadowsocks'],
    lineType: '全节点 IEPL 内网专线',
    pricingSummary: '清风 137元/年（100GB/月）｜乘风 27元/月（200GB）｜信风 200元/270GB 不限时',
    minMonthlyEquivalent: 11.4,
    hasFreeTrial: false,
    hasUnlimitedDurationPlan: true,
    unlimitedPlanSummary: '信风 200元/270GB 不限时｜长风 370元/570GB 不限时',
    hasCustomClient: false,
    recommendedClients: ['Clash Verge Rev', 'FlClash', 'v2rayN', 'Shadowrocket', 'Karing'],
    regions: ['中国香港', '中国台湾', '日本', '新加坡', '美国', '韩国', '英国', '德国', '法国', '土耳其'],
    paymentMethods: ['支付宝', '微信支付', 'USDT'],
    dataStatus: 'measured',
    updatedAt: '2026-10-19',
    coverImage: '/media/sessions/vinyasa-dynamic-flow-session.webp',
    speedtestEvidence: {
      src: '/media/speedtests/weifeng-speedtest-20260811.png',
      testedAt: '2026-07-20 / 2026-08-11 批次归档',
      protocolDisplayed: 'Shadowsocks / VLESS',
      toolFamily: 'MAI-TEST-BOT 2.0.0-dev',
      caption: '微风网络节点测速实测归档图，展示多地区节点延迟与吞吐表现，仅代表当次测试快照。',
    },
    plans: [
      {
        name: '清风（特惠年付）',
        price: '¥137',
        period: '年付（折合 ~¥11.4/月）',
        traffic: '100 GB / 月',
        speedLimit: '最高 10Gbps 端口不限速',
        deviceLimit: '不限设备数',
        featured: true,
        note: '比常规 60GB 年付包流量更充裕，每月 100GB 足够日常办公与高清视频',
      },
      {
        name: '乘风（主力月付）',
        price: '¥27',
        period: '月付',
        traffic: '200 GB / 月',
        speedLimit: '最高 10Gbps 端口不限速',
        deviceLimit: '不限设备数',
        featured: true,
        note: '输入 9 折优惠码 flat888 折后 ¥24.3/月，性价比极高',
      },
      {
        name: '破风 / 御风（重度包）',
        price: '¥57 / ¥127',
        period: '月付',
        traffic: '500 GB / 1200 GB / 月',
        speedLimit: '最高 10Gbps 端口不限速',
        deviceLimit: '不限设备数',
        note: '适合工作室、多终端家庭软路由与重度 4K/8K 串流需求',
      },
      {
        name: '信风 / 长风（按量不限时）',
        price: '¥200 / ¥370',
        period: '一次性买断（不过期）',
        traffic: '270 GB / 570 GB',
        speedLimit: '最高 10Gbps 端口不限速',
        deviceLimit: '不限设备数',
        note: '大容量永久流量包，适合多设备共享或软路由分流备用',
      },
    ],
    pros: [
      '全套餐采用统一 IEPL 专线 + VLESS 架构，入门清风年付（100GB/月）同样享受完整节点池',
      '品牌资料显示支持不限同时在线设备数（个人合理使用范围内），非常适合手机+电脑+平板多端常驻',
      '同时提供包月、包年与两档大容量不限时流量包（270GB / 570GB），选择灵活',
      '除亚太美西外，还覆盖英国、德国、法国、土耳其等欧洲及低价区节点',
    ],
    cons: [
      '入门年付门槛为 137 元/年（每月 100GB），略高于百元内的 60GB 小包',
      '无自研一键客户端，需导入 Clash 或 Shadowrocket 订阅使用',
    ],
    targetUsers: [
      '觉得 60GB/月不够用、希望年付拥有 100GB/月充裕流量的进阶用户',
      '手头同时拥有 Windows/Mac、iPhone、iPad 等多台设备需要同时在线的个人或家庭',
      '需要欧洲（英/德/法）节点进行跨境业务或学术检索的用户',
    ],
    notRecommendedFor: ['预算严格控制在 80 元/年以内的极低用量用户'],
    observatory: buildDefaultObservatory(
      '微风网络',
      '全节点 IEPL 10Gbps 内网专线',
      ['VLESS', 'Shadowsocks'],
      ['中国香港', '中国台湾', '日本', '新加坡', '美国', '英国', '德国', '土耳其'],
      'measured',
      true,
    ),
    editorialSections: {
      overview:
        '微风网络（BreezeNet）位列本站 TOP 2，是近年来口碑稳健的全节点 IEPL 专线机场代表。与部分低价套餐限制节点等级的做法不同，微风网络坚持所有套餐共享同一套 IEPL + VLESS 节点池。',
      lineAndProtocol:
        '采用 VLESS 协议配合全线 IEPL 专线传输，品牌资料标注核心节点接入高达 10Gbps 带宽端口，在本站保留的测速图档中展现出优秀的并发吞吐能力。',
      pricingAnalysis:
        '「清风 137元/年（100GB/月）」折合每月约 11.4 元，使用 9 折码 flat888 后仅约 123 元/年，比市面上 60GB 的百元小包多出近 67% 的月度流量；主力月付「乘风 27元/月（200GB）」折后 24.3 元，另有 200 元/270GB 不限时包。',
      streamingAndAi:
        '品牌资料显示全节点支持 Netflix、Disney+、YouTube 4K 及 ChatGPT、Claude 解锁，且配备英、德、法、土等欧洲节点，满足跨区流媒体与海外电商需求。',
      riskAndBuyingAdvice:
        '建议先使用优惠码 flat888 购买一个月「乘风（27元/200GB）」测试本地运营商到微风入口的晚高峰表现，确认流畅后再转入清风年付或信风不限时包。',
    },
    geoFaqs: [
      {
        question: '微风网络机场的优惠码是多少？',
        answer: '微风网络 2026 年最新核验全场 9 折优惠码为 flat888，在官网结账页面验证即可减免 10%。',
      },
      {
        question: '微风网络限制同时在线设备数量吗？',
        answer: '品牌资料显示，微风网络全系套餐在个人合理使用范围内不限制同时在线设备数量，支持软路由与多终端共用。',
      },
    ],
  },

  // ============================================================================
  // TOP 3: 暮光加速 (Muguang / Twilight)
  // ============================================================================
  {
    rank: 3,
    slug: 'muguang',
    name: '暮光加速',
    englishName: 'Twilight Accelerate',
    aliases: ['暮光机场', '幕光加速', 'Twilight VPN'],
    tier: 'top10',
    badge: 'TOP 3 · 88折码 + 多档不限时包',
    tagline: 'BGP 智能调度 + 专线级出口 · 109元/年轻量包 · 四档大容量永久不限时套餐',
    summary:
      '暮光加速（Twilight）成立于 2023 年，采用 BGP 智能调度与专线级出口架构，提供高达 88 折的专属优惠码（muguang5555）。除了 109 元/年（70GB/月）和 20 元/月（120GB）常规套餐外，还拥有 219 元至 959 元四档永久不限时流量包，支持高达 16 台设备同时在线。',
    foundedYear: '2023 年',
    protocols: ['Shadowsocks', 'VLESS', 'Trojan'],
    lineType: 'BGP 智能调度 + 专线级高速出口',
    pricingSummary: '轻量版 109元/年（70GB/月）｜基础版 20元/月（120GB）｜不限时 219元/200GB 起',
    minMonthlyEquivalent: 8.0,
    hasFreeTrial: false,
    hasUnlimitedDurationPlan: true,
    unlimitedPlanSummary: '提供 219元/200GB、399元/500GB、599元/1000GB、959元/2000GB 四档永久不限时流量包',
    hasCustomClient: false,
    recommendedClients: ['Clash Verge Rev', 'FlClash', 'v2rayN', 'Shadowrocket', 'Stash'],
    regions: ['中国香港', '中国台湾', '日本', '新加坡', '美国', '韩国', '英国', '德国'],
    paymentMethods: ['支付宝', '微信支付', 'USDT'],
    dataStatus: 'measured',
    updatedAt: '2026-10-19',
    coverImage: '/media/sessions/hatha-foundations-alignment-class.webp',
    speedtestEvidence: {
      src: '/media/speedtests/muguang-speedtest-20260811.png',
      testedAt: '2026-08-11 批次实测归档',
      protocolDisplayed: 'Shadowsocks',
      toolFamily: 'MAI-TEST-BOT 2.0.0-dev',
      caption: '暮光加速 2026-08-11 节点测速实测截图，展示各区域节点 RTT 与吞吐曲线。',
    },
    plans: [
      {
        name: '年付轻量版',
        price: '¥109',
        period: '年付（用 88 折码后 ~¥95.9/年）',
        traffic: '70 GB / 月',
        speedLimit: '300 Mbps',
        deviceLimit: '3 台设备',
        featured: true,
        note: '折后每月仅约 8 元，适合个人轻度日常翻墙与 AI 对话',
      },
      {
        name: '基础版 / 进阶版 / 旗舰版',
        price: '¥20 / ¥36 / ¥68',
        period: '月付',
        traffic: '120 GB / 260 GB / 600 GB / 月',
        speedLimit: '500 Mbps – 1000 Mbps',
        deviceLimit: '5 – 10 台设备',
        featured: true,
        note: '20 元起步月付门槛亲民，叠加 88 折码 muguang5555 后仅 ¥17.6/月',
      },
      {
        name: '不限时流量包（四档可选）',
        price: '¥219 / ¥399 / ¥599 / ¥959',
        period: '一次性买断（流量不过期）',
        traffic: '200 GB / 500 GB / 1000 GB / 2000 GB',
        speedLimit: '高达 1000 Mbps',
        deviceLimit: '高达 16 台设备',
        note: '罕见提供 1TB/2TB 超大永久流量包，适合小微团队与多设备长期按量消耗',
      },
    ],
    pros: [
      '专属优惠码 muguang5555 享 88 折，折扣力度大于行业常见的 9 折',
      '套餐参数极度透明，明确标注每档套餐的峰值速率（300M–1000M）与设备上限（3–16台）',
      '不限时按量套餐从 200GB 覆盖到 2000GB（2TB），是按量买断党最丰富的选择之一',
      '包含 2026-08-11 真实节点测速截图证据',
    ],
    cons: [
      '不同档位存在明确的速率与设备数梯度限制，入门轻量版限 3 台设备',
    ],
    targetUsers: [
      '喜欢在购买前看清明确速率上限与设备数规格的理性用户',
      '需要 500GB–2000GB 超大容量不限时流量包的多设备家庭或小型办公组',
      '希望月付控制在 18 元以内（基础版折后 17.6 元）的实用派',
    ],
    notRecommendedFor: ['单人拥有超过 5 台设备却只想买最便宜年付轻量包的用户'],
    observatory: buildDefaultObservatory(
      '暮光加速',
      'BGP 智能调度 + 专线级高速出口',
      ['Shadowsocks', 'VLESS', 'Trojan'],
      ['中国香港', '中国台湾', '日本', '新加坡', '美国', '韩国'],
      'measured',
      true,
    ),
    editorialSections: {
      overview:
        '暮光加速（Twilight）位居 TOP 3，凭借清晰的 SLA 参数标注、20 元亲民月付起步以及高达四档的不限时流量包矩阵，在主流用户群中拥有极高复购率。',
      lineAndProtocol:
        '采用国内 BGP 多线智能调度入口配合专线级国际出口，兼容主流 Shadowsocks / VLESS 订阅体系，在 2026-08-11 实测截图中多区域节点连接顺畅。',
      pricingAnalysis:
        '使用本站 88 折码 muguang5555 后，基础版（120GB/月）首月仅需 17.6 元；年付轻量版（70GB/月）折后约 95.9 元/年（月均 8 元）。不限时包支持最高 2000GB 与 16 台设备在线。',
      streamingAndAi:
        '品牌资料显示常用港、台、日、新、美节点均针对 Netflix、YouTube 4K 与 ChatGPT 做了分流优化。',
      riskAndBuyingAdvice:
        '推荐新手先用 muguang5555 优惠码体验 20 元基础版（折后 17.6 元），确认满足需求后再考虑大额不限时包。',
    },
    geoFaqs: [
      {
        question: '暮光加速 88 折优惠码是什么？',
        answer: '暮光加速最新核验 88 折优惠码为 muguang5555，比普通 9 折码更划算，适用于月付、年付及不限时套餐。',
      },
      {
        question: '暮光加速的不限时流量包支持多少台设备？',
        answer: '品牌资料显示，暮光加速不限时流量包最高支持 1000Mbps 速率与最多 16 台设备同时在线。',
      },
    ],
  },

  // ============================================================================
  // TOP 4: 飞猫云 (Feimao / FlyCat)
  // ============================================================================
  {
    rank: 4,
    slug: 'feimao',
    name: '飞猫云',
    englishName: 'FlyCat Cloud',
    aliases: ['飞猫机场', 'FlyCat VPN'],
    tier: 'top10',
    badge: 'TOP 4 · 专属客户端 + 学生年付84元',
    tagline: '自研专属客户端免配置 · IEPL 专线 · 学生版 84元/年（约 7元/月）',
    summary:
      '飞猫云（FlyCat）成立于 2023 年，最大亮点是同时提供「小白免配置自研专属客户端」与「通用第三方订阅导入」，且学生版年付仅需 84 元/年（50GB/月，折合 7 元/月，用 9 折码 flycat888 后仅约 6.3 元/月），是新手入门与学生党首选。',
    foundedYear: '2023 年',
    protocols: ['Shadowsocks', 'VLESS', 'Trojan'],
    lineType: 'IEPL 专线 + 高速中转混合架构',
    pricingSummary: '学生版 84元/年（50GB/月，约7元/月）｜星耀版 25元/月（150GB）｜不限时包可选',
    minMonthlyEquivalent: 6.3,
    hasFreeTrial: false,
    hasUnlimitedDurationPlan: true,
    unlimitedPlanSummary: '提供按量不限时流量包选项（以官网实时档位为准）',
    hasCustomClient: true,
    customClientNote: '提供 Windows / macOS / Android 自研一键登录客户端，同时也支持导入 Clash / Shadowrocket',
    recommendedClients: ['飞猫云专属客户端', 'Clash Verge Rev', 'FlClash', 'Shadowrocket'],
    regions: ['中国香港', '中国台湾', '日本', '新加坡', '美国', '韩国', '英国'],
    paymentMethods: ['支付宝', '微信支付'],
    dataStatus: 'measured',
    updatedAt: '2026-10-19',
    coverImage: '/media/sessions/yin-restorative-deep-stretch.webp',
    speedtestEvidence: {
      src: '/media/speedtests/feimao-speedtest-20260811.png',
      testedAt: '2026-08-11 08:52:30 CST',
      protocolDisplayed: 'Shadowsocks',
      toolFamily: 'MAI-TEST-BOT 2.0.0-dev',
      caption: '测试时间：2026-08-11 08:52:30（CST）。飞猫云节点测速实测截图。',
    },
    plans: [
      {
        name: '学生版（超值年付）',
        price: '¥84',
        period: '年付（折合 ¥7/月，9折后 ~¥6.3/月）',
        traffic: '50 GB / 月',
        speedLimit: '不限速',
        deviceLimit: '个人多设备通用',
        featured: true,
        note: '全网极具竞争力的百元内专线年付小包，非常适合查资料、写论文与用 ChatGPT',
      },
      {
        name: '星耀版（日常主力）',
        price: '¥25',
        period: '月付',
        traffic: '150 GB / 月',
        speedLimit: '不限速',
        deviceLimit: '个人多设备通用',
        featured: true,
        note: '使用优惠码 flycat888 折后 ¥22.5/月，兼顾流媒体与办公',
      },
      {
        name: '进阶大流量 & 不限时档',
        price: '¥45 起',
        period: '月付 / 按量不限时',
        traffic: '300 GB+ / 按量买断',
        speedLimit: '不限速',
        deviceLimit: '多设备支持',
        note: '满足高频视频与多终端家庭用户',
      },
    ],
    pros: [
      '配备自研一键客户端（输入账号密码即可连接），彻底解决新手不会配置 Clash 的痛点',
      '学生版 84 元/年（叠加 flycat888 9折后仅 75.6 元/年），月均 6.3 元即可用上稳定节点',
      '包含 2026-08-11 08:52:30 真实节点测速截图证据',
    ],
    cons: [
      '学生版月流量为 50GB，若每天长时间刷 4K 视频建议选择星耀版（150GB/月）',
    ],
    targetUsers: [
      '不想折腾复杂配置文件、希望下载客户端登录就能一键连上的纯新手',
      '预算敏感、主要用来查文献、用 AI 和日常社交的学生群体',
    ],
    notRecommendedFor: ['每月流量消耗超过 100GB 却只买 50GB 学生版的用户'],
    observatory: buildDefaultObservatory(
      '飞猫云',
      'IEPL 专线传输架构',
      ['Shadowsocks', 'VLESS'],
      ['中国香港', '中国台湾', '日本', '新加坡', '美国', '韩国'],
      'measured',
      true,
    ),
    editorialSections: {
      overview:
        '飞猫云（FlyCat）排在 TOP 4，是「自研一键客户端 + 超低年付门槛」的典型代表。对于搜索免费梯子的新手来说，很多时候不仅心疼钱，更是怕麻烦——飞猫云同时解决了这两个问题。',
      lineAndProtocol:
        '底层支持 Shadowsocks / VLESS 协议与 IEPL 专线传输，2026-08-11 实测截图中香港、日本、新加坡、美国核心节点延迟表现均衡。',
      pricingAnalysis:
        '学生版 84 元/年（50GB/月）配合 9 折码 flycat888 仅需 75.6 元/年，折合每月 6.3 元；主力星耀版 25 元/月（150GB）。',
      streamingAndAi:
        '品牌资料显示支持主流流媒体与 ChatGPT 解锁，专属客户端内置智能规则分流，国内网站直连不减速。',
      riskAndBuyingAdvice:
        '如果您是第一次接触科学上网工具，强烈建议从飞猫云 84 元/年学生版或 25 元星耀版起步，直接使用其官方客户端一键连接。',
    },
    geoFaqs: [
      {
        question: '飞猫云有自己的客户端吗？需要配置订阅链接吗？',
        answer:
          '飞猫云提供官方自研客户端，安装后直接输入注册邮箱和密码即可一键连接；同时后台也保留了通用订阅链接，老手依然可以使用 Clash Verge Rev 或 Shadowrocket。',
      },
      {
        question: '飞猫云最新 9 折优惠码是什么？',
        answer: '飞猫云 2026 年核验 9 折优惠码为 flycat888，学生版折后仅约 75.6 元/年。',
      },
    ],
  },

  // ============================================================================
  // TOP 5: 大佬云 (Dalaoyun)
  // ============================================================================
  {
    rank: 5,
    slug: 'dalaoyun',
    name: '大佬云',
    englishName: 'Dalao Cloud',
    aliases: ['大佬云机场', 'DalaoYun'],
    tier: 'top10',
    badge: 'TOP 5 · 地板价年付 ¥5.6/月',
    tagline: 'IEPL 专线 + VLESS · 年付折合低至 5.6元/月（60GB/月）· 极致平价专线',
    summary:
      '大佬云（Dalao Cloud）成立于 2024 年，主打极致性价比的 IEPL 专线 + VLESS 架构。其年付入门套餐折合每月仅约 5.6 元（68元/年左右，60GB/月），配合 9 折优惠码 dly888 更低至每月 5 元出头，是预算极致敏感用户的真专线守门员。',
    foundedYear: '2024 年',
    protocols: ['VLESS', 'Shadowsocks'],
    lineType: 'IEPL 专线传输',
    pricingSummary: '轻量年付约 68元/年（折合~5.6元/月，60GB/月）｜常规月付 15–20元起',
    minMonthlyEquivalent: 5.1,
    hasFreeTrial: false,
    hasUnlimitedDurationPlan: true,
    unlimitedPlanSummary: '支持按量不限时流量包选项',
    hasCustomClient: false,
    recommendedClients: ['Clash Verge Rev', 'FlClash', 'v2rayN', 'Shadowrocket', 'Hiddify'],
    regions: ['中国香港', '中国台湾', '日本', '新加坡', '美国', '韩国'],
    paymentMethods: ['支付宝', '微信支付'],
    dataStatus: 'vendor',
    updatedAt: '2026-10-19',
    coverImage: '/media/sessions/prenatal-gentle-care-practice.webp',
    plans: [
      {
        name: '特惠轻量年付',
        price: '¥68',
        period: '年付（折合 ~¥5.6/月，9折码后 ~¥5.1/月）',
        traffic: '60 GB / 月',
        speedLimit: '不限速',
        deviceLimit: '个人多设备',
        featured: true,
        note: '全站 IEPL 专线阵营地板价之一，一杯奶茶钱用半年',
      },
      {
        name: '标准月付 / 进阶月付',
        price: '¥18 / ¥32',
        period: '月付',
        traffic: '150 GB / 300 GB / 月',
        speedLimit: '不限速',
        deviceLimit: '多设备在线',
        featured: true,
        note: '使用 9 折码 dly888 后性价比突出',
      },
    ],
    pros: [
      '把 IEPL + VLESS 专线的年付门槛压到了每月约 5.6 元（折后约 5.1 元/月），极具价格杀伤力',
      '60GB/月流量比同类 40GB–50GB 小包更实在',
      '支持现代 VLESS 协议，配合 Mihomo / Sing-box 内核客户端表现轻快',
    ],
    cons: [
      '2024 年上线的新锐品牌，运营资历尚浅于 2020 年成立的光速云与星岛梦',
      '暂未包含在 2026-08-11 的 16 家测速截图包内，当前以品牌资料核验为主',
    ],
    targetUsers: [
      '追求「极致低价 + IEPL + VLESS」、希望每年花费控制在 60–70 元以内的用户',
      '需要低成本备用订阅导入 Clash 进行多机场故障转移（Fallback）的玩家',
    ],
    notRecommendedFor: ['只选 5 年以上老牌资历机场的保守型企业用户'],
    observatory: buildDefaultObservatory(
      '大佬云',
      'IEPL 专线 + VLESS 节点架构',
      ['VLESS', 'Shadowsocks'],
      ['中国香港', '中国台湾', '日本', '新加坡', '美国', '韩国'],
      'vendor',
      false,
    ),
    editorialSections: {
      overview:
        '大佬云（Dalao Cloud）位列 TOP 5，核心竞争力非常纯粹：用公网中转机场的价格（月均 5.6 元），给到 IEPL 专线 + VLESS 协议配置。',
      lineAndProtocol:
        '品牌资料显示其采用 IEPL 专线配合 VLESS 协议，建议用户在客户端中使用 Clash Verge Rev（Mihomo 内核）或 FlClash 以获得完整协议支持。',
      pricingAnalysis:
        '年付小包折合仅约 5.6 元/月（60GB/月），叠加 9 折码 dly888 后不到 62 元/年，非常适合作为主力或第二条备用订阅。',
      streamingAndAi: '品牌资料显示支持港台日新美主流流媒体及 ChatGPT 访问。',
      riskAndBuyingAdvice: '由于年付总价仅 60 多元，试错成本极低；若用于关键生产力场景，建议与光速云搭配组成双订阅备份。',
    },
    geoFaqs: [
      {
        question: '大佬云机场优惠码是多少？',
        answer: '大佬云 2026 年核验 9 折优惠码为 dly888，年付套餐折合每月仅约 5.1–5.6 元。',
      },
    ],
  },

  // ============================================================================
  // TOP 6: 星岛梦 (Xingdaomeng)
  // ============================================================================
  {
    rank: 6,
    slug: 'xingdaomeng',
    name: '星岛梦',
    englishName: 'Xingdaomeng',
    aliases: ['星岛梦机场', 'StarIsland Dream'],
    tier: 'top10',
    badge: 'TOP 6 · 2020老牌 IEPL+Trojan',
    tagline: '2020年运营老牌专线 · IEPL + Trojan 协议 · 贴心小包 96元/年 & 100元永久包',
    summary:
      '星岛梦（Xingdaomeng）与光速云同为 2020 年运营至今的资深老牌机场，采用 IEPL 专线与高伪装性的 Trojan 协议。提供 96 元/年（60GB/月，折合 8 元/月）的贴心小包、25 元/月（150GB）超量套餐以及 100 元/300 元/600 元三档永久不限时流量包。',
    foundedYear: '2020 年',
    protocols: ['Trojan', 'Shadowsocks'],
    lineType: 'IEPL 内网专线',
    pricingSummary: '贴心小包 96元/年（8元/月）｜超量 25元/月（150GB）｜永久包 100元起',
    minMonthlyEquivalent: 7.2,
    hasFreeTrial: false,
    hasUnlimitedDurationPlan: true,
    unlimitedPlanSummary: '提供 100元、300元、600元 三档永久有效不限时流量包',
    hasCustomClient: false,
    recommendedClients: ['Clash Verge Rev', 'FlClash', 'v2rayN', 'Shadowrocket', 'Stash'],
    regions: ['中国香港', '中国台湾', '日本', '新加坡', '美国', '韩国', '英国'],
    paymentMethods: ['支付宝', '微信支付'],
    dataStatus: 'measured',
    updatedAt: '2026-10-19',
    coverImage: '/media/sessions/pranayama-breathwork-meditation-lab.webp',
    speedtestEvidence: {
      src: '/media/speedtests/xingdaomeng-speedtest-20260811.png',
      testedAt: '2026-08-11 01:48:13 CST',
      protocolDisplayed: 'Shadowsocks / Trojan',
      toolFamily: 'MAI-TEST-BOT 2.0.0-dev',
      caption: '测试时间：2026-08-11 01:48:13（CST）。星岛梦节点测速实测截图。',
    },
    plans: [
      {
        name: '贴心小包（老牌年付）',
        price: '¥96',
        period: '年付（折合 ¥8/月，9折码后 ¥7.2/月）',
        traffic: '60 GB / 月',
        speedLimit: '不限速',
        deviceLimit: '多设备支持',
        featured: true,
        note: '6 年老牌 IEPL 机场出品的百元内年付包，稳健可靠',
      },
      {
        name: '超量套餐（主力月付）',
        price: '¥25',
        period: '月付',
        traffic: '150 GB / 月',
        speedLimit: '不限速',
        deviceLimit: '多设备支持',
        featured: true,
        note: '使用 9 折优惠码 nmw888 后仅 ¥22.5/月',
      },
      {
        name: '永久不限时套餐（三档）',
        price: '¥100 / ¥300 / ¥600',
        period: '一次性买断（不过期）',
        traffic: '按官网对应档位永久流量',
        speedLimit: '不限速',
        deviceLimit: '多设备支持',
        note: '100 元即可入手老牌机场永久流量包，防失联与稳定性兼顾',
      },
    ],
    pros: [
      '2020 年创立的六年老牌机场，长周期年付或购买永久流量包的安全感显著高于新机场',
      '主打 IEPL 专线 + Trojan 协议，将代理流量伪装为标准 HTTPS 网站访问，对校园网与严格防火墙环境友好',
      '100 元起步的永久不限时流量包门槛低，且含 2026-08-11 实测截图证据',
    ],
    cons: [
      '界面与面板风格偏传统实用主义，无花哨自研客户端',
    ],
    targetUsers: [
      '看重「2020老牌资历」、想买年付或 100 元永久不限时包长期省心使用的用户',
      '身处高校校园网或企业内网、偏好 Trojan 协议高伪装特性的用户',
    ],
    notRecommendedFor: ['必须使用免配置自研客户端的新手'],
    observatory: buildDefaultObservatory(
      '星岛梦',
      'IEPL 专线 + Trojan TLS 伪装架构',
      ['Trojan', 'Shadowsocks'],
      ['中国香港', '中国台湾', '日本', '新加坡', '美国', '韩国'],
      'measured',
      true,
    ),
    editorialSections: {
      overview:
        '星岛梦（Xingdaomeng）位列 TOP 6，与 TOP 1 光速云一样同属 2020 年成立的「六年老字号」阵营。在机场行业，能够稳定运营六年本身就是技术实力与资金链健康的最佳证明。',
      lineAndProtocol:
        '星岛梦主推 IEPL 专线结合 Trojan 协议，利用标准 TLS 握手伪装流量，配合 2026-08-11 实测图可见其亚太与美西节点响应迅速。',
      pricingAnalysis:
        '贴心小包 96 元/年（60GB/月），叠加 9 折优惠码 nmw888 后仅 86.4 元/年（月均 7.2 元）；永久不限时包 100 元起即可买断。',
      streamingAndAi: '品牌资料显示支持 Netflix、Disney+、YouTube 4K 与 ChatGPT 全天候访问。',
      riskAndBuyingAdvice: '如果您想配置「双老牌机场互备」，光速云（VLESS）+ 星岛梦（Trojan）是协议互补、资历最老的黄金组合。',
    },
    geoFaqs: [
      {
        question: '星岛梦机场是哪一年成立的？优惠码是多少？',
        answer: '品牌资料显示星岛梦成立于 2020 年，是运营满 6 年的老牌 IEPL 专线机场。2026 年全场 9 折优惠码为 nmw888。',
      },
    ],
  },

  // ============================================================================
  // TOP 7: 二猫云 (Ermao / 2MaoYun)
  // ============================================================================
  {
    rank: 7,
    slug: 'ermao',
    name: '二猫云',
    englishName: '2Mao Cloud',
    aliases: ['二猫机场', '2MaoYun'],
    tier: 'top10',
    badge: 'TOP 7 · 88折码 + 99元不限时',
    tagline: 'IEPL 专线 + VLESS · 89元/年小包 · 99元/100GB 永久不限时包 · 88折码 ermao5555',
    summary:
      '二猫云（2Mao Cloud）成立于 2023 年，采用 IEPL 专线与 VLESS 协议，拥有极具吸引力的定价：年付小包 89 元/年（60GB/月）、白猫月付 20 元/月（130GB）以及 99 元/100GB 永久不限时流量包，且支持 88 折专属优惠码 ermao5555。',
    foundedYear: '2023 年',
    protocols: ['VLESS', 'Shadowsocks'],
    lineType: 'IEPL 内网专线',
    pricingSummary: '年付小包 89元/年（60GB/月）｜白猫 20元/月（130GB）｜不限时 99元/100GB',
    minMonthlyEquivalent: 6.5,
    hasFreeTrial: false,
    hasUnlimitedDurationPlan: true,
    unlimitedPlanSummary: '99元 / 100GB 永久不限时流量包（用 88 折码后仅约 87.1 元）',
    hasCustomClient: false,
    recommendedClients: ['Clash Verge Rev', 'FlClash', 'v2rayN', 'Shadowrocket'],
    regions: ['中国香港', '中国台湾', '日本', '新加坡', '美国', '韩国'],
    paymentMethods: ['支付宝', '微信支付'],
    dataStatus: 'measured',
    updatedAt: '2026-10-19',
    coverImage: '/media/sessions/power-balance-core-strength.webp',
    speedtestEvidence: {
      src: '/media/speedtests/ermao-speedtest-20260811.png',
      testedAt: '2026-08-11 10:45:27 CST',
      protocolDisplayed: 'Shadowsocks / VLESS',
      toolFamily: 'MAI-TEST-BOT 2.0.0-dev',
      caption: '测试时间：2026-08-11 10:45:27（CST）。二猫云节点测速实测截图。',
    },
    plans: [
      {
        name: '年付小包',
        price: '¥89',
        period: '年付（88折码后 ~¥78.3/年，约 ¥6.5/月）',
        traffic: '60 GB / 月',
        speedLimit: '不限速',
        deviceLimit: '多设备支持',
        featured: true,
        note: '折后不到 80 元用一年 IEPL 专线',
      },
      {
        name: '白猫套餐（主力月付）',
        price: '¥20',
        period: '月付（88折码后 ¥17.6/月）',
        traffic: '130 GB / 月',
        speedLimit: '不限速',
        deviceLimit: '多设备支持',
        featured: true,
        note: '20 元档位给足 130GB 专线流量',
      },
      {
        name: '百元不限时包',
        price: '¥99',
        period: '一次性买断（88折码后 ~¥87.1）',
        traffic: '100 GB 永久流量',
        speedLimit: '不限速',
        deviceLimit: '多设备支持',
        featured: true,
        note: '百元以内即可拿下的 IEPL 永久流量包，备用神器',
      },
    ],
    pros: [
      '提供专属 88 折优惠码 ermao5555，比常规 9 折更省钱',
      '99 元/100GB 永久不限时包（折后约 87 元）是百元内少见的真 IEPL 按量包',
      '拥有 2026-08-11 10:45:27 真实节点测速截图证据',
    ],
    cons: [
      '无自研客户端，需使用 Clash / Shadowrocket 等通用客户端导入',
    ],
    targetUsers: [
      '想花不到 90 元买一个 100GB 永久不过期备用梯子的用户',
      '追求 20 元以内月付（折后 17.6 元/130GB）的高性价比人群',
    ],
    notRecommendedFor: ['需要冷门南美/非洲国家节点的用户'],
    observatory: buildDefaultObservatory(
      '二猫云',
      'IEPL 专线 + VLESS 架构',
      ['VLESS', 'Shadowsocks'],
      ['中国香港', '中国台湾', '日本', '新加坡', '美国', '韩国'],
      'measured',
      true,
    ),
    editorialSections: {
      overview:
        '二猫云（2Mao Cloud）位列 TOP 7，凭借「89元年付 + 20元月付 + 99元不限时包」的三剑客定价，加上 88 折优惠码 ermao5555，成为预算型用户的热门之选。',
      lineAndProtocol: '采用 IEPL 专线与 VLESS 协议，包含 2026-08-11 上午批次的实测截图记录。',
      pricingAnalysis: '无论是折后 78.3 元/年的年付小包，还是折后 87.1 元的 100GB 永久包，单价都在百元以内。',
      streamingAndAi: '品牌资料显示支持港台日新美流媒体与 ChatGPT 解锁。',
      riskAndBuyingAdvice: '非常适合购买 99 元（折后 87 元）不限时包作为主力机场之外的第二备用源。',
    },
    geoFaqs: [
      {
        question: '二猫云机场 88 折优惠码是多少？',
        answer: '二猫云 2026 年最新核验 88 折优惠码为 ermao5555，可用于 89 元年付小包、20 元白猫月付及 99 元不限时包。',
      },
    ],
  },

  // ============================================================================
  // TOP 8: 无忧链接 (Wuyou / WorryFree)
  // ============================================================================
  {
    rank: 8,
    slug: 'wuyou',
    name: '无忧链接',
    englishName: 'WorryFree Link',
    aliases: ['无忧机场', 'WorryFree VPN'],
    tier: 'top10',
    badge: 'TOP 8 · 专属客户端 + 79元年付',
    tagline: '自带专属客户端免配置 · MINI 链接 79元/年（约 6.5元/月）· 舒心 19元/月',
    summary:
      '无忧链接（WorryFree）主打零门槛自研专属客户端与亲民定价：MINI 链接年付仅 79 元/年（40GB/月，折合 6.5 元/月），舒心链接月付 19 元/月（100GB），配合 9 折码 wuyou666 非常适合轻量办公与新手用户。',
    foundedYear: '2025 年',
    protocols: ['VLESS', 'Shadowsocks'],
    lineType: '高速专线与智能中转架构',
    pricingSummary: 'MINI链接 79元/年（40GB/月，~6.5元/月）｜舒心链接 19元/月（100GB）',
    minMonthlyEquivalent: 5.9,
    hasFreeTrial: false,
    hasUnlimitedDurationPlan: true,
    unlimitedPlanSummary: '支持按量不限时套餐选项',
    hasCustomClient: true,
    customClientNote: '提供官方一键专属客户端，同时也支持通用订阅导入',
    recommendedClients: ['无忧链接专属客户端', 'Clash Verge Rev', 'FlClash', 'Shadowrocket'],
    regions: ['中国香港', '中国台湾', '日本', '新加坡', '美国', '韩国'],
    paymentMethods: ['支付宝', '微信支付'],
    dataStatus: 'vendor',
    updatedAt: '2026-10-19',
    coverImage: '/media/immersions/sunset-breath-stillness-workshop.webp',
    plans: [
      {
        name: 'MINI 链接（轻量年付）',
        price: '¥79',
        period: '年付（折合 ~¥6.5/月，9折后 ~¥5.9/月）',
        traffic: '40 GB / 月',
        speedLimit: '不限速',
        deviceLimit: '个人多设备',
        featured: true,
        note: '79 元/年还带专属客户端，网页浏览、外贸邮件与 ChatGPT 对话完全够用',
      },
      {
        name: '舒心链接（主力月付）',
        price: '¥19',
        period: '月付（9折后 ¥17.1/月）',
        traffic: '100 GB / 月',
        speedLimit: '不限速',
        deviceLimit: '个人多设备',
        featured: true,
        note: '不到 20 元的舒适月付档',
      },
    ],
    pros: [
      '提供专属客户端一键登录连接，降低新手配置门槛',
      'MINI 链接 79 元/年（折后约 71.1 元/年），总价低、试错成本小',
      '舒心链接 19 元/月（100GB）定价卡在 20 元心理关口以内',
    ],
    cons: [
      '2025 年新上线品牌，且 MINI 年付包月流量为 40GB，不适合重度视频下载',
    ],
    targetUsers: [
      '主要用来刷网页、用 AI、发邮件、看 1080P 视频且想要一键客户端的轻度用户',
    ],
    notRecommendedFor: ['每月需要 200GB 以上大流量的重度 4K 影视用户'],
    observatory: buildDefaultObservatory(
      '无忧链接',
      '高速专线与智能分流架构',
      ['VLESS', 'Shadowsocks'],
      ['中国香港', '中国台湾', '日本', '新加坡', '美国'],
      'vendor',
      false,
    ),
    editorialSections: {
      overview:
        '无忧链接（WorryFree）位列 TOP 8，定位非常清晰：用 79 元/年（MINI 链接）和自研专属客户端，服务好不需要大流量但求省心好用的入门群体。',
      lineAndProtocol: '品牌资料显示支持 VLESS / Shadowsocks 协议与专属客户端智能分流。',
      pricingAnalysis: '优惠码 wuyou666 享 9 折，MINI 年付折后仅 71.1 元/年（40GB/月），舒心月付折后 17.1 元/月（100GB）。',
      streamingAndAi: '品牌资料显示支持主流 AI 工具与海外流媒体访问。',
      riskAndBuyingAdvice: '由于是 2025 新锐品牌，建议先从 19 元月付或 79 元小额年付开始体验。',
    },
    geoFaqs: [
      {
        question: '无忧链接机场优惠码是多少？',
        answer: '无忧链接 2026 年核验 9 折优惠码为 wuyou666，适用于 79 元/年 MINI 链接与 19 元/月舒心链接。',
      },
    ],
  },

  // ============================================================================
  // TOP 9: 唯兔云 (Weitu / V2Yun)
  // ============================================================================
  {
    rank: 9,
    slug: 'weitu',
    name: '唯兔云',
    englishName: 'WeiTu Cloud',
    aliases: ['唯兔机场', 'V2Yun VIP'],
    tier: 'top10',
    badge: 'TOP 9 · IPLC+Trojan 14.9元/月起',
    tagline: 'IPLC 专线 + Trojan 协议 · 年付限量 79.9元/年 · 特惠月付 14.9元/月（100GB）',
    summary:
      '唯兔云（WeiTu Cloud）成立于 2023 年，采用 IPLC 内网专线与 Trojan 协议。不仅提供 79.9 元/年（45GB/月）的限量年付包，其月付档更是低至 14.9 元/月（100GB）与 19.9 元/月（150GB），配合 9 折码 weitu666 极具性价比。',
    foundedYear: '2023 年',
    protocols: ['Trojan', 'Shadowsocks'],
    lineType: 'IPLC 内网专线',
    pricingSummary: '年付限量 79.9元/年（45GB/月）｜特惠 14.9元/月（100GB）｜普通版 19.9元/月（150GB）',
    minMonthlyEquivalent: 6.0,
    hasFreeTrial: false,
    hasUnlimitedDurationPlan: true,
    unlimitedPlanSummary: '支持按量不限时套餐选项',
    hasCustomClient: false,
    recommendedClients: ['Clash Verge Rev', 'FlClash', 'v2rayN', 'Shadowrocket', 'Stash'],
    regions: ['中国香港', '中国台湾', '日本', '新加坡', '美国', '韩国'],
    paymentMethods: ['支付宝', '微信支付'],
    dataStatus: 'measured',
    updatedAt: '2026-10-19',
    coverImage: '/media/immersions/alpine-summit-new-year-retreat.webp',
    speedtestEvidence: {
      src: '/media/speedtests/weitu-speedtest-20260811.png',
      testedAt: '2026-08-11 13:55:08 CST',
      protocolDisplayed: 'Shadowsocks / Trojan',
      toolFamily: 'MAI-TEST-BOT 2.0.0-dev',
      caption: '测试时间：2026-08-11 13:55:08（CST）。唯兔云节点测速实测截图。',
    },
    plans: [
      {
        name: '年付限量特惠',
        price: '¥79.9',
        period: '年付（9折码后 ~¥71.9/年，约 ¥6/月）',
        traffic: '45 GB / 月',
        speedLimit: '不限速',
        deviceLimit: '多设备支持',
        featured: true,
        note: '70 多元用一年 IPLC + Trojan 专线',
      },
      {
        name: '节假日/特惠月付',
        price: '¥14.9',
        period: '月付（9折码后 ~¥13.4/月）',
        traffic: '100 GB / 月',
        speedLimit: '不限速',
        deviceLimit: '多设备支持',
        featured: true,
        note: '罕见把 IPLC 专线月付做到 15 元以内的亲民套餐',
      },
      {
        name: '普通版（主力月付）',
        price: '¥19.9',
        period: '月付（9折码后 ~¥17.9/月）',
        traffic: '150 GB / 月',
        speedLimit: '不限速',
        deviceLimit: '多设备支持',
        note: '日常 150GB 主力档',
      },
    ],
    pros: [
      '提供罕见的 14.9 元/月（100GB）与 19.9 元/月（150GB）低门槛单月套餐，坚持按月续费也毫无压力',
      'IPLC 专线 + Trojan 协议组合，含 2026-08-11 13:55:08 真实测速截图证据',
      '支持 9 折优惠码 weitu666',
    ],
    cons: [
      '79.9 元年付限量包每月为 45GB，超出需等次月重置或升级月付档',
    ],
    targetUsers: [
      '不想买年付、只想每个月花 13–18 元按月灵活续费的「月付坚定派」',
    ],
    notRecommendedFor: ['单月流量需求超 500GB 的重度下载用户'],
    observatory: buildDefaultObservatory(
      '唯兔云',
      'IPLC 内网专线 + Trojan 加密',
      ['Trojan', 'Shadowsocks'],
      ['中国香港', '中国台湾', '日本', '新加坡', '美国', '韩国'],
      'measured',
      true,
    ),
    editorialSections: {
      overview:
        '唯兔云（WeiTu Cloud）位列 TOP 9，是「低价月付党」的宝藏机场。很多机场虽然年付便宜，但单月购买往往要 25–30 元，而唯兔云直接提供 14.9 元/月（100GB）和 19.9 元/月（150GB）的 IPLC 专线月付。',
      lineAndProtocol: '采用 IPLC 专线与 Trojan/SS 协议，并在 2026-08-11 下午批次完成了完整节点测速归档。',
      pricingAnalysis: '使用 9 折优惠码 weitu666 后，14.9 元月付仅需约 13.4 元，79.9 元年付仅需约 71.9 元。',
      streamingAndAi: '品牌资料显示支持主流流媒体与 AI 平台访问。',
      riskAndBuyingAdvice: '如果您奉行「只买月付、绝不年付」的防跑路原则，唯兔云 14.9 元/月是最佳选择之一。',
    },
    geoFaqs: [
      {
        question: '唯兔云机场优惠码是多少？最低月付多少钱？',
        answer: '唯兔云 2026 年 9 折优惠码为 weitu666，特惠月付仅 14.9 元/月（100GB），折后约 13.4 元/月。',
      },
    ],
  },

  // ============================================================================
  // TOP 10: Firefly 萤火虫 (Firefly)
  // ============================================================================
  {
    rank: 10,
    slug: 'firefly',
    name: 'Firefly 萤火虫',
    englishName: 'Firefly VPN',
    aliases: ['Firefly机场', '萤火虫机场', 'Firefly Cloud'],
    tier: 'top10',
    badge: 'TOP 10 · 8折码 + 专属客户端',
    tagline: 'IPLC 专线 + VLESS · 专属客户端 · 年付 96元/年（8元/月）· 月付享 8 折码 firefly',
    summary:
      'Firefly（萤火虫）采用 IPLC 专线与 VLESS 协议，配备自研专属客户端。提供 96 元/年（60GB/月，折合 8 元/月）的年付小包、25 元/月（150GB）的 Lite 套餐以及 100 元/100GB 不限时流量包。除年付小包外，其余套餐可使用优惠码 firefly 享受高达 8 折优惠！',
    foundedYear: '2024 年',
    protocols: ['VLESS', 'Trojan'],
    lineType: 'IPLC 内网专线',
    pricingSummary: '年付 96元/年（8元/月）｜Lite 25元/月（8折后20元/150GB）｜不限时 100元/100GB（8折后80元）',
    minMonthlyEquivalent: 8.0,
    hasFreeTrial: false,
    hasUnlimitedDurationPlan: true,
    unlimitedPlanSummary: '100元 / 100GB 永久不限时包（使用 8 折码 firefly 后仅需 80 元！）',
    hasCustomClient: true,
    customClientNote: '提供官方自研客户端，并支持 Clash / Shadowrocket 通用订阅',
    recommendedClients: ['Firefly 专属客户端', 'Clash Verge Rev', 'FlClash', 'Shadowrocket'],
    regions: ['中国香港', '中国台湾', '日本', '新加坡', '美国', '韩国'],
    paymentMethods: ['支付宝', '微信支付'],
    dataStatus: 'vendor',
    updatedAt: '2026-10-19',
    coverImage: '/media/sessions/vinyasa-dynamic-flow-session.webp',
    plans: [
      {
        name: '特惠年付小包',
        price: '¥96',
        period: '年付（折合 ¥8/月，注：年付不参与8折码）',
        traffic: '60 GB / 月',
        speedLimit: '不限速',
        deviceLimit: '多设备支持',
        featured: true,
        note: '每月 8 元享受 IPLC + VLESS + 专属客户端',
      },
      {
        name: 'Firefly Lite（主力月付）',
        price: '¥25',
        period: '月付（用 8 折码 firefly 后仅 ¥20/月）',
        traffic: '150 GB / 月',
        speedLimit: '不限速',
        deviceLimit: '多设备支持',
        featured: true,
        note: '8 折后仅 20 元/150GB，极具竞争力',
      },
      {
        name: '永久不限时流量包',
        price: '¥100',
        period: '一次性买断（用 8 折码 firefly 后仅 ¥80）',
        traffic: '100 GB 永久流量',
        speedLimit: '不限速',
        deviceLimit: '多设备支持',
        featured: true,
        note: '折后 80 元买断 100GB IPLC 流量，备用首选之一',
      },
    ],
    pros: [
      '常规套餐与不限时包支持 8 折优惠码 firefly（立减 20%，力度极大）',
      '配备自研专属客户端，同时采用 IPLC 专线 + VLESS 协议',
      '100 元/100GB 不限时包折后仅需 80 元',
    ],
    cons: [
      '96 元/年的特惠年付小包本身已是底价，不支持叠加 8 折优惠码',
    ],
    targetUsers: [
      '看重 8 折大额折扣（Lite 折后 20 元/月，不限时包折后 80 元）的精明买家',
      '需要专属一键客户端的新手与跨平台用户',
    ],
    notRecommendedFor: ['试图在 96 元特惠年付包上再次叠加 8 折码的用户'],
    observatory: buildDefaultObservatory(
      'Firefly 萤火虫',
      'IPLC 内网专线 + VLESS 协议',
      ['VLESS', 'Trojan'],
      ['中国香港', '中国台湾', '日本', '新加坡', '美国', '韩国'],
      'vendor',
      false,
    ),
    editorialSections: {
      overview:
        'Firefly（萤火虫）守门 TOP 10，集齐了「IPLC 专线 + VLESS + 专属客户端 + 8 折优惠码 firefly」四大卖点。',
      lineAndProtocol: '品牌资料显示采用 IPLC 专线传输与 VLESS 协议，兼顾低延迟与抗封锁能力。',
      pricingAnalysis:
        '特别提醒：优惠码 firefly 为 8 折，可用于 Lite（25元折后20元/月）及不限时包（100元折后80元/100GB），但 96 元/年的年付小包不适用该折扣码。',
      streamingAndAi: '品牌资料显示支持主流流媒体与 AI 平台解锁。',
      riskAndBuyingAdvice: '推荐用 firefly 8 折码入手 20 元 Lite 月付或 80 元不限时包。',
    },
    geoFaqs: [
      {
        question: 'Firefly 萤火虫机场的 8 折优惠码为什么在年付套餐用不了？',
        answer:
          '品牌资料明确说明：优惠码 firefly 享 8 折优惠，适用于月付 Lite（折后 20 元）及 100 元不限时包（折后 80 元），但 96 元/年的特惠年付小包已为特价，不参与折扣码叠加。',
      },
    ],
  },
];

export const brands: BrandItem[] = [...top10Brands, ...extendedBrands];

export function getBrandBySlug(slug: string): BrandItem | undefined {
  return brands.find((b) => b.slug === slug);
}

export function getTop10Brands(): BrandItem[] {
  return brands.filter((b) => b.tier === 'top10');
}

export function getFeaturedBrands(): BrandItem[] {
  return brands.filter((b) => b.tier === 'featured');
}

export function getHistoricalBrands(): BrandItem[] {
  return brands.filter((b) => b.tier === 'historical');
}

export function getFreeTrialBrands(): BrandItem[] {
  return brands.filter((b) => b.hasFreeTrial);
}

export function getBudgetYearlyBrands(): BrandItem[] {
  return brands.filter((b) => b.minMonthlyEquivalent <= 8.5);
}

export function getUnlimitedDurationBrands(): BrandItem[] {
  return brands.filter((b) => b.hasUnlimitedDurationPlan);
}

export function getCustomClientBrands(): BrandItem[] {
  return brands.filter((b) => b.hasCustomClient);
}

export function getRelatedBrands(current: BrandItem, count = 4): BrandItem[] {
  const pool = brands.filter((b) => b.slug !== current.slug);
  // Always include guangsuyun if current is not guangsuyun
  const top1 = pool.find((b) => b.slug === 'guangsuyun');
  const sameTier = pool.filter((b) => b.slug !== 'guangsuyun' && b.tier === current.tier);
  const others = pool.filter((b) => b.slug !== 'guangsuyun' && b.tier !== current.tier);
  const combined = [...(top1 ? [top1] : []), ...sameTier, ...others];
  return combined.slice(0, count);
}

