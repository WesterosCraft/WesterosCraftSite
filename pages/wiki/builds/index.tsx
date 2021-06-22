import { useState } from 'react';
import { GetStaticProps } from 'next';
import Error from 'next/error';
import { useRouter } from 'next/router';
import { allBuildsQuery, pageQuery } from '@/lib/queries';
import { sanityClient, usePreviewSubscription } from '@/lib/sanity';
import { WikiLayout, Layout, Seo, DestinationCard, MultiSelect } from '@/components/common';
import { siteSettings } from '@/data/.';
import type { Page } from '../../../globals';
import { sortBy } from 'lodash';
import { SimpleGrid, HStack } from '@chakra-ui/react';
import { Slug } from '@sanity/types';
import { MetaFields } from '@/models/meta-fields';
import { destinationTypes, destinationStatuses, regions } from '@/data/.';

type PageProps = {
	pageData: {
		_id: 'allBuilds';
		_type: 'allBuilds';
		slug: Slug;
		title?: string;
		meta?: MetaFields;
		_createdAt: string;
		_updatedAt: string;
	};
	allBuildsData: { builds: any; totalBuilds: number };
};

const BuildsPage = ({ pageData, allBuildsData }: PageProps) => {
	console.log('👉 ~ BuildsPage ~ allBuildsData', allBuildsData);
	const router = useRouter();
	const [items, setItems] = useState(allBuildsData.builds);

	const { data: page } = usePreviewSubscription(pageQuery, {
		params: { type: 'allBuilds', slug: pageData?.slug?.current },
		initialData: pageData,
		enabled: allBuildsData && router.query.preview !== null,
	});

	const onTypeChange = (option: { value: string; label: string }) => {
		if (option === null) {
			setItems(allBuildsData.builds);
			return;
		}
		const filtered = allBuildsData.builds.filter((thing) => thing.buildType === option.value);
		setItems(filtered);
	};

	const onStatusChange = (option: { value: string; label: string }) => {
		if (option === null) {
			setItems(allBuildsData);
			return;
		}
		const filtered = allBuildsData.builds.filter((thing) => thing.projectStatus === option.value);
		setItems(filtered);
	};

	if (!router.isFallback && !page) {
		return <Error statusCode={404} />;
	}

	return (
		<>
			<Seo meta={page?.meta} />
			<HStack
				spacing={2}
				py={4}
				sx={{
					'.react-select': {
						width: '100%',
					},
				}}
			>
				<MultiSelect
					className='react-select'
					instanceId='region'
					size='sm'
					width='100%'
					name='region'
					options={regions}
					placeholder='Region'
					isClearable
				/>
				<MultiSelect
					className='react-select'
					instanceId='status'
					size='sm'
					width='100%'
					name='status'
					onChange={onStatusChange}
					options={destinationStatuses}
					placeholder='Status'
					isClearable
				/>
				<MultiSelect
					className='react-select'
					instanceId='type'
					size='sm'
					onChange={onTypeChange}
					options={destinationTypes}
					placeholder='Type'
					isClearable
				/>
			</HStack>
			<SimpleGrid
				gridAutoRows='1fr'
				templateColumns={['repeat(1, 1fr)', 'repeat(2, minmax(0px, 1fr))', null, 'repeat(3, minmax(0px, 1fr))']}
				gap={4}
			>
				{sortBy(items, (o) => o.name).map((build: any, i: number) => (
					<DestinationCard
						key={i}
						imageUrl={build.images?.url!}
						blurDataUrl={build.images?.metadata?.lqip!}
						name={build.name}
						// entry={build.entry}
						house={build.house}
						region={build.region}
						status={build.projectStatus}
						buildType={build.buildType}
					/>
				))}
			</SimpleGrid>
		</>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const pageData = await sanityClient.fetch<any>(pageQuery, { type: 'allBuilds', slug: 'builds' });
	const allBuildsData = await sanityClient.fetch<any>(allBuildsQuery);

	if (!allBuildsData) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			pageData,
			allBuildsData,
		},
		revalidate: 60,
	};
};

BuildsPage.getLayout = (page: Page) => (
	<Layout siteSettings={siteSettings}>
		<WikiLayout siteSettings={siteSettings}>{page}</WikiLayout>
	</Layout>
);

export default BuildsPage;
