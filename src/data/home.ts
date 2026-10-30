import type { CallToAction, FocusArea, GalleryImage, HeroWord, ImageData, VisitStep } from '../types';

export const hero = {
  title: [{ text: '免费梯子' }, { text: '专线评测', serif: true }, { text: '极速直连' }] satisfies HeroWord[],
  description:
    '拒绝隐私泄露与限速断流：深度横评 2026 年 42 家 IEPL / IPLC 专线机场与免费试用节点，从每月仅 5.6–8 元的百元内年付小包到永久不限时流量包，一站式配齐 Clash / 小火箭全平台客户端。',
  cta: { label: '查看 42 家机场评测库', href: '/brands/' } satisfies CallToAction,
  image: {
    src: '/media/banners/sunset-meadow-meditation-hero.webp',
    alt: '免费梯子 mianfeitizi.world — 2026 全球科学上网与 42 家专线机场实测导航',
  } satisfies ImageData,
  proof: {
    label: '已收录实测与核验档案',
    value: '42家 机场 · 6大系统客户端',
    avatars: [
      { src: '/media/community/member-portrait-elena.webp', alt: '' },
      { src: '/media/community/member-portrait-marcus.webp', alt: '' },
      { src: '/media/community/member-portrait-claire.webp', alt: '' },
    ] satisfies ImageData[],
  },
};

export const approach = {
  title: '科学选梯子的六大黄金准则',
  intro:
    '为什么同样叫「梯子」，有的晚高峰 4K 秒开、ChatGPT 零封号，有的却频繁断流甚至跑路？我们在评测 42 家机场时严格遵循以下六项硬核标准。',
  pillars: [
    {
      title: '真 IEPL / IPLC 物理内网专线',
      description: '优先推荐广深沪多线 BGP 入网、点对点物理内网过境香港/日本的真专线，绕过公网出口晚高峰拥堵。',
    },
    {
      title: '新一代 VLESS / Trojan 抗封锁协议',
      description: '相比老旧 SSR/VMess，现代 VLESS 与 Trojan 协议握手更快、特征伪装更强，在特殊时期依然稳健在线。',
    },
    {
      title: '免费梯子风险甄别与 8 元平替',
      description: '拆解纯免费 VPN 的日志倒卖与钓鱼风险，精选宇宙云/极连云等真免费试用及光速云 99 元/年（8元/月）安全平替。',
    },
    {
      title: 'ChatGPT / Claude 与 4K 流媒体解锁',
      description: '验证美、日、新、台原生 ISP 落地与 DNS 分流能力，确保 OpenAI、Anthropic、Netflix 与 Disney+ 顺畅可用。',
    },
    {
      title: '按需计费与防跑路风控策略',
      description: '优先筛选 2020 年起运营的老牌机场（如光速云、星岛梦），支持低门槛月付、百元小包与永久不限时流量包。',
    },
    {
      title: '数据分级透明：实测截图 vs 官方声明',
      description: '站内保留 2026-08-11 批次 17 张原始节点测速 PNG 图证，严格区分 measured 实测数据与 vendor 品牌资料。',
    },
  ],
  cta: { label: '阅读 3 分钟新手选型向导', href: '/#first-session' } satisfies CallToAction,
  image: {
    src: '/media/banners/zen-balanced-stones-mindfulness.webp',
    alt: '稳定平衡的跨境专线网络架构与节点评测方法论',
  } satisfies ImageData,
};

export const classesSection = {
  title: '按使用场景精准匹配方案',
  intro:
    '无论您是在找零成本免费试用、每天不到 3 毛钱的学生党年付小包，还是需要 4K 观影与 AI 办公的旗舰 IEPL 专线，都能直接进入对应专题。',
  cta: { label: '打开 42 家机场完整筛选库', href: '/brands/' } satisfies CallToAction,
};

