import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
	sm: '30em',
	md: '48em',
	lg: '62em',
	xl: '80em',
});

const overrides = {
	useSystemColorMode: false,
	initialColorMode: 'dark',
	breakpoints,
	fonts: {
		body: 'Raleway, sans-serif',
		heading: 'Sen, sans-serif',
		mono: 'Menlo, monospace',
	},
	fontWeights: {
		thin: 200,
		light: 300,
		normal: 400,
		medium: 500,
		bold: 600,
		bolder: 700,
	},
	components: {
		Button: {
			variants: {
				'with-black-gradient': {
					bgGradient: 'linear(to-t, black,blackAlpha.300)',
					color: 'white',
					_hover: {
						color: 'black',
						bgGradient: 'linear(to-t, white,whiteAlpha.700)',
					},
				},
				'with-red-gradient': {
					bgGradient: 'linear(to-t, rgba(147, 41, 30, .9), rgba(237, 33, 58, .9))',
					color: 'white',
					_hover: {
						bgGradient: 'linear(to-t, rgba(147, 41, 30, .7), rgba(237, 33, 58, .7))',
					},
				},
			},
		},
	},
};

const customTheme = extendTheme(overrides);

export default customTheme;
