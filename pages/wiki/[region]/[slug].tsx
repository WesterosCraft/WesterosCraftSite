import { GetStaticProps } from 'next';
import Error from 'next/error';
import { useRouter } from 'next/router';
import { allBuildsSlug, buildQuery } from '@/lib/queries';
import { sanityClient, usePreviewSubscription } from '@/lib/sanity';
import { Seo, WikiLayout, Layout } from '@/components/common';
import { kebabCase } from 'lodash';
import { siteSettings } from '@/data/.';
import type { Page } from '../../../globals';

const BuildPage = ({ buildData }: any) => {
	const router = useRouter();

	const { data: build } = usePreviewSubscription(buildQuery, {
		params: { slug: buildData?.slug?.current },
		initialData: buildData,
		enabled: buildData && router.query.preview !== null,
	});

	if (!router.isFallback && !build) {
		return <Error statusCode={404} />;
	}

	return (
		<>
			<Seo meta={build?.meta} />
			BUILD: {buildData.name}
		</>
	);
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const slug = params?.slug?.toString();
	const buildData = await sanityClient.fetch<any>(buildQuery, {
		slug,
	});

	return {
		props: {
			buildData,
		},
		revalidate: 60,
	};
};

export const getStaticPaths = async () => {
	const data = await sanityClient.fetch<any>(allBuildsSlug);
	const paths = data.map((build: any) => ({ params: { slug: build.slug.current, region: kebabCase(build.region) } }));

	return {
		paths,
		fallback: true,
	};
};

BuildPage.getLayout = (page: Page) => (
	<Layout siteSettings={siteSettings}>
		<WikiLayout siteSettings={siteSettings}>{page}</WikiLayout>
	</Layout>
);

export default BuildPage;
