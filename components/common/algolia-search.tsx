import { useState, useCallback, useMemo } from 'react';
import {
	Box,
	Flex,
	Heading,
	Input,
	VStack,
	Spinner,
	InputGroup,
	Icon,
	InputLeftElement,
	useColorModeValue,
} from '@chakra-ui/react';
import algoliaClient from 'algoliasearch/lite';
import debounce from 'lodash/debounce';
import NextLink from 'next/link';
import { FaSearch, FaLink } from 'react-icons/fa';

const algolia = algoliaClient(
	process.env.NEXT_PUBLIC_ALGOLIA_APP_ID ?? 'undefined',
	process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY ?? 'undefined'
).initIndex('Wiki');

const search = (query: string, params = {}) =>
	algolia.search(query, {
		attributesToHighlight: undefined,
		hitsPerPage: 60,
		...params,
	});

type ResultProps = {
	results: Array<{ objectID: string; title: string; url: string }>;
	modalHandler?: () => void;
};

const Results = ({ results, modalHandler }: ResultProps) => {
	const resultColor = useColorModeValue('black', 'white');
	const resultBg = useColorModeValue('gray.200', 'gray.600');
	return (
		<VStack direction='column' spacing={2} width='full' mt={4}>
			{results?.map((result) => (
				<NextLink href={result.url} passHref key={result?.objectID}>
					<Flex
						onClick={modalHandler}
						width='full'
						borderRadius='lg'
						py={5}
						px={4}
						align='center'
						justify='space-between'
						bg={resultBg}
						color={resultColor}
						_hover={{
							color: 'white',
							bg: 'red.700',
						}}
						cursor='pointer'
					>
						<Heading fontSize='lg'>{result.title}</Heading>
						<Icon as={FaLink} />
					</Flex>
				</NextLink>
			))}
		</VStack>
	);
};

type Props = {
	modalHandler?: () => void;
};

const AlgoliaSearch = ({ modalHandler }: Props) => {
	const [loading, setLoading] = useState(false);
	const [results, setResults] = useState<Array<{ objectID: string; title: string; url: string }>>([]);
	const [query, setQuery] = useState('');

	// This is the solution
	const debouncedSearch = useMemo(
		() =>
			debounce((currentQuery) => {
				search(currentQuery).then(({ hits }) => {
					//@ts-ignore
					setResults(hits);
					setLoading(false);
				});
			}, 850),
		[]
	);

	const updateResults = useCallback(
		(value) => {
			debouncedSearch(value);
		},
		[debouncedSearch]
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
		<Box width='full'>
			<InputGroup maxWidth={756} shadow='sm'>
				<InputLeftElement pointerEvents='none'>
					<Icon as={FaSearch} color='gray.300' />
				</InputLeftElement>
				<Input variant='flushed' size='lg' placeholder='Search the wiki' onChange={handleChange} />
			</InputGroup>
			<Flex direction='column' align='center' justify='center' width='full' mx='auto'>
				{loading && <Spinner size='lg' mt={4} />}
				{results.length > 0 ? (
					<Results results={results} modalHandler={modalHandler} />
				) : (
					query.length > 2 && !loading && <div>No results</div>
				)}
			</Flex>
		</Box>
	);
};

export default AlgoliaSearch;
