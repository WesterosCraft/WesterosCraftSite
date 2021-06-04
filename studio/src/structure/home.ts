import { StructureBuilder as S } from '@sanity/structure';
import { RiHome3Line } from 'react-icons/ri';

export const HomeMenuItem = S.listItem()
	.title('Home')
	.icon(RiHome3Line)
	.child(S.documentTypeList('home').title('Home').filter('_type == $type').params({ type: 'home' }));
