import { useState } from 'react';
import { GetStaticProps } from 'next';
import Error from 'next/error';
import { useRouter } from 'next/router';
import { allBuildsQuery, pageQuery } from '@/lib/queries';
import { sanityClient, usePreviewSubscription } from '@/lib/sanity';
import { WikiLayout, Layout, Seo, DestinationCard, Pagination, MultiSelect } from '@/components/common';
import { siteSettings } from '@/data/.';
// import { sortBy } from 'lodash';
import { HStack, useControllableState } from '@chakra-ui/react';
import { Slug } from '@sanity/types';
import { MetaFields } from '@/models/meta-fields';
import { destinationTypes, destinationStatuses, regions } from '@/data/.';
import { LayoutPage } from '@/models/page';

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

const filterData = [
	{
		name: 'region',
		options: regions,
		placeholder: 'Region',
	},
	{
		name: 'projectStatus',
		options: destinationStatuses,
		placeholder: 'Status',
	},
	{
		name: 'buildType',
		options: destinationTypes,
		placeholder: 'Type',
	},
];

const BuildsPage = ({ pageData, allBuildsData }: PageProps) => {
	const router = useRouter();
	const [items, setItems] = useState(allBuildsData.builds);
	const [tabIndex, setTabIndex] = useControllableState({ defaultValue: 0 });

	const { data: page } = usePreviewSubscription(pageQuery, {
		params: { type: 'allBuilds', slug: pageData?.slug?.current },
		initialData: pageData,
		enabled: allBuildsData && router.query.preview !== null,
	});

	const onInputChange = (option: { value: string; label: string }, { name }: { name: string }) => {
		if (option === null) {
			setItems(allBuildsData.builds);
			return;
		}
		const filtered = allBuildsData.builds.filter((b: any) => b[name] === option.value);
		setItems(filtered);
	};

	const setPrevTab = () => {
		setTabIndex(tabIndex - 1);
	};

	const setNextTab = () => {
		setTabIndex(tabIndex + 1);
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
				{filterData.map((select) => (
					<MultiSelect
						key={select.name}
						className='react-select'
						instanceId={select.name}
						size='sm'
						width='100%'
						name={select.name}
						options={select.options}
						placeholder={select.placeholder}
						isClearable
					/>
				))}
			</HStack>

			<Pagination
				data={items}
				tabIndex={tabIndex}
				setTabIndex={setTabIndex}
				onNextChange={setNextTab}
				onPrevChange={setPrevTab}
				RenderComponent={DestinationCard}
				pageLimit={21}
			/>
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

BuildsPage.getLayout = (page: LayoutPage) => (
	<Layout siteSettings={siteSettings}>
		<WikiLayout siteSettings={siteSettings}>{page}</WikiLayout>
	</Layout>
);

export default BuildsPage;
