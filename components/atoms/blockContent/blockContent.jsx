import React from 'react';
import BlockContent from '@sanity/block-content-to-react';
import { urlFor } from '../../../utils/sanity';
import { Redactor } from '../redactor/redactor';
import { Text, Box } from 'rebass';
import { VideoEmbed } from '../../organisms/videoEmbed';

export const SanityBlockContent = ({ blocks }) => {
  const serializers = {
    types: {
      figure: (props) => (
        <figure data-language={props.node.language}>
          <img alt={props.node.image.alt} src={urlFor(props.node.image.asset._ref)} />
          {props.node.image.caption && <figcaption>{props.node.image.caption}</figcaption>}
        </figure>
      ),
      video: (props) => (
        <Box maxWidth={500} py={4}>
          <VideoEmbed embedUrl={props.node.url} />
        </Box>
      )
    },
    marks: {
      textCenter: (props) => (
        <Text as="div" textAlign="center">
          {props.children}
        </Text>
      )
    }
  };
  return (
    <Redactor>
      <BlockContent blocks={blocks} serializers={serializers} />
    </Redactor>
  );
};
