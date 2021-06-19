import { ReactNode } from 'react';
import { Flex, Stack, Box, VStack, Text, Heading, Icon } from '@chakra-ui/react';
import { WikiHeader } from '@/components/common';
import { HiCube, HiHome, HiDocumentText, HiLibrary } from 'react-icons/hi';

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
					minWidth={260}
					maxWidth={260}
					position='sticky'
					overflowY='auto'
					flex='1 1 260px'
					pr={4}
					pb={6}
					pt={4}
					zIndex='dropdown'
				>
					<VStack align='start' spacing={3}>
						<Flex direction='row' align='center'>
							<Icon borderRadius='sm' boxSize='20px' bg='red.600' color='white' as={HiHome} />

							<Text fontWeight='bold' ml={3}>
								Wiki Home
							</Text>
						</Flex>
						<Flex direction='row' align='center'>
							<Icon borderRadius='sm' boxSize='20px' bg='red.600' color='white' as={HiDocumentText} />
							<Text color='gray.500' fontWeight='bold' ml={3}>
								Guides
							</Text>
						</Flex>
						<Flex direction='row' align='center'>
							<Icon borderRadius='sm' boxSize='20px' bg='red.600' color='white' as={HiLibrary} />
							<Text color='gray.500' fontWeight='bold' ml={3}>
								Destinations
							</Text>
						</Flex>
						<Flex direction='row' align='center'>
							<Icon borderRadius='sm' boxSize='20px' bg='red.600' color='white' as={HiCube} />
							<Text color='gray.500' fontWeight='bold' ml={3}>
								Blocks
							</Text>
						</Flex>
					</VStack>
					<Heading as='h4' fontSize='md' textTransform='uppercase'>
						Getting Started
					</Heading>
				</Stack>

				<Box flex='1 1 0%' pl={3}>
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
