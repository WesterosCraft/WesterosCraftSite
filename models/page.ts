import { SanityDocument, Slug } from '@sanity/types';
import { MetaFields } from './meta-fields';
import { Sections } from './sections';
import { NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';

export interface Page extends SanityDocument {
	_type: 'page';
	slug: Slug;
	title: string;
	meta?: MetaFields;
	content?: Sections[];
}

export type LayoutPage<P = {}> = NextPage<P> & {
	// You can disable whichever you don't need
	getLayout?: (page: ReactElement) => ReactNode;
};
