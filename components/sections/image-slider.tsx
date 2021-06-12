import { useState, useEffect, useCallback } from 'react';
import { SanityAsset } from '@/models/utils';
import { urlFor } from '@/lib/sanity';
import { Box, Flex, IconButton } from '@chakra-ui/react';
import Image from 'next/image';
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';
import { useEmblaCarousel } from 'embla-carousel/react';

type Props = {
	images: Array<{
		destination: { _ref: string; _type: 'reference' };
		slideImage: { _type: 'image'; asset: SanityAsset };
		_key: string;
		_type: 'slide';
	}>;
};

const ImageSlider = ({ images }: Props) => {
	console.log('👉 ~ ImageSlider ~ images', images);
	const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false });

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

	return (
		<Box className='embla' width='100%' bg='white' position='relative' maxW={756} mx='auto'>
			<Box className='embla__viewport' overflow='hidden' width='100%' ref={viewportRef}>
				<Flex
					className='embla__container'
					userSelect='none'
					// ml='-10px'
				>
					{images.map((image) => (
						<Box
							className='embla__slide'
							position='relative'
							minW='100%'
							// pl='10px'
							key={image._key}
						>
							<Box className='embla__slide__inner' position='relative' overflow='hidden' height='445px'>
								<Image
									className='embla__slide__img'
									// position='absolute'
									// display='block'
									// top='50%'
									// left='50%'
									width={756}
									height={445}
									// transform='translate(-50%, -50%)'
									src={urlFor(image.slideImage.asset).url()!}
									alt={image.destination._ref || 'WesterosCraft destination'}
								/>
							</Box>
						</Box>
					))}
				</Flex>
			</Box>
			<IconButton
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
			/>
		</Box>
	);
};

export default ImageSlider;
