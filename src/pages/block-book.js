import React from 'react';
import { graphql } from 'gatsby';
import { Heading, Box, Image, Flex } from 'rebass';

import { BlockBookLayout } from '../components/templates/blockBookLayout';
import SEO from '../components/organisms/seo/seo';
import { WikiSliceZone } from '../components/slices/wikiSliceZone';
import { Link } from 'gatsby';

const BlockBookPage = ({ data, pageContext }) => {
  return (
    <>
      <SEO
        title="The Block Book"
        description={data.craft.entry.pageDescription || ''}
        image={data.craft.entry.pageEntry && data.craft.entry.pageImage[0].url}
      />
      <BlockBookLayout
        navData={data.craft.categories}
        title={'The Block Book'}
        breadcrumb={pageContext.breadcrumb}>
        <WikiSliceZone slices={data.craft.entry.wikiSlices} />
        <Heading variant="heading3" my={[10]}>
          Categories
        </Heading>
        <Box
          sx={{
            display: 'grid',
            gridGap: 4,
            gridTemplateColumns: 'repeat(auto-fit, minmax(128px, 1fr))'
          }}>
          {data.craft.categories.map((category) => (
            <Link to={`/block-book/${category.slug}`} key={category.slug}>
              <Box
                key={category.title}
                sx={{
                  position: 'relative',
                  boxShadow: '0 0 0 2px #191a1b',
                  padding: 0,
                  zIndex: 1,
                  height: '100%'
                }}>
                <Flex
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  sx={{
                    height: '100%',
                    cursor: 'pointer',
                    boxShadow: ' 0 0 0 2px #333333',
                    background: 'white',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
                    '&:hover': {
                      boxShadow: ' 0 0 0 2px #333333',
                      transform: 'translate(-0.35em, -0.35em)'
                    }
                  }}
                  pt={2}
                  px={1}>
                  <Image
                    width={64}
                    height={64}
                    src={
                      category.pageImage && category.pageImage[0] !== undefined
                        ? category.pageImage[0].url
                        : null
                    }
                  />
                  <Heading
                    mt={2}
                    variant="heading6"
                    fontSize="16px"
                    fontWeight="bold"
                    as="h6"
                    color="text"
                    fontFamily="heading"
                    textAlign="center"
                    lineHeight={1.2}>
                    {category.title}
                  </Heading>
                </Flex>
              </Box>
            </Link>
          ))}
        </Box>
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
        slug
        ... on Craft_blocks_Category {
          pageImage {
            url
          }
          pageDescription
        }
      }
    }
  }
`;

export default BlockBookPage;
