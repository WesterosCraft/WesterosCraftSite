import { GetStaticProps } from 'next';
import { Heading } from '@chakra-ui/react';
import { sanityClient, usePreviewSubscription } from '@/lib/sanity';
import { pageQuery, siteSettingsQuery } from '@/lib/queries';
import { SiteSettings } from '@/models/site-settings';
import { useRouter } from 'next/router';
import Error from 'next/error';
import { Layout } from '@/components/common';
import { Sections } from '@/models/sections';
import { MetaFields } from '@/models/meta-fields';
import { Slug } from '@sanity/types';
import { RenderSection } from '@/components/utils';

type PageProps = {
	content?: Sections[];
	meta?: MetaFields;
	heading?: string;
	slug: Slug;
	_createdAt: string;
	_id: 'about';
	_rev: string;
	_type: 'about';
	_updatedAt: string;
};

type Props = {
	pageData: PageProps;
	siteSettings: SiteSettings;
};

const AboutPage = ({ pageData, siteSettings }: Props) => {
	const router = useRouter();

	const { data: page } = usePreviewSubscription(pageQuery, {
		params: { type: 'about', slug: pageData?.slug?.current },
		initialData: pageData,
		enabled: pageData && router.query.preview !== null,
	});

	if (!router.isFallback && !page) {
		return <Error statusCode={404} />;
	}

	return (
		<Layout meta={page?.meta} siteSettings={siteSettings}>
			<Heading textAlign='center' mt={[12]}>
				{page.heading}
			</Heading>

			{page?.content?.map((section) => {
				if (!section || Object.keys(section).length === 0) {
					return null;
				}

				return <RenderSection key={section._key} section={section} />;
			})}
		</Layout>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const pageData = await sanityClient.fetch<any>(pageQuery, { type: 'about', slug: 'about' });
	const siteSettings = await sanityClient.fetch<SiteSettings>(siteSettingsQuery);

	if (!pageData) {
		return {
			notFound: true,
		};
	}

	return { props: { siteSettings, pageData }, revalidate: 60 };
};

export default AboutPage;
