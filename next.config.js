const { withContentlayer } = require('next-contentlayer');
const { withSentryConfig } = require('@sentry/nextjs');

const sentryWebpackPluginOptions = {
  silent: true,
};

let moduleExports = {
  reactStrictMode: true,
  i18n: {
    locales: ['en-GB'],
    defaultLocale: 'en-GB',
  },
};

moduleExports = withContentlayer()(moduleExports);
moduleExports = withSentryConfig(moduleExports, sentryWebpackPluginOptions);

module.exports = moduleExports;
