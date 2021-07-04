import {
	Flex,
	HStack,
	Box,
	Input,
	Link,
	useColorModeValue,
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	Icon,
	InputGroup,
	InputLeftElement,
	useDisclosure,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
} from '@chakra-ui/react';
import { FaDiscord, FaYoutube, FaInstagramSquare, FaTwitter } from 'react-icons/fa';
import { nameFormatter } from '../utils';
import { SocialFields } from '@/models/objects/social-fields';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import { FaChevronRight, FaSearch } from 'react-icons/fa';

interface IWikiHeader {
	socialFields?: SocialFields;
}

const IconMap: any = {
	discord: FaDiscord,
	youtube: FaYoutube,
	instagram: FaInstagramSquare,
	twitter: FaTwitter,
};

const combineAccumulatively = (segments: string[]) => {
	const links = segments.reduce((acc, cur, curIndex) => {
		const last = curIndex > 1 ? acc[curIndex - 1] : '';
		const newPath = last + '/' + cur;
		acc.push(newPath);
		return acc;
	}, [] as string[]);
	return links;
};

const WikiHeader = ({ socialFields }: IWikiHeader) => {
	const router = useRouter();
	const { isOpen, onOpen, onClose } = useDisclosure();

	const hoverColor = useColorModeValue('red.700', 'red.600');
	const iconColor = useColorModeValue('gray.500', 'whiteAlpha.900');

	const segments = router.asPath.split('/');
	const crumbLinks = combineAccumulatively(segments);

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
				{/* <Breadcrumb display={['none', null, null, 'block']} separator={<Icon as={FaChevronRight} boxSize={3} />}>
					{crumbLinks.map((crumb, i) =>
						segments[i] === '' ? (
							<BreadcrumbItem key={i} fontWeight='bold' fontSize='sm' color='gray.500'>
								<BreadcrumbLink as={NextLink} href='/'>
									Home
								</BreadcrumbLink>
							</BreadcrumbItem>
						) : (
							<BreadcrumbItem key={i} fontWeight='bold' fontSize='sm' color='gray.500'>
								<BreadcrumbLink as={NextLink} href={crumb}>
									{nameFormatter(segments[i])}
								</BreadcrumbLink>
							</BreadcrumbItem>
						)
					)}
				</Breadcrumb> */}
				<Flex direction='row' maxW={998} width='full' justify='space-between' flex='1 1 0%' p={4} pl={0}>
					<InputGroup maxWidth={600} shadow='sm'>
						<InputLeftElement pointerEvents='none'>
							<Icon as={FaSearch} color='gray.300' />
						</InputLeftElement>
						<Input type='button' role='button' onClick={onOpen} />
						<Modal isOpen={isOpen} onClose={onClose} size='xl'>
							<ModalOverlay />
							<ModalContent>
								<ModalBody p={4}>
									<InputGroup maxWidth={756} shadow='sm'>
										<InputLeftElement pointerEvents='none'>
											<Icon as={FaSearch} color='gray.300' />
										</InputLeftElement>
										<Input variant='flushed' size='lg' placeholder='Search the wiki' />
									</InputGroup>
								</ModalBody>
							</ModalContent>
						</Modal>
					</InputGroup>
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
