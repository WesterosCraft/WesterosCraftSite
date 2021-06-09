import { Quote } from './quote';
import { Marquee } from './marquee';
import { BlockContent } from './block-content';
import { Grid } from './grid';
import { Image } from './image';
import { Spacer } from './spacer';
import { Youtube } from './youtube';
import { Editions } from './editions';

export type Sections = BlockContent | Grid | Image | Spacer | Youtube | Marquee | Quote | Editions;
