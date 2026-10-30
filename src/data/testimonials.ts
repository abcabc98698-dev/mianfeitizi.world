import type { Testimonial } from '../types';

export const testimonials: Testimonial[] = [
  {
    quote:
      '以前为了省钱到处找免费梯子和公益订阅，结果不仅晚高峰连 GitHub 都拉不下来，还差点因为劣质公共 IP 导致 Claude 账号被封。换到光速云 99元/年轻量版和极速版后，IEPL 专线配合 Clash Verge Rev 的 TUN 模式，Cursor 和 ChatGPT 全天候秒响应。',
    name: 'Lin Chen',
    role: '全栈独立开发者 · 每日重度使用 Cursor & Claude',
    image: {
      src: '/media/community/member-story-priya-nair-posture.webp',
      alt: '独立开发者使用 IEPL 专线机场流畅连接 GitHub 与 AI 编程工具',
    },
  },
  {
    quote:
      '家里同时有 MacBook、iPhone、iPad 和客厅的 Apple TV。按照站内的客户端指南在软路由配置了 OpenClash 并接入微风网络的不限设备数 IEPL 套餐，现在全家人晚上同时看 Netflix 4K 杜比视界和 YouTube 8K 演示片都丝滑得像本地视频。',
    name: 'Marcus Wong',
    role: '数字影音发烧友 · Apple TV & 软路由玩家',
    image: {
      src: '/media/community/member-story-daniel-brooks-calm.webp',
      alt: '多设备家庭通过专线机场流畅观看 Netflix 与 Disney+ 4K 流媒体',
    },
  },
  {
    quote:
      '作为研究生平时主要用来查 Google Scholar 外文文献和用 GPT-4o 润色论文，完全不懂那些复杂的 YAML 规则。通过对比表选了带自研客户端的飞猫云 84元/年学生版，折后一个月才 6 块钱出头，输入账号一键就连上了，还顺手备了一个光速云 147 永久包。',
    name: 'Elena Su',
    role: '高校在读研究生 · 科研文献与 AI 写作高频用户',
    image: {
      src: '/media/community/member-story-elena-ruiz-mobility.webp',
      alt: '高校学生使用百元内年付专线机场进行学术检索与论文辅助',
    },
  },
];
