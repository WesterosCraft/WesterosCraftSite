import React from 'react';
import { Heading, Box, Image, Flex } from 'rebass';
import { BlockBookLayout } from '../../components/templates/blockBookLayout';
import SEO from '../../components/organisms/seo/seo';
import { WikiSliceZone } from '../../components/slices/wikiSliceZone';
import Link from 'next/link';
import { initializeApollo } from '../../../lib/apolloClient';
import { useQuery } from '@apollo/client';
import { BLOCK_BOOK_QUERY } from '../../queries/blockBookQuery.gql';
import { useRouter } from 'next/router';
import { computeBreadcrumbs } from '../../utility/helpers';

const BlockBookPage = () => {
  const { data, loading } = useQuery(BLOCK_BOOK_QUERY);
  const router = useRouter();

  if (loading) {
    return null;
  }

  return (
    <>
      <SEO
        title="The Block Book"
        description={data.entry.pageDescription || ''}
        image={data.entry.pageEntry && data.entry.pageImage[0].url}
      />
      <BlockBookLayout
        navData={data.categories}
        title={'The Block Book'}
        breadcrumb={computeBreadcrumbs(router.asPath)}>
        <WikiSliceZone slices={data.entry.wikiSlices} />
        <Heading variant="heading3" my={[10]}>
          Categories
        </Heading>
        <Box
          sx={{
            display: 'grid',
            gridGap: 4,
            gridTemplateColumns: 'repeat(auto-fit, minmax(128px, 1fr))'
          }}>
          {data &&
            data.entry &&
            data.categories.map((category) => (
              <Link href={`/block-book/${category.slug}`} key={category.slug} passHref>
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

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: BLOCK_BOOK_QUERY
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract()
    },
    revalidate: 1
  };
}

export default BlockBookPage;
