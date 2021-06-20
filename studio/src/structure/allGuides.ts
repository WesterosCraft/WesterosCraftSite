import { StructureBuilder as S } from '@sanity/structure';
import { FaBook } from 'react-icons/fa';

export const AllGuidesMenuItem = S.documentListItem()
	.title('All Guides')
	.icon(FaBook)
	.schemaType('allGuides')
	.id('allGuides');
