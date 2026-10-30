import { brands, type BrandItem } from './brands';
import { getBrandLink } from './links';

export interface DiagnosticCase {
  step: string;
  title: string;
  probability: string;
  verdict: 'false-alarm' | 'maintenance' | 'high-risk';
  verdictLabel: string;
  symptoms: string[];
  howToVerify: string;
  recoveryAction: string;
}

export interface RunawayRedFlag {
  code: string;
  title: string;
  riskLevel: '极高危 · 立即停续' | '高危 · 严禁年付' | '中危 · 保持警惕';
  costAccounting: string;
  detail: string;
  counterMeasure: string;
}

export interface BrandSafetyRecord {
  rank: number;
  slug: string;
  name: string;
  foundedNote: string;
  safetyTier: 'S' | 'A' | 'B';
  tierLabel: string;
  architecture: string;
  recommendedCycle: string;
  backupRole: string;
  entryPrice: string;
  couponCode: string;
  couponDiscount: string;
  officialUrl: string;
  riskAuditNote: string;
}

export interface RunawayFaqItem {
  question: string;
  answer: string;
}

// ==========================================
// 01 / 真跑路 vs 假失联 5 步自检诊断矩阵
// ==========================================
export const diagnosticCases: DiagnosticCase[] = [
  {
    step: 'STEP 01',
    title: '情景一：机场官网打不开，但客户端里的节点依然能正常科学上网',
    probability: '占比约 45%（最常见的虚惊一场）',
    verdict: 'false-alarm',
    verdictLabel: '假失联 · 仅官网主域名被墙/污染',
    symptoms: [
      '在直连状态下浏览器访问机场旧官网提示「无法访问此网站 / 连接重置 (ERR_CONNECTION_RESET)」。',
      '但打开 Clash / 小火箭后，现有的香港、日本、新加坡节点全部测速正常，YouTube 和 ChatGPT 秒开。',
    ],
    howToVerify:
      '开启代理客户端的「全局模式 (Global)」，用海外节点再次访问机场官网，或者查看机场官方 Telegram 频道置顶的最新防失联发布页域名。',
    recoveryAction:
      '这根本不是跑路！只是机场的推广主域名被国内运营商 DNS 污染了。挂着代理进入新官网后，建议去后台重新复制最新的「备用防污染订阅链接」替换到客户端中，并将新域名加入浏览器书签。',
  },
  {
    step: 'STEP 02',
    title: '情景二：客户端里节点突然一排超时 (Timeout)，但点击「更新订阅」后立刻满血恢复',
    probability: '占比约 30%（国内中转入口 IP 例行轮换）',
    verdict: 'false-alarm',
    verdictLabel: '假失联 · 入口 IP 轮换未同步',
    symptoms: [
      '昨天还能正常用的节点，今天开机发现全部显示红色 Timeout，无法连接。',
      '你已经好几个星期甚至几个月没有点过客户端里的「更新订阅 (Update Subscription)」按钮。',
    ],
    howToVerify:
      '打开客户端的「配置 / 订阅 (Profiles)」页面，右键当前机场配置点击「更新 (Update)」。如果直接拉取失败，用手机开 5G 热点给电脑连一下再点更新。',
    recoveryAction:
      '为了应对国内机房监管与 DDOS 攻击，正规 IEPL 专线机场每隔一段时间会主动更换国内深圳/广州/上海的 BGP 中转入口 IP。只要开启客户端的「每 24 小时自动更新订阅」开关，即可永久避免此类断连。',
  },
  {
    step: 'STEP 03',
    title: '情景三：部分区域节点（如香港）短暂红一片，但日本/新加坡/美国节点依然可用',
    probability: '占比约 15%（上游专线光缆割接或遭同行攻击）',
    verdict: 'maintenance',
    verdictLabel: '临时故障 · 上游机房割接维护',
    symptoms: [
      '晚高峰或凌晨突然发现常驻的香港 IEPL 节点断流，但手动切到同一家机场的日本、新加坡或台湾节点却完全正常。',
      '机场官网面板能正常登录，且公告栏或 TG 群发布了「深港端上游机房光缆割接 / 正在切换备用入口」通知。',
    ],
    howToVerify:
      '登录机场用户面板查看「最新公告」或节点在线率监控状态，通常此类硬件/线路维护会在 1~6 小时内恢复。',
    recoveryAction:
      '直接切换到同机场的另一条跨区专线（如沪日 IEPL 或新加坡线），或者让客户端的 `fallback` 备用组自动接管即可。这也是为什么像 #1 光速云这样拥有多地独立入口冗余的老牌机场抗风险能力最强。',
  },
  {
    step: 'STEP 04',
    title: '情景四：换了三家不同机场的节点全部连不上，或者全绿但浏览器打不开任何外网',
    probability: '占比约 7%（本地网络环境或客户端故障）',
    verdict: 'false-alarm',
    verdictLabel: '本地故障 · 客户端或省际防火墙拦截',
    symptoms: [
      '不仅主力机场连不上，连备胎机场、免费工具箱全都连不上；或者延迟全绿但网页报代理错误。',
      '处于校园网、公司内网、或部分省份（如福建/河南/江苏移动宽带）的特殊白名单管控环境下。',
    ],
    howToVerify:
      '核对电脑系统时间是否准确（误差不能超过 60 秒）；检查是否还在使用已停更的老版 Clash for Windows；用手机断开 Wi-Fi 纯用 5G 流量测试同一条订阅。',
    recoveryAction:
      '前往本站【机场 FAQ 百科全书 (/faq/#emergency)】对照 4 张报错急救卡，更换为 Clash Verge Rev / Flclash 并校准系统时间。',
  },
  {
    step: 'STEP 05',
    title: '情景五：节点全红超过 72 小时 + 订阅链接 404/502 + 官方 TG 群解散或全员禁言 + 工单无响应',
    probability: '占比约 3%（高危实锤信号）',
    verdict: 'high-risk',
    verdictLabel: '真跑路实锤 · 立即启动备胎与止损',
    symptoms: [
      '全部节点连续 3 天以上 100% 离线，更新订阅返回 404 Not Found、502 Bad Gateway 或域名已过期停靠。',
      '官方 Telegram 群组被瞬间删除、开启全员永久禁言，管理员账号显示为 Deleted Account（已注销），后台工单超过 7 天无人处理。',
    ],
    howToVerify:
      '通过多地 Ping 检测工具测试其主备域名，并在社区交叉核实是否全体用户均无法拉取订阅。',
    recoveryAction:
      '切勿抱有幻想继续向其任何残留收款码转账！立即在客户端删除该失效配置，启用备用机场订阅，或直接换用运营满 6 年零跑路记录的【#1 光速云（99元/年 IEPL）】恢复生产与工作。',
  },
];

