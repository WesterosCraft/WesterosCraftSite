import { ExpandedImage } from '../utils';

export interface ImageSlider {
	_type: 'imageSlider';
	_key: string;
	slideItems: Array<{
		destination: { name: string; _type: 'destination' };
		slideImage: ExpandedImage;
		_key: string;
		_type: 'slide';
	}>;
}
