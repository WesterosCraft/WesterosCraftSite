export default {
	title: 'Wiki',
	name: 'wiki',
	type: 'document',
	// __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
	fields: [
		{
			title: 'Title',
			name: 'title',
			type: 'string',
			validation: (Rule: any) => Rule.required(),
		},
		{
			title: 'Slug',
			name: 'slug',
			type: 'slug',
			options: {
				source: 'title',
				slugify: (input: string) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
			},
		},
		{
			title: 'Heading',
			name: 'heading',
			type: 'string',
		},

		{
			name: 'pageBuilder',
			type: 'array',
			title: 'Page builder',
			of: [{ type: 'twoColumnText' }, { type: 'documentGrid' }, { type: 'richText' }, { type: 'spacer' }],
		},
	],
};
