import { useState, useEffect, useCallback } from 'react';
import { Box, Flex, Button, ButtonGroup } from '@chakra-ui/react';
import Image from 'next/image';

import { useEmblaCarousel } from 'embla-carousel/react';
import { ExpandedImage } from '@/models/utils';

const PLACEHOLDER_SRC = `data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D`;

export const Slide = ({ imgSrc = '', inView = false, blurDataUrl = '' }) => {
	const [hasLoaded, setHasLoaded] = useState(false);

	const setLoaded = useCallback(() => {
		if (inView) setHasLoaded(true);
	}, [inView, setHasLoaded]);

	return (
		<Box className={`embla__slide ${hasLoaded ? 'has-loaded' : ''}`} pl='10px' minW='full' position='relative'>
			<Flex
				className='embla__slide__inner'
				position='relative'
				align='center'
				justify='center'
				height='486'
				overflow='hidden'
			>
				<Image
					width={756}
					height={486}
					src={inView ? imgSrc : PLACEHOLDER_SRC}
					placeholder='blur'
					blurDataURL={blurDataUrl ?? ''}
					className='embla__slide__img'
					onLoad={setLoaded}
					alt='A cool cat.'
				/>
			</Flex>
		</Box>
	);
};

const ImageSlider = ({ slides }: { slides: ExpandedImage[] }) => {
	const [slidesInView, setSlidesInView] = useState<number[]>([]);
	const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
	const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
	const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

	const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
	const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
	const onSelect = useCallback(() => {
		if (!embla) return;
		setPrevBtnEnabled(embla.canScrollPrev());
		setNextBtnEnabled(embla.canScrollNext());
	}, [embla]);

	const mediaByIndex = (index: number) => slides[index % slides.length];

	const findSlidesInView = useCallback(() => {
		if (!embla) return;

		setSlidesInView((slidesInView) => {
			if (slidesInView.length === embla.slideNodes().length) {
				embla.off('select', findSlidesInView);
			}
			const inView = embla.slidesInView(true).filter((index) => slidesInView.indexOf(index) === -1);
			return slidesInView.concat(inView);
		});
	}, [embla, setSlidesInView]);

	useEffect(() => {
		if (!embla) return;
		onSelect();
		findSlidesInView();
		embla.on('select', onSelect);
		embla.on('select', findSlidesInView);
	}, [embla, onSelect, findSlidesInView]);

	return (
		<Box className='embla' position='relative' p={5} maxW={756} mx='auto'>
			<Box className='embla__viewport' ref={viewportRef} overflow='hidden' width='full'>
				<Flex className='embla__container' userSelect='none' ml='-10px'>
					{slides.map((_, index) => (
						<Slide
							key={index}
							imgSrc={mediaByIndex(index).url}
							blurDataUrl={mediaByIndex(index).metadata?.lqip}
							inView={slidesInView.indexOf(index) > -1}
						/>
					))}
				</Flex>
			</Box>
			<ButtonGroup width='full' justifyContent='flex-end' variant='outline' size='md'>
				<Button onClick={scrollPrev} disabled={!prevBtnEnabled}>
					Previous
				</Button>
				<Button onClick={scrollNext} disabled={!nextBtnEnabled}>
					Next
				</Button>
			</ButtonGroup>
		</Box>
	);
};

export default ImageSlider;
