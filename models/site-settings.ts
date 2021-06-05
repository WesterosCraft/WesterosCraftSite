import { NavItem } from '@/models/objects/nav-item';
import { SanityDocument } from '@sanity/types';
import { SocialFields } from './objects/social-fields';

export interface SiteSettings extends SanityDocument {
	_type: 'siteSettings';
	_key: string;
	title: string;
	description: string;
	navigation?: NavItem[];
	socialFields?: SocialFields;
}
