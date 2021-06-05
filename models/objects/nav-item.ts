import { ExternalLink } from './external-link';
import { InternalLink } from './internal-link';
import { SubNavItem } from './sub-nav-item';

export type NavItem = SubNavItem | InternalLink | ExternalLink;
