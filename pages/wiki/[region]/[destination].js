import React, { useState } from 'react';
import { WikiLayout } from '../../../components/templates/wikiLayout';
import { Flex, Image } from 'rebass';
import { computeBreadcrumbs } from '../../../utils/helpers';
import SEO from '../../../components/organisms/seo/seo';
import Carousel, { Modal, ModalGateway } from 'react-images';
import { useRouter } from 'next/router';
import { Spinner } from '../../../components/atoms/spinner';
import Error from 'next/error';
import { getClient, usePreviewSubscription } from '../../../utils/sanity';
import { SanityBlockContent } from '../../../components/atoms/blockContent';
import { urlFor } from '../../../utils/sanity';
import { regionSlugFormatter } from '../../../utils/regionSlugFormatter';
import { ProjectDetails } from '../../../components/organisms/projectDetails';

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

  const { pageDescription, pageEntry, pageImage, entry, images, name } = data || {};

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

            <ProjectDetails data={data} />

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
