export default {
	title: 'Guides',
	name: 'guide',
	type: 'document',
	fields: [
		{
			title: 'Name',
			name: 'name',
			type: 'string',
			description: 'Name of guide',
			validation: (Rule: any) => Rule.required(),
		},
		{
			title: 'Slug',
			name: 'slug',
			type: 'slug',
			options: {
				source: 'name',
				slugify: (input: string) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
			},
			validation: (Rule: any) => Rule.required(),
		},
		{
			title: 'Icon',
			name: 'icon',
			type: 'image',
		},
		{
			name: 'pageBuilder',
			type: 'array',
			title: 'Page builder',
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
