export default {
  name: 'twoColumnText',
  type: 'object',
  title: 'Two Column Text',
  description: 'Two side by side columns of text.',
  fields: [
    {
      title: 'Layout',
      name: 'layout',
      type: 'string',
      description: 'Layout of columns.',
      options: {
        list: [
          { title: '50/50', value: 'fiftyfifty' },
          { title: '60/40', value: 'sixtyfourty' }
        ]
      }
    },
    {
      title: 'Left Column',
      name: 'leftColumn',
      type: 'richText'
    },
    {
      title: 'Right Column',
      name: 'rightColumn',
      type: 'richText'
    }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare(value) {
      const block = (value.title || []).find((block) => block._type === 'block');
      return {
        title: block
          ? block.children
              .filter((child) => child._type === 'span')
              .map((span) => span.text)
              .join('')
          : 'Two Column Text'
      };
    }
  }
};
