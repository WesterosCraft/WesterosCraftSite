import { useState } from 'react';
import { IFeaturesWithVideo } from '@/models/sections/features-with-video';
import {
	Heading,
	Text,
	Box,
	Button,
	AspectRatio,
	SimpleGrid,
	Icon,
	Center,
	Flex,
	Container,
	VStack,
	Link,
} from '@chakra-ui/react';
import Image from 'next/image';
import ReactPlayer from 'react-player';
import { FaPlay } from 'react-icons/fa';
import { urlFor } from '@/lib/sanity';

type Props = {
	data: IFeaturesWithVideo;
};

const FeaturesWithVideo = ({ data }: Props) => {
	const [isPlaying, setPlaying] = useState(false);

	return (
		<Box as='section' className={`${data._type ?? 'featuresWithVideo'}__section`} width='100%' px={[0, 8]}>
			<Container maxW='container.xl'>
				<SimpleGrid templateColumns={['1fr', null, null, '416px 1fr']} gap={['20px', '64px']}>
					<Flex direction='column'>
						<Heading textAlign={['center', null, 'left']} as='h2' fontSize={['4xl', '5xl']} fontWeight={800}>
							{data?.heading ?? ''}
						</Heading>
						<Text textAlign={['center', 'left']} fontSize={['md', 'lg']} mt={4} mb={8}>
							{data?.subheading ?? ''}
						</Text>
						<Button
							size='lg'
							variant='with-red-gradient'
							display={{ md: 'inline-flex' }}
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
						<Box
							mt={[5, 10]}
							flexGrow={1}
							borderRadius='lg'
							borderWidth={1}
							borderColor='gray.200'
							width='100%'
							height='auto'
							p={6}
						>
							<Text textAlign='center' color='blackAlpha.900' fontWeight='bold' fontSize='xl'>
								As featured in
							</Text>
							<VStack spacing={6} mt={[6, 8]}>
								{data.logos.map((logo, i) => (
									<Link
										isExternal
										href={logo.logoLink ?? '#'}
										height={['36px', '42px']}
										key={i}
										width='full'
										position='relative'
									>
										<Image
											objectFit='contain'
											layout='fill'
											src={urlFor(logo?.logoImage?.asset?._ref).url() ?? ''}
											alt='Featured logo'
										/>
									</Link>
								))}
							</VStack>
						</Box>
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
			</Container>
		</Box>
	);
};

export default FeaturesWithVideo;
