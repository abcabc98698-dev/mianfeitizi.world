export interface FreePathComparison {
  method: string;
  cost: string;
  speedAndLatency: string;
  stabilityInPeak: string;
  securityRisk: '极高危 (高概率泄密/封号)' | '中高风险 (IP易脏/不稳定)' | '低风险 (需技术维护)' | '安全可靠 (商业SLA保障)';
  aiAndStreaming: string;
  verdict: string;
}

export interface FreeResourceTool {
  id: string;
  name: string;
  category: 'dns' | 'ip-check' | 'speed-route' | 'rules-sub' | 'identity-mail' | 'free-ai';
  categoryLabel: string;
  badge: string;
  url: string;
  configSnippet?: string;
  summary: string;
  howToUse: string;
  proTip: string;
}

export interface SelfBuildVsAirportRow {
  dimension: string;
  cloudflareWorkers: string;
  cheapVpsSelfBuild: string;
  guangsuyunTop1: string;
}

export const freePathComparisons: FreePathComparison[] = [
  {
    method: '1. 野生永久免费 VPN App / 破解版梯子',
    cost: '表面 ¥0（实则出卖隐私与宽带）',
    speedAndLatency: '延迟 300ms+，限速 1–3 Mbps',
    stabilityInPeak: '晚高峰 20:00–23:00 丢包率 80% 以上，频繁断线',
    securityRisk: '极高危 (高概率泄密/封号)',
    aiAndStreaming: '万人骑黑名单 IP，登录 ChatGPT / Claude 极易触发秒封号',
    verdict: '强烈不推荐！常含木马、注入劫持广告或将您的电脑变成肉鸡代理池',
  },
  {
    method: '2. 电报群 (Telegram) / GitHub 公开抓取免费订阅池',
    cost: '¥0（需每天花时间找新链接）',
    speedAndLatency: '节点存活期仅数小时，延迟波动极大',
    stabilityInPeak: '上千人同时挤爆同一节点，晚高峰基本不可用',
    securityRisk: '中高风险 (IP易脏/不稳定)',
    aiAndStreaming: 'Google 搜索频繁弹人机验证，无法稳定解锁 Netflix',
    verdict: '仅适合懂技术的极客在断网应急 5 分钟内临时拉取客户端安装包',
  },
  {
    method: '3. Cloudflare WARP / Workers / Pages 免费节点',
    cost: '¥0（需自备域名或优选 IP 工具）',
    speedAndLatency: '取决于本地运营商到 CF 边缘节点的优选 IP 质量',
    stabilityInPeak: '电信/移动晚高峰对 CF UDP/TLS 限速明显，需频繁重跑优选脚本',
    securityRisk: '低风险 (需技术维护)',
    aiAndStreaming: 'Cloudflare 广播 IP 可掩盖真实 IP，但部分流媒体不识别为原生区',
    verdict: '适合喜欢折腾命令行与脚本的理工科玩家，不适合追求开箱即用的上班族',
  },
  {
    method: '4. Oracle Cloud (甲骨文永久免费 ARM) / AWS 免费年付自建',
    cost: '¥0（但需外币双币信用卡验卡，风控极严）',
    speedAndLatency: '单线路公网直连，无国内 BGP 中转，晚高峰易被 GFW 阻断端口',
    stabilityInPeak: '一旦单一 VPS 的 IP 被墙，换 IP 或被迫停机成本高',
    securityRisk: '低风险 (需技术维护)',
    aiAndStreaming: '单一地区（如仅美西或东京），机房段 IP 常被 OpenAI/Netflix 识别拦截',
    verdict: '注册门槛极高（甲骨文玄学封号），且单台服务器无法替代全球 10 国专线节点池',
  },
  {
    method: '5. 正规专线机场「新用户免费试用通道」（极连云/一翻云等）',
    cost: '¥0 免费试用（2小时至简短体验）',
    speedAndLatency: '真 IEPL / 高速专线，香港 25–40ms，4K 视频秒开',
    stabilityInPeak: '试用期内享受与正式会员相同的专线通道',
    securityRisk: '安全可靠 (商业SLA保障)',
    aiAndStreaming: '支持港台日新美多地区切换，可实测 ChatGPT 与流媒体',
    verdict: '零成本试错首选！先白嫖验证本地宽带表现，满意后再决定是否留用',
  },
  {
    method: '6. TOP 1 光速云 99元/年轻量版 & 147元永久包（微成本终极平替）',
    cost: '折合 ¥8.25/月（每天仅 ¥0.27）或 ¥147 永久不过期',
    speedAndLatency: '2020老牌企业级 IEPL 内网专线 + VLESS，香港 ~25ms 满速吞吐',
    stabilityInPeak: '物理专线绕过公网拥堵，晚高峰与特殊时期依然稳如泰山',
    securityRisk: '安全可靠 (商业SLA保障)',
    aiAndStreaming: '港台日新美韩英土阿 10+ 地区原生解锁 GPT-4o、Claude 与 Netflix 4K',
    verdict: '全网性价比与省心程度天花板！省下每天找免费节点的时间，一杯奶茶钱用半年',
  },
];

