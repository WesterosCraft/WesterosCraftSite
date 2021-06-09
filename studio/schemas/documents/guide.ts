import slug from 'slugify';

export default {
	title: 'Guide',
	name: 'guide',
	type: 'document',
	fieldsets: [
		{
			name: 'general',
			title: 'General',
			options: {
				collapsible: true,
				collapsed: true,
			},
		},
		{
			name: 'meta',
			title: 'Meta infomation',
			options: {
				collapsible: true,
				collapsed: true,
			},
		},
		{
			name: 'content',
			title: 'Content',
			options: {
				collapsible: true,
				collapsed: false,
			},
		},
	],
	fields: [
		{
			name: 'slug',
			title: 'Slug',
			description: 'Some frontends will require a slug to be set to be able to show the page',
			type: 'slug',
			options: {
				source: 'title',
				slugify: (input: string) => slug(input, { lower: true }),
			},
			fieldset: 'general',
			validation: (Rule: any) => Rule.required(),
		},
		{
			type: 'metaFields',
			name: 'meta',
			fieldset: 'meta',
		},
		{
			title: 'Name',
			name: 'name',
			type: 'string',
			description: 'Name of guide',
			validation: (Rule: any) => Rule.required(),
			fieldset: 'content',
		},
		{
			title: 'Icon',
			name: 'icon',
			type: 'image',
			fieldset: 'content',
		},
		{
			name: 'pageBuilder',
			type: 'array',
			title: 'Page builder',
			fieldset: 'content',
			of: [
				{ type: 'richText' },
				{ type: 'documentGrid' },
				{ type: 'imageGallery' },
				{ type: 'accordion' },
				{ type: 'spacer' },
			],
		},
	],
};
