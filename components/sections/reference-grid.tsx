import { IReferenceGrid } from '@/models/sections/reference-grid';
import { Box, Heading, Text, SimpleGrid, Flex, HStack, Center } from '@chakra-ui/react';
import { getFontSize } from '../utils/helpers';
import Image from 'next/image';

type Props = {
	data: IReferenceGrid;
};

const myLoader = ({ src, width }: { src: string; width: number | string }) => {
	return `${src}?h=${width}&w=${width}&q=75`;
};

const ReferenceGrid = ({ data }: Props) => {
	console.log('👉 ~ ReferenceGrid ~ data', data);
	return (
		<Box>
			<Heading as={data?.headingSize ?? 'h2'} fontSize={getFontSize(data?.headingSize)} mb={8} fontWeight={800}>
				{data?.heading || ''}
			</Heading>
			<SimpleGrid templateColumns='repeat(2, minmax(0px, 1fr))' gap={10}>
				{data.gridItems.map((item, i) => (
					<Center key={i}>
						<Flex direction='column' shadow='md' borderRadius='base' overflow='hidden'>
							<Box flex='1 1 0%'>
								{item.images?.url && (
									<Image
										src={item.images?.url!}
										blurDataURL={item.images.metadata?.lqip!}
										loader={myLoader}
										placeholder='blur'
										width={416}
										height={240}
										alt={item.name}
									/>
								)}
							</Box>
							<HStack></HStack>
							<Text>{item.name}</Text>
						</Flex>
					</Center>
				))}
			</SimpleGrid>
		</Box>
	);
};

export default ReferenceGrid;
