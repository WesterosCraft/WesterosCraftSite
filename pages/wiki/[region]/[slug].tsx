import { GetStaticProps } from 'next';
import Error from 'next/error';
import { useRouter } from 'next/router';
import { allBuildsSlug, buildQuery } from '@/lib/queries';
import { sanityClient, usePreviewSubscription } from '@/lib/sanity';
import { Seo, WikiLayout, Layout } from '@/components/common';
import { kebabCase, isEmpty } from 'lodash';
import { siteSettings } from '@/data/.';
import type { Page } from '../../../globals';
import { BuildEntry } from '@/models/objects/build-entry';
import { Heading, Flex, Box, Table, Tbody, Tr, Th, Td, Thead, useColorModeValue } from '@chakra-ui/react';
import { RichText } from '@/components/sections';
import { nameFormatter } from '@/components/utils';
import { urlFor } from '@/lib/sanity';
import Image from 'next/image';
interface IBuildPage {
	buildData: BuildEntry;
}

const myLoader = ({ src, width }: any) => {
	return `${src}?w=${width}&q=100`;
};

const BuildPage = ({ buildData }: IBuildPage) => {
	const router = useRouter();

	const { data: build } = usePreviewSubscription(buildQuery, {
		params: { slug: buildData?.slug?.current },
		initialData: buildData,
		enabled: buildData && router.query.preview !== null,
	});

	console.log('👉 ~ BuildPage ~ build', build);
	const projectLeadFormatter = (string: string) => {
		if (!string) {
			return null;
		}
		return string.includes(',') && string.split(',').length > 0 ? 'Project Leads' : 'Project Lead';
	};

	const projectDetailsMap = [
		{
			label: 'Region',
			accessor: nameFormatter(build['region']),
		},
		{
			label: 'House',
			accessor: build['house'],
		},
		{
			label: 'Status',
			accessor: nameFormatter(build['projectStatus']),
		},
		{
			label: 'Type',
			accessor: nameFormatter(build['buildType']),
		},
		{
			label: 'Warp',
			accessor: build['warp'],
		},
		{
			label: projectLeadFormatter(build['projectLead']),
			accessor: build['projectLead'],
		},
		{
			label: 'Date Started',
			accessor: build['dateStarted'],
		},
		{
			label: 'Date Completed',
			accessor: build['dateCompleted'],
		},
	];

	const borderColor = useColorModeValue('blackAlpha.300', 'whiteAlpha.300');

	if (!router.isFallback && !build) {
		return <Error statusCode={404} />;
	}

	return (
		<>
			<Seo meta={build?.meta} />

			<Box
				position='relative'
				borderRadius='3xl'
				borderBottomLeftRadius='0px'
				borderBottomRightRadius='0px'
				bg='gray.500'
				height='350px'
				width='100%'
				overflow='hidden'
			>
				<Heading zIndex='docked' fontWeight='800' color='white' position='absolute' bottom={5} left={5}>
					{build.name}
				</Heading>
				{!isEmpty(build.images) && urlFor(build?.images?.[0]?.asset._ref).url() && (
					<Image
						loader={myLoader}
						src={urlFor(build?.images?.[0]?.asset._ref).url()!}
						layout='fill'
						objectFit='cover'
						// height={350}
						// width={960}
						alt={build.name}
					/>
				)}
			</Box>
			<Box>
				<Flex
					ml={[0, null, null, 2]}
					mt={[2, null, null, 0]}
					mb={2}
					borderRadius='md'
					borderWidth='1px'
					borderStyle='solid'
					borderColor={borderColor}
					float={['none', null, null, 'right']}
					display='inline-flex'
				>
					<Table size='sm' variant='striped'>
						<Thead>
							<Tr>
								<Th>
									<Heading fontSize={['xl', null, null, '2xl']}>Project Details</Heading>
								</Th>
							</Tr>
						</Thead>
						<Tbody>
							{!isEmpty(build.images) && (
								<Tr>
									<Td textAlign='center' colSpan={2}>
										<Image width={350} height={197} alt='iamge' src={urlFor(build.images[0].asset._ref).url() ?? ''} />
									</Td>
								</Tr>
							)}
							{projectDetailsMap.map((deet) => (
								<Tr key={deet.label}>
									<Td fontSize='sm' fontWeight='bold'>
										{deet.label}
									</Td>
									<Td fontSize='sm'>{deet.accessor}</Td>
								</Tr>
							))}
						</Tbody>
					</Table>
				</Flex>
				<RichText data={{ copy: build.entry }} />
			</Box>
		</>
	);
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const slug = params?.slug?.toString();
	const buildData = await sanityClient.fetch<any>(buildQuery, {
		slug,
	});

	return {
		props: {
			buildData,
		},
		revalidate: 60,
	};
};

export const getStaticPaths = async () => {
	const data = await sanityClient.fetch<Array<BuildEntry>>(allBuildsSlug);
	const paths = data.map((build) => ({ params: { slug: build.slug.current, region: kebabCase(build.region) } }));

	return {
		paths,
		fallback: true,
	};
};

BuildPage.getLayout = (page: Page) => (
	<Layout siteSettings={siteSettings}>
		<WikiLayout siteSettings={siteSettings}>{page}</WikiLayout>
	</Layout>
);

export default BuildPage;