// ==========================================
// 02 / 机场跑路前夕的 10 大高危预警信号
// ==========================================
export const runawayRedFlags: RunawayRedFlag[] = [
  {
    code: 'FLAG-01',
    title: '突然推出违背物理成本的「2年/3年/5年超低价买断」或「永久无限流量套餐」',
    riskLevel: '极高危 · 立即停续',
    costAccounting:
      '硬件成本账：一条正儿八经的深港 IEPL 物理内网专线批发价约为 800~1,500 元 / 100Mbps / 月，加上国内多线 BGP 入口与落地原生解锁机，一家中型专线机场每月的硬性机房账单都在数万元以上。',
    detail:
      '按量不限时流量包（如 147元/247GB 或 100元/100GB）是合理的商业模型，因为流量用完即止；但如果有新机场号称「只需 59 元包用 3 年」或「99 元终身不限时间不限流量随便用」，在财务上 100% 属于寅吃卯粮的庞氏骗局，目的就是在跑路前最后收割一波长期全款。',
    counterMeasure: '严守铁律：任何机场最多只买「年付（仅限 S 级 5~6 年老牌）」或「按量有限额流量包」，看到“买三年送两年”直接拉黑。',
  },
  {
    code: 'FLAG-02',
    title: '频繁发送全员邮件搞「3折/4折清仓大促、店庆狂欢、最后的骨折价」',
    riskLevel: '极高危 · 立即停续',
    costAccounting:
      '正常运营的专线机场利润率透明，常规折扣码一般稳定在 8 折 ~ 9 折（如光速云常驻 9 折码 AMM、暮光 88 折）。',
    detail:
      '如果一家平时不怎么打折的机场，突然在一个月内连续群发 3~5 封邮件，以“机房升级筹资”、“周年终极回馈”为由推出 3 折、4 折年付/两年付，往往说明其现金流已经断裂，正在凑齐最后一笔资金准备关站。',
    counterMeasure: '把异常低折促销视为撤离发令枪：手头剩余套餐用完即止，绝不贪便宜加仓续费。',
  },
  {
    code: 'FLAG-03',
    title: '宣传的 IEPL/IPLC 内网专线悄悄被偷换成普通公网中转甚至直连 163 线路',
    riskLevel: '高危 · 严禁年付',
    costAccounting:
      '专线退租信号：当机场主交不起上游深港 IEPL 专线的月租账单时，最常见的掩盖手法就是在不通知用户的情况下，把后台入口悄悄切回廉价的公网直连。',
    detail:
      '表现特征为：原本晚高峰稳定在 30ms 的香港节点，突然变成延迟 80~150ms、晚高峰丢包率飙升至 30%，且在敏感时期跟随公网一起大面积断连。',
    counterMeasure: '定期使用客户端延迟测试与路由追踪检验服务质量，发现线路严重缩水且官方装死不解释时，果断停用。',
  },
  {
    code: 'FLAG-04',
    title: '未提前公告，暗中将主力 1x 节点篡改为 3x / 5x / 10x 高倍率加速消耗用户余额',
    riskLevel: '高危 · 严禁年付',
    costAccounting:
      '负债消除术：为了尽快耗尽老用户手头的包年或永久流量包余额，不良机场主会在半夜把默认节点的计费倍率调高数倍。',
    detail:
      '当你发现平时每个月只用 40GB，这个月看同样时长的视频却在三天内被扣光了 150GB 流量，去后台一看才发现所有能用的节点都被改成了 3x 或 5x 倍率，而 1x 节点全部离线摆烂。',
    counterMeasure: '选择承诺全节点真实 1x 透明计费或倍率标注清晰的品牌（如光速云、微风网络、飞猫云）。',
  },
  {
    code: 'FLAG-05',
    title: '官方 Telegram 群长期开启全员禁言、踢出提问老用户、工单超过 72 小时无人回复',
    riskLevel: '极高危 · 立即停续',
    costAccounting:
      '运维停摆信号：正规机场都有专职值班客服或技术运维每天巡检节点并回复工单。',
    detail:
      '如果官方群突然以“整顿群风气”为由连续数周全员禁言，或者只要有人在群里询问“为什么香港节点挂了两天”就被秒踢出群，后台工单石沉大海，说明团队已经放弃日常维护。',
    counterMeasure: '买机场前先看一眼其后台工单响应速度与公告更新频率。',
  },
  {
    code: 'FLAG-06',
    title: '流媒体与 AI 解锁大面积失效（Netflix 仅剩自制剧、ChatGPT 全部报 1020）且长期不修',
    riskLevel: '中危 · 保持警惕',
    costAccounting:
      '解锁 DNS 与原生落地机同样需要按月续费维护，一旦停止续费，节点就会退化为最普通的机房脏 IP。',
    detail:
      '优秀的机场在遇到 OpenAI 或 Netflix 封禁某个 IP 段时，会在 24 小时内自动清洗并切换新的内网 DNS 解锁源；而濒临倒闭的机场则会任由所有节点沦为万人骑高危 IP。',
    counterMeasure: '对 AI 生产力与 4K 追剧有刚需的用户，务必选择提供实测解锁截图保障的头部专线品牌。',
  },
  {
    code: 'FLAG-07',
    title: '把邀请返利佣金（AFF）夸张提高到 50% ~ 80%，发动全网无底线刷屏拉新',
    riskLevel: '极高危 · 立即停续',
    costAccounting:
      '算一笔账：如果用户付 100 元，推广者直接拿走 70 元现金，剩下 30 元连 100GB IEPL 专线的硬件流量成本都不够！',
    detail:
      '凡是给出超高额返利（超过 50% 甚至 70% 循环佣金）的新机场，本质上根本就没打算拿收上来的钱去买服务器带宽，而是利用高佣金诱使网红大 V 帮其快速敛财，收割完首波充值后立刻卷款消失。',
    counterMeasure: '警惕在评论区被机器人账号疯狂刷屏吹捧、却查不到任何历史运营资历的“网红新机场”。',
  },
  {
    code: 'FLAG-08',
    title: '所谓的“新品牌”与上个月刚跑路的某机场采用一模一样的节点命名、套餐定价与客服话术',
    riskLevel: '极高危 · 立即停续',
    costAccounting:
      '换壳秽土转生：部分不良团队专门干“开新站 -> 低价年付收割 -> 3个月关站 -> 换个名字重开”的流水线生意。',
    detail:
      '这类换壳机场往往连节点列表里的 Emoji 排列顺序、套餐文案错别字、甚至前端粗糙改版的 SSPanel / V2Board 默认模板都懒得换，成立时间永远不满半年。',
    counterMeasure: '这就是为什么我们在评测体系中将「创站年份（2020-2022 老牌优先）」列为第一权重指标。',
  },
  {
    code: 'FLAG-09',
    title: '仅支持虚拟币（USDT）或跳转极度可疑的个人收款码，且付款后不自动开通套餐',
    riskLevel: '高危 · 严禁年付',
    costAccounting:
      '正规运营的机场均对接了成熟的聚合支付网关（支持支付宝/微信自动回调秒开套餐）。',
    detail:
      '如果付款后长时间不到账、需要手动发截图找客服人工充值，或者收款通道频繁报错无人修复，说明其支付接口已被风控冻结或后端队列早已无人看管。',
    counterMeasure: '新接触一家机场时，永远先用最小金额（如试用包或最低档月付）测试其自动发货与节点连通性。',
  },
  {
    code: 'FLAG-10',
    title: '频繁以“上游涨价、机房被拔线”为由，强制要求已付费年付老用户额外补交“线路升级费”',
    riskLevel: '极高危 · 立即停续',
    costAccounting:
      '二次收割套路：先把普通用户骗进年付，用了一个月后把普通组节点全停掉，弹窗要求再交 50 元升级到 VIP2 才能继续用。',
    detail:
      '契约精神是老牌机场立身之本。真正值得信赖的机场（如光速云、星岛梦、WgetCloud、微风网络）在承诺的套餐周期内绝不会向老用户强征任何所谓的“通道激活费”或“强制升级费”。',
    counterMeasure: '一旦遇到强制要求老用户补差价才能恢复连接的情况，切勿补款（补了也会在两周内跑路），立即止损换站。',
  },
];

