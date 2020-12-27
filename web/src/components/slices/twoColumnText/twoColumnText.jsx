import React from 'react';
import { Flex } from 'rebass';
import { Redactor } from '../../atoms/redactor/redactor';
import { ButtonSelector } from '../../organisms/buttonSelector';
import { configProps } from '../../../utility/helpers';
import ScrollAnimation from 'react-animate-on-scroll';

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
      width={[1, null, data.columnWidths === '3/5' ? 3 / 5 : 1 / 2]}
      flexDirection="column"
      alignItems="center">
      <ScrollAnimation animateIn="fadeInLeft" animateOnce>
        <Redactor dangerouslySetInnerHTML={{ __html: data.children[0].redactor }} />
        {data.children[0].buttons && <ButtonSelector data={data.children[0].buttons} />}
      </ScrollAnimation>
    </Flex>
    <Flex
      flexDirection="column"
      justifyContent="center"
      px={5}
      className="column"
      width={[1, null, data.columnWidths === '3/5' ? 2 / 5 : 1 / 2]}
      pt={[5, null, 0]}>
      <ScrollAnimation animateIn="fadeInRight" animateOnce>
        <Redactor dangerouslySetInnerHTML={{ __html: data.children[1].redactor }} />
        {data.children[1].buttons && <ButtonSelector data={data.children[1].buttons} />}
      </ScrollAnimation>
    </Flex>
  </Flex>
);
