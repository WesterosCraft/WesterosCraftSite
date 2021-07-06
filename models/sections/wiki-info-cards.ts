import { ExpandedImage, SanityReference } from '../utils';

interface InfoCard {
	_key: string;
	heading: string;
	subheading: string;
	linkReference?: SanityReference<any>;
	icon?: ExpandedImage;
	buttonText?: string;
}

export interface IWikiInfoCards {
	_type: 'wikiInfoCards';
	_key: string;
	infoCards: InfoCard[];
}
