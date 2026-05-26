import { SiteConfig } from "@/types/siteConfig";
import { BsGithub, BsTwitterX } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const OPEN_SOURCE_URL = "https://github.com/my19940202/";

const baseSiteConfig = {
  name: "Xibobo",
  description: "Personal website of Xibobo.",
  url: "https://aizeten.me",
  ogImage: "https://aizeten.me/og.png",
  metadataBase: "/",
  keywords: ["xibobo", "personal website", "portfolio", "aizeten.me"],
  authors: [
    {
      name: "xibobo",
      url: "https://aizeten.me",
      twitter: "https://twitter.com/xishengbo",
    },
  ],
  creator: "@xishengbo",
  openSourceURL: "https://github.com/my19940202/",
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
    { name: "github", href: "https://github.com/my19940202/", icon: BsGithub },
    {
      name: "twitter",
      href: "https://twitter.com/xishengbo",
      icon: BsTwitterX,
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
  ],
  footerProducts: [],
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

