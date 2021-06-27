import { useState } from 'react';
import { IFeaturesWithVideo } from '@/models/sections/features-with-video';
import { Heading, Text, Box, Button, AspectRatio, SimpleGrid, Icon, Center, Flex } from '@chakra-ui/react';
import Image from 'next/image';
import ReactPlayer from 'react-player';
import { FaPlay } from 'react-icons/fa';

type Props = {
	data: IFeaturesWithVideo;
};

const FeaturesWithVideo = ({ data }: Props) => {
	const [isPlaying, setPlaying] = useState(false);

	return (
		<Box width='100%' px={8}>
			<SimpleGrid templateColumns={['1fr', null, null, '416px 1fr']} gap='64px'>
				<Flex direction='column'>
					<Heading textAlign={['center', null, 'left']} as='h2' fontSize='5xl' fontWeight={800}>
						{data?.heading ?? ''}
					</Heading>
					<Text fontSize='lg' mt={4} mb={8}>
						{data?.subheading ?? ''}
					</Text>
					<Button
						size='lg'
						display={{ base: 'none', md: 'inline-flex' }}
						fontSize={'md'}
						fontWeight={600}
						href={'#'}
						_hover={{
							color: 'white',
							bg: 'blackAlpha.700',
						}}
					>
						{data.buttonText ?? 'Get Started'}
					</Button>
					<Box mt={10} flexGrow={1} borderRadius='lg' bg='gray.600' width='100%' height='auto'></Box>
				</Flex>
				<Box>
					<Box
						borderRadius='lg'
						shadow='lg'
						overflow='hidden'
						position='relative'
						onClick={() => setPlaying(!isPlaying)}
					>
						<AspectRatio ratio={4 / 3} maxH={480}>
							{data.url && (
								<ReactPlayer
									width='100%'
									height='100%'
									controls={true}
									playing={isPlaying}
									url={data.url}
									className='youtubeContainer'
								/>
							)}
						</AspectRatio>
						<Center
							className='play-button'
							borderRadius='full'
							bg='whiteAlpha.600'
							position='absolute'
							top='50%'
							transform='translateY(-50%)'
							mx='auto'
							left={0}
							right={0}
							bottom={0}
							zIndex='dropdown'
							width={88}
							height={88}
							display={isPlaying ? 'none' : 'flex'}
						>
							<Icon boxSize='28px' color='blackAlpha.700' as={FaPlay} />
						</Center>
						<Box
							display={isPlaying ? 'none' : 'block'}
							position='absolute'
							top={0}
							left={0}
							width='100%'
							height='100%'
							zIndex='base'
						>
							{data?.thumbnail?.url && (
								<Image
									layout='fill'
									objectFit='cover'
									src={data?.thumbnail?.url}
									placeholder='blur'
									blurDataURL={data.thumbnail.metadata?.lqip}
									alt='Youtube Video'
								/>
							)}
						</Box>
					</Box>
					<SimpleGrid
						gap={6}
						templateColumns={['repeat(1, minmax(0px, 1fr))', null, null, 'repeat(3, minmax(0px, 1fr))']}
						mt={10}
					>
						{data.featureList.map((feature) => (
							<Box key={feature._key}>
								<Text fontWeight='bold' mb={1}>
									{feature.heading}
								</Text>
								<Text>{feature.description} </Text>
							</Box>
						))}
					</SimpleGrid>
				</Box>
			</SimpleGrid>
		</Box>
	);
};

export default FeaturesWithVideo;
