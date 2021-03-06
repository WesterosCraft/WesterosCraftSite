import S from '@sanity/desk-tool/structure-builder';

const hiddenDocTypes = (listItem) =>
  !['about', 'launcher', 'home', 'rookery', 'progress', 'wiki', 'media.tag'].includes(
    listItem.getId()
  );

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
              S.documentListItem().schemaType('home').id('home'),
              S.documentListItem().schemaType('about').id('about'),
              S.documentListItem().schemaType('launcher').id('launcher'),
              S.documentListItem().schemaType('rookery').id('rookery'),
              S.documentListItem().schemaType('progress').id('progress'),
              S.documentListItem().schemaType('wiki').id('wiki')
            ])
        ),
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ]);
