import { Flex, Box, Heading, Tabs, TabList, TabPanels, Tab, TabPanel, Text } from '@chakra-ui/react';
import { Marquee as MarqueeType } from '@/models/sections/marquee';
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { urlFor } from '@/lib/sanity';
import { groupBy } from 'lodash';
import { nameFormatter } from '../utils';
import { useEmblaCarousel } from 'embla-carousel/react';

type Props = {
	data: MarqueeType;
};

const myLoader = ({ src, width }: { src: string; width: number | string }) => {
	return `${src}?fit=crop&h=${width}&w=${width}&q=100`;
};

const Marquee = ({ data }: Props) => {
	const [viewportRef, embla] = useEmblaCarousel({
		dragFree: true,
		containScroll: 'trimSnaps',
	});

	const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
	const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

	useEffect(() => {
		if (!embla) return;
	}, [embla]);

	const regionDictionary = groupBy(data.marqueeItems, (o) => o.destination.region);

	return (
		<Flex flexDirection='column' className={`${data?._type || 'marquee'}__section`} justify='center' align='center'>
			<Heading textAlign='center' fontSize='5xl'>
				{data.heading}
			</Heading>

			<Box className='embla' position='relative' maxWidth={'100vw'} mx='auto'>
				<Box className='embla__viewport' ref={viewportRef} overflow='hidden' width='100%' cursor='grab'>
					<Flex className='embla__container' userSelect='none'>
						{regionDictionary['theWall'].map((item, i) => (
							<Box position='relative' overflow='hidden' minW='50%' className='embla__slide' key={i}>
								<Box className='embla__slide__inner' position='relative' overflow='hidden' height={350}>
									<Image
										width={350}
										height={350}
										className='embla__slide__img'
										src={urlFor(item.marqueeImage.asset).url()!}
										alt='A cool cat.'
									/>
								</Box>
							</Box>
						))}
					</Flex>
				</Box>
				{/* <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
				<NextButton onClick={scrollNext} enabled={nextBtnEnabled} /> */}
			</Box>
			{/* <Tabs width='100%' align='center'>
				<TabList>
					{Object.keys(regionDictionary).map((item, index) => (
						<Tab key={index}>
							<Text>{nameFormatter(item)}</Text>
						</Tab>
					))}
				</TabList>
				<TabPanels>
					{Object.keys(regionDictionary).map((item, index) => (
						<TabPanel key={index}>
							<Box className='embla' width='100%' bg='white' position='relative' maxW='100%' mx='auto'>
								<Box className='embla__viewport' overflow='hidden' width='100%' ref={viewportRef}>
									<Flex className='embla__container' userSelect='none'>
										{regionDictionary[item].map((item) => (
											<Box className='embla__slide' idth={350} height={350} position='relative' mx={2} key={item._key}>
												<Box
													width={350}
													height={350}
													className='embla__slide__inner'
													position='relative'
													overflow='hidden'
												>
													<Image
														className='embla__slide__img'
														loader={myLoader}
														width={350}
														height={350}
														src={urlFor(item.marqueeImage.asset).url()!}
														alt={item?.destination?._ref || 'WesterosCraft destination'}
													/>
												</Box>
											</Box>
										))}
									</Flex>
								</Box>
							</Box>
						</TabPanel>
					))}
				</TabPanels>
			</Tabs> */}
		</Flex>
	);
};

export default Marquee;

// <Marquee>
// {marquee.map((item, i) => (
//   <Box
// 	mx={3}
// 	display="block"
// 	width={350}
// 	height={350}
// 	key={i}
// 	sx={{
// 	  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1),0 4px 6px -2px rgba(0, 0, 0, 0.05);'
// 	}}>
// 	<Image
// 	  loader={myLoader}
// 	  src={`${urlFor(item.marqueeImage.asset._ref).url()}`}
// 	  width={350}
// 	  height={350}
// 	/>

// 	<Text color="white">{item.destination.name}</Text>
//   </Box>
// ))}

//    <Box
//      className="marquee"
//       position="relative"
//       width="100vw"
//       maxWidth="100%"
//       height={350}
//       overflowX="hidden">
//     <motion.div
//       className="track"
//       variants={marqueeVariants}
//       animate="animate"
//       style={{
//         display: 'flex',
//         flexDirection: 'row'
//       }}>
//       {children}
//     </motion.div>
//     </Box>
