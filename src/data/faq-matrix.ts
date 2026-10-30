export interface FaqCategoryMeta {
  id:
    | 'buying'
    | 'network'
    | 'protocol'
    | 'troubleshooting'
    | 'ai-unlock'
    | 'streaming'
    | 'router'
    | 'security';
  code: string;
  label: string;
  shortLabel: string;
  description: string;
}

export interface FaqEntry {
  id: string;
  category: FaqCategoryMeta['id'];
  question: string;
  shortAnswer: string;
  detailParagraphs: string[];
  actionTip?: string;
  codeSnippet?: string;
  relatedLinks?: { label: string; href: string }[];
  keywords: string[];
}

export interface EmergencyFixCard {
  code: string;
  symptom: string;
  rootCause: string;
  quickFixSteps: string[];
  targetFaqId: string;
}

export const faqCategories: FaqCategoryMeta[] = [
  {
    id: 'buying',
    code: '01',
    label: '选型预算与防坑指南',
    shortLabel: '选型与预算',
    description: '新手如何挑选第一家主力机场？月付、包年与按量不限时流量包怎么组合最划算？倍率陷阱怎么识破？',
  },
  {
    id: 'network',
    code: '02',
    label: 'IEPL/IPLC 专线与底层网络',
    shortLabel: '专线与线路',
    description: '公网直连、BGP 中转、IPLC 与 IEPL 内网专线到底差在哪？为什么晚高峰公网必炸而专线稳如泰山？',
  },
  {
    id: 'protocol',
    code: '03',
    label: 'VLESS / Trojan / Hysteria2 协议百科',
    shortLabel: '加密协议',
    description: 'Shadowsocks、VMess、Trojan、VLESS Reality、AnyTLS 与 Hysteria2 的抗封锁能力、握手开销与适用场景对比。',
  },
  {
    id: 'troubleshooting',
    code: '04',
    label: '客户端报错急救与断网修复',
    shortLabel: '报错急救室',
    description: '订阅导入报 YAML syntax error、连上代理却打不开网页、关闭代理后国内断网、微信转圈、TUN 启动失败等一站式排障。',
  },
  {
    id: 'ai-unlock',
    code: '05',
    label: 'ChatGPT / Claude / Cursor AI 防封分流',
    shortLabel: 'AI 解锁防封',
    description: '为什么 ChatGPT 会遇到 1020 报错或降智（Degraded Performance）？Claude 如何防秒封？Cursor 与终端如何配置专属分流？',
  },
  {
    id: 'streaming',
    code: '06',
    label: 'Netflix 4K / Disney+ / 动画疯 / 游戏 NAT',
    shortLabel: '流媒体与游戏',
    description: '奈飞非自制剧解锁原理、DNS 解锁与原生 IP 的区别、YouTube 送中修复、巴哈姆特动画疯以及 PC/主机游戏 FullCone NAT 配置。',
  },
  {
    id: 'router',
    code: '07',
    label: 'OpenWrt 软路由 / Apple TV / 局域网共享',
    shortLabel: '软路由与共享',
    description: '如何把电脑代理通过 Allow LAN 共享给手机/Switch/PS5？OpenClash Fake-IP 与 Redir-Host 怎么选？NAS Docker 如何拉取镜像？',
  },
  {
    id: 'security',
    code: '08',
    label: 'HTTPS 隐私安全 / 审计规则 / 防泄露',
    shortLabel: '隐私与安全',
    description: '机场主到底能不能看到你的账号密码与聊天记录？什么是机场审计规则？如何彻底封堵 DNS 污染与 WebRTC 真实 IP 泄露？',
  },
];

export const emergencyFixCards: EmergencyFixCard[] = [
  {
    code: 'FIX-01',
    symptom: '关闭代理软件后，国内网页（百度/B站）全部显示 ERR_PROXY_CONNECTION_FAILED 打不开',
    rootCause: '代理软件异常退出或被强杀，未自动清除 Windows/macOS 系统代理注册表指向（仍指向已关闭的 127.0.0.1:7890）。',
    quickFixSteps: [
      '最快修复：重新打开代理客户端，先点开「系统代理 (System Proxy)」再正常点关，最后右键托盘图标选择「退出 (Quit)」。',
      '手动修复（Windows）：打开「设置 -> 网络和 Internet -> 代理」，关闭「使用代理服务器」开关并点击保存。',
      '手动修复（macOS）：打开「系统设置 -> 网络 -> 当前 Wi-Fi 详细信息 -> 代理」，关闭网页代理 (HTTP) 与安全网页代理 (HTTPS)。',
    ],
    targetFaqId: 'faq-err-proxy-connection-failed',
  },
  {
    code: 'FIX-02',
    symptom: '导入订阅链接时提示 YAML syntax error / invalid configuration 或节点列表为空',
    rootCause: '直接把通用 Base64 订阅粘贴进了仅支持 Clash/Mihomo 格式的导入框，或机场订阅域名被本地运营商 DNS 劫持返回了空白网页。',
    quickFixSteps: [
      '检查订阅格式：去机场后台重新复制「一键导入 Clash」或带有 `?flag=clash` / `?flag=meta` 后缀的专属链接。',
      '更换内核：若机场已升级 VLESS Reality / Hysteria2 协议，旧版 Clash for Windows (CFW) 无法识别，请立即更换为 Clash Verge Rev 或 Flclash。',
      '绕过 DNS 污染：将电脑本地 DNS 临时改为 `223.5.5.5` 或开启手机热点后再点击「更新订阅」。',
    ],
    targetFaqId: 'faq-yaml-syntax-error',
  },
  {
    code: 'FIX-03',
    symptom: '节点全部有绿色延迟数字（如 45ms），但浏览器依然打不开 Google / YouTube',
    rootCause: '未开启「系统代理 (System Proxy)」或「TUN 虚拟网卡」开关，或者电脑系统时间与标准北京时间误差超过 90 秒导致 TLS 握手被拒。',
    quickFixSteps: [
      '第一步：确认客户端主界面的「系统代理 (System Proxy)」开关已点亮，且代理模式处于「规则 (Rule)」而非「直连 (Direct)」。',
      '第二步：右键电脑右下角时间 ->「调整日期和时间」-> 点击「立即同步 (Sync Now)」，确保误差在 5 秒以内。',
      '第三步：检查浏览器是否安装了 SwitchyOmega、AdGuard VPN 等残留代理扩展冲突，建议在无痕窗口（禁用所有插件）下复测。',
    ],
    targetFaqId: 'faq-green-latency-no-internet',
  },
  {
    code: 'FIX-04',
    symptom: '开启代理后，微信发不出图片、淘宝/京东加载极慢或网银 APP 提示网络异常',
    rootCause: '误开了「全局模式 (Global Mode)」导致国内流量绕行海外节点，或 Fake-IP 劫持了微信/网银的私有协议域名。',
    quickFixSteps: [
      '立即将代理模式从「全局 (Global)」切换回「规则 (Rule / 绕过大陆)」，让国内流量直连不走代理。',
      '若开启了 TUN 模式导致微信卡顿，可在客户端「TUN 设置 -> fake-ip-filter」中加入 `*.qq.com`、`*.tencent.com` 与 `*.alicdn.com`。',
      '点击客户端面板中的「刷新 DNS 缓存 (Flush Fake-IP Cache)」并重启微信客户端。',
    ],
    targetFaqId: 'faq-wechat-taobao-slow',
  },
];

