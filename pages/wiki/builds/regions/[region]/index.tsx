import { useState, useEffect } from 'react';
import { GetStaticProps } from 'next';
import { siteSettingsQuery } from '@/lib/queries';
import { SiteSettings } from '@/models/site-settings';
import { Heading, Box, Flex, Text, Button, Input } from '@chakra-ui/react';
import { Layout } from '@/components/common';
import { useRouter } from 'next/router';
import { sanityClient, usePreviewSubscription } from '@/lib/sanity';
import Error from 'next/error';
import { RenderSection } from '@/components/utils';
import { Sections } from '@/models/sections';
import { MetaFields } from '@/models/meta-fields';
import { Slug } from '@sanity/types';
// import { WikiLayout } from '../../../components/templates/wikiLayout';
// import { EntryCard } from '../../../components/atoms/entryCard';
// import { Flex, Text } from 'rebass';
// import Link from 'next/link';
// import { regionSlugFormatter } from '../../../utils/regionSlugFormatter';
// import { computeBreadcrumbs, camelCaseFormatter } from '../../../utils/helpers';
// import { RegionFilters } from '../../../components/atoms/regionFilters/regionFilters';
// import { Spinner } from '../../../components/atoms/spinner';
// import { useRouter } from 'next/router';
// import Error from 'next/error';
// import { getClient, usePreviewSubscription } from '../../../utils/sanity';

const pageQuery = `*[_type == "destination" && region == $region]`;

type PageProps = {
	content?: Sections[];
	meta?: MetaFields;
	slug: Slug;
	_createdAt: string;
	_id: 'rookery';
	_rev: string;
	_type: 'rookery';
	_updatedAt: string;
};

type Props = {
	pageData: PageProps;
	siteSettings: SiteSettings;
};

const RegionPage = ({ pageData, siteSettings }: Props) => {
	const router = useRouter();
	const { data: page } = usePreviewSubscription(pageQuery, {
		initialData: pageData,
		enabled: pageData && router.query.preview !== null,
	});
	// const [items, setItems] = useState(page);

	// useEffect(() => {
	// 	setItems(page);
	// }, [page]);

	// const onTypeChange = (option: any) => {
	// 	if (option === null) {
	// 		setItems(page);
	// 		return;
	// 	}
	// 	const filtered = page.filter((thing: any) => thing.buildType === option.value);
	// 	setItems(filtered);
	// };

	// const onStatusChange = (option) => {
	// 	if (option === null) {
	// 		setItems(data);
	// 		return;
	// 	}
	// 	const filtered = data.filter((thing) => thing.projectStatus === option.value);
	// 	setItems(filtered);
	// };

	if (!router.isFallback && !page) {
		return <Error statusCode={404} />;
	}

	return (
		<Layout meta={page?.meta} siteSettings={siteSettings}>
			region
			{/* <WikiLayout
				title={(data && data?.[0]?.region) || 'WesterosCraft Wiki'}
				breadcrumb={computeBreadcrumbs(router.asPath)}
			>
				{!data ? (
					<Spinner />
				) : (
					<>
						<RegionFilters onTypeChange={onTypeChange} onStatusChange={onStatusChange} />
						<Flex flexDirection={['column', null, 'row']} flexWrap='wrap'>
							{items && items.length >= 1 ? (
								items.map((entry) => (
									<Link
										passHref
										href={`/wiki/${regionSlugFormatter(entry.region)}/${entry.slug.current}`}
										key={entry.slug.current}
									>
										<EntryCard data={entry} key={entry.slug.current} />
									</Link>
								))
							) : (
								<Text mt={3}>None found</Text>
							)}
						</Flex>
					</>
				)}
			</WikiLayout> */}
		</Layout>
	);
};

const regionFormatter = (reg: string) => {
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

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const region = params?.region && regionFormatter(params?.region?.toString());
	const siteSettings = await sanityClient.fetch<SiteSettings>(siteSettingsQuery);
	const pageData = await sanityClient.fetch<any>(pageQuery, {
		region,
	});

	return {
		props: {
			pageData,
			siteSettings,
		},
		revalidate: 60,
	};
};

export const getStaticPaths = async () => {
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
		{ params: { region: 'beyond-the-wall' } },
	];

	return {
		paths: routes,
		fallback: true,
	};
};

// export async function getStaticProps({ params = {}, preview = false }) {
// 	const { region } = params;

// 	const thing = regionFormatter(region);

// 	const regionData = await getClient(preview).fetch(query, {
// 		region: thing,
// 	});

// 	return {
// 		props: { preview, regionData },
// 		revalidate: 1,
// 	};
// }

export default RegionPage;
