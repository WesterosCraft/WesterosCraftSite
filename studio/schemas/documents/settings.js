export default {
  title: 'Settings',
  name: 'settings',
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
      title: 'Global Nav',
      name: 'globalNav',
      type: 'navigation'
    }
  ]
};
