import { StructureBuilder as S } from '@sanity/structure';
import { HomeMenuItem } from './home';
import { DestinationMenuItem } from './destinations';
import { AboutMenuItem } from './about';
import { ModpackMenuItem } from './modpack';
import { DownloadsMenuItem } from './downloads';
import { RookeryMenuItem } from './rookery';
import { GuidesMenuItem } from './guides';
import { WikiMenuItem } from './wiki';
import { AllBuildsMenuItem } from './builds';
import { AllGuidesMenuItem } from './allGuides';
import PagePreview from '../components/previews/page/page-preview';
import { ProgressMenuItem } from './progress';
import { RiPagesLine, RiPagesFill } from 'react-icons/ri';

const pageList = [
	'about',
	'modpack',
	'rookery',
	'destination',
	'home',
	'wiki',
	'progress',
	'downloads',
	'guide',
	'allBuilds',
	'allGuides',
];

const hiddenDocTypes = (listItem: any) => !pageList.includes(listItem.getId());

const structure = () =>
	S.list()
		.title('Content')
		.items([
			S.listItem()
				.title('Pages')
				.icon(RiPagesLine)
				.child(
					S.list()
						// Sets a title for our new list
						.title('Pages')
						.items([
							AboutMenuItem,
							ModpackMenuItem,
							RookeryMenuItem,
							HomeMenuItem,
							WikiMenuItem,
							ProgressMenuItem,
							DownloadsMenuItem,
							AllBuildsMenuItem,
							AllGuidesMenuItem,
						])
				),
			S.listItem()
				.title('Wiki Pages')
				.icon(RiPagesFill)
				.child(
					S.list()
						// Sets a title for our new list
						.title('Pages')
						.items([DestinationMenuItem, GuidesMenuItem])
				),
			// We also need to remove the new singletons from the main list
			...S.documentTypeListItems().filter(hiddenDocTypes),
		]);

export const getDefaultDocumentNode = (props: any) => {
	const { schemaType } = props;

	if (pageList.includes(schemaType)) {
		return S.document().views([S.view.form(), S.view.component(PagePreview).title('Preview Page')]);
	}

	return S.document().views([S.view.form()]);
};

export default structure;