// ==========================================
// 03 / 全站 42 家机场运营年限与安全风控评级矩阵
// ==========================================
function buildSafetyRating(brand: BrandItem): BrandSafetyRecord {
  const sTierRanks = new Set([1, 6, 8, 22, 26, 27, 29, 30, 31, 35, 36, 40]);
  const aTierRanks = new Set([2, 3, 4, 5, 7, 9, 10, 11, 12, 16, 17, 19, 20, 23, 24, 25, 28, 32, 33, 39]);
  const link = getBrandLink(brand.slug);

  let safetyTier: 'S' | 'A' | 'B' = 'B';
  let tierLabel = 'B 级 · 新锐高性价比观察池';
  let recommendedCycle = '建议先免费试用 / 月付 / 百元内小额包体验';
  let backupRole = '适合作为低成本尝鲜或下载分流副卡';
  let riskAuditNote =
    '2024-2025 年间上线或主打极致低价的新锐品牌，性价比突出，但按风控纪律建议优先选择月付或百元内小额套餐，避免一次性充值多年。';

  if (sTierRanks.has(brand.rank)) {
    safetyTier = 'S';
    tierLabel = 'S 级 · 5~6年老牌稳健池';
    recommendedCycle = '支持安心年付 / 季付 / 永久流量包';
    backupRole = brand.rank === 1 ? '全站首选主力旗舰 (TOP 1)' : '高可靠主力或长线战备池';
    riskAuditNote =
      brand.rank === 1
        ? '2020 年起稳定运营满 6 年零跑路记录，全线 IEPL 物理内网专线 + VLESS 协议，轻量版 99元/年与永久包 147元/247GB 兼具顶级稳健度与极致性价比。'
        : `${brand.foundedYear || '2020-2021年'}起稳定运营的老牌劲旅，穿越多轮行业洗牌与敏感期考验，资金链与上游专线资源极其扎实，可放心作为主力长线持有。`;
  } else if (aTierRanks.has(brand.rank)) {
    safetyTier = 'A';
    tierLabel = 'A 级 · 成熟专线主力池';
    recommendedCycle = '建议先月付/季付或特惠百元年付 + 搭配冷备';
    backupRole = brand.hasUnlimitedDurationPlan ? '极佳的不限时永久包冷备/主力' : '高带宽主力或流媒体专用池';
    riskAuditNote = `${brand.foundedYear || '2022-2023年'}运营至今的成熟专线/中转机场，线路带宽充裕、流媒体与 AI 解锁完善；建议遵循“主力 + 备胎”双栈策略稳妥使用。`;
  }

  return {
    rank: brand.rank,
    slug: brand.slug,
    name: brand.name,
    foundedNote: brand.foundedYear || '成熟运营',
    safetyTier,
    tierLabel,
    architecture: `${brand.lineType} (${brand.protocols.join('/')})`,
    recommendedCycle,
    backupRole,
    entryPrice: brand.pricingSummary,
    couponCode: link.couponCode ?? '无',
    couponDiscount: link.couponDiscount ?? '官方直享价',
    officialUrl: link.registerUrl,
    riskAuditNote,
  };
}

