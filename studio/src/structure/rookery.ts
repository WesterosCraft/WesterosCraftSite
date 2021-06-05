import { StructureBuilder as S } from '@sanity/structure';
import { RiQuestionnaireLine } from 'react-icons/ri';

export const RookeryMenuItem = S.listItem()
	.title('Rookery')
	.icon(RiQuestionnaireLine)
	.child(S.documentTypeList('rookery').title('Rookery').filter('_type == $type').params({ type: 'rookery' }));
