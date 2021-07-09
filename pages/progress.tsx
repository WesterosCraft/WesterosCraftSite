import {
	Heading,
	Box,
	Flex,
	Stat,
	Text,
	HStack,
	StatLabel,
	StatNumber,
	StatHelpText,
	Container,
	CircularProgress,
	CircularProgressLabel,
	Center,
	SimpleGrid,
	Progress,
	Button,
	StatGroup,
	useColorModeValue,
} from '@chakra-ui/react';
import BrightSquares from '../public/bright-squares.png';
import { useRouter } from 'next/router';
import Error from 'next/error';
import { GetStaticProps } from 'next';
import { Seo, ProjectStatusIcon, RegionIcon } from '@/components/common';
import { sanityClient, urlFor, usePreviewSubscription } from '@/lib/sanity';
import { Sections } from '@/models/sections';
import { MetaFields } from '@/models/meta-fields';
import { Slug } from '@sanity/types';
import { progressQuery } from '@/lib/queries/page';
import Image from 'next/image';
import { calcCompletionPercentage } from 'utils';
import { Regions } from '@/models/utils';
import { nameFormatter } from '@/components/utils';

type PageProps = {
	meta?: MetaFields;
	heading?: string;
	slug: Slug;
	subheading?: string;
	caption?: string;
	title?: string;
	content?: Sections[];
	_createdAt: string;
	_id: 'progress';
	_rev: string;
	_type: 'progress';
	_updatedAt: string;
	heroImage?: { asset: { _ref: string } };
	totalBuilds: number;
	totalAbandoned: number;
	totalCompleted: number;
	totalInProgress: number;
	totalNotStarted: number;
	totalRedoInProgress: number;
	regions: {
		[key in Regions]: {
			totalAbandoned: number;
			totalCompleted: number;
			totalInProgress: number;
			totalNotStarted: number;
			totalRedoInProgress: number;
		};
	};
};

type Props = {
	pageData: PageProps;
};

