import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

// pages/documents
import destination from './documents/destination';
import about from './documents/about';
import launcher from './documents/launcher';
import guide from './documents/guide';
import home from './documents/home';

// objects
import figure from './objects/figure';
import video from './objects/video';
import simpleRichText from './objects/simpleRichText';
import callToAction from './objects/callToAction';
import documentGrid from './objects/documentGrid';
import imageGallery from './objects/imageGallery';
import accordion from './objects/accordion';
import accordionContent from './objects/accordionContent';
import richText from './objects/richText';
import twoColumnText from './objects/twoColumnText';
import destinationSlider from './objects/destinationSlider';
import links from './objects/links';
import buttons from './objects/buttons';
import banner from './objects/banner';
import spacer from './objects/spacer';
import rookery from './documents/rookery';

const schema = createSchema({
  name: 'default',
  types: schemaTypes.concat([
    home,
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
    accordion,
    accordionContent,
    richText,
    twoColumnText,
    destinationSlider,
    links,
    buttons,
    banner,
    spacer,
    rookery
  ])
});

export default schema;
