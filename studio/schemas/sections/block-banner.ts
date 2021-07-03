import { HiOutlineViewGridAdd } from 'react-icons/hi';

export default {
	title: 'Block Banner',
	name: 'blockBanner',
	type: 'object',
	icon: HiOutlineViewGridAdd,
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
			title: 'Left Button Text',
			name: 'leftButtonText',
			type: 'string',
		},
		{
			title: 'Right Button Text',
			name: 'rightButtonText',
			type: 'string',
		},
	],
};
