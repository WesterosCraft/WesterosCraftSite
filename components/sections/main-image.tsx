import { chakra, Box, Text } from '@chakra-ui/react';
import NextImage from 'next/image';
import { Image as MainImage } from '@/models/sections/image';
import { urlFor } from '@/lib/sanity';

type Props = {
	data: {
		caption?: string;
		float?: 'left' | 'right';
		image?: MainImage;
		alt?: string;
	};
	width?: number;
	height?: number;
};

const ImageBlock = ({ data, width = 960, height = 600 }: Props) => {
	const url = data?.image?.asset && urlFor(data.image.asset).width(width).height(height).auto('format').url();

	if (!url) {
		return null;
	}

	const Image = chakra(NextImage, {
		shouldForwardProp: (prop) => ['width', 'height', 'src', 'alt', 'layout'].includes(prop),
	});

	return (
		<Box
			my={3}
			float={data.float ? [null, null, null, data.float] : undefined}
			ml={data.float === 'right' ? [0, null, 3] : 0}
			mr={data.float === 'left' ? [0, null, 3] : 0}
		>
			<Image
				src={url}
				alt={data?.alt ?? 'Image'}
				width={data.float ? width / 2 : width}
				height={data.float ? height / 2 : height}
				layout='intrinsic'
			/>
			{data.caption && (
				<Text textAlign='center' fontSize='xs'>
					{data.caption}
				</Text>
			)}
		</Box>
	);
};

export default ImageBlock;
