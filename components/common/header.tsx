import {
	Box,
	Flex,
	Text,
	IconButton,
	Button,
	Stack,
	Collapse,
	Icon,
	Link,
	Popover,
	PopoverTrigger,
	PopoverContent,
	useColorModeValue,
	useBreakpointValue,
	useDisclosure,
} from '@chakra-ui/react';

import { HamburgerIcon, CloseIcon, ChevronDownIcon, ChevronRightIcon } from '@chakra-ui/icons';

import NextLink from 'next/link';
import { InternalLink } from '@/models/objects/internal-link';
import { ExternalLink } from '@/models/objects/external-link';
import { NavItem } from '@/models/objects/nav-item';
import { isEmpty } from 'lodash';

export default function WithSubnavigation({ navigation }: { navigation: NavItem[] }) {
	const { isOpen, onToggle } = useDisclosure();

	return (
		<Box>
			<Flex
				bg={useColorModeValue('white', 'gray.800')}
				color={useColorModeValue('gray.600', 'white')}
				minH={'60px'}
				py={{ base: 2 }}
				px={{ base: 4 }}
				borderBottom={1}
				borderStyle={'solid'}
				borderColor={useColorModeValue('gray.200', 'gray.900')}
				align={'center'}
			>
				<Flex flex={{ base: 1, md: 'auto' }} ml={{ base: -2 }} display={{ base: 'flex', md: 'none' }}>
					<IconButton
						onClick={onToggle}
						icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
						variant={'ghost'}
						aria-label={'Toggle Navigation'}
					/>
				</Flex>
				<Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
					<Text
						textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
						fontFamily={'heading'}
						color={useColorModeValue('gray.800', 'white')}
					>
						Logo
					</Text>
				</Flex>

				<Stack flex={{ base: 1, md: 0 }} justify={'flex-end'} direction={'row'} spacing={6}>
					<Flex display={{ base: 'none', md: 'flex' }} ml={10}>
						<DesktopNav navigation={navigation} />
					</Flex>
					<Button
						display={{ base: 'none', md: 'inline-flex' }}
						fontSize={'sm'}
						fontWeight={600}
						color={'white'}
						bg={'pink.400'}
						href={'#'}
						_hover={{
							bg: 'pink.300',
						}}
					>
						Sign Up
					</Button>
				</Stack>
			</Flex>

			<Collapse in={isOpen} animateOpacity>
				<MobileNav navigation={navigation} />
			</Collapse>
		</Box>
	);
}

const DesktopNav = ({ navigation }: { navigation: NavItem[] }) => {
	return (
		<Stack direction={'row'} spacing={4}>
			{navigation.map((navItem) => {
				if (
					!navItem ||
					(navItem._type === 'internalLink' && !navItem.link) ||
					(navItem._type === 'externalLink' && !navItem.slug) ||
					(navItem._type === 'navigation.section' && isEmpty(navItem.links))
				) {
					return null;
				}

				if (navItem._type === 'internalLink' && navItem.link?.slug.current) {
					return (
						<NextLink
							key={navItem._key}
							passHref
							href={navItem.link.slug.current === 'home' ? '/' : `/${navItem.link.slug.current}/`}
						>
							<Link padding={3}>{navItem.title}</Link>
						</NextLink>
					);
				}

				if (navItem._type === 'externalLink' && navItem.slug?.current) {
					return (
						<Link
							key={navItem._key}
							p={2}
							href={navItem.slug.current ?? '#'}
							fontSize={'sm'}
							fontWeight={500}
							target='_blank'
							color={useColorModeValue('gray.600', 'gray.200')}
							_hover={{
								textDecoration: 'none',
								color: useColorModeValue('gray.800', 'white'),
							}}
						>
							{navItem.title}
						</Link>
					);
				}

				if (navItem._type === 'navigation.section') {
					return (
						<Popover trigger={'hover'} placement={'bottom-start'} key={navItem._key}>
							<PopoverTrigger>
								<Link
									p={2}
									fontSize={'sm'}
									fontWeight={500}
									color={useColorModeValue('gray.600', 'gray.200')}
									_hover={{
										textDecoration: 'none',
										color: useColorModeValue('gray.800', 'white'),
									}}
								>
									{navItem.title}
								</Link>
							</PopoverTrigger>

							<PopoverContent
								border={0}
								boxShadow={'xl'}
								bg={useColorModeValue('white', 'gray.800')}
								p={4}
								rounded={'xl'}
								minW={'sm'}
							>
								<Stack>
									{navItem.links.map((link) => (
										<DesktopSubNav key={link._key} link={link} />
									))}
								</Stack>
							</PopoverContent>
						</Popover>
					);
				}
			})}
		</Stack>
	);
};

