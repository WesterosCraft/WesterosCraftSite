import React from 'react';
import { graphql } from 'gatsby';

import { BlockBookLayout } from '../components/templates/blockBookLayout';
import SEO from '../components/organisms/seo/seo';

const BlockBookPage = ({ data, pageContext }) => {
  return (
    <>
      <SEO
        title="The Block Book"
        description={data.craft.entry.pageDescription}
        image={data.craft.entry.pageEntry && data.craft.entry.pageImage[0].url}
      />
      <BlockBookLayout title={data.craft.entry.title || 'Block Book'} breadcrumb={pageContext.breadcrumb}>
        <h1>test</h1>
      </BlockBookLayout>
    </>
  );
};

export const pageQuery = graphql`
  query blockBookQuery {
    craft {
      entries(type: "block") {
        title
      }
    }
  }
`;

export default BlockBookPage;
