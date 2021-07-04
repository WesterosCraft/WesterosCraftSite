import { useMemo } from 'react';
import { GetStaticProps } from 'next';
import Error from 'next/error';
import { useRouter } from 'next/router';
import { allBuildsQuery, pageQuery } from '@/lib/queries';
import { sanityClient, usePreviewSubscription } from '@/lib/sanity';
import { WikiLayout, Layout, Seo, ProgressTable, StatusTag } from '@/components/common';
import { siteSettings } from '@/data/.';
import { Heading, Select, Input } from '@chakra-ui/react';
import { Slug } from '@sanity/types';
import { MetaFields } from '@/models/meta-fields';
import { LayoutPage } from '@/models/page';
import { nameFormatter } from '@/components/utils';

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

	const { data: page } = usePreviewSubscription(pageQuery, {
		params: { type: 'allBuilds', slug: pageData?.slug?.current },
		initialData: pageData,
		enabled: allBuildsData && router.query.preview !== null,
	});

	function SelectColumnFilter({ column: { filterValue, setFilter, preFilteredRows, id } }: any) {
		// Calculate the options for filtering
		// using the preFilteredRows
		const options = useMemo(() => {
			const options = new Set();
			preFilteredRows.forEach((row: any) => {
				options.add(row.values[id]);
			});
			return [...options.values()];
		}, [id, preFilteredRows]);

		// Render a multi-select box
		return (
			<Select
				size='xs'
				value={filterValue}
				onChange={(e) => {
					setFilter(e.target.value || undefined);
				}}
			>
				<option value=''>All</option>
				{options.map((option: any, i) => (
					<option key={i} value={option}>
						{option}
					</option>
				))}
			</Select>
		);
	}

	const columns = useMemo(
		() => [
			{
				Header: 'Name',
				accessor: 'name',
				Cell: ({ cell: { value } }: any) => <Heading size='sm'>{value}</Heading>,
			},
			{
				Header: 'Region',
				accessor: 'region',
				Filter: SelectColumnFilter,
				filter: 'includes',
				defaultCanFilter: true,
				Cell: ({ cell: { value } }: any) => <>{nameFormatter(value)}</>,
			},
			{
				Header: 'Status',
				accessor: 'projectStatus',
				Filter: SelectColumnFilter,
				filter: 'includes',
				defaultCanFilter: true,
				Cell: ({ cell: { value } }: any) => <StatusTag>{value}</StatusTag>,
			},
			{
				Header: 'Type',
				accessor: 'buildType',
				Filter: SelectColumnFilter,
				filter: 'includes',
				defaultCanFilter: true,
				Cell: ({ cell: { value } }: any) => <>{nameFormatter(value)}</>,
			},
			// {
			// 	accessor: 'uri',
			// 	Cell: ({ cell: { value } }: any) => <>{value ?? 'uri'}</>,
			// 	Filter: false,
			// },
		],
		[]
	);

	if (!router.isFallback && !page) {
		return <Error statusCode={404} />;
	}

	return (
		<>
			<Seo meta={page?.meta} />
			<ProgressTable columns={columns} data={allBuildsData?.builds} />
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
