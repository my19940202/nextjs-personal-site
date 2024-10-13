import { SiteConfig } from "@/types/siteConfig";
import { BsGithub, BsTwitterX, BsWechat } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { SiBuymeacoffee, SiJuejin } from "react-icons/si";

const OPEN_SOURCE_URL = "https://github.com/weijunext/landing-page-boilerplate";

const baseSiteConfig = {
  name: "Landing page boilerplate",
  description:
    "A free, open-source, and powerful landing page boilerplate, ideal for various projects, enabling you to create a landing page in under an hour.",
  url: "https://landingpage.weijunext.com",
  ogImage: "https://landingpage.weijunext.com/og.png",
  metadataBase: "/",
  keywords: [
    "landing page boilerplate",
    "landing page template",
    "awesome landing page",
    "next.js landing page",
  ],
  authors: [
    {
      name: "xibobo",
      url: "https://www.xishengbo.xyz/",
      twitter: "https://twitter.com/xishengbo",
    },
  ],
  creator: "@xibobo",
  openSourceURL: "https://github.com/weijunext/landing-page-boilerplate",
  themeColors: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  nextThemeColor: "dark", // next-theme option: system | dark | light
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/logo.png",
  },
  headerLinks: [
    { name: "repo", href: OPEN_SOURCE_URL, icon: BsGithub },
    {
      name: "twitter",
      href: "https://twitter.com/xishengbo",
      icon: BsTwitterX,
    },
    {
      name: "buyMeCoffee",
      href: "https://www.buymeacoffee.com/xishengbow",
      icon: SiBuymeacoffee,
    },
  ],
  footerLinks: [
    { name: "email", href: "mailto:xishengbo@gmail.com", icon: MdEmail },
    {
      name: "twitter",
      href: "https://twitter.com/xishengbo",
      icon: BsTwitterX,
    },
    { name: "github", href: "https://github.com/my19940202/", icon: BsGithub },
    {
      name: "buyMeCoffee",
      href: "https://www.buymeacoffee.com/xishengbow",
      icon: SiBuymeacoffee,
    },
    {
      name: "juejin",
      href: "https://juejin.cn/user/4019470241369662",
      icon: SiJuejin,
    },
    {
      name: "weChat",
      href: "https://weijunext.com/make-a-friend",
      icon: BsWechat,
    },
  ],
  footerProducts: [
    { url: "https://www.ifinder.one/", name: "iFinder" },
    {
      url: "https://blackmyth.top/",
      name: "blackmyth wukong source site",
    },
  ],
};

export const siteConfig: SiteConfig = {
  ...baseSiteConfig,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseSiteConfig.url,
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    siteName: baseSiteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    images: [`${baseSiteConfig.url}/og.png`],
    creator: baseSiteConfig.creator,
  },
};

