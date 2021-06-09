import { Flex, Box, Text, Heading, useColorModeValue } from '@chakra-ui/react';
import { IoMdQuote } from 'react-icons/io';

const Quote = ({ data: { quote = '', author = '', _type = 'quoteBlock' } }) => (
	<Box className={`${_type}__section`} width={['80%', null, '75%', 800]} mx='auto'>
		<Flex
			as='blockquote'
			p={[5, null, 10]}
			sx={{
				position: 'relative',
				boxShadow:
					'inset 0 0 0 4px var(--theme-colors-text, #333333), inset -4px -4px 0 6px var(--theme-colors-gray-400, #cccccc)',
			}}
			bg={useColorModeValue('white', 'black')}
		>
			<Heading
				size='lg'
				lineHeight={2}
				fontStyle='italic'
				fontWeight='normal'
				color={useColorModeValue('black', 'white')}
			>
				{quote}
			</Heading>
			<IoMdQuote
				size={76}
				style={{
					position: 'absolute',
					transform: 'rotate(180deg)',
					top: -30,
					left: -30,
				}}
			/>
			<IoMdQuote
				size={76}
				style={{
					position: 'absolute',
					bottom: -30,
					right: -30,
				}}
			/>
		</Flex>
		<Box
			width='fit-content'
			sx={{
				boxShadow:
					'inset 0 0 0 2px var(--theme-colors-text, #333333), inset -2px -2px 0 3px var(--theme-colors-gray-400, #cccccc)',
			}}
			bg={useColorModeValue('white', 'black')}
			mt={4}
			p={4}
		>
			<Text variant='heading5' color={useColorModeValue('black', 'white')}>
				-- {author}
			</Text>
		</Box>
	</Box>
);
export default Quote;
