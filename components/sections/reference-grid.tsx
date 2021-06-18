import { IReferenceGrid } from '@/models/sections/reference-grid';
import { Box, Heading, Text, SimpleGrid, Flex, HStack, Center } from '@chakra-ui/react';
import { getFontSize } from '../utils/helpers';
import Image from 'next/image';
import { DestinationCard } from '../common';

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
			<SimpleGrid templateColumns={['repeat(1, 1fr)', 'repeat(2, minmax(0px, 1fr))']} gap={5}>
				{data.gridItems.map((item, i) => (
					<DestinationCard
						key={i}
						imageUrl={item.images?.url!}
						blurDataUrl={item.images?.metadata?.lqip!}
						name={item.name}
					/>
				))}
			</SimpleGrid>
		</Box>
	);
};

export default ReferenceGrid;
