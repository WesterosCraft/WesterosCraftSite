import { Flex, Box, Heading, Text } from '@chakra-ui/react';

type Props = {
	data: any;
};

const BlockBanner = ({ data }: Props) => {
	return (
		<Flex flexDirection='row' flexBasis='0 1 100%' justify='center' align='center'>
			<Box>
				<Heading maxW={360}>Start your journey across Westeros</Heading>
			</Box>
			<Flex borderRadius='md' bg='red' justify='center' align='center' width={180} height={180} p={3} mx={4}>
				<Text fontWeight={500}>Get a Minecraft Java Editon Account</Text>
			</Flex>
			<Flex borderRadius='md' bg='red' justify='center' align='center' width={180} height={180} p={3} mx={4}>
				<Text fontWeight={500}>Install the WesterosCraft Modpack</Text>
			</Flex>
			<Flex borderRadius='md' bg='red' justify='center' align='center' width={180} height={180} p={3} mx={4}>
				<Text fontWeight={500}>Join the game and start exploring</Text>
			</Flex>
		</Flex>
	);
};

export default BlockBanner;
