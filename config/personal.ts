export type ProjectLink = {
  label: string;
  href: string;
};

export type Project2B = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  /** Modal 轮播图，空数组则显示占位 */
  galleryImages: string[];
  /** 小程序二维码，稍后补充 */
  qrCode?: string;
  images?: string;
};

export type Project2C = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  links: ProjectLink[];
  images?: string;
};

export const navItems = [
  { id: "home", label: "Home", icon: "⌂" },
  { id: "projects", label: "Projects", icon: "⌘" },
  { id: "social", label: "Social Media", icon: "✦" },
] as const;

export type NavId = (typeof navItems)[number]["id"];

export const homeContent = {
  greeting: "Hi, there!",
  name: "渣渣奚",
  alias: "xibobo",
  intro:
    "帮中小企业主把「重复的事交给系统、获客的事交给产品」。从需求梳理到小程序/网站落地，再到 AI 工作流接入，提供可执行的数字化方案，而不是只聊概念。",
  highlights: [
    "百度广告系统与数据分析背景，懂流量、懂转化，做产品时会优先考虑业务怎么跑通、怎么省钱。",
    "2025 年独立交付 10+ 个 2B 项目（教育、装修、文旅等），覆盖小程序、管理后台与 AI 提效工具，从 0 到上线全程负责。",
    "擅长把复杂需求拆成可分期上线的小版本，先解决最痛的一环，再迭代扩展，降低试错成本。",
  ],
  services: [
    {
      title: "省人力 · 流程自动化",
      text: "梳理你的 SOP，把重复录入、通知、报表等工作交给小程序、工作流或 AI，让团队少加班、少出错。",
    },
    {
      title: "多获客 · 线上门面",
      text: "帮你快速搭建官网、预约/商城小程序，让客户更容易找到你、了解你、下单联系你。",
    },
    {
      title: "用 AI · 务实落地",
      text: "语音生成、智能表格、自动化工作流等，按业务场景选型接入，不堆概念，先看到效率或体验上的变化。",
    },
  ],
  experience: [
    {
      company: "百度",
      role: "互联网广告业务：开发与数据分析",
      period: "过往经历",
      description: "广告系统与数据分析，对流量、变现比较熟。",
    },
    {
      company: "一人公司",
      role: "独立开发者 / 咨询",
      period: "2024 - 至今",
      description:
        "独立完成多个 2B 软件项目，涵盖装修商城、多语种学习、景区导览等小程序，以及 AI 工具类 Web 产品。",
    },
  ],
};

export type SkillTag = {
  label: string;
  href: string;
};

export const skillTags: SkillTag[] = [
  {
    label: "AI 生图",
    href: "https://www.bilibili.com/video/BV1z5GH6xEKH",
  },
  {
    label: "工作流",
    href: "https://www.bilibili.com/video/BV1kbN1zZEMu/",
  },
  {
    label: "飞书多维表",
    href: "https://www.xiaohongshu.com/explore/686143c30000000012031bf0?source=webshare&xhsshare=pc_web&xsec_token=AB8p6UuP3Vadez4mgg5r5CDEqV3RmWeQcunPyaDNwx4D8=&xsec_source=pc_share",
  },
  {
    label: "Docker 部署",
    href: "https://www.bilibili.com/video/BV1jnA3zJEdv",
  },
];

export const projects2B: Project2B[] = [
  {
    id: "house-decoration",
    title: "装修商城小程序",
    description:
      "为装修行业打造的微信小程序，将微信群宣传、需求收集、购物车与订单流程线上化，帮助装修老板高效分发与管理客户需求。",
    tags: ["微信小程序", "2B", "电商"],
    galleryImages: [
      '/projects/house-decoration/cart.jpg',
      '/projects/house-decoration/index.jpg',
      '/projects/house-decoration/menu.jpg',
      '/projects/house-decoration/order.jpg',
      '/projects/house-decoration/user.jpg'
    ],
  },
  {
    id: "language-learning",
    title: "多语种背单词学习小程序",
    description:
      "为方竹小语种培训开发的学习小程序，支持单词书、日历打卡、用户中心与兑换码等功能，帮助学员建立稳定的语言学习习惯。",
    tags: ["微信小程序", "2B", "教育"],
    images: '/icons/words.jpeg',
    galleryImages: [
      '/projects/words/1.png',
      '/projects/words/2.png',
      '/projects/words/3.png',
      '/projects/words/4.png',
      '/projects/words/5.png',
      '/projects/words/6.png',
      '/projects/words/7.png',
    ],
  },
  {
    id: "scenic-guide",
    title: "景区导览小程序",
    description:
      "面向景区 C 端的小程序，包含地图标注、GPS 定位、路线规划、景点语音导览，以及 AI 交互引导浏览等功能。",
    tags: ["微信小程序", "2B", "文旅"],
    images: '/icons/rys.jpeg',
    galleryImages: [
      '/projects/rys/0.png',
      '/projects/rys/1.png',
      '/projects/rys/2.png',
      '/projects/rys/3.png',
      '/projects/rys/4.png'
    ],
  },
];

