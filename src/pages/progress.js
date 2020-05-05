import React, { useMemo } from 'react';

import { graphql } from 'gatsby';
import { Heading, Flex, Text, Box } from 'rebass';
import { ProgressTable } from '../components/organisms/progressTable/progressTable';
import _merge from 'lodash/merge';
import SEO from '../components/organisms/seo/seo';
import { Card } from '../components/atoms/card/card';

const ProgressPage = ({ data }) => {
  const flatten = (data) =>
    data.reduce((arr, elem) => {
      if (elem.projectDetails && elem.projectDetails.length) {
        arr.push(_merge(elem, elem.projectDetails[0]));
      }
      return arr;
    }, []);

  const memoData = useMemo(() => flatten(data.craft.entries), [data.craft.entries]);

  const totalComplete = memoData.filter((item) => item.destinationStatus === 'completed').length;
  const totalInProgress = memoData.filter(
    (item) => item.destinationStatus === 'inProgress' || item.destinationStatus === 'redoInProgress',
  ).length;
  const totalNotStarted = memoData.filter(
    (item) => item.destinationStatus === 'abandoned' || item.destinationStatus === 'notStarted',
  ).length;

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
      <Flex px={5} flexDirection="column">
        <Heading variant="heading2" textAlign="center" mt={[12]} px={5}>
          {data.craft.entry.heading}
        </Heading>
        <Heading variant="heading4" textAlign="center" maxWidth={786} mx="auto" px={5} mt={4}>
          {data.craft.entry.subheading}
        </Heading>
        <Flex flexDirection="row" flexWrap="wrap" mx="auto" width={1} justifyContent="center" my={7}>
          <Card color="#365B41">
            <Text variant="heading3">{data.craft.entries.length}</Text>
            <Text>total projects</Text>
          </Card>
          <Card color="#4B9190">
            <Text variant="heading3">{totalComplete}</Text>
            <Text>completed</Text>
          </Card>
          <Card color="#DAAC58">
            <Text variant="heading3">{totalInProgress}</Text>
            <Text>in progress</Text>
          </Card>
          <Card color="#B32227">
            <Text variant="heading3">{totalNotStarted}</Text>
            <Text>not started</Text>
          </Card>
        </Flex>
        <ProgressTable columns={columns} data={memoData} />
      </Flex>
      <Box mb={[72, 140]} />
    </>
  );
};

export const pageQuery = graphql`
  query progressQuery {
    craft {
      entry(section: "progress") {
        title
        ... on Craft_progress_progressPage_Entry {
          heading
          subheading
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
