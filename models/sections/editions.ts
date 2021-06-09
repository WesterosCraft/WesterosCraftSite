import { SanityAsset } from '../utils';

export interface Editions {
	_type: 'editions';
	_key: string;
	heading: string;
	editionList: Array<{ _key: string; title: string; link: string; thumbnail: { _type: 'image'; asset: SanityAsset } }>;
}
