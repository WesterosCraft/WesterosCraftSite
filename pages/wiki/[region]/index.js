import React, { useState, useMemo } from 'react';
import { WikiLayout } from '../../../components/templates/wikiLayout';
import { EntryCard } from '../../../components/atoms/entryCard';
import { Flex, Text } from 'rebass';
import Link from 'next/link';
import { regionSlugFormatter } from '../../../utils/regionSlugFormatter';
import { computeBreadcrumbs } from '../../../utils/helpers';
import { Redactor } from '../../../components/atoms/redactor';
import { RegionFilters } from '../../../components/atoms/regionFilters/regionFilters';
import SEO from '../../../components/organisms/seo/seo';
import { Spinner } from '../../../components/atoms/spinner';
import { REGION_QUERY, ALL_REGIONS_QUERY } from '../../../queries/regionQuery.gql';
import { initializeApollo } from '../../../lib/apolloClient';
import { useRouter } from 'next/router';
import flatten from 'lodash/flatten';
import Error from 'next/error';
import { getClient, usePreviewSubscription } from '../../../utils/sanity';

const query = `*[_type == "destination" && slug.current == $slug][0]`;

const RegionPage = ({ preview, destination, destinationData }) => {
  const router = useRouter();
  if (!router.isFallback && !destinationData) {
    return <Error statusCode={404} />;
  }

  // const data =
  //   initialApolloState.ROOT_QUERY[
  //     `entry({"site":"westeroscraft","slug":"${slug}","type":"wikiRegion"})`
  //   ];
  // const navData = initialApolloState.ROOT_QUERY['nodes({"level":1,"navHandle":"wikiNav"})'];

  const [items, setItems] = useState(data && data['children({"orderBy":"title"})']);

  const onTypeChange = (option) => {
    if (option === null) {
      setItems(data['children({"orderBy":"title"})']);
      return;
    }
    const filtered = data['children({"orderBy":"title"})'].filter(
      (thing) => thing.projectDetails[0].destinationType === option.value
    );
    setItems(filtered);
  };

  const onStatusChange = (option) => {
    if (option === null) {
      setItems(data['children({"orderBy":"title"})']);
      return;
    }
    const filtered = data['children({"orderBy":"title"})'].filter(
      (thing) => thing.projectDetails[0].destinationStatus === option.value
    );
    setItems(filtered);
  };

  return (
    <>
      {data && (
        <SEO
          title={data.title || data.title}
          description={data.pageDescription}
          image={data.pageEntry && data.pageImage[0].url}
        />
      )}
      <WikiLayout
        navData={navData}
        title={data.title || 'WesterosCraft Wiki'}
        breadcrumb={computeBreadcrumbs(router.asPath)}>
        {!data ? (
          <Spinner />
        ) : (
          <>
            <Redactor dangerouslySetInnerHTML={{ __html: data.copy }} />
            <RegionFilters onTypeChange={onTypeChange} onStatusChange={onStatusChange} />
            <Flex flexDirection={['column', null, 'row']} flexWrap="wrap">
              {items && items.length >= 1 ? (
                items.map((entry) => (
                  <Link
                    passHref
                    href={`/wiki/${regionSlugFormatter(entry.projectDetails[0].region)}/${
                      entry.slug
                    }`}
                    key={entry.slug}>
                    <EntryCard data={entry} key={entry.slug} />
                  </Link>
                ))
              ) : (
                <Text mt={3}>None found</Text>
              )}
            </Flex>
          </>
        )}
      </WikiLayout>
    </>
  );
};

export async function getStaticPaths() {
  const routes = await getClient().fetch(`*[_type == "destination" && defined(slug.current)]{
    "params": {"region": slug.current}
  }`);

  return {
    paths: routes || null,
    fallback: true
  };
}

export async function getStaticProps({ params = {}, preview = false }) {
  const { destination } = params;
  const test = await getClient(preview).fetch(query, {
    destination
  });

  return {
    props: { preview, test, destination }
  };
}

export default RegionPage;
