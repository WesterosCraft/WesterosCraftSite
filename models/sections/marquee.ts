import { Slug } from '@sanity/types';
import { Regions, SanityAsset } from '../utils';

interface MarqueeItems {
	_type: 'marqueeItems';
	_key: string;
	destination: {
		_ref: string;
		_type: 'reference';
		name: string;
		slug: Slug;
		region?: Regions;
		images?: { url: string; metadata?: { lqip: string } };
	};
	marqueeImage?: { _type: 'image'; url: string; asset: SanityAsset; metadata?: { lqip: string } };
}

export interface IMarquee {
	_type: 'marquee';
	_key: string;
	heading: string;
	headingAlignment?: 'left' | 'center';
	headingSize?: 'h1' | 'h2' | 'h3';
	marqueeItems: MarqueeItems[];
	subheading?: string;
}
