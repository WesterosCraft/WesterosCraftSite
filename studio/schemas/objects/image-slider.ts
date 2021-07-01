export default {
	title: 'Image Slider',
	name: 'imageSlider',
	type: 'object',
	description: 'A sliding display of images',
	fields: [
		{
			title: 'Slide Items',
			name: 'slideItems',
			type: 'array',
			of: [
				{
					title: 'Slide',
					name: 'slide',
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
						{ type: 'image', name: 'slideImage', title: 'Slide Image', validation: (Rule: any) => Rule.required() },
					],
					preview: {
						select: {
							title: 'destination.name',
							media: 'slideImage',
						},
					},
				},
			],
		},
	],
};
