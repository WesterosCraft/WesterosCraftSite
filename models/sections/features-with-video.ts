import { SanityAsset } from '../utils';

export interface IFeaturesWithVideo {
	_type: 'featuresWithVideo';
	_key: string;
	heading: string;
	subheading: string;
	buttonText: string;
	url: string;
	thumbnail: { url: string; metadata: { lqip: string } };
	youtubeThumbnail: SanityAsset;
	featureList: Array<{ _type: 'feature'; _key: string; heading: string; description: string }>;
	logos: Array<{ logoImage: { _type: 'image'; asset: { _ref: string } }; logoLink: string }>;
}
