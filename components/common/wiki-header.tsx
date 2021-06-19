import { Flex, HStack, Box, Text, Input } from '@chakra-ui/react';

const WikiHeader = () => {
	return (
		<Flex>
			<Box
				display={['none', null, 'block']}
				maxWidth={260}
				position='sticky'
				overflowY='auto'
				flex='1 1 260px'
				pr={4}
				pb={6}
				pt={4}
			>
				<Text></Text>
			</Box>
			<Box flex='1 1 0%' pl={3}>
				<Input placeholder='Search the wiki' />
				<HStack></HStack>
			</Box>
		</Flex>
	);
};

export default WikiHeader;
