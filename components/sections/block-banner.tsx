import { Flex, Heading, Text, Button, Container, ButtonGroup } from '@chakra-ui/react';
import { IBlockBanner } from '@/models/sections/block-banner';

type Props = {
	data: IBlockBanner;
};

const BlockBanner = ({ data }: Props) => {
	return (
		<Flex as='section' className={`${data._type ?? 'blockBanner'}__section`} direction='column'>
			<Container maxW='container.sm' centerContent textAlign='center'>
				<Heading fontWeight={800} fontSize='6xl'>
					Start your journey across Westeros
				</Heading>
				<Text fontSize='lg' mt={4}>
					Your business is going places - are your products? Ship products to customers with speed using Chakra UI Pro
				</Text>
				<ButtonGroup mt={8} spacing={6} size='lg'>
					<Button>Get Modpack</Button>
					<Button variant='outline'>View Wiki</Button>
				</ButtonGroup>
			</Container>
		</Flex>
	);
};

export default BlockBanner;
