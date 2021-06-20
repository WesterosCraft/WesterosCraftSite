import { Center, Flex, HStack, Box, Input, Link, Icon, useColorModeValue } from '@chakra-ui/react';
import { FaDiscord, FaYoutube, FaInstagramSquare, FaTwitter } from 'react-icons/fa';
import { nameFormatter } from '../utils';
import { SocialFields } from '@/models/objects/social-fields';
import { Logo } from './logo';
import { DarkModeSwitch } from '.';

interface IWikiHeader {
	socialFields?: SocialFields;
	width?: number;
}

const IconMap: any = {
	discord: FaDiscord,
	youtube: FaYoutube,
	instagram: FaInstagramSquare,
	twitter: FaTwitter,
};

const WikiHeader = ({ socialFields, width }: IWikiHeader) => {
	const hoverColor = useColorModeValue('red.700', 'red.600');
	const iconColor = useColorModeValue('gray.500', 'whiteAlpha.900');
	return (
		<Box
			as='header'
			align-self='flex-start'
			borderColor={useColorModeValue('gray.200', 'gray.700')}
			borderWidth={0}
			borderBottomWidth={1}
			borderStyle='solid'
			position='sticky'
			top={0}
			left={0}
			right={0}
			bg={useColorModeValue('white', 'gray.800')}
			zIndex='banner'
			boxShadow='sm'
			px={6}
			py={4}
		>
			<Center maxW={width} mx='auto'>
				<Logo />
				<Flex flex='1 1 0%' pl={3}>
					<Input placeholder='Search the wiki' />
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
						<DarkModeSwitch />
					</HStack>
				</Flex>
			</Center>
		</Box>
	);
};

export default WikiHeader;
