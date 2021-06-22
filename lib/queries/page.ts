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

export const allGuidesSlug = groq`
	*[_type == 'guide' && defined(slug.current)][].slug.current
`;

export const allGuidesQuery = groq`
	*[_type == 'guide' && defined(slug.current)]
`;

export const guideQuery = groq`
	*[_type == 'guide' && slug.current == $slug][0] {
		...,
	}
`;

export const regionQuery = groq`
	*[_type == 'destination' && region == $slug]
`;

export const allBuildsSlug = groq`
	*[_type == 'destination' && defined(slug.current)]{
  		slug {
  			current
		},
 		region
	}
`;

export const allBuildsQuery = groq`
	{
		"builds":*[_type == 'destination' && defined(slug.current)]{
		...,
	} | order(name asc),
		"totalBuilds":count(*[_type == 'destination' && defined(slug.current)])
	}
`;

export const buildQuery = groq`
	*[_type == 'destination' && slug.current == $slug][0] {
		...,
	}
`;
