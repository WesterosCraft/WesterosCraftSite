import React from 'react';

import { Heading } from 'rebass';

const CategoryPage = ({ data }) => {
  console.log('cat page', data);
  return (
    <>
      <Heading variant="heading2" textAlign="center" mt={[12]}>
        cat Page{' '}
      </Heading>
    </>
  );
};

// export const pageQuery = graphql`
//   query progressQuery {
//     craft {
//       entries(site: "westeroscraft", section: "wiki", type: "wikiDestination") {
//         title
//         slug
//       }
//     }
//   }
// `

export default CategoryPage;
