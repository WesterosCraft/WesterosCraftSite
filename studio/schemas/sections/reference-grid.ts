import { BsFillGridFill } from 'react-icons/bs';

export default {
	title: 'Reference Grid',
	name: 'referenceGrid',
	type: 'object',
	icon: BsFillGridFill,
	description: 'A grid that displays information related to whats referenced in the wiki',
	fields: [
		{
			title: 'Heading',
			name: 'heading',
			type: 'string',
			description: 'A Heading that appears above the grid',
		},
		{
			title: 'Heading Alignment',
			name: 'headingAlignment',
			description: 'Aligns the heading left or center',
			type: 'string',
			options: {
				list: [
					{ title: 'Left', value: 'left' },
					{ title: 'Center', value: 'center' },
				],
			},
		},
		{
			title: 'Heading Size',
			name: 'headingSize',
			description: 'Assigns a size to the heading',
			type: 'string',
			options: {
				list: [
					{ title: 'H1', value: 'h1' },
					{ title: 'H2', value: 'h2' },
					{ title: 'H3', value: 'h3' },
				],
			},
		},
		{
			title: 'Grid Items',
			name: 'gridItems',
			type: 'array',
			of: [
				{
					type: 'reference',
					name: 'destination',
					to: [
						{
							type: 'destination',
						},
					],
				},
			],
		},
		{
			title: 'Grid Options',
			name: 'gridOptions',
			description:
				'Instead of assigning grid items, you can automatically get a limited query of items based on value.',
			type: 'string',
			options: {
				list: [
					{ title: 'Recently Updated', value: 'recentlyUpdated' },
					{ title: 'Recently Created', value: 'recentlyCreated' },
				],
			},
		},
	],
	preview: {
		select: {
			title: 'heading',
		},
		prepare({ title }: { title: string }) {
			return {
				title: `Reference Grid | ${title.charAt(0).toUpperCase() + title.slice(1)}`,
			};
		},
	},
};
