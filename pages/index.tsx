import { GetStaticProps } from 'next';
import Error from 'next/error';
import { useRouter } from 'next/router';
import { pageQuery, siteSettingsQuery } from '@/lib/queries';
import { sanityClient, usePreviewSubscription } from '@/lib/sanity';
import { SiteSettings } from '@/models/site-settings';
import { Layout } from '@/components/common';
import { RenderSection } from '@/components/utils';
import { Slug } from '@sanity/types';
import { PageSections } from '@/models/sections';
import { MetaFields } from '@/models/meta-fields';
import { Heading, Text, Box } from '@chakra-ui/react';

type PageProps = {
	content?: PageSections[];
	meta?: MetaFields;
	heading1?: string;
	heading2?: string;
	slug: Slug;
	subheading?: string;
	title?: string;
	caption?: string;
	_createdAt: string;
	_id: 'home';
	_rev: string;
	_type: 'home';
	_updatedAt: string;
};

type Props = {
	pageData: PageProps;
	siteSettings: SiteSettings;
};

const Index = ({ pageData, siteSettings }: Props) => {
	const router = useRouter();

	const { data: page } = usePreviewSubscription(pageQuery, {
		params: { type: 'home', slug: pageData?.slug?.current },
		initialData: pageData,
		enabled: pageData && router.query.preview !== null,
	});

	if (!router.isFallback && !page) {
		return <Error statusCode={404} />;
	}

	return (
		<Layout meta={page?.meta} siteSettings={siteSettings}>
			<Box textAlign='center'>
				<Text textTransform='uppercase' fontWeight='bold' color='green.600'>
					{page.caption}
				</Text>
				<Heading fontSize='5xl'>{page.heading2}</Heading>
				<Heading fontSize='7xl' letterSpacing={5.3}>
					{page.heading1}
				</Heading>
				<Text>{page.subheading}</Text>
			</Box>
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
	const pageData = await sanityClient.fetch<any>(pageQuery, { type: 'home', slug: 'homepage' });
	const siteSettings = await sanityClient.fetch<SiteSettings>(siteSettingsQuery);

	if (!pageData) {
		return {
			notFound: true,
		};
	}

	return { props: { siteSettings, pageData }, revalidate: 60 };
};

export default Index;
