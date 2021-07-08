import { GiVerticalBanner } from 'react-icons/gi';

export default {
	title: 'Wiki Banner',
	name: 'wikiBanner',
	type: 'object',
	icon: GiVerticalBanner,
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
			title: 'Button Url',
			name: 'buttonUrl',
			type: 'url',
		},
		{
			title: 'Background Color',
			name: 'backgroundColor',
			type: 'string',
		},
		{
			title: 'Icon',
			name: 'icon',
			type: 'image',
		},
	],
};
