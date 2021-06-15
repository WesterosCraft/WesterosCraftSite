import { Flex, Box, Heading, Tabs, TabList, TabPanels, Tab, TabPanel, Text } from '@chakra-ui/react';
import { Marquee as MarqueeType } from '@/models/sections/marquee';
import { useEffect, useCallback } from 'react';
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

		// console.log(embla);
	}, [embla]);

	const regionDictionary = groupBy(data.marqueeItems, (o) => o?.destination?.region);

	return (
		<Flex flexDirection='column' className={`${data?._type || 'marquee'}__section`} justify='center' align='center'>
			<Heading as='h2' textAlign='center' fontSize='5xl' mb={8} fontWeight={800}>
				{data.heading}
			</Heading>

			<Tabs maxW='100%' align='center' isLazy lazyBehavior='unmount' variant='unstyled' size='sm'>
				<TabList>
					{Object.keys(regionDictionary).map((item, index) => (
						<Tab
							key={index}
							_selected={{ color: 'black' }}
							_active={{ color: 'black' }}
							_hover={{ color: 'black' }}
							color='gray.400'
							fontWeight={600}
						>
							{nameFormatter(item)}
						</Tab>
					))}
				</TabList>
				<TabPanels>
					{Object.keys(regionDictionary).map((region, index) => (
						<TabPanel key={index}>
							<Box className='embla' position='relative' maxWidth={'100vw'} mx='auto'>
								<Box className='embla__viewport' ref={viewportRef} width='100%' cursor='grab'>
									<Flex className='embla__container' userSelect='none' ml={-3}>
										{regionDictionary[region].map((item, i) => (
											<Box
												position='relative'
												overflow='hidden'
												minW='350px'
												className='embla__slide'
												ml={3}
												key={i}
												borderRadius='lg'
												shadow='lg'
											>
												<Box
													className='embla__slide__inner'
													position='relative'
													overflow='hidden'
													width={350}
													height={350}
												>
													<Image
														src={urlFor(item?.marqueeImage?.asset)?.url()!}
														// placeholder='blur'
														loader={myLoader}
														width={350}
														height={350}
														className='embla__slide__img'
														alt='A cool cat.'
													/>
												</Box>
												{item.destination.name && (
													<Flex
														flexDirection='row'
														align='center'
														// height={'78px'}
														bg='white'
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
															<Heading size='md'>{item.destination?.name}</Heading>
														</Box>
													</Flex>
												)}
											</Box>
										))}
									</Flex>
								</Box>
							</Box>
						</TabPanel>
					))}
				</TabPanels>
			</Tabs>
		</Flex>
	);
};

export default Marquee;
