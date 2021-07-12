import { SanityAsset } from '../utils';

export interface ITestimonial {
	_type: 'testimonial';
	_key: string;
	buttonText: string;
	url: string;
	author: string;
	image: { _type: 'image'; url: string; asset: SanityAsset; metadata?: { lqip: string } };
	buttonLink: string;
	quote: string;
}
