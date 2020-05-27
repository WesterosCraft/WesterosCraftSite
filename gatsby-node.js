const path = require('path');
const { regionSlugFormatter } = require(`./src/utility/regionSlugFormatter.js`);

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const result = await graphql(
    `
      {
        craft {
          destinations: entries(site: "westeroscraft", type: "wikiDestination") {
            ... on Craft_wiki_wikiDestination_Entry {
              title
              pageDescription
              pageImage {
                url
              }
              slug
              copy
              images {
                url
                title
              }
              projectDetails {
                ... on Craft_projectDetails_details_BlockType {
                  region
                  destinationType
                  destinationStatus
                  house
                  warp
                  projectLead
                  dateStarted
                  dateCompleted
                  application
                  banner {
                    url
                  }
                }
              }
            }
          }
          regions: entries(site: "westeroscraft", type: "wikiRegion") {
            ... on Craft_wiki_wikiRegion_Entry {
              title
              pageDescription
              pageImage {
                url
              }
              slug
            }
          }
          miscellaneous: entries(site: "westeroscraft", type: "wikiMiscellaneous") {
            ... on Craft_wiki_wikiMiscellaneous_Entry {
              title
              pageDescription
              pageImage {
                url
              }
              slug
            }
          }
          guides: entries(site: "westeroscraft", type: "wikiGuide") {
            title
            ... on Craft_wiki_wikiGuide_Entry {
              pageDescription
              pageImage {
                url
              }
            }
            slug
          }
        }
      }
    `,
  );
  if (result.errors) {
    reporter.panicOnBuild('Error while running GraphQL query.');
    return;
  }

  const destinations = result.data.craft.destinations;
  const regions = result.data.craft.regions;
  const miscellaneous = result.data.craft.miscellaneous;
  const guides = result.data.craft.guides;

  destinations.forEach((entry) => {
    createPage({
      path: `/wiki/${regionSlugFormatter(entry.projectDetails[0].region)}/${entry.slug}`,
      component: path.resolve('./src/pages/destination.js'),
      context: {
        data: entry,
        slug: entry.slug,
      },
    });
  });

  regions.forEach((entry) => {
    createPage({
      path: `/wiki/${entry.slug}`,
      component: path.resolve('./src/pages/region.js'),
      context: {
        data: entry,
        slug: entry.slug,
      },
    });
  });

  miscellaneous.forEach((entry) => {
    createPage({
      path: `/wiki/miscellaneous/${entry.slug}`,
      component: path.resolve('./src/pages/miscellaneous.js'),
      context: {
        data: entry,
        slug: entry.slug,
      },
    });
  });

  guides.forEach((entry) => {
    createPage({
      path: `/wiki/guides/${entry.slug}`,
      component: path.resolve('./src/pages/guides.js'),
      context: {
        data: entry,
        slug: entry.slug,
      },
    });
  });
};
