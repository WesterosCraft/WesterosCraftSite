import { Slug } from '@sanity/types';

import { Regions, BuildStatuses, BuildTypes } from './../utils';

export interface IProjectDetails {
	_ref: string;
	_key: string;
	_type: 'build';
	name: string;
	region: Regions;
	slug?: Slug;
	images?: { url: string; metadata?: { lqip: string } };
	entry?: any;
	house?: string;
	projectStatus?: BuildStatuses;
	buildType?: BuildTypes;
}
