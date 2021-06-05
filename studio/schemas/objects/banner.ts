export default {
  name: 'banner',
  type: 'object',
  title: 'Banner',
  fields: [
    {
      title: 'Copy',
      name: 'copy',
      type: 'richText'
    },

    {
      name: 'buttonBuilder',
      type: 'array',
      title: 'Button Builder',
      of: [
        {
          type: 'buttons'
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
          : 'Banner'
      };
    }
  }
};
