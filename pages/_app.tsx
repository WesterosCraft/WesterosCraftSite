import { AppProps } from 'next/app';
import { CSSReset, ChakraProvider } from '@chakra-ui/react';
import { Head } from '@/components/common';
import theme from '../constants/theme';
import type { Page } from '../globals';
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
			{getLayout(<Component {...pageProps} />)}
		</ChakraProvider>
	);
};

export default MyApp;
