import { RiSettings5Line } from 'react-icons/ri';

export default {
	name: 'siteSettings',
	type: 'document',
	title: 'Site Settings',
	icon: RiSettings5Line,
	// eslint-disable-next-line spaced-comment
	__experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
	fieldsets: [
		{
			name: 'meta',
			title: 'General Information',
			options: {
				collapsible: true,
				collapsed: true,
			},
		},
		{
			name: 'navigation',
			title: 'Main Navigation',
			options: {
				collapsible: true,
				collapsed: true,
			},
		},
		{
			name: 'wikiNavigation',
			title: 'Wiki Navigation',
			options: {
				collapsible: true,
				collapsed: true,
			},
		},
		{
			name: 'social',
			title: 'Social',
			options: {
				collapsible: true,
				collapsed: true,
			},
		},
	],
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
			description: 'Title of the page',
			fieldset: 'meta',
			validation: (Rule: any) => Rule.required(),
		},
		{
			name: 'description',
			title: 'Description',
			type: 'text',
			description: 'Description for search engines and social media.',
			fieldset: 'meta',
			validation: (Rule: any) => Rule.required(),
		},
		{
			title: 'Navigation',
			name: 'navigation',
			description: 'Select pages or link for main navigation',
			fieldset: 'navigation',
			type: 'array',
			of: [
				{
					title: 'Navigation Section',
					type: 'navigation.section',
				},
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
		{
			title: 'Top Level Wiki Navigation',
			name: 'topLevelWikiNavigation',
			description: 'Select the top level nav for wiki pages',
			fieldset: 'wikiNavigation',
			type: 'navigation.section',
		},
		{
			title: 'Wiki Navigation',
			name: 'wikiNavigation',
			description: 'Select pages or link for wiki side navigation',
			fieldset: 'wikiNavigation',
			type: 'array',
			of: [
				{
					title: 'Navigation Section',
					type: 'navigation.section',
				},
			],
		},
		{
			name: 'socialFields',
			type: 'socialFields',
			description: 'Social media',
			fieldset: 'social',
		},
	],
	preview: {
		select: {},
		prepare() {
			return {
				title: 'Global Settings',
			};
		},
	},
};
