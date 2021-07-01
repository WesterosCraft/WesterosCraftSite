import { Stack, Flex, Box, Text, Heading, Container } from '@chakra-ui/react';
import Image from 'next/image';
import { urlFor } from '@/lib/sanity';
import { IEditions } from '@/models/sections/editions';

const Editions = ({ data }: { data: IEditions }) => (
	<Box as='section' className={`${data._type ?? 'editions'}__section`}>
		<Container maxW='container.xl'>
			<Heading variant='h3' textAlign='center'>
				{data.heading || ''}
			</Heading>
			<Stack mt={8} flexDirection='row' justifyContent='center' alignItems='center' flexWrap='wrap'>
				{data?.editionList?.map((item, i) => {
					const srcurl = item && item.thumbnail && urlFor(item.thumbnail.asset._ref).url();
					return (
						item &&
						item.thumbnail && (
							<Flex
								as='a'
								flexShrink={1}
								target='_blank'
								rel='noreferrer'
								href={item.link}
								key={item._key}
								maxWidth={368}
								p={[0, null, 4]}
								sx={{
									position: 'relative',
									'&:hover .edition-image': {
										transform: 'scale(1.015)',
										transition: 'transform .3s ease, filter .3s ease',
										filter: 'brightness(40%)',
										cursor: 'pointer',
									},
									'&:hover .edition-title': {
										visibility: 'visible',
									},
								}}
							>
								<Image
									priority={i <= 2}
									width={336}
									height={435}
									src={srcurl ? srcurl : ''}
									className='edition-image'
									alt={item.title}
								/>
								<Box
									className='edition-title'
									sx={{
										cursor: 'pointer',
										visibility: 'hidden',
										position: 'absolute',
										top: '50%',
										left: '50%',
										transform: 'translate(-50%, -50%)',
									}}
								>
									<Heading textAlign='center' color='white' variant='h3'>
										{item.title} Issue
									</Heading>
									<Text mt={3} textAlign='center' color='white' variant='h3'>
										Click to view
									</Text>
								</Box>
							</Flex>
						)
					);
				})}
			</Stack>
		</Container>
	</Box>
);

export default Editions;