export const focus = {
  title: '跨境专线网络三层架构拆解',
  intro:
    '点击右侧热点了解一条优质科学上网连接从您的电脑/手机发出，到成功打开 ChatGPT 与 YouTube 4K 所经历的三大关键节点。',
  image: {
    src: '/media/banners/coastal-dunes-seated-posture.webp',
    alt: '跨境网络三层传输拓扑：国内BGP入口、IEPL内网过境与海外原生ISP落地',
  } satisfies ImageData,
  initial: 0,
  areas: [
    {
      title: '第一跳：国内多线 BGP 高防入口',
      description: '通过深圳、广州、上海或江苏等骨干网机房智能解析就近接入，将首跳物理延迟控制在 10ms–25ms 以内。',
      spot: '国内 BGP 入口',
      x: '58%',
      y: '37%',
    },
    {
      title: '核心层：IEPL / IPLC 物理内网专线过境',
      description: '数据包通过运营商级以太网内网专线直通香港、东京或新加坡，不经过拥堵的公网国际出口，晚高峰丢包率趋近于零。',
      spot: 'IEPL 内网过境',
      x: '72%',
      y: '46%',
    },
    {
      title: '落地层：海外高信誉原生 ISP 与智能分流',
      description: '在港、台、日、新、美、英、土等地区使用纯净落地 IP 配合流媒体 DNS 解锁，让 ChatGPT、Claude 与 Netflix 识别为合规本地访问。',
      spot: '海外原生落地',
      x: '57%',
      y: '66%',
    },
  ] satisfies FocusArea[],
};

export const scheduleSection = {
  title: '2026 核心机场分场景速查表',
  intro: '点击上方分类标签（Top主推 / 百元年付 / 不限时包 / 免费试用 / 专属客户端 / 老牌专线 / 历史档案），一键对比价格、协议、优惠码并直达评测页。',
  note: '价格与优惠码核验日期：2026-10-19。结账时输入对应优惠码即可享受 8 折至 9 折减免。',
  reserveLabel: '查看评测',
};

export const coachesSection = {
  title: 'Top 4 王牌主力机场推荐',
  intro:
    '从 42 家评测样本中优中选优的四家标杆品牌：涵盖 2020 年老牌 IEPL 王者「光速云」、全节点 10Gbps「微风网络」、88折大包「暮光加速」与自带客户端「飞猫云」。',
  cta: { label: '查看全部 42 家机场排名', href: '/brands/' } satisfies CallToAction,
};

export const visit = {
  title: '新手 3 分钟科学上网快速上手',
  intro:
    '第一次配置梯子不知道从何下手？按照下面四个步骤，从选定高性价比套餐到成功打开海外网站只需不到三分钟。',
  cta: { label: '前往客户端下载与配置大全', href: '/clients/' } satisfies CallToAction,
  steps: [
    {
      title: '选定机场并复制专属优惠码',
      description: '新手首选 TOP 1 光速云（99元/年或 25元/月，9折码 AMM）或带自研客户端的飞猫云（84元/年，9折码 flycat888）。',
    },
    {
      title: '下载对应系统的代理客户端',
      description: 'Windows/Mac 推荐下载 Clash Verge Rev 或 FlClash；安卓推荐 FlClash 或 v2rayNG；iPhone 推荐美区下载 Shadowrocket 或免费 Karing。',
    },
    {
      title: '一键导入订阅并开启规则分流',
      description: '在机场官网后台点击「一键导入 Clash / Shadowrocket」，将路由模式设为「规则 (Rule)」，确保国内网站直连不耗流量。',
    },
    {
      title: '延迟测速与流媒体 / AI 解锁体验',
      description: '日常网页与视频优先选香港/台湾/新加坡低延迟节点；使用 ChatGPT、Claude 或 Gemini 时切换至日本、美国或新加坡节点。',
    },
  ] satisfies VisitStep[],
};

