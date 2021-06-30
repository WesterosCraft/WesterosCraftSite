import { useEffect, useCallback } from 'react';
import { ExpandedImage } from '@/models/utils';
import { urlFor } from '@/lib/sanity';
import { Box, Flex, IconButton, Heading, chakra, useColorModeValue } from '@chakra-ui/react';
import NextImage from 'next/image';
import { useEmblaCarousel } from 'embla-carousel/react';
import { GrFormNext } from 'react-icons/gr';

type Props = {
	width: number | string;
	height: number | string;
	images: Array<{
		destination: { name: string; _type: 'destination' };
		slideImage: ExpandedImage;
		_key: string;
		_type: 'slide';
	}>;
};

const ImageSlider = ({ images, width = 1232, height = 756 }: Props) => {
	const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false, loop: true, containScroll: 'trimSnaps' });
	console.log('👉 ~ ImageSlider ~ embla', embla);

	// const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
	const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
	const onSelect = useCallback(() => {
		if (!embla) return;
	}, [embla]);

	useEffect(() => {
		if (!embla) return;
		embla.on('select', onSelect);
		onSelect();
	}, [embla, onSelect]);

	const myLoader = ({ src, width }: any) => {
		return `${src}?fit=crop&w=${width}&q=100`;
	};

	const Image = chakra(NextImage, {
		shouldForwardProp: (prop) =>
			['width', 'height', 'src', 'alt', 'layout', 'placeholder', 'priority', 'blurDataURL'].includes(prop),
	});

	const heroGradient = useColorModeValue('linear(to-r,  #F57A49,#AF2024)', 'linear(to-r,  #5096C5,#28587E)');

	return (
		<Box position='relative'>
			<Box
				zIndex='base'
				filter='blur(6rem)'
				w='100%'
				maxW={width}
				maxH={height}
				opacity='0.5'
				transform='translateZ(0)'
				bgGradient={heroGradient}
				className='slider-gradient'
				position='absolute'
				top={0}
				left={0}
				right={0}
				bottom={0}
				mx='auto'
			/>
			<Box className='embla' width='100%' position='relative' maxW='100%' mx='auto'>
				<Box className='embla__viewport' width='100vw' ml='calc(-50vw + 50%)' ref={viewportRef}>
					<Flex className='embla__container' userSelect='none'>
						{images.map((image, i) => (
							<Box className='embla__slide' position='relative' minW='100%' key={image._key}>
								<Flex
									justify='center'
									align='center'
									height='100%'
									maxHeight={height}
									className='embla__slide__inner'
									position='relative'
								>
									<Box
										maxH={height}
										width='100%'
										maxW={width}
										height='100%'
										position='relative'
										shadow='dark-lg'
										borderRadius='3xl'
									>
										<Image
											borderRadius='3xl'
											zIndex='docked'
											priority={i === 0}
											placeholder='blur'
											blurDataURL={image.slideImage.metadata?.lqip}
											loader={myLoader}
											width={width}
											height={height}
											className='embla__slide__img'
											src={image.slideImage.url}
											alt={image?.destination?.name || 'WesterosCraft destination'}
										/>
									</Box>
								</Flex>
							</Box>
						))}
					</Flex>
				</Box>
			</Box>
			<Flex mt={6} w='100%' justify='center' align='center' direction='row'>
				<Heading fontSize='lg'>White Harobr</Heading>
			</Flex>
		</Box>
	);
};

export default ImageSlider;
