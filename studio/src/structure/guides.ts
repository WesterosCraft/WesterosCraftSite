import { StructureBuilder as S } from '@sanity/structure';
import { FiHelpCircle } from 'react-icons/fi';

export const GuidesMenuItem = S.listItem()
	.title('Guides')
	.icon(FiHelpCircle)
	.child(S.documentTypeList('guide').title('Guides').filter('_type == $type').params({ type: 'guide' }));
