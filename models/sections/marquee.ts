import { Slug } from '@sanity/types';
import { SanityAsset } from '../utils';

interface MarqueeItems {
	_type: 'marqueeItems';
	_key: string;
	destination: { _ref: string; _type: 'reference'; name: string; slug: Slug; region: string };
	marqueeImage: { _type: 'image'; asset: SanityAsset };
}

export interface Marquee {
	_type: 'marquee';
	_key: string;
	title: string;
	marqueeItems: MarqueeItems[];
}
