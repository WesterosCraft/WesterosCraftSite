import { IQuote } from './quote';
import { IMarquee } from './marquee';
import { IRichText } from './rich-text';
import { Grid } from './grid';
import { Image } from './image';
import { ISpacer } from './spacer';
import { Youtube } from './youtube';
import { IEditions } from './editions';
import { ImageSlider } from './image-slider';
import { IBlockBanner } from './block-banner';
import { IReferenceGrid } from './reference-grid';
import { IFeaturesWithVideo } from './features-with-video';
import { IMap } from './map';

export type Sections =
	| IBlockBanner
	| IRichText
	| ImageSlider
	| Grid
	| Image
	| ISpacer
	| Youtube
	| IMarquee
	| IQuote
	| IReferenceGrid
	| IEditions
	| IFeaturesWithVideo
	| IMap;
