const title = 'WesterosCraft';
const description = 'WesterosCraft is faithfully recreating the world of Game of Thrones in Minecraft.';
const url = 'https://westeroscraft.com/';

const config = {
	title,
	description,
	canonical: url,
	openGraph: {
		type: 'website',
		locale: 'en_EN',
		url,
		site_name: 'westeroscraft.com',
		title,
		description,
		images: [
			{
				url: 'https://westeroscraft.com/favicon.svg',
				alt: title,
				width: 1280,
				height: 720,
			},
		],
	},
};

export default config;
