import { Text, Flex, Heading, Button, Link } from '@chakra-ui/react';
import NextLink from 'next/link';

const NotFoundPage = () => (
	<Flex width='100%' justifyContent='center' alignItems='center' flexDirection='column' px={5} my={[180, 300]}>
		<Heading variant='heading1' as='h1' textAlign='center'>
			PAGE NOT FOUND
		</Heading>
		<Text mt={5} variant='heading6' textAlign='center'>
			Uh oh...you've reached the end of the map! Don't sail into the west just yet.
		</Text>
		<Link as={NextLink} href='/' passHref>
			<Button mt={12} colorScheme='red'>
				Go Home
			</Button>
		</Link>
	</Flex>
);

export default NotFoundPage;
