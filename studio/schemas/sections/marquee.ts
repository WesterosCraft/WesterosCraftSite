import { RiSlideshow4Line } from 'react-icons/ri';

export default {
	title: 'Marquee',
	name: 'marquee',
	type: 'object',
	description: 'A sliding display of images',
	icon: RiSlideshow4Line,
	fields: [
		{
			title: 'Marquee Items',
			name: 'marqueeItems',
			type: 'array',
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
	],
};
