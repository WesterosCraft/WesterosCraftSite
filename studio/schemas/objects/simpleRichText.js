export default {
  name: 'simpleRichText',
  type: 'array',
  title: 'Simple Rich Text',
  of: [
    {
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'Title', value: 'title' },
        { title: 'H1', value: 'h1' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'H5', value: 'h5' },
        { title: 'H6', value: 'h6' },
        { title: 'Quote', value: 'blockquote' }
      ],
      lists: []
    },
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
};
