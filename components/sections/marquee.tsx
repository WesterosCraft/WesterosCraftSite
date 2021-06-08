import React from 'react';
import { motion } from 'framer-motion';
import { Flex, Box, Heading } from '@chakra-ui/react';
import { Marquee as MarqueeType } from '@/models/sections/marquee';
import Image from 'next/image';
import { urlFor } from '@/lib/sanity';

const marqueeVariants = {
	animate: {
		x: [0, -4488],
		transition: {
			x: {
				repeat: Infinity,
				repeatType: 'loop',
				duration: 45,
				ease: 'linear',
			},
		},
	},
};

type Props = {
	data: MarqueeType;
};

const Marquee = ({ data }: Props) => {
	const myLoader = ({ src, width, quality }: any) => {
		return `${src}?fit=crop&h=${width}&w=${width}&q=100`;
	};

	const items = data.marqueeItems.concat(data.marqueeItems);

	return (
		<Flex
			className='slider-section'
			maxWidth={'100vw'}
			mt={120}
			height={370}
			mb={140}
			pb={3}
			sx={{
				position: 'relative',
				left: '50%',
				right: '50%',
				marginLeft: '-50vw',
				marginRight: '-50vw',
				overflow: 'hidden',
			}}
		>
			<motion.div
				className='track'
				variants={marqueeVariants}
				animate='animate'
				style={{
					display: 'flex',
					flexDirection: 'row',
					height: 370,
				}}
			>
				{items?.map((item, index) => (
					<Box
						key={`${item._key}${index}`}
						mx={3}
						mt='2px'
						display='block'
						width={350}
						height={350}
						outline='solid'
						outlineColor='black'
						sx={{
							position: 'relative',
							boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1),0 4px 6px -2px rgba(0, 0, 0, 0.05);',
							marginBottom: 3,
							outlineWidth: '2px',
						}}
					>
						<Image
							loader={myLoader}
							src={`${urlFor(item?.marqueeImage?.asset?._ref)?.url()}`}
							width={350}
							height={350}
						/>
						<Box sx={{ position: 'absolute', bottom: 3, left: 2 }}>
							<Heading fontSize='2xl' px={3} py={2} color='black' bg='white'>
								{item.destination?.name || ''}
							</Heading>
						</Box>
					</Box>
				))}
			</motion.div>
		</Flex>
	);
};

export default Marquee;
