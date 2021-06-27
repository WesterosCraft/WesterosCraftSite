import { GetStaticProps } from 'next';
import { wikiQuery } from '@/lib/queries';
import { useRouter } from 'next/router';
import { sanityClient, usePreviewSubscription } from '@/lib/sanity';
import Error from 'next/error';
import { RenderSection } from '@/components/utils';
import { Sections } from '@/models/sections';
import { MetaFields } from '@/models/meta-fields';
import { Slug } from '@sanity/types';
import { Seo, WikiLayout, Layout } from '@/components/common';
import { IProjectDetails } from '@/models/objects/project-details';
import { siteSettings } from '@/data/.';
import type { Page } from '../..';

type PageProps = {
	content?: Sections[];
	meta?: MetaFields;
	heading?: string;
	slug: Slug;
	subheading?: string;
	title?: string;
	_createdAt: string;
	_id: 'wiki';
	_rev: string;
	_type: 'wiki';
	_updatedAt: string;
	updatedDestinations?: Array<IProjectDetails>;
	createdDestinations?: Array<IProjectDetails>;
};

type Props = {
	pageData: PageProps;
};

const WikiPage = ({ pageData }: Props) => {
	const router = useRouter();

	const { data: page } = usePreviewSubscription(wikiQuery, {
		params: { type: 'wiki' },
		initialData: pageData,
		enabled: pageData && router.query.preview !== null,
	});

	if (!router.isFallback && !page) {
		return <Error statusCode={404} />;
	}

	return (
		<>
			<Seo meta={page?.meta} />
			{page?.content?.map((section) => {
				if (!section || Object.keys(section).length === 0) {
					return null;
				}

				return (
					<RenderSection
						key={section._key}
						section={section}
						additionalData={{
							updatedDestinations: page.updatedDestinations,
							createdDestinations: page.createdDestinations,
						}}
					/>
				);
			})}
		</>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const pageData = await sanityClient.fetch<PageProps>(wikiQuery, { type: 'wiki' });

	if (!pageData) {
		return {
			notFound: true,
		};
	}

	return { props: { pageData }, revalidate: 60 };
};

WikiPage.getLayout = (page: Page) => (
	<Layout siteSettings={siteSettings}>
		<WikiLayout siteSettings={siteSettings}>{page}</WikiLayout>
	</Layout>
);

export default WikiPage;
