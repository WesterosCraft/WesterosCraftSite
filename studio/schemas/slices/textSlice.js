import spacings from './spacings';

export default {
  title: 'Text Slice',
  name: 'textSlice',
  type: 'document',
  fieldsets: [{ name: 'spacing', title: 'Config' }],
  fields: [
    {
      title: 'Copy',
      name: 'copy',
      type: 'array',
      of: [{ type: 'block' }]
    },
    ...spacings
  ]
};
