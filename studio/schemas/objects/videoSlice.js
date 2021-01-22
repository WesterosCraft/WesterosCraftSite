import spacingSettings from './spacing';

export default {
  title: 'Video Slice',
  name: 'videoSlice',
  type: 'document',
  fieldsets: [{ name: 'spacing', title: 'Config' }],
  fields: [
    {
      title: 'Video URL',
      name: 'videoUrl',
      type: 'url'
    },
    {
      title: 'Thumbnail',
      name: 'thumbnail',
      type: 'image'
    },
    ...spacingSettings
  ]
};
