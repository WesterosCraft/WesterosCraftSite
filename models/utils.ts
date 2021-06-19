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

export enum DestinationStatuses {
	completed = 'completed',
	inProgress = 'inProgress',
	abandoned = 'abandoned',
	notStarted = 'notStarted',
	redoInProgress = 'redoInProgress',
}
