import { ReactNode } from 'react';
import { Flex, Container, Stack, Box, Text } from '@chakra-ui/react';
import { SiteSettings } from '@/models/site-settings';
import { MetaFields } from '@/models/meta-fields';
import { Footer, Header, Seo } from '.';

type Props = {
	siteSettings: SiteSettings;
	children?: ReactNode;
	meta?: MetaFields;
};

const WikiLayout = ({ siteSettings, meta, children }: Props) => {
	const fallbackMeta = {
		title: siteSettings?.title ?? undefined,
		description: siteSettings?.description ?? undefined,
		keywords: siteSettings?.keywords ?? undefined,
	};

	return (
		<>
			<Seo meta={meta} fallbackMeta={fallbackMeta} />
			<Flex flexDirection='column' minHeight='100vh' overflow='hidden'>
				{siteSettings?.navigation && <Header navigation={siteSettings?.navigation} />}
				<Container as='main' maxWidth='8xl' width='100%' padding={6}>
					<Flex>
						<Stack
							as='nav'
							aria-label='Wiki Navigation'
							display='block'
							width={280}
							position='sticky'
							overflowY='auto'
							pr={8}
							pb={6}
							pl={6}
							pt={4}
						>
							<Text>left nav</Text>
						</Stack>

						<Box>
							<Flex flexDirection='row' px={5}>
								<Box className='content' width='100%' px={8} pt={10}>
									{children}
								</Box>
								<Stack
									as='nav'
									minWidth={256}
									width={256}
									aria-label='Wiki Table Of Contents'
									display='block'
									position='sticky'
									overflowY='auto'
								>
									<Text>table of contents</Text>
								</Stack>
							</Flex>
						</Box>
					</Flex>
				</Container>
			</Flex>
		</>
	);
};

export default WikiLayout;
