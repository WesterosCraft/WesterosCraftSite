import { RiLinksLine } from 'react-icons/ri';
import { HiCube, HiHome, HiDocumentText, HiLibrary } from 'react-icons/hi';

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
			name: 'description',
			title: 'Description',
			type: 'string',
			description: 'Optional description for use in dropdown menu',
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
					type: 'modpack',
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
				{
					type: 'allGuides',
				},
				{
					type: 'allBuilds',
				},
			],
		},
		{
			title: 'Icon',
			name: 'icon',
			type: 'string',
			description: 'Optional icon, typically used for wiki navigation',
			options: {
				list: [
					{ title: 'HiCube', value: 'HiCube', icon: HiCube },
					{ title: 'HiHome', value: 'HiHome', icon: HiHome },
					{ title: 'HiDocumentText', value: 'HiDocumentText', icon: HiDocumentText },
					{ title: 'HiLibrary', value: 'HiLibrary', icon: HiLibrary },
				],
			},
		},
	],
	blockEditor: {
		icon: RiLinksLine,
	},
};