export const selfBuildComparison: SelfBuildVsAirportRow[] = [
  {
    dimension: '年度金钱成本',
    cloudflareWorkers: '¥0（若买独立域名约 ¥50/年）',
    cheapVpsSelfBuild: '$15–$36/年（约 ¥110–¥260/年）+ 换被墙 IP 费用（$3–$8/次）',
    guangsuyunTop1: '轻量版仅 ¥99/年（用 9 折码 AMM 后仅 ¥89.1/年，折合 ¥7.4/月！）',
  },
  {
    dimension: '跨境物理线路质量',
    cloudflareWorkers: '美西/亚太公网 Anycast，国内三网回程无保障，晚高峰易丢包',
    cheapVpsSelfBuild: '廉价 163 普通公网直连，晚高峰 20:00–23:00 严重拥堵甚至断流',
    guangsuyunTop1: '广深 BGP 入口 + 企业级 IEPL 内网物理专线直达香港/日本，绕过公网 GFW',
  },
  {
    dimension: '全球节点地区数量',
    cloudflareWorkers: '无法自由指定原生国家出口（由 CF 就近分配）',
    cheapVpsSelfBuild: '仅 1 个地区（买洛杉矶就只有美国，看不了港台番剧）',
    guangsuyunTop1: '一次拥有香港、台湾、日本、新加坡、美国、韩国、英国、土耳其、阿根廷 10+ 国节点',
  },
  {
    dimension: '抗封锁与运维精力',
    cloudflareWorkers: '需定期运行 CloudflareSpeedTest 脚本更换优选 IP',
    cheapVpsSelfBuild: '需自己装 Xray/3x-ui、配 TLS 证书；敏感时期 IP 被封即彻底失联',
    guangsuyunTop1: '专业海外运维团队 24 小时自动切换入口与更换纯净落地 IP，用户零维护',
  },
  {
    dimension: 'AI 与 4K 流媒体解锁',
    cloudflareWorkers: '不支持 Netflix 非自制剧，部分 CF 节点被 Claude 拦截',
    cheapVpsSelfBuild: '普通廉价机房 IP 几乎全部被 OpenAI 与 Netflix 标记为 DataCenter 代理',
    guangsuyunTop1: '内置流媒体 DNS 解锁与高信誉原生出口，含 2026-08-19 真实解锁图证',
  },
];

