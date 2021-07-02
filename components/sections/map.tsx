import { IMap } from '@/models/sections/map';
import {
	useColorModeValue,
	Center,
	Heading,
	Text,
	Box,
	AspectRatio,
	Button,
	Flex,
	Fade,
	Link,
	Container,
} from '@chakra-ui/react';
import { useHover } from '../utils';

type Props = {
	data: IMap;
};

const Map = ({ data }: Props) => {
	const [hoverRef, isHovered] = useHover<HTMLDivElement>();
	const subheadingText = useColorModeValue('gray.600', 'gray.400');

	return (
		<Center as='section' className={`${data._type ?? 'map'}__section`} flexDirection='column' height='100%'>
			<Container maxW='container.xl'>
				<Heading as='h2' fontSize='5xl' fontWeight={800} mb={4} textAlign='center'>
					{data.heading ?? ''}
				</Heading>
				<Text fontWeight='bold' color={subheadingText} mb={8} textAlign='center'>
					{data.subheading ?? ''}
				</Text>
				<Box width='100%' overflow='hidden' borderRadius='3xl' position='relative' shadow='dark-lg'>
					<AspectRatio ratio={[4 / 3, null, 21 / 9]} maxH={700} pointerEvents='none'>
						<iframe src={data.url ?? 'https://mc.westeroscraft.com/?nogui=true&zoom=4&x=2870&z=13000'} />
					</AspectRatio>
					<Box ref={hoverRef} justify='center' align='center' position='absolute' top={0} left={0} bottom={0} right={0}>
						<Fade in={isHovered} style={{ width: '100%', height: '100%' }}>
							<Flex justify='center' align='center' width='100%' height='100%' bg='blackAlpha.400'>
								<Link isExternal href={data.buttonLink} textDecoration='none' _hover={{ textDecoration: 'none' }}>
									<Button
										variant='outline'
										size='lg'
										zIndex='base'
										color='white'
										_hover={{ color: 'black', bg: 'white' }}
									>
										{data.buttonText ?? 'View The Map'}
									</Button>
								</Link>
							</Flex>
						</Fade>
					</Box>
				</Box>
			</Container>
		</Center>
	);
};

export default Map;
