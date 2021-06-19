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
	destinationCard,
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

export const wikiQuery = groq`
*[_type == 'wiki'][0] {
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
	},
	"createdDestinations": *[_type == 'destination'] | order(_createdAt desc)[0...6] {
		${destinationCard}
	},
	"updatedDestinations": *[_type == 'destination'] | order(_updatedAt desc)[0...6] {
		${destinationCard}
	}
	}
`;
