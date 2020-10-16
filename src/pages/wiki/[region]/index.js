import React, { useState, useMemo } from 'react';
import { WikiLayout } from '../../../components/templates/wikiLayout';
import { EntryCard } from '../../../components/atoms/entryCard';
import { Flex } from 'rebass';
import Link from 'next/link';
import { regionSlugFormatter } from '../../../utility/regionSlugFormatter';
import { computeBreadcrumbs } from '../../../utility/helpers';
import { Redactor } from '../../../components/atoms/redactor';
import { RegionFilters } from '../../../components/atoms/regionFilters/regionFilters';
import SEO from '../../../components/organisms/seo/seo';
import { Spinner } from '../../../components/atoms/spinner';
import { REGION_QUERY, ALL_REGIONS_QUERY } from '../../../queries/regionQuery.gql';
import { initializeApollo } from '../../../../lib/apolloClient';
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import flatten from 'lodash/flatten';

const RegionPage = ({ slug }) => {
  const { data, loading } = useQuery(REGION_QUERY, { variables: { slug: slug } });

  const [items, setItems] = useState(data && data.entry.children);
  const router = useRouter();

  const regionItems = useMemo(() => {
    return data && data.entry.children;
  }, [data]);

  if (loading) {
    return null;
  }

  const onTypeChange = (option) => {
    if (option === null) {
      setItems(regionItems);
      return;
    }
    const filtered = items.filter(
      (thing) => thing.projectDetails[0].destinationType === option.value
    );
    setItems(filtered);
  };

  const onStatusChange = (option) => {
    if (option === null) {
      setItems(regionItems);
      return;
    }
    const filtered = items.filter(
      (thing) => thing.projectDetails[0].destinationStatus === option.value
    );
    setItems(filtered);
  };

  return (
    <>
      {data && (
        <SEO
          title={data.entry.pageTitle || data.entry.title}
          description={data.entry.pageDescription}
          image={data.entry.pageEntry && data.entry.pageImage[0].url}
        />
      )}
      <WikiLayout
        title={slug || 'WesterosCraft Wiki'}
        breadcrumb={computeBreadcrumbs(router.asPath)}>
        {loading || !data ? (
          <Spinner />
        ) : (
          <>
            <Redactor dangerouslySetInnerHTML={{ __html: data.entry.copy }} />
            <RegionFilters onTypeChange={onTypeChange} onStatusChange={onStatusChange} />
            <Flex flexDirection={['column', null, 'row']} flexWrap="wrap">
              {items &&
                items.length &&
                items.map((entry) => (
                  <Link
                    passHref
                    href={`/wiki/${regionSlugFormatter(entry.projectDetails[0].region)}/${
                      entry.slug
                    }`}
                    key={entry.slug}>
                    <EntryCard data={entry} key={entry.slug} />
                  </Link>
                ))}
            </Flex>
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
    query: REGION_QUERY
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      slug: params.region
    },
    revalidate: 1
  };
}

export default RegionPage;
