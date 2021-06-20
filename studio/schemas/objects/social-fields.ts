import { RiShareLine } from 'react-icons/ri';

export default {
	title: 'Social',
	name: 'socialFields',
	type: 'object',
	icon: RiShareLine,
	fields: [
		{
			name: 'discord',
			type: 'url',
			title: 'Discord URL',
		},
		{
			name: 'youtube',
			type: 'url',
			title: 'Youtube URL',
		},
		{
			name: 'instagram',
			type: 'url',
			title: 'Instagram URL',
		},
		{
			name: 'twitter',
			type: 'url',
			title: 'Twitter URL',
		},
	],
};
