import { Flex, Stack, VStack, Text, Heading, Icon, Link, useColorModeValue } from '@chakra-ui/react';
import { HiCube, HiHome, HiDocumentText, HiLibrary } from 'react-icons/hi';
import { InternalLink } from '@/models/objects/internal-link';
import { ExternalLink } from '@/models/objects/external-link';
import { resolveLink } from '../utils/helpers';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

interface IWikiNav {
	navData: {
		topLevelNavigation?: { links: Array<InternalLink | ExternalLink> };
		wikiNavigation?: any;
	};
}

const IconMap = {
	HiCube,
	HiHome,
	HiDocumentText,
	HiLibrary,
};

const WikiNav = ({ navData }: IWikiNav) => {
	const router = useRouter();
	const navColor = useColorModeValue('black', 'white');

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
			<VStack align='start' spacing={3} mb={8}>
				{navData.topLevelNavigation?.links.map((item) => {
					const link = resolveLink(item);

					if (!link || !link.url || !link.title) {
						return null;
					}

					if (link.type === 'internalLink') {
						return (
							<Link
								as={NextLink}
								key={link.key}
								passHref
								href={`${link.url === '/wiki' ? link.url : `/wiki` + link.url}`}
							>
								<Flex
									direction='row'
									align='center'
									width='100%'
									rounded={'md'}
									cursor='pointer'
									color={router.pathname === `/wiki${link.url}` || router.pathname === link.url ? navColor : 'gray.500'}
									_hover={{ color: navColor }}
								>
									{/* @ts-ignore */}
									<Icon borderRadius='sm' boxSize='20px' bg='red.600' color='white' as={IconMap[link.icon]} />
									<Text fontWeight='bold' ml={3}>
										{link.title}
									</Text>
								</Flex>
							</Link>
						);
					}
					return (
						<Link key={link.key} isExternal href={link.url} padding={3}>
							{link.title}
						</Link>
					);
				})}
			</VStack>
			<Heading as='h4' fontSize='md' textTransform='uppercase'>
				Getting Started
			</Heading>
		</Stack>
	);
};

export default WikiNav;
