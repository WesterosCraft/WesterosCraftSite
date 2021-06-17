/* eslint-disable react/display-name */
import NextLink from 'next/link';
import { Box, Flex, Heading, Link, Text } from '@chakra-ui/react';
import BlockContent from '@sanity/block-content-to-react';
import { IoIosQuote } from 'react-icons/io';
import { RichText as RichTextType } from '@/models/sections/rich-text';
import { SimpleBlockContent } from '@/models/objects/simple-block-content';
import { MainImage } from '@/components/sections';

type Props = {
	data: {
		_key: string;
		_type: 'richText';
		copy: RichTextType | SimpleBlockContent;
	};
};

const resolveSize = (style: string | boolean) => {
	if (style === 'h1') {
		return '2xl';
	}

	if (style === 'h2') {
		return 'xl';
	}

	if (style === 'h3') {
		return 'lg';
	}

	if (style === 'h4') {
		return 'md';
	}

	return 'sm';
};

const serializers = {
	types: {
		block: (props: any) => {
			const { style = 'normal' } = props.node;
			const center = /center/.test(style);
			const heading = /^h\d/.test(style) && style.match(/^h\d/)[0];
			const size = resolveSize(heading);

			if (heading !== false) {
				return (
					<Heading fontWeight='bolder' textAlign={center ? 'center' : 'left'} as={heading} size={size}>
						{props.children}
					</Heading>
				);
			}

			if (style === 'blockquote') {
				return (
					<Flex paddingY={1}>
						<Box as='blockquote' display='flex'>
							<Box as={IoIosQuote} />
							<Text paddingLeft={2} fontSize='lg' fontWeight='semibold'>
								{props.children}
							</Text>
						</Box>
					</Flex>
				);
			}

			return (
				<Text mt={6} textAlign={center ? 'center' : 'left'}>
					{props.children}
				</Text>
			);
		},
		image: (props: any) => <MainImage data={props.node} width={960} height={600} />,
	},
	marks: {
		link: (props: any) => (
			<NextLink passHref href={`${props.mark.href}`}>
				<Link color='red.700' fontWeight={600}>
					{props.children}
				</Link>
			</NextLink>
		),
		italic: (props: any) => <Text as='i'>{props.children}</Text>,
	},
};

const TextBlock = ({ data }: Props) => {
	return <BlockContent blocks={data.copy} serializers={serializers} />;
};

export default TextBlock;
