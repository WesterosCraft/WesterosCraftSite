export default {
  title: 'Destinations',
  name: 'destination',
  type: 'document',
  initialValue: {
    projectStatus: 'notStarted',
    redoAvailable: false,
    serverBuild: false,
    difficultyLevel: 'one'
  },
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      description: 'Name of destination',
      validation: (Rule) => Rule.required()
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200)
      },
      validation: (Rule) => Rule.required()
    },
    {
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
          { title: 'Beyond the Wall', value: 'beyondTheWall' }
        ]
      },
      validation: (Rule) => Rule.required()
    },
    {
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
          { title: 'Miscellaneous', value: 'miscellaneous' }
        ]
      },
      validation: (Rule) => Rule.required()
    },
    {
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
          { title: 'Redo In Progress', value: 'redoInProgress' }
        ]
      },
      validation: (Rule) => Rule.required()
    },
    {
      title: 'House',
      name: 'house',
      description: 'If destination has a House, list it here',
      type: 'string'
    },
    {
      title: 'Warp',
      name: 'warp',
      description: 'In game warp',
      type: 'string'
    },
    {
      title: 'Project Lead',
      name: 'projectLead',
      description: 'Leader(s) of the project',
      type: 'string'
    },
    {
      title: 'Date Started',
      name: 'dateStarted',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
        calendarTodayLabel: 'Today'
      }
    },
    {
      title: 'Date Completed',
      name: 'dateCompleted',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
        calendarTodayLabel: 'Today'
      }
    },
    {
      title: 'Redo Available',
      name: 'redoAvailable',
      description: 'Check true if this project is available to apply for redo',
      type: 'boolean'
    },
    {
      title: 'Server Build',
      name: 'serverBuild',
      description: 'Check true if this project was a server build',
      type: 'boolean'
    },
    {
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
          { title: '6', value: 'six' }
        ]
      },
      validation: (Rule) => Rule.required()
    },
    {
      title: 'Dynmap Information',
      name: 'dynmapInformation',
      type: 'dynmapData'
    },
    {
      title: 'Application',
      name: 'application',
      description: 'Link to users project application, if available',
      type: 'string'
    },
    {
      title: 'Banner',
      name: 'banner',
      description: 'Image of House banner, if available',
      type: 'image'
    },
    {
      title: 'Images',
      name: 'images',
      type: 'array',
      description: 'Screenshots and renders of destination',
      of: [{ type: 'image' }]
    },
    {
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
              type: 'string'
            },
            {
              name: 'caption',
              type: 'string'
            },
            {
              name: 'image',
              type: 'image'
            }
          ]
        },
        {
          name: 'video',
          type: 'object',
          fields: [
            {
              name: 'url',
              type: 'url'
            }
          ]
        }
      ]
    }
  ]
};
