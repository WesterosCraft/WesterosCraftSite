import { BiMapPin } from 'react-icons/bi';

export default {
	title: 'Map',
	name: 'map',
	type: 'object',
	description: 'An embedded dynmap',
	icon: BiMapPin,
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
			title: 'Url',
			name: 'url',
			type: 'url',
			description: 'The url of the live map',
		},
		{
			title: 'Button Text',
			name: 'buttonText',
			type: 'string',
		},
		{
			title: 'Button Link',
			name: 'buttonLink',
			type: 'url',
			description: 'The map button link',
		},
	],
};
