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
	featuresWithVideo,
	map,
	heroSlider,
	wikiInfoCards,
	wikiBanner,
} from './fragments';

export const pageQuery = groq`
	*[_type == $type && slug.current == $slug][0] {
		...,
		${heroSlider},
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
			${referenceGrid},
			${featuresWithVideo},
			${map}
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
		${referenceGrid},
		${wikiInfoCards},
		${wikiBanner}
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
		"uri": "wiki/" + region + '/' + slug.current,
	} | order(name asc),
		"totalBuilds":count(*[_type == 'destination' && defined(slug.current)])
	}
`;

export const buildQuery = groq`
	*[_type == 'destination' && slug.current == $slug][0] {
		...,
		"uri": "wiki/" + region + '/' + slug.current,
		"displayImage": images[0].asset->{
			url,
			metadata {
				lqip
			}
		},
		"images": images[].asset->{
			url,
			metadata {
				lqip
			}
		},
		"banner": banner.asset->{
			url,
			metadata {
				lqip
			}
		}
	}
`;

export const progressQuery = groq`
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
			${referenceGrid},
			${featuresWithVideo},
			${map}
		},
		"totalBuilds": *[_type == 'destination' && defined(slug.current)]{ region, projectStatus },
	}
`;

// "totalCompleted": count(*[_type == 'destination'&& projectStatus == 'completed' && defined(slug.current)]),
// "totalInProgress": count(*[_type == 'destination'&& projectStatus == 'inProgress' && defined(slug.current)]),
// "totalNotStarted": count(*[_type == 'destination'&& projectStatus == 'notStarted' && defined(slug.current)]),
// "totalAbandoned": count(*[_type == 'destination'&& projectStatus == 'abandoned' && defined(slug.current)]),
// "totalRedoInProgress": count(*[_type == 'destination'&& projectStatus == 'redoInProgress' && defined(slug.current)]),

