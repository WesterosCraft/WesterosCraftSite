const parseHTML = require('./parseHtml');

function sliceZone(slices) {
  const module = slices.map((slice, index) => {
    switch (slice.typeHandle) {
      case 'text':
        return {
          _type: 'richText',
          copy: parseHTML(slice.redactor)
        };
      case 'entryGrid':
        return {
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
        };
      case 'imageGrid':
        return {
          _type: 'imageGallery',
          heading: slice.heading,
          copyScript: slice.clickToCopyScript,
          images: slice.imageList.map((item) => {
            return {
              _type: 'image',
              _sanityAsset:
                item && item.image.length > 0 ? `image@${item.image[0].url}` : undefined,
              heading: item.imageTitle,
              alt: item && item.image.length > 0 && item.image[0].title,
              description: item.imageDescription
            };
          })
        };
      case 'accordion':
        return {
          _type: 'accordion',
          heading: slice.heading,
          accordionContent: slice.accordionContent.map((item) => {
            return {
              heading: item.heading,
              copy: parseHTML(item.copy)
            };
          })
        };
      default:
        return null;
    }
  });

  return module;
}

module.exports = sliceZone;
