import { IReferenceGrid } from '@/models/sections/reference-grid';
import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import { getFontSize } from '../utils/helpers';
import { DestinationCard } from '@/components/common';

type Props = {
	data: IReferenceGrid;
};

const ReferenceGrid = ({ data }: Props) => {
	console.log('👉 ~ ReferenceGrid ~ data', data);
	return (
		<Box>
			<Heading as={data?.headingSize ?? 'h2'} fontSize={getFontSize(data?.headingSize)} mb={8} fontWeight={800}>
				{data?.heading || ''}
			</Heading>
			<SimpleGrid
				templateColumns={['repeat(1, 1fr)', 'repeat(2, minmax(0px, 1fr))', null, 'repeat(3, minmax(0px, 1fr))']}
				gap={4}
			>
				{data.gridItems.map((item, i) => (
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
						url={`${item.region}/${item.slug?.current}`}
					/>
				))}
			</SimpleGrid>
		</Box>
	);
};

export default ReferenceGrid;
