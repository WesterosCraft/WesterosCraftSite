import React, { useMemo } from 'react';
import { Box, Flex, Text } from 'rebass';
import { useQuery } from '@apollo/react-hooks';
import progressQuery from '../queries/progress.graphql';
import destinationQuery from '../queries/destinations.graphql';
import Table from '../components/organisms/table/table';
import Layout from '../components/templates/layout/layout';
import Loader from '../components/atoms/loader/loader';
import StatsBar from '../components/organisms/statsBar/statsBar';

const ProgressPage = () => {
  const { loading, error, data } = useQuery(destinationQuery, {
    variables: {
      section: 'wiki',
    },
  });

  const { loading: loadingP, error: errorP, data: dataP } = useQuery(progressQuery, {
    variables: {
      section: 'progressPage',
    },
  });

  const columns = useMemo(
    () => [
      {
        Header: 'Destination',
        accessor: 'title',
      },
      {
        Header: 'Region',
        accessor: 'region',
      },
      {
        Header: 'Status',
        accessor: 'locationStatus',
      },
      {
        Header: 'Type',
        accessor: 'locationType',
      },
      {
        Header: 'House',
        accessor: 'house',
      },
      {
        Header: 'Warp',
        accessor: 'warp',
      },
    ],
    []
  );

  const memoData = useMemo(() => data && data.entries, []);

  if (error || errorP) {
    console.log(error);
    console.log(errorP);
    return <h1> error! </h1>;
  }
  if (loading || loadingP) return <Loader />;

  const pageData = dataP && dataP.entries[0];

  return (
    <Layout title="WesterosCraft | Project Progress">
      <Flex flexDirection="row">
        <Box width={1} mt={140} px={5}>
          <Box mb={140} textAlign="center">
            <Text variant="heading2" as="h2">
              {pageData.heading}
            </Text>
            <Text variant="heading4" as="h4" mt={6}>
              {pageData.subheading}
            </Text>
          </Box>
          <StatsBar data={data.entries} />
          <Table columns={columns} data={data.entries} />
        </Box>
      </Flex>
    </Layout>
  );
};

export default ProgressPage;
