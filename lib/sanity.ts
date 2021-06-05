import { SanityImageSource } from '@sanity/asset-utils';
import { createClient, createImageUrlBuilder, createPreviewSubscriptionHook } from 'next-sanity';

const config = {
	dataset: process.env.NODE_ENV === 'production' ? 'production' : 'develop',
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? 'undefined',
	useCdn: process.env.NODE_ENV === 'production',
};

if (!config.projectId) {
	throw Error('The Project ID is not set. Check your environment variables.');
}
if (!config.dataset) {
	throw Error('The dataset name is not set. Check your environment variables.');
}

export const urlFor = (source: SanityImageSource) => createImageUrlBuilder(config).image(source);
export const usePreviewSubscription = createPreviewSubscriptionHook(config);
export const sanityClient = createClient(config);
