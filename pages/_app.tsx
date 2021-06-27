import { AppProps } from 'next/app';
import { CSSReset, ChakraProvider } from '@chakra-ui/react';
import { Head } from '@/components/common';
import { Global } from '@emotion/react';
import theme from '../constants/theme';
import type { Page } from '..';
import siteSettings from '../constants/site-settings.json';
import { Layout } from '@/components/common';

type Props = AppProps & {
	Component: Page;
};

const MyApp = ({ Component, pageProps }: Props) => {
	const getLayout = Component.getLayout ?? ((page) => <Layout siteSettings={siteSettings}>{page}</Layout>);
	return (
		<ChakraProvider theme={theme}>
			<Head />
			<CSSReset />
			<Global
				styles={{
					'.youtubeContainer': {
						position: 'relative',
						width: '100%',
						height: 0,
						paddingBottom: '56.25%',
						overflow: 'hidden',
						marginBottom: '50px',
					},

					'.youtubeContainer iframe': {
						width: '100%',
						height: '100%',
						position: 'absolute',
						top: 0,
						left: 0,
					},
				}}
			/>
			{getLayout(<Component {...pageProps} />)}
		</ChakraProvider>
	);
};

export default MyApp;
