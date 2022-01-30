const { withContentlayer } = require('next-contentlayer');

module.exports = withContentlayer()({
  reactStrictMode: true,
  i18n: {
    locales: ['en-GB'],
    defaultLocale: 'en-GB',
  },
});
