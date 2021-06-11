import { useMemo } from 'react';
import { Heading, Flex, Text, Box, Select } from '@chakra-ui/react';
// import { ProgressTable } from '../components/organisms/progressTable/progressTable';
// import { completionPercentage, getDestinationLevel, camelCaseFormatter } from '../utils/helpers';
import { IoIosArrowDropdown } from 'react-icons/io';
import { useRouter } from 'next/router';
import Error from 'next/error';
import { GetStaticProps } from 'next';
import { pageQuery, siteSettingsQuery } from '@/lib/queries';
import { SiteSettings } from '@/models/site-settings';
import { Layout } from '@/components/common';
import { sanityClient, usePreviewSubscription } from '@/lib/sanity';
import { RenderSection } from '@/components/utils';
import { Sections } from '@/models/sections';
import { MetaFields } from '@/models/meta-fields';
import { Slug } from '@sanity/types';

// const RegionProgress = ({ children, percent = 40 }) => (
// 	<Flex flexDirection={['column', 'row']} width={1} my={1}>
// 		<Text fontWeight='bold' fontFamily='heading' width={200}>
// 			{children || ''}
// 		</Text>
// 		<Progress percent={percent} theme={theme} />
// 	</Flex>
// );

// const query = `*[_type == "progress"]`;
// const destinationQuery = `*[_type == "destination"]`;

type PageProps = {
	content?: Sections[];
	meta?: MetaFields;
	heading?: string;
	slug: Slug;
	subheading?: string;
	caption?: string;
	title?: string;
	editions?: any;
	_createdAt: string;
	_id: 'rookery';
	_rev: string;
	_type: 'rookery';
	_updatedAt: string;
};

type Props = {
	pageData: PageProps;
	siteSettings: SiteSettings;
};

