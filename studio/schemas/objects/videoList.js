export default {
  name: 'videoList',
  title: 'Video List',
  type: 'object',
  fields: [
    {
      Title: 'Videos',
      name: 'videos',
      type: 'array',
      of: [
        {
          title: 'Video',
          name: 'video',
          type: 'object',
          fields: [
            {
              title: 'Thumbnail',
              name: 'thumbnail',
              type: 'image'
            },
            {
              title: 'Video Url',
              name: 'videoUrl',
              type: 'url'
            }
          ]
        }
      ]
    }
  ]
};
