const fs = require('fs');
const sanityClient = require('../lib/sanity');
const groq = require('next-sanity');

const siteSettingsQuery = groq.groq`
*[_type == "siteSettings"][0]{
	...,
	navigation[]{
		...,
		link->{
			_type,
			slug
		},
		links[]{
			...,
			link->{
				_type,
				slug
			}
  		}
	},
	topLevelWikiNavigation{
		...,
		link->{
			_type,
			slug
		},
		links[]{
			...,
			link->{
				_type,
				slug
			}
  		}
	},
	wikiNavigation[]{
		...,
	}
	}
`;

async function createManifestsFromCMS() {
	const data = await sanityClient.fetch(siteSettingsQuery);
	fs.writeFile('./constants/global-manifest.json', JSON.stringify(data), (err) => {
		if (err) throw err;
		console.info('Global data manifest written to file');
	});
}

async function main() {
	try {
		await createManifestsFromCMS();
	} catch (err) {
		throw new Error(err);
	}
}

main();
