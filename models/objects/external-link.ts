import { Slug } from '@sanity/types';

export interface ExternalLink {
	_type: 'externalLink' | string;
	_key: string;
	title: string;
	slug?: Slug;
	description?: string;
	icon?: string;
}
