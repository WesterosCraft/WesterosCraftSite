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

function transformCraftGuide(guide) {
  return {
    _id: guide.title
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/'/g, '')
      .replace(/\(/g, '')
      .replace(/\)/g, '')
      .slice(0, 200), // use the id of the record from the external source (we happen to know the API only return unique values for `id`)
    _type: 'guide',
    name: guide.title,
    slug: {
      _type: 'slug',
      current: guide.title
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/'/g, '')
        .replace(/\(/g, '')
        .replace(/\)/g, '')
        .slice(0, 200)
    },
    pageBuilder: [
      {
        _type: 'richText',
        text: parseHTML(guide.wikiSlices.find((item) => item.typeHandle === 'text').redactor)
      }
    ]
  };
}

const transformArray = (arr) => {
  console.log(arr[0]);
  return arr.map((item) => transformCraftGuide(item));
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
