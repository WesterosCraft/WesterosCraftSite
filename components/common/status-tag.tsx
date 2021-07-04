import { Flex, Icon, Badge } from '@chakra-ui/react';
import { nameFormatter } from '@/components/utils';
import { BuildStatuses } from '@/models/utils';
import ProjectStatusIcon from './project-status-icon';

const StatusTag = ({ children }: { children: BuildStatuses }) => {
	const colorMap = {
		completed: 'green',
		inProgress: 'yellow',
		abandoned: 'red',
		notStarted: 'gray',
		redoInProgress: 'orange',
	};
	return (
		<Badge size={'sm'} variant='subtle' colorScheme={colorMap[children]}>
			<Flex direction='row' align='center'>
				<Icon tooltip={false} projectStatus={children} as={ProjectStatusIcon} mr={1} />
				{nameFormatter(children)}
			</Flex>
		</Badge>
	);
};

export default StatusTag;
