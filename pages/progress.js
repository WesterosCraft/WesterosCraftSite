import React from 'react';
import { Box, Flex, Button } from 'rebass';
import { useQuery } from '@apollo/react-hooks';
import locationsQuery from '../queries/locations.graphql';
import moreLocations from '../queries/moreLocations.graphql';
import LocationTable from '../components/organisms/locationTable/locationTable';

const ProgressPage = () => {
  const {
    loading,
    error,
    data: { allLocation_wiki_entrys },
    fetchMore,
  } = useQuery(locationsQuery);

  if (error) return <h1> error! </h1>;
  if (loading) return <h1> Loading... </h1>;

  return (
    <Flex flexDirection="row">
      <Box>
        <LocationTable pages={allLocation_wiki_entrys.edges || []} />
        <Button
          onClick={() =>
            fetchMore({
              query: moreLocations,
              variables: { cursor: allLocation_wiki_entrys.pageInfo.endCursor },
              updateQuery: (previousResult, { fetchMoreResult }) => {
                const newEdges = fetchMoreResult.allLocation_wiki_entrys.edges;
                const { pageInfo } = fetchMoreResult.allLocation_wiki_entrys;

                return newEdges.length
                  ? {
                      allLocation_wiki_entrys: {
                        __typename: previousResult.allLocation_wiki_entrys.__typename,
                        edges: [...previousResult.allLocation_wiki_entrys.edges, ...newEdges],
                        pageInfo,
                      },
                    }
                  : previousResult;
              },
            })
          }
        >
          test
        </Button>
      </Box>
    </Flex>
  );
};

export default ProgressPage;