const ProgressPage = ({ pageData, siteSettings }: Props) => {
	const router = useRouter();

	const { data: page } = usePreviewSubscription(pageQuery, {
		params: { type: 'progress', slug: pageData?.slug?.current },
		initialData: pageData,
		enabled: pageData && router.query.preview !== null,
	});

	// const totalComplete = destinationData.filter((item) => item.projectStatus === 'completed');
	// const totalInProgress = destinationData.filter(
	// 	(item) => item.projectStatus === 'inProgress' || item.projectStatus === 'redoInProgress'
	// );
	// const totalNotStarted = destinationData.filter(
	// 	(item) => item.projectStatus === 'abandoned' || item.projectStatus === 'notStarted'
	// );

	// // Overall percentage //
	// const levelComplete = totalComplete.reduce((a, b) => {
	// 	return a + getDestinationLevel(b.difficultyLevel);
	// }, 0);

	// const levelInProgress = totalInProgress.reduce((a, b) => {
	// 	return a + getDestinationLevel(b.difficultyLevel);
	// }, 0);

	// const levelNotStarted = totalNotStarted.reduce((a, b) => {
	// 	return a + getDestinationLevel(b.difficultyLevel);
	// }, 0);

	// const regionLevelComplete = (region) =>
	// 	totalComplete
	// 		.filter((item) => item.region === region)
	// 		.reduce((a, b) => {
	// 			return a + getDestinationLevel(b.difficultyLevel);
	// 		}, 0);

	// const regionLevelInProgress = (region) =>
	// 	totalInProgress
	// 		.filter((item) => item.region === region)
	// 		.reduce((a, b) => {
	// 			return a + getDestinationLevel(b.difficultyLevel);
	// 		}, 0);

	// const regionLevelNotStarted = (region) =>
	// 	totalNotStarted
	// 		.filter((item) => item.region === region)
	// 		.reduce((a, b) => {
	// 			return a + getDestinationLevel(b.difficultyLevel);
	// 		}, 0);

	// // Region percentages //

	// const TOTAL_PERCENTAGE = completionPercentage(levelComplete, levelInProgress, levelNotStarted);
	// const TOTAL_DORNE_PERCENTAGE = completionPercentage(
	// 	regionLevelComplete('dorne'),
	// 	regionLevelInProgress('dorne'),
	// 	regionLevelNotStarted('dorne')
	// );
	// const TOTAL_WESTERLANDS_PERCENTAGE = completionPercentage(
	// 	regionLevelComplete('westerlands'),
	// 	regionLevelInProgress('westerlands'),
	// 	regionLevelNotStarted('westerlands')
	// );
	// const TOTAL_CROWNLANDS_PERCENTAGE = completionPercentage(
	// 	regionLevelComplete('crownlands'),
	// 	regionLevelInProgress('crownlands'),
	// 	regionLevelNotStarted('crownlands')
	// );
	// const TOTAL_REACH_PERCENTAGE = completionPercentage(
	// 	regionLevelComplete('reach'),
	// 	regionLevelInProgress('reach'),
	// 	regionLevelNotStarted('reach')
	// );
	// const TOTAL_STORMLANDS_PERCENTAGE = completionPercentage(
	// 	regionLevelComplete('stormlands'),
	// 	regionLevelInProgress('stormlands'),
	// 	regionLevelNotStarted('stormlands')
	// );
	// const TOTAL_VALE_PERCENTAGE = completionPercentage(
	// 	regionLevelComplete('vale'),
	// 	regionLevelInProgress('vale'),
	// 	regionLevelNotStarted('vale')
	// );
	// const TOTAL_WALL_PERCENTAGE = completionPercentage(
	// 	regionLevelComplete('theWall'),
	// 	regionLevelInProgress('theWall'),
	// 	regionLevelNotStarted('theWall')
	// );
	// const TOTAL_NORTH_PERCENTAGE = completionPercentage(
	// 	regionLevelComplete('north'),
	// 	regionLevelInProgress('north'),
	// 	regionLevelNotStarted('north')
	// );
	// const TOTAL_BEYONDTHEWALL_PERCENTAGE = completionPercentage(
	// 	regionLevelComplete('beyondTheWall'),
	// 	regionLevelInProgress('beyondTheWall'),
	// 	regionLevelNotStarted('beyondTheWall')
	// );
	// const TOTAL_RIVERLANDS_PERCENTAGE = completionPercentage(
	// 	regionLevelComplete('riverlands'),
	// 	regionLevelInProgress('riverlands'),
	// 	regionLevelNotStarted('riverlands')
	// );
	// const TOTAL_IRONISLANDS_PERCENTAGE = completionPercentage(
	// 	regionLevelComplete('ironIslands'),
	// 	regionLevelInProgress('ironIslands'),
	// 	regionLevelNotStarted('ironIslands')
	// );

	// const { countUp } = useCountUp({ start: 0, end: TOTAL_PERCENTAGE, duration: 2.5 });

	// function SelectColumnFilter({ column: { filterValue, setFilter, preFilteredRows, id } }) {
	// 	// Calculate the options for filtering
	// 	// using the preFilteredRows
	// 	const options = React.useMemo(() => {
	// 		const options = new Set();
	// 		preFilteredRows.forEach((row) => {
	// 			options.add(row.values[id]);
	// 		});
	// 		return [...options.values()];
	// 	}, [id, preFilteredRows]);

	// 	// Render a multi-select box
	// 	return (
	// 		<Flex
	// 			flexDirection='row'
	// 			alignItems='center'
	// 			sx={{
	// 				position: 'relative',
	// 				width: '20px',
	// 				height: '20px',
	// 				select: {
	// 					'&::placeholder': {
	// 						color: 'transparent',
	// 					},
	// 				},
	// 			}}
	// 		>
	// 			<IoIosArrowDropdown
	// 				className='progress-icon'
	// 				size='20px'
	// 				style={{ position: 'absolute', top: 0, left: 0, zIndex: 2, marginLeft: '4px' }}
	// 			/>
	// 			<Box className='select-wrapper' sx={{ svg: { display: 'none' } }}>
	// 				<Select
	// 					sx={{
	// 						zIndex: 3,
	// 						background: 'transparent',
	// 						cursor: 'pointer',
	// 						WebkitAppearance: 'none',
	// 						position: 'absolute',
	// 						top: 0,
	// 						left: 0,
	// 						width: 20,
	// 						height: 20,
	// 						boxShadow: 'none',
	// 						border: '0',
	// 						'&:focus': {
	// 							outline: 'none',
	// 						},
	// 					}}
	// 					value={filterValue}
	// 					onChange={(e) => {
	// 						setFilter(e.target.value || undefined);
	// 					}}
	// 				>
	// 					<option value=''>All</option>
	// 					{options.map((option, i) => (
	// 						<option key={i} value={option}>
	// 							{camelCaseFormatter(option)}
	// 						</option>
	// 					))}
	// 				</Select>
	// 			</Box>
	// 		</Flex>
	// 	);
	// }

	// const columns = useMemo(
	// 	() => [
	// 		{
	// 			Header: 'Level',
	// 			accessor: 'difficultyLevel',
	// 			width: 64,
	// 		},
	// 		{
	// 			Header: 'Destination',
	// 			accessor: 'name',
	// 		},
	// 		{
	// 			Header: 'Region',
	// 			accessor: 'region',
	// 			Filter: SelectColumnFilter,
	// 			filter: 'includes',
	// 			defaultCanFilter: true,
	// 		},
	// 		{
	// 			Header: 'Status',
	// 			accessor: 'projectStatus',
	// 			Filter: SelectColumnFilter,
	// 			filter: 'includes',
	// 			defaultCanFilter: true,
	// 		},
	// 		{
	// 			Header: 'Type',
	// 			accessor: 'buildType',
	// 			Filter: SelectColumnFilter,
	// 			filter: 'includes',
	// 			defaultCanFilter: true,
	// 		},
	// 		{
	// 			Header: 'House',
	// 			accessor: 'house',
	// 		},
	// 		{
	// 			Header: 'Warp',
	// 			accessor: 'warp',
	// 		},
	// 	],
	// 	[]
	// );

	if (!router.isFallback && !page) {
		return <Error statusCode={404} />;
	}

	return (
		<Layout meta={page?.meta} siteSettings={siteSettings}>
			<Heading variant='heading2' textAlign='center' px={5}>
				{page.heading}
			</Heading>
			<Heading variant='heading4' textAlign='center' maxWidth={756} mx='auto' px={5}>
				{page.subheading}
			</Heading>

			{/* <ProgressTable columns={columns} data={destinationData} /> */}
		</Layout>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const pageData = await sanityClient.fetch<PageProps>(pageQuery, { type: 'progress', slug: 'progress' });
	const siteSettings = await sanityClient.fetch<SiteSettings>(siteSettingsQuery);

	if (!pageData) {
		return {
			notFound: true,
		};
	}

	return { props: { siteSettings, pageData }, revalidate: 60 };
};

export default ProgressPage;
