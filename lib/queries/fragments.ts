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

export const map = `
	_type == 'map' => {
		...
	}
`;

export const destinationCard = `
	name,
	region,
	slug,
	projectStatus,
	house,
	buildType,
	entry[0],
	"images": images[0].asset->{
		url,
		metadata {
			lqip
		}
	}
`;

export const referenceGrid = `
	_type == 'referenceGrid' => {
		...,
		gridItems[]->{
			${destinationCard}
		}
	}
`;

export const featuresWithVideo = `
	_type == 'featuresWithVideo' => {
		...,
		"thumbnail": youtubeThumbnail.asset->{
			url,
			metadata {
				lqip
			}
		}
	}
`;

export const heroSlider = `
heroSlider{
	...,
	slideItems[]{
		...,
		destination->{
			_ref,
			_type,
			name,
			region,
			slug
		},
	"slideImage": slideImage.asset->{
		url,
		metadata {
			lqip
		}
  	}
  	}
  }
`;
