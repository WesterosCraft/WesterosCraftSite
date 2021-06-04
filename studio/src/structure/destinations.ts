import { StructureBuilder as S } from '@sanity/structure';
import { RiMapPin2Line } from 'react-icons/ri';

export const DestinationMenuItem = S.listItem()
	.title('Destinations')
	.icon(RiMapPin2Line)
	.child(
		S.documentTypeList('destination').title('Destinations').filter('_type == $type').params({ type: 'destination' })
	);
