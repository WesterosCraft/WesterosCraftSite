import React, { useState } from 'react';
import { WikiLayout } from '../../../components/templates/wikiLayout';
import { Redactor } from '../../../components/atoms/redactor';
import { Flex, Image, Text } from 'rebass';
import _lowerCase from 'lodash/lowerCase';
import { camelCaseFormatter, formatDate, computeBreadcrumbs } from '../../../utils/helpers';
import SEO from '../../../components/organisms/seo/seo';
import Carousel, { Modal, ModalGateway } from 'react-images';
import { FiExternalLink } from 'react-icons/fi';
import { useRouter } from 'next/router';
import { initializeApollo } from '../../../lib/apolloClient';
import { DESTINATION_QUERY } from '../../../queries/destinationQuery.gql';
import { ALL_REGIONS_QUERY } from '../../../queries/regionQuery.gql';
import flatten from 'lodash/flatten';
import { Spinner } from '../../../components/atoms/spinner';
import Error from 'next/error';
import { getClient, usePreviewSubscription } from '../../../utils/sanity';

const View = ({ data, ...props }) => (
  <>
    <Image src={data.url} alt={data.title} onClick={props.carouselProps.onClick} {...props} />
  </>
);

const query = `*[_type == "destination" && slug.current == $slug][0]`;

const DestinationPage = ({ preview, slug, destinationData }) => {
  const router = useRouter();

  if (!router.isFallback && !destinationData) {
    return <Error statusCode={404} />;
  }

  // const data =
  //   initialApolloState.ROOT_QUERY[
  //     `entry({"site":"westeroscraft","slug":"${slug}","type":"wikiDestination"})`
  //   ];
  // const navData = initialApolloState.ROOT_QUERY['nodes({"level":1,"navHandle":"wikiNav"})'];

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <h1>destination page</h1>
      {/* {data && (
        <SEO
          title={data.title}
          description={data.pageDescription}
          image={data.pageEntry && data.pageImage[0].url}
        />
      )}
      <WikiLayout
        navData={navData}
        title={(data && data.title) || 'WesterosCraft Wiki'}
        breadcrumb={computeBreadcrumbs(router.asPath)}>
        {!data ? (
          <Spinner />
        ) : (
          <>
            {data && data.images && data.images.length > 0 && (
              <Flex flexDirection={['column', null, 'row']} justifyContent="center" mx="auto">
                <Carousel
                  onClick={() => setModalOpen(!modalOpen)}
                  views={data.images}
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
                  <Carousel views={data.images} components={{ View }} />
                </Modal>
              ) : null}
            </ModalGateway>
            <Text
              fontFamily="heading"
              variant="heading3"
              as="h3"
              mb={5}
              mt={data && data.images && data.images.length > 0 ? 5 : 0}>
              Project details
              {data &&
                data.projectDetails &&
                data.projectDetails.length &&
                data.projectDetails[0].application && (
                  <a
                    href={data.projectDetails[0].application}
                    target="_blank"
                    rel="noreferrer noopener"
                    style={{ textDecoration: 'none', marginLeft: '8px' }}>
                    <FiExternalLink size="18px" color="black" />
                  </a>
                )}
            </Text>
            {data && data.projectDetails && data.projectDetails.length && (
              <Flex
                flexDirection="row"
                flexWrap="wrap"
                alignItems="center"
                justifyContent="space-between"
                width={[1, 2 / 3, 1]}
                mb={10}
                mx="auto">
                {data &&
                  data.projectDetails &&
                  data.projectDetails.length &&
                  data.projectDetails[0].banner &&
                  data.projectDetails[0].banner.length > 0 && (
                    <Image src={data.projectDetails[0].banner[0].url} maxHeight={150} />
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
                      {camelCaseFormatter(data.projectDetails[0].region)}
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
                      {data.projectDetails[0].house}
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
                      {camelCaseFormatter(data.projectDetails[0].destinationStatus)}
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
                      {formatDate(data.projectDetails[0].dateStarted)}
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
                      {camelCaseFormatter(data.projectDetails[0].destinationType)}
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
                      {data.projectDetails[0].warp && `/${_lowerCase(data.projectDetails[0].warp)}`}
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
                      {data.projectDetails[0].projectLead}
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
                      {formatDate(data.projectDetails[0].dateCompleted)}
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            )}
            {data && data.copy && <Redactor dangerouslySetInnerHTML={{ __html: data.copy }} />}
          </>
        )}
      </WikiLayout> */}
    </>
  );
};

export async function getStaticPaths() {
  const routes = await getClient().fetch(`*[_type == "destination" && defined(slug.current)]{
    "params": {"slug": slug.current}
  }`);

  return {
    paths: routes || null,
    fallback: true
  };
}

export async function getStaticProps({ params = {}, preview = false }) {
  const { slug } = params;
  const test = await getClient(preview).fetch(query, {
    slug
  });

  return {
    props: { preview, test, slug }
  };
}

export default DestinationPage;
