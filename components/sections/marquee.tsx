import {
	Flex,
	Box,
	Heading,
	Tabs,
	TabList,
	TabPanels,
	Tab,
	TabPanel,
	Container,
	useColorModeValue,
} from '@chakra-ui/react';
import { IMarquee } from '@/models/sections/marquee';
import { useEffect } from 'react';
import { groupBy } from 'lodash';
import { nameFormatter } from '../utils';
import { useEmblaCarousel } from 'embla-carousel/react';
import { SimpleDestinationCard } from '../common';
import { getFontSize } from '../utils/helpers';

type Props = {
	data: IMarquee;
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
			as='section'
			flexDirection='column'
			className={`${data?._type || 'marquee'}__section`}
			justify={data?.headingAlignment || 'center'}
			align={data?.headingAlignment || 'center'}
		>
			<Container maxW='container.xl'>
				<Heading
					as={data?.headingSize || 'h2'}
					fontSize={getFontSize(data?.headingSize)}
					mb={8}
					fontWeight={800}
					textAlign='center'
				>
					{data?.heading || ''}
				</Heading>

				<Tabs maxW='100%' align='center' isLazy lazyBehavior='unmount' variant='unstyled' size='sm'>
					<TabList>
						{Object.keys(regionDictionary).map((item, index) => (
							<Tab
								key={index}
								_selected={{ color: useColorModeValue('black', 'white') }}
								_hover={{ color: useColorModeValue('black', 'white') }}
								color={'gray.400'}
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
										<Flex className='embla__container' userSelect='none' mr={-3}>
											{regionDictionary[region].map((item, i) => (
												<SimpleDestinationCard
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
			</Container>
		</Flex>
	);
};

export default Marquee;
