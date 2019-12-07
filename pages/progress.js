import React from 'react';
import { Box, Flex, Button, Text } from 'rebass';
import { useQuery } from '@apollo/react-hooks';
import tableQuery from '../queries/table.graphql';
import Table from '../components/organisms/table/table';
import Layout from '../components/templates/layout/layout';
import Loader from '../components/atoms/loader/loader';

const ProgressPage = () => {
  const { loading, error, data } = useQuery(tableQuery);

  if (error) return <h1> error! </h1>;
  if (loading) return <Loader />;

  return (
    <Layout title="WesterosCraft | Project Progress">
      <Flex flexDirection="row">
        <Box width={1}>
          <Table
            columns={['Destination', 'Region', 'Status', 'Type', 'Date Started', 'Date Completed']}
            data={data.entries}
          />{' '}
        </Box>{' '}
      </Flex>{' '}
    </Layout>
  );
};

export default ProgressPage;
