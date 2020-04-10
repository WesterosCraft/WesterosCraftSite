// Tutorial
// https://www.gatsbyjs.org/docs/adding-search-with-algolia/

const destinationsQuery = `{
    craft {
      entries(site: "westeroscraft", type: "wikiDestination") {
        ... on Craft_wiki_wikiDestination_Entry {
          title
          slug
          projectDetails {
            ... on Craft_projectDetails_details_BlockType {
              region
            }
          }
        }
      }
    }
  }`

const queries = [
  {
    query: destinationsQuery,
    transformer: ({ data }) => data.craft.entries.map((node) => node),
    indexName: `Destinations`,
  },
]

module.exports = queries
