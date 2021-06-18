import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';
import siteSettings from './documents/site-settings';

import columns from './objects/columns';
import externalLink from './objects/external-link';
import internalLink from './objects/internal-link';
import link from './objects/link';
import metaFields from './objects/meta';
import socialFields from './objects/social-fields';
import simpleBlockContent from './objects/simple-block-content';

// sections
import richText from './sections/rich-text';
import grid from './sections/grid';
import mainImage from './sections/main-image';
import spacer from './sections/spacer';
import youtube from './sections/youtube';
import marquee from './sections/marquee';
import quote from './sections/quote';
import editions from './sections/editions';
import tableBuilder from './sections/table-builder';
import blockBanner from './sections/block-banner';
import columnWithVideo from './sections/column-with-video';
import referenceGrid from './sections/reference-grid';

// pages/documents
import destination from './documents/destination';
import about from './documents/about';
import modpack from './documents/modpack';
import guide from './documents/guide';
import home from './documents/home';
import wiki from './documents/wiki';
import rookery from './documents/rookery';
import progress from './documents/progress';
import downloads from './documents/downloads';

// objects
import figure from './objects/figure';
import video from './objects/video';
import callToAction from './objects/callToAction';
import documentGrid from './objects/documentGrid';
import imageGallery from './objects/imageGallery';
import accordion from './objects/accordion';
import accordionContent from './objects/accordionContent';
import twoColumnText from './objects/twoColumnText';
import destinationSlider from './objects/destinationSlider';
import links from './objects/links';
import buttons from './objects/buttons';
import banner from './objects/banner';
import contentBanner from './objects/contentBanner';
import dynmapData from './objects/dynmapData';
import navigationSection from './objects/navigationSection';
import imageSlider from './objects/image-slider';

export default createSchema({
	name: 'default',
	types: schemaTypes.concat([
		marquee,
		quote,
		editions,
		siteSettings,
		columnWithVideo,
		navigationSection,
		metaFields,
		columns,
		externalLink,
		internalLink,
		link,
		simpleBlockContent,
		grid,
		mainImage,
		socialFields,
		spacer,
		youtube,
		home,
		guide,
		video,
		destination,
		blockBanner,
		about,
		modpack,
		figure,
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
		rookery,
		progress,
		contentBanner,
		wiki,
		dynmapData,
		downloads,
		tableBuilder,
		imageSlider,
		referenceGrid,
	]),
});
