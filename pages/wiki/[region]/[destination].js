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

  if (!router.isFallback && !destinationData) {
    return <Error statusCode={404} />;
  }

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {destinationData && (
        <SEO
          title={destinationData.name}
          description={destinationData.pageDescription}
          image={destinationData.pageEntry && destinationData.pageImage[0].url}
        />
      )}
      <WikiLayout
        title={(destinationData && destinationData.name) || 'WesterosCraft Wiki'}
        breadcrumb={computeBreadcrumbs(router.asPath)}>
        {!destinationData ? (
          <Spinner />
        ) : (
          <>
            {destinationData && destinationData.images && destinationData.images.length > 0 && (
              <Flex flexDirection={['column', null, 'row']} justifyContent="center" mx="auto">
                <Carousel
                  onClick={() => setModalOpen(!modalOpen)}
                  views={destinationData.images}
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
                  <Carousel views={destinationData.images} components={{ View }} />
                </Modal>
              ) : null}
            </ModalGateway>
            <Text
              fontFamily="heading"
              variant="heading3"
              as="h3"
              mb={5}
              mt={
                destinationData && destinationData.images && destinationData.images.length > 0
                  ? 5
                  : 0
              }>
              Project details
              {destinationData && destinationData.application && (
                <a
                  href={destinationData.application}
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
              {destinationData && destinationData.banner && (
                <Image
                  alt={`${destinationData.name}-banner`}
                  src={urlFor(destinationData.banner.asset._ref)}
                  maxHeight={150}
                />
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
                    {camelCaseFormatter(destinationData.region)}
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
                    {destinationData.house}
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
                    {camelCaseFormatter(destinationData.projectStatus)}
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
                    {formatDate(destinationData.dateStarted)}
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
                    {camelCaseFormatter(destinationData.buildType)}
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
                    {destinationData.warp && `/${_lowerCase(destinationData.warp)}`}
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
                    {destinationData.projectLead}
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
                    {formatDate(destinationData.dateCompleted)}
                  </Text>
                </Flex>
              </Flex>
            </Flex>

            {destinationData && destinationData.entry && (
              <SanityBlockContent blocks={destinationData.entry} />
            )}
          </>
        )}
      </WikiLayout>
    </>
  );
};

export async function getStaticPaths() {
  let routes = await getClient().fetch(`*[_type == "destination" && defined(slug.current)]{
    "params": {"destination": slug.current, "region": region }
  }`);

  return {
    paths: routes || null,
    fallback: true
  };
}

export async function getStaticProps({ params = {}, preview = false }) {
  const { destination } = params;

  const destinationData = await getClient(preview).fetch(query, {
    slug: destination
  });

  return {
    props: { preview, destinationData }
  };
}

export default DestinationPage;
