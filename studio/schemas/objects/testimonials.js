export default {
  name: 'testimonials',
  title: 'Testimonials',
  type: 'object',

  fields: [
    {
      Title: 'testimonials',
      name: 'testimonials',
      type: 'array',
      of: [
        {
          Title: 'testimonial',
          name: 'testimonial',
          type: 'object',
          fields: [
            {
              title: 'Icon',
              name: 'icon',
              type: 'image'
            },
            {
              title: 'Quote',
              name: 'quote',
              type: 'string'
            },
            {
              title: 'Author',
              name: 'author',
              type: 'string'
            },
            {
              title: 'Position',
              name: 'position',
              type: 'string'
            }
          ]
        }
      ]
    }
  ]
};
