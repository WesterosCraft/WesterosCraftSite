import { FaCrow } from 'react-icons/fa';

export default {
	title: 'Editions',
	name: 'editions',
	type: 'object',
	icon: FaCrow,
	description: 'An image grid of rookery issues',
	fields: [
		{
			name: 'heading',
			title: 'Heading',
			type: 'string',
		},
		{
			name: 'editionList',
			title: 'Edition List',
			type: 'array',
			of: [
				{
					type: 'object',
					name: 'editions',
					title: 'Editions',
					fields: [
						{
							name: 'title',
							title: 'Title',
							type: 'string',
						},
						{
							name: 'link',
							title: 'Link',
							type: 'url',
						},
						{
							name: 'thumbnail',
							title: 'Thumbnail',
							type: 'image',
						},
					],
				},
			],
		},
	],
};
