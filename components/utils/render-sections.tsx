import { Sections } from '@/models/sections';
import {
	RichText,
	Grid,
	MainImage,
	Spacer,
	Youtube,
	Marquee,
	Quote,
	Editions,
	BlockBanner,
} from '@/components/sections';

const RenderSection = ({ section }: { section: Sections }) => {
	switch (section._type) {
		case 'richText':
			return <RichText data={section} />;
		case 'grid':
			return <Grid data={section} />;
		case 'mainImage':
			return <MainImage data={section} />;
		case 'spacer':
			return <Spacer data={section} />;
		case 'youtube':
			return <Youtube data={section} />;
		case 'marquee':
			return <Marquee data={section} />;
		case 'quoteBlock':
			return <Quote data={section} />;
		case 'editions':
			return <Editions data={section} />;
		case 'blockBanner':
			return <BlockBanner data={section} />;
		default:
			console.warn(`Section couldn't be rendered`);

			if (process.env.NODE_ENV !== 'production') {
				return <pre>{JSON.stringify(section, null, 2)}</pre>;
			}

			return null;
	}
};

export default RenderSection;
