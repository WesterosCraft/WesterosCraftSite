import { Flex, Stack, VStack, Text, Heading, Icon } from '@chakra-ui/react';
import { HiCube, HiHome, HiDocumentText, HiLibrary } from 'react-icons/hi';

const WikiNav = () => {
	return (
		<Stack
			as='nav'
			aria-label='Wiki Navigation'
			alignSelf='flex-start'
			display={['none', null, 'flex']}
			minWidth={260}
			maxWidth={260}
			top='6.9rem'
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
						Builds
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
	);
};

export default WikiNav;
