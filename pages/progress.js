import React from 'react';
// import { Text, Box, Flex } from 'rebass';
import { useQuery } from '@apollo/react-hooks';
import locationsQuery from '../queries/locations.graphql';

const ProgressPage = () => {
  const { loading, error, data } = useQuery(locationsQuery);
  const page = data.allLocation_wiki_entrys.edges;

  if (error) return <h1> error! </h1>;
  if (loading) return <h1> Loading... </h1>;

  console.log('page', data);

  return (
    <div>
      <h1>progress page</h1>
    </div>
  );
};

export default ProgressPage;