const ProgressPage = ({ pageData }: Props) => {
	const router = useRouter();

	const { data: page } = usePreviewSubscription(progressQuery, {
		params: { type: 'progress', slug: pageData?.slug?.current },
		initialData: pageData,
		enabled: pageData && router.query.preview !== null,
	});
	console.log('👉 ~ ProgressPage ~ page', page);

	const TOTAL_PERCENTAGE_COMPLETED = calcCompletionPercentage(
		page.totalCompleted,
		page.totalInProgress + page.totalRedoInProgress,
		page.totalNotStarted + page.totalAbandoned
	);

	const BORDER_COLOR = useColorModeValue('gray.200', 'gray.600');

	function typedKeys<T>(o: T): (keyof T)[] {
		return Object.keys(o) as (keyof T)[];
	}

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
					overflow='hidden'
					width='full'
					shadow='dark-lg'
					_before={{
						content: '""',
						position: 'absolute',
						zIndex: '0',
						left: 0,
						top: 0,
						width: '100%',
						height: '100%',
						opacity: 0.5,
						backgroundImage: `url(${BrightSquares.src})`,
					}}
				>
					<Box minH={250} zIndex='base' width='50%'>
						<Heading fontSize='5xl' color='white'>
							{page.heading}
						</Heading>
						<Text mt={2} fontWeight='bold' fontSize='lg' color='whiteAlpha.800'>
							{page.subheading}
						</Text>
					</Box>
					<Center flexDirection='column' zIndex='base' flexGrow={1} flexShrink={1}>
						<CircularProgress capIsRound size='180px' value={TOTAL_PERCENTAGE_COMPLETED} color='green.400'>
							<CircularProgressLabel color='white' fontWeight='bold'>
								{TOTAL_PERCENTAGE_COMPLETED}%
							</CircularProgressLabel>
						</CircularProgress>
						<Heading mt={2} color='white' fontSize='3xl' textAlign='center'>
							Total project completion
						</Heading>
					</Center>
				</Flex>

				<HStack spacing={6} mt={-20} px={10}>
					<Stat bg='gray.600' p={4} borderRadius='lg'>
						<StatLabel fontWeight='bold' color='blue.500'>
							Total Builds
						</StatLabel>
						<StatNumber textAlign='left' color='white' fontSize='5xl'>
							{page.totalBuilds}
						</StatNumber>
						<StatHelpText color='whiteAlpha.900'>&nbsp;</StatHelpText>
						{/* <ProjectStatusIcon boxSize='32px' projectStatus='completed' /> */}
					</Stat>

					<Stat bg='gray.600' p={4} borderRadius='lg'>
						<StatLabel fontWeight='bold' color='blue.500'>
							Total Completed
						</StatLabel>
						<StatNumber color='white' fontSize='5xl'>
							{page.totalCompleted}
						</StatNumber>
						<StatHelpText color='whiteAlpha.900'>&nbsp;</StatHelpText>
					</Stat>

					<Stat bg='gray.600' p={4} borderRadius='lg'>
						<StatLabel fontWeight='bold' color='blue.500'>
							Total In Progress
						</StatLabel>
						<StatNumber color='white' fontSize='5xl'>
							{page.totalInProgress + page.totalRedoInProgress}
						</StatNumber>
						<StatHelpText color='whiteAlpha.900'>Including {page.totalRedoInProgress} Redos</StatHelpText>
					</Stat>

					<Stat bg='gray.600' p={4} borderRadius='lg'>
						<StatLabel fontWeight='bold' color='blue.500'>
							Total Not Started
						</StatLabel>
						<StatNumber color='white' fontSize='5xl'>
							{page.totalNotStarted + page.totalAbandoned}
						</StatNumber>
						<StatHelpText color='whiteAlpha.900'>Including {page.totalAbandoned} Abandoned</StatHelpText>
					</Stat>
				</HStack>

				<SimpleGrid columns={2} gap={6} my={20}>
					{typedKeys(page.regions).map((key, i) => (
						<Box
							borderWidth={1}
							borderColor={BORDER_COLOR}
							bg='white'
							height={250}
							p={4}
							key={i}
							borderRadius='lg'
							shadow='lg'
						>
							<Flex height='full' flexDirection='column' justifyContent='space-between'>
								<Flex flexDirection='row' alignItems='center'>
									<Heading mr={2} color='black'>
										{nameFormatter(key.toString())}
									</Heading>

									<RegionIcon boxSize='32px' region={key} />
									<Button ml='auto' colorScheme='blackAlpha' size='sm'>
										View All
									</Button>
								</Flex>
								<StatGroup>
									<Stat textAlign='center'>
										<StatLabel fontWeight='bold'>Completed</StatLabel>
										<StatNumber fontSize='5xl'>{page.regions[key].totalCompleted}</StatNumber>
									</Stat>
									<Stat textAlign='center'>
										<StatLabel fontWeight='bold'>In Progress</StatLabel>
										<StatNumber fontSize='5xl'>
											{page.regions[key].totalInProgress + page.regions[key].totalRedoInProgress}
										</StatNumber>
									</Stat>
									<Stat textAlign='center'>
										<StatLabel fontWeight='bold'>Not Started</StatLabel>
										<StatNumber fontSize='5xl'>
											{page.regions[key].totalNotStarted + page.regions[key].totalAbandoned}
										</StatNumber>
									</Stat>
								</StatGroup>

								<Progress
									size='md'
									colorScheme='orange'
									value={calcCompletionPercentage(
										page.regions[key].totalCompleted,
										page.regions[key].totalInProgress + page.regions[key].totalRedoInProgress,
										page.regions[key].totalNotStarted + page.regions[key].totalAbandoned
									)}
								/>
							</Flex>
						</Box>
					))}
				</SimpleGrid>
			</Container>
		</>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const pageData = await sanityClient.fetch<PageProps>(progressQuery, { type: 'progress', slug: 'progress' });

	if (!pageData) {
		return {
			notFound: true,
		};
	}

	return { props: { pageData }, revalidate: 60 };
};

export default ProgressPage;
