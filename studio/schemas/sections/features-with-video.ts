import { SiYoutubestudio } from 'react-icons/si';

export default {
	title: 'Features With Video',
	name: 'featuresWithVideo',
	type: 'object',
	icon: SiYoutubestudio,
	description: 'Displays two columns with a CTA, 3 features, and a chosen video.',
	fields: [
		{
			title: 'Heading',
			name: 'heading',
			type: 'string',
		},
		{
			title: 'Subheading',
			name: 'subheading',
			type: 'string',
		},
		{
			title: 'Button Text',
			name: 'buttonText',
			type: 'string',
		},
		{
			title: 'YouTube video URL',
			name: 'url',
			type: 'url',
		},
		{
			title: 'Youtube thumbnail',
			name: 'youtubeThumbnail',
			type: 'image',
		},
		{
			title: 'Feature List',
			name: 'featureList',
			type: 'array',
			of: [
				{
					title: 'Feature',
					name: 'feature',
					type: 'object',
					fields: [
						{
							title: 'Heading',
							name: 'heading',
							type: 'string',
						},
						{
							title: 'Description',
							name: 'description',
							type: 'string',
						},
					],
				},
			],
		},
	],
};
