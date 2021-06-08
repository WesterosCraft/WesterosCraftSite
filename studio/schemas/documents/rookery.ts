import slug from 'slugify';
import { fieldsets } from '../fieldsets';

export default {
	title: 'Rookery',
	name: 'rookery',
	type: 'document',
	fieldsets: [...fieldsets],
	// __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
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
			title: 'Subheading',
			name: 'subheading',
			type: 'string',
			fieldset: 'content',
		},
		{
			name: 'content',
			type: 'array',
			title: 'Page sections',
			description: 'Add, edit, and reorder sections',
			fieldset: 'content',
			of: [
				{ type: 'twoColumnText' },
				{ type: 'destinationSlider' },
				{ type: 'banner' },
				{ type: 'marquee' },
				{ type: 'spacer' },
				{ type: 'quoteBlock' },
			],
		},
		{
			name: 'editions',
			title: 'Editions',
			type: 'array',
			fieldset: 'content',
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
