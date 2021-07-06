import { VscReferences } from 'react-icons/vsc';

export default {
	title: 'Wiki Info Cards',
	name: 'wikiInfoCards',
	description: 'A three column grid of intformation cards to link to main portals of the wiki',
	type: 'object',
	icon: VscReferences,
	fields: [
		{
			type: 'array',
			title: 'Info Cards',
			name: 'infoCards',
			of: [
				{
					title: 'Info Card',
					name: 'infoCard',
					type: 'object',
					fields: [
						{
							type: 'string',
							title: 'Heading',
							name: 'heading',
							validation: (Rule: any) => Rule.required(),
						},
						{ type: 'string', title: 'Subheading', name: 'subheading', validation: (Rule: any) => Rule.required() },
						{ type: 'string', title: 'Button Text', name: 'buttonText', validation: (Rule: any) => Rule.required() },
						{ type: 'image', title: 'Icon', name: 'icon' },
						{
							type: 'reference',
							name: 'linkReference',

							to: [{ type: 'allBuilds' }, { type: 'allGuides' }],
						},
					],
				},
			],
		},
	],
};
