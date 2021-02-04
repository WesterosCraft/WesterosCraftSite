export default {
  name: 'navigation.section',
  type: 'object',
  title: 'Section',
  fields: [
    {
      type: 'reference',
      name: 'target',
      title: 'Target link',
      to: [
        { type: 'guide' },
        { type: 'destination' },
        { type: 'about' },
        { type: 'launcher' },
        { type: 'rookery' },
        { type: 'progress' },
        { type: 'wiki' }
      ]
      // _weak: true // enable if you don't want reference integrity checks
    },
    {
      type: 'string',
      name: 'title',
      title: 'Title'
    },
    {
      type: 'array',
      name: 'links',
      title: 'Links',
      of: [{ type: 'navigation.link' }]
    }
  ]
};
