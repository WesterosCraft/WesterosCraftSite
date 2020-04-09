// Tutorial
// https://www.gatsbyjs.org/docs/adding-search-with-algolia/

const destinationsQuery = `{
    pages: {
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
      }
  }`

const flatten = (arr) =>
  arr.map(({ entries: { frontmatter, ...rest } }) => ({
    ...frontmatter,
    ...rest,
  }))
const settings = { attributesToSnippet: [`excerpt:20`] }

const queries = [
  {
    query: destinationsQuery,
    transformer: ({ data }) => flatten(data.pages.craft),
    indexName: `Destinations`,
    settings,
  },
]

module.exports = queries
