import { ReactNode } from 'react';
import { Flex, Box } from '@chakra-ui/react';
import { WikiHeader } from '@/components/common';
import { SiteSettings } from '@/models/site-settings';
import { MetaFields } from '@/models/meta-fields';
import { Footer, Seo } from '.';
import WikiNav from './wiki-nav';

type Props = {
	siteSettings: SiteSettings;
	children?: ReactNode;
	meta?: MetaFields;
	width?: number;
};

const WikiLayout = ({ siteSettings, meta, children, width = 1200 }: Props) => {
	const fallbackMeta = {
		title: siteSettings?.title ?? undefined,
		description: siteSettings?.description ?? undefined,
		keywords: siteSettings?.keywords ?? undefined,
	};
	return (
		<>
			<Seo meta={meta} fallbackMeta={fallbackMeta} />
			<Flex
				alignSelf='center'
				justifyContent='center'
				flex='1 0 auto'
				flexDirection='column'
				minHeight='100vh'
				width='100%'
				mx='auto'
			>
				<WikiHeader width={width} socialFields={siteSettings?.socialFields} />
				<Flex
					as='main'
					width='100%'
					padding={[4, 6]}
					alignSelf='center'
					justifyContent='center'
					flex='1 0 auto'
					direction='row'
					maxW={width}
				>
					<WikiNav
						navData={{
							topLevelNavigation: siteSettings?.topLevelWikiNavigation,
							wikiNavigation: siteSettings?.wikiNavigation,
						}}
					/>
					<Box flex='1 1 0%' pl={3}>
						<Flex flexDirection='row'>
							<Box className='content' width='100%' pt={10}>
								{children}
							</Box>
						</Flex>
					</Box>
				</Flex>
				<Footer socialFields={siteSettings?.socialFields} />
			</Flex>
		</>
	);
};

export default WikiLayout;
