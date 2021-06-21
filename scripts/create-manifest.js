import fs from 'fs';
async function createManifestsFromCMS() {
	const data = await sanityClient.fetch(siteSettingsQuery);
	fs.writeFile('./src/data/global-manifest.json', JSON.stringify(data), (err) => {
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
