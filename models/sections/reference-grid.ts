import { IProjectDetails } from '../objects/project-details';
export interface IReferenceGrid {
	_type: 'referenceGrid';
	_key: string;
	heading: string;
	headingAlignment: 'left' | 'center';
	headingSize: 'h1' | 'h2' | 'h3';
	gridItems?: Array<IProjectDetails>;
	gridOptions?: 'recentlyUpdated' | 'recentlyCreated';
}
