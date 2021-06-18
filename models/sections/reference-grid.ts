import { Slug } from '@sanity/types';
import { Regions } from './../utils';
export interface IReferenceGrid {
	_type: 'referenceGrid';
	_key: string;
	heading: string;
	headingAlignment: 'left' | 'center';
	headingSize: 'h1' | 'h2' | 'h3';
	gridItems: Array<{
		_ref: string;
		_key: string;
		_type: 'destination';
		name: string;
		region: Regions;
		slug?: Slug;
		images?: { url: string; metadata?: { lqip: string } };
	}>;
}
