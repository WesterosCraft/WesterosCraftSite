import { groq } from 'next-sanity';
import { blockContent, grid, mainImage, spacer, youtube, marquee } from './fragments';

export const pageQuery = groq`
	*[_type == $type && slug.current == $slug][0] {
		...,
		content[] {
			${blockContent},
			${grid},
			${mainImage},
			${spacer},
			${youtube},
			${marquee}
		}
	}
`;

export const allPagesSlug = groq`
	*[_type == 'page' && defined(slug.current) && slug.current != 'frontpage' && slug.current != 'posts'][].slug.current
`;
