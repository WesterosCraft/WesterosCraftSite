import React from 'react';
import SEO from '../../components/organisms/seo/seo';
import Popup from 'reactjs-popup';
import { Heading, Box, Flex, Image, Text } from 'rebass';
import { BlockBookLayout } from '../../components/templates/blockBookLayout';
import { RiCloseCircleLine } from 'react-icons/ri';
import { Tag } from '../../components/atoms/tag';
import Link from 'next/link';
import { initializeApollo } from '../lib/apolloClient';
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { computeBreadcrumbs } from '../../utils/helpers';
import { CATEGORY_QUERY, ALL_CATEGORY_PAGES_QUERY } from '../../queries/blockBookQuery.gql';

const CategoryPage = ({ slug }) => {
  const { data, loading } = useQuery(CATEGORY_QUERY, { variables: { slug: slug } });
  const router = useRouter();

  if (loading) {
    return null;
  }

  return (
    <>
      {data && (
        <SEO
          title={data.pageTitle || data.title}
          description={data.pageDescription}
          image={data.pageEntry && data.pageImage[0].url}
        />
      )}
      <BlockBookLayout
        title={(data && data.title) || 'Category'}
        breadcrumb={computeBreadcrumbs(router.asPath)}>
        <Box
          sx={{
            display: 'grid',
            gridGap: 4,
            gridTemplateColumns: 'repeat(auto-fit, minmax(148px, 1fr))'
          }}>
          {data.craft.entries.map((entry, i) => (
            <Popup
              key={i}
              className="block-modal"
              trigger={
                <Box
                  className="block"
                  key={entry.title}
                  sx={{
                    position: 'relative',
                    boxShadow: '0 0 0 2px #191a1b',
                    padding: 0,
                    zIndex: 1,
                    height: '100%'
                  }}>
                  <Flex
                    flexDirection="column"
                    justifyContent="flex-start"
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
                    py={3}
                    px={2}>
                    <Image
                      width={64}
                      height={64}
                      src={
                        entry.textures && entry.textures[0] !== undefined
                          ? entry.textures[0].url
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
                      {entry.title}
                    </Heading>
                  </Flex>
                </Box>
              }
              modal
              closeOnDocumentClick>
              {(close) => (
                <Flex
                  sx={{
                    position: 'relative',
                    border: '2px solid black',
                    overflowWrap: 'break-word'
                  }}
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  p={[5, null, 8]}
                  className="block-content">
                  <RiCloseCircleLine
                    onClick={close}
                    size="24px"
                    color="#333333"
                    style={{ position: 'absolute', top: '8px', right: '8px', cursor: 'pointer' }}
                  />
                  <Heading variant="heading3" mb={6}>
                    {entry.title}
                  </Heading>
                  <Flex
                    flexDirection="row"
                    justifyContent="center"
                    className="texture-container"
                    flexWrap="wrap"
                    width={1}>
                    {entry.textures.length &&
                      entry.textures.map((img, i) => (
                        <Flex
                          flexDirection="column"
                          className="texture"
                          alignItems="center"
                          key={i}>
                          <Image height={64} width={64} src={img.url} m={3} alt={img.title} />
                        </Flex>
                      ))}
                  </Flex>
                  <Flex
                    width={1}
                    flexDirection={['column', null, null, 'row']}
                    alignItems="center"
                    justifyContent="center"
                    my={8}
                    mx="auto"
                    maxWidth={768}>
                    <Flex
                      as="ol"
                      flexDirection="column"
                      width={[1, null, null, '50%']}
                      sx={{ paddingInlineStart: 0 }}>
                      <Flex
                        as="li"
                        justifyContent={['space-between', null, null, 'flex-start']}
                        py={2}
                        width={1}>
                        <Text as="h4" fontWeight={600} width={1 / 2}>
                          Block ID
                        </Text>
                        <Text as="p" width={1 / 2}>
                          {entry.blockId || ''}
                        </Text>
                      </Flex>
                      <Flex
                        as="li"
                        justifyContent={['space-between', null, null, 'flex-start']}
                        py={2}
                        width={1}>
                        <Text as="h4" fontWeight={600} width={1 / 2}>
                          Type
                        </Text>
                        <Text as="p" width={1 / 2}>
                          {entry.blockType || ''}
                        </Text>
                      </Flex>
                      <Flex
                        as="li"
                        justifyContent={['space-between', null, null, 'flex-start']}
                        py={2}
                        width={1}>
                        <Text as="h4" fontWeight={600} width={1 / 2}>
                          Meta
                        </Text>
                        <Text as="p" width={1 / 2}>
                          {entry.meta || ''}
                        </Text>
                      </Flex>
                      <Flex
                        as="li"
                        justifyContent={['space-between', null, null, 'flex-start']}
                        py={2}
                        width={1}>
                        <Text as="h4" fontWeight={600} width={1 / 2}>
                          Material
                        </Text>
                        <Text as="p" width={1 / 2}>
                          {entry.material || ''}
                        </Text>
                      </Flex>
                    </Flex>
                    <Flex
                      as="ol"
                      flexDirection="column"
                      width={[1, null, null, '50%']}
                      sx={{ paddingInlineStart: 0 }}>
                      <Flex
                        as="li"
                        justifyContent={['space-between', null, null, 'flex-start']}
                        py={2}
                        width={1}>
                        <Text as="h4" fontWeight={600} width={1 / 2}>
                          Namespaced ID
                        </Text>
                        <Text as="p" width={1 / 2}>
                          {entry.namespacedId || ''}
                        </Text>
                      </Flex>
                      <Flex
                        as="li"
                        justifyContent={['space-between', null, null, 'flex-start']}
                        py={2}
                        width={1}>
                        <Text as="h4" fontWeight={600} width={1 / 2}>
                          Parent Name
                        </Text>
                        <Text as="p" width={1 / 2}>
                          {entry.parentBlockName || ''}
                        </Text>
                      </Flex>
                      <Flex
                        as="li"
                        justifyContent={['space-between', null, null, 'flex-start']}
                        py={2}
                        width={1}>
                        <Text as="h4" fontWeight={600} width={1 / 2}>
                          Slug
                        </Text>
                        <Text as="p" width={1 / 2}>
                          {entry.slug || ''}
                        </Text>
                      </Flex>
                      <Flex
                        as="li"
                        justifyContent={['space-between', null, null, 'flex-start']}
                        py={2}
                        width={1}>
                        <Text as="h4" fontWeight={600} width={1 / 2}>
                          Sound
                        </Text>
                        <Text as="p" width={1 / 2}>
                          {entry.sound || ''}
                        </Text>
                      </Flex>
                    </Flex>
                  </Flex>
                  <Flex
                    className="tag-container"
                    flexDirection="row"
                    justifyContent="flex-end"
                    width={1}
                    flexWrap="wrap">
                    {entry.blockCategory.length &&
                      entry.blockCategory.map((cat, i) => (
                        <Link key={i} href={`/block-book/${cat.slug}`}>
                          <Tag key={i}>{cat.title}</Tag>
                        </Link>
                      ))}
                  </Flex>
                </Flex>
              )}
            </Popup>
          ))}
        </Box>
      </BlockBookLayout>
    </>
  );
};

export async function getStaticPaths() {
  const apolloClient = initializeApollo();

  const categories = await apolloClient.query({
    query: ALL_CATEGORY_PAGES_QUERY
  });

  const paths = categories.data.entries.map((page) => ({
    params: {
      category: page.id
    }
  }));

  return { paths, fallback: false };
}

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: CATEGORY_QUERY
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract()
    },
    revalidate: 1
  };
}

export default CategoryPage;
