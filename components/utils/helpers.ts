import { startCase, camelCase } from 'lodash';
import { InternalLink } from '@/models/objects/internal-link';
import { ExternalLink } from '@/models/objects/external-link';

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

export const resolveLink = (item: InternalLink | ExternalLink) => {
	if (item._type === 'externalLink' && item.slug?.current) {
		return {
			type: item._type,
			key: item._key,
			title: item.title,
			url: item.slug.current,
			icon: item.icon,
		};
	}

	if (item._type === 'internalLink' && item.link?.slug?.current) {
		return {
			type: item._type,
			key: item._key,
			title: item.title,
			icon: item.icon,
			url: item.link.slug.current === 'home' ? '/' : `/${item.link.slug.current}`,
		};
	}

	return null;
};
