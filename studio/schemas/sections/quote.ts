import { BsChatQuote } from 'react-icons/bs';

export default {
	title: 'Quote Block',
	name: 'quoteBlock',
	type: 'object',
	icon: BsChatQuote,
	description: 'Displays a center aligned quote with author',
	fields: [
		{
			title: 'Quote',
			name: 'quote',
			type: 'string',
		},
		{
			title: 'Author',
			name: 'author',
			type: 'string',
		},
	],
};
