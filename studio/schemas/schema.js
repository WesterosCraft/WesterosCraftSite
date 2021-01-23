import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

// pages
import destination from './documents/destination';
import about from './documents/about';
import launcher from './documents/launcher';

// objects
import textSlice from './objects/textSlice';
import videoSlice from './objects/videoSlice';
import figure from './objects/figure';
import video from './objects/video';

const schema = createSchema({
  name: 'default',
  types: schemaTypes.concat([video, destination, textSlice, videoSlice, about, launcher, figure])
});

export default schema;
