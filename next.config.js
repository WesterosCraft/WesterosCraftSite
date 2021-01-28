const STUDIO_REWRITE = {
  source: '/studio/:path*',
  destination:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3333/studio/:path*'
      : '/studio/index.html'
};

module.exports = {
  rewrites: () => [STUDIO_REWRITE],
  webpack: (config, {}) => {
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader'
    });
    return config;
  },
  images: {
    domains: ['cdn.westeroscraft.com', 'cdn.sanity.io']
  }
};
