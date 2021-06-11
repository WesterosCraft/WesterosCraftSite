import { GetStaticProps } from 'next';
import { pageQuery, siteSettingsQuery } from '@/lib/queries';
import { SiteSettings } from '@/models/site-settings';
import { Heading, Box, Flex, Text, Button, Input } from '@chakra-ui/react';
import { Layout } from '@/components/common';
import { useRouter } from 'next/router';
import { sanityClient, usePreviewSubscription } from '@/lib/sanity';
import Error from 'next/error';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import { RenderSection } from '@/components/utils';
import { Sections } from '@/models/sections';
import { MetaFields } from '@/models/meta-fields';
import { Slug } from '@sanity/types';

type PageProps = {
	content?: Sections[];
	meta?: MetaFields;
	heading?: string;
	slug: Slug;
	subheading?: string;
	caption?: string;
	title?: string;
	editions?: any;
	_createdAt: string;
	_id: 'rookery';
	_rev: string;
	_type: 'rookery';
	_updatedAt: string;
};

type Props = {
	pageData: PageProps;
	siteSettings: SiteSettings;
};

const RookeryPage = ({ pageData, siteSettings }: Props) => {
	const router = useRouter();

	const { data: page } = usePreviewSubscription(pageQuery, {
		params: { type: 'rookery', slug: pageData?.slug?.current },
		initialData: pageData,
		enabled: pageData && router.query.preview !== null,
	});
	const { heading, content, caption, subheading } = page;

	const url = 'https://westeroscraft.us6.list-manage.com/subscribe/post?u=f917cc7f538901fd1172c9ee9&amp;id=510f1ee5b1';

	const CustomForm = ({ status, onValidated }: any) => {
		let email: any;

		const submit = (e: any) => {
			e.preventDefault();

			return (
				email &&
				email.value.indexOf('@') > -1 &&
				onValidated({
					EMAIL: email.value,
				})
			);
		};

		return (
			<form>
				<Input placeholder='Email Address' className='news-input' ref={(node) => (email = node)} type='email' mb={7} />
				<Flex flexDirection='column' alignItems='center' justifyContent='center' sx={{ position: 'relative' }}>
					<Button onClick={submit} disabled={status === 'sending'}>
						Subscribe
					</Button>
					<Box
						sx={{
							position: 'absolute',
							bottom: -50,
						}}
					>
						{status === 'sending' && (
							<Text fontWeight='bold' color='pending'>
								sending...
							</Text>
						)}
						{status === 'error' && (
							<Text fontWeight='bold' color='error'>
								Something went wrong
							</Text>
						)}
						{status === 'success' && (
							<Text fontWeight='bold' color='success'>
								Success!
							</Text>
						)}
					</Box>
				</Flex>
			</form>
		);
	};

	if (!router.isFallback && !page) {
		return <Error statusCode={404} />;
	}

	return (
		<Layout meta={page?.meta} siteSettings={siteSettings}>
			<Flex
				mt={[3, 10, 75]}
				justifyContent='center'
				flexDirection={['column', null, 'row']}
				width={['100%', null, 800]}
				mx='auto'
				px={5}
			>
				<Flex
					height={300}
					flexDirection='column'
					justifyContent='center'
					alignItems='center'
					width={['100%', null, '50%']}
					pr={[3, null, 5]}
				>
					<Box my='auto' sx={{ position: 'relative' }}>
						<Heading variant='heading2' textAlign='left'>
							{heading}
						</Heading>
						<Text textAlign='left' lineHeight={1.5} maxWidth={786} mx='auto' mt={4}>
							{subheading}
							<br />
							<br />
							{caption}
						</Text>
					</Box>
				</Flex>
				<Flex
					flexDirection='column'
					my='auto'
					width={['100%', null, '50%']}
					pl={[3, null, 5]}
					sx={{
						position: 'relative',
					}}
				>
					<MailchimpSubscribe
						url={url}
						render={({ subscribe, status, message }) => (
							<CustomForm status={status} message={message} onValidated={(formData: any) => subscribe(formData)} />
						)}
					/>
				</Flex>
			</Flex>

			{content?.map((section) => {
				if (!section || Object.keys(section).length === 0) {
					return null;
				}

				return <RenderSection key={section._key} section={section} />;
			})}
		</Layout>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const pageData = await sanityClient.fetch<PageProps>(pageQuery, { type: 'rookery', slug: 'rookery' });
	const siteSettings = await sanityClient.fetch<SiteSettings>(siteSettingsQuery);

	if (!pageData) {
		return {
			notFound: true,
		};
	}

	return { props: { siteSettings, pageData }, revalidate: 60 };
};

export default RookeryPage;