export const brandSafetyMatrix: BrandSafetyRecord[] = brands.map(buildSafetyRating);

// ==========================================
// 04 / 双栈防失联 (Dual-Stack Failover) 标准 YAML 配置模板
// ==========================================
export const dualStackFailoverYaml = `# Clash Verge Rev / Mihomo (Clash.Meta) 「一主一备 · 0.5秒自动故障转移」标准配置模板
# 架构说明：
# - 主力订阅 (Primary)：#1 光速云 IEPL 专线 (99元/年 或 月付套餐，日常承担 99% 高速流量)
# - 冷备订阅 (Backup)：Firefly 萤火虫 / 星岛梦 / 二猫云 (百元不限时永久流量包，平时 0 消耗，主线维护时自动无缝接管)

proxy-providers:
  Guangsuyun_Primary:
    type: http
    url: "https://在这里填入你的【光速云】Clash订阅链接"
    interval: 86400
    path: ./providers/guangsuyun.yaml
    health-check:
      enable: true
      interval: 300
      url: https://www.gstatic.com/generate_204

  Eternal_Backup:
    type: http
    url: "https://在这里填入你的【备用永久流量包】Clash订阅链接"
    interval: 86400
    path: ./providers/backup.yaml
    health-check:
      enable: true
      interval: 600
      url: https://www.gstatic.com/generate_204

proxy-groups:
  - name: "🛡️ 永不失联·主备自动容灾"
    type: fallback
    proxies:
      - "⚡ 主力·光速云IEPL自动优选"
      - "🛟 冷备·永久流量包应急接管"
    url: https://www.gstatic.com/generate_204
    interval: 180
    lazy: false

  - name: "⚡ 主力·光速云IEPL自动优选"
    type: url-test
    use:
      - Guangsuyun_Primary
    filter: "(?i)港|HK|Hong Kong|新|SG|Singapore|日|JP|Japan|台|TW"
    exclude-filter: "(?i)剩余|到期|官网|2x|3x|5x"
    url: https://www.gstatic.com/generate_204
    interval: 300
    tolerance: 30

  - name: "🛟 冷备·永久流量包应急接管"
    type: url-test
    use:
      - Eternal_Backup
    exclude-filter: "(?i)剩余|到期|官网"
    url: https://www.gstatic.com/generate_204
    interval: 600`;

