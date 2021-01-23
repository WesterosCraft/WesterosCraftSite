export default {
  title: 'Guides',
  name: 'guide',
  type: 'document',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      description: 'Name of guide',
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
      title: 'Icon',
      name: 'icon',
      type: 'image',
      description: 'Name of guide'
    },
    {
      name: 'pageBuilder',
      type: 'array',
      title: 'Page builder',
      of: [
        { type: 'object', name: 'richText', fields: [{ name: 'text', type: 'simpleRichText' }] },
        { type: 'documentGrid' },
        { type: 'imageGallery' },
        { type: 'accordion' }
      ]
    }
  ]
};
