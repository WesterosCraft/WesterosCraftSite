import React, { useMemo } from 'react';

import { Heading, Box, Flex, Text, Image } from 'rebass';
import { Input } from '@rebass/forms';
import Iframe from 'react-iframe';
import { Table } from '../components/organisms/table';
import { Button } from '../components/atoms/button';
import SEO from '../components/organisms/seo/seo';
import { useRouter } from 'next/router';
import { getClient, usePreviewSubscription } from '../utils/sanity';
import Error from 'next/error';
import { QuoteBlock } from '../components/atoms/quoteBlock';

const query = `*[_type == "rookery"]`;

const RookeryPage = ({ preview, rookeryData }) => {
  const { data } = usePreviewSubscription(query, {
    initialData: rookeryData,
    enabled: preview
  });
  const router = useRouter();

  const { heading, editions, subheading, title, pageDescription, pageEntry, pageImage } = data[0];

  const columns = useMemo(
    () => [
      {
        accessor: 'title',
        Header: 'Rookery Title',
        filterable: false
      },
      {
        accessor: 'rookeryUrl',
        Header: 'Rookery Link',
        filterable: false,
        Cell: ({ row }) => (
          <a href={row.original.link} target="_blank" rel="noopener noreferrer">
            {row.original.link}
          </a>
        )
      }
    ],
    []
  );
  const rookeryTableData = useMemo(() => editions, [editions]);

  if (!router.isFallback && !rookeryData) {
    return <Error statusCode={404} />;
  }

  return (
    <>
      <SEO title={title} description={pageDescription} image={pageEntry && pageImage.url} />
      <Flex
        justifyContent="center"
        flexDirection={['column', null, 'row']}
        width={[1, null, 800]}
        mx="auto"
        px={5}>
        <Flex flexDirection="column" width={[1, null, 1 / 2]} pr={[3, null, 5]}>
          <Heading variant="heading2" textAlign="center" mt={[12]}>
            {heading}
          </Heading>
          <Text textAlign="left" lineHeight={1.5} maxWidth={786} mx="auto" mt={4}>
            The Rookery is a community created magazine that details all the latest happenings in
            the realm of WesterosCraft. Sign up to keep up to date with the server!
            <br />
            <br />
            Sent once a quarter.
            {/* {subheading} */}
          </Text>
          <Image mt={4} src="/crow-icon.png" width="40px" alt="crow" mx="auto" />
        </Flex>
        <Flex flexDirection="column" my="auto" width={[1, null, 1 / 2]}>
          <Input mb={7} placeholder="Email Address" />
          <Flex alignItems="center" justifyContent="center">
            <Button variant="red">Subscribe</Button>
          </Flex>
        </Flex>
      </Flex>

      <Flex flexDirection="column" mb={17}>
        <Box width={1} maxWidth={1256} height={[495, null, 792]} my={10} mx="auto">
          <Iframe
            url={editions[0].link}
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
      <Flex
        width={1}
        px={5}
        flexDirection="column"
        maxWidth={1536}
        justifyContent="center"
        mx="auto">
        <Text variant="heading4" as="h4" mb={5}>
          Previous Rookery Editions
        </Text>
        <Table columns={columns} data={rookeryTableData} />
        <QuoteBlock
          content="Men weren’t really the enemy. They were fellow victims suffering from an outmoded masculine mystique that made them feel unnecessarily inadequate when there were no bears to kill.
"
          author="Betty Friedan
"
        />
      </Flex>
    </>
  );
};

export async function getStaticProps({ preview = false }) {
  const rookeryData = await getClient(preview).fetch(query);

  return {
    props: {
      preview,
      rookeryData
    },
    revalidate: 1
  };
}

export default RookeryPage;
