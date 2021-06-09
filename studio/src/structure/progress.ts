import { StructureBuilder as S } from '@sanity/structure';
import { GrInProgress } from 'react-icons/gr';

export const ProgressMenuItem = S.documentListItem().icon(GrInProgress).schemaType('progress').id('progress');
