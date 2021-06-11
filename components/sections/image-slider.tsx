import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from 'popmotion';
import { SanityAsset } from '@/models/utils';
import { urlFor } from '@/lib/sanity';
import { Box, Flex, IconButton, Image } from '@chakra-ui/react';
// import Image from 'next/image';
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';
const variants = {
	enter: (direction: number) => {
		return {
			x: direction > 0 ? 1000 : -1000,
			opacity: 0,
		};
	},
	center: {
		zIndex: 1,
		x: 0,
		opacity: 1,
	},
	exit: (direction: number) => {
		return {
			zIndex: 0,
			x: direction < 0 ? 1000 : -1000,
			opacity: 0,
		};
	},
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
	return Math.abs(offset) * velocity;
};

type Props = {
	images: Array<{
		destination: { _ref: string; _type: 'reference' };
		slideImage: { _type: 'image'; asset: SanityAsset };
		_key: string;
		_type: 'slide';
	}>;
};

const ImageSlider = ({ images }: Props) => {
	const [[page, direction], setPage] = useState([0, 0]);

	const imageIndex = wrap(0, images.length, page);

	const paginate = (newDirection: number) => {
		setPage([page + newDirection, newDirection]);
	};

	return (
		<Flex width='100%' position='relative' justify='center' align='center'>
			<AnimatePresence initial={false} custom={direction}>
				<motion.div
					className='motion div'
					key={page}
					custom={direction}
					variants={variants}
					initial='enter'
					animate='center'
					exit='exit'
					transition={{
						x: { type: 'spring', stiffness: 300, damping: 30 },
						opacity: { duration: 0.2 },
					}}
					drag='x'
					dragConstraints={{ left: 0, right: 0 }}
					dragElastic={1}
					onDragEnd={(e, { offset, velocity }) => {
						e.preventDefault();
						const swipe = swipePower(offset.x, velocity.x);

						if (swipe < -swipeConfidenceThreshold) {
							paginate(1);
						} else if (swipe > swipeConfidenceThreshold) {
							paginate(-1);
						}
					}}
					style={{
						width: 768,
						height: 445,
					}}
				>
					<Image
						src={urlFor?.(images?.[imageIndex]?.slideImage?.asset).width(768)?.height(445).url()!}
						width={768}
						height={445}
					/>
				</motion.div>
			</AnimatePresence>
			<IconButton
				position='absolute'
				aria-label='Next Button'
				isRound
				onClick={() => paginate(1)}
				icon={<MdNavigateNext />}
				top='calc(50% - 20px)'
				right={10}
				// right={45}
				// transform='translate(-50%, -50%)'
			/>
			{/* top: calc(50% - 20px);
  position: absolute;
  background: white;
  border-radius: 30px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 18px;
  z-index: 2; */}
			<IconButton
				position='absolute'
				aria-label='Previous Button'
				isRound
				onClick={() => paginate(-1)}
				icon={<MdNavigateBefore />}
				top='calc(50% - 20px)'
				left={10}
				// left={45}
				// transform='translate(-50%, -50%)'
			/>
		</Flex>
	);
};

export default ImageSlider;
