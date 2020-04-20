import React, { useMemo } from 'react';

import { graphql } from 'gatsby';
import { Heading, Box, Flex } from 'rebass';
import { ProgressTable } from '../components/organisms/progressTable/progressTable';
import _merge from 'lodash/merge';
import { PieChart } from '../components/organisms/pieChart/pieChart';
import { BarChart } from '../components/organisms/barChart';

const ProgressPage = ({ data }) => {
  const flatten = (data) =>
    data.reduce((arr, elem) => {
      if (elem.projectDetails && elem.projectDetails.length) {
        arr.push(_merge(elem, elem.projectDetails[0]));
        delete elem.projectDetails;
      }
      return arr;
    }, []);

  const memoData = useMemo(() => data && flatten(data.craft.entries), [data]);

  console.log(memoData);

  const totalComplete = memoData.filter((item) => item.destinationStatus === 'completed').length;
  const totalInProgress = memoData.filter(
    (item) => item.destinationStatus === 'inProgress' || item.destinationStatus === 'redoInProgress',
  ).length;
  const totalNotStarted = memoData.filter(
    (item) => item.destinationStatus === 'abandoned' || item.destinationStatus === 'notStarted',
  ).length;

  const pieData = useMemo(
    () => [
      {
        id: 'Complete',
        label: 'Complete',
        value: totalComplete,
        color: 'hsl(358,68%,40%)',
      },
      {
        id: 'In Progress',
        label: 'In Progress',
        value: totalInProgress,
        color: 'hsl(272, 70%, 50%)',
      },
      {
        id: 'Not Started',
        label: 'Not Started',
        value: totalNotStarted,
        color: 'hsl(66, 70%, 50%)',
      },
    ],
    [totalComplete, totalInProgress, totalNotStarted],
  );

  return (
    <>
      <Heading variant="heading2" textAlign="center" mt={[12]}>
        progress page
      </Heading>
      <Flex width={1} maxWidth={1256} flexDirection={['column', null, 'row']} mx="auto">
        <Box width="40%" sx={{ height: 400 }}>
          <PieChart data={pieData} />
        </Box>
        <Box width="60%" sx={{ height: 400 }}>
          <BarChart />
        </Box>
      </Flex>
      <ProgressTable data={memoData} />
    </>
  );
};

export const pageQuery = graphql`
  query progressQuery {
    craft {
      entries(site: "westeroscraft", section: "wiki", type: "wikiDestination") {
        title
        slug
        ... on Craft_wiki_wikiDestination_Entry {
          projectDetails {
            ... on Craft_projectDetails_details_BlockType {
              house
              region
              destinationStatus
              destinationType
              warp
              redoAvailable
              serverBuild
            }
          }
        }
      }
    }
  }
`;

export default ProgressPage;
