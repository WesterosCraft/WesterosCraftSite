export default {
  name: 'dynmapData',
  title: 'Dynmap Data',
  type: 'object',
  fields: [
    {
      title: 'Zoom Level',
      name: 'zoom',
      type: 'string',
      initialValue: '4'
    },
    {
      title: 'X Coordinate',
      name: 'xCoord',
      type: 'string',
      description: 'The X coordinate of the location'
    },
    {
      title: 'Y Coordinate',
      name: 'yCoord',
      type: 'string',
      description: 'The y coordinate of the location'
    }
  ]
};
