export default {
  name: 'accordion',
  title: 'Accordion',
  type: 'object',

  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading'
    },
    {
      name: 'accordionContent',
      type: 'array',
      of: [{ type: 'accordionContent' }]
    }
  ]
};
