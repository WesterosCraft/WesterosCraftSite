export default {
  name: 'links',
  type: 'object',
  title: 'Links',
  fields: [
    { name: 'link', type: 'string', title: 'Link' },
    {
      name: 'linkText',
      type: 'string',
      title: 'Link Text'
    },
    {
      name: 'linkType',
      type: 'string',
      options: {
        list: [
          { title: 'Internal', value: 'internal' },
          { title: 'External', value: 'external' },
          { title: 'Scroll', value: 'scroll' },
          { title: 'Download', value: 'download' }
        ]
      }
    }
  ]
};
