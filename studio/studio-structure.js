import S from '@sanity/desk-tool/structure-builder';

const hiddenDocTypes = (listItem) => !['about', 'launcher'].includes(listItem.getId());

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Pages')
        .child(
          S.list()
            .title('Pages')
            .items([
              S.documentListItem().schemaType('about').id('about'),
              S.documentListItem().schemaType('launcher').id('launcher')
            ])
        ),
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ]);