// ==========================================
// 05 / 跑路预警与防失联深度 FAQ
// ==========================================
export const runawayFaqs: RunawayFaqItem[] = [
  {
    question: '为什么哪怕是最顶级的专线机场，老手也建议配置「一主一备（Dual-Stack）」？',
    answer:
      '因为跨境网络涉及国内多省市运营商入口、深港/沪日跨海光缆、海外数据中心以及域名注册商等多个环节。哪怕机场本身资金极其雄厚（如 2020 年运营至今的光速云、星岛梦），每年也可能遇到 1~2 次持续数小时的「上游机房光缆割接或入口 IP 轮换」。在客户端里同时放一个 100 元左右的不限时永久流量包（平时不用不扣流量、永不过期），就能用接近 0 元的边际成本实现全年 365 天 × 24 小时 100% 永不失联。',
  },
  {
    question: '怎么科学控制买机场的资金风险？月付、季付、年付的黄金法则是什么？',
    answer:
      '请严格执行「三级风控买法」：① 凡是成立不满 2 年的 B 级新锐机场，无论价格多诱人，永远只先用免费试用或买 1 个月（10~15 元），绝不直接买年付；② 成立 3~4 年的 A 级成熟专线机场，建议先月付测试本地宽带晚高峰表现，满意后再转季付或百元内特惠年付；③ 只有经过 5~6 年以上完整周期检验的 S 级老牌（如 #1 光速云 99元/年、#6 星岛梦、#29 WgetCloud、#36 青云梯），才值得直接入手包年套餐。',
  },
  {
    question: '如果不幸遇到了劣质小机场跑路，已经导入客户端的残留订阅需要马上删掉吗？',
    answer:
      '必须立刻删除！原因有二：① 跑路机场遗弃的过期域名很可能会被黑客或灰产抢注（Domain Drop Catching），如果你开启了客户端自动更新订阅，抢注者可以向你的客户端下发恶意规则或钓鱼节点；② 残留的失效节点会让客户端后台不断发起超时重试，拖慢正常上网速度并增加手机耗电。',
  },
  {
    question: '如何防止因为机场官网域名被墙而找不到最新的后台登录地址？',
    answer:
      '养成三个好习惯：① 注册购买后，第一时间把本站 `mianfeitizi.world` 加入浏览器收藏夹（我们会持续巡检并同步更新 42 家机场的最新可用官方入口链接）；② 加入所购机场的官方 Telegram 通知频道或保存其 GitHub 防失联地址发布页；③ 在客户端开启「每 24 小时自动更新订阅」，只要有一条节点能通，就能直接挂着全局代理打开机场原官网。',
  },
];
