import { StructureBuilder as S } from '@sanity/structure';
import { RiQuestionnaireLine } from 'react-icons/ri';

export const WikiMenuItem = S.listItem()
	.title('Wiki')
	.icon(RiQuestionnaireLine)
	.child(S.documentTypeList('wiki').title('Wiki').filter('_type == $type').params({ type: 'wiki' }));
