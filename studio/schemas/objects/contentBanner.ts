export default {
  name: 'contentBanner',
  type: 'object',
  title: 'Content Banner',
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
    },
    {
      title: 'Warning Text',
      name: 'warningText',
      type: 'richText'
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
          : 'Content Banner'
      };
    }
  }
};
