export default {
  name: 'imageGallery',
  type: 'object',
  title: 'Image Gallery',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading'
    },
    {
      name: 'copyScript',
      type: 'string',
      title: 'Copy Script',
      description: 'A string thats copied to your clipboard on click'
    },
    {
      name: 'images',
      type: 'array',
      title: 'Images',
      of: [
        {
          name: 'image',
          type: 'image',
          title: 'Image',
          options: {
            hotspot: true
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
              options: {
                isHighlighted: true
              }
            },
            {
              name: 'description',
              type: 'string',
              title: 'Image Description',
              options: {
                isHighlighted: true
              }
            }
          ]
        }
      ],
      options: {
        layout: 'grid'
      }
    }
  ]
};
