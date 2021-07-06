import { IWikiBanner } from '@/models/sections/wiki-banner';
import { Box, Text, Heading, Button, Flex, Link } from '@chakra-ui/react';

type Props = {
	data: IWikiBanner;
};

const WikiBanner = ({ data }: Props) => {
	return (
		<Box borderRadius='md' bg='purple.500' width='full' py={4} px={8}>
			<Flex justifyContent='space-between' flexDirection='row'>
				<Heading>{data.heading || ''}</Heading>
				<Text>{data.subheading || ''}</Text>
				<Link href={data.buttonUrl || ''} isExternal>
					<Button variant='white'>{data.buttonText || ''}</Button>
				</Link>
			</Flex>
		</Box>
	);
};

export default WikiBanner;
