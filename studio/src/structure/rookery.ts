import { StructureBuilder as S } from '@sanity/structure';
import { FaCrow } from 'react-icons/fa';

export const RookeryMenuItem = S.documentListItem().icon(FaCrow).schemaType('rookery').id('rookery');
