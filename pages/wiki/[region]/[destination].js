import React, { useState } from 'react';
import { WikiLayout } from '../../../components/templates/wikiLayout';
import { Flex, Image, Text } from 'rebass';
import _lowerCase from 'lodash/lowerCase';
import { camelCaseFormatter, formatDate, computeBreadcrumbs } from '../../../utils/helpers';
import SEO from '../../../components/organisms/seo/seo';
import Carousel, { Modal, ModalGateway } from 'react-images';
import { FiExternalLink } from 'react-icons/fi';
import { useRouter } from 'next/router';
import { Spinner } from '../../../components/atoms/spinner';
import Error from 'next/error';
import { getClient, usePreviewSubscription } from '../../../utils/sanity';
import { SanityBlockContent } from '../../../components/atoms/blockContent';
import { urlFor } from '../../../utils/sanity';
import { regionSlugFormatter } from '../../../utils/regionSlugFormatter';

const View = ({ data, ...props }) => (
  <>
    <Image
      src={urlFor(data.asset._ref)}
      alt={data.asset._ref}
      onClick={props.carouselProps.onClick}
      {...props}
    />
  </>
);

const query = `*[_type == "destination" && slug.current == $slug][0]`;

const DestinationPage = ({ preview, destinationData }) => {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState(false);

  const { data } = usePreviewSubscription(query, {
    initialData: destinationData,
    enabled: preview
  });

  const {
    pageDescription,
    pageEntry,
    pageImage,
    application,
    banner,
    buildType,
    dateCompleted,
    dateStarted,
    entry,
    images,
    name,
    projectLead,
    projectStatus,
    region,
    house,
    warp
    // dynmapInformation
  } = data || {};

  if (!router.isFallback && !destinationData) {
    return <Error statusCode={404} />;
  }

  return (
    <>
      {destinationData && (
        <SEO
          title={name || ''}
          description={pageDescription || ''}
          image={(pageEntry && pageImage?.[0]?.url) || ''}
        />
      )}
      <WikiLayout
        title={(destinationData && name) || 'WesterosCraft Wiki'}
        breadcrumb={computeBreadcrumbs(router.asPath)}>
        {!destinationData ? (
          <Spinner />
        ) : (
          <>
            {destinationData && images && images.length > 0 && (
              <Flex flexDirection={['column', null, 'row']} justifyContent="center" mx="auto">
                <Carousel
                  onClick={() => setModalOpen(!modalOpen)}
                  views={images}
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
                  <Carousel views={images} components={{ View }} />
                </Modal>
              ) : null}
            </ModalGateway>
            <Text
              fontFamily="heading"
              variant="heading3"
              as="h3"
              mb={5}
              mt={destinationData && images && images.length > 0 ? 5 : 0}>
              Project details
              {destinationData && application && (
                <a
                  href={application}
                  target="_blank"
                  rel="noreferrer noopener"
                  style={{ textDecoration: 'none', marginLeft: '8px' }}>
                  <FiExternalLink size="18px" color="black" />
                </a>
              )}
            </Text>

            <Flex
              flexDirection="row"
              flexWrap="wrap"
              alignItems="center"
              justifyContent="space-between"
              width={[1, 2 / 3, 1]}
              mb={10}
              mx="auto">
              {destinationData && banner && (
                <Image alt={`${name}-banner`} src={urlFor(banner.asset._ref)} maxHeight={150} />
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
                    {camelCaseFormatter(region)}
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
                    {house}
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
                    {camelCaseFormatter(projectStatus)}
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
                    {formatDate(dateStarted)}
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
                    {camelCaseFormatter(buildType)}
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
                    {warp && `/${_lowerCase(warp)}`}
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
                    {projectLead}
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
                    {formatDate(dateCompleted)}
                  </Text>
                </Flex>
              </Flex>
            </Flex>

            {destinationData && entry && <SanityBlockContent blocks={entry} />}
          </>
        )}
      </WikiLayout>
    </>
  );
};

export async function getStaticPaths() {
  const routes = await getClient().fetch(`*[_type == "destination" && defined(slug.current)]{
    "params": {"destination": slug.current, "region": region }
  }`);

  const formattedRoutes = routes.map((region) => {
    return {
      ...region,
      params: { ...region.params, region: regionSlugFormatter(region.params.region) }
    };
  });

  return {
    paths: formattedRoutes || null,
    fallback: true
  };
}

export async function getStaticProps({ params = {}, preview = false }) {
  const { destination } = params;

  const destinationData = await getClient(preview).fetch(query, {
    slug: destination
  });

  return {
    props: { preview, destinationData },
    revalidate: 1
  };
}

export default DestinationPage;
