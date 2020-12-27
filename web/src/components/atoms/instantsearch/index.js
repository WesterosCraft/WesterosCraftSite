import { findResultsState } from 'react-instantsearch-dom/server';
import algoliasearch from 'algoliasearch/lite';

const indexName = 'Wiki';

// Keys are supplied from Algolio's instant search example
// https://github.com/algolia/react-instantsearch
const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY
);

export { findResultsState, indexName, searchClient };
