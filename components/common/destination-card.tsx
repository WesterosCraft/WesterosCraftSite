import { BuildTypes, BuildStatuses, Regions } from '@/models/utils';
import { Heading, Text, Flex, Center, HStack, Button, useColorModeValue, Box } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import BlockContent from '@sanity/block-content-to-react';
import { RegionIcon, ProjectStatusIcon, BuildTypeIcon } from '@/components/common';
import BrightSquares from '../../public/bright-squares.png';

const myLoader = ({ src, width }: { src: string; width: number | string }) => {
	return `${src}?h=${width}&w=${width}&q=75`;
};

type Props = {
	name: string;
	imageUrl?: string;
	blurDataUrl?: string;
	entry?: any;
	house?: string;
	region?: Regions;
	status?: BuildStatuses;
	url?: string;
	buildType?: BuildTypes;
};

const DestinationCard = ({ imageUrl, blurDataUrl, name, entry, house, region, status, url, buildType }: Props) => {
	return (
		<Center>
			<Flex
				height='100%'
				direction='column'
				shadow='lg'
				borderRadius='base'
				overflow='hidden'
				flex='1 1 0%'
				bg={useColorModeValue('white', 'gray.700')}
			>
				{imageUrl ? (
					<Image
						src={imageUrl!}
						blurDataURL={blurDataUrl!}
						loader={myLoader}
						placeholder='blur'
						width={322}
						height={201}
						alt={name}
					/>
				) : (
					<Image src={BrightSquares} loader={myLoader} placeholder='blur' width={322} height={201} alt={name} />
				)}

				<Center flexDirection='column' p={3} justifyContent='space-between' flexGrow={1}>
					<Box>
						<Heading textAlign='center' noOfLines={1} fontWeight='black' fontSize='2xl'>
							{name}
						</Heading>
						<Text fontSize='sm' textAlign='center' fontWeight='bold' color={useColorModeValue('gray.500', 'gray.300')}>
							{house ?? 'N/A'}
						</Text>
						{entry && (
							<Text as='span' noOfLines={3} fontSize='sm' mt={2}>
								<BlockContent blocks={entry} />
							</Text>
						)}
					</Box>

					<Flex width='100%' justify='space-between' mt={6}>
						<HStack>
							{region && <RegionIcon boxSize='16px' region={region} />}
							{status && <ProjectStatusIcon boxSize='16px' projectStatus={status} />}
							{buildType && <BuildTypeIcon boxSize='16px' buildType={buildType} />}
						</HStack>
						{url && (
							<Link href={url} passHref>
								<Button variant='outline' colorScheme='green' size='xs' alignSelf='flex-end'>
									Read More
								</Button>
							</Link>
						)}
					</Flex>
				</Center>
			</Flex>
		</Center>
	);
};

export default DestinationCard;
