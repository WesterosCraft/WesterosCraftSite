import { ReactNode } from 'react';
import { Flex, Stack, Box, Text } from '@chakra-ui/react';
import { WikiHeader } from '@/components/common';

type Props = {
	children?: ReactNode;
};

const WikiLayout = ({ children }: Props) => {
	return (
		<Flex direction='column' height='100%'>
			<WikiHeader />
			<Flex>
				<Stack
					as='nav'
					aria-label='Wiki Navigation'
					display='block'
					maxWidth={280}
					position='sticky'
					overflowY='auto'
					flex='1 1 280px'
					pr={8}
					pb={6}
					pt={4}
				>
					<Text>left nav</Text>
				</Stack>

				<Box flex='1 1 0%'>
					<Flex flexDirection='row'>
						<Box className='content' width='100%' pt={10}>
							{children}
						</Box>
					</Flex>
				</Box>
			</Flex>
		</Flex>
	);
};

export default WikiLayout;
