import { SanityBlock } from '../utils';

export interface IRichText {
	_type: 'richText';
	_key: string;
	copy?: SanityBlock[];
}
