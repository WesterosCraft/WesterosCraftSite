export default {
  name: 'richText',
  type: 'object',
  title: 'Rich Text',
  fields: [
    {
      name: 'copy',
      type: 'simpleRichText'
    }
  ],
  preview: {
    select: {
      copy: 'copy'
    },
    prepare(value) {
      const block = (value.copy || []).find((block) => block._type === 'block');
      return {
        title: block
          ? block.children
              .filter((child) => child._type === 'span')
              .map((span) => span.text)
              .join('')
          : 'No Preview available'
      };
    }
  }
};
