import React from 'react';
import BlockContent from '@sanity/block-content-to-react';
import { urlFor } from '../../../utils/sanity';
import { Redactor } from '../redactor/redactor';

export const SanityBlockContent = ({ blocks }) => {
  const serializers = {
    types: {
      figure: (props) => (
        <figure data-language={props.node.language}>
          <img alt={props.node.image.alt} src={urlFor(props.node.image.asset._ref)} />
          {props.node.image.caption && <figcaption>{props.node.image.caption}</figcaption>}
        </figure>
      )
    }
  };
  return (
    <Redactor>
      <BlockContent blocks={blocks} serializers={serializers} />
    </Redactor>
  );
};
