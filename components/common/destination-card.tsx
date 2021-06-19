import { DestinationStatuses, Regions } from '@/models/utils';
import { Heading, Text, Flex, Center, HStack, Button } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import BlockContent from '@sanity/block-content-to-react';
import RegionIcon from './region-icon';

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
	status?: DestinationStatuses;
	url?: string;
};

const DestinationCard = ({ imageUrl, blurDataUrl, name, entry, house, region, status, url }: Props) => {
	return (
		<Center>
			<Flex direction='column' shadow='lg' borderRadius='base' overflow='hidden' flex='1 1 0%'>
				{imageUrl && (
					<Image
						src={imageUrl!}
						blurDataURL={blurDataUrl!}
						loader={myLoader}
						placeholder='blur'
						width={322}
						height={201}
						alt={name}
					/>
				)}

				<Center flexDirection='column' p={3}>
					<Heading fontWeight='black' fontSize='2xl'>
						{name}
					</Heading>
					{house && (
						<Text fontSize='sm' textAlign='center' fontWeight='bold' color='gray.500'>
							{house}
						</Text>
					)}
					{entry && (
						<Text noOfLines={3} fontSize='sm' mt={2}>
							<BlockContent blocks={entry} />
						</Text>
					)}
					{region && <RegionIcon region={region} />}

					<HStack width={'100%'} justify='flex-end' mt={6}>
						{url && (
							<Link href={url} passHref>
								<Button variant='outline' colorScheme='teal' size='xs' alignSelf='flex-end'>
									Read More
								</Button>
							</Link>
						)}
					</HStack>
				</Center>
			</Flex>
		</Center>
	);
};

export default DestinationCard;
