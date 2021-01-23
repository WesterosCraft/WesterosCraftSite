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
      name: 'pageBuilder',
      type: 'array',
      title: 'Page builder',
      of: [
        { type: 'object', name: 'Rich Text', fields: [{ type: 'simpleRichText', name: 'idk' }] },
        { type: 'documentGrid' }
      ]
    }
  ]
};
