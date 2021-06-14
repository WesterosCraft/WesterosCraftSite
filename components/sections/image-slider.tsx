import { useState, useEffect, useCallback } from 'react';
import { SanityAsset } from '@/models/utils';
import { urlFor } from '@/lib/sanity';
import { Box, Flex, IconButton } from '@chakra-ui/react';
import Image from 'next/image';
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';
import { useEmblaCarousel } from 'embla-carousel/react';

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

const ImageSlider = ({ images, width = 1152, height = 756 }: Props) => {
	const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false, loop: true });

	const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
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
		return `${src}?fit=crop&h=${width}&w=${width}&q=100`;
	};

	return (
		<Box className='embla' width='100%' bg='white' position='relative' maxW='100%' mx='auto'>
			<Box className='embla__viewport' overflow='hidden' width='100%' ref={viewportRef}>
				<Flex className='embla__container' userSelect='none'>
					{images.map((image) => (
						<Box className='embla__slide' position='relative' minW='100%' key={image._key}>
							<Box height={height} className='embla__slide__inner' position='relative' overflow='hidden'>
								<Image
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
			{/* <IconButton
				position='absolute'
				aria-label='Previous Button'
				isRound
				icon={<MdNavigateBefore />}
				top='calc(50% - 20px)'
				left={10}
				onClick={scrollPrev}
				// left={45}
				// transform='translate(-50%, -50%)'
			/>
			<IconButton
				position='absolute'
				aria-label='Next Button'
				isRound
				icon={<MdNavigateNext />}
				top='calc(50% - 20px)'
				right={10}
				onClick={scrollNext}
				// right={45}
				// transform='translate(-50%, -50%)'
			/> */}
		</Box>
	);
};

export default ImageSlider;
