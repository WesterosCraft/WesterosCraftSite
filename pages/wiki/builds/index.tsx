import { GetStaticProps } from 'next';
import Error from 'next/error';
import { useRouter } from 'next/router';
import { allBuildsQuery } from '@/lib/queries';
import { sanityClient, usePreviewSubscription } from '@/lib/sanity';
import { WikiLayout, Layout, Seo } from '@/components/common';
import { siteSettings } from '@/data/.';
import type { Page } from '../../../globals';

const BuildsPage = ({ allBuildsData }: any) => {
	const router = useRouter();

	const data = usePreviewSubscription(allBuildsQuery, {
		initialData: allBuildsQuery,
		enabled: allBuildsData && router.query.preview !== null,
	});

	if (!router.isFallback && !data) {
		return <Error statusCode={404} />;
	}

	return (
		<>
			<Seo meta={data?.meta} />
			{allBuildsData.map((build: any) => (
				<h5 key={build._key}>{build.name ?? 'missing name'}</h5>
			))}
		</>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const allBuildsData = await sanityClient.fetch<any>(allBuildsQuery);

	if (!allBuildsData) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
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
