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

export const blockContent = `
	_type == 'blockContent' => {
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
			destination->{name, region, slug}
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
