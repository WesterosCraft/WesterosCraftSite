import { IMap } from '@/models/sections/map';
import { Center, Heading, Text, Box, AspectRatio, Button, Flex, Fade, Link } from '@chakra-ui/react';
import { useHover } from '../utils';

type Props = {
	data: IMap;
};

const Map = ({ data }: Props) => {
	const [hoverRef, isHovered] = useHover<HTMLDivElement>();
	return (
		<Center flexDirection='column' height='100%'>
			<Heading as='h2' fontSize='5xl' fontWeight={800} mb={4} textAlign='center'>
				{data.heading ?? ''}
			</Heading>
			<Text fontWeight='bold' color='gray.400' mb={8} textAlign='center'>
				{data.subheading ?? ''}
			</Text>
			<Box width='100%' overflow='hidden' borderRadius='3xl' position='relative'>
				<AspectRatio ratio={[4 / 3, null, 21 / 9]} maxH={700} pointerEvents='none'>
					<iframe src={data.url ?? 'https://mc.westeroscraft.com/?nogui=true&zoom=4&x=2870&z=13000'} />
				</AspectRatio>
				<Box ref={hoverRef} justify='center' align='center' position='absolute' top={0} left={0} bottom={0} right={0}>
					<Fade in={isHovered} style={{ width: '100%', height: '100%' }}>
						<Flex justify='center' align='center' width='100%' height='100%' bg='blackAlpha.400'>
							<Link isExternal href={data.buttonLink} textDecoration='none' _hover={{ textDecoration: 'none' }}>
								<Button size='lg' zIndex='base' colorScheme='whiteAlpha'>
									{data.buttonText ?? 'View The Map'}
								</Button>
							</Link>
						</Flex>
					</Fade>
				</Box>
			</Box>
		</Center>
	);
};

export default Map;
