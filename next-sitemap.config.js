/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://safe-love.vercel.app',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
    // เพิ่มบรรทัดนี้ช่วยให้ GSC รู้จักไฟล์ลูกโดยตรงด้วย
    additionalSitemaps: ['https://safe-love.vercel.app/sitemap-0.xml'],
  },
  sitemapSize: 5000,
};
