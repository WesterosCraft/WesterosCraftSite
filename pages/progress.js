import React, { useMemo } from 'react';
import { Box, Flex, Button, Text } from 'rebass';
import { useQuery } from '@apollo/react-hooks';
import tableQuery from '../queries/table.graphql';
import Table from '../components/organisms/table/table';
import Layout from '../components/templates/layout/layout';
import Loader from '../components/atoms/loader/loader';
import StatsBar from '../components/organisms/statsBar/statsBar';

const ProgressPage = () => {
  const { loading, error, data } = useQuery(tableQuery);

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
        Header: 'Date Started',
        accessor: 'dateStarted',
      },
      {
        Header: 'Date Completed',
        accessor: 'dateCompleted',
      },
    ],
    []
  );

  const memoData = useMemo(() => data && data.entries, []);

  if (error) return <h1> error! </h1>;
  if (loading) return <Loader />;

  return (
    <Layout title="WesterosCraft | Project Progress">
      <Flex flexDirection="row">
        <Box width={1} mt={140}>
          {' '}
          <StatsBar data={data.entries} /> <Table columns={columns} data={data.entries} />{' '}
        </Box>{' '}
      </Flex>{' '}
    </Layout>
  );
};

export default ProgressPage;
