export default {
  title: 'Home',
  name: 'home',
  type: 'document',
  // __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      title: 'Heading',
      name: 'heading',
      type: 'string'
    },
    {
      title: 'Subheading',
      name: 'subheading',
      type: 'string'
    },
    {
      name: 'pageBuilder',
      type: 'array',
      title: 'Page builder',
      of: [
        { type: 'twoColumnText' },
        { type: 'destinationSlider' },
        { type: 'banner' },
        {
          name: 'twoColumnVideo',
          type: 'object',
          title: 'Two Column With Video',
          fields: [
            {
              title: 'Text Column',
              name: 'textColumn',
              type: 'richText'
            },
            {
              title: 'Video Link',
              name: 'videoLink',
              type: 'string'
            },
            {
              title: 'Video Thumbnail',
              name: 'videoThumbnail',
              type: 'image'
            },
            {
              title: 'Featured Images',
              type: 'array',
              name: 'featuredImages',
              of: [
                {
                  type: 'image',
                  title: 'Image',
                  name: 'image',
                  fields: [
                    { type: 'string', name: 'link', title: 'Link' },
                    { type: 'string', name: 'alt', title: 'Alt' },
                    { type: 'boolean', name: 'inject', title: 'Inject' }
                  ]
                }
              ]
            }
          ]
        },
        { type: 'spacer' }
      ]
    }
  ]
};
