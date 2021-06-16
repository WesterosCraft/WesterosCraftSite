import { Slug } from '@sanity/types';
import { Regions, SanityAsset } from '../utils';

interface MarqueeItems {
	_type: 'marqueeItems';
	_key: string;
	destination: { _ref: string; _type: 'reference'; name: string; slug: Slug; region: Regions };
	marqueeImage: { _type: 'image'; url: string; asset: SanityAsset; metadata?: { lqip: string } };
}

export interface Marquee {
	_type: 'marquee';
	_key: string;
	heading: string;
	marqueeItems: MarqueeItems[];
}
