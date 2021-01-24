export default {
  name: 'buttons',
  type: 'object',
  title: 'Buttons',
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
    },
    {
      name: 'variant',
      type: 'string',
      options: {
        list: [
          { title: 'Red', value: 'red' },
          { title: 'White', value: 'white' }
        ]
      }
    }
  ]
};
