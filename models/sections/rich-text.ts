import { SanityBlock } from '../utils';

export interface RichText {
	_type: 'richText';
	_key: string;
	copy?: SanityBlock[];
}
