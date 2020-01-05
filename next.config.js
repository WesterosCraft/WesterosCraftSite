const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  webpack: (config, {}) => {
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader',
    });
    return config;
  },
});
