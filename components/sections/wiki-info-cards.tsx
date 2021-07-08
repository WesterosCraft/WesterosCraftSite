import { IWikiInfoCards } from '@/models/sections/wiki-info-cards';
import { SimpleGrid, Box, Heading, Text, Button, Tooltip, Flex } from '@chakra-ui/react';
import Image from 'next/image';

type Props = {
	data: IWikiInfoCards;
};

const myLoader = ({ src, width }: { src: string; width: number | string }) => {
	return `${src}?h=156&w=${width}&q=100&fit=min`;
};

const WikiInfoCards = ({ data }: Props) => {
	console.log('👉 ~ WikiInfoCards ~ data', data);

	const colorSchemes = [
		'linear(rgb(237, 33, 58, .85) , rgb(147, 41, 30, .85) )',
		'linear(rgb(0, 180, 219, .85) , rgb(0, 131, 176, .85) )',
		'linear(rgb(253, 200, 48, .85) , rgb(243, 115, 53, .85) )',
	];
	return (
		<SimpleGrid columns={[1, 2, null, 3]} spacing={5}>
			{data.infoCards?.map((card, i) => (
				<Flex
					shadow='lg'
					className='wiki-info-card'
					flexDirection='column'
					justifyContent='space-between'
					mx='auto'
					maxW={312}
					p={6}
					borderRadius='lg'
					bg='gray.800'
					bgGradient={colorSchemes[i]}
					key={card._key}
					overflow='hidden'
				>
					<Box>
						<Heading color='white' fontSize='xl'>
							{card.heading}
						</Heading>
						<Text color='white' mt={2}>
							{card.subheading}
						</Text>
						<Tooltip
							shouldWrapChildren
							isDisabled={card.linkReference ? true : false}
							label='Coming Soon!'
							bg='red.600'
							placement='right-start'
						>
							<Button
								my={6}
								color='white'
								bg='blackAlpha.400'
								_hover={{
									bg: 'blackAlpha.500',
								}}
								isDisabled={!card.linkReference}
							>
								{card.buttonText ?? 'View'}
							</Button>
						</Tooltip>
					</Box>
					<Box mb={-8} mx={-6} pos={'relative'} flexGrow={1}>
						<Image
							src={card.icon?.url ?? ''}
							placeholder='blur'
							blurDataURL={card.icon?.metadata?.lqip ?? ''}
							loader={myLoader}
							width={312}
							height={156}
							alt={card.buttonText ?? 'Wiki card image'}
						/>
					</Box>
				</Flex>
			))}
		</SimpleGrid>
	);
};

export default WikiInfoCards;
