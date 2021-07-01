import { Flex, Box, Heading, Text, Stack, Button, Container } from '@chakra-ui/react';
import { IBlockBanner } from '@/models/sections/block-banner';
import { FaArrowRight } from 'react-icons/fa';

type Props = {
	data: IBlockBanner;
};

const BlockBanner = ({ data }: Props) => {
	return (
		<Flex as='section' className={`${data._type ?? 'blockBanner'}__section`} direction='column'>
			<Container maxW='container.xl'>
				<Flex flexDirection='row' flexBasis='0 1 100%' justify='center' align='center'>
					<Box pr={2}>
						<Heading as='h3' maxW={360} fontWeight={800}>
							{data.heading || ''}
						</Heading>
					</Box>
					<Stack spacing='24px' direction={['column', null, 'row']}>
						{data.blocks.map((block, i) => (
							<Flex
								key={i}
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
				<Button colorScheme='red' rightIcon={<FaArrowRight />} alignSelf='flex-end'>
					Get the Modpack
				</Button>
			</Container>
		</Flex>
	);
};

export default BlockBanner;
