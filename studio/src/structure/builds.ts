import { StructureBuilder as S } from '@sanity/structure';
import { FaBook } from 'react-icons/fa';

export const AllBuildsMenuItem = S.documentListItem()
	.title('All Builds')
	.icon(FaBook)
	.schemaType('allBuilds')
	.id('allBuilds');
