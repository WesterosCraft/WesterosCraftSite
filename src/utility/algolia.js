// Tutorial
// https://www.gatsbyjs.org/docs/adding-search-with-algolia/

const wikiQuery = `{
    craft {
      entries(site: "westeroscraft",  section:"wiki") {
        objectID: id
        title
        slug
        parent {
          slug
        }
      }
    }
  }`;

const queries = [
  {
    query: wikiQuery,
    transformer: ({ data }) => data.craft.entries.map((node) => node),
    indexName: `Wiki`,
  },
];

module.exports = queries;
