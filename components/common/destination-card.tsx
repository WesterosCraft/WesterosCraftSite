import { Box, Heading, Text, SimpleGrid, Flex, HStack, Center } from '@chakra-ui/react';
import Image from 'next/image';

const myLoader = ({ src, width }: { src: string; width: number | string }) => {
	return `${src}?h=${width}&w=${width}&q=75`;
};

type Props = {
	imageUrl?: string;
	blurDataUrl?: string;
	name: string;
};

const DestinationCard = ({ imageUrl, blurDataUrl, name }: Props) => {
	return (
		<Center>
			<Flex direction='column' shadow='md' borderRadius='base' overflow='hidden'>
				<Box flex='1 1 0%'>
					{imageUrl && (
						<Image
							src={imageUrl!}
							blurDataURL={blurDataUrl!}
							loader={myLoader}
							placeholder='blur'
							width={416}
							height={238}
							alt={name}
						/>
					)}
				</Box>
				<HStack></HStack>
				<Text>{name}</Text>
			</Flex>
		</Center>
	);
};

export default DestinationCard;
