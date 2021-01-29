export default {
  name: 'destinationSlider',
  type: 'object',
  title: 'Destination Slider',
  fields: [
    {
      title: 'Copy',
      name: 'copy',
      type: 'richText'
    },
    {
      name: 'slider',
      type: 'array',
      title: 'Slider',
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
              name: 'caption',
              type: 'string',
              title: 'Caption',
              options: {
                isHighlighted: true
              }
            },
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
      ]
    },
    {
      name: 'linkBuilder',
      type: 'array',
      title: 'Link Builder',
      description: 'These links appear below the list of slides.',
      of: [
        {
          type: 'links'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'copy'
    },
    prepare(value) {
      const block = (value.copy || []).find((block) => block._type === 'block');
      return {
        title: block
          ? block.children
              .filter((child) => child._type === 'span')
              .map((span) => span.text)
              .join('')
          : 'Destination Slider'
      };
    }
  }
};
