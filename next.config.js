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

if (process.env.SENTRY_AUTH_TOKEN) {
  moduleExports = withSentryConfig(moduleExports, sentryWebpackPluginOptions);
}

module.exports = moduleExports;
