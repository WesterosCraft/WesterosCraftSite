import { urlFor } from '@/lib/sanity';
import { IWikiBanner } from '@/models/sections/wiki-banner';
import { Box, Text, Heading, Button, Flex, Link, Image } from '@chakra-ui/react';

type Props = {
	data: IWikiBanner;
};

const WikiBanner = ({ data }: Props) => {
	return (
		<Box borderRadius='md' bg={data.backgroundColor || 'gray.500'} width='full' py={[4]} px={[4, 8]} shadow='lg'>
			<Flex justifyContent='space-between' alignItems='center' flexDirection={['column', 'row']}>
				<Flex direction='row' alignItems='center' pr={3} mb={[4, 0]}>
					<Image mr={4} alt='Banner Icon' height={65} src={urlFor(data.icon?.asset?._ref).url()!} />
					<Box>
						<Heading fontSize='lg' color='white'>
							{data.heading || ''}
						</Heading>
						<Text color='whiteAlpha.700'>{data.subheading || ''}</Text>
					</Box>
				</Flex>
				<Link
					href={data.buttonUrl || ''}
					isExternal
					_hover={{ textDecoration: 'none', button: { bg: 'blackAlpha.500' } }}
				>
					<Button color='white' bg='blackAlpha.300'>
						{data.buttonText || ''}
					</Button>
				</Link>
			</Flex>
		</Box>
	);
};

export default WikiBanner;
