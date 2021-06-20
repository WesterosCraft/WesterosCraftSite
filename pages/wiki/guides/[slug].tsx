import { GetStaticProps } from 'next';
import Error from 'next/error';
import { useRouter } from 'next/router';
import { siteSettingsQuery, allGuidesSlug, guideQuery } from '@/lib/queries';
import { sanityClient, usePreviewSubscription } from '@/lib/sanity';
import { SiteSettings } from '@/models/site-settings';
import { WikiLayout } from '@/components/common';

const GuidePage = ({ guideData, siteSettings }: any) => {
	const router = useRouter();

	const { data: guide } = usePreviewSubscription(guideQuery, {
		params: { slug: guideData?.slug?.current },
		initialData: guideData,
		enabled: guideData && router.query.preview !== null,
	});

	if ((!router.isFallback && !guide?.slug) || !guide) {
		return <Error statusCode={404} />;
	}

	return (
		<WikiLayout meta={guide?.meta} siteSettings={siteSettings}>
			GUIDE: {guideData.slug.current}
		</WikiLayout>
	);
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const slug = params?.slug?.toString();
	const siteSettings = await sanityClient.fetch<SiteSettings>(siteSettingsQuery);
	const guideData = await sanityClient.fetch<any>(guideQuery, {
		slug,
	});

	return {
		props: {
			guideData,
			siteSettings,
		},
		revalidate: 60,
	};
};

export const getStaticPaths = async () => {
	const data = await sanityClient.fetch<string[]>(allGuidesSlug);
	const paths = data.map((slug) => ({ params: { slug } }));

	return {
		paths,
		fallback: true,
	};
};

export default GuidePage;