export const pricingSection = {
  title: '主力专线套餐价格基准参考',
  intro: '以年度 TOP 1「光速云 (Guangsuyun)」真实套餐为基准（可使用 9 折优惠码 AMM），点击切换查看月付原价与年付/折算后单月成本。',
};

export const storiesSection = {
  title: '真实场景选型，\n告别断流焦虑',
  intro: '来自独立开发者、AIGC 研究员与流媒体玩家在对比免费节点与专线机场后的真实选型经验分享。',
};

export const gallery = {
  title: '四大核心评测与工具矩阵',
  intro: '探索 mianfeitizi.world 的四大内容支柱：全量品牌库、免费梯子避坑专题、六大系统客户端与实测图档专栏。',
  images: [
    {
      src: '/media/community/harbor-sunset-meditation-moment.webp',
      alt: '42家机场全景评测与优惠码数据库',
      caption: '42家机场评测库 →',
      href: '/brands/',
    },
    {
      src: '/media/community/red-canyon-dancer-pose-moment.webp',
      alt: '2026免费梯子真相与百元内年付平替专题',
      caption: '免费梯子与平替专题 →',
      href: '/free-nodes/',
    },
    {
      src: '/media/community/shoreline-twilight-flow-moment.webp',
      alt: 'Windows/Mac/iOS/Android/Linux/软路由代理客户端大全',
      caption: '全平台客户端大全 →',
      href: '/clients/',
    },
    {
      src: '/media/community/granite-bay-tree-pose-balance.webp',
      alt: '科学上网深度教程、流媒体解锁与防跑路专栏',
      caption: '深度评测与教程专栏 →',
      href: '/journal/',
    },
  ] satisfies GalleryImage[],
  note: '想直接查看 TOP 1 首选机场的完整 7 档套餐、解锁实测图与优惠码？',
  noteLinkLabel: '直达光速云深度评测页',
};

export const retreatsSection = {
  title: '2026 核心专题与实测实验室',
  intro: '针对搜索量最高的三大核心痛点，我们整理了独立深度专题页，帮您在最短时间内做出靠谱决策。',
  cta: { label: '浏览全部深度文章', href: '/journal/' } satisfies CallToAction,
};

export const faqSection = {
  title: '科学上网与选型常见问答 (GEO FAQ)',
  intro: '汇集 AI 搜索引擎与新手用户最关心的 8 个核心问题，所有回答均基于 2026 年最新核验数据。',
  cta: { label: '查看 42 家机场完整名录', href: '/brands/' } satisfies CallToAction,
};

export const journalSection = {
  title: '深度评测与技术专栏',
  intro: '涵盖免费梯子安全分析、IEPL 与 IPLC 专线原理、ChatGPT 解锁防封号技巧与全平台客户端配置指南。',
  cta: { label: '阅读全部专栏文章', href: '/journal/' } satisfies CallToAction,
};

export const newsletter = {
  title: '订阅机场优惠码与防失联通知',
  intro:
    '输入邮箱订阅本站月度简报：当主力机场发布节假日大促优惠码、更新备用域名或新增实测报告时，第一时间通知您。',
  placeholder: '输入您的常用邮箱地址（如 Gmail / Outlook）',
  buttonLabel: '免费订阅更新',
};

export const cta = {
  title: '告别卡顿断流，\n开启 {lotus} 极速跨境连接',
  intro: '从 99 元/年（折合 8 元/月）的 TOP 1 光速云 IEPL 专线开始，或浏览全部 42 家机场实测档案找到最适合您的方案。',
  button: { label: '直达 TOP 1 光速云评测', href: '/brands/guangsuyun/' } satisfies CallToAction,
  contactLabel: '商务合作与数据纠错邮箱',
  image: { src: '/media/banners/ocean-horizon-practice-banner.webp', alt: '' } satisfies ImageData,
  marquee: { before: 'MianFeiTiZi.World', emphasis: '42家专线机场评测' },
};
