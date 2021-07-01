import { Image } from './image';
import { IRichText } from './rich-text';
import { Youtube } from './youtube';

export interface Grid {
	_type: 'grid';
	_key: string;
	title: string;
	columns: {
		_type: 'columns';
		small: string;
		medium: string;
		large: string;
	};
	items?: Array<Image | IRichText | Youtube>;
}
