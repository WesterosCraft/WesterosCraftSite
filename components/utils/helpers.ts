import { startCase, camelCase } from 'lodash';

export const nameFormatter = (arg: string) => {
	return startCase(camelCase(arg));
};
