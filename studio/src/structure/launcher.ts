import { StructureBuilder as S } from '@sanity/structure';
import { RiQuestionnaireLine } from 'react-icons/ri';

export const LauncherMenuItem = S.listItem()
	.title('Launcher')
	.icon(RiQuestionnaireLine)
	.child(S.documentTypeList('launcher').title('Launcher').filter('_type == $type').params({ type: 'launcher' }));
