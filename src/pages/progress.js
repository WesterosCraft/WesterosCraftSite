import React, { useMemo } from 'react';

import { graphql } from 'gatsby';
import { Heading, Box, Flex } from 'rebass';
import { ProgressTable } from '../components/organisms/progressTable/progressTable';
import _merge from 'lodash/merge';
import { PieChart } from '../components/organisms/pieChart/pieChart';
import { BarChart } from '../components/organisms/barChart';
import styled from '@emotion/styled';

const Styles = styled.div`
  padding: 1rem;
  ${'' /* These styles are suggested for the table fill all available space in its containing element */}
  display: block;
  ${'' /* These styles are required for a horizontaly scrollable table overflow */}
  overflow: auto;
  .table {
    border-spacing: 0;
    border: 1px solid black;
    .thead {
      ${'' /* These styles are required for a scrollable body to align with the header properly */}
      overflow-y: auto;
      overflow-x: hidden;
    }
    .tbody {
      ${'' /* These styles are required for a scrollable table body */}
      overflow-y: scroll;
      overflow-x: hidden;
      height: 250px;
    }
    .tr {
      :last-child {
        .td {
          border-bottom: 0;
        }
      }
      border-bottom: 1px solid black;
    }
    .th,
    .td {
      margin: 0;
      padding: 0.5rem;
      border-right: 1px solid black;
      ${'' /* In this example we use an absolutely position resizer,
       so this is required. */}
      position: relative;
      :last-child {
        border-right: 0;
      }
      .resizer {
        right: 0;
        background: blue;
        width: 10px;
        height: 100%;
        position: absolute;
        top: 0;
        z-index: 1;
        ${'' /* prevents from scrolling while dragging on touch devices */}
        touch-action :none;
        &.isResizing {
          background: red;
        }
      }
    }
  }
`;

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
        <Box width={['100%', null, '40%']} sx={{ height: 400 }}>
          <PieChart data={pieData} />
        </Box>
        <Box width={['100%', null, '60%']} sx={{ height: 400 }}>
          <BarChart />
        </Box>
      </Flex>
      <Styles>
        <ProgressTable data={memoData} />
      </Styles>
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
