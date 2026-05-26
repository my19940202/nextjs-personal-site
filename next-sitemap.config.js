/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.SITE_URL || "https://aizeten.me",
  generateRobotsTxt: true,
  sitemapSize: 7000,
};
