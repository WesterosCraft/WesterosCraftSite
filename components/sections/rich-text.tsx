/* eslint-disable react/display-name */
import NextLink from 'next/link';
import { Box, Flex, Heading, Link, ListItem, OrderedList, Text, UnorderedList } from '@chakra-ui/react';
import BlockContent from '@sanity/block-content-to-react';
import { IoIosQuote } from 'react-icons/io';
import { MainImage } from '@/components/sections';

type Props = {
	data: any;
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
					<Heading mt={10} textAlign={center ? 'center' : 'left'} as={heading} size={size}>
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
		figure: (props: any) => {
			return <MainImage data={props.node} />;
		},
		video: () => <h1>VIDEO</h1>,
	},
	list: (props: any) => {
		const { type } = props;
		const bullet = type === 'bullet';
		if (bullet) {
			return <UnorderedList>{props.children}</UnorderedList>;
		}
		return <OrderedList>{props.children}</OrderedList>;
	},
	listItem: (props: any) => <ListItem>{props.children}</ListItem>,
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
	return (
		<BlockContent className={`${data._type ?? 'rich_text'}__section`} blocks={data.copy} serializers={serializers} />
	);
};

export default TextBlock;
