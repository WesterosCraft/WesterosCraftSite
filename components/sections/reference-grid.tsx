import { IReferenceGrid } from '@/models/sections/reference-grid';
import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import { getFontSize } from '../utils/helpers';
import { DestinationCard } from '@/components/common';
import { IProjectDetails } from '@/models/objects/project-details';
import { kebabCase, snakeCase } from 'lodash';

type Props = {
	data: IReferenceGrid;
	additionalData?: {
		updatedDestinations: Array<IProjectDetails>;
		createdDestinations: Array<IProjectDetails>;
	};
};

const ReferenceGrid = ({ data, additionalData }: Props) => {
	return (
		<Box>
			<Heading as={data?.headingSize ?? 'h2'} fontSize={getFontSize(data?.headingSize)} mb={7} fontWeight={800}>
				{data?.heading || ''}
			</Heading>
			<SimpleGrid
				gridAutoRows='1fr'
				templateColumns={['repeat(1, 1fr)', 'repeat(2, minmax(0px, 1fr))', null, 'repeat(3, minmax(0px, 1fr))']}
				gap={4}
			>
				{data.gridOptions === 'recentlyCreated' &&
					additionalData?.createdDestinations &&
					additionalData?.createdDestinations.map((item, i) => (
						<DestinationCard
							key={i}
							imageUrl={item.images?.url!}
							blurDataUrl={item.images?.metadata?.lqip!}
							name={item.name}
							entry={item.entry}
							house={item.house}
							region={item.region}
							status={item.projectStatus}
							buildType={item.buildType}
							url={`wiki/${kebabCase(item.region)}/${item.slug?.current}`}
						/>
					))}
				{data.gridOptions === 'recentlyUpdated' &&
					additionalData?.updatedDestinations &&
					additionalData?.updatedDestinations.map((item, i) => (
						<DestinationCard
							key={i}
							imageUrl={item.images?.url!}
							blurDataUrl={item.images?.metadata?.lqip!}
							name={item.name}
							entry={item.entry}
							house={item.house}
							region={item.region}
							status={item.projectStatus}
							buildType={item.buildType}
							url={`wiki/${kebabCase(item.region)}/${item.slug?.current}`}
						/>
					))}
				{data.gridItems?.map((item, i) => (
					<DestinationCard
						key={i}
						imageUrl={item.images?.url!}
						blurDataUrl={item.images?.metadata?.lqip!}
						name={item.name}
						entry={item.entry}
						house={item.house}
						region={item.region}
						status={item.projectStatus}
						buildType={item.buildType}
						url={`wiki/${kebabCase(item.region)}/${item.slug?.current}`}
					/>
				))}
			</SimpleGrid>
		</Box>
	);
};

export default ReferenceGrid;
