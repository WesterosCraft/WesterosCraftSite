import S from '@sanity/desk-tool/structure-builder';

const hiddenDocTypes = (listItem) => !['aboutPage'].includes(listItem.getId());

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem().title('Pages').child(S.editor().id('aboutPage').documentId('aboutPage')),
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ]);
