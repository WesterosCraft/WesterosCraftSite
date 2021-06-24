import { Heading, Text, Box, Button, AspectRatio, SimpleGrid } from '@chakra-ui/react';
import { GiRaven } from 'react-icons/gi';

const FeaturesWithVideo = () => {
	return (
		<Box width='100%' px={8}>
			<SimpleGrid templateColumns='360px 1fr' gap='64px'>
				<Box>
					<Heading as='h2' fontSize='5xl' fontWeight={800}>
						Explore Westeros with ease!
					</Heading>
					<Text>aksjnckjansjckn</Text>
					<Button
						size='lg'
						leftIcon={<GiRaven size={20} />}
						display={{ base: 'none', md: 'inline-flex' }}
						fontSize={'md'}
						fontWeight={600}
						// color={buttonColor}
						// bg={buttonHover}
						href={'#'}
						_hover={{
							color: 'white',
							bg: 'blackAlpha.700',
						}}
					>
						Join The Watch
					</Button>
				</Box>
				<Box>
					<AspectRatio ratio={4 / 3} maxH={480}>
						<iframe src='https://www.youtube.com/watch?v=Iuyf-naJ6pY' />
					</AspectRatio>
					<SimpleGrid gap={6} columns={3} mt={10}>
						<Box>
							<Text fontWeight='bold' mb={1}>
								Powered By Minecraft
							</Text>
							<Text>
								WesterosCraft is free to explore, and always will be! All you need is the Java edition of Minecraft
							</Text>
						</Box>
						<Box>
							<Text fontWeight='bold' mb={1}>
								Always Evolving
							</Text>
							<Text>
								As Minecraft updates and evolves, so too does our server! From simple cobblestone shacks in 2011, to
								ornate cities in 2020, we have come a long way from our humble beginnings.
							</Text>
						</Box>
						<Box>
							<Text fontWeight='bold' mb={1}>
								Crafting Connections
							</Text>
							<Text>
								We're a truly global community, united by a common goal of creating one of the most detailed Minecraft
								worlds ever built. Whether you're logging on for a quick visit, or you're a long-standing builder, every
								visitor is a key part of our community.
							</Text>
						</Box>
					</SimpleGrid>
				</Box>
			</SimpleGrid>
		</Box>
	);
};

export default FeaturesWithVideo;
