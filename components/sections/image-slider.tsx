import { useEffect, useCallback } from 'react';
import { SanityAsset } from '@/models/utils';
import { urlFor } from '@/lib/sanity';
import { Box, Flex, IconButton } from '@chakra-ui/react';
import Image from 'next/image';
import { useEmblaCarousel } from 'embla-carousel/react';
import { GrFormNext } from 'react-icons/gr';

type Props = {
	width: number | string;
	height: number | string;
	images: Array<{
		destination: { _ref: string; _type: 'reference' };
		slideImage: { _type: 'image'; asset: SanityAsset };
		_key: string;
		_type: 'slide';
	}>;
};

const ImageSlider = ({ images, width = 1232, height = 756 }: Props) => {
	const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false, loop: true });

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

	return (
		<Box className='embla' width='100%' position='relative' maxW='100%' mx='auto'>
			<Box className='embla__viewport' overflow='hidden' width='100%' ref={viewportRef}>
				<Flex className='embla__container' userSelect='none'>
					{images.map((image) => (
						<Box className='embla__slide' position='relative' minW='100%' key={image._key}>
							<Box
								height='100%'
								maxHeight={height}
								className='embla__slide__inner'
								position='relative'
								overflow='hidden'
								sx={{
									'.embla__slide__img': {
										borderRadius: '3xl',
									},
								}}
							>
								<Image
									priority
									loader={myLoader}
									width={width}
									height={height}
									className='embla__slide__img'
									src={urlFor(image?.slideImage?.asset)?.url()!}
									alt={image?.destination?._ref || 'WesterosCraft destination'}
								/>
							</Box>
						</Box>
					))}
				</Flex>
			</Box>
			{images?.length > 1 && (
				<IconButton
					onClick={scrollNext}
					position='absolute'
					bottom={5}
					right={5}
					colorScheme='whiteAlpha'
					aria-label='Scroll Next Image'
					fontSize='20px'
					isRound
					icon={<GrFormNext />}
				/>
			)}
		</Box>
	);
};

export default ImageSlider;
