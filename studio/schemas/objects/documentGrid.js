export default {
  name: 'documentGrid',
  type: 'object',
  title: 'Document Grid',
  description: 'Links to other documents ',
  fields: [
    {
      title: 'Documents',
      name: 'documents',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'destination' }, { type: 'guide' }]
        }
      ]
    }
  ]
};
