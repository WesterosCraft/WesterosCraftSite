import { groq } from 'next-sanity';
import {
	richText,
	grid,
	mainImage,
	spacer,
	youtube,
	marquee,
	quote,
	editions,
	blockBanner,
	referenceGrid,
} from './fragments';

export const pageQuery = groq`
	*[_type == $type && slug.current == $slug][0] {
		...,
		content[] {
			${richText},
			${grid},
			${mainImage},
			${spacer},
			${youtube},
			${marquee},
			${quote},
			${editions},
			${blockBanner},
			${referenceGrid}
		}
	}
`;

export const allPagesSlug = groq`
	*[_type == 'page' && defined(slug.current) && slug.current != 'frontpage' && slug.current != 'posts'][].slug.current
`;
