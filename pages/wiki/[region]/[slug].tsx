import { GetStaticProps } from 'next';
import Error from 'next/error';
import { useRouter } from 'next/router';
import { allBuildsSlug, buildQuery } from '@/lib/queries';
import { sanityClient, usePreviewSubscription } from '@/lib/sanity';
import { Seo, WikiLayout, Layout, ImageSlider } from '@/components/common';
import { kebabCase, isEmpty } from 'lodash';
import { siteSettings } from '@/data/.';
import { BuildEntry } from '@/models/objects/build-entry';
import {
	Heading,
	Flex,
	Box,
	Table,
	Tbody,
	Tr,
	Th,
	Td,
	Thead,
	Tfoot,
	Button,
	Link,
	useColorModeValue,
	useDisclosure,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalCloseButton,
} from '@chakra-ui/react';
import { RichText } from '@/components/sections';
import { nameFormatter } from '@/components/utils';
import Image from 'next/image';
import BrightSquares from '../../../public/bright-squares.png';
import { LayoutPage } from '@/models/page';

interface IBuildPage {
	buildData: BuildEntry;
}

const myLoader = ({ src = '', width = 0 }) => {
	return `${src}?fit=min&crop=center&h=350&w=${width}&q=100`;
};

const BuildPage = ({ buildData }: IBuildPage) => {
	const router = useRouter();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const borderColor = useColorModeValue('blackAlpha.300', 'whiteAlpha.300');

	const { data: build } = usePreviewSubscription(buildQuery, {
		params: { slug: buildData?.slug?.current },
		initialData: buildData,
		enabled: buildData && router.query.preview !== null,
	});

	const projectLeadFormatter = (string: string) => {
		if (!string) {
			return null;
		}
		return string.includes(',') && string.split(',').length > 0 ? 'Project Leads' : 'Project Lead';
	};

	const projectDetailsMap = [
		{
			label: 'Region',
			accessor: build?.region && nameFormatter(build?.['region']),
		},
		{
			label: 'House',
			accessor: build?.['house'],
		},
		{
			label: 'Status',
			accessor: build?.projectStatus && nameFormatter(build?.['projectStatus']),
		},
		{
			label: 'Type',
			accessor: build?.buildType && nameFormatter(build?.['buildType']),
		},
		{
			label: 'Warp',
			accessor: build?.['warp'],
		},
		{
			label: build?.projectLead && projectLeadFormatter(build?.['projectLead']),
			accessor: build?.['projectLead'],
		},
		{
			label: 'Date Started',
			accessor: build?.['dateStarted'],
		},
		{
			label: 'Date Completed',
			accessor: build?.['dateCompleted'],
		},
	];

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
				backgroundImage={isEmpty(build?.images) ? `url(${BrightSquares.src})` : undefined}
				maxHeight='350px'
				width='100%'
				overflow='hidden'
			>
				<Heading zIndex='docked' fontWeight='800' color='white' position='absolute' bottom={5} left={5}>
					{build?.name}
				</Heading>
				{build?.banner && (
					<Box
						zIndex='docked'
						color='white'
						position='absolute'
						bottom={[2, null, 5]}
						right={[2, null, 5]}
						filter='drop-shadow(15px 11px 6px rgb(41, 41, 43, .80))'
						maxW={[45, 65, null, 75]}
					>
						<Image
							src={build?.banner?.url}
							alt={`${build?.name} Banner`}
							placeholder='blur'
							blurDataURL={build?.banner?.metadata?.lqip!}
							width={75}
							height={150}
						/>
					</Box>
				)}
				{build?.displayImage && (
					<Image
						src={build?.displayImage?.url ?? ''}
						alt={build?.name}
						placeholder='blur'
						blurDataURL={build.displayImage?.metadata?.lqip!}
						width={976}
						height={350}
						loader={myLoader}
					/>
				)}
			</Box>
			<Box>
				<Flex
					ml={[0, null, null, 3]}
					mt={[3, null, null, 0]}
					mb={3}
					borderRadius='md'
					borderWidth='1px'
					borderStyle='solid'
					borderColor={borderColor}
					float={['none', null, null, 'right']}
					display='inline-flex'
					width={['100%', null, 'auto']}
				>
					<Table size='sm' variant='striped'>
						<Thead>
							<Tr>
								<Th colSpan={2}>
									<Heading fontSize={['xl', null, null, '2xl']}>Project Details</Heading>
								</Th>
							</Tr>
						</Thead>
						<Tbody>
							{!isEmpty(build?.images) && build?.images && (
								<Tr>
									<Td textAlign='center' colSpan={2}>
										<Box position='relative'>
											<Image
												src={(build?.images?.[1]?.url || build?.images?.[0]?.url) ?? ''}
												placeholder='blur'
												blurDataURL={(build?.images?.[1]?.metadata?.lqip || build?.images?.[0]?.metadata?.lqip) ?? ''}
												width={350}
												height={197}
												alt='Project status display image'
											/>
											<Box position='absolute' bottom={3} right={[3]}>
												<Button
													onClick={onOpen}
													variant='outline'
													size='xs'
													bg='whiteAlpha.400'
													color='blackAlpha.900'
													textDecoration='none'
												>
													More Images
												</Button>
												<Modal size='3xl' isOpen={isOpen} onClose={onClose}>
													<ModalOverlay />
													<ModalContent>
														<ModalHeader>
															<Heading size='1xl'>{build.name}</Heading>
														</ModalHeader>
														<ModalCloseButton />
														<ModalBody>
															<ImageSlider slides={build?.images} />
														</ModalBody>
													</ModalContent>
												</Modal>
											</Box>
										</Box>
									</Td>
								</Tr>
							)}
							{projectDetailsMap.map(
								(deet) =>
									deet.accessor && (
										<Tr key={deet.label}>
											<Td fontSize='sm' fontWeight='bold'>
												{deet.label}
											</Td>
											<Td fontSize='sm'>{deet.accessor}</Td>
										</Tr>
									)
							)}
						</Tbody>
						{(build?.application && build?.application !== '') ||
							(build?.dynmapInformation && !isEmpty(build?.dynmapInformation) && (
								<Tfoot>
									<Tr>
										{build?.application !== '' && build?.application && (
											<Td
												textAlign='center'
												colSpan={!build?.dynmapInformation || isEmpty(build?.dynmapInformation) ? 2 : 1}
											>
												<Link
													textDecoration='none'
													href={build?.application}
													passHref
													isExternal
													_hover={{ textDecoration: 'none' }}
												>
													<Button variant='outline' size='xs' colorScheme='gray' textDecoration='none'>
														Application
													</Button>
												</Link>
											</Td>
										)}
										{build?.dynmapInformation && !isEmpty(build?.dynmapInformation) && (
											<Td textAlign='center' colSpan={!build?.application || build?.application === '' ? 2 : 1}>
												<Link
													isExternal
													textDecoration='none'
													href={`https://mc.westeroscraft.com/?mapname=flat&zoom=${
														build?.dynmapInformation.zoom ?? '4'
													}&x=${build?.dynmapInformation.xCoord ?? '0'}&z=${build?.dynmapInformation.yCoord ?? '0'}`}
													_hover={{ textDecoration: 'none' }}
												>
													<Button variant='outline' size='xs' colorScheme='gray' textDecoration='none'>
														View On Map
													</Button>
												</Link>
											</Td>
										)}
									</Tr>
								</Tfoot>
							))}
					</Table>
				</Flex>
				{/* //@ts-ignore */}
				<RichText data={{ copy: build?.entry }} />
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
	const paths = data?.map((build) => ({ params: { slug: build?.slug?.current, region: kebabCase(build?.region) } }));

	return {
		paths,
		fallback: true,
	};
};

BuildPage.getLayout = (page: LayoutPage) => (
	<Layout siteSettings={siteSettings}>
		<WikiLayout siteSettings={siteSettings}>{page}</WikiLayout>
	</Layout>
);

export default BuildPage;
