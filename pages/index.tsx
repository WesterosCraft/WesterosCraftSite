import { GetStaticProps } from 'next';
import Error from 'next/error';
import { useRouter } from 'next/router';
import { pageQuery } from '@/lib/queries';
import { sanityClient, usePreviewSubscription } from '@/lib/sanity';
import { RenderSection } from '@/components/utils';
import { Slug } from '@sanity/types';
import { Sections } from '@/models/sections';
import { MetaFields } from '@/models/meta-fields';
import { Heading, Text, Box, Button, Flex, useColorModeValue } from '@chakra-ui/react';
import { GiRaven } from 'react-icons/gi';
import ImageSlider from '@/components/sections/image-slider';
import { ImageSlider as IImageSlider } from '@/models/sections/image-slider';
import { Seo } from '@/components/common';

type PageProps = {
	content?: Sections[];
	meta?: MetaFields;
	heading1?: string;
	heading2?: string;
	heroSlider?: IImageSlider;
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
};

const Index = ({ pageData }: Props) => {
	const router = useRouter();

	const { data: page } = usePreviewSubscription(pageQuery, {
		params: { type: 'home', slug: pageData?.slug?.current },
		initialData: pageData,
		enabled: pageData && router.query.preview !== null,
	});

	const buttonColor = useColorModeValue('white', 'black');
	const buttonHover = useColorModeValue('blackAlpha.800', 'white');

	const subheadingColor = useColorModeValue('blackAlpha.800', 'whiteAlpha.700');

	if (!router.isFallback && !page) {
		return <Error statusCode={404} />;
	}

	return (
		<>
			<Seo meta={page?.meta} />
			<Box as='section' className='hero__section'>
				<Box userSelect='none' textAlign='center' mt={5}>
					<Text
						fontSize='xl'
						textTransform='uppercase'
						fontWeight='bold'
						color='green.500'
						bgGradient='linear(to-l, #238542,#007B59)'
						bgClip='text'
					>
						{page.caption}
					</Text>
					<Heading mt={4} as='h2' fontSize='5xl' fontWeight={800}>
						{page.heading2}
					</Heading>
					<Heading as='h1' fontSize='7xl' letterSpacing={5.3} fontWeight={800}>
						{page.heading1}
					</Heading>
					<Text color={subheadingColor} fontSize='xl' mb='6'>
						{page.subheading}
					</Text>
					<Button
						zIndex='docked'
						mb={8}
						size='lg'
						leftIcon={<GiRaven size={20} />}
						display={{ base: 'none', md: 'inline-flex' }}
						fontSize={'md'}
						fontWeight={600}
						color={buttonColor}
						bg={buttonHover}
						href={'#'}
						_hover={{
							color: 'white',
							bg: 'blackAlpha.700',
						}}
					>
						Join The Watch
					</Button>
				</Box>
				{page.heroSlider?.slideItems && (
					<>
						<Flex justify='center' align='center' flexDirection='column' position='relative'>
							<ImageSlider width={958} height={555} images={page.heroSlider?.slideItems} />
						</Flex>
						<Button
							mt={4}
							display={['inline-flex', null, 'none']}
							size='lg'
							leftIcon={<GiRaven size={20} />}
							fontSize={'md'}
							fontWeight={600}
							color={buttonColor}
							bg={buttonHover}
							href={'#'}
							_hover={{
								color: 'white',
								bg: 'blackAlpha.700',
							}}
						>
							Join The Watch
						</Button>
					</>
				)}
			</Box>

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
	const pageData = await sanityClient.fetch<PageProps>(pageQuery, { type: 'home', slug: 'homepage' });

	if (!pageData) {
		return {
			notFound: true,
		};
	}

	return { props: { pageData }, revalidate: 60 };
};

export default Index;
