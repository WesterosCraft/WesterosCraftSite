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
			destination->{
				name,
				region,
				slug,
				"images": images[0].asset->{
					url,
					metadata {
						lqip
					}
				}
			},
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

export const referenceGrid = `
	_type == 'referenceGrid' => {
		...,
		gridItems[]->{
			name,
			region,
			slug,
			"images": images[0].asset->{
				url,
				metadata {
					lqip
				}
			}
		}
	}
`;
