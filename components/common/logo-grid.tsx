import { SimpleGrid, Heading, Text, Image, Container } from '@chakra-ui/react';

const LogoGrid = () => {
	const imageList = [{ src: '' }, { src: '' }, { src: '' }, { src: '' }, { src: '' }];
	return (
		<Container maxW='container.xl'>
			<Heading>Featured in numerous publications</Heading>
			<Text>We've been profiled in museums, magazines, videos, research papers and more!</Text>
			<SimpleGrid columns={imageList.length}>
				{imageList.map((img) => (
					<Image src={img.src} />
				))}
			</SimpleGrid>
		</Container>
	);
};
