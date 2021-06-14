export interface SanityBlock {
	[key: string]: any;
	_type: 'block' | 'image';
}

export type SanityReference<_T> = {
	_type: 'reference';
	_key?: string;
	_ref: string;
};

export type SanityAsset = SanityReference<any>;

export enum Regions {
	CROWNLANDS = 'crownlands',
	THEWALL = 'theWall',
	DORNE = 'dorne',
	RIVERLANDS = 'riverlands',
	NORTH = 'north',
	VALE = 'vale',
	IRONISLANDS = 'ironIslands',
	WESTERLANDS = 'westerlands',
	STORMLANDS = 'stormlands',
	REACH = 'reach',
	BEYONDTHEWALL = 'beyondTheWall',
}
