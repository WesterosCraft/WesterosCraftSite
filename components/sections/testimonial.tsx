import { ITestimonial } from '@/models/sections/testimonial';
import { Flex, Box, Text, Heading, Image, Container, Center, useColorModeValue } from '@chakra-ui/react';

type Props = {
	data: ITestimonial;
};

const Testimonial = ({ data }: Props) => {
	console.log('👉 ~ Testimonial ~ data', data);
	return (
		<Flex as='section' flexDirection='column' className={`${data?._type || 'testimonial'}__section`}>
			<Container maxW='container.xl' centerContent bg='gray.200' px={8} py={6} my={20}>
				<Flex position='relative'>
					<Box flexGrow={1} />
					<Box flexGrow={1} position='absolute' top={-20} left={5}>
						<Image height={556} width={450} src={data.image.url} />
					</Box>
					<Box maxW='50%'>
						<Text>{data.quote}</Text>
						<Text fontWeight='bold'>{data.author || ''}</Text>
					</Box>
				</Flex>
			</Container>
		</Flex>
	);
};

export default Testimonial;
