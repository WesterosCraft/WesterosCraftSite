export interface SanityBlock {
	[key: string]: any;
	_type: 'block' | 'image';
}

export type SanityReference<_T> = {
	_type: 'reference';
	_key?: string;
	_ref: string;
	metadata?: {
		lqip: string;
	};
};

export type SanityAsset = SanityReference<any>;

export enum Regions {
	crownlands = 'crownlands',
	theWall = 'theWall',
	dorne = 'dorne',
	riverlands = 'riverlands',
	north = 'north',
	vale = 'vale',
	ironIslands = 'ironIslands',
	westerlands = 'westerlands',
	stormlands = 'stormlands',
	reach = 'reach',
	beyondTheWall = 'beyondTheWall',
}

export enum BuildStatuses {
	completed = 'completed',
	inProgress = 'inProgress',
	abandoned = 'abandoned',
	notStarted = 'notStarted',
	redoInProgress = 'redoInProgress',
}

export enum BuildTypes {
	castle = 'castle',
	town = 'town',
	village = 'village',
	city = 'city',
	holdfast = 'holdfast',
	keep = 'keep',
	landmark = 'landmark',
	ruin = 'ruin',
	tower = 'tower',
	clan = 'clan',
	crannog = 'crannog',
	miscellaneous = 'miscellaneous',
}
