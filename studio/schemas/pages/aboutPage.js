import textSlice from '../slices/textSlice';

export default {
  title: 'About Page',
  name: 'aboutPage',
  type: 'document',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fieldsets: [{ name: 'slices', title: 'Slices' }],
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    textSlice
  ]
};
