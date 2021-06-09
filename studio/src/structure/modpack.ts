import { StructureBuilder as S } from '@sanity/structure';
import { GoPackage } from 'react-icons/go';

export const ModpackMenuItem = S.documentListItem().icon(GoPackage).schemaType('modpack').id('modpack');
