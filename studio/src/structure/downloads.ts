import { StructureBuilder as S } from '@sanity/structure';
import { RiFileDownloadLine } from 'react-icons/ri';

export const DownloadsMenuItem = S.documentListItem().icon(RiFileDownloadLine).schemaType('downloads').id('downloads');
