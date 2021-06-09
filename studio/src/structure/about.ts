import { StructureBuilder as S } from '@sanity/structure';
import { RiQuestionnaireLine } from 'react-icons/ri';

export const AboutMenuItem = S.documentListItem().icon(RiQuestionnaireLine).schemaType('about').id('about');
