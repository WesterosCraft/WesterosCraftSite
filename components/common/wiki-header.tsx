import {
	Flex,
	HStack,
	Box,
	Input,
	Link,
	useColorModeValue,
	Icon,
	InputGroup,
	InputLeftElement,
	useDisclosure,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalBody,
	Heading,
} from '@chakra-ui/react';
import { FaDiscord, FaYoutube, FaInstagramSquare, FaTwitter } from 'react-icons/fa';
import { nameFormatter } from '../utils';
import { SocialFields } from '@/models/objects/social-fields';
import { FaSearch } from 'react-icons/fa';
import AlgoliaSearch from './algolia-search';

interface IWikiHeader {
	socialFields?: SocialFields;
}

const IconMap: any = {
	discord: FaDiscord,
	youtube: FaYoutube,
	instagram: FaInstagramSquare,
	twitter: FaTwitter,
};

const WikiHeader = ({ socialFields }: IWikiHeader) => {
	// const { isOpen, onOpen, onClose, onToggle } = useDisclosure();

	const hoverColor = useColorModeValue('red.700', 'red.600');
	const iconColor = useColorModeValue('gray.500', 'whiteAlpha.900');

	return (
		<Box
			as='header'
			align-self='flex-end'
			borderColor={useColorModeValue('gray.200', 'gray.700')}
			borderWidth={0}
			borderTopWidth={1}
			borderStyle='solid'
			position='sticky'
			top={16}
			left={0}
			right={0}
			width='100%'
			maxW={1280}
			mx='auto'
		>
			<Flex flex='1 1 0%' justifyContent='flex-end' alignItems='center'>
				<Flex direction='row' width='full' justify='flex-end' flex='1 1 0%' p={4} pl={0}>
					{/* <InputGroup maxWidth={540} shadow='sm'>
						<InputLeftElement pointerEvents='none'>
							<Icon as={FaSearch} color='gray.300' />
						</InputLeftElement>
						<Input isReadOnly placeholder='Search the wiki' role='button' onClick={onOpen} />
						<Modal isOpen={isOpen} onClose={onClose} size='xl'>
							<ModalOverlay />
							<ModalContent>
								<ModalBody p={4}>
									<AlgoliaSearch modalHandler={onToggle} />
								</ModalBody>
							</ModalContent>
						</Modal>
					</InputGroup> */}
					<HStack ml={4} spacing={3}>
						{socialFields &&
							Object.entries(socialFields).map((key) => {
								return (
									key[0] !== '_type' && (
										<Link key={key[0]} href={key[1]} isExternal>
											<Icon
												aria-label={nameFormatter(key[0])}
												boxSize={'20px'}
												color={iconColor}
												transitionDuration='fast'
												transitionProperty='common'
												transitionTimingFunction='ease-out'
												_hover={{ color: hoverColor }}
												as={IconMap[key[0]]}
											/>
										</Link>
									)
								);
							})}
					</HStack>
				</Flex>
			</Flex>
		</Box>
	);
};

export default WikiHeader;
