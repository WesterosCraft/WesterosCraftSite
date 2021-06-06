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
};

const customTheme = extendTheme(overrides);

export default customTheme;
