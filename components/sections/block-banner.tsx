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
	return (
		<Flex flexDirection='row' flexBasis='0 1 100%' justify='center' align='center'>
			<Box pr={2}>
				<Heading as='h3' maxW={360} fontWeight={800}>
					{data.heading || ''}
				</Heading>
			</Box>
			<Stack spacing='24px' direction={['column', null, 'row']}>
				{data.blocks.map((block) => (
					<Flex
						border='1px solid'
						shadow={'xl'}
						borderRadius='md'
						bg='white'
						justify='center'
						align='center'
						width={[160, null, 180]}
						height={[160, null, 180]}
						p={[2, null, 3]}
					>
						<Text fontWeight={500}>{block.label}</Text>
					</Flex>
				))}
			</Stack>
		</Flex>
	);
};

export default BlockBanner;
