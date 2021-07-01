import { HStack, Tag, TagLeftIcon, TagLabel } from '@chakra-ui/react';
import { IoMdCube } from 'react-icons/io';

const BuildTypeTag = ({ label }: { label: string }) => {
	return (
		<HStack spacing={4}>
			<Tag size={'sm'} variant='subtle' colorScheme='cyan'>
				<TagLeftIcon boxSize='12px' as={IoMdCube} />
				<TagLabel>{label}</TagLabel>
			</Tag>
		</HStack>
	);
};

export default BuildTypeTag;
