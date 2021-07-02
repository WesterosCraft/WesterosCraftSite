import { Flex, Box, Heading } from '@chakra-ui/react';
import Image from 'next/image';

const myLoader = ({ src, width }: { src: string; width: number | string }) => {
	return `${src}?fit=crop&h=${width}&w=${width}&q=100`;
};

const DEFAULT_BLUR =
	'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAALABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAMHAgj/xAAjEAACAgIBAgcAAAAAAAAAAAABAgADBBEGBRIhIjFBUmFx/8QAFgEBAQEAAAAAAAAAAAAAAAAAAQID/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQIAMf/aAAwDAQACEQMRAD8A5t6bvGvoyq389bBwPsSpch5zXZx9WxwDl3V9pX4H3MkdBOo97GYAFiQIFVPHbRQCZNqszltEk+J/YTLMd+phDRv/2Q==';

type Props = {
	imageSrc?: string;
	blurDataURL: string;
	name?: string;
};

const SimpleDestinationCard = ({ imageSrc, blurDataURL = DEFAULT_BLUR, name }: Props) => {
	return (
		<Box
			position='relative'
			overflow='hidden'
			minW='350px'
			className='embla__slide'
			mr={3}
			borderRadius='lg'
			shadow='lg'
		>
			<Box className='embla__slide__inner' position='relative' overflow='hidden' width={350} height={350}>
				<Image
					src={imageSrc!}
					blurDataURL={blurDataURL}
					placeholder='blur'
					loader={myLoader}
					width={350}
					height={350}
					className='embla__slide__img'
					alt={name || 'WesterosCraft Location'}
				/>
			</Box>
			{name && (
				<Flex
					flexDirection='row'
					align='center'
					bg='whiteAlpha.800'
					width={350}
					borderTopLeftRadius={0}
					borderTopRightRadius={0}
					borderBottomLeftRadius='lg'
					borderBottomRightRadius='lg'
					position='absolute'
					bottom={0}
					left={0}
				>
					<Box p={3}>
						<Heading size='md' color='black'>
							{name}
						</Heading>
					</Box>
				</Flex>
			)}
		</Box>
	);
};

export default SimpleDestinationCard;
