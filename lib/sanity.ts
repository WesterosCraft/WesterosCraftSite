import { SanityImageSource } from '@sanity/asset-utils';
import { createClient, createImageUrlBuilder, createPreviewSubscriptionHook } from 'next-sanity';

const config = {
	projectId: process.env.SANITY_API_PROJECT_ID ?? 'undefined',
	dataset: process.env.SANITY_API_DATASET ?? 'develop',
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
