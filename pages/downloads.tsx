import { Heading } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Error from 'next/error';
import { sanityClient, usePreviewSubscription } from '@/lib/sanity';
import { pageQuery } from '@/lib/queries';
import { Sections } from '@/models/sections';
import { MetaFields } from '@/models/meta-fields';
import { Slug } from '@sanity/types';
import { RenderSection } from '@/components/utils';
import { Seo } from '@/components/common';

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
};

const DownloadsPage = ({ pageData }: Props) => {
	const router = useRouter();

	const { data: page } = usePreviewSubscription(pageQuery, {
		params: { type: 'downloads', slug: pageData?.slug?.current },
		initialData: pageData,
		enabled: pageData && router.query.preview !== null,
	});

	if (!router.isFallback && !page) {
		return <Error statusCode={404} />;
	}

	return (
		<>
			<Seo meta={page?.meta} />
			<Heading variant='heading2' textAlign='center' mt={[12]}>
				{page.heading}
			</Heading>
			{page?.content?.map((section) => {
				if (!section || Object.keys(section).length === 0) {
					return null;
				}

				return <RenderSection key={section._key} section={section} />;
			})}
		</>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const pageData = await sanityClient.fetch<PageProps>(pageQuery, { type: 'downloads', slug: 'downloads' });

	if (!pageData) {
		return {
			notFound: true,
		};
	}

	return { props: { pageData }, revalidate: 60 };
};

export default DownloadsPage;
