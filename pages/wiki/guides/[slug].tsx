import { GetStaticProps } from 'next';
import Error from 'next/error';
import { useRouter } from 'next/router';
import { allGuidesSlug, guideQuery } from '@/lib/queries';
import { sanityClient, usePreviewSubscription } from '@/lib/sanity';
import { WikiLayout, Layout, Seo } from '@/components/common';
import { siteSettings } from '@/data/.';
import { LayoutPage } from '@/models/page';

const GuidePage = ({ guideData }: any) => {
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
		<>
			<Seo meta={guide?.meta} />
			GUIDE: {guideData.slug.current}
		</>
	);
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const slug = params?.slug?.toString();
	const guideData = await sanityClient.fetch<any>(guideQuery, {
		slug,
	});

	return {
		props: {
			guideData,
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

GuidePage.getLayout = (page: LayoutPage) => (
	<Layout siteSettings={siteSettings}>
		<WikiLayout siteSettings={siteSettings}>{page}</WikiLayout>
	</Layout>
);

export default GuidePage;
