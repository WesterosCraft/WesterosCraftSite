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
	Grid,
	GridItem,
	VStack,
	Tabs,
	TabList,
	TabPanels,
	Tab,
	TabPanel,
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
import { BuildStatuses, Regions } from '@/models/utils';
import { nameFormatter, RenderSection } from '@/components/utils';

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
	totalBuilds: Array<{ region: keyof typeof Regions; projectStatus: keyof typeof BuildStatuses }>;
	// totalAbandoned: number;
	// totalCompleted: number;
	// totalInProgress: number;
	// totalNotStarted: number;
	// totalRedoInProgress: number;
	// regions: {
	// 	[key in Regions]: {
	// 		totalAbandoned: number;
	// 		totalCompleted: number;
	// 		totalInProgress: number;
	// 		totalNotStarted: number;
	// 		totalRedoInProgress: number;
	// 	};
	// };
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

	const returnLength = (
		key: 'projectStatus' | 'region',
		target: keyof typeof Regions | keyof typeof BuildStatuses,
		key2?: 'projectStatus' | 'region',
		target2?: keyof typeof Regions | keyof typeof BuildStatuses
	) => {
		return key && key2 && target && target2
			? page.totalBuilds.filter((b) => b[key] === target && b[key2] === target2).length
			: page.totalBuilds.filter((b) => b[key] === target).length;
	};
	const TOTAL_PERCENTAGE_COMPLETED = calcCompletionPercentage(
		returnLength('projectStatus', 'completed'),
		returnLength('projectStatus', 'inProgress') + returnLength('projectStatus', 'redoInProgress'),
		returnLength('projectStatus', 'notStarted') + returnLength('projectStatus', 'abandoned')
	);

	const BORDER_COLOR = useColorModeValue('gray.200', 'gray.600');

	function typedKeys<T>(o: T): (keyof T)[] {
		return Object.keys(o) as (keyof T)[];
	}

	const regions = [
		'crownlands',
		'theWall',
		'dorne',
		'riverlands',
		'north',
		'vale',
		'ironIslands',
		'westerlands',
		'stormlands',
		'reach',
		'beyondTheWall',
	];

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
							{page.totalBuilds.length}
						</StatNumber>
						<StatHelpText color='whiteAlpha.900'>&nbsp;</StatHelpText>
						{/* <ProjectStatusIcon boxSize='32px' projectStatus='completed' /> */}
					</Stat>

					<Stat bg='gray.600' p={4} borderRadius='lg'>
						<StatLabel fontWeight='bold' color='blue.500'>
							Total Completed
						</StatLabel>
						<StatNumber color='white' fontSize='5xl'>
							{returnLength('projectStatus', 'completed')}
						</StatNumber>
						<StatHelpText color='whiteAlpha.900'>&nbsp;</StatHelpText>
					</Stat>

					<Stat bg='gray.600' p={4} borderRadius='lg'>
						<StatLabel fontWeight='bold' color='blue.500'>
							Total In Progress
						</StatLabel>
						<StatNumber color='white' fontSize='5xl'>
							{returnLength('projectStatus', 'inProgress') + returnLength('projectStatus', 'redoInProgress')}
						</StatNumber>
						<StatHelpText color='whiteAlpha.900'>
							Including {returnLength('projectStatus', 'redoInProgress')} Redos
						</StatHelpText>
					</Stat>

					<Stat bg='gray.600' p={4} borderRadius='lg'>
						<StatLabel fontWeight='bold' color='blue.500'>
							Total Not Started
						</StatLabel>
						<StatNumber color='white' fontSize='5xl'>
							{returnLength('projectStatus', 'notStarted') + returnLength('projectStatus', 'abandoned')}
						</StatNumber>
						<StatHelpText color='whiteAlpha.900'>
							Including {returnLength('projectStatus', 'abandoned')} Abandoned
						</StatHelpText>
					</Stat>
				</HStack>

				<Container maxW='container.xl'>
					<Tabs orientation='vertical' my={24} borderWidth={1} borderColor={BORDER_COLOR}>
						<TabList>
							{(regions as Regions[]).map((region, i) => (
								<Tab key={i}>
									<Heading fontSize='sm' mr={2} color='black'>
										{nameFormatter(region.toString())}
									</Heading>
								</Tab>
							))}
						</TabList>
						<TabPanels>
							{(regions as Regions[]).map((region, i) => (
								<TabPanel key={i} bg='gray.100' height='full'>
									<Flex direction='column' p={4}>
										<Heading textAlign='center' fontSize='2xl' mr={2} color='black'>
											{nameFormatter(region.toString())}
										</Heading>
										<Progress
											size='md'
											colorScheme='orange'
											value={calcCompletionPercentage(
												returnLength('projectStatus', 'completed', 'region', region),
												returnLength('projectStatus', 'inProgress', 'region', region) +
													returnLength('projectStatus', 'redoInProgress', 'region', region),
												returnLength('projectStatus', 'notStarted', 'region', region) +
													returnLength('projectStatus', 'abandoned', 'region', region)
											)}
										/>
										<StatGroup flexGrow={1}>
											{['completed', 'inProgress', 'notStarted'].map((s: any) => (
												<Stat key={s} px={6} py={4} textAlign='left' bg='white' borderRadius='md' mr={4}>
													<StatLabel fontWeight='bold'>
														<Flex direction='row' alignItems='center'>
															<ProjectStatusIcon boxSize='20px' projectStatus={s} />
															<Text fontSize='md' ml={2}>
																{nameFormatter(s)}
															</Text>
														</Flex>
													</StatLabel>
													<StatNumber fontSize='5xl'>{returnLength('projectStatus', s, 'region', region)}</StatNumber>
												</Stat>
											))}
										</StatGroup>
									</Flex>
								</TabPanel>
							))}
						</TabPanels>
					</Tabs>
				</Container>

				{/* <Container maxW='container.lg' my={24}>
					<VStack spacing={6}>
						{(regions as Regions[]).map((region, i) => (
							<Box
								borderWidth={1}
								borderColor={BORDER_COLOR}
								bg='white'
								p={4}
								key={i}
								borderRadius='lg'
								shadow='lg'
								width='full'
							>
								<Flex height='full' flexDirection='column' justifyContent='space-between'>
									<Flex flexDirection='row' alignItems='center'>
										<Heading fontSize='3xl' mr={2} color='black'>
											{nameFormatter(region.toString())}
										</Heading>
										<RegionIcon boxSize='32px' region={region} />
										<Button ml='auto' colorScheme='blackAlpha' size='sm'>
											View All
										</Button>
									</Flex>
									<StatGroup>
										<Stat textAlign='center'>
											<StatLabel fontWeight='bold'>Completed</StatLabel>
											<StatNumber fontSize='5xl'>
												{returnLength('projectStatus', 'completed', 'region', region)}
											</StatNumber>
										</Stat>
										<Stat textAlign='center'>
											<StatLabel fontWeight='bold'>In Progress</StatLabel>
											<StatNumber fontSize='5xl'>
												{returnLength('projectStatus', 'inProgress', 'region', region) +
													returnLength('projectStatus', 'redoInProgress', 'region', region)}
											</StatNumber>
										</Stat>
										<Stat textAlign='center'>
											<StatLabel fontWeight='bold'>Not Started</StatLabel>
											<StatNumber fontSize='5xl'>
												{returnLength('projectStatus', 'notStarted', 'region', region) +
													returnLength('projectStatus', 'abandoned', 'region', region)}
											</StatNumber>
										</Stat>
									</StatGroup>

									<Progress
										size='md'
										colorScheme='orange'
										value={calcCompletionPercentage(
											returnLength('projectStatus', 'completed', 'region', region),
											returnLength('projectStatus', 'inProgress', 'region', region) +
												returnLength('projectStatus', 'redoInProgress', 'region', region),
											returnLength('projectStatus', 'notStarted', 'region', region) +
												returnLength('projectStatus', 'abandoned', 'region', region)
										)}
									/>
								</Flex>
							</Box>
						))}
					</VStack>
				</Container> */}
				{page?.content?.map((section) => {
					if (!section || Object.keys(section).length === 0) {
						return null;
					}

					return <RenderSection key={section._key} section={section} />;
				})}
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
