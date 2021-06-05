import { StructureBuilder as S } from '@sanity/structure';
import { RiQuestionnaireLine } from 'react-icons/ri';

export const ProgressMenuItem = S.listItem()
	.title('Progress')
	.icon(RiQuestionnaireLine)
	.child(S.documentTypeList('progress').title('Progress').filter('_type == $type').params({ type: 'progress' }));
