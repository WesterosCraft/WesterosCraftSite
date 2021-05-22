export default {
  title: 'Rookery',
  name: 'rookery',
  type: 'document',
  // __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200)
      }
    },
    {
      title: 'Heading',
      name: 'heading',
      type: 'string'
    },
    {
      title: 'Subheading',
      name: 'subheading',
      type: 'string'
    },

    {
      title: 'Quote',
      name: 'quote',
      type: 'string'
    },
    {
      title: 'Quote Author',
      name: 'quoteAuthor',
      type: 'string'
    },

    {
      name: 'editions',
      title: 'Editions',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'editions',
          title: 'Editions',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string'
            },
            {
              name: 'link',
              title: 'Link',
              type: 'url'
            },
            {
              name: 'thumbnail',
              title: 'Thumbnail',
              type: 'image'
            }
          ]
        }
      ]
    }
  ]
};
