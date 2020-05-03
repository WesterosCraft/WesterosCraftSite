import React, { useMemo } from 'react';

import { graphql } from 'gatsby';
import { Heading, Box, Flex, Text, Image } from 'rebass';
import Iframe from 'react-iframe';
import { Table } from '../components/organisms/table';
import SEO from '../components/organisms/seo/seo';

const RookeryPage = ({ data }) => {
  const columns = useMemo(
    () => [
      {
        accessor: 'rookeryTitle',
        Header: 'Rookery Title',
        filterable: false,
      },
      {
        accessor: 'rookeryUrl',
        Header: 'Rookery Link',
        filterable: false,
        Cell: ({ row }) => (
          <a href={row.original.rookeryUrl} target="_blank" rel="noopener noreferrer">
            {row.original.rookeryUrl}
          </a>
        ),
      },
    ],
    [],
  );

  const rookeryData = useMemo(() => data.craft.entry.rookeryList, [data.craft.entry.rookeryList]);

  return (
    <>
      <SEO
        title={data.craft.entry.pageTitle || data.craft.entry.title}
        description={data.craft.entry.pageDescription}
        image={data.craft.entry.pageEntry && data.craft.entry.pageImage[0].url}
      />
      <Flex width={1} justifyContent="center" flexDirection="column">
        <Heading variant="heading2" textAlign="center" mt={[12]} px={5}>
          {data.craft.entry.heading}
        </Heading>
        <Heading variant="heading4" textAlign="center" maxWidth={786} mx="auto" px={5} mt={4}>
          {data.craft.entry.subheading}
        </Heading>
        <Image
          mt={4}
          src="https://westeroscraft.com/web/assets/images/crow-icon.png"
          width="40px"
          alt="crow"
          mx="auto"
        />
      </Flex>

      <Flex flexDirection="column" mb={17}>
        <Box width={1} maxWidth={1256} height={[495, null, 792]} my={10} mx="auto">
          <Iframe
            url={data.craft.entry.rookeryList[0].rookeryUrl}
            width="100%"
            maxWidth="100%"
            height="100%"
            display="initial"
            position="relative"
            allowFullScreen
            title="The Rookery"
          />
        </Box>
      </Flex>
      <Flex width={1} px={5} flexDirection="column" maxWidth={1120} justifyContent="center" mx="auto">
        <Text variant="heading4" as="h4" mb={5}>
          Previous Rookery Editions
        </Text>
        <Table columns={columns} data={rookeryData} />
      </Flex>
    </>
  );
};
export const pageQuery = graphql`
  query rookeryQuery {
    craft {
      entry(site: "westeroscraft", section: "rookery") {
        title
        ... on Craft_rookery_rookery_Entry {
          heading
          subheading
          pageTitle
          pageDescription
          pageImage {
            url
          }
          rookeryList {
            ... on Craft_rookeryList_rookery_BlockType {
              rookeryUrl
              rookeryTitle
            }
          }
        }
      }
    }
  }
`;

export default RookeryPage;
