import React from 'react';
import { WikiLayout } from '../components/templates/wikiLayout';

import { graphql } from 'gatsby';
import { WikiSliceZone } from '../components/slices/wikiSliceZone';
import SEO from '../components/organisms/seo/seo';

const MiscellaneousPage = ({ pageContext, data }) => {
  return (
    <>
      {pageContext && pageContext.data && (
        <SEO
          title={pageContext.data.pageTitle || pageContext.data.title}
          description={pageContext.data.pageDescription}
          image={pageContext.data.pageEntry && pageContext.data.pageImage[0].url}
        />
      )}
      <WikiLayout
        title={(pageContext && pageContext.data && pageContext.data.title) || 'WesterosCraft Wiki'}
        breadcrumb={pageContext.breadcrumb}
      >
        <WikiSliceZone slices={data.craft.entry.wikiSlices} />
      </WikiLayout>
    </>
  );
};

export const pageQuery = graphql`
  query MiscQuery($slug: [String]) {
    craft {
      entry(site: "westeroscraft", type: "wikiMiscellaneous", slug: $slug) {
        title
        ... on Craft_wiki_wikiMiscellaneous_Entry {
          title
          wikiSlices {
            ... on Craft_wikiSlices_text_BlockType {
              ...wikiText
            }
            ... on Craft_wikiSlices_entryGrid_BlockType {
              ...entryGrid
            }
            ... on Craft_wikiSlices_imageGrid_BlockType {
              ...imageGrid
            }
            ... on Craft_wikiSlices_accordion_BlockType {
              ...accordion
            }
          }
        }
      }
    }
  }
`;

export default MiscellaneousPage;