const DesktopSubNav = ({ link }: { link: InternalLink | ExternalLink }) => {
	return link._type === 'internalLink' && link.link?.slug.current ? (
		<Link
			href={link.link.slug.current === 'home' ? '/' : `/${link.link.slug.current}/`}
			role={'group'}
			display={'block'}
			p={2}
			rounded={'md'}
			_hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}
		>
			<Stack direction={'row'} align={'center'}>
				<Box>
					<Text transition={'all .3s ease'} _groupHover={{ color: 'pink.400' }} fontWeight={500}>
						{link.title}
					</Text>
					<Text fontSize={'sm'}>{link.description}</Text>
				</Box>
				<Flex
					transition={'all .3s ease'}
					transform={'translateX(-10px)'}
					opacity={0}
					_groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
					justify={'flex-end'}
					align={'center'}
					flex={1}
				>
					<Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
				</Flex>
			</Stack>
		</Link>
	) : link._type === 'externalLink' && link.slug?.current ? (
		<Link
			href={link.slug.current ?? '#'}
			role={'group'}
			display={'block'}
			p={2}
			rounded={'md'}
			_hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}
		>
			<Stack direction={'row'} align={'center'}>
				<Box>
					<Text transition={'all .3s ease'} _groupHover={{ color: 'pink.400' }} fontWeight={500}>
						{link.title}
					</Text>
					<Text fontSize={'sm'}>{link.description}</Text>
				</Box>
				<Flex
					transition={'all .3s ease'}
					transform={'translateX(-10px)'}
					opacity={0}
					_groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
					justify={'flex-end'}
					align={'center'}
					flex={1}
				>
					<Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
				</Flex>
			</Stack>
		</Link>
	) : null;
};

const MobileNav = ({ navigation }: { navigation: NavItem[] }) => {
	return (
		<Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ md: 'none' }}>
			{navigation.map((navItem) => (
				<MobileNavItem key={navItem.title} {...navItem} />
			))}
		</Stack>
	);
};

const MobileNavItem = ({ label, children, href }: any) => {
	const { isOpen, onToggle } = useDisclosure();

	return (
		<Stack spacing={4} onClick={children && onToggle}>
			<Flex
				py={2}
				as={Link}
				href={href ?? '#'}
				justify={'space-between'}
				align={'center'}
				_hover={{
					textDecoration: 'none',
				}}
			>
				<Text fontWeight={600} color={useColorModeValue('gray.600', 'gray.200')}>
					{label}
				</Text>
				{children && (
					<Icon
						as={ChevronDownIcon}
						transition={'all .25s ease-in-out'}
						transform={isOpen ? 'rotate(180deg)' : ''}
						w={6}
						h={6}
					/>
				)}
			</Flex>

			<Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
				<Stack
					mt={2}
					pl={4}
					borderLeft={1}
					borderStyle={'solid'}
					borderColor={useColorModeValue('gray.200', 'gray.700')}
					align={'start'}
				>
					{children &&
						children.map((child: any) => (
							<Link key={child.label} py={2} href={child.href}>
								{child.label}
							</Link>
						))}
				</Stack>
			</Collapse>
		</Stack>
	);
};
