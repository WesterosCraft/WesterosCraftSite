export interface IWikiBanner {
	_type: 'wikiBanner';
	_key: string;
	heading: string;
	subheading: string;
	buttonText: string;
	buttonUrl: string;
	icon: { asset: { _ref: string } };
	backgroundColor: string;
}
