import React from 'react';
import BlockContent from '@sanity/block-content-to-react';

export const SanityBlockContent = ({ blocks }) => {
  const serializers = {
    types: {
      figure: (props) => (
        <figure data-language={props.node.language}>
          <code>{props.node.code}</code>
        </figure>
      )
    }
  };
  return <BlockContent blocks={blocks} serializers={serializers} />;
};
