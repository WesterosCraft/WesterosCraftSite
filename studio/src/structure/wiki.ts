import { StructureBuilder as S } from '@sanity/structure';
import { FaBook } from 'react-icons/fa';

export const WikiMenuItem = S.documentListItem().icon(FaBook).schemaType('wiki').id('wiki');
