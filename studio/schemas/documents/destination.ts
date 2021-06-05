import slug from 'slugify';

export default {
	title: 'Destinations',
	name: 'destination',
	type: 'document',
	initialValue: {
		projectStatus: 'notStarted',
		redoAvailable: false,
		serverBuild: false,
		difficultyLevel: 'one',
	},
	fieldsets: [
		{
			name: 'general',
			title: 'General',
			options: {
				collapsible: true,
				collapsed: true,
			},
		},
		{
			name: 'meta',
			title: 'Meta infomation',
			options: {
				collapsible: true,
				collapsed: true,
			},
		},
		{
			name: 'projectDetails',
			title: 'Project Details',
			options: {
				collapsible: true,
				collapsed: true,
			},
		},
		{
			name: 'content',
			title: 'Content',
			options: {
				collapsible: true,
				collapsed: false,
			},
		},
	],
	fields: [
		{
			name: 'slug',
			title: 'Slug',
			description: 'Some frontends will require a slug to be set to be able to show the page',
			type: 'slug',
			options: {
				source: 'title',
				slugify: (input: string) => slug(input, { lower: true }),
			},
			fieldset: 'general',
			validation: (Rule: any) => Rule.required(),
		},
		{
			type: 'metaFields',
			name: 'meta',
			fieldset: 'meta',
		},
		{
			title: 'Name',
			name: 'name',
			type: 'string',
			description: 'Name of destination',
			validation: (Rule: any) => Rule.required(),
			fieldset: 'projectDetails',
		},
		{
			fieldset: 'projectDetails',
			title: 'Region',
			name: 'region',
			type: 'string',
			description: 'Region project is located in',
			options: {
				list: [
					{ title: 'Dorne', value: 'dorne' },
					{ title: 'Riverlands', value: 'riverlands' },
					{ title: 'The Wall', value: 'theWall' },
					{ title: 'North', value: 'north' },
					{ title: 'Vale', value: 'vale' },
					{ title: 'Iron Islands', value: 'ironIslands' },
					{ title: 'Westerlands', value: 'westerlands' },
					{ title: 'Crownlands', value: 'crownlands' },
					{ title: 'Stormlands', value: 'stormlands' },
					{ title: 'Reach', value: 'reach' },
					{ title: 'Beyond the Wall', value: 'beyondTheWall' },
				],
			},
			validation: (Rule: any) => Rule.required(),
		},
		{
			fieldset: 'projectDetails',
			title: 'Build Type',
			name: 'buildType',
			type: 'string',
			description: 'Designation of build',
			options: {
				list: [
					{ title: 'Castle', value: 'castle' },
					{ title: 'City', value: 'city' },
					{ title: 'Town', value: 'town' },
					{ title: 'Village', value: 'village' },
					{ title: 'Holdfast', value: 'holdfast' },
					{ title: 'Keep', value: 'keep' },
					{ title: 'Tower', value: 'tower' },
					{ title: 'Clan', value: 'clan' },
					{ title: 'Crannog', value: 'crannog' },
					{ title: 'Landmark', value: 'landmark' },
					{ title: 'Ruin', value: 'ruin' },
					{ title: 'Miscellaneous', value: 'miscellaneous' },
				],
			},
			validation: (Rule: any) => Rule.required(),
		},
		{
			fieldset: 'projectDetails',
			title: 'Project Status',
			name: 'projectStatus',
			type: 'string',
			description: 'Current status of project.  Not Started is default',
			options: {
				list: [
					{ title: 'Not Started', value: 'notStarted' },
					{ title: 'Completed', value: 'completed' },
					{ title: 'In Progress', value: 'inProgress' },
					{ title: 'Abandoned', value: 'abandoned' },
					{ title: 'Redo In Progress', value: 'redoInProgress' },
				],
			},
			validation: (Rule: any) => Rule.required(),
		},
		{
			fieldset: 'projectDetails',
			title: 'House',
			name: 'house',
			description: 'If destination has a House, list it here',
			type: 'string',
		},
		{
			fieldset: 'projectDetails',
			title: 'Warp',
			name: 'warp',
			description: 'In game warp',
			type: 'string',
		},
		{
			fieldset: 'projectDetails',
			title: 'Project Lead',
			name: 'projectLead',
			description: 'Leader(s) of the project',
			type: 'string',
		},
		{
			fieldset: 'projectDetails',
			title: 'Date Started',
			name: 'dateStarted',
			type: 'date',
			options: {
				dateFormat: 'YYYY-MM-DD',
				calendarTodayLabel: 'Today',
			},
		},
		{
			fieldset: 'projectDetails',
			title: 'Date Completed',
			name: 'dateCompleted',
			type: 'date',
			options: {
				dateFormat: 'YYYY-MM-DD',
				calendarTodayLabel: 'Today',
			},
		},
		{
			fieldset: 'projectDetails',
			title: 'Redo Available',
			name: 'redoAvailable',
			description: 'Check true if this project is available to apply for redo',
			type: 'boolean',
		},
		{
			fieldset: 'projectDetails',
			title: 'Server Build',
			name: 'serverBuild',
			description: 'Check true if this project was a server build',
			type: 'boolean',
		},
		{
			fieldset: 'projectDetails',
			title: 'Difficulty Level',
			name: 'difficultyLevel',
			type: 'string',
			description:
				'Each project is assigned a level of difficulty.  This is used to calculate region and total project completeness.',
			options: {
				list: [
					{ title: '1', value: 'one' },
					{ title: '2', value: 'two' },
					{ title: '3', value: 'three' },
					{ title: '4', value: 'four' },
					{ title: '5', value: 'five' },
					{ title: '6', value: 'six' },
				],
			},
			validation: (Rule: any) => Rule.required(),
		},
		{
			fieldset: 'projectDetails',
			title: 'Application',
			name: 'application',
			description: 'Link to users project application, if available',
			type: 'string',
		},
		{
			fieldset: 'projectDetails',
			title: 'Dynmap Information',
			name: 'dynmapInformation',
			type: 'dynmapData',
		},
		{
			fieldset: 'projectDetails',
			title: 'Banner',
			name: 'banner',
			description: 'Image of House banner, if available',
			type: 'image',
		},
		{
			fieldset: 'content',
			title: 'Images',
			name: 'images',
			type: 'array',
			description: 'Screenshots and renders of destination',
			of: [{ type: 'image' }],
		},
		{
			fieldset: 'content',
			title: 'Entry',
			name: 'entry',
			type: 'array',
			of: [
				{ type: 'block' },
				{
					name: 'figure',
					type: 'object',
					fields: [
						{
							name: 'alt',
							type: 'string',
						},
						{
							name: 'caption',
							type: 'string',
						},
						{
							name: 'image',
							type: 'image',
						},
					],
				},
				{
					name: 'video',
					type: 'object',
					fields: [
						{
							name: 'url',
							type: 'url',
						},
					],
				},
			],
		},
	],
};
