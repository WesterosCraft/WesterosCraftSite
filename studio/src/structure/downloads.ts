import { StructureBuilder as S } from '@sanity/structure';
import { RiFileDownloadLine } from 'react-icons/ri';

export const DownloadsMenuItem = S.listItem()
	.title('Downloads')
	.icon(RiFileDownloadLine)
	.child(S.documentTypeList('downloads').title('Downloads').filter('_type == $type').params({ type: 'downloads' }));
