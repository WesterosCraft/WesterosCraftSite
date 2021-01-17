const blockTools = require('@sanity/block-tools').default;
const jsdom = require('jsdom');
const util = require('util');
const { JSDOM } = jsdom;

const schema = require('../schemas/schema').default;

const blockContentType = schema
  .get('wikiDestination')
  .fields.find((field) => field.name === 'entry').type;

function parseHTML(HTMLDoc) {
  const rules = [
    // {
    //   deserialize(el, next, block) {
    //     if (el.tagName.toLowerCase() !== 'img') {
    //       return undefined;
    //     }
    //     const img = Array.from(el.children).find((child) => console.log('CHILD: ', child));
    //     const caption = Array.from(el.children).find(
    //       (child) => child.tagName.toLowerCase() === 'figcaption'
    //     );

    //     console.log(util.inspect(el, { showHidden: false, depth: null }));

    //     return block({
    //       _type: 'figure',
    //       image: {
    //         // using the format for importing assets via the CLI
    //         // https://www.sanity.io/docs/data-store/importing-data#import-using-the-cli
    //         // _sanityAsset: `image@${img.getAttribute('src')}`
    //       }
    //       // alt: img.getAttribute('alt'),
    //       // caption: caption.textContent
    //     });
    //   }
    // },
    {
      // Special case for code blocks (wrapped in pre and code tag)
      deserialize(el, next, block) {
        if (!el) {
          return undefined;
        }
        if (el.tagName.toLowerCase() !== 'pre') {
          return undefined;
        }
        const code = el.children[0];

        const childNodes =
          code && code.tagName.toLowerCase() === 'code' ? code.childNodes : el.childNodes;
        let text = '';
        childNodes.forEach((node) => {
          text += node.textContent;
        });
        /**
         * use `block()` to add it to the
         * root array, instead of as
         * children of a block
         *  */

        return block({
          _type: 'code',
          language: el.dataset.language,
          text
        });
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
