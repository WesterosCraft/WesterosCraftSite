import { Flex, Box, Heading, Text, Stack } from '@chakra-ui/react';

type Props = {
	data: {
		heading: string;
		blocks: Array<{ label: string }>;
		_type: 'blockBanner';
		_key: string;
	};
};

const BlockBanner = ({ data }: Props) => {
	console.log('👉 ~ BlockBanner ~ data', data);
	return (
		<Flex flexDirection='row' flexBasis='0 1 100%' justify='center' align='center'>
			<Box>
				<Heading maxW={360}>{data.heading || ''}</Heading>
			</Box>
			<Stack spacing='24px' direction={['column', 'row']}>
				{data.blocks.map((block) => (
					<Flex borderRadius='md' bg='red' justify='center' align='center' width={180} height={180} p={3}>
						<Text fontWeight={500}>{block.label}</Text>
					</Flex>
				))}
			</Stack>
		</Flex>
	);
};

export default BlockBanner;
