import { GetStaticProps } from 'next';
import { pageQuery, siteSettingsQuery } from '@/lib/queries';
import { SiteSettings } from '@/models/site-settings';
import { Heading, Box, Flex, Text, Button, Input } from '@chakra-ui/react';
import { WikiLayout } from '@/components/common';
import { useRouter } from 'next/router';
import { sanityClient, usePreviewSubscription } from '@/lib/sanity';
import Error from 'next/error';
import { RenderSection } from '@/components/utils';
import { Sections } from '@/models/sections';
import { MetaFields } from '@/models/meta-fields';
import { Slug } from '@sanity/types';

// import { WikiLayout } from '../components/templates/wikiLayout';
// import { SliceZone } from '../components/slices/sliceZone';
// import { computeBreadcrumbs } from '../utils/helpers';

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
};

type Props = {
	pageData: PageProps;
	siteSettings: SiteSettings;
};

const WikiPage = ({ pageData, siteSettings }: Props) => {
	const router = useRouter();

	const { data: page } = usePreviewSubscription(pageQuery, {
		params: { type: 'wiki', slug: pageData?.slug?.current },
		initialData: pageData,
		enabled: pageData && router.query.preview !== null,
	});

	if (!router.isFallback && !page) {
		return <Error statusCode={404} />;
	}

	return (
		<WikiLayout meta={page?.meta} siteSettings={siteSettings}>
			layout
		</WikiLayout>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const pageData = await sanityClient.fetch<PageProps>(pageQuery, { type: 'wiki', slug: 'wiki' });
	const siteSettings = await sanityClient.fetch<SiteSettings>(siteSettingsQuery);

	if (!pageData) {
		return {
			notFound: true,
		};
	}

	return { props: { siteSettings, pageData }, revalidate: 60 };
};

export default WikiPage;
