import { GetStaticProps } from 'next';
import Error from 'next/error';
import { useRouter } from 'next/router';
import { regionQuery } from '@/lib/queries';
import { sanityClient, usePreviewSubscription } from '@/lib/sanity';
import { camelCase } from 'lodash';
import { Seo, WikiLayout, Layout } from '@/components/common';
import { siteSettings } from '@/data/.';
import type { Page } from '../../../globals';
import { BuildEntry } from '@/models/objects/build-entry';
import { Regions } from '@/models/utils';

type PageProps = {
	slug: Regions;
	regionData: Array<BuildEntry>;
};

const RegionPage = ({ regionData, slug }: PageProps) => {
	const router = useRouter();

	const { data } = usePreviewSubscription(regionQuery, {
		params: { slug },
		initialData: regionData,
		enabled: regionData && router.query.preview !== null,
	});

	if (!router.isFallback && !regionData) {
		return <Error statusCode={404} />;
	}

	return (
		<>
			{/* <Seo meta={region?.meta} /> */}

			{data.map((item, i) => (
				<h3 key={i}>{item.name}</h3>
			))}
		</>
	);
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const slug = camelCase(params?.region?.toString());
	const regionData = await sanityClient.fetch<any>(regionQuery, {
		slug,
	});

	if (!regionData) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			slug: params?.region?.toString(),
			regionData,
		},
		revalidate: 60,
	};
};

export const getStaticPaths = async () => {
	const paths = [
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
		paths,
		fallback: true,
	};
};

RegionPage.getLayout = (page: Page) => (
	<Layout siteSettings={siteSettings}>
		<WikiLayout siteSettings={siteSettings}>{page}</WikiLayout>
	</Layout>
);

export default RegionPage;
