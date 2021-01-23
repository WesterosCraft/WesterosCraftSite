import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

// pages/documents
import destination from './documents/destination';
import about from './documents/about';
import launcher from './documents/launcher';
import guide from './documents/guide';

// objects
import figure from './objects/figure';
import video from './objects/video';
import simpleRichText from './objects/simpleRichText';
import callToAction from './objects/callToAction';
import documentGrid from './objects/documentGrid';
import imageGallery from './objects/imageGallery';
import accordion from './objects/accordion';

const schema = createSchema({
  name: 'default',
  types: schemaTypes.concat([
    guide,
    video,
    destination,
    about,
    launcher,
    figure,
    simpleRichText,
    callToAction,
    documentGrid,
    imageGallery,
    accordion
  ])
});

export default schema;
