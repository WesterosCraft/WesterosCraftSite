import { Flex, Stack, Box, Text, Input } from '@chakra-ui/react';

const WikiHeader = () => {
	return (
		<Flex>
			<Text>wiki header</Text>
			<Input placeholder='Search the wiki' />
		</Flex>
	);
};

export default WikiHeader;
