import React from 'react';
import { graphql } from 'gatsby';
import { Text } from 'rebass';

import { BlockBookLayout } from '../components/templates/blockBookLayout';
import SEO from '../components/organisms/seo/seo';
import { WikiSliceZone } from '../components/slices/wikiSliceZone';

const BlockBookPage = ({ data, pageContext }) => {
  console.log(data);
  console.log(pageContext);
  return (
    <>
      <SEO
        title="The Block Book"
        description={data.craft.entry.pageDescription || ''}
        image={data.craft.entry.pageEntry && data.craft.entry.pageImage[0].url}
      />
      <BlockBookLayout title={'The Block Book'} breadcrumb={pageContext.breadcrumb}>
        <WikiSliceZone slices={data.craft.entry.wikiSlices} />
        {data.craft.categories.map((category) => (
          <Text key={category.title}>{category.title}</Text>
        ))}
      </BlockBookLayout>
    </>
  );
};

export const pageQuery = graphql`
  query blockBookQuery {
    craft {
      entry(slug: "block-book") {
        ... on Craft_blockBook_blockBook_Entry {
          title
          pageDescription
          pageImage {
            url
          }
          wikiSlices {
            ... on Craft_wikiSlices_text_BlockType {
              ...wikiText
            }
          }
        }
      }
      categories: categories(group: "blocks") {
        title
      }
    }
  }
`;

export default BlockBookPage;
