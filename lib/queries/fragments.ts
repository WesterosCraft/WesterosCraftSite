export const grid = `
	_type == 'grid' => {
		...,
		items[] {
			...,
			ctas[] {
				...,
				link->{link, slug}
			}
		}
	}
`;

export const spacer = `
	_type == 'spacer' => {
		...
	}
`;

export const richText = `
	_type == 'richText' => {
		...
	}
`;

export const mainImage = `
	_type == 'mainImage' => {
		...
	}
`;

export const youtube = `
	_type == 'youtube' => {
		...
	}
`;

export const marquee = `
	_type == 'marquee' => {
		...,
		marqueeItems[]{
			...,
			destination->{name, region, slug},
			"marqueeImage": marqueeImage.asset->{
				url,
				metadata {
				  lqip
				}
			  }
		}
	}
`;

export const quote = `
	_type == 'quoteBlock' => {
		...
	}
`;

export const editions = `
	_type == 'editions' => {
		...
	}
`;

export const blockBanner = `
	_type == 'blockBanner' => {
		...
	}
`;