export const faqEntries: FaqEntry[] = [
  // ==========================================
  // 01 / 选型预算与防坑指南 (buying)
  // ==========================================
  {
    id: 'faq-beginner-first-airport',
    category: 'buying',
    question: '新手第一次买机场梯子，预算有限，怎么选才不会踩坑？',
    shortAnswer:
      '遵循「先看运营年限（优先选 2020-2022 老牌）、二看传输架构（优选 IEPL 内网专线）、三看入门门槛（优先支持百元内年付或低门槛月付）」三原则。目前综合稳健度最高的是 2020 年运营至今的 TOP 1 光速云（99元/年折合 8.2元/月）。',
    detailParagraphs: [
      '对于绝大多数日均使用 ChatGPT、Google 学术检索、刷 YouTube 4K 和 Telegram 的用户来说，最容易踩的两个坑是：① 贪图完全免费去用未知来源的野鸡公益节点（频繁断联且存在劫持风险）；② 被某些刚开张两个月的新机场「3年付 50 元无限流量」的噱头吸引，结果用了一个月就遭遇跑路。',
      '最稳妥的科学选型策略是：直接锁定运营满 4~6 年以上、拥有自研或成熟面板、且采用 IEPL 内网专线的老牌机场。例如本站实测榜首的【#1 光速云】（2020 年起稳定运营 6 年零跑路记录），采用全线 IEPL 专线 + VLESS 协议，轻量版仅需 99元/年（59GB/月，叠加 9 折码 AMM 后折合每月不到 7.5 元），既有大厂级晚高峰稳定性，又把试错成本控制在了一杯奶茶钱以内。',
    ],
    actionTip: '如果你不确定自己每月用多少流量，可以先买一个月付套餐（15~20元）或选光速云 147元/247GB 的不限时永久流量包，测准自己的月均消耗后再决定是否包年。',
    relatedLinks: [
      { label: '查看 TOP 1 光速云深度评测', href: '/brands/guangsuyun/' },
      { label: '42 家机场全景对比库', href: '/brands/' },
    ],
    keywords: ['新手选机场', '便宜好用的梯子', '光速云', '防踩坑', '99元包年'],
  },
  {
    id: 'faq-monthly-vs-yearly-vs-traffic-pack',
    category: 'buying',
    question: '按月付、包年特惠、还是按量不限时（永久流量包）更划算？怎么组合最好？',
    shortAnswer:
      '轻度用户（月均 <50GB）选百元内轻量年付或永久不限时流量包最省钱；中重度用户（月均 100GB~500GB）主力机场建议「先月付测试、稳定后再季付/年付」，并搭配一个百元永久流量包做冷备。',
    detailParagraphs: [
      '我们可以算一笔清晰的经济账：① **包年轻量套餐**：以光速云 99元/年（59GB/月）、飞猫云 84元/年（50GB/月）、宇宙云 88元/年（60GB/月）为代表，月均成本仅 7~8 元，非常适合每天查资料、用 AI、看 1080P 视频的上班族与学生党；② **按量不限时流量包（永久有效、用完即止）**：例如光速云 147元/247GB、Firefly 萤火虫 109.9元/200GB、星岛梦 168元/200GB、二猫云 190元/300GB，没有每月清零焦虑，哪怕一年只用 100GB 也不会过期浪费；③ **标准月付/季付**：适合每月消耗 200GB~1TB 以上的 4K 影音党与跨境团队。',
      '资深玩家最推崇的「黄金双栈组合」是：主力用 **光速云**（包年或月付，日常承担 95% 流量），同时花 100 元左右买一个 **Firefly 萤火虫** 或 **星岛梦** 的不限时永久流量包导入客户端设为 `fallback` 备用。平时备用包一分钱不花、流量不掉；万一遇到上游光缆维护，0.5 秒无感接管，彻底告别失联焦虑。',
    ],
    relatedLinks: [
      { label: '查看双栈防失联配置教程', href: '/runaway-watch/#dual-stack' },
      { label: '平价与免费替代方案对比', href: '/free-nodes/' },
    ],
    keywords: ['按量付费', '不限时流量包', '永久套餐', '包年还是月付', '一主一备'],
  },
  {
    id: 'faq-traffic-multiplier-explained',
    category: 'buying',
    question: '机场节点名称后面的「1x / 2x / 0.1x / 5x 倍率」是什么意思？如何避免流量一夜跑光？',
    shortAnswer:
      '「倍率（Multiplier）」是机场计算流量扣费的权重系数：实际扣除流量 = 真实消耗流量 × 节点倍率。例如在 2x 倍率节点下看一部 5GB 的 4K 电影，账户会扣除 10GB 流量；而在 0.1x 闲时节点下载 10GB 文件，只扣 1GB。',
    detailParagraphs: [
      '为什么机场要设置不同倍率？因为不同地区和底层线路的带宽采购成本相差十倍以上。例如深港 IEPL 专线、原生住宅家宽 IP（用于深度解锁 TikTok 直播或高风控 AI）的采购成本极高，部分机场会标为 `1.5x` 或 `2x`；而普通直连或夜间闲时复用带宽成本低，有时会给出 `0.2x` 或 `0.5x` 福利倍率。',
      '很多新手抱怨「刚买的 100GB 套餐怎么三天就用完了」，90% 的原因是不小心把节点锁死在了某个 `3x` 或 `5x` 的高倍率精品节点上挂后台看 4K 视频或让 Steam 走代理更新了游戏。选购时，优先选择像 **光速云**、**微风网络**、**飞猫云** 这样主力常用节点全线采用真实 `1x` 标准计费、不玩虚标套路的品牌。',
    ],
    actionTip: '在 Clash Verge Rev / Mihomo 的自动测速组（url-test）中，可以通过 `exclude-filter: "(?i)2x|3x|5x|高倍率"` 正则表达式自动排除高倍率节点，防止后台自动切过去偷跑流量。',
    keywords: ['节点倍率', '流量扣得快', '1x倍率', '流量计算', 'exclude-filter'],
  },
  {
    id: 'faq-device-limit-and-ban',
    category: 'buying',
    question: '套餐写的「不限设备数」和「限 3 台/5 台设备」是怎么判定的？合租共享会被封号吗？',
    shortAnswer:
      '机场后台通常通过「同一时间段内请求连接节点的独立公网来源 IP 数量（即你的宽带/5G 基站出口 IP）」来统计在线设备数，而非统计你装了几台手机或电脑。同一家里 Wi-Fi 下的 10 台设备在机场端通常只算 1 个连接 IP。',
    detailParagraphs: [
      '理解这一点非常重要：假设你在家里的路由器或电脑、iPad、手机上同时连着同一个家庭宽带 Wi-Fi 使用代理，由于它们对外的公网 IP 是同一个，机场审计系统通常只会将其识别为 1 个在线终端。因此个人拥有手机、电脑、平板、软路由多台设备完全无需担心「限 3 台/5 台」不够用。',
      '真正触发封号风控的是「异地多 IP 并发滥用」——比如你把订阅链接发给在 5 个不同城市的朋友同时挂着看视频，或者不小心把订阅上传到了公开 GitHub 仓库被爬虫抓取。像 **光速云**、**微风网络**、**暮光加速** 等头部品牌对个人全场景自用非常友好（支持多设备同时在线），但严禁公开分享或商业倒卖订阅。',
    ],
    keywords: ['设备数量限制', '不限设备', '合租封号', '家庭共享代理', '同时在线IP'],
  },
  {
    id: 'faq-how-much-traffic-per-month',
    category: 'buying',
    question: '我每个月到底需要多少 GB 流量？50GB、150GB 和 500GB 分别够干什么？',
    shortAnswer:
      '纯查资料 + ChatGPT/Claude 对话 + Telegram 社交每月仅需 10~25GB；每天刷 1~2 小时 YouTube 1080P/2K 视频约需 50~80GB/月；每天重度观看 Netflix 4K HDR 或频繁拉取 Docker 镜像建议选择 150GB~300GB/月以上。',
    detailParagraphs: [
      '很多用户对流量大小没有直观概念，这里给出一份实验室实测换算表：① **ChatGPT / Claude / Cursor 编程对话**：纯文本与代码交互极省流量，高强度使用一整天不到 50MB，一个月仅消耗 1~2GB；② **网页浏览 / X (Twitter) / Instagram 图文**：每月约 15~30GB；③ **YouTube / TikTok 短视频**：1080P 视频每小时约消耗 1.2GB~1.8GB，4K 60帧视频每小时消耗约 5GB~7GB；④ **Netflix / Disney+ 4K 杜比视界电影**：一部两小时的 4K 原盘级流媒体电影约消耗 10GB~14GB。',
      '因此，如果你主要是工作学习、用 AI 和日常轻度看视频，**光速云 99元/年（每月 59GB）** 或 **飞猫云 84元/年（每月 50GB）** 完全绰绰有余；如果是 4K 追剧狂魔，建议直接上 150GB~300GB 档位的主力套餐。',
    ],
    keywords: ['每月多少流量够用', '50GB够用吗', '看4K耗多少流量', 'ChatGPT耗流量吗'],
  },
  {
    id: 'faq-coupon-code-usage',
    category: 'buying',
    question: '本站提供的专属优惠码（如光速云 AMM、微风 9527）怎么使用？续费还能用吗？',
    shortAnswer:
      '在对应机场官网选定套餐进入结算页（Checkout）时，找到「优惠码 / 折扣码 / Promo Code」输入框，填入本站公示的兑换码并点击「验证 / Apply」，确认总价扣减后再付款即可。',
    detailParagraphs: [
      '部分新用户在结账时直接点了立即支付，跳过了右侧或底部的「验证优惠码」按钮，导致原价付款。请务必在唤起支付宝/微信二维码之前，核对账单金额是否已经按折扣（如光速云输入 `AMM` 享全场 9 折、暮光加速输入 `muguang88` 享 88 折、优云 666 享 7 折）完成减免。',
      '关于续费：大部分常驻优惠码支持多次创建新订单使用；如果是限时节日活动码，通常在购买包年套餐时一次性锁死折扣最划算。',
    ],
    relatedLinks: [
      { label: '查看 42 家机场完整优惠码清单', href: '/brands/#directory' },
    ],
    keywords: ['优惠码怎么用', '折扣码验证', 'AMM优惠码', '机场续费打折'],
  },

  // ==========================================
  // 02 / IEPL/IPLC 专线与底层网络 (network)
  // ==========================================
  {
    id: 'faq-direct-vs-bgp-vs-iepl',
    category: 'network',
    question: '公网直连、BGP 中转、IPLC 和 IEPL 内网专线到底有什么区别？为什么差价这么大？',
    shortAnswer:
      '核心区别在于「过境段是否经过公共国际防火墙（GFW）与拥堵的公网国际出口」。公网直连直接裸奔过墙，晚高峰必丢包且极易被封 IP；BGP 中转改善了国内接入但仍走公网出境；IPLC/IEPL 则是运营商级点对点物理/以太网内网专线，完全不过公网，延迟低至 15~35ms 且全年敏感期不掉线。',
    detailParagraphs: [
      '我们可以用交通工具来打比方：① **公网直连（Direct 163/普通线路）**：相当于骑自行车走免费国道出境，平时白天还能骑，一到晚上 8 点至 11 点晚高峰，收费站大堵车（国际出口拥塞 + QoS 丢包高达 30%~60%），遇到节假日或敏感期直接封路；② **国内 BGP 中转（隧道中转）**：相当于在国内先坐高铁（阿里云/移动/电信 BGP 入口）到广州/深圳，然后再换乘普通大巴出境，比纯直连快，但出境段依然受公网波动影响。',
      '③ **IPLC / IEPL 内网专线（International Ethernet Private Line）**：相当于深港/沪日之间直接修建了一条封闭式地下跨海高铁专列（端到端内网物理隔离，二层以太网透传）。你的数据包从国内阿里云/腾讯云/BGP 机房入口进去后，直接通过深港/广港内网专线在 2~5 毫秒内穿到香港落地机房，全程不经过公网国际出口，因此不仅晚高峰 4K 秒开、零丢包，而且在任何特殊时期都能保持满血在线。这也是为什么像 **#1 光速云**、**#2 微风网络**、**#3 暮光加速** 坚持采用全线 IEPL 专线的根本原因。',
    ],
    relatedLinks: [
      { label: '阅读《IEPL 与普通中转底层架构深度拆解》', href: '/journal/iepl-vs-iplc-vs-bgp-relay-protocol-vless-trojan-guide/' },
    ],
    keywords: ['IEPL和IPLC区别', 'BGP中转是什么', '公网直连为什么卡', '内网专线原理'],
  },
  {
    id: 'faq-evening-peak-slowdown',
    category: 'network',
    question: '为什么很多便宜梯子白天测速能跑 300Mbps，一到晚上 8 点到 11 点就卡成 PPT？',
    shortAnswer:
      '这是典型的「公网国际出口晚高峰拥塞 + 廉价机场超售带宽」综合症。晚上 20:00-23:00 是全国跨境流量的最高峰，普通 163 骨干网对 UDP 和长连接实施严厉的 QoS 限速丢包，且超售机场的共享母鸡带宽被几千人同时挤爆。',
    detailParagraphs: [
      '白天上午测速快具有极大的欺骗性，因为那时跨境信道空闲率超过 70%。真正的试金石永远是「工作日晚间 20:30 - 22:30」。在这个黄金时段，中国电信 163 网、联通 4837 和移动 CMI 的公网国际出口利用率接近饱和，运营商路由器会主动丢弃普通海外连接的 TCP/UDP 数据包以保障政企专线。',
      '要彻底解决晚高峰卡顿，只有两个办法：① 换用真正的 **IEPL / IPLC 专线机场**（如光速云、微风网络、飞猫云），因为专线拥有独立的 SLA 带宽保障，不参与公网排队；② 如果某个香港节点在晚高峰负载偏高，临时切换到同机场的新加坡或日本 IEPL 节点分担负载。',
    ],
    keywords: ['晚高峰卡顿', '白天快晚上慢', 'QoS限速', '国际出口拥堵', '晚高峰不卡的机场'],
  },
  {
    id: 'faq-ping-latency-vs-bandwidth',
    category: 'network',
    question: '客户端里显示的延迟（如 35ms vs 180ms）代表网速快慢吗？为什么延迟低有时候看视频反而慢？',
    shortAnswer:
      '延迟（Latency/Ping，单位 ms）代表数据包往返的「响应时间」，决定网页打开的第一下快不快、打游戏跟不跟手；带宽（Bandwidth，单位 Mbps）代表「水管粗细」，决定看 4K/8K 视频和下载大文件的最高速度。两者不是一回事。',
    detailParagraphs: [
      '举个例子：一条香港节点的延迟只有 `25ms`（因为物理距离近），但如果这台落地服务器的带宽只有 50Mbps 且同时有 200 个人在刷 4K，你点开网页第一下反应很快，但视频缓冲却只有 2MB/s；反之，一条美国洛杉矶 IEPL 专线节点的物理延迟是 `155ms`（光速绕半个地球的物理极限约为 130ms），但它的单口带宽高达 10Gbps，你看 YouTube 8K 依然能跑满 500Mbps！',
      '选节点的黄金口诀是：**网页秒开、ChatGPT 交互、语音通话、联机游戏选低延迟节点（香港/台湾/日本/新加坡，30~70ms）**；**下载超大文件、特定美区 AI 与美区流媒体选高带宽美西专线节点（140~170ms）**。',
    ],
    keywords: ['延迟和网速关系', 'Ping值低但是网速慢', '香港节点和美国节点怎么选', 'URL-Test测速原理'],
  },
  {
    id: 'faq-telecom-unicom-mobile-entrance',
    category: 'network',
    question: '家里是移动宽带/长城宽带/校园网，用机场专线跟电信、联通有区别吗？',
    shortAnswer:
      '如果是公网直连机场，移动宽带和长城宽带的体验极差（墙中墙 + 出口绕路）；但如果是采用「国内多线 BGP 入口 + IEPL 专线」的一线机场（如光速云、微风网络），三大运营商与校园网都能在省内就近接入 BGP 入口，体验几乎没有差异。',
    detailParagraphs: [
      '中国互联网存在严重的「跨网结算瓶颈」与「移动宽带墙中墙（省际审计更严）」。如果你用直连节点，移动宽带往往要先绕道北京或广州，甚至直接无法握手。',
      '而正规 IEPL 专线机场会在国内深圳、广州、上海、杭州等地部署多线 BGP（Border Gateway Protocol）中转入口——无论你是电信、联通、移动还是教育网，数据包在国内段走的是高速内网直达入口机房，随后直接进 IEPL 专线出境。因此移动宽带用户更应该远离直连机场，坚定选择多线 BGP + IEPL 架构的品牌。',
    ],
    keywords: ['移动宽带用什么机场', '校园网梯子', '多线BGP入口', '墙中墙解决'],
  },
  {
    id: 'faq-udp-fullcone-quic',
    category: 'network',
    question: '什么是 UDP 转发与 QUIC（HTTP/3）？为什么有时候关掉浏览器 QUIC 反而看 YouTube 更快？',
    shortAnswer:
      'UDP 是一种无连接的高速传输协议，广泛用于语音通话（Discord/微信语音）、联机游戏以及 Google/YouTube 的 HTTP/3 (QUIC) 协议。但由于国内运营商对大流量 UDP 包存在严厉的 QoS 限流，在部分宽带下关闭浏览器 QUIC 强制回退到 TCP 反而能让 YouTube 4K 速度翻倍。',
    detailParagraphs: [
      'Google 和 YouTube 默认优先使用基于 UDP 443 端口的 QUIC (HTTP/3) 协议传输视频流。如果你使用的是普通中转或本地运营商对 UDP 限制极严（例如部分地区的晚高峰电信/移动），UDP 包会被大量丢弃，导致 YouTube 卡顿，而此时 Speedtest（走 TCP）却很快。',
      '排查方法：在 Chrome / Edge 地址栏输入 `chrome://flags/#enable-quic`，将其设置为 `Disabled` 重启浏览器；或者在 Clash/Mihomo 配置中添加一条 `AND,((NETWORK,UDP),(DST-PORT,443)),REJECT` 规则，浏览器会自动在 1 毫秒内无感回退到极其稳定的 TCP TLS 信道，YouTube 8K 往往立刻起飞。',
    ],
    keywords: ['YouTube卡顿解决', '关闭QUIC', 'UDP转发', 'HTTP/3限速', 'REJECT UDP 443'],
  },
  {
    id: 'faq-sensitive-period-survival',
    category: 'network',
    question: '每年特殊敏感时期或大型会议期间，为什么很多梯子集体瘫痪？怎么做到全年不断网？',
    shortAnswer:
      '敏感期封锁主要针对「公网过境 IP 与特征明显的旧协议」。采用 IEPL/IPLC 物理内网专线（不经过公网防火墙）+ 現代抗审查协议（VLESS / Trojan）的老牌机场在敏感期几乎不受影响。',
    detailParagraphs: [
      '每逢重要时间节点，公网国际出口的 DPI（深度包检测）水位会大幅上调，直连 VPS 的 IP 往往成批被阻断端口或彻底封禁 IP。而 IEPL 内网专线由于在物理层面上走的是政企内网跨境通道，压根不经过公网 GFW 探针，因此天生具备免疫能力。',
      '唯一可能影响专线机场的情况是「上游机房合规割接或入口 IP 轮换」。为此，只要你提前做好两件事就能实现 365 天 100% 不断网：① 主力选择 **#1 光速云** 这种拥有多条独立深港/沪日专线冗余池的 6 年老牌；② 客户端里同时挂一个备胎机场的按量永久包，并定期点击「更新订阅」同步最新入口 IP。',
    ],
    relatedLinks: [
      { label: '前往跑路预警与防失联中心', href: '/runaway-watch/' },
    ],
    keywords: ['敏感期不断网', '特殊时期稳定的机场', '为什么梯子突然全挂了', 'IEPL抗封锁'],
  },

  // ==========================================
  // 03 / VLESS / Trojan / Hysteria2 协议百科 (protocol)
  // ==========================================
  {
    id: 'faq-protocol-comparison-overview',
    category: 'protocol',
    question: 'Shadowsocks (SS)、VMess、Trojan、VLESS、AnyTLS 和 Hysteria2 到底哪个最好？',
    shortAnswer:
      '没有绝对唯一的「最好」，要看底层线路：在 IEPL 专线上，由于内网无墙，轻量极速的 Shadowsocks (AEAD-2022)、VLESS 和 Trojan 延迟最低、最省电；在公网直连或恶劣网络下，VLESS Reality、AnyTLS 与 Hysteria2 抗封锁和抢带宽能力最强。',
    detailParagraphs: [
      '很多小白误以为协议名字越新就一定越快，其实协议必须与线路配合：① **在 IEPL/IPLC 内网专线上**（如光速云、微风网络、飞猫云）：因为过境段根本不经过防火墙，不需要冗余的伪装层，使用 **VLESS**、**Trojan** 或 **Shadowsocks 2022** 能把握手开销压到最低，吞吐量最高且手机端最省电；② **在公网中转或直连线路上**：传统的 VMess 和老旧 SS 极易被识别，必须使用将流量伪装成正常 HTTPS 网站访问的 **VLESS + XTLS-Reality**、**Trojan-TLS** 或消除 TLS 指纹特征的 **AnyTLS**。',
      '至于 **Hysteria2（歇斯底里 2）** 和 **TUIC v5**：它们是基于 QUIC (UDP) 暴力发包算法的加速协议，专门用来在丢包率高达 20% 的劣质公网直连线路上「强行抢带宽」，但在优质 IEPL 专线上反而容易因为 UDP QoS 不如 TCP 协议稳定，且手机端耗电量较大。',
    ],
    relatedLinks: [
      { label: '阅读《VLESS、Trojan 与 Hysteria2 协议选型指南》', href: '/journal/iepl-vs-iplc-vs-bgp-relay-protocol-vless-trojan-guide/' },
    ],
    keywords: ['VLESS和Trojan哪个好', 'Hysteria2是什么', 'AnyTLS协议', 'SS和VMess区别', '最省电的代理协议'],
  },
  {
    id: 'faq-old-cfw-cannot-import-vless',
    category: 'protocol',
    question: '为什么我导入光速云或大佬云的 VLESS / AnyTLS 订阅后，客户端一个节点都刷不出来？',
    shortAnswer:
      '因为你还在使用早已于 2023 年停更的旧版软件（如老版 Clash for Windows 0.20.x、旧版 ClashX 或旧版 v2rayN），它们的旧内核压根不认识 VLESS、Reality、Hysteria2 和 AnyTLS 语法，解析时直接报错丢弃了所有节点。',
    detailParagraphs: [
      '这是 2026 年最常见的新手报错没有之一！旧版 Clash 原生内核（Premium 内核）在停更前只支持到 SS、VMess 和基础 Trojan。随着一线机场全面升级到更安全、更高效的 **VLESS**（如光速云、大佬云、云梯）和 **AnyTLS / Hysteria2**（如龙猫云、FastLink、良心云），旧客户端在拉取订阅时会直接抛出 `unsupported proxy type: vless` 错误。',
      '解决方法非常简单且完全免费：卸载电脑上的旧版 Clash for Windows，前往本站【客户端大全 (`/clients/`)】下载搭载最新 **Mihomo (Clash.Meta)** 或 **sing-box** 内核的新一代客户端——Windows/macOS 首选 **Clash Verge Rev** 或 **Flclash**，Android 首选 **Flclash / NekoBox**，iOS 首选 **Shadowrocket（小火箭，更新至最新版）**。替换后重新导入同一条订阅，所有节点立刻满血显示。',
    ],
    relatedLinks: [
      { label: '前往下载支持 VLESS 的最新客户端', href: '/clients/' },
    ],
    keywords: ['VLESS节点刷不出来', 'unsupported proxy type vless', 'Clash for Windows替代品', 'Mihomo内核'],
  },
  {
    id: 'faq-ssr-outdated-risk',
    category: 'protocol',
    question: '现在还有机场在用 SSR (ShadowsocksR) 吗？为什么不建议再用旧加密算法？',
    shortAnswer:
      'SSR 早在多年前就已停止维护，其混淆特征早已被防火墙机器学习模型 100% 精准识别。除非是在完全物理隔离的纯内网专线上做兼容保留，否则公网使用 SSR 或老旧的 rc4-md5 加密等同于裸奔。',
    detailParagraphs: [
      '早期互联网代理经历了 Shadowsocks -> SSR -> VMess -> Trojan/VLESS 的演进。如今的 GFW 具备极强的主动探测与信息熵分析能力，老旧的流加密算法不仅容易被特征匹配秒封端口，还存在重放攻击漏洞。',
      '目前行业的安全基线是：**Shadowsocks 必须采用 AEAD 加密（如 aes-256-gcm、chacha20-ietf-poly1305 或 2022-blake3 系列）**，或者直接使用 **VLESS / Trojan / AnyTLS**。本站收录的 42 家机场中，头部梯队均已普及现代加密标准。',
    ],
    keywords: ['SSR还能用吗', 'AEAD加密', 'Shadowsocks 2022', '协议被封'],
  },
  {
    id: 'faq-reality-and-sni-explained',
    category: 'protocol',
    question: '经常听人说 VLESS Reality 借用微软/苹果域名伪装（SNI），这到底是怎么工作的？',
    shortAnswer:
      'VLESS Reality 可以在不购买自己域名的情况下，将你的代理握手流量在审查者眼中完美伪装成「正在访问微软、苹果或亚马逊官网的真实 TLS 1.3 流量」，且当探测者主动刺探服务器时，服务器会直接把探测流量转发给真正的微软官网，实现零特征隐身。',
    detailParagraphs: [
      '传统 Trojan 或 TLS 节点需要机场或自建者自己注册一个域名并申请 SSL 证书，审查系统可以通过证书透明度日志（CT Log）或域名信誉库给新域名打上嫌疑标签。',
      '而 XTLS 团队开发的 **Reality** 技术彻底消除了服务端指纹：客户端在连接时携带特制的 ShortId 和公钥签名，服务端验证通过则建立加密代理隧道；如果防火墙探针尝试伪造握手去探测这台服务器，服务端会直接充当透明转发器，把真微软官网的证书和网页原封不动返还给探针，彻底杜绝了主动探测封锁。',
    ],
    keywords: ['VLESS Reality原理', 'SNI伪装', 'XTLS-Vision', '防主动探测'],
  },
  {
    id: 'faq-hysteria2-qos-battery',
    category: 'protocol',
    question: '为什么有人说 Hysteria2 测速猛如虎，但平时挂在手机后台耗电快、甚至会被运营商断流？',
    shortAnswer:
      '因为 Hysteria2 底层基于 UDP (QUIC) 并采用激进的拥塞控制算法（Brutal），通过多倍冗余发包来对抗丢包。这在测速时能瞬间拉满带宽，但长时间大流量突发 UDP 包容易触发国内运营商的 UDP QoS 临时阻断，且高频 UDP 加解密会让手机基带芯片发热耗电。',
    detailParagraphs: [
      '如何正确使用 Hysteria2 节点？① **电脑端下载大文件、拉取 Git 仓库或看 8K 视频时**：切换到 Hysteria2 节点可以享受到极致的峰值吞吐率；② **手机 5G 移动网络全天后台挂机时**：建议优先选择同一机场提供的 **VLESS**、**Trojan** 或 **Shadowsocks** 节点，TCP 长连接在 iOS/Android 后台的休眠唤醒功耗比 UDP 低 40% 以上，且不会触发移动基站的 UDP 限速。',
    ],
    keywords: ['Hysteria2耗电', 'Hysteria2断流', 'UDP QoS阻断', '手机挂梯子耗电快'],
  },
  {
    id: 'faq-ipv6-proxy-impact',
    category: 'protocol',
    question: '本地宽带开启了 IPv6 会导致代理分流失效或真实 IP 泄露吗？需要关掉 IPv6 吗？',
    shortAnswer:
      '如果代理客户端未正确配置 IPv6 接管，部分支持 IPv6 的海外网站（如 Google、Netflix）可能会绕过你的 IPv4 代理隧道直接尝试用本地运营商 IPv6 连接，从而导致连接超时、「送中」或真实位置暴露。建议在客户端 DNS 设置中将 `ipv6` 设为 `false`。',
    detailParagraphs: [
      '你不需要去路由器里暴力关闭整个家庭宽带的 IPv6，只需要在代理客户端（如 Clash Verge Rev / Mihomo）的设置或覆写配置中，确保 `ipv6: false`（默认不解析 AAAA 记录）。这样所有经过代理规则的海外域名都会强制解析为 IPv4 并乖乖走机场的 IEPL 专线隧道，既保留了国内 PT 下载/游戏的 IPv6 能力，又彻底杜绝了海外流量 IPv6 旁路泄露。',
    ],
    keywords: ['IPv6导致梯子失效', '关闭IPv6解析', 'AAAA记录泄露', 'Google送中IPv6'],
  },

  // ==========================================
  // 04 / 客户端报错急救与断网修复 (troubleshooting)
  // ==========================================
  {
    id: 'faq-yaml-syntax-error',
    category: 'troubleshooting',
    question: '导入订阅时报错「YAML syntax error / invalid configuration」或拉取订阅超时怎么办？',
    shortAnswer:
      '90% 是因为把通用 Base64 订阅贴进了 Clash 客户端，或者订阅域名被本地宽带 DNS 污染。请去机场后台复制「一键导入 Clash / Mihomo」专属链接，或把本地 DNS 改为 223.5.5.5 / 开启手机热点后重试。',
    detailParagraphs: [
      '按以下三步在 1 分钟内即可解决：① **核对订阅格式**：Shadowrocket（小火箭）和 v2rayN 通吃 Base64 格式，但 Clash 系列客户端（Clash Verge Rev / Flclash / Stash）必须使用 YAML 格式的订阅链接（通常链接末尾带有 `?flag=clash` 或 `?flag=meta`）。如果机场只给了一条通用链接，可以使用机场自带的「一键导入 Clash」按钮，或通过本地 Subconverter 转换。',
      '② **排查客户端版本过旧**：如果报错信息包含 `unsupported proxy type: vless` 或 `hysteria2`，说明你的客户端还是停更的老版 Clash for Windows，请立即换用本站推荐的 **Clash Verge Rev** 或 **Flclash**。',
      '③ **解决网络拉取超时（Network Error / Timeout）**：当你还没连上梯子时，拉取订阅请求本身走的是国内直连，偶尔会被地方运营商 DNS 劫持。此时只需用手机开个 5G 个人热点给电脑连一下，拉取成功后再切回家庭 Wi-Fi 即可；很多老牌机场（如光速云）后台也提供了多条防污染备用订阅域名。',
    ],
    relatedLinks: [
      { label: '下载最新版 Clash Verge Rev / Flclash', href: '/clients/' },
    ],
    keywords: ['YAML syntax error', '订阅更新失败', '拉取订阅超时', 'invalid configuration'],
  },
  {
    id: 'faq-err-proxy-connection-failed',
    category: 'troubleshooting',
    question: '为什么关掉代理软件或电脑重启后，连百度、B站等所有国内网站都打不开（提示代理服务器拒绝连接）？',
    shortAnswer:
      '这是因为你在没有先关闭「系统代理（System Proxy）」的情况下直接强退了软件或直接关机，导致操作系统的网络设置里依然死死指着已经关闭的本地代理端口（如 127.0.0.1:7890），所有流量撞墙。',
    detailParagraphs: [
      '遇到这种情况千万别慌，你的电脑和宽带都没有坏，3 秒钟就能恢复：① **最省事的方法**：把刚才关掉的代理软件（如 Clash Verge Rev 或 v2rayN）重新打开，你会发现国内网立刻通了；然后先在软件界面上把「系统代理（System Proxy）」按钮关掉，再正常退出软件。',
      '② **系统设置手动恢复（Windows 10/11）**：按 `Win + I` 打开系统设置 -> 点击「网络和 Internet」-> 点击「代理（Proxy）」-> 找到「使用代理服务器」，把开关拨到「关闭（Off）」并点击保存，浏览器瞬间恢复正常。',
      '③ **系统设置手动恢复（macOS）**：打开「系统设置 -> 网络 -> 当前 Wi-Fi 详情 -> 代理」，把「网页代理 (HTTP)」、「安全网页代理 (HTTPS)」和「SOCKS 代理」三个开关全部关掉，点击好。',
    ],
    keywords: ['ERR_PROXY_CONNECTION_FAILED', '关了梯子反而上不了网', '代理服务器出现问题', '127.0.0.1:7890拒绝连接'],
  },
  {
    id: 'faq-green-latency-no-internet',
    category: 'troubleshooting',
    question: '客户端里节点明明全部测速变绿（显示 40ms），为什么浏览器还是打不开 Google 和 YouTube？',
    shortAnswer:
      '依次检查 4 件事：① 是否点亮了「系统代理」或「TUN 模式」开关；② 代理模式是否误选成了「直连 (Direct)」；③ 电脑系统时间是否与标准北京时间相差超过 1 分钟；④ 浏览器是否装了冲突的代理插件。',
    detailParagraphs: [
      '节点测速有绿色数字，说明「代理客户端软件本身」已经成功连上了机场服务器，但「浏览器的流量」还没有正确交给代理客户端，或者握手被拒。请按顺序排查：',
      '1. **检查开关与模式**：确保客户端左侧或首页的「系统代理 (System Proxy)」已开启，且顶部的模式选在「规则 (Rule)」或「全局 (Global)」，千万不能选在「直连 (Direct)」。\n2. **校准系统时间（极其常见！）**：现代 TLS 1.3、VMess、Trojan 协议对时间戳校验极严，如果主板电池没电或双系统导致你的电脑时间比真实时间快/慢了超过 60 秒，服务器会判定为重放攻击直接丢弃数据包。去系统时间设置里点一下「立即同步时间」即可秒好。\n3. **排查浏览器插件劫持**：如果你以前装过 SwitchyOmega、某某免费 VPN 浏览器插件、或者开启了安全卫士的“安全浏览器保护”，它们会强行接管浏览器的代理接口。打开一个无痕窗口（禁用所有扩展）测试即可确认。',
    ],
    keywords: ['节点有延迟但上不了网', '测速全绿打不开网页', '系统时间不同步梯子用不了', 'SwitchyOmega冲突'],
  },
  {
    id: 'faq-wechat-taobao-slow',
    category: 'troubleshooting',
    question: '挂着梯子时，为什么微信电脑版发不出图片、淘宝京东加载慢、或者银行 APP 报错？',
    shortAnswer:
      '因为你开了「全局模式（Global）」导致国内 APP 流量被迫绕了地球一圈去走香港/美国节点，或者 TUN 模式的 Fake-IP 虚拟地址与腾讯/阿里的私有连接协议冲突。切回「规则模式（Rule）」即可解决 95% 的问题。',
    detailParagraphs: [
      '在科学上网的最佳实践中，**「全局模式 (Global)」只在极少数特殊排障或测试单一节点 IP 时临时开启几分钟**，日常 99.9% 的时间都应该固定使用 **「规则模式 (Rule / 绕过大陆)」**。在规则模式下，微信、淘宝、B站、抖音、国内网银全部走你家里的电信/联通宽带原速直连（延迟 5ms），只有被墙的海外网站才走机场节点。',
      '如果你在「规则模式 + TUN 虚拟网卡」下依然遇到微信语音连不上或企业微信登录转圈，是因为它们直接使用了硬编码 IP 或对 Fake-IP（`198.18.0.x`）敏感。只需在客户端的 `fake-ip-filter` 列表中加入 `+.qq.com`、`+.weixin.qq.com`、`+.tencent.com`，然后点击「清理 DNS 缓存」重启微信即可。',
    ],
    keywords: ['挂梯子微信发不出图', '开代理淘宝很卡', '全局模式和规则模式区别', 'Fake-IP微信冲突'],
  },
  {
    id: 'faq-windows-tun-mode-failed',
    category: 'troubleshooting',
    question: 'Windows 开启 TUN 模式（虚拟网卡）时失败，或提示权限不足 / 服务未安装怎么办？',
    shortAnswer:
      '开启 TUN 虚拟网卡需要创建系统级底层网络适配器（wintun / sing-tun），必须拥有管理员权限。请在客户端设置中点击「安装服务模式 (Service Mode)」并以管理员身份重启客户端。',
    detailParagraphs: [
      '在 Clash Verge Rev 或 Flclash 中，启用 TUN 模式的正确步骤是：① 找到「设置 (Settings) -> 系统设置 -> 服务模式 (Service Mode)」；② 点击右侧的盾牌图标选择「安装 (Install)」，在弹出的 Windows UAC 窗口中点击「是」；③ 等待状态变为绿色的 `Installed / Active` 后，再打开「TUN 模式」开关。',
      '此时打开 Windows「网络连接（ncpa.cpl）」，你会看到多出了一块名为 `Mihomo` 或 `Meta` 的虚拟网卡，说明系统全局三层流量（包括 CMD 命令行、Git、Docker、UWP 应用与 PC 游戏）已全部被成功接管。',
    ],
    keywords: ['TUN模式开启失败', 'Service Mode安装', 'wintun网卡', '管理员权限运行Clash'],
  },
  {
    id: 'faq-macos-app-damaged',
    category: 'troubleshooting',
    question: 'Mac 电脑安装 Clash Verge Rev 或 Flclash 时提示「已损坏，无法打开，您应该将它移到废纸篓」怎么办？',
    shortAnswer:
      '这不是软件真的损坏了，而是 macOS Gatekeeper 对未向苹果交纳每年 99 美元企业开发者签名的开源 GitHub 软件的默认拦截。在终端执行一行 `sudo xattr -r -d com.apple.quarantine /Applications/应用名.app` 即可秒开。',
    detailParagraphs: [
      '完整的 30 秒解除步骤：① 先把下载好的 `.dmg` 镜像打开，将客户端图标拖进 `Applications（应用程序）` 文件夹；② 打开 Mac 自带的「终端（Terminal）」应用；③ 输入 `sudo xattr -r -d com.apple.quarantine `（注意末尾有一个空格），然后把应用程序文件夹里的客户端图标直接拖进终端窗口，会自动补全路径（例如 `/Applications/Clash\ Verge.app`）；④ 按回车，输入你的 Mac 开机锁屏密码（输入时屏幕不显示星号，输完直接回车），再次双击图标即可丝滑打开。',
    ],
    codeSnippet: 'sudo xattr -r -d com.apple.quarantine "/Applications/Clash Verge.app"',
    keywords: ['Mac提示已损坏无法打开', 'com.apple.quarantine', 'Clash Verge Mac打不开', '绕过公证'],
  },
  {
    id: 'faq-ios-memory-limit-50mb',
    category: 'troubleshooting',
    question: 'iPhone / iPad 用小火箭 (Shadowrocket) 或 Stash 时，为什么挂机一会儿偶尔会自动断开重连？',
    shortAnswer:
      '因为苹果 iOS 系统对后台 Network Extension（VPN 扩展进程）有极其严苛的「50MB 物理内存硬上限」。如果你导入了十几个超大规则集或上万条去广告规则，内存一旦突破 50MB 就会被 iOS 内核直接强杀。',
    detailParagraphs: [
      '这是 iOS 系统的底层铁律，哪怕你是顶配 iPhone 16 Pro Max，留给后台 VPN 隧道扩展的内存也只有区区 50MB。当很多用户为了去广告，往小火箭或 Stash 里塞了十几万条规则集时，打开几个多图 APP 就会瞬间撑爆 50MB 导致 VPN 图标闪断。',
      '优化秘籍：① 在 iOS 端尽量使用精简的 `Rule-Set`（如 Loyalsoldier 精简版或机场自带的云端分流），不要在手机上加载超过 3 万行的巨型去广告规则；② 在小火箭「设置 -> 隧道 -> 内存使用」中随时查看当前占用，控制在 `32MB` 以内即可实现全天 24 小时永不掉线。',
    ],
    keywords: ['小火箭自动断开', 'iOS VPN 50MB内存限制', 'Shadowrocket闪退', '去广告规则爆内存'],
  },

  // ==========================================
  // 05 / ChatGPT / Claude / Cursor AI 防封分流 (ai-unlock)
  // ==========================================
  {
    id: 'faq-chatgpt-access-denied-1020',
    category: 'ai-unlock',
    question: '打开 ChatGPT 提示「Access Denied / Unable to load site」或反复跳 Cloudflare 真人验证是怎么回事？',
    shortAnswer:
      '说明你当前选中的节点落地 IP 被太多人共用触发了 Cloudflare 风控（Fraud Score 过高），或者误选了香港等不支持 OpenAI 服务的普通机房节点。切换到支持 AI 解锁的新加坡、日本、美国或台湾原生节点即可立即恢复。',
    detailParagraphs: [
      'OpenAI 对访问来源 IP 有两道审查：① **地区限制**：不支持中国大陆及未经特殊 DNS/WARP 解锁的普通香港机房 IP；② **IP 信誉分（Fraud Score）审查**：如果某个廉价机场或免费节点的 IP 被上千人同时用来跑爬虫或批量注册，Cloudflare 会将该 IP 列入高危名单，不断弹出验证码甚至直接报 `Access Denied`。',
      '解决方法：① 如果你使用的是 **#1 光速云**、**#2 微风网络**、**#4 飞猫云** 等支持全节点 AI 解锁的机场，它们在后台已经为香港节点配置了内网 DNS 流媒体/AI 二次分流，或者直接切换到 **美国、日本、新加坡、台湾** 节点即可秒进；② 进阶建议：在客户端配置专门的 `🤖 AI 专属分组`，固定锁定一条低风控的新加坡或美西节点，不要让 AI 流量跟着 `url-test` 每隔 5 分钟乱跳国家。',
    ],
    relatedLinks: [
      { label: '查看 TOP 1 光速云 ChatGPT 解锁实测截图', href: '/brands/guangsuyun/' },
    ],
    keywords: ['ChatGPT打不开', 'Unable to load site', 'Cloudflare无限验证', 'ChatGPT用哪个国家节点'],
  },
  {
    id: 'faq-chatgpt-degraded-performance',
    category: 'ai-unlock',
    question: '什么是 ChatGPT「降智（Degraded Performance）」？怎么检测并恢复 GPT-4o / o3 的满血智商？',
    shortAnswer:
      '当 OpenAI 检测到你的连接 IP 风险极高（如万人骑脏机房 IP）或浏览器指纹异常时，即使你是 Plus 付费会员，后台也可能暗中限制推理算力、缩短思维链（CoT）并关闭高级工具（联网/代码解释器/画图），导致回答变得敷衍简短。',
    detailParagraphs: [
      '如何 10 秒自测是否被降智？直接向模型发送提示词：`请调用 Python 代码解释器计算 99999 的平方根，并联网搜索今天的新闻`。如果满血状态，它会立刻弹出分析框（Analyzing）和搜索图标；如果它嘴硬说「我无法运行代码或无法联网」，或者思考过程一闪而过，说明当前节点 IP 已被标记为高风险降智 IP。',
      '满血恢复方案：① 立即切换到纯净度更高的小众原生节点（如光速云的台湾、日本、新加坡或美国原生线）；② 用本站【免费资源中心 (`/free-nodes/#toolbox`)】收录的 **Scamalytics** 或 **Ping0.cc** 检测当前 IP 的欺诈分，确保低于 `30 分`；③ 清除浏览器中 `chatgpt.com` 的 Cookie 重新登录。',
    ],
    relatedLinks: [
      { label: '前往免费工具箱检测 IP 欺诈分与纯净度', href: '/free-nodes/#toolbox' },
    ],
    keywords: ['ChatGPT降智检测', 'Degraded Performance', 'o1思维链消失', '高纯净度AI节点'],
  },
  {
    id: 'faq-claude-account-ban-prevention',
    category: 'ai-unlock',
    question: '为什么 Anthropic Claude 账号极其容易被封（Account Disabled）？怎么做到长期稳定使用不封号？',
    shortAnswer:
      'Claude 是目前全球风控最严苛的 AI 平台，导致秒封的三大元凶是：① 使用免费/廉价接码平台手机号注册；② 节点 IP 频繁跨国跳跃（上午香港、下午日本、晚上美国）；③ 使用被标记为高风险的数据中心机房 IP。',
    detailParagraphs: [
      '想要稳稳保住 Claude Pro 账号，请严格执行「三固定原则」：\n1. **固定单一国家与单一优质节点**：在 Clash 客户端中把 `claude.ai` 和 `anthropic.com` 单独分流到一个固定的 **美国或英国/新加坡高纯净度节点**，绝不放进自动测速（url-test）组里乱跳。\n2. **固定独立浏览器环境**：建议使用 Chrome 的独立个人资料（Profile）或指纹浏览器专门登录 Claude，开启「防 WebRTC 泄露」，避免本地系统语言/时区与节点时区剧烈冲突。\n3. **如果不小心买到了普通机场，如何抢救？**：可以使用「机场专线做前置 + 静态美国住宅 ISP 代理做落地（Clash `dialer-proxy` 链式代理）」，或者直接通过 **OpenRouter / Poe / Cursor IDE** 官方 API 渠道调用满血 Claude 3.7 Sonnet，100% 免疫官网风控封号。',
    ],
    keywords: ['Claude防封号', 'Claude账号被封', 'Anthropic风控', '链式代理住宅IP', '固定节点分流'],
  },
  {
    id: 'faq-cursor-copilot-proxy-setup',
    category: 'ai-unlock',
    question: '在 Cursor IDE、VS Code GitHub Copilot 或终端命令行（Git/npm）里怎么配置走代理？',
    shortAnswer:
      '最一劳永逸的方法是开启代理客户端的「TUN 虚拟网卡模式」，它能在操作系统网卡层自动接管 Cursor、VS Code、终端和 Docker 的一切流量；如果不开 TUN，则需在 Cursor 设置中配置 HTTP Proxy 并开启 `http.proxySupport: override`。',
    detailParagraphs: [
      '很多程序员发现浏览器能上 Google，但 Cursor 的 Agent 模式一直转圈报 `Connection Error`，或者终端里 `git clone` 依然只有 10KB/s。这是因为终端命令行和部分 Electron 底层组件默认不读取操作系统的「系统代理（System Proxy）」环境变量。',
      '两种完美解决方案：\n- **方案 A（强烈推荐）**：直接在 Clash Verge Rev / Flclash 中点亮 **「TUN 模式」**，无需改任何软件配置，Cursor、Claude Code、Git、Docker、Homebrew 全部瞬间满速接管。\n- **方案 B（手动指定端口）**：在 Cursor / VS Code 按 `Ctrl + ,` 打开设置，搜索 `Proxy`，在 `Http: Proxy` 填入 `http://127.0.0.1:7897`（以你客户端的实际混合端口为准）；如果遇到 HTTP/2 断流，搜索 `cursor.general.disableHttp2` 并勾选开启，响应速度会显著提升。',
    ],
    codeSnippet: `# Windows PowerShell 终端临时走本地代理 (端口以客户端实际显示为准)
$env:HTTP_PROXY="http://127.0.0.1:7897"
$env:HTTPS_PROXY="http://127.0.0.1:7897"

# macOS / Linux 终端临时走本地代理
export https_proxy=http://127.0.0.1:7897 http_proxy=http://127.0.0.1:7897 all_proxy=socks5://127.0.0.1:7897`,
    keywords: ['Cursor配置代理', 'Cursor连接失败', 'disableHttp2', '终端走代理命令', 'GitHub Copilot连不上'],
  },
  {
    id: 'faq-chatgpt-ios-android-app-error',
    category: 'ai-unlock',
    question: '为什么电脑网页能用 ChatGPT，手机上的 ChatGPT 官方 APP 却提示「Something went wrong / Play Integrity 校验失败」？',
    shortAnswer:
      '手机端 ChatGPT 官方 APP 除了检查节点 IP 外，iOS 端会通过 Apple 服务器校验系统完整性，Android 端则强制依赖 Google Play 服务框架（GMS）与 Play Integrity API 认证。',
    detailParagraphs: [
      '排查方法：\n1. **iOS 用户**：如果在小火箭（Shadowrocket）或 Stash 下打不开 APP，通常是因为苹果的推送与认证域名（`*.apple.com` / `*.icloud.com`）被错误分流，或者选到了不支持 AI 的普通香港节点。切换到光速云的新加坡/日本/美国节点，并确保开启 UDP 转发即可。\n2. **Android 用户**：国产安卓手机如果没有完整的 Google Play 服务（GMS）或已解锁 Bootloader（Root）导致 Play Integrity 未通过 `MEETS_BASIC_INTEGRITY`，官方 APP 会直接报错拒绝登录。此时最简单的替代方案是直接用手机 Chrome / Edge 浏览器访问 `chatgpt.com` 并点击「添加到主屏幕」，体验与原生 APP 几乎完全一致。',
    ],
    keywords: ['ChatGPT手机APP报错', 'Something went wrong', 'Play Integrity失败', '小火箭ChatGPT连不上'],
  },
  {
    id: 'faq-gemini-region-not-supported',
    category: 'ai-unlock',
    question: '为什么 Google Gemini 或 Google AI Studio 提示当前地区不支持，即使我已经挂了美国节点？',
    shortAnswer:
      '因为 Google 账号有「归属地记忆」机制，或者你浏览器的分流规则里把 `*.google.com` 走成了香港节点（Google 不在香港提供 Gemini 服务），而只把 `gemini.google.com` 走成了美国。',
    detailParagraphs: [
      '解决 Google Gemini 地区限制的核心秘诀是「Google 全家桶同源分流」：在代理客户端中，将 `Google` 分组和 `AI` 分组统一指向同一个 **美国、新加坡、日本或台湾节点**（千万不要让 Google 搜索走香港、Gemini 走美国，否则 Cookie 里的位置令牌会打架）。如果极个别老 Google 账号被锁死在不支持地区，可以访问 `policies.google.com/terms` 查看账号关联国家，或使用无痕窗口配合纯净美西节点直接登录 `aistudio.google.com`。',
    ],
    keywords: ['Gemini地区不支持', 'Google AI Studio打不开', 'Google送中修复', 'Google全家桶分流'],
  },

  // ==========================================
  // 06 / Netflix 4K / Disney+ / 动画疯 / 游戏 NAT (streaming)
  // ==========================================
  {
    id: 'faq-netflix-originals-only',
    category: 'streaming',
    question: '为什么我连上节点能打开 Netflix，却只能搜到《怪奇物语》《鱿鱼游戏》，搜不到《老友记》《绝命毒师》等第三方版权剧？',
    shortAnswer:
      '这就是流媒体圈著名的「仅解锁自制剧（Originals Only）」现象。当 Netflix 识别出你当前使用的节点是普通机房 IP 时，不会直接封死你，而是悄悄隐藏所有购买版权的第三方影视剧，只展示 Netflix 自己拥有全球版权的自制剧。',
    detailParagraphs: [
      "如何 5 秒钟检测当前节点是否全解锁 Netflix？直接在浏览器访问经典非自制剧测试编号：`https://www.netflix.com/title/81280792`（或搜索宫崎骏吉卜力动画 / 动漫新番）。如果能正常显示剧集详情页和播放按钮，说明该节点具备 **完整解锁（Full Unlock）** 能力；如果提示 `Oh no! This title currently isn't available to watch in your country`，说明该节点仅支持自制剧。",
      '本站实测榜单中的 **#1 光速云**、**#2 微风网络**、**#3 暮光加速**、**#4 飞猫云** 等均在服务端内置了全节点流媒体 DNS 解锁或原生落地 IP，香港、台湾、新加坡、日本节点均可直接观看完整片库与中文字幕。',
    ],
    relatedLinks: [
      { label: '查看 TOP 1 光速云 Netflix/Disney+ 解锁实测图', href: '/brands/guangsuyun/' },
    ],
    keywords: ['奈飞只能看自制剧', 'Netflix非自制剧解锁', '搜不到绝命毒师', '流媒体全解锁机场'],
  },
  {
    id: 'faq-dns-unlock-vs-native-ip',
    category: 'streaming',
    question: '机场宣传的「DNS 内网流媒体解锁」和「原生 IP（Native IP）」有什么区别？平时看剧有影响吗？',
    shortAnswer:
      '原生 IP 指该服务器的 IP 注册地与广播地完全一致且被流媒体识别为当地本土宽带/ISP；DNS 解锁则是机场在高速大带宽机房节点上，仅将 Netflix/Disney+ 的鉴权流量通过内网隧道透明转发给另一台原生解锁机。对用户而言，两者都能完美看 4K 全片库，且 DNS 解锁往往能兼顾 10Gbps 超大带宽。',
    detailParagraphs: [
      '为什么现在一线大机场普遍采用「大带宽落地机房 + 内网 DNS 解锁」架构？因为真正的本土原生 IP 小机房往往带宽极小（比如只有 100Mbps）且价格昂贵，几百人一起看 4K 就会卡顿。通过内网 DNS 分流技术，用户在建立连接鉴权的那一瞬间走原生解锁 IP 拿到播放许可，随后的高码率 4K 视频流则直接从 10Gbps 顶级机房满速拉取，真正做到了「既有原生解锁的片库，又有专线机房的狂暴网速」。',
    ],
    keywords: ['原生IP和广播IP区别', 'DNS流媒体解锁原理', 'Netflix 4K缓冲慢', '双ISP住宅IP'],
  },
  {
    id: 'faq-youtube-premium-cn-ads',
    category: 'streaming',
    question: '为什么有时候挂着香港或台湾节点看 YouTube，左上角会出现「CN」标志，或者突然没有广告但用不了后台播放？',
    shortAnswer:
      '这就是俗称的「YouTube 送中（IP 被 Google 位置库误判为中国大陆）」。因为部分机房的 IP 段经常被大陆用户直连访问且开启了手机 GPS 定位，导致 Google 自动将该 IP 段的地理位置修正为了 CN。',
    detailParagraphs: [
      '「送中」是一把双刃剑：因为 YouTube 未在中国大陆投放商业广告，所以用「送中 IP」看 YouTube 会神奇地实现 **免费无广告（连片头 5 秒广告都没有）**！这也是为什么有些机场会专门保留一条标着 `YouTube免广告` 的节点。',
      '但它的副作用是：Google 搜索会被强制开启安全搜索、无法使用 YouTube Premium 会员专属的画中画/后台听歌功能，且 Gemini 无法使用。如果你发现常驻节点被送中，只需切换到机场里的其他香港/新加坡/日本节点即可立刻恢复正常的 `HK / SG / JP` 区域标识。',
    ],
    keywords: ['YouTube显示CN', 'IP送中是什么意思', 'YouTube免广告节点', 'Google安全搜索关不掉'],
  },
  {
    id: 'faq-bahamut-bilibili-hk-tw',
    category: 'streaming',
    question: '怎么解锁台湾「巴哈姆特动画疯」和 B 站港澳台限定番剧（仅限港澳台地区）？',
    shortAnswer:
      '观看巴哈姆特动画疯必须使用高纯净度的「台湾原生/家宽解锁节点」；观看 B 站（Bilibili）港澳台番剧则需要在客户端规则中将 B 站番剧鉴权域名单独分流到香港、澳门或台湾节点。',
    detailParagraphs: [
      '巴哈姆特动画疯（ani.gamer.com.tw）是中文圈极其热门的正版免费新番平台（带弹幕与繁体字幕），但它对普通商用机房 IP 封锁极严。本站评测库中如 **#1 光速云**、**#2 微风网络**、**#4 飞猫云** 的台湾专线节点均对动画疯做了专门适配。',
      '至于 B 站港澳台番剧：默认规则下 `bilibili.com` 走国内直连以保证看普通 UP 主视频秒开；如果你导入了 ACL4SSR 或 Sub-Store 的 `Bilibili 港澳台` 分流规则集，客户端会自动创建 `📺 哔哩哔哩港澳台` 策略组，将其指向台湾或香港节点即可直接在网页端/客户端解锁港澳台新番。',
    ],
    keywords: ['巴哈姆特动画疯解锁', 'B站港澳台番剧怎么看', '台湾原生节点', '动画疯黑屏'],
  },
  {
    id: 'faq-gaming-nat-type-tun',
    category: 'streaming',
    question: '机场 IEPL 专线能用来替代 UU / 雷神加速器打外服 PC 游戏（Apex / 使命召唤 / Steam）吗？怎么开 FullCone NAT？',
    shortAnswer:
      '完全可以应急甚至兼顾主力！只要机场节点支持「UDP 转发（FullCone NAT）」且你在客户端开启了「TUN 虚拟网卡模式」，IEPL 港日新专线的游戏物理延迟（25~55ms）与付费游戏加速器几乎处于同一水平。',
    detailParagraphs: [
      '为什么只开「系统代理」打不了 Steam 联机游戏？因为绝大多数 PC 游戏（如 GTA5、Apex、Valorant、绝地潜兵 2）使用的是底层 UDP Socket 直连，根本不理会浏览器的 HTTP 系统代理。',
      '用机场打外服游戏的标准配置三步走：\n1. 选择低延迟的 **香港 / 日本 / 台湾 / 新加坡 1x IEPL 专线节点**（确保机场支持 UDP，如光速云、微风网络）。\n2. 在 Clash Verge Rev / Flclash 中开启 **「TUN 模式」**，并将 TUN 协议栈设为 `system` 或 `mixed`。\n3. 避免在 Steam 下载几十 GB 游戏本体时走代理（会把套餐流量跑光）：可以在规则中添加 `DOMAIN-SUFFIX,steamcontent.com,DIRECT`，这样 **Steam 商店买游戏 + 游戏联机走专线加速，而满速下载游戏更新包走国内宽带直连**，一举两得！',
    ],
    codeSnippet: `# Clash / Mihomo 规则：让 Steam 游戏下载走国内直连不扣机场流量，仅商店与联机走代理
rules:
  - DOMAIN-SUFFIX,steamcontent.com,DIRECT
  - DOMAIN-SUFFIX,dl.steam.clngaa.com,DIRECT
  - DOMAIN-SUFFIX,st.dl.eccdnx.com,DIRECT`,
    keywords: ['机场当游戏加速器', 'Steam下载走直连', 'FullCone NAT开启', 'TUN模式打游戏'],
  },

  // ==========================================
  // 07 / OpenWrt 软路由 / Apple TV / 局域网共享 (router)
  // ==========================================
  {
    id: 'faq-allow-lan-share-ps5-switch',
    category: 'router',
    question: '家里没有软路由，怎么把电脑上的梯子共享给同 Wi-Fi 下的手机、Switch、PS5 或 Apple TV 使用？',
    shortAnswer:
      '只需在电脑客户端开启「允许局域网连接（Allow LAN）」，查看电脑的内网 IP（如 192.168.1.100）和混合端口（如 7897），然后在手机/Switch/PS5 的 Wi-Fi 代理设置中手动填入该 IP 和端口即可秒连！',
    detailParagraphs: [
      '这是零成本让全屋主机和电视用上专线的神技，全程只需 1 分钟：\n1. **在电脑端开启共享**：打开电脑上的 Clash Verge Rev 或 Flclash，找到「允许局域网连接 (Allow LAN)」开关并打开，记下界面显示的 `Mixed Port（混合端口，假设为 7897）` 和你电脑的局域网 IP（按 `Win+R` 输入 `cmd` 执行 `ipconfig` 查看 IPv4 地址，假设为 `192.168.31.88`）。\n2. **放行 Windows 防火墙**：首次开启时如果弹出 Windows 防火墙提示，请勾选「专用网络和公用网络」允许访问。\n3. **在 Switch / PS5 / 手机上填写**：进入主机或手机的当前 Wi-Fi 高级设置 -> 将「代理服务器」设为「手动」-> 主机名填 `192.168.31.88`，端口填 `7897`，保存后测试网络连接，Switch 下载速度与 PS5 港服商店瞬间满速！',
    ],
    keywords: ['电脑共享梯子给手机', 'Switch连电脑代理', 'Allow LAN局域网共享', 'PS5加速下载'],
  },
  {
    id: 'faq-openwrt-openclash-fakeip-vs-redirhost',
    category: 'router',
    question: 'OpenWrt 软路由里的 OpenClash / PassWall2 / Nikki，应该选 Fake-IP 模式还是 Redir-Host 模式？',
    shortAnswer:
      '强烈首选「Fake-IP（增强模式）」！它能省去本地漫长的 DNS 等待时间，网页首屏响应快 30~80ms，且能 100% 避免国内 DNS 抢答污染；遇到极个别不兼容的智能家居或网银域名，加进 Fake-IP-Filter 白名单即可。',
    detailParagraphs: [
      '很多软路由老教程还在教人用 Redir-Host，但在最新的 Mihomo 内核中，Redir-Host 需要先在路由器本地完成完整的真实 DNS 并发解析、比对 IP 归属地后再决定走直连还是走隧道，不仅软路由 CPU 占用高，而且一旦上游 DNS 偶发丢包就会导致全家网页卡顿。',
      '而 **Fake-IP 模式** 的原理是：当你的手机请求 `www.youtube.com` 时，软路由在 0.1 毫秒内立刻返回一个虚拟内网 IP（如 `198.18.0.15`），手机立刻开始发包，软路由直接把域名原封不动打包进 IEPL 隧道发给香港落地节点去解析，既快如闪电又零 DNS 泄露。',
    ],
    keywords: ['OpenClash Fake-IP和Redir-Host', '软路由用哪个插件好', 'PassWall2和Nikki', '智能家居走代理失联'],
  },
  {
    id: 'faq-apple-tv-stash-shadowrocket',
    category: 'router',
    question: 'Apple TV 4K 怎么科学上网看 Netflix / YouTube / Infuse 挂载海外网盘？',
    shortAnswer:
      '自 tvOS 17 起，苹果官方已正式开放 Apple TV 的原生 VPN 接口！你不需要再折腾软路由旁路网关，直接在 Apple TV App Store 里下载 tvOS 版 Shadowrocket、Stash 或 Sing-box，手机扫码即可一键导入机场订阅。',
    detailParagraphs: [
      '如果你之前在 iPhone / iPad 的美区 Apple ID 上购买过 **Shadowrocket（小火箭）** 或 **Stash**，在 Apple TV 上登录同一个美区账号即可 **免费直接下载 tvOS 版本（一次购买，多端通用）**！打开后通过同局域网 iPhone 一键同步订阅，配合 **光速云** 或 **微风网络** 的香港/台湾/新加坡 4K 流媒体专线，在客厅大屏电视上点开 Netflix 杜比视界与 YouTube 8K 几乎零缓冲。',
    ],
    relatedLinks: [
      { label: '查看 tvOS 与全平台客户端指南', href: '/clients/#ios' },
    ],
    keywords: ['Apple TV挂梯子', 'tvOS小火箭', 'Apple TV看奈飞', 'Stash tvOS'],
  },
  {
    id: 'faq-nas-docker-pull-proxy',
    category: 'router',
    question: '群晖 (Synology) / 绿联 / 飞牛 fnOS / Unraid 等 NAS 拉取 Docker Hub 镜像超时失败怎么解决？',
    shortAnswer:
      '国内大量公共 Docker 镜像加速站已下架停服。最稳妥的方法是在 NAS 的 Docker 守护进程（Daemon）或系统网络设置中填入局域网电脑/软路由的 HTTP 代理地址，或在 NAS 上直接跑一个 Mihomo 容器。',
    detailParagraphs: [
      '如果你家里有一台开着 Clash Verge Rev（勾选了 `Allow LAN`）的电脑，假设电脑内网 IP 是 `192.168.1.100:7897`，你只需要在群晖「控制面板 -> 网络 -> 常规 -> 代理服务器」或飞牛 fnOS 的 Docker 代理设置中填入 `http://192.168.1.100:7897`，再去拉取 `docker.io` 或 `ghcr.io` 的官方原版镜像，速度直接跑满百兆/千兆宽带，再也不用四处寻找随时失效的第三方镜像源。',
    ],
    keywords: ['群晖Docker拉取失败', 'NAS配置代理', '飞牛OS Docker加速', 'Docker Hub超时'],
  },

  // ==========================================
  // 08 / HTTPS 隐私安全 / 审计规则 / 防泄露 (security)
  // ==========================================
  {
    id: 'faq-can-airport-owner-see-my-passwords',
    category: 'security',
    question: '使用机场节点时，机场主能不能看到我的微信聊天记录、网银密码和在 Google 搜了什么词？',
    shortAnswer:
      '看不到具体内容！只要你访问的是现代 HTTPS（带锁标 TLS 加密）网站或使用微信/Telegram 等端到端加密应用，机场服务器只能看到「你正在连接哪个域名（如 google.com 或 x.com）以及数据包大小」，无法解密你在网页里输入的账号密码、搜索词或聊天内容。',
    detailParagraphs: [
      '这是网络密码学的基本常识：现代互联网 99% 以上的网站与 APP 均已强制启用 **HTTPS (TLS 1.2 / TLS 1.3)**。当你通过机场访问 `https://chatgpt.com` 时，存在两层嵌套加密——外层是你与机场节点之间的代理隧道加密（用于绕过防火墙），内层则是你的浏览器与 OpenAI 官方服务器直接协商的端到端 TLS 加密。',
      '除非你手动在电脑系统根证书库里安装了某个来路不明的「自签名 CA 根证书」（即实施中间人 MITM 解密，正规机场绝不会要求你安装任何根证书），否则哪怕是机场机房的最高管理员，抓包看到的也只是一串完全无法破译的 TLS 密文流。',
    ],
    keywords: ['机场能看到浏览记录吗', '机场能看到密码吗', 'HTTPS加密安全性', 'TLS中间人攻击'],
  },
  {
    id: 'faq-what-is-airport-audit-rule',
    category: 'security',
    question: '机场后台里的「审计规则（Audit Rules）」是什么意思？为什么会拦截 BT 迅雷下载和垃圾邮件端口？',
    shortAnswer:
      '审计规则是正规机场为了「保护全体用户的落地服务器 IP 不被海外机房投诉封禁（DMCA 版权警告 / Spamhaus 拉黑）」而在服务端设置的自动过滤规则，主要拦截 BT 种子下载（BitTorrent）、SMTP 垃圾邮件发信端口（25/465）以及部分高危政治/金融诈骗站点。',
    detailParagraphs: [
      '为什么绝对不能挂着海外代理节点用迅雷或 qBittorrent 下盗版电影？因为欧美、日本、新加坡的数据中心对 DMCA（数字千年版权法）执行极其严厉，一旦机房收到版权方针对某个 IP 的 P2P 下载投诉信，会在 24 小时内直接拔掉整台服务器的网线并封禁账号！同样，如果黑客利用机场节点走 25 端口群发垃圾邮件，该 IP 段会被全球反垃圾邮件组织拉黑。',
      '因此，配置完善的审计规则反而是判断一家机场是否专业、能否长期稳定运营的重要标志。平时使用迅雷、百度网盘、qBittorrent 下载时，请确保在客户端规则中将 BT 流量设为 `DIRECT（直连）`。',
    ],
    keywords: ['机场审计规则是什么', '为什么不能用梯子下BT', 'DMCA版权投诉', '触发审计会怎样'],
  },
  {
    id: 'faq-dns-leak-and-webrtc-fix',
    category: 'security',
    question: '怎么检查自己的代理有没有发生「DNS 泄露」或「WebRTC 真实 IP 泄露」？如何一键封堵？',
    shortAnswer:
      '访问 `browserleaks.com/webrtc` 和 `ipleak.net`：如果页面上除了你的海外节点 IP 外，还显示出了中国大陆运营商的 DNS 服务器或本地公网 IP，说明存在泄露。开启客户端 Fake-IP 模式 + 安装 WebRTC Control 扩展即可 100% 封堵。',
    detailParagraphs: [
      '两步实现滴水不漏的防泄露配置：\n1. **封堵 DNS 泄露**：在 Clash Verge Rev / Mihomo 的 DNS 设置中，确保开启 `enable: true`、`enhanced-mode: fake-ip`，并将 `nameserver-policy` 设置为国内域名走 `https://dns.alidns.com/dns-query`，海外域名强制通过代理隧道在落地端解析（可直接使用本站【免费资源中心】提供的防泄露 YAML 模板）。\n2. **封堵 WebRTC 泄露**：Chrome / Edge 浏览器为了优化网页视频通话，内置了 STUN 穿透协议，有时会绕过 HTTP 系统代理直接探测本机网卡的真实 IP。只需开启客户端的 **TUN 虚拟网卡模式**，或在浏览器中将 WebRTC 策略设为 `Disable non-proxied UDP` 即可彻底根治。',
    ],
    relatedLinks: [
      { label: '复制防 DNS 泄露标准 YAML 配置模板', href: '/free-nodes/#dns-yaml' },
    ],
    keywords: ['DNS泄露检测', 'WebRTC泄露怎么关', 'ipleak测试', 'Fake-IP防泄露'],
  },
  {
    id: 'faq-free-vpn-extension-danger',
    category: 'security',
    question: '为什么安全专家强烈警告不要使用来路不明的「免费 Chrome VPN 插件」和破解版梯子 APP？',
    shortAnswer:
      '因为浏览器扩展拥有读取和修改你所有网页 DOM（包括已登录的 Cookie、会话 Token 与剪贴板）的最高权限，且大量所谓免费 VPN 实际上把你的家庭宽带变成了出售给灰产的「住宅代理肉鸡（Residential Proxy Botnet）」。',
    detailParagraphs: [
      '天下没有白掉馅饼的免费跨国带宽。如果一款没有任何开源代码审计的「免费 VPN 插件」要求获取「读取和更改您在所访问的所有网站上的所有数据」权限，它可以在你不知情的情况下窃取你的 Google/社交媒体 Session Cookie，或者将你的家庭 IP 挂载到商业爬虫网络中去帮黑客刷单、撞库。',
      '正确的安全姿势是：**客户端软件必须 100% 使用 GitHub 开源透明的纯净项目（如 Clash Verge Rev、Flclash、v2rayN、Sing-box）**，将「软件外壳」与「机场节点订阅」彻底解耦。即使预算再低，选择 **#1 光速云 99元/年（月均 8 元）** 或本站实测的免费试用正规专线机场，也比用野鸡破解版安全一万倍。',
    ],
    relatedLinks: [
      { label: '查看安全开源客户端官方下载库', href: '/clients/' },
      { label: '查看零成本正规试用机场名单', href: '/free-nodes/#trial-matrix' },
    ],
    keywords: ['免费VPN插件安全吗', '破解版梯子风险', '开源代理客户端', 'Cookie被盗'],
  },
];
