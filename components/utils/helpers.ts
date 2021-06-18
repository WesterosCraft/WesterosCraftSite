import { startCase, camelCase } from 'lodash';

export const nameFormatter = (arg: string) => {
	return startCase(camelCase(arg));
};

export const getFontSize = (size: string) => {
	switch (size) {
		case 'h1':
			return '8xl';

		case 'h2':
			return '5xl';

		case 'h3':
			return '3xl';

		default:
			return '5xl';
	}
};
