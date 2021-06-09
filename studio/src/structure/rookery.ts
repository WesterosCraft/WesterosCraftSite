import { StructureBuilder as S } from '@sanity/structure';
import { FaCrow } from 'react-icons/fa';

export const RookeryMenuItem = S.listItem()
	.title('Rookery')
	.icon(FaCrow)
	.child(S.documentTypeList('rookery').title('Rookery').filter('_type == $type').params({ type: 'rookery' }));
