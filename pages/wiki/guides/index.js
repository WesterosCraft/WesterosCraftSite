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
import { getClient } from '../../../utils/sanity';

// const query = `*[_type == "destination" && region == $region]`;

const GuidesPage = () => {
  const router = useRouter();

  //   if (!router.isFallback) {
  //     return <Error statusCode={404} />;
  //   }

  return (
    <>
      {/* {data && (
        <SEO
          title={camelCaseFormatter(data && data[0].region) || ''}
          description={data.pageDescription}
          image={data.pageEntry && data.pageImage[0].url}
        />
      )} */}
      <WikiLayout title={'WesterosCraft Wiki'} breadcrumb={computeBreadcrumbs(router.asPath)}>
        <Text>Full guide list coming soon</Text>
      </WikiLayout>
    </>
  );
};

// export async function getStaticPaths() {
//   const routes = [
//     { params: { region: 'dorne' } },
//     { params: { region: 'riverlands' } },
//     { params: { region: 'the-wall' } },
//     { params: { region: 'north' } },
//     { params: { region: 'vale' } },
//     { params: { region: 'iron-islands' } },
//     { params: { region: 'westerlands' } },
//     { params: { region: 'crownlands' } },
//     { params: { region: 'stormlands' } },
//     { params: { region: 'reach' } },
//     { params: { region: 'beyond-the-wall' } }
//   ];

//   return {
//     paths: routes || null,
//     fallback: true
//   };
// }

// export async function getStaticProps({ params = {}, preview = false }) {
//   const { region } = params;

//   const thing = regionSlugFormatter(region);

//   const regionData = await getClient(preview).fetch(query, {
//     region: thing
//   });

//   return {
//     props: { preview, regionData },
//     revalidate: 1
//   };
// }

export default GuidesPage;
