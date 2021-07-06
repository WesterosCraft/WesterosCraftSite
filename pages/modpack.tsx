import { GetStaticProps } from 'next';
import {
	Heading,
	Center,
	Box,
	SimpleGrid,
	Text,
	Flex,
	Button,
	Container,
	AspectRatio,
	ButtonGroup,
	IconButton,
} from '@chakra-ui/react';
import { sanityClient, usePreviewSubscription } from '@/lib/sanity';
import { pageQuery } from '@/lib/queries';
import { useRouter } from 'next/router';
import Error from 'next/error';
import { Seo } from '@/components/common';
import { Sections } from '@/models/sections';
import { MetaFields } from '@/models/meta-fields';
import { Slug } from '@sanity/types';
import { RenderSection } from '@/components/utils';
import Image from 'next/image';
import { FiDownload } from 'react-icons/fi';

type PageProps = {
	content?: Sections[];
	meta?: MetaFields;
	heading?: string;
	slug: Slug;
	_createdAt: string;
	_id: 'modpack';
	_rev: string;
	_type: 'modpack';
	_updatedAt: string;
};

type Props = {
	pageData: PageProps;
};

const myLoader = ({ src, width }: { src: string; width: number | string }) => {
	return `${src}?fit=crop&w=${width}&q=75`;
};

const ModpackPage = ({ pageData }: Props) => {
	const router = useRouter();

	const { data: page } = usePreviewSubscription(pageQuery, {
		params: { type: 'modpack', slug: pageData?.slug?.current },
		initialData: pageData,
		enabled: pageData && router.query.preview !== null,
	});

	if (!router.isFallback && !page) {
		return <Error statusCode={404} />;
	}

	return (
		<>
			<Seo meta={page?.meta} />
			<Box as='section' position='relative'>
				<Container maxW='container.xl' centerContent>
					<Heading textAlign='center' mt={[12]}>
						Modpack
					</Heading>
					<Center width='full' maxW={1024} bg='gray.600' borderRadius='lg' flexDirection='column'>
						<Box bg='gray.200' height={250}>
							<Text>right</Text>
						</Box>
						<Box bg='gray.500' width='full'>
							<Center flexDirection='column'>
								<ButtonGroup size='lg' isAttached variant='solid' colorScheme='orange'>
									<Button mr='-px'>Download</Button>
									<IconButton aria-label='Download Modpack' icon={<FiDownload />} />
								</ButtonGroup>
								<Text>Current Forge Version</Text>
							</Center>
						</Box>
					</Center>
				</Container>

				{page?.content?.map((section) => {
					if (!section || Object.keys(section).length === 0) {
						return null;
					}

					return <RenderSection key={section._key} section={section} />;
				})}
			</Box>
		</>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const pageData = await sanityClient.fetch<PageProps>(pageQuery, { type: 'modpack', slug: 'modpack' });

	if (!pageData) {
		return {
			notFound: true,
		};
	}

	return { props: { pageData }, revalidate: 60 };
};

export default ModpackPage;
