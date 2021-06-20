import { Center, Flex, HStack, Box, Input, Link, Icon } from '@chakra-ui/react';
import { FaDiscord, FaYoutube, FaInstagramSquare, FaTwitter } from 'react-icons/fa';
import { nameFormatter } from '../utils';
import { SocialFields } from '@/models/objects/social-fields';
import { Logo } from './logo';
import Image from 'next/image';
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
	return (
		<Box
			as='header'
			align-self='flex-start'
			borderColor='gray.200'
			borderWidth={0}
			borderBottomWidth={1}
			borderStyle='solid'
			position='sticky'
			top={0}
			left={0}
			right={0}
			bg='white'
			zIndex='banner'
			boxShadow='sm'
			px={6}
		>
			<Center maxW={width} mx='auto'>
				<Box display={['none', null, 'block']} maxWidth={260} overflowY='auto' flex='1 1 260px' pr={4} pb={6} pt={4}>
					<Logo />
				</Box>
				<Flex flex='1 1 0%' pl={3}>
					<Input placeholder='Search the wiki' />
					<HStack ml={4} spacing={3}>
						{socialFields &&
							Object.entries(socialFields).map((key) => {
								return (
									key[0] !== '_type' && (
										<Link href={key[1]} isExternal>
											<Icon
												aria-label={nameFormatter(key[0])}
												boxSize={'20px'}
												color='gray.500'
												transitionDuration='fast'
												transitionProperty='common'
												transitionTimingFunction='ease-out'
												_hover={{ color: 'red.700' }}
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
