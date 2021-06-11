import { ImTable2 } from 'react-icons/im';

export default {
	name: 'tableBuilder',
	type: 'object',
	title: 'Table Builder',
	description: 'A configurable table',
	icon: ImTable2,
	fields: [
		{
			title: 'Table Heading',
			name: 'tableHeading',
			type: 'string',
		},
		{
			title: 'Table',
			name: 'table',
			type: 'string',
			description: 'The first row should always be the column names.',
		},
	],
};
