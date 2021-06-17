import { IoIosArrowDropdown } from 'react-icons/io'

export default {
	name: 'navigation.section',
	type: 'object',
	title: 'Section',
	icon: IoIosArrowDropdown,
	fields: [
		{
			type: 'string',
			name: 'title',
			title: 'Title',
		},
		{
			type: 'array',
			name: 'links',
			title: 'Links',
			of: [
				{
					title: 'Internal Link',
					type: 'internalLink',
				},
				{
					title: 'External Link',
					type: 'externalLink',
				},
			],
		},
	],
};
