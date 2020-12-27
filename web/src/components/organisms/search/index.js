import React, { useState, useCallback } from 'react';
import { Box, Flex, Text } from 'rebass';
import { Input } from '@rebass/forms';
import algoliaClient from 'algoliasearch/lite';
import debounce from 'lodash/debounce';
import Link from 'next/link';
import { BiSearchAlt } from 'react-icons/bi';

const algolia = algoliaClient(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY
).initIndex('Wiki');

const search = (query, params = {}) =>
  algolia.search(query, {
    attributesToHighlight: null,
    hitsPerPage: 60,
    ...params
  });

const DropdownLink = React.forwardRef(({ children, href }, ref) => {
  return (
    <Box
      as="a"
      href={href}
      ref={ref}
      px={4}
      py={2}
      sx={{
        '&:hover': {
          cursor: 'pointer',
          color: 'red.medium',
          backgroundColor: 'rgba(120, 120, 120, 0.1)'
        }
      }}>
      {children}
    </Box>
  );
});

const Results = ({ results }) =>
  results.map((result) => (
    <Link href={result.url} passHref key={result.objectID}>
      <DropdownLink>
        <Text py={2}>{result.title}</Text>
      </DropdownLink>
    </Link>
  ));

export const Search = () => {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState('');

  const updateResults = useCallback(
    debounce((currentQuery) => {
      search(currentQuery).then(({ hits }) => {
        setResults(hits);
        setLoading(false);
      });
    }, 850),
    []
  );

  const handleChange = useCallback(
    (e) => {
      setQuery(e.target.value);

      if (e.target.value.length > 0) {
        setLoading(true);
        updateResults(e.target.value);
      } else {
        setLoading(false);
      }
    },
    [updateResults]
  );

  return (
    <Box sx={{ position: 'relative' }} mb="44px">
      <Input placeholder="Search Wiki" type="search" onChange={handleChange} />
      {results.length > 0 ? (
        <Flex
          width={1}
          bg="white"
          flexDirection="column"
          sx={{
            position: 'absolute',
            boxShadow: `0 3.9px 3.5px rgba(0, 0, 0, 0.046),
          0 9.4px 8.4px rgba(0, 0, 0, 0.065),
          0 17.7px 15.9px rgba(0, 0, 0, 0.073),
          0 31.5px 28.4px rgba(0, 0, 0, 0.076)
        `
          }}>
          <Results results={results} />
        </Flex>
      ) : (
        query.length > 2 && !loading && <div>No results</div>
      )}
      <BiSearchAlt color="#666" size={24} style={{ position: 'absolute', right: 12, top: 16 }} />
    </Box>
  );
};
