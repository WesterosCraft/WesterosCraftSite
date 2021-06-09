import { SanityDocument, Slug } from '@sanity/types';
import { MetaFields } from './meta-fields';
import { Sections } from './sections';

export interface Page extends SanityDocument {
	_type: 'page';
	slug: Slug;
	title: string;
	meta?: MetaFields;
	content?: Sections[];
}
