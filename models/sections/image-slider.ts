import { SanityAsset } from '../utils';

export interface ImageSlider {
	_type: 'imageSlider';
	_key: string;
	slideItems: Array<{
		destination: { _ref: string; _type: 'reference' };
		slideImage: { _type: 'image'; asset: SanityAsset };
		_key: string;
		_type: 'slide';
	}>;
}
