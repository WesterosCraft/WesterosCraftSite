import { Regions } from '@/models/utils';
import { HStack, Tag, TagLeftIcon, TagLabel } from '@chakra-ui/react';
import { IoMdCube } from 'react-icons/io';
import { nameFormatter } from '@/components/utils';

const RegionTag = ({ label }: { label: Regions }) => {
	return (
		<HStack spacing={4}>
			<Tag size={'sm'} variant='subtle' colorScheme='cyan'>
				<TagLeftIcon boxSize='12px' as={IoMdCube} />
				<TagLabel>{nameFormatter(label)}</TagLabel>
			</Tag>
		</HStack>
	);
};

export default RegionTag;