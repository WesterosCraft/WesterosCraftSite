import React from 'react';
import { motion } from 'framer-motion';
import { Box } from '@chakra-ui/react';

// 2. Defining Variants
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

const Marquee = ({ children }: any) => {
	return (
		// <Box
		//   className="marquee"
		//   position="relative"
		//   width="100vw"
		//   maxWidth="100%"
		//   height={350}
		//   overflowX="hidden">
		<motion.div
			className='track'
			variants={marqueeVariants}
			animate='animate'
			style={{
				display: 'flex',
				flexDirection: 'row',
			}}
		>
			{children}
		</motion.div>
		// </Box>
	);
};

export default Marquee;
