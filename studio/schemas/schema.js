import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

// pages/documents
import destination from './documents/destination';
import about from './documents/about';
import launcher from './documents/launcher';
import guide from './documents/guide';
import home from './documents/home';
import wiki from './documents/wiki';
import rookery from './documents/rookery';
import progress from './documents/progress';
import playground from './documents/playground';
import settings from './documents/settings';

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
import contentBanner from './objects/contentBanner';
import testimonials from './objects/testimonials';
import navigation from './objects/navigation';
import navigationSection from './objects/navigationSection';
import navigationLink from './objects/navigationLink';
import videoList from './objects/videoList';
import hero from './objects/hero';

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
    rookery,
    progress,
    contentBanner,
    wiki,
    playground,
    testimonials,
    navigation,
    settings,
    navigationSection,
    navigationLink,
    videoList,
    hero
  ])
});

export default schema;
