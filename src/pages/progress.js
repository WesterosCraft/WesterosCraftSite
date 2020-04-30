import React, { useMemo } from 'react';

import { graphql } from 'gatsby';
import { Heading, Box, Flex, Text } from 'rebass';
import { ProgressTable } from '../components/organisms/progressTable/progressTable';
import _merge from 'lodash/merge';
// import { PieChart } from '../components/organisms/pieChart/pieChart';
// import { BarChart } from '../components/organisms/barChart';
import styled from '@emotion/styled';
import SEO from '../components/organisms/seo/seo';

const Styles = styled.div`
  padding: 1rem;
  display: block;
  overflow: auto;
  .table {
    border-spacing: 0;
    border: 2px solid #333333;
    .thead {
      overflow-y: auto;
      overflow-x: hidden;
    }
    .tbody {
    }
    .tr {
      :last-child {
        .td {
          border-bottom: 0;
        }
      }
      :nth-of-type(even) {
        background-color: #fafafc;
      }
    }
    .th,
    .td {
      margin: 0;
      padding: 0.5rem;
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
        touch-action: none;
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

  const columns = useMemo(
    () => [
      {
        Header: () => <span style={{ margin: '0 auto' }}>Level</span>,

        accessor: 'destinationLevel',
        filterable: false,
        width: 64,
      },
      {
        Header: 'Destination',
        accessor: 'title',
        filterable: false,
      },
      {
        Header: 'Region',
        accessor: 'region',
        filterable: false,
      },
      {
        Header: 'Status',
        accessor: 'destinationStatus',
        filterable: true,
      },
      {
        Header: 'Type',
        accessor: 'destinationType',
        filterable: false,
      },
      {
        Header: 'House',
        accessor: 'house',
        filterable: false,
      },
      {
        Header: 'Warp',
        accessor: 'warp',
        filterable: false,
      },
    ],
    [],
  );

  return (
    <>
      <SEO
        title={data.craft.entry.pageTitle || data.craft.entry.title}
        description={data.craft.entry.pageDescription}
        image={data.craft.entry.pageEntry && data.craft.entry.pageImage[0].url}
      />
      <Heading variant="heading2" textAlign="center" mt={[12]}>
        progress page
      </Heading>
      {/* <Flex width={1} maxWidth={1256} flexDirection={['column', null, 'row']} mx="auto">
        <Box width={['100%', null, '40%']} sx={{ height: 400 }}>
          <PieChart data={pieData} />
        </Box>
        <Box width={['100%', null, '60%']} sx={{ height: 400 }}>
          <BarChart />
        </Box>
      </Flex> */}
      <Flex>
        <Box bg="white" sx={{ border: '1px solid black' }}>
          <Text>{data.craft.entries.length}</Text>
          <Text>total projects</Text>
        </Box>
        <Box bg="white" sx={{ border: '1px solid black' }}>
          <Text>{totalComplete}</Text>
          <Text>completed</Text>
        </Box>
        <Box bg="white" sx={{ border: '1px solid black' }}>
          <Text>{totalInProgress}</Text>
          <Text>in progress</Text>
        </Box>
        <Box bg="white" sx={{ border: '1px solid black' }}>
          <Text>{totalNotStarted}</Text>
          <Text>not started</Text>
        </Box>
      </Flex>
      <Styles>
        <ProgressTable columns={columns} data={memoData} />
      </Styles>
    </>
  );
};

export const pageQuery = graphql`
  query progressQuery {
    craft {
      entry(section: "progress") {
        title
        ... on Craft_progress_progressPage_Entry {
          pageTitle
          pageDescription
          pageImage {
            url
          }
        }
      }
      entries(site: "westeroscraft", section: "wiki", type: "wikiDestination", orderBy: "title") {
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
              destinationLevel
            }
          }
        }
      }
    }
  }
`;

export default ProgressPage;
