import { Stat, Flex, Box, Tabs, TabPanels, StatNumber, TabPanel, SimpleGrid, Button } from '@chakra-ui/react';
import { chunk } from 'lodash';
interface IPagination {
	data: Array<any>;
	tabIndex: number;
	RenderComponent: any;
	pageLimit: number;
	onPrevChange: () => void;
	onNextChange: () => void;
	setTabIndex: (arg: number) => void;
}

const Pagination = ({
	data,
	tabIndex,
	RenderComponent,
	pageLimit,
	onPrevChange,
	onNextChange,
}: // setTabIndex,
IPagination) => {
	const getPaginatedData = () => {
		return chunk(data, pageLimit);
	};

	// const getPaginationGroup = () => {
	// 	let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
	// 	return new Array(pageLimit).map((_, idx) => start + idx + 1);
	// };

	return (
		<>
			<Tabs index={tabIndex} isLazy lazyBehavior='keepMounted'>
				<TabPanels>
					{getPaginatedData().map((chunk, idx) => (
						<TabPanel key={idx} padding={0}>
							<SimpleGrid
								gridAutoRows='1fr'
								templateColumns={['repeat(1, 1fr)', 'repeat(2, minmax(0px, 1fr))', null, 'repeat(3, minmax(0px, 1fr))']}
								gap={4}
							>
								{chunk.map((item, i) => (
									<RenderComponent
										key={i}
										imageUrl={item.images?.url!}
										blurDataUrl={item.images?.metadata?.lqip!}
										name={item.name}
										// entry={item.entry}
										house={item.house}
										region={item.region}
										status={item.projectStatus}
										buildType={item.buildType}
										// url={`/wiki/${kebabCase(item.region)}/${item.slug?.current}`}
									/>
								))}
							</SimpleGrid>
						</TabPanel>
					))}
				</TabPanels>
				<Flex justify='center' align='center' mt={8}>
					<Button disabled={tabIndex <= 0} onClick={onPrevChange}>
						Prev
					</Button>
					<Box as='span' w='200px' mx='24px' textAlign='center'>
						<Stat>
							<StatNumber>{(tabIndex + 1).toString()}</StatNumber>
						</Stat>
					</Box>
					<Button disabled={tabIndex >= getPaginatedData().length - 1} onClick={onNextChange}>
						Next
					</Button>
				</Flex>
			</Tabs>
		</>
	);
};

export default Pagination;
