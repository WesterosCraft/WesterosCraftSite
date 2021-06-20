import { GetStaticProps } from 'next';
import { wikiQuery, siteSettingsQuery, pageQuery } from '@/lib/queries';
import { SiteSettings } from '@/models/site-settings';
import { useRouter } from 'next/router';
import { sanityClient, usePreviewSubscription } from '@/lib/sanity';
import Error from 'next/error';
import { RenderSection } from '@/components/utils';
import { Sections } from '@/models/sections';
import { MetaFields } from '@/models/meta-fields';
import { Slug } from '@sanity/types';
import { WikiLayout } from '@/components/common';
import { IProjectDetails } from '@/models/objects/project-details';

type PageProps = {
	content?: Sections[];
	meta?: MetaFields;
	heading?: string;
	slug: Slug;
	subheading?: string;
	caption?: string;
	title?: string;
	editions?: any;
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
	siteSettings: SiteSettings;
};

const GuidesPage = ({ pageData, siteSettings }: Props) => {
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
		<WikiLayout meta={page?.meta} siteSettings={siteSettings}>
			{page?.content?.map((section) => {
				if (!section || Object.keys(section).length === 0) {
					return null;
				}

				return <RenderSection key={section._key} section={section} />;
			})}
		</WikiLayout>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const pageData = await sanityClient.fetch<PageProps>(pageQuery, { type: 'allGuides' });
	const siteSettings = await sanityClient.fetch<SiteSettings>(siteSettingsQuery);

	if (!pageData) {
		return {
			notFound: true,
		};
	}

	return { props: { siteSettings, pageData }, revalidate: 60 };
};

export default GuidesPage;
