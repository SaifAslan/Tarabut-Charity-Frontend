// export const i18n = {
//   defaultLocale: "en",
//   locales: ["en", "ar"],
// } as const;

// export type Locale = (typeof i18n)["locales"][number];
const withNextIntl = require('next-intl/plugin')(
  // This is the default (also the `src` folder is supported out of the box)
  './i18n.ts'
);
 
module.exports = withNextIntl({
  // Other Next.js configuration ...
  experimental: {appDir: true}
});