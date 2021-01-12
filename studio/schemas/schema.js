import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

// schema types
import wikiDestinationEntry from './wikiDestinationEntry';

// slice types
import textSlice from './slices/textSlice';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([wikiDestinationEntry, textSlice])
});
