export default {
	name: 'tableBuilder',
	type: 'object',
	title: 'Table Builder',
	description: 'A configurable table',
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
