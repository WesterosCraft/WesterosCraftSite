require('dotenv').config({
  path: `.env`,
});

const queries = require('./src/utility/algolia');

module.exports = {
  siteMetadata: {
    title: `WesterosCraft`,
    description: `A Minecraft server dedicated to building the world of A Game of Thrones.`,
    author: `Jacob Granberry`,
    url: 'https://www.westeroscraft.com',
    image: '/images/wc-round-red-logo.png',
    twitterUsername: '@westeroscraft',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-transition-link`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-layout`,
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        queries,
        chunkSize: 10000,
        enablePartialUpdates: true,
        matchFields: ['slug', 'modified'],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `westeroscraft-site`,
        short_name: `westeroscraft`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#9E1E22`,
        display: `minimal-ui`,
        lang: `en`,
        icon: `src/images/shield-logo.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        fieldName: `craft`,
        typeName: `Craft`,
        url: `https://westeroscraft.com/api`,
      },
    },
    {
      resolve: `gatsby-plugin-breadcrumb`,
      options: {
        useAutoGen: true,
        crumbLabelUpdates: [
          {
            pathname: '/wiki',
            crumbLabel: 'Wiki',
          },
        ],
      },
    },
  ],
};
