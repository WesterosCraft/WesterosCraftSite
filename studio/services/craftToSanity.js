const testJson = require('./testData.json');
const fs = require('fs');
const parseHTML = require('./parseHTML');

function convertNullToDefault(value, defaultValue = '') {
  if (value === null) {
    return defaultValue;
  } else {
    return value;
  }
}

function transformCraftDestination(destination) {
  return {
    _id: destination.title.toLowerCase().replace(/\s+/g, '-').slice(0, 200), // use the id of the record from the external source (we happen to know the API only return unique values for `id`)
    _type: 'wikiDestination',
    name: destination.title,
    slug: {
      _type: 'slug',
      current: destination.title.toLowerCase().replace(/\s+/g, '-').slice(0, 200)
    },
    region: destination.projectDetails[0].region,
    buildType: destination.projectDetails[0].destinationType,
    projectStatus: convertNullToDefault(
      destination.projectDetails[0].destinationStatus,
      'notCompleted'
    ),
    house: convertNullToDefault(destination.projectDetails[0].house, ''),
    warp: convertNullToDefault(destination.projectDetails[0].warp, ''),
    projectLead: convertNullToDefault(destination.projectDetails[0].projectLead, ''),
    dateStarted: destination.projectDetails[0].dateStarted,
    dateCompleted: destination.projectDetails[0].dateCompleted,
    redoAvailable: convertNullToDefault(destination.projectDetails[0].redoAvailable, false),
    serverBuild: convertNullToDefault(destination.projectDetails[0].serverBuild, false),
    difficultyLevel: convertNullToDefault(destination.projectDetails[0].destinationLevel, ''),
    application: convertNullToDefault(destination.projectDetails[0].application, ''),
    banner: {
      _type: 'image',
      _sanityAsset: `image@${destination.projectDetails[0].banner[0].url}`
    },
    images: destination.images.map((image) => `image@${image.url}`),
    entry: parseHTML(destination.copy)
  };
}

fs.writeFile(
  'testnode.json',
  JSON.stringify(transformCraftDestination(testJson.data.destination)),
  function () {
    console.log('done!');
  }
);

console.log(transformCraftDestination(testJson.data.destination));
