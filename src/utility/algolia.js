// Tutorial
// https://www.gatsbyjs.org/docs/adding-search-with-algolia/
var _ = require('lodash');
const wikiQuery = `{
    craft {
      entries(site: "westeroscraft",  section:"wiki") {
        objectID: id
        title
        slug
        ... on Craft_wiki_wikiDestination_Entry {
          projectDetails {
            ... on Craft_projectDetails_details_BlockType {
              projectLead
            }
          }
        }
      }
    }
  }`;

const queries = [
  {
    query: wikiQuery,
    transformer: ({ data }) =>
      data.craft.entries.reduce((arr, elem) => {
        if (elem.projectDetails && elem.projectDetails.length) {
          arr.push(_.merge(elem, elem.projectDetails[0]));
          delete elem.projectDetails;
        }
        return arr;
      }, []),
    indexName: `Wiki`,
  },
];

module.exports = queries;
