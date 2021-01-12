export default {
  title: 'Wiki Destination',
  name: 'wikiDestination',
  type: 'document',
  initialValue: {
    projectStatus: 'notStarted'
  },
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string'
    },
    {
      title: 'Region',
      name: 'region',
      type: 'string',
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
      }
    },
    {
      title: 'Build Type',
      name: 'buildType',
      type: 'string',
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
      }
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
      }
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
    }
  ]
};
