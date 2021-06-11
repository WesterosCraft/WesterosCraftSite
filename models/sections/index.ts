import { Quote } from './quote';
import { Marquee } from './marquee';
import { BlockContent } from './block-content';
import { Grid } from './grid';
import { Image } from './image';
import { Spacer } from './spacer';
import { Youtube } from './youtube';
import { Editions } from './editions';
import { ImageSlider } from './image-slider';

export type Sections = BlockContent | ImageSlider | Grid | Image | Spacer | Youtube | Marquee | Quote | Editions;
