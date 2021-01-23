const dataToConvert = require('./jsonToConvert.json');
const fs = require('fs');
const parseHTML = require('./parseHtml');
const jq = require('node-jq');

function convertNullToDefault(value, defaultValue = '') {
  if (value === null) {
    return defaultValue;
  } else {
    return value;
  }
}

function transformCraftDestination(destination) {
  return {
    _id: destination.title
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/'/g, '')
      .replace(/\(/g, '')
      .replace(/\)/g, '')
      .slice(0, 200), // use the id of the record from the external source (we happen to know the API only return unique values for `id`)
    _type: 'destination',
    name: destination.title,
    slug: {
      _type: 'slug',
      current: destination.title
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/'/g, '')
        .replace(/\(/g, '')
        .replace(/\)/g, '')
        .slice(0, 200)
    },
    region: destination.projectDetails[0].region,
    buildType: destination.projectDetails[0].destinationType,
    projectStatus: convertNullToDefault(
      destination.projectDetails[0].destinationStatus,
      'notCompleted'
    ),
    house: convertNullToDefault(destination.projectDetails[0].house, undefined),
    warp: convertNullToDefault(destination.projectDetails[0].warp, undefined),
    projectLead: convertNullToDefault(destination.projectDetails[0].projectLead, undefined),
    dateStarted: convertNullToDefault(destination.projectDetails[0].dateStarted, undefined),
    dateCompleted: convertNullToDefault(destination.projectDetails[0].dateCompleted, undefined),
    redoAvailable: convertNullToDefault(destination.projectDetails[0].redoAvailable, false),
    serverBuild: convertNullToDefault(destination.projectDetails[0].serverBuild, false),
    difficultyLevel: convertNullToDefault(
      destination.projectDetails[0].destinationLevel,
      undefined
    ),
    application: convertNullToDefault(destination.projectDetails[0].application, undefined),
    banner: destination.projectDetails[0].banner.length
      ? {
          _type: 'image',
          _sanityAsset: `image@${destination.projectDetails[0].banner[0].url}`
        }
      : undefined,
    images: destination.images.map((image) => {
      return { _type: 'image', _sanityAsset: `image@${image.url}` };
    }),
    entry: destination.copy && destination.copy !== [] ? parseHTML(destination.copy) : undefined
  };
}

const transformArray = (arr) => {
  return arr.map((item) => transformCraftDestination(item));
};

fs.writeFileSync(
  'transformedJson.json',
  JSON.stringify(transformArray(dataToConvert)),
  function () {
    console.log('done!');
  }
);

jq.run('.[]', './transformedJson.json', {
  output: 'compact'
})
  .then((output) => {
    fs.writeFileSync('convertedNDJSON.json', output);
    console.log(`✨ The file was converted to NDJSON!`);
  })
  .catch((err) => {
    console.error(`🐛  Something went wrong: ${err}`);
  });
