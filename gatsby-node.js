const path = require('path')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const result = await graphql(
    `
      {
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
    `,
  )
  if (result.errors) {
    reporter.panicOnBuild('Error while running GraphQL query.')
    return
  }

  const entries = result.data.craft.entries

  entries.forEach((entry, i) => {
    createPage({
      path: `/wiki/${entry.projectDetails[0].region}/${entry.slug}`,
      component: path.resolve('./src/pages/destination.js'),
      context: {
        test: entry,
      },
    })
  })