import React, { useState } from 'react';
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
  if (!router.isFallback && !regionData) {
    return <Error statusCode={404} />;
  }

  console.log('REGION DATA: ', regionData);

  const [items, setItems] = useState(regionData);

  const onTypeChange = (option) => {
    if (option === null) {
      setItems(regionData);
      return;
    }
    const filtered = regionData.filter((thing) => thing.buildType === option.value);
    setItems(filtered);
  };

  const onStatusChange = (option) => {
    if (option === null) {
      setItems(regionData);
      return;
    }
    const filtered = regionData.filter((thing) => thing.projectStatus === option.value);
    setItems(filtered);
  };

  return (
    <>
      {regionData && (
        <SEO
          title={camelCaseFormatter(regionData[0].region) || ''}
          description={regionData.pageDescription}
          image={regionData.pageEntry && regionData.pageImage[0].url}
        />
      )}
      <WikiLayout
        title={regionData[0].region || 'WesterosCraft Wiki'}
        breadcrumb={computeBreadcrumbs(router.asPath)}>
        {!regionData ? (
          <Spinner />
        ) : (
          <>
            {/* <Redactor dangerouslySetInnerHTML={{ __html: data.copy }} /> */}
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
  const routes = await getClient().fetch(`*[_type == "destination" && defined(slug.current)]{
    "params": {"region": slug.current}
  }`);

  return {
    paths: routes || null,
    fallback: true
  };
}

export async function getStaticProps({ params = {}, preview = false }) {
  const { region } = params;

  const regionData = await getClient(preview).fetch(query, {
    region
  });

  return {
    props: { preview, regionData }
  };
}

export default RegionPage;
