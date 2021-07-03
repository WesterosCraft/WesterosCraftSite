// @ts-nocheck
import {
	Box,
	Flex,
	Text,
	IconButton,
	Stack,
	Collapse,
	Icon,
	Link,
	Popover,
	PopoverTrigger,
	PopoverContent,
	useColorModeValue,
	useDisclosure,
	border,
} from '@chakra-ui/react';

import { HamburgerIcon, CloseIcon, ChevronDownIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { DarkModeSwitch } from '.';
import NextLink from 'next/link';
import { InternalLink } from '@/models/objects/internal-link';
import { ExternalLink } from '@/models/objects/external-link';
// import { NavItem } from '@/models/objects/nav-item';
import { isEmpty } from 'lodash';
import { SubNavItem } from '@/models/objects/sub-nav-item';
import { Logo } from './logo';
import { siteSettings } from '@/data/.';

export default function WithSubnavigation({
	navigation,
	maxWidth,
	lightHeader,
}: {
	navigation?: typeof siteSettings.navigation;
	maxWidth?: string | number;
	lightHeader?: boolean;
}) {
	const { isOpen, onToggle } = useDisclosure();

	return (
		<Box
			position='absolute'
			top={0}
			left={0}
			right={0}
			zIndex='dropdown'
			as='header'
			maxW={maxWidth}
			w={'100%'}
			marginX='auto'
			height={16}
			px={4}
		>
			<Flex minH='60px' py={{ base: 2 }} align='center' justify='space-between'>
				<Flex flex={{ base: 1, md: 'auto' }} ml={{ base: -2 }} display={{ base: 'flex', md: 'none' }}>
					<IconButton
						onClick={onToggle}
						icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
						variant={'ghost'}
						aria-label={'Toggle Navigation'}
					/>
				</Flex>

				<Logo lightHeader={lightHeader} />

				<Stack flex={{ base: 1, md: 0 }} justify={'flex-end'} align='center' direction={'row'} spacing={6}>
					<Flex display={{ base: 'none', md: 'flex' }} ml={10}>
						{navigation && <DesktopNav lightHeader={lightHeader} navigation={navigation} />}
					</Flex>
					<DarkModeSwitch lightHeader={lightHeader} />
				</Stack>
			</Flex>

			<Collapse in={isOpen} animateOpacity>
				{navigation && <MobileNav navigation={navigation} />}
			</Collapse>
		</Box>
	);
}

const DesktopNav = ({ navigation, lightHeader = false }: { navigation: typeof siteSettings.navigation }) => {
	const linkColor = useColorModeValue('gray.600', 'gray.200');
	const linkHover = useColorModeValue('gray.800', 'white');
	const dropdownHover = useColorModeValue('white', 'gray.800');

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
							fontWeight='bold'
							color={lightHeader ? 'gray.200' : linkColor}
							_hover={{
								textDecoration: 'none',
								color: lightHeader ? 'white' : linkHover,
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
									fontWeight='bold'
									color={lightHeader ? 'gray.200' : linkColor}
									_hover={{
										textDecoration: 'none',
										color: lightHeader ? 'white' : linkHover,
									}}
								>
									{navItem.title}
								</Link>
							</PopoverTrigger>

							<PopoverContent boxShadow={'xl'} bg={dropdownHover} p={4} minW={'sm'}>
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
	const linkColor = useColorModeValue('gray.600', 'gray.200');
	const linkHover = useColorModeValue('red.50', 'gray.900');

	return link._type === 'internalLink' && link.link?.slug.current ? (
		<NextLink passHref href={link.link.slug.current === 'home' ? '/' : `/${link.link.slug.current}/`}>
			<Link role={'group'} display={'block'} p={2} rounded={'md'} _hover={{ bg: linkHover }}>
				<Stack direction={'row'} align={'center'}>
					<Box>
						<Text transition={'all .3s ease'} _groupHover={{ color: 'red.600' }} fontWeight={'bold'}>
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
						<Icon color={'red.600'} w={5} h={5} as={ChevronRightIcon} />
					</Flex>
				</Stack>
			</Link>
		</NextLink>
	) : link._type === 'externalLink' && link.slug?.current ? (
		<Link
			href={link.slug.current ?? '#'}
			role={'group'}
			display={'block'}
			p={2}
			rounded={'md'}
			_hover={{ bg: linkHover }}
		>
			<Stack direction={'row'} align={'center'}>
				<Box>
					<Text transition={'all .3s ease'} _groupHover={{ color: 'red.600' }} fontWeight={'bold'}>
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
					<Icon color={'red.600'} w={5} h={5} as={ChevronRightIcon} />
				</Flex>
			</Stack>
		</Link>
	) : null;
};

const MobileNav = ({ navigation }: { navigation: typeof siteSettings.navigation }) => {
	return (
		<Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ md: 'none' }}>
			{navigation.map((navItem) => (
				<MobileNavItem key={navItem.title} link={navItem} />
			))}
		</Stack>
	);
};

const MobileNavItem = ({ link }: { link: InternalLink | ExternalLink | SubNavItem }) => {
	const { isOpen, onToggle } = useDisclosure();
	const linkColor = useColorModeValue('gray.600', 'gray.200');
	const borderColor = useColorModeValue('gray.200', 'gray.700');

	return (
		<Stack spacing={4} onClick={link._type === 'navigation.section' ? link?.links && onToggle : () => {}}>
			{link._type === 'internalLink' ? (
				<NextLink passHref href={link?.link?.slug.current === 'home' ? '/' : `/${link?.link?.slug.current}/`}>
					<Flex
						py={2}
						justify={'space-between'}
						passHref
						align={'center'}
						_hover={{
							textDecoration: 'none',
						}}
					>
						<Text fontWeight={600} color={linkColor}>
							{link.title}
						</Text>
					</Flex>
				</NextLink>
			) : link._type === 'externalLink' ? (
				<Flex
					py={2}
					as={Link}
					href={link?.slug?.current ?? '#'}
					justify={'space-between'}
					align={'center'}
					_hover={{
						textDecoration: 'none',
					}}
				>
					<Text fontWeight={600} color={linkColor}>
						{link.title}
					</Text>
				</Flex>
			) : link._type === 'navigation.section' ? (
				<>
					<Flex
						py={2}
						as={Link}
						href={'#'}
						justify={'space-between'}
						align={'center'}
						_hover={{
							textDecoration: 'none',
						}}
					>
						<Text fontWeight={600} color={linkColor}>
							{link.title}
						</Text>
						{link?.links && (
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
						<Stack mt={2} pl={4} borderLeft={1} borderStyle={'solid'} borderColor={borderColor} align={'start'}>
							{link?.links &&
								link?.links.map((child) => {
									if (child._type === 'internalLink' && child.link?.slug.current) {
										return (
											<NextLink
												key={child._key}
												passHref
												href={child.link.slug.current === 'home' ? '/' : `/${child.link.slug.current}/`}
											>
												<Link padding={3}>{child.title}</Link>
											</NextLink>
										);
									}

									if (child._type === 'externalLink' && child.slug?.current) {
										return (
											<Link
												key={child._key}
												padding={3}
												href={child?.slug?.current ?? '#'}
												justify={'space-between'}
												align={'center'}
											>
												{child.title}
											</Link>
										);
									}
								})}
						</Stack>
					</Collapse>
				</>
			) : null}
		</Stack>
	);
};
