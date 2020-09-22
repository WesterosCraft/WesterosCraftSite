import React from 'react';
import { graphql } from 'gatsby';

import { WikiLayout } from '../components/templates/wikiLayout';
import { WikiSliceZone } from '../components/slices/wikiSliceZone';
import SEO from '../components/organisms/seo/seo';

const WikiPage = ({ data, pageContext }) => {
  return (
    <>
      <SEO
        title="Wiki"
        description={data.craft.entry.pageDescription}
        image={data.craft.entry.pageEntry && data.craft.entry.pageImage[0].url}
      />
      <WikiLayout
        title={data.craft.entry.title || 'WesterosCraft Wiki'}
        breadcrumb={pageContext.breadcrumb}>
        <WikiSliceZone slices={data.craft.entry.wikiSlices} />
      </WikiLayout>
    </>
  );
};

export const pageQuery = graphql`
  query wikiQuery {
    craft {
      entry(site: "westeroscraft", slug: "wiki") {
        ... on Craft_wikiHome_wikiHome_Entry {
          title
          pageDescription
          pageImage {
            url
          }
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
          }
        }
      }
    }
  }
`;

export default WikiPage;
