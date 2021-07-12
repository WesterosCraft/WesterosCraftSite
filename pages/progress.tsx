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
	useBreakpointValue,
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
import { ResponsiveBar } from '@nivo/bar';
import { Spacer } from '@/components/sections';

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

	const chartOrientation = useBreakpointValue({ base: 'horizontal', md: 'vertical' }) as 'horizontal' | 'vertical';

	const BORDER_COLOR = useColorModeValue('gray.200', 'gray.600');

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
				<Spacer data={{ _type: 'spacer', _key: 'sadasd', size: 'xlarge', mobileSize: 'none' }} />
				<Box height={650}>
					<ResponsiveBar
						data={(regions as Regions[]).map((r) => ({
							region: nameFormatter(r),
							Completed: returnLength('projectStatus', 'completed', 'region', r),
							CompletedColor: 'hsl(108, 70%, 50%)',
							'Not Started': returnLength('projectStatus', 'notStarted', 'region', r),
							'Not StartedColor': 'hsl(302, 70%, 50%)',
							'In Progress': returnLength('projectStatus', 'inProgress', 'region', r),
							'In ProgressColor': 'hsl(296, 70%, 50%)',
							'Redo in Progress': returnLength('projectStatus', 'redoInProgress', 'region', r),
							'Redo in ProgressColor': 'hsl(137, 70%, 50%)',
							Abandoned: returnLength('projectStatus', 'abandoned', 'region', r),
							AbandonedColor: 'hsl(18, 70%, 50%)',
						}))}
						keys={['Completed', 'Not Started', 'In Progress', 'Redo in Progress', 'Abandoned']}
						indexBy='region'
						margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
						padding={0.3}
						layout={chartOrientation}
						valueScale={{ type: 'linear' }}
						indexScale={{ type: 'band', round: true }}
						theme={{
							axis: {
								legend: { text: { fontWeight: 'bold' } },
							},
						}}
						borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
						axisTop={undefined}
						axisRight={undefined}
						axisBottom={{
							tickSize: 5,
							tickPadding: 5,
							tickRotation: 0,
							legend: 'Region',
							legendPosition: 'middle',
							legendOffset: 40,
						}}
						axisLeft={{
							tickSize: 5,
							tickPadding: 5,
							tickRotation: 0,
							legend: 'Number of Builds',
							legendPosition: 'middle',
							legendOffset: -40,
						}}
						labelSkipWidth={12}
						labelSkipHeight={12}
						labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
						legends={[
							{
								dataFrom: 'keys',
								anchor: 'bottom-right',
								direction: 'column',
								justify: false,
								translateX: 120,
								translateY: 0,
								itemsSpacing: 2,
								itemWidth: 100,
								itemHeight: 20,
								itemDirection: 'left-to-right',
								itemOpacity: 0.85,
								symbolSize: 20,
								effects: [
									{
										on: 'hover',
										style: {
											itemOpacity: 1,
										},
									},
								],
							},
						]}
					/>
				</Box>

				{/* <Conta

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