export const projects2C: Project2C[] = [
  {
    id: "nano-banana-ppt",
    title: "Nano Banana PPT 生成网站",
    description: "基于 AI 的 PPT 生成网站，帮助用户快速产出演示文稿。",
    tags: ["AI", "Web", "PPT"],
    images: '/icons/ppt.png',
    links: [{ label: "访问网站", href: "http://ppt.hoduan.com/" }],
  },
  {
    id: "ai-image-maker",
    title: "AI 生图网站",
    description: "AI 图像生成网站，提供便捷的在线 AI 绘图体验。",
    tags: ["AI", "Web", "图像生成"],
    images: '/icons/ai-image-maker.png',
    links: [{ label: "访问网站", href: "https://aihaibao.org/" }],
  },
  {
    id: "weread-comment",
    title: "微信读书评论 Chrome 插件",
    description:
      "Chrome 浏览器插件，增强微信读书的评论与互动体验。",
    tags: ["Chrome 插件", "2C"],
    images: '/icons/wxread-icon.png',
    links: [
      {
        label: "Chrome Web Store",
        href: "https://chromewebstore.google.com/detail/%E5%BE%AE%E4%BF%A1%E8%AF%BB%E4%B9%A6%E8%AF%84%E8%AE%BA%E6%8F%92%E4%BB%B6/kfjimgaoegibikoojcbnkbffkongnoep",
      },
    ],
  },
  {
    id: "cursor-hooks-english",
    title: "Cursor Hooks 学英语",
    description:
      "结合 Cursor Hooks 的英语学习项目，通过开发工作流中的钩子机制辅助语言学习，并开源了配套统计工具。",
    tags: ["AI", "开源", "教育"],
    links: [
      {
        label: "Bilibili",
        href: "https://www.bilibili.com/video/BV1hMNFz1Emx",
      },
      {
        label: "GitHub",
        href: "https://github.com/my19940202/cursor-thinking-stat",
      },
    ],
  },
  {
    id: "ai-link",
    title: "AI Link 大模型 App",
    description:
      "面向国内用户的海外大模型统一访问 App，在一款应用内切换 DeepSeek、GPT、Claude 等模型，支持流式对话、Markdown 渲染与语音输入，解决国内访问不便的问题。",
    tags: ["AI", "App", "大模型"],
    images: "/icons/ai-link.png",
    links: [{ label: "下载 App", href: "https://chat.aizeten.me/download" }],
  },
  {
    id: "store-location-analyzer",
    title: "Store Location Analyzer",
    description:
      "面向海外创业者与小商家的轻量化店铺选址工具，基于 Google Maps 快速分析竞品密度、客流潜力与配套设施，3 分钟出评分报告，比企业级 GIS 工具更轻、更快、更便宜。",
    tags: ["Web", "SaaS", "海外"],
    images: "/icons/siteselect.png",
    links: [{ label: "访问网站", href: "https://www.siteselect.top" }],
  },
];

export const socialLinks = [
  {
    name: "X (Twitter)",
    handle: "@xishengbo",
    href: "https://x.com/xishengbo",
  },
  {
    name: "即刻",
    handle: "xishengbo",
    href: "https://web.okjike.com/u/4930384A-ABE5-4856-BB23-E4A9DC2BE526",
  },
  {
    name: "小红书",
    handle: "渣渣奚",
    href: "https://www.xiaohongshu.com/user/profile/5ab3c72711be102733af9f87",
  },
  {
    name: "LinkedIn",
    handle: "波 老",
    href: "https://www.linkedin.com/in/%E6%B3%A2-%E8%80%81-772304295/",
  },
];
