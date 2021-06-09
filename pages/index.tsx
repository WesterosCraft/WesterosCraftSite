import { GetStaticProps } from 'next';
import Error from 'next/error';
import { useRouter } from 'next/router';
import { pageQuery, siteSettingsQuery } from '@/lib/queries';
import { sanityClient, usePreviewSubscription } from '@/lib/sanity';
import { SiteSettings } from '@/models/site-settings';
import { Layout } from '@/components/common';
import { RenderSection } from '@/components/utils';
import { Slug } from '@sanity/types';
import { Sections } from '@/models/sections';
import { MetaFields } from '@/models/meta-fields';
import { Heading, Text, Box, Button, useColorModeValue } from '@chakra-ui/react';
import { Spacer } from '@/components/sections';
import { GiRaven } from 'react-icons/gi';

type PageProps = {
	content?: Sections[];
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
			<Spacer data={{ size: 'medium', _type: 'spacer', _key: '909' }} />
			<Box textAlign='center'>
				<Text textTransform='uppercase' fontWeight='bold' color='green.600'>
					{page.caption}
				</Text>
				<Heading fontSize='5xl'>{page.heading2}</Heading>
				<Heading fontSize='7xl' letterSpacing={5.3}>
					{page.heading1}
				</Heading>
				<Text color={useColorModeValue('gray.500', 'gray.300')} mb='6'>
					{page.subheading}
				</Text>
				<Button
					size='lg'
					leftIcon={<GiRaven size={20} />}
					display={{ base: 'none', md: 'inline-flex' }}
					fontSize={'md'}
					fontWeight={600}
					color={useColorModeValue('white', 'black')}
					bg={useColorModeValue('blackAlpha.800', 'white')}
					href={'#'}
					_hover={{
						color: 'white',
						bg: 'blackAlpha.700',
					}}
				>
					Begin Your Watch
				</Button>
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
