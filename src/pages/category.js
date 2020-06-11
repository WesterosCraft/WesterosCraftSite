import React from 'react';

import { graphql } from 'gatsby';
import { Heading, Box, Text } from 'rebass';

const CategoryPage = ({ data, pageContext }) => {
  return (
    <>
      <Heading variant="heading2" textAlign="center" mt={[12]}>
        {pageContext.data.title || ''}
      </Heading>
      <Box>
        {data.craft.entries.map((entry) => (
          <Text>{entry.title}</Text>
        ))}
      </Box>
    </>
  );
};

export const pageQuery = graphql`
  query categoryQuery($id: [Int]) {
    craft {
      entries(section: "block", type: "block", relatedTo: $id) {
        title
        slug
      }
    }
  }
`;

export default CategoryPage;
