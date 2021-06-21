import { ReactNode } from 'react';
import { Flex } from '@chakra-ui/react';
import { SiteSettings } from '@/models/site-settings';
import { Footer, Header } from '.';

type Props = {
	siteSettings: SiteSettings;
	children?: ReactNode;
	width?: number;
};

const Layout = ({ siteSettings, children, width = 1200 }: Props) => {
	return (
		<>
			<Flex flexDirection='column' minHeight='100vh' overflow='hidden'>
				{siteSettings?.navigation && <Header navigation={siteSettings?.navigation} maxWidth={width} />}
				<Flex
					as='main'
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
