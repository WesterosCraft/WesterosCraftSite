import { fieldsets } from '../fieldsets';

export default {
	title: 'Home',
	name: 'home',
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
			title: 'Marquee',
			name: 'marquee',
			type: 'array',
			fieldset: 'content',
			of: [
				{
					title: 'Marquee Item',
					name: 'marqueeItem',
					type: 'object',
					fields: [
						{
							type: 'reference',
							name: 'destination',
							to: [
								{
									type: 'destination',
								},
							],
						},
						{ type: 'image', name: 'marqueeImage', title: 'Marquee Image' },
					],
					preview: {
						select: {
							title: 'destination.name',
							media: 'marqueeImage',
						},
					},
				},
			],
		},
		{
			name: 'pageBuilder',
			type: 'array',
			title: 'Page builder',
			fieldset: 'content',
			of: [
				{ type: 'twoColumnText' },
				{ type: 'destinationSlider' },
				{ type: 'banner' },
				{
					name: 'twoColumnVideo',
					type: 'object',
					title: 'Two Column With Video',
					fields: [
						{
							title: 'Text Column',
							name: 'textColumn',
							type: 'richText',
						},
						{
							title: 'Video Link',
							name: 'videoLink',
							type: 'string',
						},
						{
							title: 'Video Thumbnail',
							name: 'videoThumbnail',
							type: 'image',
						},
						{
							title: 'Featured Images',
							type: 'array',
							name: 'featuredImages',
							of: [
								{
									type: 'image',
									title: 'Image',
									name: 'image',
									fields: [
										{ type: 'string', name: 'link', title: 'Link' },
										{ type: 'string', name: 'alt', title: 'Alt' },
										{ type: 'boolean', name: 'inject', title: 'Inject' },
									],
								},
							],
						},
					],
				},
				{ type: 'spacer' },
			],
		},
	],
};
