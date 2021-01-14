import S from '@sanity/desk-tool/structure-builder';

const hiddenDocTypes = (listItem) => !['aboutPage', 'launcherPage'].includes(listItem.getId());

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
              S.documentListItem().schemaType('aboutPage').id('aboutPage'),
              S.documentListItem().schemaType('launcherPage').id('launcherPage')
            ])
        ),
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ]);
