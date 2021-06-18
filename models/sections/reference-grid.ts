export interface IReferenceGrid {
	_type: 'referenceGrid';
	_key: string;
	heading: string;
	headingAlignment: string;
	headingSize: string;
	gridItems: Array<{
		_ref: string;
		_key: string;
		_type: 'destination';
	}>;
}