export const freeResourceTools: FreeResourceTool[] = [
  // 1. 加密 DNS / DoH / DoT
  {
    id: 'dns-cloudflare',
    name: 'Cloudflare 1.1.1.1 公共加密 DNS (DoH / DoT)',
    category: 'dns',
    categoryLabel: '加密 DNS 与防污染',
    badge: '全球最快公共 DNS',
    url: 'https://one.one.one.one/',
    configSnippet: 'https://cloudflare-dns.com/dns-query (DoH) | tls://1.1.1.1 (DoT)',
    summary:
      '全球响应速度最快的隐私优先公共 DNS 服务，承诺不记录查询源 IP 且不向广告商出售数据。在代理客户端中配置为远端 Fallback DNS 可彻底根治域名污染。',
    howToUse: '在 Clash Verge Rev 或 FlClash 的 DNS 覆写设置中，将 fallback 设为 https://1.1.1.1/dns-query。',
    proTip: '注意：国内直连访问 1.1.1.1 部分省份会被干扰，建议在 Clash 中将其放入 proxy-server-nameserver 或通过代理隧道查询。',
  },
  {
    id: 'dns-alidns-dnspod',
    name: '阿里 AliDNS (223.5.5.5) + 腾讯 DNSPod (119.29.29.29)',
    category: 'dns',
    categoryLabel: '加密 DNS 与防污染',
    badge: '国内直连分流必备',
    url: 'https://www.alidns.com/',
    configSnippet: 'https://dns.alidns.com/dns-query | https://doh.pub/dns-query',
    summary:
      '国内双巨头提供的公共 DoH/DoT 加密解析服务。在科学上网客户端中作为主 `nameserver` 解析淘宝、微信、B站等国内域名，确保国内 CDN 就近分配不绕路。',
    howToUse: '在 Clash 配置的 `dns.nameserver` 填入 `https://dns.alidns.com/dns-query` 与 `https://doh.pub/dns-query`。',
    proTip: '开启代理后如果觉得打开国内网页变慢，90% 是因为把国内域名交给了海外 DNS 解析，配好阿里+腾讯 DoH 即可秒开。',
  },
  {
    id: 'dns-adguard',
    name: 'AdGuard Public DNS（免费无客户端去广告 DNS）',
    category: 'dns',
    categoryLabel: '加密 DNS 与防污染',
    badge: 'DNS 级拦截广告',
    url: 'https://adguard-dns.io/zh_cn/public-dns.html',
    configSnippet: 'https://dns.adguard-dns.com/dns-query | 94.140.14.14',
    summary:
      '无需安装任何浏览器插件，直接在 DNS 解析层面拦截网页弹窗广告、恶意追踪器与钓鱼域名，特别适合在 iPhone、iPad 或电视盒子上配置。',
    howToUse: '在手机私有 DNS（Private DNS）填入 `dns.adguard-dns.com`，或导入 iOS 描述文件。',
    proTip: '搭配 TOP 1 光速云节点使用时，优先使用机场自带的流媒体解锁 DNS，避免 AdGuard 误拦截部分视频平台统计域名。',
  },
  {
    id: 'dns-quad9',
    name: 'Quad9 (9.9.9.9) 瑞士非营利安全加密 DNS',
    category: 'dns',
    categoryLabel: '加密 DNS 与防污染',
    badge: '瑞士隐私法保护',
    url: 'https://www.quad9.net/',
    configSnippet: 'https://dns.quad9.net/dns-query | tls://dns.quad9.net',
    summary: '总部位于瑞士苏黎世的公益安全 DNS，集成多国威胁情报源，自动阻断已知勒索软件、木马控制端与钓鱼站点解析。',
    howToUse: '适合作为 Clash 配置文件中与 Cloudflare 1.1.1.1 并列的海外备用 DoH 上游。',
    proTip: '受瑞士严格隐私法律保护，完全不记录个人可识别信息（PII）。',
  },

  // 2. IP 纯净度、欺诈值与 WebRTC 检测
  {
    id: 'ip-ping0',
    name: 'Ping0.cc（中文最直观的 IP 纯净度与原生属性检测）',
    category: 'ip-check',
    categoryLabel: 'IP 纯净度与隐私检测',
    badge: '机场玩家必测神器',
    url: 'https://ping0.cc/',
    summary:
      '中文圈最常用的 IP 深度体检工具：一键显示当前代理节点的 ASN 运营商、IP 类型（IDC 机房 IP vs ISP 住宅 IP）、风险欺诈分值、是否为广播 IP 或原生 IP，以及共享人数估算。',
    howToUse: '连接机场节点后打开 `ping0.cc`，重点查看「IP 类型」与「风控值」（绿色越低代表 IP 越干净）。',
    proTip: '使用 ChatGPT 或 Claude 前，可用 Ping0 检查所选日本/美国节点是否为低风控纯净 IP；光速云与微风网络的多条原生线在此测试表现优异。',
  },
  {
    id: 'ip-scamalytics',
    name: 'Scamalytics IP Fraud Risk Lookup（国际权威欺诈分查询）',
    category: 'ip-check',
    categoryLabel: 'IP 纯净度与隐私检测',
    badge: 'OpenAI/TikTok 风控同源',
    url: 'https://scamalytics.com/ip',
    summary:
      '海外金融、跨境电商（Amazon/eBay/Etsy）与 AI 平台广泛采信的反欺诈数据库。分值从 0 到 100，0–25 为 Low Risk（低风险安全区）。',
    howToUse: '打开网页即可自动检测当前出口 IP 的 Fraud Score，也可手动粘贴任意 IP 查询。',
    proTip: '为什么野生免费梯子一登账号就封？把免费节点的 IP 贴进 Scamalytics，往往显示 85–100 分（High Risk）！',
  },
  {
    id: 'ip-browserleaks',
    name: 'BrowserLeaks WebRTC & DNS Leak Test（真实 IP 泄露照妖镜）',
    category: 'ip-check',
    categoryLabel: 'IP 纯净度与隐私检测',
    badge: '防真实 IP 暴露必查',
    url: 'https://browserleaks.com/webrtc',
    summary:
      '即便您挂了代理，浏览器的 WebRTC 实时通信接口或配置不当的本地 DNS 仍可能直接把您国内家庭宽带的真实公网 IP 暴露给海外网站！',
    howToUse: '挂上代理后访问该页面，检查 Public IP Address 一栏是否出现了中国大陆的电信/联通/移动 IP。',
    proTip: '若发现真实 IP 泄露，可在 Clash Verge Rev / FlClash 中开启「TUN 模式 + Fake-IP」，或安装 WebRTC Control 浏览器插件。',
  },
  {
    id: 'ip-ipinfo',
    name: 'IPinfo.io（精准 ASN 与双 ISP 属性核验）',
    category: 'ip-check',
    categoryLabel: 'IP 纯净度与隐私检测',
    badge: '开发者级 IP 数据库',
    url: 'https://ipinfo.io/what-is-my-ip',
    summary:
      '提供极其准确的地理位置、ASN 自治系统号、`asn.type` 与 `company.type` 双字段对比，是判断 TikTok 运营节点是否为真双 ISP 的行业金标准。',
    howToUse: '打开后查看 Privacy 标识与 ASN 类型（`isp` 代表本土运营商宽带，`hosting` 代表数据中心）。',
    proTip: '每日提供免费免登录查询额度，支持命令行 `curl ipinfo.io` 快速验证终端是否成功走代理。',
  },

  // 3. 测速与路由追踪
  {
    id: 'speed-fast',
    name: 'Fast.com（Netflix 官方出品的流媒体专线测速）',
    category: 'speed-route',
    categoryLabel: '节点测速与路由诊断',
    badge: 'Netflix 真实服务器测速',
    url: 'https://fast.com/',
    summary:
      '由流媒体巨头 Netflix 官方运营的极简测速站，测试服务器直接部署在 Netflix Open Connect 全球视频分发节点上，测出的速度就是您看 4K 视频的真实吞吐速度。',
    howToUse: '切换到香港、台湾、新加坡或日本节点后打开 `fast.com`，点击「显示更多信息」还能同时查看空载延迟与负载延迟（Bufferbloat）。',
    proTip: '只要 Fast.com 测速稳定在 35 Mbps 以上，即可无缓冲流畅播放 Netflix 与 YouTube 4K 60fps HDR 视频。',
  },
  {
    id: 'speed-cloudflare',
    name: 'Cloudflare SpeedTest (speed.cloudflare.com)',
    category: 'speed-route',
    categoryLabel: '节点测速与路由诊断',
    badge: '抖动与丢包专业实验室',
    url: 'https://speed.cloudflare.com/',
    summary:
      '比传统 Speedtest.net 更适合评测科学上网机场的专业面板：分别测试 100kB、1MB、10MB、25MB 不同大小数据包的下载/上传速率、抖动（Jitter）与丢包率（Packet Loss）。',
    howToUse: '打开网页自动运行，重点关注右侧的 Jitter（越低越好，IEPL 专线通常 <5ms）与 Packet Loss（应为 0%）。',
    proTip: '网页浏览和 AI 对话快不快，主要看 100kB 小包响应与延迟抖动，而非单纯看大文件峰值带宽。',
  },
  {
    id: 'speed-itdog',
    name: 'ITDog.cn（全国三网多省份 Ping / Tcping / 路由追踪）',
    category: 'speed-route',
    categoryLabel: '节点测速与路由诊断',
    badge: '被墙检测与入口测速',
    url: 'https://www.itdog.cn/tcping/',
    summary:
      '当某个网站打不开或机场节点连不上时，用 ITDog 从全国几十个电信、联通、移动监测点发起 Tcping，3 秒钟就能判断是“海外全境被墙”还是“仅您本地宽带运营商 DNS 故障”。',
    howToUse: '输入域名和端口（如 443）点击持续测试，一片全红代表被防火墙阻断，部分绿部分红代表局部运营商阻断。',
    proTip: '也可用来测试机场国内 BGP 入口 IP 到您所在省份的物理首跳延迟。',
  },

  // 4. 开源分流规则集与订阅管理
  {
    id: 'rules-metacubex',
    name: 'MetaCubeX 官方 GeoIP / GeoSite 路由数据库',
    category: 'rules-sub',
    categoryLabel: '开源分流规则与配置',
    badge: 'Mihomo 内核官方源',
    url: 'https://github.com/MetaCubeX/meta-rules-dat',
    configSnippet: 'https://testingcf.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@release/',
    summary:
      'Clash Verge Rev、FlClash、OpenClash 等所有 Mihomo 内核客户端底层依赖的国内外 IP 与域名分类数据库，每日自动构建更新。',
    howToUse: '在客户端设置 -> GeoData 更新源中配置加速镜像地址即可一键更新最新分流库。',
    proTip: '定期更新 GeoSite 数据库可确保最新上线的 AI 域名与国内新 App 自动匹配正确分流。',
  },
  {
    id: 'rules-blackmatrix7',
    name: 'Blackmatrix7 精细化分流规则库 (ios_rule_script)',
    category: 'rules-sub',
    categoryLabel: '开源分流规则与配置',
    badge: 'OpenAI / 奈飞独立规则',
    url: 'https://github.com/blackmatrix7/ios_rule_script',
    summary:
      '全网分类最细致的开源代理规则仓库，涵盖 OpenAI、Claude、Gemini、Copilot、Netflix、Disney+、Bilibili、TikTok、Steam 等 500+ 项独立服务的分流列表，同时提供 Clash、Shadowrocket、Quantumult X、Sing-box 格式。',
    howToUse: '在客户端的 Rule Providers 或覆写脚本中直接引用对应的 `OpenAI.yaml` 或 `Claude.yaml` 规则集。',
    proTip: '配合 TOP 1 光速云的日本/美国节点，将 OpenAI 和 Anthropic 规则组单独指向美日节点，即可彻底告别地区限制报错。',
  },
  {
    id: 'rules-loyalsoldier',
    name: 'Loyalsoldier Clash / V2Ray 规则集',
    category: 'rules-sub',
    categoryLabel: '开源分流规则与配置',
    badge: '国内直连白名单标杆',
    url: 'https://github.com/Loyalsoldier/clash-rules',
    summary:
      '专为科学上网用户维护的高准确度“大陆白名单 + GFWList 黑名单 + 广告域名拦截”规则集合，确保国内网银、政务网站、微信与游戏 100% 直连不走代理。',
    howToUse: '在 Clash Verge Rev 覆写（Profiles Override）中引入 `direct.txt`、`proxy.txt` 与 `reject.txt`。',
    proTip: '不仅能防止国内流量误扣机场配额，还能解决挂梯子时国内 App 定位漂移到海外的问题。',
  },
  {
    id: 'rules-substore',
    name: 'Sub-Store（开源高级多机场订阅合并与转换神器）',
    category: 'rules-sub',
    categoryLabel: '开源分流规则与配置',
    badge: '一主一备合并利器',
    url: 'https://github.com/sub-store-org/Sub-Store',
    summary:
      '如果您同时购买了「光速云主力套餐」与「二猫云/Firefly 不限时备用包」，Sub-Store 可以将多家不同机场的订阅链接合并为一条统一订阅，并支持正则过滤倍率节点、自动重命名国旗图标。',
    howToUse: '支持在浏览器 Web 版、Docker、软路由或客户端内置插件中运行。',
    proTip: '比公共在线订阅转换网站更安全——所有订阅链接均在本地处理，绝不泄露您的私有机场 Token！',
  },

  // 5. 免费海外数字身份：Apple ID / 邮箱 / 2FA
  {
    id: 'id-appleid-us',
    name: 'Apple 官网免信用卡直注「免费美区 Apple ID」通道',
    category: 'identity-mail',
    categoryLabel: '海外身份与隐私邮箱',
    badge: '下载 iOS 小火箭/Karing 必备',
    url: 'https://account.apple.com/',
    summary:
      '无需在淘宝花钱买共享账号！任何人都可以在苹果官网免费注册一个属于自己的纯净美区 Apple ID（付款方式选 None），用于下载 Karing、sing-box 或充值礼品卡购买 Shadowrocket。',
    howToUse:
      '1）打开苹果账号官网选择创建新账户，国家选「美国」；2）绑定未注册过苹果的邮箱与您现有的中国大陆 +86 手机号（完全支持 +86 接验证码！）；3）登录 App Store 时地址填免税州（如俄勒冈州 Oregon 邮编 97201），付款方式选 None。',
    proTip: '切记：绝对不要在手机「系统设置 -> iCloud」里登录买来的共享 Apple ID（防止被远程锁机勒索），只可从桌面「App Store」图标点右上角头像登录！',
  },
  {
    id: 'id-protonmail',
    name: 'Proton Mail（瑞士端到端加密免费邮箱）',
    category: 'identity-mail',
    categoryLabel: '海外身份与隐私邮箱',
    badge: '零手机号注册海外账号',
    url: 'https://proton.me/mail',
    summary:
      '全球最知名的瑞士加密邮箱，免费版提供 `@proton.me` / `@protonmail.com` 地址，注册过程无需强制绑定国内手机号，非常适合用来注册机场账号、GitHub、Discord 与海外 AI 平台。',
    howToUse: '挂上日本或美国节点访问 `proton.me`，选择 Free Plan 即可 1 分钟完成注册。',
    proTip: '建议将机场注册邮箱与日常国内 QQ/163 邮箱隔离，既能收到防失联通知，又能最大化保护个人隐私。',
  },
  {
    id: 'id-2fas',
    name: '2FAS Auth / Ente Auth（免费开源跨平台两步验证器）',
    category: 'identity-mail',
    categoryLabel: '海外身份与隐私邮箱',
    badge: '替代 Google Authenticator',
    url: 'https://2fas.com/',
    summary:
      '注册 OpenAI、Claude、GitHub、币安等海外平台开启 2FA 双因素验证时，强烈推荐使用 100% 开源、支持端到端加密备份的 2FAS 或 Ente Auth，避免换手机时丢失全部验证码。',
    howToUse: '支持 iOS、Android 与浏览器扩展，开启加密云备份或导出本地恢复码保存。',
    proTip: '完全免费无内购，代码公开接受全球安全审计。',
  },

  // 6. 免费 AI 大模型与学术资源
  {
    id: 'ai-google-studio',
    name: 'Google AI Studio（官方免费使用 Gemini 2.5 Pro 大模型）',
    category: 'free-ai',
    categoryLabel: '免费 AI 大模型与科研工具',
    badge: '百万上下文免费白嫖',
    url: 'https://aistudio.google.com/',
    summary:
      '很多用户不知道：虽然网页版 Gemini Advanced 要收 $20/月，但在面向开发者的 Google AI Studio 工作台中，个人普通 Google 账号可以**完全免费**使用满血版 Gemini Pro 模型（支持 100万+ Token 超长 PDF 与代码库分析）！',
    howToUse: '将机场客户端切换至 **美国（US）或新加坡（SG）** 节点（切勿用香港节点），登录 Google 账号打开 `aistudio.google.com` 即可直接对话。',
    proTip: '搭配光速云 99元/年（8元/月）的美西/新加坡专线节点，相当于每月花 8 块钱就能白嫖原本 $20/月的顶级多模态大模型！',
  },
  {
    id: 'ai-openrouter',
    name: 'OpenRouter Free Models（聚合十余款免费 `:free` 大模型）',
    category: 'free-ai',
    categoryLabel: '免费 AI 大模型与科研工具',
    badge: '免绑卡免费 API 与对话',
    url: 'https://openrouter.ai/models?max_price=0',
    summary:
      '全球最大的 AI 模型路由平台 OpenRouter 长期提供数十款价格为 `$0/M tokens` 的免费模型（涵盖 DeepSeek R1、Llama 3.3 70B、Qwen 2.5 Coder、Gemma 3 等），支持网页直接对话或生成免费 API Key 填入客户端。',
    howToUse: '访问链接筛选 `Free` 模型，或复制带 `:free` 后缀的模型 ID 填入沉浸式翻译、Cherry Studio、NextChat 中免费调用。',
    proTip: '用免费 API Key 搭配开源浏览器插件「沉浸式翻译 (Immersive Translate)」，即可实现全网外文网页与 YouTube 双语字幕零成本 AI 翻译！',
  },
  {
    id: 'ai-duckduckgo',
    name: 'DuckDuckGo AI Chat（免注册、零日志免费匿名 AI 对话）',
    category: 'free-ai',
    categoryLabel: '免费 AI 大模型与科研工具',
    badge: '无需账号开箱即用',
    url: 'https://duck.ai/',
    summary:
      '由隐私搜索引擎 DuckDuckGo 提供的免费公益 AI 聚合入口，无需注册任何账号、无需手机号验证，打开网页即可免费调用 GPT-4o mini、Claude 3 Haiku、Llama 3.3 与 Mistral 模型。',
    howToUse: '挂上任意非中国大陆节点访问 `duck.ai` 即可秒开使用，所有对话承诺匿名中转不用于训练。',
    proTip: '当您的主力 AI 账号临时遇到验证或不想登录个人账号提问时，`duck.ai` 是最快的免费救急神器。',
  },
];

export const clashDnsBestPracticeYaml = `# 2026 科学上网客户端防 DNS 污染与国内外精准分流黄金模板
# 适用于 Clash Verge Rev / FlClash / OpenClash / Stash (Mihomo 内核)
dns:
  enable: true
  ipv6: false
  enhanced-mode: fake-ip
  fake-ip-range: 198.18.0.1/16
  # 内部域名优先走国内高速 DoH，防止微信/淘宝/B站绕路卡顿
  default-nameserver:
    - 223.5.5.5
    - 119.29.29.29
  nameserver:
    - https://dns.alidns.com/dns-query
    - https://doh.pub/dns-query
  # 海外被污染域名通过代理隧道查询 Cloudflare / Quad9 加密 DoH
  fallback:
    - https://cloudflare-dns.com/dns-query
    - https://dns.quad9.net/dns-query
  fallback-filter:
    geoip: true
    geoip-code: CN
    ipcidr:
      - 240.0.0.0/4`;
