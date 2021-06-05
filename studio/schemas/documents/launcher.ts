import slug from 'slugify';
import { fieldsets } from '../fieldsets';

export default {
	title: 'Launcher',
	name: 'launcher',
	type: 'document',
	// __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
	fieldsets: [...fieldsets],
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
			description: 'Title of the page',
			fieldset: 'general',
			validation: (Rule: any) => Rule.required(),
		},
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
			title: 'Heading',
			name: 'heading',
			type: 'string',
			fieldset: 'content',
		},
		{
			name: 'pageBuilder',
			type: 'array',
			title: 'Page builder',
			fieldset: 'content',
			of: [{ type: 'twoColumnText' }, { type: 'richText' }, { type: 'contentBanner' }, { type: 'spacer' }],
		},
	],
};
