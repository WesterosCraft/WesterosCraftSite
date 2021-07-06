import { ReactNode } from 'react';
import { Flex, Box } from '@chakra-ui/react';
import { MetaFields } from '@/models/meta-fields';
import WikiNav from './wiki-nav';
import { siteSettings } from '@/data/.';

type Props = {
	siteSettings: typeof siteSettings;
	children?: ReactNode;
	meta?: MetaFields;
	width?: number;
};

const WikiLayout = ({ siteSettings, children, width = 1280 }: Props) => {
	return (
		<>
			<Flex px={4} width='100%' alignSelf='center' justifyContent='center' flex='1 0 auto' direction='row' maxW={width}>
				<WikiNav
					navData={{
						topLevelNavigation: siteSettings?.topLevelWikiNavigation,
						wikiNavigation: siteSettings?.wikiNavigation,
					}}
				/>
				<Box flex='1 1 0%' pl={[0, null, 3]}>
					<Box className='content' width='100%' pt={16}>
						{children}
					</Box>
				</Box>
			</Flex>
		</>
	);
};

export default WikiLayout;
