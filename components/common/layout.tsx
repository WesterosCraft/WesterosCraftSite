import { ReactNode } from 'react';
import { Flex } from '@chakra-ui/react';
import { Footer, Header } from '.';
import { siteSettings } from '@/data/.';

type Props = {
	siteSettings: typeof siteSettings;
	children?: ReactNode;
	width?: number;
};

const Layout = ({ siteSettings, children, width = 1280 }: Props) => {
	return (
		<>
			<Flex as='main' flexDirection='column' minHeight='100vh' overflow='hidden'>
				{siteSettings?.navigation && <Header navigation={siteSettings?.navigation} maxWidth={width} />}
				<Flex
					as='article'
					maxWidth={width}
					width='100%'
					padding={[4, 6]}
					alignSelf='center'
					justifyContent='center'
					flex='1 0 auto'
					direction='column'
				>
					{children}
				</Flex>
				<Footer socialFields={siteSettings?.socialFields} />
			</Flex>
		</>
	);
};

export default Layout;
