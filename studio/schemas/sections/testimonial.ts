import { BsFillChatQuoteFill } from 'react-icons/bs';

export default {
	name: 'testimonial',
	type: 'object',
	title: 'Testimonial',
	icon: BsFillChatQuoteFill,
	fields: [
		{
			title: 'Author',
			name: 'author',
			type: 'string',
		},
		{
			title: 'Image',
			name: 'image',
			type: 'image',
		},
		{
			title: 'Logo',
			name: 'logo',
			type: 'image',
		},
		{
			title: 'Button Link',
			name: 'buttonLink',
			type: 'url',
		},
		{
			title: 'Button Text',
			name: 'buttonText',
			type: 'string',
		},
		{
			title: 'Quote',
			name: 'quote',
			type: 'text',
		},
	],
	preview: {
		select: {
			author: 'author',
		},
		prepare({ author }: { author: string }) {
			return {
				author: `${author}`,
			};
		},
	},
};
