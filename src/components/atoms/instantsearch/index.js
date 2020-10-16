import { findResultsState } from 'react-instantsearch-dom/server';
import algoliasearch from 'algoliasearch/lite';

const indexName = 'Wiki';

// Keys are supplied from Algolio's instant search example
// https://github.com/algolia/react-instantsearch
const searchClient = algoliasearch(process.env.ALGOLIA_APP_ID, process.env.ALGOLIA_SEARCH_KEY);

export { findResultsState, indexName, searchClient };
