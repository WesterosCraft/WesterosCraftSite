import { groq } from 'next-sanity';

export const siteSettingsQuery = groq`
*[_type == "siteSettings"][0]{
	...,
	navigation[]{
		...,
		link->{
			_type,
			slug
		},
		links[]{
			...,
			link->{
				_type,
				slug
			}
  		}
	},
	topLevelWikiNavigation{
		...,
		link->{
			_type,
			slug
		},
		links[]{
			...,
			link->{
				_type,
				slug
			}
  		}
	},
	wikiNavigation[]{
		...,
	}
	}
`;
