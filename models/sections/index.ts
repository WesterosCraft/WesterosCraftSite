import { Quote } from './quote';
import { Marquee } from './marquee';
import { RichText } from './rich-text';
import { Grid } from './grid';
import { Image } from './image';
import { Spacer } from './spacer';
import { Youtube } from './youtube';
import { Editions } from './editions';
import { ImageSlider } from './image-slider';
import { BlockBanner } from './block-banner';

export type Sections =
	| BlockBanner
	| RichText
	| ImageSlider
	| Grid
	| Image
	| Spacer
	| Youtube
	| Marquee
	| Quote
	| Editions;
