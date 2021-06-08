import { GetStaticProps } from 'next';
import { pageQuery, siteSettingsQuery } from '@/lib/queries';
import { SiteSettings } from '@/models/site-settings';
import { Heading, Box, Flex, Text, Button, Input, Stack } from '@chakra-ui/react';
import { Layout } from '@/components/common';
import { useRouter } from 'next/router';
import { sanityClient, usePreviewSubscription, urlFor } from '@/lib/sanity';
import Error from 'next/error';
// import { QuoteBlock } from '../components/atoms/quoteBlock';
import Image from 'next/image';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

const RookeryPage = ({ pageData, siteSettings }: any) => {
	const router = useRouter();

	const { data: page } = usePreviewSubscription(pageQuery, {
		params: { type: 'rookery', slug: pageData?.slug?.current },
		initialData: pageData,
		enabled: pageData && router.query.preview !== null,
	});
	console.log('👉 ~ RookeryPage ~ page', page);
	const { heading, editions, content } = page;

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
				width={[1, null, 800]}
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
							The Rookery is a community created magazine that details all the latest happenings in the realm of
							WesterosCraft. Sign up to keep up to date with the server!
							<br />
							<br />
							Sent once a quarter.
							{/* {subheading} */}
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
			<Heading variant='h3' textAlign='center' mt={20}>
				All Editions
			</Heading>

			<Stack mt={8} flexDirection='row' justifyContent='center' alignItems='center' flexWrap='wrap'>
				{editions.map((item: any, i: number) => {
					const srcurl = item && item.thumbnail && urlFor(item.thumbnail.asset._ref).url();
					return (
						item &&
						item.thumbnail && (
							<Flex
								as='a'
								flexShrink={1}
								target='_blank'
								rel='noreferrer'
								href={item.link}
								key={item._key}
								maxWidth={368}
								p={4}
								sx={{
									position: 'relative',
									'&:hover .edition-image': {
										transform: 'scale(1.015)',
										transition: 'transform .3s ease, filter .3s ease',
										filter: 'brightness(40%)',
										cursor: 'pointer',
									},
									'&:hover .edition-title': {
										visibility: 'visible',
									},
								}}
							>
								<Image
									priority={i <= 2}
									width={336}
									height={435}
									src={srcurl}
									className='edition-image'
									alt={item.title}
								/>
								<Box
									className='edition-title'
									sx={{
										cursor: 'pointer',
										visibility: 'hidden',
										position: 'absolute',
										top: '50%',
										left: '50%',
										transform: 'translate(-50%, -50%)',
									}}
								>
									<Heading textAlign='center' color='white' variant='h3'>
										{item.title} Issue
									</Heading>
									<Text mt={3} textAlign='center' color='white' variant='h3'>
										Click to view
									</Text>
								</Box>
							</Flex>
						)
					);
				})}
			</Stack>

			{/* <QuoteBlock
				content={quote || 'A reader lives a thousand lives before he dies. The man who never reads lives only one.'}
				author={quoteAuthor || 'Jojen Reed'}
				darkMode={darkMode.value}
			/> */}
		</Layout>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const pageData = await sanityClient.fetch<any>(pageQuery, { type: 'rookery', slug: 'rookery' });
	const siteSettings = await sanityClient.fetch<SiteSettings>(siteSettingsQuery);

	if (!pageData) {
		return {
			notFound: true,
		};
	}

	return { props: { siteSettings, pageData }, revalidate: 60 };
};

export default RookeryPage;
