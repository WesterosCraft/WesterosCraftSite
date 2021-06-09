/* eslint-disable unicorn/prefer-spread */
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
import blockContent from './sections/block-content';
import grid from './sections/grid';
import mainImage from './sections/main-image';
import spacer from './sections/spacer';
import youtube from './sections/youtube';
import marquee from './sections/marquee';
import quote from './sections/quote';
import editions from './sections/editions';

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
import contentBanner from './objects/contentBanner';
import dynmapData from './objects/dynmapData';
import tableBuilder from './objects/tableBuilder';
import navigationSection from './objects/navigationSection';

export default createSchema({
	name: 'default',
	types: schemaTypes.concat([
		marquee,
		quote,
		editions,
		siteSettings,
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
		blockContent,
		spacer,
		youtube,
		home,
		guide,
		video,
		destination,
		about,
		modpack,
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
		rookery,
		progress,
		contentBanner,
		wiki,
		dynmapData,
		downloads,
		tableBuilder,
	]),
});
