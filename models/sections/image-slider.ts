import { Slug } from '@sanity/types';
import { ExpandedImage, Regions } from '../utils';

export interface ImageSlider {
	_type: 'imageSlider';
	_key: string;
	slideItems: Array<{
		destination: { name: string; _type: 'destination'; region: Regions; slug: Slug };
		slideImage: ExpandedImage;
		_key: string;
		_type: 'slide';
	}>;
}
