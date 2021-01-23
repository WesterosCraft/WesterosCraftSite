const blockTools = require('@sanity/block-tools').default;
const jsdom = require('jsdom');
const util = require('util');
const { JSDOM } = jsdom;

const schema = require('../schemas/schema').default;

const blockContentType = schema.get('destination').fields.find((field) => field.name === 'entry')
  .type;

const chopWikiaString = (url) => {
  return url.split('/revision')[0];
};

function parseHTML(HTMLDoc) {
  const rules = [
    // finds img with structure figure > a > img
    {
      deserialize(el, next, block) {
        if (el.tagName.toLowerCase() !== 'figure') {
          return undefined;
        }
        const anchor = Array.from(el.children).find((child) => child.tagName.toLowerCase() === 'a');
        const img =
          anchor && anchor.children
            ? Array.from(anchor.children).find((child) => child.tagName.toLowerCase() === 'img')
            : undefined;
        const caption = Array.from(el.children).find(
          (child) => child.tagName.toLowerCase() === 'figcaption'
        );

        if (img && img.getAttribute('src')) {
          return block({
            _type: 'figure',
            image: {
              // using the format for importing assets via the CLI
              // https://www.sanity.io/docs/data-store/importing-data#import-using-the-cli
              _sanityAsset: `image@${chopWikiaString(img.getAttribute('src'))}`
            },
            alt: img.getAttribute('alt'),
            caption: caption.textContent
          });
        }
      }
    },
    // finds img with structure figure > img
    {
      deserialize(el, next, block) {
        if (el.tagName.toLowerCase() !== 'figure') {
          return undefined;
        }
        const img = Array.from(el.children).find((child) => child.tagName.toLowerCase() === 'img');

        const caption = Array.from(el.children).find(
          (child) => child.tagName.toLowerCase() === 'figcaption'
        );

        if (img && img.getAttribute('src')) {
          return block({
            _type: 'figure',
            image: {
              // using the format for importing assets via the CLI
              // https://www.sanity.io/docs/data-store/importing-data#import-using-the-cli
              _sanityAsset: `image@${chopWikiaString(img.getAttribute('src'))}`
            },
            alt: img.getAttribute('alt') || undefined,
            caption: (caption && caption.textContent) || undefined
          });
        }
      }
    },
    // finds img with structure li > img
    {
      deserialize(el, next, block) {
        if (el.tagName.toLowerCase() !== 'li') {
          return undefined;
        }
        const img = Array.from(el.children).find((child) => child.tagName.toLowerCase() === 'img');

        const caption = Array.from(el.children).find(
          (child) => child.tagName.toLowerCase() === 'figcaption'
        );

        if (img && img.getAttribute('src')) {
          return block({
            _type: 'figure',
            image: {
              // using the format for importing assets via the CLI
              // https://www.sanity.io/docs/data-store/importing-data#import-using-the-cli
              _sanityAsset: `image@${chopWikiaString(img.getAttribute('src'))}`
            },
            alt: img.getAttribute('alt') || undefined,
            caption: (caption && caption.textContent) || undefined
          });
        }
      }
    },
    // finds video links
    {
      deserialize(el, next, block) {
        if (el.tagName.toLowerCase() !== 'figure') {
          return undefined;
        }
        const iframe = Array.from(el.children).find(
          (child) => child.tagName.toLowerCase() === 'iframe'
        );

        if (iframe && iframe.getAttribute('src')) {
          return block({
            _type: 'video',
            url: iframe.getAttribute('src')
          });
        }
      }
    }
  ];
  /**
   * Since we're in a node context, we need
   * to give block-tools JSDOM in order to
   * parse the HTML DOM elements
   */
  return HTMLDoc
    ? blockTools.htmlToBlocks(HTMLDoc, blockContentType, {
        rules,
        parseHtml: (html) => new JSDOM(html).window.document
      })
    : [];
}

module.exports = parseHTML;
