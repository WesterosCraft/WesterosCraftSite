import { Block, Image, Slug } from '@sanity/types';
import { BuildStatuses, BuildTypes, Regions } from '@/models/utils';
import { MetaFields } from '@/models/meta-fields';

export interface BuildEntry {
	application: string;
	meta?: MetaFields;
	banner: Image;
	buildType: BuildTypes;
	dateCompleted: string;
	dateStarted: string;
	difficultyLevel: string;
	entry: Array<Block>;
	house: string;
	images: Array<Image>;
	name: string;
	projectLead: string;
	projectStatus: BuildStatuses;
	region: Regions;
	slug: Slug;
	warp: string;
	_createdAt: string;
	_id: string;
	_rev: string;
	_type: 'destination';
	_updatedAt: string;
}
