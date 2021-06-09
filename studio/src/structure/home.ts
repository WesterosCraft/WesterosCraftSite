import { StructureBuilder as S } from '@sanity/structure';
import { RiHome3Line } from 'react-icons/ri';

export const HomeMenuItem = S.documentListItem().icon(RiHome3Line).schemaType('home').id('home');
