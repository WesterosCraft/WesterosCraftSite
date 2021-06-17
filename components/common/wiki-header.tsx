import { Flex, HStack, Box, Text, Input } from '@chakra-ui/react';

const WikiHeader = () => {
	return (
		<Flex>
			<Box display='block' maxWidth={280} position='sticky' overflowY='auto' flex='1 1 280px' pr={8} pb={6} pt={4}>
				<Text></Text>
			</Box>
			<Box flex='1 1 0%'>
				<Input placeholder='Search the wiki' />
				<HStack></HStack>
			</Box>
		</Flex>
	);
};

export default WikiHeader;
