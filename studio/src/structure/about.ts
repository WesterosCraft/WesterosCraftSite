import { StructureBuilder as S } from '@sanity/structure';
import { RiQuestionnaireLine } from 'react-icons/ri';

export const AboutMenuItem = S.listItem()
	.title('About')
	.icon(RiQuestionnaireLine)
	.child(S.documentTypeList('about').title('About').filter('_type == $type').params({ type: 'about' }));
