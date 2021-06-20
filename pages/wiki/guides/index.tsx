import { GetStaticProps } from 'next';
import Error from 'next/error';
import { useRouter } from 'next/router';
import { siteSettingsQuery, allGuidesQuery } from '@/lib/queries';
import { sanityClient, usePreviewSubscription } from '@/lib/sanity';
import { SiteSettings } from '@/models/site-settings';
import { WikiLayout } from '@/components/common';

const GuidesPage = ({ allGuidesData, siteSettings }: any) => {
	const router = useRouter();

	const data = usePreviewSubscription(allGuidesQuery, {
		initialData: allGuidesQuery,
		enabled: allGuidesData && router.query.preview !== null,
	});

	if (!router.isFallback && !data) {
		return <Error statusCode={404} />;
	}

	return (
		<WikiLayout meta={allGuidesData?.meta} siteSettings={siteSettings}>
			{allGuidesData.map((guide: any) => (
				<h5 key={guide._key}>{guide.name ?? 'missing name'}</h5>
			))}
		</WikiLayout>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const siteSettings = await sanityClient.fetch<SiteSettings>(siteSettingsQuery);
	const allGuidesData = await sanityClient.fetch<any>(allGuidesQuery);

	if (!allGuidesData) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			allGuidesData,
			siteSettings,
		},
		revalidate: 60,
	};
};

export default GuidesPage;
