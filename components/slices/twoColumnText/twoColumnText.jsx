import React from 'react';
import { Flex } from 'rebass';
import { Redactor } from '../../atoms/redactor/redactor';
import { ButtonSelector } from '../../organisms/buttonSelector';
import { configProps } from '../../../utils/helpers';
import ScrollAnimation from 'react-animate-on-scroll';
import { SanityBlockContent } from '../../atoms/blockContent';

export const TwoColumnText = ({ data }) => (
  <Flex
    className="two-column-text"
    width={1}
    flexDirection={['column', null, 'row']}
    maxWidth={data.maxWidth || 1120}
    mx="auto"
    sx={{
      '.button': {
        marginLeft: ['auto', null, 0],
        marginRight: ['auto', null, 0],
        marginTop: 24
      }
    }}
    {...(data.spacings && data.spacings.length && configProps(data.spacings[0]))}>
    <Flex
      px={5}
      className="column"
      width={[1, null, data.layout === 'sixtyfourty' ? 3 / 5 : 1 / 2]}
      flexDirection="column"
      alignItems="center">
      <ScrollAnimation animateIn="fadeInLeft" animateOnce>
        <SanityBlockContent
          blocks={data.leftColumn.copy}
          serializers={{
            types: {
              figure: (props) => (
                <figure data-language={props.node.language}>
                  <code>{props.node.code}</code>
                </figure>
              )
            }
          }}
        />
        {/* {data.buttons && <ButtonSelector data={data.leftColumn.buttons} />} */}
      </ScrollAnimation>
    </Flex>
    <Flex
      flexDirection="column"
      justifyContent="center"
      px={5}
      className="column"
      width={[1, null, data.layout === 'sixtyfourty' ? 2 / 5 : 1 / 2]}
      pt={[5, null, 0]}>
      <ScrollAnimation animateIn="fadeInRight" animateOnce>
      <SanityBlockContent
          blocks={data.rightColumn.copy}
          serializers={{
            types: {
              figure: (props) => (
                <figure data-language={props.node.language}>
                  <code>{props.node.code}</code>
                </figure>
              )
            }
          }}
        />
        {data.buttons && <ButtonSelector data={data.buttons} />}
      </ScrollAnimation>
    </Flex>
  </Flex>
);
