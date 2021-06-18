export interface IBlockBanner {
	_type: 'blockBanner';
	_key: string;
	heading: string;
	blocks: Array<{ label: string }>;
}
