import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Flex, Text, Box } from 'rebass';
import { NextSeo } from 'next-seo';
import _groupBy from 'lodash/groupBy';
import _each from 'lodash/each';
import _sortBy from 'lodash/sortBy';
import _indexOf from 'lodash/indexOf';
import Loader from '../../components/atoms/loader/loader';
import Layout from '../../components/templates/layout/layout';
import WikiPage from '../../components/templates/wikiPage/wikiPage';
import regionQuery from '../../queries/region.graphql';
import RegionEntryCard from '../../components/molecules/regionEntryCard/regionEntryCard';
import { regionLabel } from '../../utility/helpers';
import CardGroup from '../../components/molecules/cardGroup/cardGroup';

const Region = ({ region }) => {
  const { loading, error, data } = useQuery(regionQuery, {
    variables: {
      region,
    },
  });

  if (error) {
    console.log(error);
  }

  if (loading) return <Loader />;

  const pageData = data.entries[0].children;

  const order = [
    'greatCastle',
    'minorCastle',
    'ruin',
    'city',
    'landmark',
    'village',
    'town',
    'holdfast',
    'keep',
    'miscellaneous',
  ];

  const arrangedGroups = _sortBy(pageData, function(grouped) {
    return _indexOf(order, grouped.locationType);
  });

  const grouped = _groupBy(arrangedGroups, item => item.locationType);

  return (
    <Layout>
      <NextSeo title={`${regionLabel(region)} | WesterosCraft Wiki`} />
      <WikiPage>
        <Box width={1} flexWrap="wrap" flexDirection="column">
          <Text variant="heading2" ml={3} pb={6}>
            {regionLabel(region)}
          </Text>
          <Box width={1} flexWrap="wrap">
            {Object.keys(grouped).map(group => {
              return (
                <CardGroup label={group} key={group}>
                  {grouped[group].map((entry, i) => entry.title && <RegionEntryCard data={entry} key={i} />)}
                </CardGroup>
              );
            })}
          </Box>
        </Box>
      </WikiPage>
    </Layout>
  );
};

Region.getInitialProps = async ({ query }) => {
  return query;
};

export default Region;
