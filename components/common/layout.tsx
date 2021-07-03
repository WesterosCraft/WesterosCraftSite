import { ReactNode } from 'react';
import { Flex } from '@chakra-ui/react';
import { Footer, Header } from '.';
import { siteSettings } from '@/data/.';

type Props = {
	siteSettings: typeof siteSettings;
	children?: ReactNode;
	width?: number;
	lightHeader?: boolean;
};

const Layout = ({ siteSettings, lightHeader = false, children, width = 1280 }: Props) => {
	return (
		<>
			<Flex as='main' flexDirection='column' minHeight='100vh' overflow='hidden' position='relative'>
				{siteSettings?.navigation && (
					<Header lightHeader={lightHeader} navigation={siteSettings?.navigation} maxWidth={width} />
				)}
				<Flex as='article' width='100%' alignSelf='center' justifyContent='center' flex='1 0 auto' direction='column'>
					{children}
				</Flex>
				<Footer
				// socialFields={siteSettings?.socialFields}
				/>
			</Flex>
		</>
	);
};

export default Layout;
