import { HiOutlineViewGridAdd } from 'react-icons/hi';

export default {
	title: 'Block Banner',
	name: 'blockBanner',
	type: 'object',
	icon: HiOutlineViewGridAdd,
	description: 'A heading layed next to three info boxes',
	fields: [
		{
			title: 'Heading',
			name: 'heading',
			type: 'string',
		},
		{
			title: 'Blocks',
			name: 'blocks',
			type: 'array',
			of: [
				{
					title: 'Label',
					name: 'label',
					type: 'string',
				},
			],
		},
	],
};
