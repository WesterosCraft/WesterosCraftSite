import React from 'react';
import { Text, Flex, Box } from 'rebass';
import { Input } from '@rebass/forms';
import { useQuery } from '@apollo/react-hooks';
import { NextSeo } from 'next-seo';
import Layout from '../components/templates/layout/layout';
import wikiHomeQuery from '../queries/wikiHome.graphql';
import Loader from '../components/atoms/loader/loader';
import WikiCard from '../components/molecules/wikiCard/wikiCard';
import FeaturedEntryCard from '../components/molecules/featuredEntryCard/featuredEntryCard';
import SliceZone from '../components/slices/sliceZone';
import { withApollo } from '../lib/apollo';

const WikiPage = () => {
  const { loading, error, data } = useQuery(wikiHomeQuery, {
    variables: {
      section: 'wikiPage',
    },
  });

  if (error) {
    console.log(error);
  }
  if (loading) return <Loader />;

  const page = data.entries[0];

  return (
    <Layout>
      <NextSeo title="WesterosCraft Wiki" />
      <Flex flexDirection="column" px={[4, 5]}>
        <Flex mt={140} flexDirection="column" justifyContent="center" width={1} textAlign="center">
          <Text variant="heading2" as="h1">
            {page.heading}
          </Text>
          <Text variant="heading4" as="h4" mt={6}>
            {page.subheading}
          </Text>
        </Flex>
        <Box maxWidth={608} height={42} mx="auto" width={1} mt={12}>
          <Input placeholder="Search Wiki..." />
        </Box>
        <Flex flexDirection="row" justifyContent="center" flexWrap="wrap" my={120}>
          {page.wikiCard.map(card => (
            <WikiCard data={card} key={card.heading} />
          ))}
        </Flex>
        <Flex flexDirection="column" justifyContent="center" maxWidth={1128} mx="auto" width={1}>
          <Text variant="heading3" textAlign="left" width={1} mx={3}>
            Featured Wiki Entries
          </Text>
          <Flex flexDirection="row" flexWrap="wrap" justifyContent="space-between">
            {page.featuredWikiEntry[0].featuredWikiEntry.map((entry, i) => (
              <FeaturedEntryCard data={entry} key={i} />
            ))}
          </Flex>
        </Flex>
        <SliceZone slices={page.slices} />
      </Flex>
    </Layout>
  );
};

export default withApollo(WikiPage);
