import { NavItem } from '@/models/objects/nav-item';
import { SanityDocument } from '@sanity/types';
import { SocialFields } from './objects/social-fields';
import { InternalLink } from '@/models/objects/internal-link';
import { ExternalLink } from '@/models/objects/external-link';

export interface SiteSettings extends SanityDocument {
	_type: 'siteSettings';
	_key: string;
	title: string;
	description: string;
	navigation?: NavItem[];
	socialFields?: SocialFields;
	wikiNavigation?: any;
	topLevelNavigation?: { links: Array<InternalLink | ExternalLink> };
}
