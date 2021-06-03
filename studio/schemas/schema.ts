/* eslint-disable unicorn/prefer-spread */
import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import person from './documents/person';
import page from './documents/page';
import post from './documents/post';
import siteSettings from './documents/site-settings';

import columns from './objects/columns';
import externalLink from './objects/external-link';
import internalLink from './objects/internal-link';
import link from './objects/link';
import metaFields from './objects/meta';
import socialFields from './objects/social-fields';
import simpleBlockContent from './objects/simple-block-content';

import blockContent from './sections/block-content';
import grid from './sections/grid';
import mainImage from './sections/main-image';
import spacer from './sections/spacer';
import youtube from './sections/youtube';

// pages/documents
import destination from './documents/destination';
import about from './documents/about';
import launcher from './documents/launcher';
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
import spacers from './objects/spacer';
import contentBanner from './objects/contentBanner';
import dynmapData from './objects/dynmapData';
import tableBuilder from './objects/tableBuilder';

export default createSchema({
	name: 'default',
	types: schemaTypes.concat([
		person,
		page,
		post,
		siteSettings,
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
		spacers,
		rookery,
		progress,
		contentBanner,
		wiki,
		dynmapData,
		downloads,
		tableBuilder,
	]),
});
