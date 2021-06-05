import { RiLinksLine } from 'react-icons/ri';

export default {
	title: 'Internal Link',
	name: 'internalLink',
	type: 'object',
	hidden: true,
	icon: RiLinksLine,
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
			validation: (Rule: any) => Rule.required(),
		},
		{
			name: 'link',
			title: 'Link',
			type: 'reference',
			to: [
				{
					type: 'about',
				},
				{
					type: 'rookery',
				},
				{
					type: 'launcher',
				},
				{
					type: 'wiki',
				},
				{
					type: 'progress',
				},
				{
					type: 'downloads',
				},
				{
					type: 'guide',
				},
				{
					type: 'destination',
				},
			],
		},
	],
	blockEditor: {
		icon: RiLinksLine,
	},
};
