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

function removeNullValues(arr) {
  return arr.filter((el) => el !== null);
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
    icon:
      guide.heroImage && guide.heroImage.length && guide.heroImage[0].url
        ? {
            _type: 'image',
            _sanityAsset: `image@${guide.heroImage[0].url}`
          }
        : undefined,
    pageBuilder: guide.wikiSlices.map((slice) => {
      return (
        slice.typeHandle === 'text'
          ? {
              _type: 'richText',
              text: parseHTML(slice.redactor)
            }
          : {},
        slice.typeHandle === 'entryGrid'
          ? {
              _type: 'documentGrid',
              heading: slice.heading,
              documents: slice.entryList.map((entry) => {
                return {
                  _type: 'reference',
                  _ref: entry.title
                    .toLowerCase()
                    .replace(/\s+/g, '-')
                    .replace(/'/g, '')
                    .replace(/\(/g, '')
                    .replace(/\)/g, '')
                    .slice(0, 200)
                };
              })
            }
          : {},
        slice.typeHandle === 'accordion'
          ? {
              _type: 'accordion',
              heading: slice.heading,
              accordionContent: slice.accordionContent.map((item) => {
                return {
                  heading: item.heading,
                  copy: parseHTML(item.copy)
                };
              })
            }
          : {}
      );
    })
  };
}

function clean(object) {
  Object.entries(object).forEach(([k, v]) => {
    if (v && typeof v === 'object') {
      clean(v);
    }
    if ((v && typeof v === 'object' && !Object.keys(v).length) || v === null || v === undefined) {
      if (Array.isArray(object)) {
        object.splice(k, 1);
      } else {
        delete object[k];
      }
    }
  });
  return object;
}

const transformArray = (arr) => {
  return clean(arr.map((item) => transformCraftGuide(item)));
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
