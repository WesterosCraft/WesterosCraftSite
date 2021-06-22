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
			top={0}
			left={0}
			right={0}
			py={4}
		>
			<Flex flex='1 1 0%' justifyContent='space-between' alignItems='center'>
				<Breadcrumb separator={<Icon as={FaChevronRight} boxSize={3} />}>
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
				</Breadcrumb>
				<Flex direction='row' width='100%' justify='flex-end' flex='1 1 0%'>
					<InputGroup maxWidth={600} shadow='sm'>
						<InputLeftElement pointerEvents='none'>
							<Icon as={FaSearch} color='gray.300' />
						</InputLeftElement>
						<Input placeholder='Search the wiki' />
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
