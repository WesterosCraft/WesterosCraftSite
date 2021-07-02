import { nameFormatter } from './../../../components/utils/helpers';
import { RiSlideshow4Line } from 'react-icons/ri';

export default {
	title: 'Marquee',
	name: 'marquee',
	type: 'object',
	description: 'A sliding display of images',
	icon: RiSlideshow4Line,
	fields: [
		{
			title: 'Heading',
			name: 'heading',
			type: 'string',
			description: 'A Heading that appears above the marquee',
		},
		{
			title: 'Heading Alignment',
			name: 'headingAlignment',
			description: 'Aligns the heading left or center',
			type: 'string',
			options: {
				list: [
					{ title: 'Left', value: 'left' },
					{ title: 'Center', value: 'center' },
				],
			},
		},
		{
			title: 'Heading Size',
			name: 'headingSize',
			description: 'Assigns a size to the heading',
			type: 'string',
			options: {
				list: [
					{ title: 'H1', value: 'h1' },
					{ title: 'H2', value: 'h2' },
					{ title: 'H3', value: 'h3' },
				],
			},
		},
		{
			title: 'Subheading',
			name: 'subheading',
			type: 'string',
			description: 'A Heading that appears below the heading',
		},
		{
			title: 'Marquee Items',
			name: 'marqueeItems',
			type: 'array',
			description: 'References to wiki items',
			of: [
				{
					title: 'Marquee Item',
					name: 'marqueeItem',
					type: 'object',
					fields: [
						{
							type: 'reference',
							name: 'destination',
							validation: (Rule: any) => Rule.required(),
							to: [
								{
									type: 'destination',
								},
							],
						},
						{
							type: 'image',
							name: 'marqueeImage',
							title: 'Marquee Image',
							description:
								'The image to display in the card.  If left blank, will attempt to find the first image from the reference',
							options: { metadata: ['lqip'] },
						},
					],
					preview: {
						select: {
							title: 'destination.name',
							media: 'marqueeImage',
							region: 'destination.region',
						},
						prepare(selection: any) {
							const { title, region, media } = selection;
							return {
								title: title + ' - ' + nameFormatter(region),
								media: media,
							};
						},
					},
				},
			],
		},
	],
	preview: {
		select: {
			title: 'heading',
		},
		prepare({ title }: { title: string }) {
			return {
				title: `Marquee | ${title.charAt(0).toUpperCase() + title.slice(1)}`,
			};
		},
	},
};
