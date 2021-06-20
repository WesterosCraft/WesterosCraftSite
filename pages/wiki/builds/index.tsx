import { GetStaticProps } from 'next';
import Error from 'next/error';
import { useRouter } from 'next/router';
import { siteSettingsQuery, allBuildsQuery } from '@/lib/queries';
import { sanityClient, usePreviewSubscription } from '@/lib/sanity';
import { SiteSettings } from '@/models/site-settings';
import { WikiLayout } from '@/components/common';

const BuildsPage = ({ allBuildsData, siteSettings }: any) => {
	const router = useRouter();

	const data = usePreviewSubscription(allBuildsQuery, {
		initialData: allBuildsQuery,
		enabled: allBuildsData && router.query.preview !== null,
	});

	if (!router.isFallback && !data) {
		return <Error statusCode={404} />;
	}

	return (
		<WikiLayout meta={allBuildsData?.meta} siteSettings={siteSettings}>
			{allBuildsData.map((build: any) => (
				<h5 key={build._key}>{build.name ?? 'missing name'}</h5>
			))}
		</WikiLayout>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const siteSettings = await sanityClient.fetch<SiteSettings>(siteSettingsQuery);
	const allBuildsData = await sanityClient.fetch<any>(allBuildsQuery);

	if (!allBuildsData) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			allBuildsData,
			siteSettings,
		},
		revalidate: 60,
	};
};

export default BuildsPage;
