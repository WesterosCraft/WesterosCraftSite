import { Regions } from '@/models/utils';
import { HStack, Tag, TagLeftIcon, TagLabel } from '@chakra-ui/react';
import { IoMdCube } from 'react-icons/io';

const RegionTag = (region: Regions) => {
	return (
		<HStack spacing={4}>
			{['sm', 'md', 'lg'].map((size) => (
				<Tag size={size} key={size} variant='subtle' colorScheme='cyan'>
					<TagLeftIcon boxSize='12px' as={IoMdCube} />
					<TagLabel>Cyan</TagLabel>
				</Tag>
			))}
		</HStack>
	);
};

export default RegionTag;
