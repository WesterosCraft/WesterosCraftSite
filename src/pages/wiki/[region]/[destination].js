import React, { useState } from 'react';
import { WikiLayout } from '../../../components/templates/wikiLayout';
import { Redactor } from '../../../components/atoms/redactor';
import { Flex, Image, Text } from 'rebass';
import _lowerCase from 'lodash/lowerCase';
import { camelCaseFormatter, formatDate, computeBreadcrumbs } from '../../../utility/helpers';
import SEO from '../../../components/organisms/seo/seo';
import Carousel, { Modal, ModalGateway } from 'react-images';
import { FiExternalLink } from 'react-icons/fi';
import { useRouter } from 'next/router';
import { initializeApollo } from '../../../../lib/apolloClient';
import { useQuery } from '@apollo/client';
import { DESTINATION_QUERY } from '../../../queries/destinationQuery.gql';
import { ALL_REGIONS_QUERY } from '../../../queries/regionQuery.gql';
import flatten from 'lodash/flatten';
import { Spinner } from '../../../components/atoms/spinner';

const View = ({ data, ...props }) => (
  <>
    <Image src={data.url} alt={data.title} onClick={props.carouselProps.onClick} {...props} />
  </>
);

const DestinationPage = ({ slug }) => {
  const router = useRouter();
  const { data, loading } = useQuery(DESTINATION_QUERY, { variables: { slug: slug } });

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {data && (
        <SEO
          title={data.entry.title}
          description={data.pageDescription}
          image={data.pageEntry && data.pageImage[0].url}
        />
      )}
      <WikiLayout
        title={(data && data.entry.title) || 'WesterosCraft Wiki'}
        breadcrumb={computeBreadcrumbs(router.asPath)}>
        {loading || !data ? (
          <Spinner />
        ) : (
          <>
            {data && data.entry.images && data.entry.images.length > 0 && (
              <Flex flexDirection={['column', null, 'row']} justifyContent="center" mx="auto">
                <Carousel
                  onClick={() => setModalOpen(!modalOpen)}
                  views={data.entry.images}
                  components={{ View }}
                />
              </Flex>
            )}
            <ModalGateway>
              {modalOpen ? (
                <Modal
                  onClose={() => {
                    setModalOpen(!modalOpen);
                  }}>
                  <Carousel views={data.entry.images} components={{ View }} />
                </Modal>
              ) : null}
            </ModalGateway>
            <Text
              fontFamily="heading"
              variant="heading3"
              as="h3"
              mb={5}
              mt={data && data.entry.images && data.entry.images.length > 0 ? 5 : 0}>
              Project details
              {data &&
                data.entry.projectDetails &&
                data.entry.projectDetails.length &&
                data.entry.projectDetails[0].application && (
                  <a
                    href={data.entry.projectDetails[0].application}
                    target="_blank"
                    rel="noreferrer noopener"
                    style={{ textDecoration: 'none', marginLeft: '8px' }}>
                    <FiExternalLink size="18px" color="black" />
                  </a>
                )}
            </Text>
            {data && data.entry.projectDetails && data.entry.projectDetails.length && (
              <Flex
                flexDirection="row"
                flexWrap="wrap"
                alignItems="center"
                justifyContent="space-between"
                width={[1, 2 / 3, 1]}
                mb={10}
                mx="auto">
                {data &&
                  data.entry &&
                  data.entry.projectDetails &&
                  data.entry.projectDetails.length &&
                  data.entry.projectDetails[0].banner &&
                  data.entry.projectDetails[0].banner.length > 0 && (
                    <Image src={data.entry.projectDetails[0].banner[0].url} maxHeight={150} />
                  )}
                <Flex
                  as="ol"
                  flexDirection="column"
                  width={[1, null, null, '42%']}
                  sx={{ paddingInlineStart: 0 }}>
                  <Flex
                    as="li"
                    justifyContent={['space-between', null, null, 'flex-start']}
                    py={2}
                    width={1}>
                    <Text as="h4" fontWeight={600} width={1 / 2}>
                      Region
                    </Text>
                    <Text as="p" width={1 / 2}>
                      {camelCaseFormatter(data.entry.projectDetails[0].region)}
                    </Text>
                  </Flex>
                  <Flex
                    as="li"
                    justifyContent={['space-between', null, null, 'flex-start']}
                    py={2}
                    width={1}>
                    <Text as="h4" fontWeight={600} width={1 / 2}>
                      House
                    </Text>
                    <Text as="p" width={1 / 2}>
                      {data.entry.projectDetails[0].house}
                    </Text>
                  </Flex>
                  <Flex
                    as="li"
                    justifyContent={['space-between', null, null, 'flex-start']}
                    py={2}
                    width={1}>
                    <Text as="h4" fontWeight={600} width={1 / 2}>
                      Status
                    </Text>
                    <Text as="p" width={1 / 2}>
                      {camelCaseFormatter(data.entry.projectDetails[0].destinationStatus)}
                    </Text>
                  </Flex>
                  <Flex
                    as="li"
                    justifyContent={['space-between', null, null, 'flex-start']}
                    py={2}
                    width={1}>
                    <Text as="h4" fontWeight={600} width={1 / 2}>
                      Date started
                    </Text>
                    <Text as="p" width={1 / 2}>
                      {formatDate(data.entry.projectDetails[0].dateStarted)}
                    </Text>
                  </Flex>
                </Flex>
                <Flex
                  as="ol"
                  flexDirection="column"
                  width={[1, null, null, '42%']}
                  sx={{ paddingInlineStart: 0 }}>
                  <Flex
                    as="li"
                    justifyContent={['space-between', null, null, 'flex-start']}
                    py={2}
                    width={1}>
                    <Text as="h4" fontWeight={600} width={1 / 2}>
                      Type
                    </Text>
                    <Text as="p" width={1 / 2}>
                      {camelCaseFormatter(data.entry.projectDetails[0].destinationType)}
                    </Text>
                  </Flex>
                  <Flex
                    as="li"
                    justifyContent={['space-between', null, null, 'flex-start']}
                    py={2}
                    width={1}>
                    <Text as="h4" fontWeight={600} width={1 / 2}>
                      Warp
                    </Text>
                    <Text as="p" width={1 / 2}>
                      {data.entry.projectDetails[0].warp &&
                        `/${_lowerCase(data.entry.projectDetails[0].warp)}`}
                    </Text>
                  </Flex>
                  <Flex
                    as="li"
                    justifyContent={['space-between', null, null, 'flex-start']}
                    py={2}
                    width={1}>
                    <Text as="h4" fontWeight={600} width={1 / 2}>
                      Project lead(s)
                    </Text>
                    <Text as="p" width={1 / 2}>
                      {data.entry.projectDetails[0].projectLead}
                    </Text>
                  </Flex>
                  <Flex
                    as="li"
                    justifyContent={['space-between', null, null, 'flex-start']}
                    py={2}
                    width={1}>
                    <Text as="h4" fontWeight={600} width={1 / 2}>
                      Date completed
                    </Text>
                    <Text as="p" width={1 / 2}>
                      {formatDate(data.entry.projectDetails[0].dateCompleted)}
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            )}
            {data && data.entry.copy && (
              <Redactor dangerouslySetInnerHTML={{ __html: data.entry.copy }} />
            )}
          </>
        )}
      </WikiLayout>
    </>
  );
};

export async function getStaticPaths() {
  const apolloClient = initializeApollo();

  const regions = await apolloClient.query({
    query: ALL_REGIONS_QUERY
  });

  const pages = regions.data.entries.map((item) => {
    return item.children.map((child) => {
      return {
        params: {
          region: item.slug,
          destination: child.slug
        }
      };
    });
  });

  const paths = flatten(pages);

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: DESTINATION_QUERY
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      slug: params.destination
    },
    revalidate: 1
  };
}

export default DestinationPage;
