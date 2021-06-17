import { Flex, Box, Heading, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { Marquee as MarqueeType } from '@/models/sections/marquee';
import { useEffect } from 'react';
import Image from 'next/image';
import { groupBy } from 'lodash';
import { nameFormatter } from '../utils';
import { useEmblaCarousel } from 'embla-carousel/react';
import { DestinationCard } from '../common';

const getFontSize = (size: string) => {
	switch (size) {
		case 'h1':
			return '8xl';

		case 'h2':
			return '5xl';

		case 'h3':
			return '3xl';

		default:
			return '5xl';
	}
};
type Props = {
	data: MarqueeType;
};

const Marquee = ({ data }: Props) => {
	const [viewportRef, embla] = useEmblaCarousel({
		dragFree: true,
		containScroll: 'trimSnaps',
	});

	useEffect(() => {
		if (!embla) return;
	}, [embla]);

	const regionDictionary = groupBy(data.marqueeItems, (o) => o?.destination?.region);

	return (
		<Flex
			flexDirection='column'
			className={`${data?._type || 'marquee'}__section`}
			justify={data?.headingAlignment || 'center'}
			align={data?.headingAlignment || 'center'}
		>
			<Heading as={data?.headingSize || 'h2'} fontSize={getFontSize(data?.headingSize)} mb={8} fontWeight={800}>
				{data?.heading || ''}
			</Heading>

			{data.groupItemsBy === 'region' ? (
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
												<DestinationCard
													key={i}
													imageSrc={item?.marqueeImage ? item?.marqueeImage?.url : item.destination?.images?.url}
													blurDataURL={
														item?.marqueeImage
															? item?.marqueeImage?.metadata?.lqip!
															: item.destination?.images?.metadata?.lqip!
													}
													name={item.destination.name}
												/>
											))}
										</Flex>
									</Box>
								</Box>
							</TabPanel>
						))}
					</TabPanels>
				</Tabs>
			) : (
				<Box className='embla' position='relative' maxWidth={'100vw'} mx='auto'>
					<Box className='embla__viewport' ref={viewportRef} width='100%' cursor='grab'>
						<Flex className='embla__container' userSelect='none' ml={-3}>
							{data.marqueeItems.map((item, i) => (
								<DestinationCard
									key={i}
									imageSrc={item?.marqueeImage ? item?.marqueeImage?.url : item.destination?.images?.url}
									blurDataURL={
										item?.marqueeImage ? item?.marqueeImage?.metadata?.lqip! : item.destination?.images?.metadata?.lqip!
									}
									name={item.destination.name}
								/>
							))}
						</Flex>
					</Box>
				</Box>
			)}
		</Flex>
	);
};

export default Marquee;
