import { GetStaticProps } from 'next';
import Error from 'next/error';
import { useRouter } from 'next/router';
import { siteSettingsQuery, allBuildsSlug, buildQuery } from '@/lib/queries';
import { sanityClient, usePreviewSubscription } from '@/lib/sanity';
import { SiteSettings } from '@/models/site-settings';
import { WikiLayout } from '@/components/common';
import { kebabCase } from 'lodash';

const BuildPage = ({ buildData, siteSettings }: any) => {
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
		<WikiLayout meta={build?.meta} siteSettings={siteSettings}>
			BUILD: {buildData.name}
		</WikiLayout>
	);
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const slug = params?.slug?.toString();
	const siteSettings = await sanityClient.fetch<SiteSettings>(siteSettingsQuery);
	const buildData = await sanityClient.fetch<any>(buildQuery, {
		slug,
	});
	console.log('👉 ~ constgetStaticProps:GetStaticProps= ~ buildData', buildData);

	return {
		props: {
			buildData,
			siteSettings,
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

export default BuildPage;
