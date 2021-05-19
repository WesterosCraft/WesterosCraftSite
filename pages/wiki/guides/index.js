import React from 'react';
import { WikiLayout } from '../../../components/templates/wikiLayout';
import { EntryCard } from '../../../components/atoms/entryCard';
import { Flex, Text } from 'rebass';
import Link from 'next/link';
import { computeBreadcrumbs } from '../../../utils/helpers';
import SEO from '../../../components/organisms/seo/seo';
import { useRouter } from 'next/router';
import Error from 'next/error';
import { getClient, usePreviewSubscription } from '../../../utils/sanity';

const query = `*[_type == "guide"]`;

const GuidesPage = ({ preview, allGuides }) => {
  const router = useRouter();

  const { data } = usePreviewSubscription(query, {
    initialData: allGuides,
    enabled: preview
  });

  if (!router.isFallback && !allGuides) {
    return <Error statusCode={404} />;
  }

  return (
    <>
      {data && <SEO title={'All Guides' || ''} description={'All WesterosCraft guides'} />}
      <WikiLayout title={'All Guides'} breadcrumb={computeBreadcrumbs(router.asPath)}>
        <Flex flexDirection={['column', null, 'row']} flexWrap="wrap">
          {data && data.length >= 1 ? (
            data.map((entry) => (
              <Link passHref href={`/wiki/guides/${entry.slug.current}`} key={entry.slug.current}>
                <EntryCard data={entry} key={entry.slug.current} />
              </Link>
            ))
          ) : (
            <Text mt={3}>None found</Text>
          )}
        </Flex>
      </WikiLayout>
    </>
  );
};

export async function getStaticProps({ preview = false }) {
  const allGuides = await getClient(preview).fetch(query);

  return {
    props: { preview, allGuides },
    revalidate: 1
  };
}

export default GuidesPage;
