import { InternalLink } from '@/models/objects/internal-link';
import { ExternalLink } from '@/models/objects/external-link';

export interface SubNavItem {
	links: Array<InternalLink | ExternalLink>;
	_type: 'navigation.section';
	_key: string;
	title: string;
}
