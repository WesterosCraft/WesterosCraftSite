import React, { useState, useEffect } from 'react';
import { WikiLayout } from '../../../components/templates/wikiLayout';
import { EntryCard } from '../../../components/atoms/entryCard';
import { Flex, Text } from 'rebass';
import Link from 'next/link';
import { regionSlugFormatter } from '../../../utils/regionSlugFormatter';
import { computeBreadcrumbs, camelCaseFormatter } from '../../../utils/helpers';
import { RegionFilters } from '../../../components/atoms/regionFilters/regionFilters';
import SEO from '../../../components/organisms/seo/seo';
import { Spinner } from '../../../components/atoms/spinner';
import { useRouter } from 'next/router';
import Error from 'next/error';
import { getClient, usePreviewSubscription } from '../../../utils/sanity';

const query = `*[_type == "destination" && region == $region]`;

const RegionPage = ({ preview, regionData }) => {
  const router = useRouter();
  const [items, setItems] = useState(regionData);

  const { data } = usePreviewSubscription(query, {
    initialData: regionData,
    enabled: preview
  });

  useEffect(() => {
    setItems(data);
  }, [data]);

  const onTypeChange = (option) => {
    if (option === null) {
      setItems(data);
      return;
    }
    const filtered = data.filter((thing) => thing.buildType === option.value);
    setItems(filtered);
  };

  const onStatusChange = (option) => {
    if (option === null) {
      setItems(data);
      return;
    }
    const filtered = data.filter((thing) => thing.projectStatus === option.value);
    setItems(filtered);
  };

  if (!router.isFallback && !data) {
    return <Error statusCode={404} />;
  }

  return (
    <>
      {data && (
        <SEO
          title={camelCaseFormatter(data && data[0].region) || ''}
          description={data.pageDescription}
          image={data.pageEntry && data.pageImage[0].url}
        />
      )}
      <WikiLayout
        title={(data && data[0].region) || 'WesterosCraft Wiki'}
        breadcrumb={computeBreadcrumbs(router.asPath)}>
        {!data ? (
          <Spinner />
        ) : (
          <>
            <RegionFilters onTypeChange={onTypeChange} onStatusChange={onStatusChange} />
            <Flex flexDirection={['column', null, 'row']} flexWrap="wrap">
              {items && items.length >= 1 ? (
                items.map((entry) => (
                  <Link
                    passHref
                    href={`/wiki/${regionSlugFormatter(entry.region)}/${entry.slug.current}`}
                    key={entry.slug.current}>
                    <EntryCard data={entry} key={entry.slug.current} />
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
  // const routes = await getClient().fetch(`*[_type == "destination"]{
  //   "params": {"region": region}
  // }`);

  const routes = [
    { params: { region: 'dorne' } },
    { params: { region: 'riverlands' } },
    { params: { region: 'the-wall' } },
    { params: { region: 'north' } },
    { params: { region: 'vale' } },
    { params: { region: 'iron-islands' } },
    { params: { region: 'westerlands' } },
    { params: { region: 'crownlands' } },
    { params: { region: 'stormlands' } },
    { params: { region: 'reach' } },
    { params: { region: 'beyond-the-wall' } }
  ];

  return {
    paths: routes || null,
    fallback: true
  };
}

const regionFormatter = (reg) => {
  if (reg === 'the-wall') {
    return 'theWall';
  } else if (reg === 'iron-islands') {
    return 'ironIslands';
  } else if (reg === 'beyond-the-wall') {
    return 'beyondTheWall';
  } else {
    return reg;
  }
};

export async function getStaticProps({ params = {}, preview = false }) {
  const { region } = params;

  const thing = regionFormatter(region);

  const regionData = await getClient(preview).fetch(query, {
    region: thing
  });

  return {
    props: { preview, regionData },
    revalidate: 1
  };
}

export default RegionPage;
