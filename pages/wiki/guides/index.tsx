import { GetStaticProps } from 'next';
import Error from 'next/error';
import { useRouter } from 'next/router';
import { allGuidesQuery } from '@/lib/queries';
import { sanityClient, usePreviewSubscription } from '@/lib/sanity';
import { WikiLayout, Layout } from '@/components/common';
import { siteSettings } from '@/data/.';
import { LayoutPage } from '@/models/page';

const GuidesPage = ({ allGuidesData }: any) => {
	const router = useRouter();

	const data = usePreviewSubscription(allGuidesQuery, {
		initialData: allGuidesQuery,
		enabled: allGuidesData && router.query.preview !== null,
	});

	if (!router.isFallback && !data) {
		return <Error statusCode={404} />;
	}

	return (
		<>
			{/* //@ts-ignore */}
			{/* <Seo meta={data?.meta} /> */}
			{allGuidesData.map((guide: any) => (
				<h5 key={guide._key}>{guide.name ?? 'missing name'}</h5>
			))}
		</>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const allGuidesData = await sanityClient.fetch<any>(allGuidesQuery);

	if (!allGuidesData) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			allGuidesData,
		},
		revalidate: 60,
	};
};

GuidesPage.getLayout = (page: LayoutPage) => (
	<Layout siteSettings={siteSettings}>
		<WikiLayout siteSettings={siteSettings}>{page}</WikiLayout>
	</Layout>
);

export default GuidesPage;