// "regions": {
// 	"beyondTheWall": {
// 		"totalCompleted": count(*[_type == 'destination'&& projectStatus == 'completed' && region == 'beyondTheWall' && defined(slug.current)]),
// 		"totalInProgress": count(*[_type == 'destination'&& projectStatus == 'inProgress' && region == 'beyondTheWall' && defined(slug.current)]),
// 		"totalNotStarted": count(*[_type == 'destination'&& projectStatus == 'notStarted' && region == 'beyondTheWall' && defined(slug.current)]),
// 		"totalAbandoned": count(*[_type == 'destination'&& projectStatus == 'abandoned' && region == 'beyondTheWall' && defined(slug.current)]),
// 		"totalRedoInProgress": count(*[_type == 'destination'&& projectStatus == 'redoInProgress' && region == 'beyondTheWall' && defined(slug.current)]),
// 	},
// 	"crownlands": {
// 		"totalCompleted": count(*[_type == 'destination'&& projectStatus == 'completed' && region == 'crownlands' && defined(slug.current)]),
// 		"totalInProgress": count(*[_type == 'destination'&& projectStatus == 'inProgress' && region == 'crownlands' && defined(slug.current)]),
// 		"totalNotStarted": count(*[_type == 'destination'&& projectStatus == 'notStarted' && region == 'crownlands' && defined(slug.current)]),
// 		"totalAbandoned": count(*[_type == 'destination'&& projectStatus == 'abandoned' && region == 'crownlands' && defined(slug.current)]),
// 		"totalRedoInProgress": count(*[_type == 'destination'&& projectStatus == 'redoInProgress' && region == 'crownlands' && defined(slug.current)]),
// 	},
// 	"dorne": {
// 		"totalCompleted": count(*[_type == 'destination'&& projectStatus == 'completed' && region == 'dorne' && defined(slug.current)]),
// 		"totalInProgress": count(*[_type == 'destination'&& projectStatus == 'inProgress' && region == 'dorne' && defined(slug.current)]),
// 		"totalNotStarted": count(*[_type == 'destination'&& projectStatus == 'notStarted' && region == 'dorne' && defined(slug.current)]),
// 		"totalAbandoned": count(*[_type == 'destination'&& projectStatus == 'abandoned' && region == 'dorne' && defined(slug.current)]),
// 		"totalRedoInProgress": count(*[_type == 'destination'&& projectStatus == 'redoInProgress' && region == 'dorne' && defined(slug.current)]),
// 	},
// 	"ironIslands": {
// 		"totalCompleted": count(*[_type == 'destination'&& projectStatus == 'completed' && region == 'ironIslands' && defined(slug.current)]),
// 		"totalInProgress": count(*[_type == 'destination'&& projectStatus == 'inProgress' && region == 'ironIslands' && defined(slug.current)]),
// 		"totalNotStarted": count(*[_type == 'destination'&& projectStatus == 'notStarted' && region == 'ironIslands' && defined(slug.current)]),
// 		"totalAbandoned": count(*[_type == 'destination'&& projectStatus == 'abandoned' && region == 'ironIslands' && defined(slug.current)]),
// 		"totalRedoInProgress": count(*[_type == 'destination'&& projectStatus == 'redoInProgress' && region == 'ironIslands' && defined(slug.current)]),
// 	},
// 	"north": {
// 		"totalCompleted": count(*[_type == 'destination'&& projectStatus == 'completed' && region == 'north' && defined(slug.current)]),
// 		"totalInProgress": count(*[_type == 'destination'&& projectStatus == 'inProgress' && region == 'north' && defined(slug.current)]),
// 		"totalNotStarted": count(*[_type == 'destination'&& projectStatus == 'notStarted' && region == 'north' && defined(slug.current)]),
// 		"totalAbandoned": count(*[_type == 'destination'&& projectStatus == 'abandoned' && region == 'north' && defined(slug.current)]),
// 		"totalRedoInProgress": count(*[_type == 'destination'&& projectStatus == 'redoInProgress' && region == 'north' && defined(slug.current)]),
// 	},
// 	"reach": {
// 		"totalCompleted": count(*[_type == 'destination'&& projectStatus == 'completed' && region == 'reach' && defined(slug.current)]),
// 		"totalInProgress": count(*[_type == 'destination'&& projectStatus == 'inProgress' && region == 'reach' && defined(slug.current)]),
// 		"totalNotStarted": count(*[_type == 'destination'&& projectStatus == 'notStarted' && region == 'reach' && defined(slug.current)]),
// 		"totalAbandoned": count(*[_type == 'destination'&& projectStatus == 'abandoned' && region == 'reach' && defined(slug.current)]),
// 		"totalRedoInProgress": count(*[_type == 'destination'&& projectStatus == 'redoInProgress' && region == 'reach' && defined(slug.current)]),
// 	},
// 	"riverlands": {
// 		"totalCompleted": count(*[_type == 'destination'&& projectStatus == 'completed' && region == 'riverlands' && defined(slug.current)]),
// 		"totalInProgress": count(*[_type == 'destination'&& projectStatus == 'inProgress' && region == 'riverlands' && defined(slug.current)]),
// 		"totalNotStarted": count(*[_type == 'destination'&& projectStatus == 'notStarted' && region == 'riverlands' && defined(slug.current)]),
// 		"totalAbandoned": count(*[_type == 'destination'&& projectStatus == 'abandoned' && region == 'riverlands' && defined(slug.current)]),
// 		"totalRedoInProgress": count(*[_type == 'destination'&& projectStatus == 'redoInProgress' && region == 'riverlands' && defined(slug.current)]),
// 	},
// 	"stormlands": {
// 		"totalCompleted": count(*[_type == 'destination'&& projectStatus == 'completed' && region == 'stormlands' && defined(slug.current)]),
// 		"totalInProgress": count(*[_type == 'destination'&& projectStatus == 'inProgress' && region == 'stormlands' && defined(slug.current)]),
// 		"totalNotStarted": count(*[_type == 'destination'&& projectStatus == 'notStarted' && region == 'stormlands' && defined(slug.current)]),
// 		"totalAbandoned": count(*[_type == 'destination'&& projectStatus == 'abandoned' && region == 'stormlands' && defined(slug.current)]),
// 		"totalRedoInProgress": count(*[_type == 'destination'&& projectStatus == 'redoInProgress' && region == 'stormlands' && defined(slug.current)]),
// 	},
// 	"vale": {
// 		"totalCompleted": count(*[_type == 'destination'&& projectStatus == 'completed' && region == 'vale' && defined(slug.current)]),
// 		"totalInProgress": count(*[_type == 'destination'&& projectStatus == 'inProgress' && region == 'vale' && defined(slug.current)]),
// 		"totalNotStarted": count(*[_type == 'destination'&& projectStatus == 'notStarted' && region == 'vale' && defined(slug.current)]),
// 		"totalAbandoned": count(*[_type == 'destination'&& projectStatus == 'abandoned' && region == 'vale' && defined(slug.current)]),
// 		"totalRedoInProgress": count(*[_type == 'destination'&& projectStatus == 'redoInProgress' && region == 'vale' && defined(slug.current)]),
// 	},
// 	"theWall": {
// 		"totalCompleted": count(*[_type == 'destination'&& projectStatus == 'completed' && region == 'theWall' && defined(slug.current)]),
// 		"totalInProgress": count(*[_type == 'destination'&& projectStatus == 'inProgress' && region == 'theWall' && defined(slug.current)]),
// 		"totalNotStarted": count(*[_type == 'destination'&& projectStatus == 'notStarted' && region == 'theWall' && defined(slug.current)]),
// 		"totalAbandoned": count(*[_type == 'destination'&& projectStatus == 'abandoned' && region == 'theWall' && defined(slug.current)]),
// 		"totalRedoInProgress": count(*[_type == 'destination'&& projectStatus == 'redoInProgress' && region == 'theWall' && defined(slug.current)]),
// 	},
// 	"westerlands": {
// 		"totalCompleted": count(*[_type == 'destination'&& projectStatus == 'completed' && region == 'westerlands' && defined(slug.current)]),
// 		"totalInProgress": count(*[_type == 'destination'&& projectStatus == 'inProgress' && region == 'westerlands' && defined(slug.current)]),
// 		"totalNotStarted": count(*[_type == 'destination'&& projectStatus == 'notStarted' && region == 'westerlands' && defined(slug.current)]),
// 		"totalAbandoned": count(*[_type == 'destination'&& projectStatus == 'abandoned' && region == 'westerlands' && defined(slug.current)]),
// 		"totalRedoInProgress": count(*[_type == 'destination'&& projectStatus == 'redoInProgress' && region == 'westerlands' && defined(slug.current)]),
// 	}
// }
