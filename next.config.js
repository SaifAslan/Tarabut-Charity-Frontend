// // @ts-check

// /**
//  * @type {import('next').NextConfig}
//  **/
// const nextConfig = {
//   // i18n: {
//   //   locales: ["default", "en", "ar"],
//   //   defaultLocale: "default",
//   //   localeDetection: false,
//   // },
//   trailingSlash: true,
//   experimental: {
//     appDir: true,
//   },
//   images: {
//     domains: [
//       "http://localhost:3000",
//       "https://www.tarabut.org.uk",
//     ],
//   },
 
// };

// module.exports = nextConfig;
const withNextIntl = require('next-intl/plugin')(
  // This is the default (also the `src` folder is supported out of the box)
  './src/i18n.ts'
);
 
module.exports = withNextIntl({
  // Other Next.js configuration ...
  experimental: {appDir: true},
});