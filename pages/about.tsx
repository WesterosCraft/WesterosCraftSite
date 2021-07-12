import { GetStaticProps } from 'next';
import { Heading, Container, Flex, Box, Text, AspectRatio } from '@chakra-ui/react';
import { sanityClient, usePreviewSubscription } from '@/lib/sanity';
import { pageQuery } from '@/lib/queries';
import { useRouter } from 'next/router';
import Error from 'next/error';
import { Seo } from '@/components/common';
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
};

const AboutPage = ({ pageData }: Props) => {
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
		<>
			<Seo meta={page?.meta} />
			<Container as='section' maxW='container.xl' pt={20}>
				<Flex
					flexDirection='row'
					alignItems='flex-start'
					bgGradient={'linear(to-b, #373B44 , #4286f4)'}
					pt={20}
					pb={'8rem'}
					borderRadius='xl'
					px={10}
					position='relative'
					// overflow='hidden'
					width='full'
					shadow='dark-lg'
					// _before={{
					// 	content: '""',
					// 	position: 'absolute',
					// 	zIndex: '0',
					// 	left: 0,
					// 	top: 0,
					// 	width: '100%',
					// 	height: '100%',
					// 	opacity: 0.5,
					// 	backgroundImage: `url(${BrightSquares.src})`,
					// }}
				>
					<Box minH={250} zIndex='base' width='40%'>
						<Heading fontSize='5xl' color='white'>
							{page.heading}
						</Heading>
						{/* <Text mt={2} fontWeight='bold' fontSize='lg' color='whiteAlpha.800'>
							{page.subheading}
						</Text> */}
					</Box>
					<Box flexGrow={1} mb={'-14rem'}>
						<AspectRatio ratio={16 / 9}>
							<iframe src={'https://www.youtube.com/embed/M7YuI0PST2Y'} />
						</AspectRatio>
					</Box>
				</Flex>
			</Container>

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
	const pageData = await sanityClient.fetch<PageProps>(pageQuery, { type: 'about', slug: 'about' });

	if (!pageData) {
		return {
			notFound: true,
		};
	}

	return { props: { pageData }, revalidate: 60 };
};

export default AboutPage;
